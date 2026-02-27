# FeaturesSection Redesign — Design Document

**Date:** 2026-02-27
**Status:** Approved

## Goal

Replace the current scroll-driven sidebar-nav + FeatureBlock architecture with a horizontal tab bar + browser-framed video panel layout. Elevate the section from "documentation cards" to a premium product showcase that matches the energy of PainPoint3D and CanYouRelate.

---

## Current State Problems

- Sidebar nav is functional but cold — a text list with a progress bar
- All 5 Tier 1 feature blocks use identical `y:40 → 0` fade animations — no hierarchy
- In-card mockups are static HTML — no motion, no life
- Section entry has no dramatic intro — just starts
- Tier 2 expand/collapse mechanic is hidden and complex — almost no user finds it
- IntersectionObserver scroll sync adds complexity with minimal UX return

---

## New Architecture

### 1. Section Header

Centered, staggered `whileInView` entry. Three elements:

- **Eyebrow pill:** `"THE PLATFORM"` — `px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase`
- **H2:** `"Built for how print shops actually work"` — `text-3xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight`
- **Subtitle:** `"Every tool your team needs — quotes, orders, production, inventory — in one place."` — `text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto`

Stagger: delays 0 / 100ms / 200ms. All `whileInView`, `viewport={{ once: true }}`.

Section background unchanged: `bg-background-light dark:bg-background-dark` with existing animated gradient orbs.

---

### 2. Tab Bar

Replaces the sticky sidebar nav entirely. Rendered below the section header.

**Behavior:**
- 5 tabs: Quotes · Orders · Scheduler · Pricing · Analytics
- Click-driven — no IntersectionObserver, no scroll sync
- Default active: `activeTab = 0` (Quotes)
- Sticky at `top-0` (below global navbar) within the section using a sticky wrapper

**Tab appearance:**
- Each tab: Material Symbols icon + label (`request_quote  Quotes`)
- **Active:** `bg-primary text-white rounded-full px-5 py-2.5 font-semibold text-sm`
- **Inactive:** `border border-structural-border dark:border-gray-700 text-secondary-text rounded-full px-5 py-2.5 font-medium text-sm hover:text-charcoal dark:hover:text-white hover:border-primary/30 transition-colors`
- Active pill animated with Framer `layoutId="activeFeatureTab"` shared layout animation
- Entire row: `flex gap-2` inside a `sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4`

**Mobile:** `overflow-x-auto scrollbar-hide` — tabs scroll horizontally, no wrap.

---

### 3. Tab Panel

Single panel below the sticky tab bar. Swaps between tabs with `AnimatePresence mode="wait"`.

**Panel transition:**
- Exit: `{ opacity: 0, y: -8, transition: { duration: 0.2 } }`
- Enter: `initial={{ opacity: 0, y: 12 }}` → `animate={{ opacity: 1, y: 0 }}` with `transition={{ duration: 0.25 }}`

**Panel layout — two columns (`lg:flex gap-12 lg:gap-16 items-center`):**

#### Left column — `lg:w-5/12` — Copy

Staggered inner content after panel enters:

1. **Icon badge** (`delay: 0`): `w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center` + `material-symbols-outlined text-primary text-3xl`
2. **Feature title** (`delay: 0.06`): `text-3xl md:text-4xl font-bold text-charcoal dark:text-white`
3. **"THE FRICTION" row** (`delay: 0.12`): eyebrow `text-xs font-bold tracking-widest uppercase text-rose-600 dark:text-rose-400 mb-1` + description `text-base text-secondary-text`; row has `bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-800/30 rounded-xl p-4`
4. **"THE FIX" row** (`delay: 0.18`): same pattern with `primary` color, `bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/30`
5. **Highlights list** (`delay: 0.24`): checkmark `✓` prefix, `text-sm text-charcoal dark:text-gray-300 font-medium`, `grid grid-cols-2 gap-x-4 gap-y-1.5` (if highlights array has items)
6. **"Watch Full Demo" button** (`delay: 0.30`): ghost button that opens existing `VideoModal`

All stagger using `motion.div` with `initial={{ opacity: 0, y: 8 }}` → `animate={{ opacity: 1, y: 0 }}`.

#### Right column — `lg:w-7/12` — Browser Frame

```
╭─────────────────────────────────────────╮
│  bg-gray-100 dark:bg-gray-800 title bar │
│  ● ● ●   [  Shop Titan  ]               │
├─────────────────────────────────────────┤
│  bg-gray-900                            │
│                                         │
│       VideoPlayer (muted, loop)         │
│       or fallback children              │
│                                         │
╰─────────────────────────────────────────╯
```

- Outer wrapper: `rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20`
- Title bar: `bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center gap-2` — 3 traffic light circles (`w-3 h-3 rounded-full bg-red-400`, `bg-yellow-400`, `bg-green-400`) + centered text `"Shop Titan"` in `text-xs font-semibold text-gray-500 dark:text-gray-400`
- Video area: `aspect-video bg-gray-900` — `VideoPlayer` with `hideControls={false}` — autoplay, muted, loop
- If `videoSrc` is absent: render existing fallback children inside the same frame

**Mobile:** columns stack vertically — browser frame first (full width), copy below.

---

### 4. Tier 2 Grid

Simplified. The complex expand/collapse mechanic is removed. `FeatureGrid` and `FeatureGridCard` components can be inlined or replaced.

**Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`

**Each card:**
- `rounded-2xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 p-6`
- `hover:border-primary/30 dark:hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300`
- Icon badge: `w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4` + icon in `text-primary`
- Title: `text-base font-bold text-charcoal dark:text-white mb-1`
- Summary: `text-sm text-secondary-text dark:text-gray-500 leading-relaxed line-clamp-2`
- No expand/collapse, no video toggle

**Grid header:** same eyebrow pill + heading pattern as section header: `"MORE FEATURES"` pill + `"Additional Capabilities"` H3.

**Entry animation:** `whileInView` stagger, `delay: index * 0.05`, `initial={{ opacity: 0, y: 16 }}`.

---

### 5. Removed

| Removed | Reason |
|---|---|
| Left sticky sidebar nav column | Replaced by horizontal tab bar |
| IntersectionObserver scroll sync | No longer needed — click-driven tabs |
| `LayoutGroup` + progress bar fill | Tab bar uses layoutId instead |
| `FeatureBlock` component | Replaced by inline tab panel |
| `FeatureGrid` / `FeatureGridCard` components | Replaced by simpler inline grid |
| Expand/collapse state in grid | Removed complexity, no UX value |
| `navRefs`, `navContainerRef`, `activeFeature` string state | All replaced by `activeTab: number` |

### 6. Preserved

| Preserved | Where |
|---|---|
| `VideoPlayer` component | Right panel video area |
| `VideoModal` component | "Watch Full Demo" button |
| Tier 1 feature data (pain points, solutions, highlights, videoSrc) | Tab panel copy |
| Tier 2 feature data (icon, title, summary) | Simplified grid |
| Animated gradient orbs | Section background |
| Pain/solution rose+blue box visual language | Left panel friction/fix rows |
