# Features Section Redesign — Design Document
**Date:** 2026-02-24
**Status:** Approved
**Scope:** `apps/marketing/components/sections/FeaturesSection.tsx`, `components/ui/FeatureGrid.tsx`, `components/ui/FeatureGridCard.tsx`

---

## Goal

Comprehensive lift of the FeaturesSection UI/UX across three axes: visual impact (glassmorphism), motion design, and information hierarchy. The surrounding sections (WorkflowVideoSection, ProductShowcaseSection) remain unchanged.

---

## Approach: Mesh Gradient Stage + Pure Glass Cards

Keep the existing `bg-background-light dark:bg-background-dark` base. Layer animated gradient orbs behind all content to create the backdrop necessary for genuine glassmorphism. All cards become frosted glass.

---

## Section 1 — Background Layer

Add a non-interactive `absolute inset-0 overflow-hidden pointer-events-none` layer inside `<section>` containing three animated orbs:

| Orb | Color | Opacity | Size | Position | Animation |
|-----|-------|---------|------|----------|-----------|
| 1 | `#0066CC` (primary) | 6% | ~600px | top-right | `animate-gradient-flow-1` |
| 2 | indigo-500 | 4% | ~400px | center-left | `animate-gradient-flow-2` |
| 3 | teal-400 | 3% | ~500px | bottom-center | `animate-gradient-flow-3` |

All orbs use `rounded-full blur-3xl` and the existing keyframes already defined in `tailwind.config.ts`.

---

## Section 2 — FeatureBlock Card Glass Treatment

### Card shell
**Before:** `bg-surface dark:bg-gray-900 border border-structural-border dark:border-gray-800`
**After:** `bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/40`

### Top-edge highlight
Thin 1px shimmer line at the top edge of each card:
`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none`

### Icon container
**Before:** `w-10 h-10 bg-primary/10 rounded-xl`
**After:** `w-12 h-12 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/50 dark:border-white/20 rounded-2xl shadow-sm`
Icon color stays `text-primary`.

### Pain card ("The Friction")
**Before:** `bg-slate-50 border-slate-200 dark:bg-slate-900/50 dark:border-slate-700` with slate icon
**After:** `bg-rose-50/60 dark:bg-rose-950/20 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/30`
Icon: `text-rose-500`, icon bg: `bg-rose-100 dark:bg-rose-900/40`
Add a small `w-20 h-20 absolute top-0 right-0 bg-rose-500/10 blur-2xl rounded-full pointer-events-none` glow accent.

### Solution card ("The Flow")
**Before:** indigo colors (conflicts with primary `#0066CC`)
**After:** `bg-blue-50/60 dark:bg-blue-950/20 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/30`
Icon: `text-primary`, icon bg: `bg-blue-100 dark:bg-blue-900/40`
Add a small `w-20 h-20 absolute bottom-0 left-0 bg-primary/10 blur-2xl rounded-full pointer-events-none` glow accent.
Keep the shimmer animation but update its colors to match blue (not indigo).

### Entry animation
**Before:** `{ opacity: 0, y: 40 }` → `{ opacity: 1, y: 0 }`
**After:** `{ opacity: 0, y: 40, scale: 0.97 }` → `{ opacity: 1, y: 0, scale: 1 }`
The `scale` delta adds physical weight to the entrance.

---

## Section 3 — Left Nav Upgrades

### Active state pill
Remove the `layoutId="activeFeatureIndicator"` left bar.
Replace with a `layoutId="activeNavPill"` **background element** that uses Framer Motion layout animation to slide behind the active nav item:
`bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/80 dark:border-white/20 shadow-md shadow-primary/10 rounded-lg`
The pill is `absolute inset-0` within the button, rendered conditionally when active.

### Progress track
A vertical track on the left edge of the nav container:
- **Track:** `absolute left-0 top-0 w-0.5 h-full bg-gray-200 dark:bg-gray-800 rounded-full`
- **Fill:** `absolute left-0 top-0 w-0.5 bg-primary rounded-full transition-all duration-500 ease-out`
- Fill height = `(activeIndex / (navigationItems.length - 1)) * 100` percent
- Derived from `navigationItems.findIndex(item => item.id === activeFeature)`

---

## Section 4 — Tier 2 FeatureGrid Cards (FeatureGridCard)

### Card glass treatment
**Before:** `bg-surface dark:bg-gray-900 border border-structural-border dark:border-gray-800`
**After:** `bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg`

### Expand animation
**Before:** `motion.div` with `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`
**After:** Wrap expanded content in `AnimatePresence` with:
```
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: "auto" }}
exit={{ opacity: 0, height: 0 }}
transition={{ type: "spring", stiffness: 260, damping: 25 }}
```

### Expanded pain/solution panels
Same glass spec as Tier 1:
- Pain: `bg-rose-50/60 dark:bg-rose-950/20 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/30`
- Solution: `bg-blue-50/60 dark:bg-blue-950/20 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/30`
- Layout: `grid md:grid-cols-2` (2-column on desktop, fits within 8-col content width)

### Chevron
Add animated chevron to the expand button: `rotate-180` when expanded via `transition-transform duration-300`.

---

## Files to Modify

1. `apps/marketing/components/sections/FeaturesSection.tsx` — background orbs, FeatureBlock card, nav progress track + active pill
2. `apps/marketing/components/ui/FeatureGridCard.tsx` — glass treatment, AnimatePresence expand, pain/solution panel colors

## Files NOT to Modify

- `tailwind.config.ts` — existing keyframes are sufficient
- `WorkflowVideoSection.tsx`, `ProductShowcaseSection.tsx` — out of scope
- `FeatureGrid.tsx` — no visual changes needed at the container level

---

## Success Criteria

- Glassmorphism cards readable in both light and dark mode
- Orb layer does not occlude text or interact with pointer events
- Left nav progress track updates smoothly on scroll
- Tier 2 cards expand/collapse with spring animation, no layout shift
- Solution card colors no longer conflict with primary blue
