# Shop Titan — Design System Reference

> **Purpose:** Single source of truth for all visual design decisions. Reference this before building any new section, component, or page so everything stays cohesive.

---

## 1. Color Palette

All colors are Tailwind tokens defined in `tailwind.config.ts`. **Always use tokens, never raw hex.**

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#0066CC` | Action blue — CTAs, active states, icons, highlights |
| `background-light` | `#FBFBFB` | Page background (light mode) |
| `background-dark` | `#0a0a0a` | Page background (dark mode) |
| `charcoal` | `#1D1D1F` | Primary body text (light mode) |
| `secondary-text` | `#6E6E73` | Body copy, muted labels, descriptions |
| `structural-border` | `#E5E7EB` | Default card/section borders (light mode) |
| `surface` | `#FFFFFF` | Card and panel backgrounds (light mode) |

### Semantic / Status Colors (Tailwind defaults — not tokenized)

| Purpose | Light | Dark |
|---|---|---|
| Success / Flow | `green-50` bg · `green-700` text · `green-100` border | `green-900/20` bg · `green-400` text · `green-800/30` border |
| Warning / Friction (pain point) | `rose-50/60` bg · `rose-600` text · `rose-200/50` border | `rose-950/20` bg · `rose-400` text · `rose-800/30` border |
| Info / Solution | `blue-50/60` bg · `primary` text · `blue-200/50` border | `blue-950/20` bg · `blue-400` text · `blue-800/30` border |
| Danger / Alert | `red-50` bg · `red-700` text · `red-100` border | `red-900/10` bg · `red-400` text · `red-900/30` border |
| Neutral accent | `gray-50` / `gray-100` | `gray-800` / `gray-900` |

### Gradient / Animation Colors (AnimatedGradientBackground)

The animated SVG ribbons only use blue-family values, keeping the brand monochromatic:
- `#0066CC → #0052A3 → #003D7A` (primary blue range)
- `#4A90E2 → #005BB5` (lighter-to-darker blue)
- `#0080FF → #004D99` (bright to deep blue)
- `#6E6E73 / #86868B` mixed in at low opacity for the grey ribbon

Background orbs (Framer): `primary/[0.06]`, `indigo-500/[0.04]`, `teal-400/[0.03]` — always very faint.

---

## 2. Typography

### Fonts

```
Display / Body (sans): Inter  → var(--font-inter)
Accent (serif):        Crimson Pro → var(--font-crimson)  (400, 600 · normal, italic)
Icons:                 Material Symbols Outlined (Google Fonts)
```

Both loaded via `next/font/google` in `app/layout.tsx`.

### Heading Scale

| Breakpoints | Tailwind class | Use |
|---|---|---|
| Hero H1 | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl` | Hero primary headline |
| Section H2 | `text-3xl md:text-5xl` | Major section titles |
| Feature H2 | `text-4xl sm:text-5xl` | Feature section sticky header |
| Sub-feature H3 | `text-3xl md:text-4xl lg:text-5xl font-semibold` | Product showcase sub-sections |
| Card H3 | `text-xl md:text-2xl font-bold` | Bento/feature cards |
| Card H3 small | `text-xl font-bold` | Compact cards |

Always pair with: `leading-tight tracking-tight text-charcoal dark:text-white`

### Body / Descriptor Scale

| Class | Use |
|---|---|
| `text-xl md:text-2xl leading-relaxed` | Hero subtitle, CTA body |
| `text-lg md:text-xl leading-relaxed` | Section body copy |
| `text-base leading-relaxed` | Standard descriptions |
| `text-sm` | Secondary descriptions, feature list items |
| `text-xs` | Labels, meta text, table headers |

Body text color: `text-secondary-text dark:text-gray-400`

### Responsive Typography Utilities (from `globals.css`)

```css
.text-responsive-sm    → text-sm md:text-base
.text-responsive-base  → text-base md:text-lg
.text-responsive-lg    → text-lg md:text-xl
.text-responsive-xl    → text-xl md:text-2xl
.text-responsive-2xl   → text-2xl md:text-3xl lg:text-4xl
.text-responsive-3xl   → text-3xl md:text-4xl lg:text-5xl
.text-responsive-4xl   → text-4xl md:text-5xl lg:text-6xl
```

### Eyebrow Labels (Section Tags)

Every section that has a topic label uses this exact pattern:

```tsx
<span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
  Label Text
</span>
```

### Navigation / Uppercase Labels

```
text-xs font-semibold uppercase tracking-wider
```

Used in: nav items, footer section headers, table headers, progress labels.

---

## 3. Spacing & Layout

### Page Container

```tsx
<div className="max-w-7xl mx-auto px-mobile">
// where px-mobile = px-4 md:px-6
```

Narrower containers when needed: `max-w-6xl`, `max-w-3xl` (CTAs/headlines).

### Section Padding

```
py-24 md:py-32 lg:py-40     — standard section
pt-16 md:pt-20 lg:pt-24     — reduced top (when content stacks tight)
py-32 md:py-48              — CTA section (more breathing room)
```

### Column Gaps

```
gap-6   — grid cards (bento)
gap-8   — standard two-col
gap-10 md:gap-12 lg:gap-16  — feature split layout
gap-12 md:gap-24            — features section left/right columns
```

### Card Padding

```
p-6 md:p-8   — standard card interior
p-4 md:p-6   — compact card (feature mockups, small panels)
```

---

## 4. Border Radius

| Token / Class | Value | Use |
|---|---|---|
| `rounded-full` | 9999px | All buttons, pills, badges |
| `rounded-3xl` | 24px | Large feature cards (md+) |
| `rounded-2xl` | 16px | Default card radius |
| `rounded-xl` | 12px | Inner panels, browser frame, icon containers |
| `rounded-lg` | 8px | Small cards, nav pills, table rows |
| `rounded-md` | 6px | URL bar, small inputs |

---

## 5. Shadows

```
shadow-sm                           — subtle card lift
shadow-lg shadow-primary/20         — primary-tinted shadow (buttons)
shadow-xl shadow-primary/30         — hover state of primary buttons
shadow-2xl                          — feature cards, browser frames
shadow-2xl shadow-black/5           — feature cards (light mode)
shadow-2xl dark:shadow-black/40     — feature cards (dark mode)
hover:shadow-2xl hover:shadow-primary/10  — card hover
```

---

## 6. Border Patterns

| Pattern | Class |
|---|---|
| Default card | `border border-structural-border dark:border-gray-800` |
| Hover card | `hover:border-gray-300 dark:hover:border-gray-700` |
| Highlighted / active | `border-2 border-primary` |
| Glass card border | `border border-white/60 dark:border-white/10` |
| Section top divider | `h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent` |
| Left accent (feature list) | `border-l-2 border-primary/20` |

---

## 7. Surface & Glassmorphism

### Utility Classes (from `globals.css`)

```css
.glass-nav        → bg-white/95 dark:bg-gray-950/95 border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm
.glass-button     → bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-xl
.glass-enhanced   → backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 border border-white/30 dark:border-gray-700/50 shadow-2xl
.feature-card     → bg-white (light) / #111 (dark) · border border-black/5 (light) / border-white/5 (dark)
.ui-snippet       → bg-#f9fafb · rounded-xl · border-#e5e7eb (light) / bg-#0a0a0a · border-#1f2937 (dark)
```

### Feature Cards (Framer + Tailwind)

```tsx
className="feature-card rounded-2xl md:rounded-3xl overflow-hidden border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/40 hover:shadow-2xl hover:shadow-primary/10"
```

---

## 8. Buttons

### Primary (`.btn-primary`)
```
bg-primary text-white px-6 py-3 rounded-full font-semibold
shadow-lg shadow-primary/20
hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/30
transition-all duration-300
```

### Secondary (`.btn-secondary`)
```
glass-button px-6 py-3 rounded-full font-semibold text-charcoal dark:text-white
hover:bg-white/20 dark:hover:bg-white/10 hover:scale-105 hover:shadow-xl
```

### Ghost / Transparent (used in Hero, CTA)
```tsx
// Outer container is the button; two absolute overlays create the glass border effect:
<div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 rounded-full transition-colors" />
<div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-charcoal/30 rounded-full transition-colors" />
```

### CTA Arrow Pattern
All CTAs with arrows use:
```tsx
<span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
```

### Size Reference (Button component)
```
sm → px-6 py-2 text-sm
md → px-8 py-3 text-base
lg → px-10 py-4 text-lg
```

---

## 9. Background Patterns & Textures

### Body Background (subtle grid)
```css
background-image:
  linear-gradient(to right, rgba(0, 102, 204, 0.03) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(0, 102, 204, 0.03) 1px, transparent 1px);
background-size: 140px 140px;
```

### Section Micro-Grid (e.g. BenefitsSection)
```tsx
className="bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
```

### Feature Visual Panel Dot Pattern
```tsx
className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-20"
```

### Animated Gradient Orbs (FeaturesSection)
```tsx
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-3xl animate-gradient-flow-1" />
<div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-3xl animate-gradient-flow-2" />
<div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-teal-400/[0.03] blur-3xl animate-gradient-flow-3" />
```

---

## 10. Icon System

**Library:** Google Material Symbols Outlined (loaded globally in `layout.tsx`)

```tsx
<span className="material-symbols-outlined">icon_name</span>
```

### Icon Container Sizes

| Container | Tailwind | Use |
|---|---|---|
| Small | `w-8 h-8 rounded-lg` | Inline, compact |
| Medium | `w-10 h-10 rounded-xl` or `w-12 h-12 rounded-xl` | Feature cards, section icons |
| Large | `w-16 h-16 rounded-2xl` | Hero-level icons |

### Tinted Icon Backgrounds

```tsx
// Primary tint (default)
className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"

// Colored tints (match semantic intent):
// Yellow:   bg-yellow-100 dark:bg-yellow-900/20 · text-yellow-600 dark:text-yellow-500
// Purple:   bg-purple-100 dark:bg-purple-900/20 · text-purple-600 dark:text-purple-400
// Emerald:  bg-emerald-100 dark:bg-emerald-900/20 · text-emerald-600 dark:text-emerald-400
// Blue:     bg-blue-100 dark:bg-blue-900/40 · text-blue-600 dark:text-blue-400
```

---

## 11. Status Badges & Indicators

### Pill Badge (section labels, pricing, etc.)
```tsx
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg">
  Popular
</span>
```

### Inline Status Tag
```tsx
// Green (active/live)
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-800/30">
  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
  Active
</span>

// Blue (info/feature)
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-bold border border-blue-100 dark:border-blue-800/30">
  Feature Label
</span>
```

### Alert / Warning Block
```tsx
<div className="p-2 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded flex items-center gap-2">
  <span className="material-symbols-outlined text-red-600 text-sm">warning</span>
  <span className="text-[9px] text-red-700 dark:text-red-400 font-bold">Alert text</span>
</div>
```

---

## 12. Pain / Flow Duality Pattern

A core narrative device — every problem has a matching solution panel:

### Friction (The Problem)
```tsx
<div className="relative p-5 border border-rose-200/50 dark:border-rose-800/30 bg-rose-50/60 dark:bg-rose-950/20 backdrop-blur-sm rounded-xl overflow-hidden">
  {/* Corner glow */}
  <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 blur-2xl rounded-full" />
  <div className="flex items-center gap-2 mb-3">
    <div className="p-1.5 bg-rose-100 dark:bg-rose-900/40 rounded-lg">
      <span className="material-symbols-outlined text-rose-500 text-lg">sentiment_dissatisfied</span>
    </div>
    <h4 className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">The Friction</h4>
  </div>
  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">...</p>
</div>
```

### Flow (The Solution)
```tsx
<div className="relative p-5 border border-blue-200/50 dark:border-blue-800/30 bg-blue-50/60 dark:bg-blue-950/20 backdrop-blur-sm rounded-xl overflow-hidden">
  {/* Corner glow */}
  <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full" />
  <div className="flex items-center gap-2 mb-3">
    <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-primary">
      <span className="material-symbols-outlined text-lg">bolt</span>
    </div>
    <h4 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400">The Flow</h4>
  </div>
  <p className="text-charcoal dark:text-white text-sm leading-relaxed font-semibold">...</p>
</div>
```

---

## 13. Animation System (Framer Motion)

### Standard Entrance
```tsx
initial={{ opacity: 0, y: 20 }}
animate/whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, ease: "easeOut" }}
```

### Feature Card Entrance (more expressive)
```tsx
initial={{ opacity: 0, y: 40, scale: 0.97 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
transition={{ duration: 0.6 }}
```

### Staggered Grid Children
```tsx
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
```

### Spring Animation (nav pills, layout transitions)
```tsx
transition={{ type: "spring", stiffness: 300, damping: 30 }}
```

### Header Entrance
```tsx
initial={{ y: -100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
```

### Progress Bar (animated on scroll into view)
```tsx
initial={{ width: 0 }}
whileInView={{ width: "67%" }}
transition={{ duration: 1.5, delay: 0.2 }}
className="bg-primary h-full"
```

### Rules
- Only animate `opacity`, `transform` (`y`, `x`, `scale`). Never `height`/`width` unless using Framer's `layout` prop.
- Always `viewport={{ once: true }}` — never re-animate on scroll-back.
- Reduced motion: `globals.css` handles `prefers-reduced-motion` automatically.

---

## 14. Dark Mode

- Toggle: `dark:` class on `<html>` (via `darkMode: "class"` in Tailwind)
- Always pair every light color with a dark variant
- Common dark pairs:

| Light | Dark |
|---|---|
| `bg-white` | `dark:bg-gray-900` |
| `bg-background-light` / `#FBFBFB` | `dark:bg-background-dark` / `#0a0a0a` |
| `bg-gray-50` | `dark:bg-black` or `dark:bg-gray-950` |
| `text-charcoal` | `dark:text-white` |
| `text-secondary-text` | `dark:text-gray-400` |
| `border-structural-border` | `dark:border-gray-800` |

---

## 15. Grid / Layout Patterns

### Standard Feature Split (2-col)
```tsx
<div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
  <div className="order-1 min-w-0"> {/* Text content */} </div>
  <div className="order-2 shadow-2xl rounded-xl min-w-0"> {/* Visual */} </div>
</div>
```
On alternating rows, flip: `order-1 lg:order-2` / `order-2 lg:order-1`.

### Bento Grid (3-col with variable spans)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
  <div className="md:col-span-2 ..."> {/* Wide card */} </div>
  <div> {/* Normal card */} </div>
  <div className="lg:col-span-3 ..."> {/* Full-width card */} </div>
</div>
```

### Features Section (sticky sidebar + scrolling content)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
  <div className="lg:col-span-4 lg:sticky lg:top-32 self-start"> {/* Sidebar */} </div>
  <div className="lg:col-span-8 space-y-16 md:space-y-24"> {/* Content */} </div>
</div>
```

### Pricing Grid
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
```
Highlighted card uses `scale-105 z-10` to visually pop.

---

## 16. UI Components

### BrowserFrame
Wraps app mockups in a browser chrome. The header bar uses "signal bars" instead of standard macOS dots — a purposeful production-themed choice.
```tsx
<BrowserFrame url="app.shoptitan.com/page">
  {/* your content */}
</BrowserFrame>
```
Styling: `rounded-xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-2xl`

### Scrolling Carousel / Marquee
Used for payment logos / integrations. Infinite scroll via CSS animation:
```tsx
<div className="carousel-track items-center">
  <Content />
  <Content /> {/* Duplicate for seamless loop */}
</div>
```
Fade edges: `absolute left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10`

### Checklist Item
```tsx
<li className="flex items-start gap-3">
  <CheckCircle /> {/* SVG · w-5 h-5 text-primary */}
  <div>
    <span className="font-bold block dark:text-white">Label</span>
    <p className="text-secondary-text text-sm">Description</p>
  </div>
</li>
```

### Left-Bordered Stat Block
```tsx
<div className="p-4 border-l-2 border-primary/20">
  <span className="text-sm font-bold block mb-1 dark:text-white">Title</span>
  <p className="text-sm text-secondary-text">Description</p>
</div>
```

---

## 17. Responsive Rules

1. **Mobile content order:** Text first (`order-1`), visual second (`order-2`). Desktop may alternate.
2. **Always** add `min-w-0` to direct grid children that contain text truncation.
3. Touch targets: minimum `min-h-[44px] min-w-[44px]` (`.tap-target` utility).
4. Section padding starts at mobile-friendly values, scales up with `md:` and `lg:`.
5. Horizontal scroll: avoid for critical flows; use `flex-wrap` instead.
6. `scroll-padding-top: 100px` accounts for the fixed header.

---

## 18. Accessibility

- Focus ring: `.focus-primary` → `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`
- All decorative elements: `aria-hidden="true"` or `role="img"` with meaningful `aria-label`
- Use semantic HTML: `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`
- Interactive elements in sections get `aria-label` describing their purpose
- Selection color: `bg-primary/30 text-charcoal dark:text-white`

---

## 19. Quick-Reference Cheatsheet

### New Section Template

```tsx
<section id="section-id" className="py-24 md:py-32 bg-surface dark:bg-gray-950 relative overflow-hidden">
  {/* Top divider line */}
  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

  <div className="max-w-7xl mx-auto px-mobile relative z-10">
    {/* Section header */}
    <div className="mb-16 md:mb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
          Eyebrow Label
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white leading-tight mb-4">
          Main Heading
        </h2>
        <p className="text-lg text-secondary-text dark:text-gray-400">
          Supporting description.
        </p>
      </motion.div>
    </div>

    {/* Content grid here */}
  </div>
</section>
```

### New Card Template

```tsx
<motion.div
  variants={cardVariants}
  className="rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
>
  {/* Icon */}
  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
    <span className="material-symbols-outlined text-2xl">icon_name</span>
  </div>
  <h3 className="text-xl font-bold dark:text-white mb-2">Card Title</h3>
  <p className="text-secondary-text dark:text-gray-400 font-medium text-sm">Description.</p>
</motion.div>
```

---

*Last updated: 2026-02-25 · Source: `apps/marketing/` codebase*
