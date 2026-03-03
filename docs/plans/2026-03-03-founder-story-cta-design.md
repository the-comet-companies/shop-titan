# Founder Story CTA Section — Design Doc

**Date:** 2026-03-03
**Status:** Approved

## Goal

Add a full section to the home page that drives trust/brand credibility by surfacing the founder origin story and routing users to `/about`. Secondary benefit: draws attention to the "Building Shop Titan" video on the About page.

## Placement

Between `<ShowcaseSection />` (testimonials) and `<ComingSoonSection />` in `apps/marketing/app/page.tsx`.

The trust arc: *other shops trust it → here's the person who built it and why → what's coming next.*

## Design: Cinematic Founder Feature (Option A)

### Visual Treatment

- **Background:** dark (`bg-charcoal` / `#1D1D1F`) — creates a strong visual break between the gray Showcase section before it and the light ComingSoon section after it
- **Layout:** two equal columns on desktop (`lg:grid-cols-2`), stacked on mobile (copy first, thumbnail below)
- **Padding:** consistent with other full sections (`py-24 md:py-32`)

### Left Column — Copy

- Eyebrow label: `"The Origin"` — styled per design system (`px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase`)
- Headline: `"Built by someone who lived it."` — large, bold, white (`text-4xl md:text-6xl font-bold text-white`)
- Tease copy: 2 sentences adapted from the About page narrative (built over 15 years, stress from lack of visibility, built to run a large shop from anywhere)
- Founder attribution: Michael Monfared, Founder & CEO — small name + title in muted white
- CTA button: `"Our Story →"` linking to `/about` — ghost/outline style matching existing site button patterns

### Right Column — Video Thumbnail Card

- Static card, no autoplay — visual implies video content
- Dark background with radial gradient overlay
- Play button overlay (decorative, not functional independently — the card itself is a link to `/about`)
- Bottom-left label: `"Watch the Film"` badge + `"Building Shop Titan"` title
- Treatment mirrors the existing About page video placeholder exactly
- Rounded card with border: `rounded-2xl overflow-hidden border border-white/10 shadow-2xl`

### Animations

- Per design system: `whileInView` + `viewport={{ once: true }}`
- Left column: `initial={{ opacity: 0, x: -24 }}` → `animate={{ opacity: 1, x: 0 }}`
- Right column: `initial={{ opacity: 0, x: 24 }}` → `animate={{ opacity: 1, x: 0 }}`
- Staggered delays: eyebrow 0s, headline 0.1s, copy 0.2s, attribution 0.3s, button 0.4s

## New File

`apps/marketing/components/sections/FounderStorySection.tsx`

## Changes to Existing Files

- `apps/marketing/app/page.tsx` — import and insert `<FounderStorySection />` between `<ShowcaseSection />` and `<ComingSoonSection />`
