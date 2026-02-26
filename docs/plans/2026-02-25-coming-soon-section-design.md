# Coming Soon Section — Design

**Date:** 2026-02-25
**Page placement:** Before `CtaSection` (bottom of homepage)
**Component:** `apps/marketing/components/sections/ComingSoonSection.tsx`

---

## Goal

Surface upcoming integrations and features with an email notification capture. Creates excitement about the roadmap while collecting early-interest leads.

---

## Visual Design

**Background:** Dark (`bg-[#0A0A0A]`) — high-contrast against the light sections above. Subtle animated gradient orb accents consistent with other dark sections. `py-24 md:py-32` padding, `max-w-7xl mx-auto`.

### Header (centered)
- Eyebrow pill: `EXTRA` — standard design system style (`px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase`)
- Headline: `"What's Coming."` — white, `text-4xl sm:text-5xl md:text-6xl font-bold`
- Subtext: `"Be the first to know when these features ship."` — `text-secondary-text`

### Email Form (centered, below header)
- Inline layout: `rounded-full` email input + `rounded-full bg-primary` "Notify Me" button
- **Submit behaviour:** UI-only. On submit, form fades out and is replaced with a success state: checkmark icon + `"You're on the list."` message
- No backend — pure React state

### Feature Cards (2-column grid)
`grid grid-cols-1 md:grid-cols-2 gap-6` — cards animate in with 0.1s stagger

**Card style:** `bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-xl`
Hover: `hover:border-primary/30 hover:bg-white/8 transition-all duration-300` with subtle primary glow shadow

Each card has:
- `COMING SOON` badge (small pill, top-right corner or inline with title)
- Material Symbols icon (primary color)
- Title + description
- Logo area (see below)

---

## Cards

### 1. WooCommerce Integration
- **Icon:** `shopping_bag` (Material Symbols)
- **Description:** "Connect your WooCommerce store directly to Shop Titan."
- **Logo:** WooCommerce SVG logo (`/images/logos/woocommerce.svg`) — placeholder until asset provided
- **Footnote:** `* Additional time may be required for field mapping`

### 2. Shopify Integration
- **Icon:** `storefront` (Material Symbols)
- **Description:** "Two-way sync between Shopify orders and your Shop Titan workflow."
- **Logo:** Shopify SVG logo (`/images/logos/shopify.svg`) — placeholder until asset provided
- **Footnote:** `* Additional dev time may be required for mapping`

### 3. Design Library
- **Icon:** `palette` (Material Symbols)
- **Description:** "Take your designs, sell them and push them to all the marketplaces."
- **No logo / no footnote**

### 4. eCommerce Feed Management
- **Icon:** `rss_feed` (Material Symbols)
- **Description:** "Easy XML creation and product pushing across all major platforms."
- **Marketplace logo grid (8 logos):**
  | Slot | Platform | File |
  |------|----------|------|
  | 1 | eBay | `/images/logos/ebay.svg` |
  | 2 | Amazon | `/images/logos/amazon.svg` |
  | 3 | Etsy | `/images/logos/etsy.svg` |
  | 4 | Shopify | `/images/logos/shopify.svg` |
  | 5 | WooCommerce | `/images/logos/woocommerce.svg` |
  | 6 | Google Merchant Center | `/images/logos/google-merchant-center.svg` |
  | 7 | Faire | `/images/logos/faire.svg` |
  | 8 | Fashion Go | `/images/logos/fashion-go.svg` |
- **Placeholder:** Until SVGs are provided, render the platform name as a dim text pill styled `bg-white/10 text-white/50 text-xs px-3 py-1 rounded-full`

---

## Animations

- Section header: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`
- Cards stagger: each card `transition={{ delay: index * 0.1 }}`
- Email form success state: form fades out (`opacity: 0`), success message fades in

---

## Logo Swap Strategy

SVG files go in `apps/marketing/public/images/logos/`. Each logo slot renders:
```tsx
// If SVG exists → <Image> component
// Until then → text pill placeholder
```

When real logos are dropped in, no code changes needed — just replace the placeholder files.

---

## Page Integration

Add to `apps/marketing/app/page.tsx` between `<ShowcaseSection />` and `<CtaSection />`:
```tsx
import ComingSoonSection from "@/components/sections/ComingSoonSection";
// ...
<ShowcaseSection />
<ComingSoonSection />
<CtaSection />
```
