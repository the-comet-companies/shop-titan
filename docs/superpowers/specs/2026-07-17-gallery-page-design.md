# Gallery Page Design

Date: 2026-07-17. Approved by RN.

## Goal

A dedicated `/gallery` route showing full walkthroughs of real client
storefronts (screenshots page by page), separate from `/portfolio`, which
stays a one-card-per-project overview. New client Fresh Merch debuts here.

## Scope

- New route `app/(pages)/gallery/` (page + layout for metadata).
- Two project showcases: DTLA Print (11 shots, Live link to dtlaprint.com)
  and Fresh Merch (6 shots, no Live link yet).
- Each showcase: name, one-line blurb, optional Live link, then a grid.
  Homepage shot renders large; remaining shots in a responsive card grid
  with short captions. No numbering on cards.
- Lightbox: click a shot for a fullscreen view (dark overlay, caption,
  prev/next, Esc/backdrop close). Tall full-page captures scroll vertically
  inside the lightbox.
- Assets: originals converted to WebP (q82) under
  `public/gallery/dtla-print/` and `public/gallery/fresh-merch/` with
  kebab-case names (37MB PNG -> 3.3MB WebP). Original PNGs removed from repo.
- SEO: unique title/meta, breadcrumb + ImageGallery JSON-LD, descriptive
  alts, entry in `app/sitemap.ts`, link from `/portfolio`. Header nav
  unchanged for now.

## Out of scope (later, one by one per RN)

Placing these images on core pages (homepage, /print-shop-website, product
pages) and adding Fresh Merch to /portfolio.

## Verification

`next build` passes; page reviewed in browser (light + dark) with
screenshots to RN before any push.
