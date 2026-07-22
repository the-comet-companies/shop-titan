"""Regenerate public/fonts/material-symbols-outlined-subset.woff2.

Scans the app for every Material Symbols icon name in use (both
`icon: 'name'` data fields and inline <span class="material-symbols-outlined">name</span>),
resolves each name through the font's ligature table (this catches alias
names like "people" whose glyph is stored under another name), and subsets
the full Google variable font down to exactly those glyphs with HarfBuzz.

Run whenever a page adds an icon that renders as raw text:
    pip install fonttools brotli uharfbuzz
    python scripts/subset-icons.py

The full source font (~10MB) downloads to your temp dir on first run.
"""
import glob
import io
import os
import re
import sys
import tempfile
import urllib.request

import uharfbuzz as hb
from fontTools.ttLib import TTFont

MARKETING = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(MARKETING, "public", "fonts", "material-symbols-outlined-subset.woff2")
FULL_TTF = os.path.join(tempfile.gettempdir(), "MaterialSymbolsOutlined-full.ttf")
FONT_URL = (
    "https://raw.githubusercontent.com/google/material-design-icons/master/"
    "variablefont/MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.ttf"
)
LETTERS = "abcdefghijklmnopqrstuvwxyz_0123456789"


def collect_icon_names():
    names = set()
    pat_data = re.compile(r"""icon:\s*['"]([a-z_0-9]+)['"]""")
    pat_inline = re.compile(r"material-symbols-outlined[^>]*>\s*\{?['\"]?([a-z_0-9]+)['\"]?\}?\s*<")
    for ext in ("tsx", "ts", "jsx", "js"):
        for f in glob.glob(os.path.join(MARKETING, "**", f"*.{ext}"), recursive=True):
            if "node_modules" in f or ".next" in f:
                continue
            src = open(f, encoding="utf-8", errors="ignore").read()
            names.update(pat_data.findall(src))
            names.update(pat_inline.findall(src))
    return sorted(n for n in names if len(n) > 2 and n not in ("name", "icon"))


def ligature_map(font):
    """text sequence -> target glyph, from the font's GSUB liga lookups."""
    cmap = font.getBestCmap()
    char_of_glyph = {g: chr(c) for c, g in cmap.items()}
    seq2glyph = {}
    for lookup in font["GSUB"].table.LookupList.Lookup:
        for st in lookup.SubTable:
            if lookup.LookupType == 7:  # Extension wrapper
                st = st.ExtSubTable
            if not hasattr(st, "ligatures"):
                continue
            for first, ligs in st.ligatures.items():
                for lig in ligs:
                    chars = [char_of_glyph.get(first, "?")] + [
                        char_of_glyph.get(c, "?") for c in lig.Component
                    ]
                    seq2glyph["".join(chars)] = lig.LigGlyph
    return seq2glyph


def main():
    names = collect_icon_names()
    print(f"{len(names)} icon names in use")

    if not os.path.exists(FULL_TTF):
        print("downloading full Material Symbols font...")
        urllib.request.urlretrieve(FONT_URL, FULL_TTF)

    font = TTFont(FULL_TTF)
    seq2glyph = ligature_map(font)
    unresolved = [n for n in names if n not in seq2glyph]
    if unresolved:
        print("WARNING: not real icon names (will render as text):", unresolved)
    targets = {seq2glyph[n] for n in names if n in seq2glyph}
    gid_of = {g: i for i, g in enumerate(font.getGlyphOrder())}

    blob = hb.Blob(open(FULL_TTF, "rb").read())
    inp = hb.SubsetInput()
    # NO_LAYOUT_CLOSURE is the key: without it, a-z + liga reaches every
    # icon in the font and the subset balloons to the full 10MB.
    inp.flags = hb.SubsetFlags.NO_LAYOUT_CLOSURE | hb.SubsetFlags.NO_HINTING
    for ch in LETTERS:
        inp.unicode_set.add(ord(ch))
    for g in targets:
        inp.glyph_set.add(gid_of[g])
    raw = bytes(hb.subset(hb.Face(blob), inp).blob.data)

    # verify every name shapes to exactly one glyph before overwriting
    vfont = hb.Font(hb.Face(hb.Blob(raw)))
    bad = []
    for n in names:
        if n in (unresolved or []):
            continue
        buf = hb.Buffer()
        buf.add_str(n)
        buf.guess_segment_properties()
        hb.shape(vfont, buf, {"liga": True})
        if len(buf.glyph_infos) != 1:
            bad.append(n)
    if bad:
        print("FAILED to shape, subset NOT written:", bad)
        sys.exit(1)

    sub = TTFont(io.BytesIO(raw))
    sub.flavor = "woff2"
    sub.save(OUT)
    print(f"OK: {OUT} ({os.path.getsize(OUT) // 1024}KB, {len(targets)} icon glyphs)")


if __name__ == "__main__":
    main()
