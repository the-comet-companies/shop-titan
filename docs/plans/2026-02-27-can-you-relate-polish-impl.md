# CanYouRelate Section — Transition & Animation Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix the jarring visual cut between PainPoint3D and CanYouRelateSection, and upgrade the card entrance animations from a flat fade-up to a directional cascade.

**Architecture:** Three sequential edits to one file. Task 1 adds the dark header zone (gradient overlay + white heading). Task 2 rewrites the card entrance animation (directional x-offset stagger + simplified AnimatedCard). Task 3 polishes the card visuals (rose number badge, stronger hover glow, hover border). All changes are cosmetic — no logic, no new deps.

**Tech Stack:** Framer Motion (`motion.div`, `whileInView`), Tailwind CSS, React, TypeScript. No new dependencies.

---

## Task 1: Dark header transition zone

**Files:**
- Modify: `apps/marketing/components/sections/CanYouRelateSection.tsx`

**Step 1: Clean up unused imports**

The `useEffect`, `useRef`, and `useState` imports from `react` are unused after this change (outerRef is on the outer div but never read). `useReducedMotion` from framer-motion will be removed in Task 2. For now, only remove the react hook imports since `useRef` is still referenced on the outer div.

Remove `useEffect` and `useState` from the react import (they were never used):

```ts
// Before (line 4):
import { useEffect, useRef, useState } from 'react';

// After:
import { useRef } from 'react';
```

**Step 2: Remove the top divider, add the dark gradient overlay**

Inside `<section>`, the first child is currently the top divider line:
```tsx
{/* Top divider */}
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
```

Replace it with the dark-to-transparent overlay:
```tsx
{/* Transition gradient from PainPoint3D */}
<div className="absolute top-0 inset-x-0 h-56 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
```

**Step 3: Make the content wrapper relative z-10**

The content wrapper div currently has no z-index. Since the gradient is `z-0`, content needs `z-10` so it renders on top of the gradient:

```tsx
// Before:
<div className="relative z-10 md:flex-1 flex flex-col max-w-7xl mx-auto w-full px-mobile py-6 md:py-8 lg:py-12 md:min-h-0">

// No change needed — it already has relative z-10. ✓
```

(It already has `relative z-10` — no change needed here.)

**Step 4: Update the heading text to white**

The heading sits visually inside the dark gradient zone. Change its text color to white (forced, not dark-mode conditional — it's always on the dark overlay):

```tsx
// Before:
<h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white leading-tight">
    We&apos;ve heard all of these.
    <br />
    <span className="text-secondary-text dark:text-gray-500">Usually in the same conversation.</span>
</h2>

// After:
<h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
    We&apos;ve heard all of these.
    <br />
    <span className="text-gray-400">Usually in the same conversation.</span>
</h2>
```

**Step 5: TypeScript check**

Run: `cd apps/marketing && npx tsc --noEmit`
Expected: No errors.

**Step 6: Commit**

```bash
git add apps/marketing/components/sections/CanYouRelateSection.tsx
git commit -m "feat: can-you-relate - dark header transition zone from PainPoint3D"
```

---

## Task 2: Directional card cascade animation

**Files:**
- Modify: `apps/marketing/components/sections/CanYouRelateSection.tsx`

**Step 1: Simplify AnimatedCard — remove visible prop and useReducedMotion**

The `visible` prop was always passed as `true` and the internal `animate` conditional was never triggered. `useReducedMotion` is only used there. Remove all of it. `AnimatedCard` becomes a pure presentational component with no motion logic of its own:

```tsx
// Replace the entire AnimatedCard function with:
function AnimatedCard({ point }: { point: typeof painPoints[0] }) {
    return (
        <div
            className="relative p-3 md:p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden group min-w-0 h-full"
        >
            {/* Hover glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/0 group-hover:bg-rose-500/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
            <span className="block text-[10px] font-bold tracking-widest text-secondary-text dark:text-gray-600 uppercase mb-1.5">
                {point.number}
            </span>
            <p className="text-sm font-bold text-charcoal dark:text-white leading-snug mb-1">
                {point.headline}
            </p>
            <p className="text-xs text-secondary-text dark:text-gray-500 font-medium leading-relaxed">
                {point.consequence}
            </p>
        </div>
    );
}
```

Note: The `data-index` attribute and `index` prop are gone. `h-full` moves from the wrapper motion div to the card itself.

**Step 2: Remove useReducedMotion from framer-motion import**

```ts
// Before (line 3):
import { motion, useReducedMotion } from 'framer-motion';

// After:
import { motion } from 'framer-motion';
```

**Step 3: Update the grid's motion.div to use directional cascade**

In the grid, each card is wrapped in a `motion.div`. Replace the static `y: 20` fade with a directional x-offset stagger:

```tsx
// Before:
{painPoints.map((point, index) => (
    <motion.div
        key={point.number}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index % 2 === 0 ? 0 : 0.1 }}
        className="h-full"
    >
        <AnimatedCard
            point={point}
            visible={true}
            index={index}
        />
    </motion.div>
))}

// After:
{painPoints.map((point, index) => (
    <motion.div
        key={point.number}
        initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28, y: 12 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: 'spring', stiffness: 260, damping: 24, delay: index * 0.06 }}
        className="h-full"
    >
        <AnimatedCard point={point} />
    </motion.div>
))}
```

Key changes:
- Left column (`index % 2 === 0`): enters from `x: -28`
- Right column (`index % 2 === 1`): enters from `x: 28`
- Stagger: `delay: index * 0.06` → 0ms, 60ms, 120ms … 540ms for 10 cards
- Spring physics instead of duration-based easing
- Tighter viewport margin (`-80px`) so cards fire when well into view

**Step 4: Remove unused useRef and outer div ref**

Since `outerRef` is declared but the value is never read, remove it:

```tsx
// Remove this line from the component body:
const outerRef = useRef<HTMLDivElement>(null);

// And remove ref={outerRef} from the outer div:
// Before:
<div ref={outerRef} className="w-full">
// After:
<div className="w-full">
```

Also remove the `useRef` import:
```ts
// Before:
import { useRef } from 'react';

// After — remove the react import entirely (nothing left to import):
// (delete the line)
```

**Step 5: TypeScript check**

Run: `cd apps/marketing && npx tsc --noEmit`
Expected: No errors.

**Step 6: Commit**

```bash
git add apps/marketing/components/sections/CanYouRelateSection.tsx
git commit -m "feat: can-you-relate - directional card cascade animation"
```

---

## Task 3: Card visual polish

**Files:**
- Modify: `apps/marketing/components/sections/CanYouRelateSection.tsx`

**Step 1: Rose accent on number badges**

The numbered eyebrow (`01`–`10`) currently uses muted gray. Change to a rose tint that echoes PainPoint3D's chaos-red:

```tsx
// Before:
<span className="block text-[10px] font-bold tracking-widest text-secondary-text dark:text-gray-600 uppercase mb-1.5">

// After:
<span className="block text-[10px] font-bold tracking-widest text-rose-500/70 dark:text-rose-500/50 uppercase mb-1.5">
```

**Step 2: Bump hover glow opacity**

The existing rose glow on hover is nearly invisible. Bump it so it's actually perceptible:

```tsx
// Before:
<div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/0 group-hover:bg-rose-500/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />

// After:
<div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/0 group-hover:bg-rose-500/[0.10] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
```

**Step 3: Add hover border tint to card**

Add a faint rose border on hover to confirm interactivity:

```tsx
// Before:
<div
    className="relative p-3 md:p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden group min-w-0 h-full"
>

// After:
<div
    className="relative p-3 md:p-4 rounded-xl border border-structural-border dark:border-gray-800 hover:border-rose-500/30 dark:hover:border-rose-500/20 bg-white dark:bg-gray-900 overflow-hidden group min-w-0 h-full transition-colors duration-300"
>
```

**Step 4: TypeScript check**

Run: `cd apps/marketing && npx tsc --noEmit`
Expected: No errors.

**Step 5: Visual verification**

Start dev server: `cd apps/marketing && npm run dev`

Check the following:
- [ ] Scroll to the PainPoint3D / CanYouRelate boundary — the dark-to-light gradient bleed creates a smooth seam (black fades into the surface background over ~224px)
- [ ] The "We've heard all of these." heading is white and readable against the dark overlay
- [ ] Scroll into the cards — left-column cards fly in from the left, right-column from the right, in a fast cascade
- [ ] Cards 1–2 enter nearly simultaneously, cards 9–10 enter ~480ms after cards 1–2 — feels like a sweep, not a slow drip
- [ ] Hovering a card: rose glow visible, border tints rose, number is rose-tinted
- [ ] No layout shift or clipping during animation

**Step 6: Commit**

```bash
git add apps/marketing/components/sections/CanYouRelateSection.tsx
git commit -m "feat: can-you-relate - rose accent polish on cards"
```

---

## Notes

- The dark gradient (`from-black to-transparent`) works in both light and dark mode — it creates the black bleed at the top regardless of the section's base bg color
- `x: -28 / 28` in Framer Motion is pixels, not Tailwind units
- `delay: index * 0.06` with 10 cards = 0ms to 540ms total sweep — adjust to `0.05` if it feels too slow or `0.07` if it feels too fast
- The `type: 'spring'` transition overrides `duration` — no need to specify duration alongside it
- `viewport: { once: true }` means animations only play on first entry, not on scroll-back — intentional
