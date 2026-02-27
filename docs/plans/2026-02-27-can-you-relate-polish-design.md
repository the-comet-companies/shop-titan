# CanYouRelate Section — Transition & Animation Polish Design

**Date:** 2026-02-27
**Status:** Approved

## Goal

Fix the jarring visual cut between PainPoint3D (dark, 3D, energetic) and CanYouRelateSection (flat, white, static). Improve the section's animation energy to feel like a natural continuation rather than a cold restart.

## Scope

Single file: `apps/marketing/components/sections/CanYouRelateSection.tsx`

No new dependencies. No layout changes. No copy changes.

---

## 1. Transition: Dark Header Zone

**Problem:** PainPoint3D ends on a dark background with a bottom gradient. CanYouRelate starts abruptly with `bg-surface` (white).

**Solution:** Add an `absolute top-0 inset-x-0 h-56` overlay div with `bg-gradient-to-b from-black to-transparent pointer-events-none z-0`. This creates a ~224px dark bleed at the top of the section in both light and dark mode, matching PainPoint3D's black bottom gradient.

- The top divider line (`h-px bg-gradient-to-r from-transparent via-gray-200 ...`) is removed — the gradient provides the visual break.
- The section heading sits in the dark zone as a `relative z-10` block.
- Heading text: `text-white` (forced, since it sits over the dark overlay).
- Secondary line: `text-gray-400 dark:text-gray-500`.

---

## 2. Card Animation: Directional Cascade

**Problem:** All 10 cards use `delay: 0 or 0.1` and a generic `y: 20` fade-up — no direction, no energy.

**Solution:**
- Left-column cards (`index % 2 === 0`): `initial={{ opacity: 0, x: -28, y: 12 }}`
- Right-column cards (`index % 2 === 1`): `initial={{ opacity: 0, x: 28, y: 12 }}`
- Both animate to `{ opacity: 1, x: 0, y: 0 }`
- Stagger: `delay: index * 0.06` (0ms → 300ms for 10 cards)
- Transition: `type: 'spring', stiffness: 260, damping: 24`
- Viewport margin: `-80px` (tighter than current `-50px`)

**Simplification:** The `AnimatedCard` `visible` prop was always `true` and its internal spring animation was never used. Remove the internal `animate` conditional and `prefersReduced` logic from `AnimatedCard` — let the parent motion div handle all entrance animation. `AnimatedCard` becomes a pure presentational component.

---

## 3. Card Visual Polish

| Element | Before | After |
|---|---|---|
| Number badge color | `text-secondary-text dark:text-gray-600` | `text-rose-500/70 dark:text-rose-500/50` |
| Hover glow opacity | `rose-500/[0.06]` | `rose-500/[0.10]` |
| Card border on hover | none | `hover:border-rose-500/30 dark:hover:border-rose-500/20 transition-colors duration-300` |

---

## 4. Unchanged

- Section height and flow layout
- Grid structure (2-column)
- Bridge CTA button
- Card content / copy
- Micro grid texture background
- `bg-surface dark:bg-gray-950` section base background
