# Website-First Repositioning — Design Spec

**Date:** 2026-06-13
**Status:** Approved (pending spec review)
**Scope:** `apps/marketing`
**Approach:** Messaging + information-architecture pass (no redesign). Reuse all existing components and layouts; change copy, ordering, and cross-links only.

---

## Goal

Make **Website Building** the primary product across the marketing site and reframe the **FileMaker System** as a supporting second product. Today the homepage feature section (`PathSelectionSection`) and `/products` already lead with the website, but the global metadata, several deeper pages, and homepage social proof still lead with the older FileMaker/operations message. This spec brings the rest of the site in line.

## Positioning through-line

- **Primary product — Website Building.** Single promise everywhere: *get your decoration shop online and taking orders.* Customers find the shop, configure their job, and order without a phone call. Branded, decoration-aware, SEO-ready.
- **Supporting second product — FileMaker System.** Always introduced *after* the website and framed as "the back office you add" (quotes, orders, inventory, production, reporting). Still buyable on its own and still gets full pages and a pricing column — but never the headline.
- **Best value — Website + FileMaker.** The whole shop on one platform; web orders flow straight into production.

## Out of scope (explicitly not touched)

- **Hero** (`components/sections/HeroSection.tsx`) — left exactly as-is per direction.
- **Feature section** (`components/sections/PathSelectionSection.tsx`, the `#solutions` block) — already website-first; the model the rest of the site should match, not something to change.
- **Paid-traffic landers** — `/scheduling`, `/get-started/*`, `/hire/*`. These deliberately target FileMaker/operations ad keywords and keep their own positioning.

---

## Per-surface changes

### 1. Global SEO / metadata — `app/layout.tsx`  *(largest real gap)*

Currently FileMaker-first ("Print Shop Management System & Ecommerce Platform"; "Pre-built FileMaker system and ecommerce storefront…").

- **Title `default`** → lead with the storefront. Target shape: `Shop Titan | Ecommerce Storefront & Print Shop Management`.
- **`description`** → reorder so the website comes first and FileMaker reads as the add-on. e.g. "A branded ecommerce storefront for print and decoration shops — customers find you and order online. Add a pre-built FileMaker system to run quotes, orders, inventory, and production. Proven in a $1M+ shop."
- **`openGraph.title` / `openGraph.description`** → same website-first reorder.
- **`twitter.title` / `twitter.description`** → same.
- **`keywords`** → move ecommerce/online-store/storefront terms to the front of the array; keep FileMaker terms further down.
- **Structured data (`@graph`)** → Organization `description`, SoftwareApplication `description`, and `knowsAbout` array all reordered website-first. Keep `operatingSystem: "Web, FileMaker"` factually but lead descriptions with the storefront.

### 2. `/products` — `app/products/page.tsx`

Already website-first (Website card first). Light copy polish only:

- **Page hero H1** — replace the neutral "Two systems for print shops. Use one, or run them connected." with a website-led line, e.g. "Get your shop online and taking orders. Add the FileMaker back office when you're ready."
- **Hero sub-paragraph** — lead with the website product, then mention FileMaker as the second/back-office product.
- Keep both product cards and the "Pick your path" / FAQ sections as-is (they already read correctly).

### 3. Social proof — `components/sections/ShowcaseSection.tsx`

All five testimonials are operations-flavored ("single source of truth," pricing matrices, scaling 5→20). Rebalance so the primary product is represented:

- Replace **1–2** of the five quotes with website-oriented proof (e.g. customers placing orders online without a phone call; getting found on Google driving new business). Keep the remaining FileMaker/operations quotes — that product is still real.
- No structural/layout changes to the carousel.

### 4. Pricing data — `lib/pricing-data.ts`

The `InteractivePricing` component already orders columns **Website Only → FileMaker Only → Website + FileMaker (Best Value)**, so the component needs no change. Verify and, if needed, adjust the data only:

- `tracks` array order leads with the Website track.
- Badges sit on the Website track and/or the "Both" track (not FileMaker-only).
- Pricing `hero.headline` / `hero.subheadline` read website-first.
- FAQ entries don't frame FileMaker as the default starting point.

Expect small data edits; the `/pricing` route metadata ("Website, FileMaker System, or Both") is already fine.

### 5. `/platform/*` — framing & cross-links (no restructuring)

Five pages. Establish a consistent hierarchy through eyebrow/intro/CTA copy and cross-links:

- `platform/ecommerce-storefront` — the flagship/primary platform page. Confirm framing and CTAs position it as the main product.
- `platform/filemaker-system`, `platform/production-automation`, `platform/inventory-management` — capability pages of the FileMaker back office you *add* to the website. Add a consistent framing line/eyebrow to that effect, cross-link back to the storefront and/or complete-system, and tone down any "this is THE system" language that competes with the website as headline.
- `platform/complete-system` — "Website + FileMaker," best value; the two products connected.

### 6. Homepage narrative audit (non-hero, non-feature)

Quick read of `PainPointSection` / `PainPoint3D`, `BenefitsSection`, `IndustriesSection`, `FounderStorySection`, `CtaSection` to catch any copy that frames operations as *the* product above the website. Expect minor or no changes; confirmed during implementation. Website-themed sections (`WhyWebsiteSection`, `WebsiteSecretSection`, `WebsiteEverythingSection`, `WebsiteFeaturesGridSection`) are already aligned.

---

## Phasing

**Phase 1 — Front door (highest visibility, lowest risk)**
1. `app/layout.tsx` metadata + structured data.
2. `app/products/page.tsx` hero copy.
3. `components/sections/ShowcaseSection.tsx` testimonials.

**Phase 2 — Deep pages**
4. `lib/pricing-data.ts` verification/edits.
5. `/platform/*` framing & cross-links.
6. Homepage narrative audit.

---

## Success criteria

- A first-time visitor reading the metadata/SERP snippet, `/products`, `/pricing`, and any `/platform` page comes away understanding the **website** as the main product and FileMaker as the back office they can add.
- No surface (outside the explicit out-of-scope list) leads with "single source of truth"/operations as the headline product.
- FileMaker remains clearly purchasable on its own (cards, a pricing column, its own pages) — demoted in emphasis, not removed.
- No layout/component redesign; `next lint` passes and the site builds.

## Risks / notes

- Copy-only changes carry low technical risk; main risk is tone drift. Keep the existing brand voice (professional, plain, empathetic).
- The hero will still say "single source of truth" by design — accept this intentional tension; the rest of the page recontextualizes it.
- `/platform` FileMaker pages double as SEO landing pages for FileMaker keywords; reframe positioning without stripping the FileMaker terms that earn that traffic.
