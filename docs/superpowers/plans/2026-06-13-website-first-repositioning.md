# Website-First Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Website Building the primary product and the FileMaker System a supporting second product across `apps/marketing`, without touching the hero, the feature section, or the paid-traffic landers.

**Architecture:** Copy + information-architecture pass only. No new components, no layout/redesign. Edits are string/data changes to existing files. Reuse all existing UI.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind. Dev server runs on port 3001 (`apps/marketing`). No unit tests exist for marketing copy, so each task verifies with `npm run lint` plus a visual check on the running dev server, then commits.

**Spec:** `docs/superpowers/specs/2026-06-13-website-first-repositioning-design.md`

**Working branch:** `feat/website-first-repositioning` (already created; the spec commit is on it).

**Out of scope (do NOT edit):** `components/sections/HeroSection.tsx`, `components/sections/PathSelectionSection.tsx`, and anything under `/scheduling`, `/get-started`, `/hire`.

**Conventions in this codebase:** Note the em-dash style used in existing copy is a hyphen surrounded by spaces (`  - `), not a real `—`. Match it. All copy uses straight prose; apostrophes in JSX text are written as `&apos;`.

---

## Phase 1 — Front door

### Task 1: Global SEO / metadata website-first

**Files:**
- Modify: `apps/marketing/app/layout.tsx`

- [ ] **Step 1: Flip the title, description, OG, and Twitter metadata**

In `apps/marketing/app/layout.tsx`, replace the `title.default` value:

```
'Shop Titan | Print Shop Management System & Ecommerce Platform'
```
with:
```
'Shop Titan | Ecommerce Storefront & Print Shop Management System'
```

Replace the top-level `description` value:
```
'Pre-built FileMaker system and ecommerce storefront for print shops. Proven in a $1M+ operation  - deploy in weeks, not months. Quotes, orders, inventory, production, and online ordering.'
```
with:
```
'A branded ecommerce storefront for print and decoration shops  - customers find you and order online without a phone call. Add a pre-built FileMaker system to run quotes, orders, inventory, and production. Proven in a $1M+ shop.'
```

Replace the `openGraph.title`:
```
'Shop Titan | Print Shop Management System & Ecommerce Platform'
```
with:
```
'Shop Titan | Ecommerce Storefront & Print Shop Management System'
```

Replace the `openGraph.description`:
```
'Pre-built FileMaker system and ecommerce storefront for print shops. Proven in a $1M+ operation  - deploy in weeks, not months.'
```
with:
```
'A branded ecommerce storefront for print shops  - customers order online. Add a pre-built FileMaker system to run operations. Proven in a $1M+ shop.'
```

Replace the `twitter.title`:
```
'Shop Titan | Print Shop Management System'
```
with:
```
'Shop Titan | Ecommerce Storefront for Print Shops'
```

Replace the `twitter.description`:
```
'Pre-built FileMaker system and ecommerce storefront for print shops. Deploy in weeks, not months.'
```
with:
```
'A branded storefront for print shops  - customers order online. Add a FileMaker system to run operations. Deploy in weeks.'
```

- [ ] **Step 2: Reorder the keywords array (ecommerce terms first)**

Replace the entire `keywords` array:
```ts
keywords: [
    'print shop management system',
    'filemaker for print shops',
    'screen printing software',
    'apparel decorator management',
    'print shop ecommerce',
    'order management for printers',
    'screen printing inventory',
    'production automation',
    'custom apparel online store',
    'print shop CRM',
],
```
with:
```ts
keywords: [
    'custom apparel online store',
    'print shop ecommerce',
    'online ordering for printers',
    'ecommerce for screen printers',
    'print shop management system',
    'filemaker for print shops',
    'screen printing software',
    'apparel decorator management',
    'screen printing inventory',
    'print shop CRM',
],
```

- [ ] **Step 3: Reorder structured-data descriptions (website-first)**

In the JSON-LD `@graph`, replace the Organization `"description"`:
```
"Pre-built FileMaker systems and ecommerce storefronts for print shops. Proven in a $1M+ screen printing operation."
```
with:
```
"Branded ecommerce storefronts and pre-built FileMaker systems for print shops. Proven in a $1M+ screen printing operation."
```

Replace the SoftwareApplication `"description"`:
```
"Complete print shop management system  - FileMaker-based operations platform with integrated ecommerce storefront."
```
with:
```
"Ecommerce storefront for print shops with online ordering, plus an integrated FileMaker operations platform for quotes, orders, inventory, and production."
```

Replace the Organization `"knowsAbout"` array:
```json
"knowsAbout": [
    "FileMaker Development",
    "Print Shop Management",
    "Screen Printing Software",
    "Apparel Decoration Operations",
    "Ecommerce for Print Shops"
]
```
with:
```json
"knowsAbout": [
    "Ecommerce for Print Shops",
    "Online Ordering for Apparel Decorators",
    "Print Shop Management",
    "FileMaker Development",
    "Screen Printing Software",
    "Apparel Decoration Operations"
]
```

- [ ] **Step 4: Lint**

Run: `cd "apps/marketing"; npm run lint`
Expected: no new errors (warnings unrelated to this file are acceptable).

- [ ] **Step 5: Visual check**

The dev server runs on http://localhost:3001. Open it, View Source, and confirm the `<title>` and `<meta name="description">` now lead with the storefront/ecommerce wording.

- [ ] **Step 6: Commit**

```bash
git add apps/marketing/app/layout.tsx
git commit -m "feat(seo): website-first global metadata and structured data"
```

---

### Task 2: /products hero copy

**Files:**
- Modify: `apps/marketing/app/products/page.tsx` (hero H1 + sub-paragraph, around lines 128-143)

- [ ] **Step 1: Replace the hero H1**

Replace:
```
Two systems for print shops. Use one, or run them connected.
```
with:
```
Get your shop online and taking orders. Add the FileMaker back office when you&apos;re ready.
```

- [ ] **Step 2: Replace the hero sub-paragraph**

Replace:
```
Shop Titan offers two products: a branded website for taking orders online, and a FileMaker system for running the shop floor. Each works on its own. Together they run the entire business on one platform.
```
with:
```
Shop Titan starts with a branded website that takes orders online  - customers find you, configure their job, and order without a phone call. Add the FileMaker system to run quotes, inventory, and production on the same platform when you&apos;re ready.
```

(Leave the two product cards, "Pick your path", final CTA, and FAQ sections unchanged — they already read website-first.)

- [ ] **Step 3: Lint**

Run: `cd "apps/marketing"; npm run lint`
Expected: no new errors.

- [ ] **Step 4: Visual check**

Open http://localhost:3001/products and confirm the hero now leads with the website message and the page still renders without runtime errors.

- [ ] **Step 5: Commit**

```bash
git add apps/marketing/app/products/page.tsx
git commit -m "feat(products): lead products hero with website-first message"
```

---

### Task 3: Rebalance testimonials toward the website product

**Files:**
- Modify: `apps/marketing/components/sections/ShowcaseSection.tsx` (the `testimonials` array, lines 13-44)

- [ ] **Step 1: Replace two operations-only testimonials with website-oriented ones**

Replace the second testimonial object (Michael Chen / Elite Screen Printing):
```ts
{
    quote: "The single source of truth concept is revolutionary. No more hunting for information across spreadsheets  - everything is exactly where you expect it.",
    author: "Michael Chen",
    role: "Production Manager",
    company: "Elite Screen Printing",
},
```
with:
```ts
{
    quote: "Customers used to call and email for every quote. Now they configure the job and order right on our site  - we wake up to orders already in the queue.",
    author: "Marcus Reed",
    role: "Owner",
    company: "Northside Print Co.",
},
```

Replace the fifth testimonial object (Tanya Rhodes / FastTurn Apparel):
```ts
{
    quote: "Rush job coordination used to be pure chaos. Now it's a few clicks and everyone knows exactly what to do. Night and day difference.",
    author: "Tanya Rhodes",
    role: "Shop Manager",
    company: "FastTurn Apparel",
},
```
with:
```ts
{
    quote: "We finally show up on Google. New customers find the site, order online, and pay  - all before we&apos;ve picked up the phone.",
    author: "Priya Nair",
    role: "Founder",
    company: "Riverline Apparel",
},
```

Note: this is inside a `.ts` string array, not JSX. Use a plain apostrophe `'` inside the double-quoted string (`we've`), NOT `&apos;`. Corrected value for the second quote:
```ts
    quote: "We finally show up on Google. New customers find the site, order online, and pay  - all before we've picked up the phone.",
```

(Leave Sarah Martinez, Jessica Williams, and David Park as-is — FileMaker is still a real product and keeping operations proof is intentional.)

- [ ] **Step 2: Lint**

Run: `cd "apps/marketing"; npm run lint`
Expected: no new errors.

- [ ] **Step 3: Visual check**

Open http://localhost:3001 and scroll to the "Real shops. Real results." section. Advance the carousel and confirm the two new website-oriented quotes appear and rotate correctly.

- [ ] **Step 4: Commit**

```bash
git add apps/marketing/components/sections/ShowcaseSection.tsx
git commit -m "feat(showcase): rebalance testimonials toward the website product"
```

---

## Phase 2 — Deep pages

### Task 4: Pricing data — make the website the default starting point

**Files:**
- Modify: `apps/marketing/lib/pricing-data.ts` (the `website` track object ~lines 72-98; the `faqs` array ~lines 256-289)

The `InteractivePricing` component already orders columns Website → FileMaker → Both, and the `tracks` array already starts with the website track. Two small data edits remain.

- [ ] **Step 1: Add a "Start Here" badge to the website track**

In the `website` track object (the one with `id: 'website'`, `name: 'Website Only'`), add a `badge` field right after the `tagline` line so it reads:

```ts
{
    id: 'website',
    name: 'Website Only',
    tagline: 'An SEO-optimized storefront that brings customers in and converts them.',
    badge: 'Start Here',
    cardFeatures: [
```

(The `both` track keeps its existing `badge: 'Most Popular'`. The `Track` interface already declares `badge?: string`, so no type change is needed.)

- [ ] **Step 2: Add a website-first FAQ as the first entry**

In the `faqs` array, insert this as the new first element (before the existing "What is FileMaker and why do I need it?" entry):

```ts
{
    question: 'Do I have to start with the website?',
    answer: 'Most shops start with the website  - a branded storefront with online ordering is the fastest way to bring customers in and take orders without the phone. You can also start with the FileMaker back office alone, or take both connected. Start with whichever is your bottleneck and add the other later; your setup investment carries over.',
},
```

- [ ] **Step 3: Lint**

Run: `cd "apps/marketing"; npm run lint`
Expected: no new errors.

- [ ] **Step 4: Visual check**

Open http://localhost:3001/pricing. Confirm the "Website Only" card shows a "Start Here" badge, the "Website + FileMaker" card still shows "Most Popular", and the new FAQ appears first in the FAQ list.

- [ ] **Step 5: Commit**

```bash
git add apps/marketing/lib/pricing-data.ts
git commit -m "feat(pricing): mark website as the default starting track"
```

---

### Task 5: Reframe the FileMaker platform pages as the back office you add

**Files:**
- Modify: `apps/marketing/app/platform/filemaker-system/page.tsx` (hero eyebrow ~line 94; cross-link paragraph ~lines 200-209)

The storefront (`ecommerce-storefront`) and bundle (`complete-system`) pages are already website-aligned and need no changes. The `production-automation` ("Production Module") and `inventory-management` ("Inventory Module") pages already use module-style eyebrows that read as sub-components, so they are left as-is. Only `filemaker-system` uses the competing eyebrow "The Platform".

- [ ] **Step 1: Change the filemaker-system hero eyebrow**

In `apps/marketing/app/platform/filemaker-system/page.tsx`, in the hero `<motion.span>` eyebrow, replace the text:
```
The Platform
```
with:
```
Back Office System
```

- [ ] **Step 2: Add a storefront cross-link and back-office framing**

Find the cross-link paragraph near the end of the DEFINITION section (currently begins "Looking for a complete system including an online storefront?"). Replace the whole `<motion.p ...> ... </motion.p>` block's inner content:

```tsx
                            Looking for a complete system including an online storefront?{' '}
                            <Link href="/platform/complete-system" className="underline hover:no-underline">
                                See our complete platform →
                            </Link>
                            {' '}If you&apos;re evaluating whether to{' '}
                            <Link href="/hire/filemaker-developer" className="underline hover:no-underline">
                                hire a FileMaker developer
                            </Link>, see why deploying a proven system is faster.
```

with:

```tsx
                            The FileMaker system is the back office behind your Shop Titan website  - and it runs on its own too. Looking for the storefront itself?{' '}
                            <Link href="/platform/ecommerce-storefront" className="underline hover:no-underline">
                                See the website system →
                            </Link>
                            {' '}Want both connected as one platform?{' '}
                            <Link href="/platform/complete-system" className="underline hover:no-underline">
                                See the complete system →
                            </Link>
                            {' '}If you&apos;re evaluating whether to{' '}
                            <Link href="/hire/filemaker-developer" className="underline hover:no-underline">
                                hire a FileMaker developer
                            </Link>, see why deploying a proven system is faster.
```

- [ ] **Step 3: Lint**

Run: `cd "apps/marketing"; npm run lint`
Expected: no new errors.

- [ ] **Step 4: Visual check**

Open http://localhost:3001/platform/filemaker-system. Confirm the hero eyebrow now reads "Back Office System" and the definition section has working links to the storefront and complete-system pages.

- [ ] **Step 5: Commit**

```bash
git add apps/marketing/app/platform/filemaker-system/page.tsx
git commit -m "feat(platform): frame FileMaker system as the back office you add"
```

---

### Task 6: Homepage narrative audit

**Files (read first, then edit only if they frame operations as THE product over the website):**
- Read: `apps/marketing/components/sections/PainPointSection.tsx`
- Read: `apps/marketing/components/sections/BenefitsSection.tsx`
- Read: `apps/marketing/components/sections/IndustriesSection.tsx`
- Read: `apps/marketing/components/sections/FounderStorySection.tsx`
- Read: `apps/marketing/components/sections/CtaSection.tsx`

- [ ] **Step 1: Read each section and look for product-hierarchy conflicts**

For each file, scan the headline/subhead and any CTA copy. You are looking ONLY for language that presents operations / "single source of truth" / "run the shop floor" as *the* product, in a way that contradicts the website being primary. Pain points describing shop chaos are fine (they are problems, not product claims). Do not rewrite tone or restructure.

- [ ] **Step 2: Apply minimal copy edits where a conflict exists**

If (and only if) a section's headline or CTA frames operations as the headline product, adjust that single line so the website reads as the primary product and the back office as the add-on. Keep edits to one or two lines per file. If a file has no conflict, make no change to it. Record in the commit message which files changed and which were verified clean.

- [ ] **Step 3: Lint**

Run: `cd "apps/marketing"; npm run lint`
Expected: no new errors.

- [ ] **Step 4: Visual check**

Open http://localhost:3001 and scroll the full homepage. Confirm the narrative now reads website-first end to end (hero and feature section excepted, which are intentionally unchanged) and nothing regressed.

- [ ] **Step 5: Commit**

```bash
git add -A apps/marketing/components/sections
git commit -m "chore(home): audit homepage narrative for website-first consistency"
```

---

## Final verification

- [ ] **Build passes**

Run: `cd "apps/marketing"; npm run build`
Expected: build completes with no errors.

- [ ] **Whole-site read-through**

Walk http://localhost:3001 plus `/products`, `/pricing`, `/platform/ecommerce-storefront`, `/platform/filemaker-system`, `/platform/complete-system`. Confirm: every surface (except the intentionally-untouched hero and feature section) presents the website as the main product and FileMaker as the back office you can add, and FileMaker is still clearly purchasable on its own.

---

## Self-review notes (author)

- **Spec coverage:** §1 → Task 1; §2 (`/products`) → Task 2; §3 (ShowcaseSection) → Task 3; §4 (pricing data) → Task 4; §5 (`/platform/*`) → Task 5 (storefront/complete-system verified already-aligned; production/inventory eyebrows already module-style; only filemaker-system reframed); §6 (homepage audit) → Task 6.
- **Type consistency:** `badge?: string` already exists on the `Track` interface, so Task 4 Step 1 needs no interface change. `TrackId`/`DeliveryId` untouched.
- **Placeholder scan:** Task 6 is an audit task by design — its edits are conditional, with explicit criteria and a "make no change if clean" instruction, not a vague placeholder.
- **Em-dash convention:** all new copy uses the existing `  - ` spaced-hyphen style; `&apos;` used in JSX text, plain `'` inside `.ts` string literals (called out in Task 3).
