import fs from "fs";
import path from "path";
import Footer from "@/components/Footer";
import IconLibraryInteractions from "@/components/sections/IconLibraryInteractions";
import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Shop Titan Icon Library",
    description: "Browse the Shop Titan icon set and click any icon to copy its ready-to-paste HTML snippet.",
    path: "/icon-library",
    type: "page",
});

// The library markup, styles, and icon-font CSS live in lib/icon-library-source.html
// (the original self-contained page). We extract its <style> and <body> at build
// time and wrap them with the site navbar (root layout) and footer.
const source = fs.readFileSync(
    path.join(process.cwd(), "lib", "icon-library-source.html"),
    "utf8",
);

const styleRaw = source.match(/<style>([\s\S]*?)<\/style>/)![1];

// The site navbar shows "· Icon Library" beside the logo on this route, so the
// library's own <header> (with its duplicate h1) becomes a plain in-body tools
// block: search bar, dark-preview toggle, and the how-to hint paragraph.
const bodyRaw = source
    .match(/<body>([\s\S]*?)<script>/)![1]
    .replace(/<h1>[\s\S]*?<\/h1>\s*/, "")
    .replace("<header>", '<div class="lib-tools">')
    .replace("</header>", "</div>");

// Scope the gallery-chrome rules under .iconlib so element selectors (body,
// header, h1) and generic class names (.grid, .card) can't restyle the site
// navbar/footer, which share this document. Icon-font rules stay untouched.
function scopeChromeCss(css: string): string {
    const marker = "/* ===== gallery chrome ===== */";
    const idx = css.indexOf(marker);
    const icons = css.slice(0, idx);
    const chrome = css
        .slice(idx)
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/(^|\})([^@{}]+)\{/g, (_m, brace: string, selector: string) => {
            const scoped = selector
                .split(",")
                .map((s) => {
                    const sel = s.trim();
                    if (!sel || sel.startsWith(":root")) return sel;
                    if (sel === "body") return ".iconlib";
                    if (sel === "*") return ".iconlib *";
                    return ".iconlib " + sel;
                })
                .filter(Boolean)
                .join(",");
            return brace + "\n" + scoped + "{";
        });
    // The former sticky header now flows in the body, aligned with the grid.
    return icons + chrome + "\n.iconlib .lib-tools{max-width:1200px;margin:0 auto;padding:28px 24px 0}";
}

const scopedStyle = scopeChromeCss(styleRaw);

export default function IconLibraryPage() {
    return (
        <>
            <div className="pt-20 min-h-screen">
                <style dangerouslySetInnerHTML={{ __html: scopedStyle }} />
                <div className="iconlib" dangerouslySetInnerHTML={{ __html: bodyRaw }} />
                <IconLibraryInteractions />
            </div>
            <Footer />
        </>
    );
}
