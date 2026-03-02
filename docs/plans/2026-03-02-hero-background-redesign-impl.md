# Hero Background Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the Spline 3D hero background and mobile blob animations with a pure SVG animated "Convergence Network" — module nodes connected by animated paths with traveling particles, all converging to a central hub.

**Architecture:** A single new `HeroBackground.tsx` component renders a full-bleed SVG with `position: absolute; inset: 0`. Framer Motion handles entrance + drift animations. Native `useAnimationFrame` + SVG `getPointAtLength` drives particles. `HeroSection.tsx` is simplified (Spline logic removed). `SplineHero.tsx` is deleted.

**Tech Stack:** Next.js 14, TypeScript, Framer Motion (already installed), SVG, `useAnimationFrame`

---

## Reference

- Design doc: `docs/plans/2026-03-02-hero-background-redesign-design.md`
- Design system: `docs/design-system.md`
- Files to modify: `apps/marketing/components/sections/HeroSection.tsx`
- File to create: `apps/marketing/components/sections/HeroBackground.tsx`
- File to delete: `apps/marketing/components/sections/SplineHero.tsx`
- Dev server: run from `apps/marketing/` with `npm run dev` (or `bun dev`)

---

## Task 1: Create HeroBackground — static SVG skeleton

**Files:**
- Create: `apps/marketing/components/sections/HeroBackground.tsx`

**Context:** This task builds the static structure only — no animation yet. Get the layout and visual language right before adding motion.

**Node positions** (viewBox 1440×720, hub at desktop ~65% from left):

```ts
const HUB = { x: 840, y: 340 };

const NODES = [
  { id: 'quotes',    label: 'Quotes',    icon: 'request_quote',         x: 240,  y: 130, mobile: true  },
  { id: 'orders',    label: 'Orders',    icon: 'shopping_cart',          x: 1120, y: 90,  mobile: true  },
  { id: 'scheduler', label: 'Scheduler', icon: 'precision_manufacturing', x: 1280, y: 320, mobile: true  },
  { id: 'pricing',   label: 'Pricing',   icon: 'grid_on',                x: 1180, y: 530, mobile: false },
  { id: 'analytics', label: 'Analytics', icon: 'analytics',              x: 880,  y: 610, mobile: false },
  { id: 'customers', label: 'Customers', icon: 'people',                 x: 460,  y: 520, mobile: false },
] as const;
```

**Control point helper** (computes the bezier curve control point between node and hub):

```ts
function ctrlPt(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  // Offset perpendicular to the line by 12% of its length
  return { x: mx - (dy / len) * len * 0.12, y: my + (dx / len) * len * 0.12 };
}
```

**Path data helper:**

```ts
function pathD(node: typeof NODES[number]) {
  const cp = ctrlPt(node.x, node.y, HUB.x, HUB.y);
  return `M${node.x},${node.y} Q${cp.x},${cp.y} ${HUB.x},${HUB.y}`;
}
```

**Step 1: Write the static component**

```tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { useAnimationFrame } from 'framer-motion';

// ── Data ──────────────────────────────────────────────────────────────────────

const HUB = { x: 840, y: 340 };

const NODES = [
  { id: 'quotes',    label: 'Quotes',    icon: 'request_quote',          x: 240,  y: 130, mobile: true  },
  { id: 'orders',    label: 'Orders',    icon: 'shopping_cart',           x: 1120, y: 90,  mobile: true  },
  { id: 'scheduler', label: 'Scheduler', icon: 'precision_manufacturing', x: 1280, y: 320, mobile: true  },
  { id: 'pricing',   label: 'Pricing',   icon: 'grid_on',                 x: 1180, y: 530, mobile: false },
  { id: 'analytics', label: 'Analytics', icon: 'analytics',               x: 880,  y: 610, mobile: false },
  { id: 'customers', label: 'Customers', icon: 'people',                  x: 460,  y: 520, mobile: false },
] as const;

type NodeDef = typeof NODES[number];

function ctrlPt(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  return { x: mx - (dy / len) * len * 0.12, y: my + (dx / len) * len * 0.12 };
}

function pathD(node: NodeDef) {
  const cp = ctrlPt(node.x, node.y, HUB.x, HUB.y);
  return `M${node.x},${node.y} Q${cp.x},${cp.y} ${HUB.x},${HUB.y}`;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function NetworkNode({ node }: { node: NodeDef }) {
  const W = 110; // foreignObject width
  const H = 44;  // foreignObject height

  return (
    <g>
      {/* Connection path */}
      <path
        id={`path-${node.id}`}
        d={pathD(node)}
        fill="none"
        stroke="#0066CC"
        strokeOpacity={0.25}
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      {/* Node card via foreignObject */}
      <foreignObject
        x={node.x - W / 2}
        y={node.y - H / 2}
        width={W}
        height={H}
        style={{ overflow: 'visible' }}
      >
        <div
          // @ts-expect-error xmlns required for SVG foreignObject
          xmlns="http://www.w3.org/1999/xhtml"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl
                     bg-white/80 dark:bg-white/5
                     border border-primary/20 dark:border-white/10
                     backdrop-blur-sm shadow-sm
                     text-xs font-semibold text-charcoal dark:text-white
                     whitespace-nowrap"
          style={{ width: W, height: H }}
        >
          <span className="material-symbols-outlined text-primary text-sm leading-none">
            {node.icon}
          </span>
          {node.label}
        </div>
      </foreignObject>
    </g>
  );
}

function Hub() {
  return (
    <g>
      {/* Outer glow ring */}
      <circle cx={HUB.x} cy={HUB.y} r={42} fill="#0066CC" fillOpacity={0.06} />
      {/* Mid ring */}
      <circle cx={HUB.x} cy={HUB.y} r={28} fill="#0066CC" fillOpacity={0.10} />
      {/* Core */}
      <circle cx={HUB.x} cy={HUB.y} r={16} fill="#0066CC" fillOpacity={0.20} />
      <circle cx={HUB.x} cy={HUB.y} r={8}  fill="#0066CC" fillOpacity={0.60} />
    </g>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function HeroBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const visibleNodes = isMobile ? NODES.filter(n => n.mobile) : NODES;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-40 dark:opacity-30"
      >
        {visibleNodes.map(node => (
          <NetworkNode key={node.id} node={node} />
        ))}
        <Hub />
      </svg>
    </div>
  );
}
```

**Step 2: Verify visually**

Temporarily import `HeroBackground` in `HeroSection.tsx` and drop it inside the section (above all other content). Run dev server.

```bash
cd apps/marketing && npm run dev
```

Open `http://localhost:3000`. Confirm:
- [ ] 6 node cards visible on desktop, 3 on mobile
- [ ] Paths connect each node to the hub
- [ ] Hub is a multi-ring glow in the right half
- [ ] Overall opacity is subtle — text is easily readable over it
- [ ] Dark mode looks correct (toggle via browser devtools: add `dark` class to `<html>`)

**Step 3: Commit**

```bash
cd apps/marketing
git add components/sections/HeroBackground.tsx
git commit -m "feat: hero background - static SVG convergence network skeleton"
```

---

## Task 2: Entrance animations

**Files:**
- Modify: `apps/marketing/components/sections/HeroBackground.tsx`

**Context:** Nodes fade/slide in staggered, paths draw on after nodes, hub scales in with a spring. All entrance animations run once on mount.

**Step 1: Add Framer Motion entrance to NetworkNode**

Replace `NetworkNode` with a version that receives `index` and animates in:

```tsx
import { motion } from 'framer-motion';

function NetworkNode({ node, index }: { node: NodeDef; index: number }) {
  const W = 110;
  const H = 44;

  return (
    <g>
      {/* Path draws on after node appears */}
      <motion.path
        id={`path-${node.id}`}
        d={pathD(node)}
        fill="none"
        stroke="#0066CC"
        strokeOpacity={0.25}
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 + 0.4, ease: 'easeOut' }}
        // +0.4 so path draws after node appears
      />

      {/* Node card */}
      <motion.foreignObject
        x={node.x - W / 2}
        y={node.y - H / 2}
        width={W}
        height={H}
        style={{ overflow: 'visible' }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
      >
        <div
          // @ts-expect-error xmlns required for SVG foreignObject
          xmlns="http://www.w3.org/1999/xhtml"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl
                     bg-white/80 dark:bg-white/5
                     border border-primary/20 dark:border-white/10
                     backdrop-blur-sm shadow-sm
                     text-xs font-semibold text-charcoal dark:text-white
                     whitespace-nowrap"
          style={{ width: W, height: H }}
        >
          <span className="material-symbols-outlined text-primary text-sm leading-none">
            {node.icon}
          </span>
          {node.label}
        </div>
      </motion.foreignObject>
    </g>
  );
}
```

**Step 2: Add Framer Motion entrance to Hub**

```tsx
function Hub() {
  return (
    <g>
      <motion.circle
        cx={HUB.x} cy={HUB.y} r={42}
        fill="#0066CC" fillOpacity={0.06}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <motion.circle
        cx={HUB.x} cy={HUB.y} r={28}
        fill="#0066CC" fillOpacity={0.10}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.15 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <motion.circle
        cx={HUB.x} cy={HUB.y} r={16}
        fill="#0066CC" fillOpacity={0.20}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <motion.circle
        cx={HUB.x} cy={HUB.y} r={8}
        fill="#0066CC" fillOpacity={0.60}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
    </g>
  );
}
```

**Step 3: Pass index to NetworkNode in render**

```tsx
{visibleNodes.map((node, i) => (
  <NetworkNode key={node.id} node={node} index={i} />
))}
```

**Step 4: Verify visually**

Reload `http://localhost:3000`. Confirm:
- [ ] Hub springs in first
- [ ] Nodes fade/slide up in sequence (~0.1s apart)
- [ ] Paths draw on after each node appears
- [ ] All entrance is smooth, not jarring

**Step 5: Commit**

```bash
git add components/sections/HeroBackground.tsx
git commit -m "feat: hero background - entrance animations (node stagger, path draw-on, hub spring)"
```

---

## Task 3: Ambient drift + hub pulse ring

**Files:**
- Modify: `apps/marketing/components/sections/HeroBackground.tsx`

**Context:** Each node drifts on a slow, unique sine-wave cycle. The hub emits a pulsing ring every ~3s. Both are continuous and non-synchronized. Respects `prefers-reduced-motion`.

**Step 1: Add drift data to NODES**

Add `driftPeriod` and `driftDelay` to each node entry:

```ts
const NODES = [
  { id: 'quotes',    label: 'Quotes',    icon: 'request_quote',          x: 240,  y: 130, mobile: true,  driftPeriod: 9,  driftDelay: 0   },
  { id: 'orders',    label: 'Orders',    icon: 'shopping_cart',           x: 1120, y: 90,  mobile: true,  driftPeriod: 12, driftDelay: 1.5 },
  { id: 'scheduler', label: 'Scheduler', icon: 'precision_manufacturing', x: 1280, y: 320, mobile: true,  driftPeriod: 8,  driftDelay: 3   },
  { id: 'pricing',   label: 'Pricing',   icon: 'grid_on',                 x: 1180, y: 530, mobile: false, driftPeriod: 14, driftDelay: 0.8 },
  { id: 'analytics', label: 'Analytics', icon: 'analytics',               x: 880,  y: 610, mobile: false, driftPeriod: 11, driftDelay: 2.2 },
  { id: 'customers', label: 'Customers', icon: 'people',                  x: 460,  y: 520, mobile: false, driftPeriod: 10, driftDelay: 4   },
] as const;
```

**Step 2: Wrap node card group in ambient drift motion**

Wrap the entire node `<g>` in a `<motion.g>` using `animate` loop:

```tsx
function NetworkNode({ node, index }: { node: NodeDef; index: number }) {
  const W = 110;
  const H = 44;

  return (
    <>
      {/* Static path — does not move with the node drift */}
      <motion.path
        id={`path-${node.id}`}
        d={pathD(node)}
        fill="none"
        stroke="#0066CC"
        strokeOpacity={0.25}
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 + 0.4, ease: 'easeOut' }}
      />

      {/* Drifting node card */}
      <motion.g
        animate={{ y: [0, -6, 0, 6, 0], x: [0, 3, 0, -3, 0] }}
        transition={{
          duration: node.driftPeriod,
          delay: node.driftDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.foreignObject
          x={node.x - W / 2}
          y={node.y - H / 2}
          width={W}
          height={H}
          style={{ overflow: 'visible' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
        >
          <div
            // @ts-expect-error xmlns required for SVG foreignObject
            xmlns="http://www.w3.org/1999/xhtml"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl
                       bg-white/80 dark:bg-white/5
                       border border-primary/20 dark:border-white/10
                       backdrop-blur-sm shadow-sm
                       text-xs font-semibold text-charcoal dark:text-white
                       whitespace-nowrap"
            style={{ width: W, height: H }}
          >
            <span className="material-symbols-outlined text-primary text-sm leading-none">
              {node.icon}
            </span>
            {node.label}
          </div>
        </motion.foreignObject>
      </motion.g>
    </>
  );
}
```

**Step 3: Add hub pulse ring**

Add a repeating `motion.circle` that scales outward and fades:

```tsx
function Hub() {
  return (
    <g>
      {/* Pulse ring — emits every 3s */}
      <motion.circle
        cx={HUB.x} cy={HUB.y} r={28}
        fill="none"
        stroke="#0066CC"
        strokeWidth={1}
        initial={{ scale: 1, opacity: 0.4 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: 'easeOut' }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />

      {/* Static rings (from Task 1, with entrance from Task 2) */}
      <motion.circle cx={HUB.x} cy={HUB.y} r={42} fill="#0066CC" fillOpacity={0.06}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <motion.circle cx={HUB.x} cy={HUB.y} r={28} fill="#0066CC" fillOpacity={0.10}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.15 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <motion.circle cx={HUB.x} cy={HUB.y} r={16} fill="#0066CC" fillOpacity={0.20}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <motion.circle cx={HUB.x} cy={HUB.y} r={8} fill="#0066CC" fillOpacity={0.60}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
    </g>
  );
}
```

**Step 4: Verify visually**

Reload `http://localhost:3000`. Confirm:
- [ ] Nodes drift subtly and asynchronously (no two nodes move in sync)
- [ ] Hub emits a slow expanding ring that fades out
- [ ] The breathing feel doesn't distract from reading the headline

**Step 5: Commit**

```bash
git add components/sections/HeroBackground.tsx
git commit -m "feat: hero background - ambient node drift and hub pulse ring"
```

---

## Task 4: Particle system

**Files:**
- Modify: `apps/marketing/components/sections/HeroBackground.tsx`

**Context:** 2–3 particles per path travel from each node to the hub using `useAnimationFrame` + SVG `getPointAtLength`. Particles fade in at the node and fade out near the hub.

**Step 1: Write the Particle component**

```tsx
interface ParticleProps {
  pathId: string;
  duration: number;   // seconds for one full trip
  startOffset: number; // 0-1, stagger offset so particles don't bunch up
}

function Particle({ pathId, duration, startOffset }: ParticleProps) {
  const circleRef = useRef<SVGCircleElement>(null);
  const startTimeRef = useRef<number | null>(null);

  useAnimationFrame((time) => {
    const circle = circleRef.current;
    // SVG path is in the DOM at this point since it's rendered alongside
    const pathEl = document.getElementById(pathId) as SVGPathElement | null;
    if (!circle || !pathEl) return;

    if (startTimeRef.current === null) startTimeRef.current = time;
    const elapsed = time - startTimeRef.current;
    const durationMs = duration * 1000;
    // Offset so particles are spread along the path, not all starting at once
    const progress = ((elapsed / durationMs) + startOffset) % 1;

    const totalLength = pathEl.getTotalLength();
    const point = pathEl.getPointAtLength(progress * totalLength);
    circle.setAttribute('cx', String(point.x));
    circle.setAttribute('cy', String(point.y));

    // Fade: in over first 10%, out over last 15%
    const opacity =
      progress < 0.10 ? progress / 0.10 :
      progress > 0.85 ? (1 - progress) / 0.15 :
      1;
    circle.setAttribute('opacity', String(opacity * 0.9));
  });

  return (
    <circle
      ref={circleRef}
      r={3}
      fill="#0066CC"
      opacity={0}
    />
  );
}
```

**Step 2: Add particles to NetworkNode**

Each node renders 2 particles on desktop, 1 on mobile. Pass `isMobile` as a prop:

```tsx
function NetworkNode({ node, index, isMobile }: { node: NodeDef; index: number; isMobile: boolean }) {
  const W = 110;
  const H = 44;
  const particleCount = isMobile ? 1 : 2;

  return (
    <>
      <motion.path
        id={`path-${node.id}`}
        d={pathD(node)}
        fill="none"
        stroke="#0066CC"
        strokeOpacity={0.25}
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 + 0.4, ease: 'easeOut' }}
      />

      {/* Particles — rendered after path so they draw over it */}
      {Array.from({ length: particleCount }, (_, i) => (
        <Particle
          key={i}
          pathId={`path-${node.id}`}
          duration={2.5 + index * 0.3} // slightly different speed per path
          startOffset={i / particleCount}
        />
      ))}

      <motion.g
        animate={{ y: [0, -6, 0, 6, 0], x: [0, 3, 0, -3, 0] }}
        transition={{
          duration: node.driftPeriod,
          delay: node.driftDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.foreignObject
          x={node.x - W / 2}
          y={node.y - H / 2}
          width={W}
          height={H}
          style={{ overflow: 'visible' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
        >
          <div
            // @ts-expect-error xmlns required for SVG foreignObject
            xmlns="http://www.w3.org/1999/xhtml"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl
                       bg-white/80 dark:bg-white/5
                       border border-primary/20 dark:border-white/10
                       backdrop-blur-sm shadow-sm
                       text-xs font-semibold text-charcoal dark:text-white
                       whitespace-nowrap"
            style={{ width: W, height: H }}
          >
            <span className="material-symbols-outlined text-primary text-sm leading-none">
              {node.icon}
            </span>
            {node.label}
          </div>
        </motion.foreignObject>
      </motion.g>
    </>
  );
}
```

**Step 3: Pass `isMobile` down from the main component**

```tsx
{visibleNodes.map((node, i) => (
  <NetworkNode key={node.id} node={node} index={i} isMobile={isMobile} />
))}
```

**Step 4: Verify visually**

Reload `http://localhost:3000`. Confirm:
- [ ] Small blue dots travel from each node toward the hub
- [ ] Dots fade in at the node, fade out before reaching the hub
- [ ] Each path has 2 dots on desktop, 1 on mobile, staggered so they're evenly spaced
- [ ] Particles don't bunch at the hub
- [ ] No noticeable frame rate drop (check browser devtools Performance tab briefly)

**Step 5: Commit**

```bash
git add components/sections/HeroBackground.tsx
git commit -m "feat: hero background - particle system traveling along network paths"
```

---

## Task 5: Wire into HeroSection + cleanup

**Files:**
- Modify: `apps/marketing/components/sections/HeroSection.tsx`
- Delete: `apps/marketing/components/sections/SplineHero.tsx`

**Context:** HeroSection currently has Spline mount logic, a 5s fallback timer, opacity-0 reveal, and mobile blob divs. All of that goes away. The section becomes opacity-1 from the start. `HeroBackground` drops in as a simple child.

**Step 1: Read the current HeroSection before editing**

Read `apps/marketing/components/sections/HeroSection.tsx` in full to understand what to remove.

**Step 2: Replace HeroSection with the simplified version**

```tsx
'use client';

import { motion } from "framer-motion";
import HeroBackground from './HeroBackground';
import InteractiveGridPattern from '@/components/ui/InteractiveGridPattern';

export default function HeroSection() {
    return (
        <section
            id="hero"
            aria-label="Welcome to Shop Titan"
            className="relative bg-background dark:bg-background-dark min-h-[80vh] flex flex-col justify-start overflow-hidden"
        >
            {/* Convergence Network Background */}
            <HeroBackground />

            {/* Readability overlays — keep existing ones unchanged */}
            <div className="absolute inset-0 z-[1] bg-white/30 dark:bg-black/40 pointer-events-none" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/70 to-transparent dark:from-black dark:via-black/70 dark:to-transparent pointer-events-none lg:block hidden" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/10 via-transparent to-white/80 dark:from-black/10 dark:via-transparent dark:to-black/80 pointer-events-none lg:hidden block" />

            {/* Hero Content — unchanged */}
            <div className="relative pt-32 pb-20 md:pt-24 lg:pt-32 lg:pb-40 z-20">
                <div className="max-w-7xl mx-auto px-mobile relative">
                    <div className="max-w-3xl text-left">
                        <motion.header
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mb-8 md:mb-12"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal dark:text-white leading-[1.1] mb-8 tracking-tight">
                                A single source of truth for the decoration industry.
                            </h1>
                            <p
                                className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl text-secondary-text dark:text-gray-300 font-medium"
                                role="doc-subtitle"
                            >
                                Our system allows you to focus on what you do best.
                            </p>
                        </motion.header>

                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-5 justify-start"
                            aria-label="Primary call-to-action"
                        >
                            <a
                                href="/reach-out"
                                className="px-10 py-5 text-xl font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full flex items-center gap-2 justify-center"
                                aria-label="Contact us to get started"
                            >
                                <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-charcoal/30 dark:group-hover:border-white/40 transition-colors rounded-full" />
                                <span className="relative z-10">Let&apos;s Talk</span>
                                <span className="material-symbols-outlined text-xl relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                                    arrow_forward
                                </span>
                            </a>
                            <button
                                onClick={() => document.getElementById('pain-points')?.scrollIntoView({ behavior: 'auto' })}
                                className="px-10 py-5 text-xl font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full"
                                aria-label="Scroll to platform features section"
                            >
                                <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 rounded-full" />
                                <span className="relative z-10">See How It Works</span>
                            </button>
                        </motion.nav>
                    </div>
                </div>

                {/* Subtle Grid overlay for texture */}
                <InteractiveGridPattern
                    width={120}
                    height={120}
                    className="opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
                />
            </div>
        </section>
    );
}
```

**Step 3: Verify visually**

Reload `http://localhost:3000`. Confirm:
- [ ] Hero section renders at full opacity immediately (no fade-in wait)
- [ ] Convergence Network is visible in the background
- [ ] Headline, subtitle, and both buttons are unchanged
- [ ] Readability overlays keep the text area clean on both desktop and mobile
- [ ] No console errors

**Step 4: Delete SplineHero.tsx**

```bash
rm apps/marketing/components/sections/SplineHero.tsx
```

Confirm no import of `SplineHero` exists anywhere:

```bash
grep -r "SplineHero" apps/marketing/components apps/marketing/app
# Should return no results
```

**Step 5: Final commit**

```bash
git add components/sections/HeroSection.tsx
git rm components/sections/SplineHero.tsx
git commit -m "feat: hero background - wire HeroBackground into HeroSection, remove Spline"
```

---

## Task 6: Visual polish pass

**Files:**
- Modify: `apps/marketing/components/sections/HeroBackground.tsx` (tune only if needed)

**Context:** After seeing all layers together, adjust opacity and particle opacity as needed. No logic changes — only numeric constants.

**Things to tune if needed:**
- Overall SVG opacity: currently `opacity-40 dark:opacity-30` on the SVG element
- Particle size: `r={3}` — try `r={2.5}` if too prominent
- Path stroke opacity: `0.25` — try `0.20` if lines feel heavy
- Hub pulse ring: `repeatDelay: 0.5` — increase to `1.5` if pulse feels too frequent
- Node drift amplitude: `y: [0, -6, 0, 6, 0]` — try `[0, -4, 0, 4, 0]` for subtler movement

**Step 1: Test on multiple viewport widths**

Using browser devtools, verify at:
- [ ] 375px (mobile)
- [ ] 768px (tablet)
- [ ] 1280px (desktop)
- [ ] 1920px (large desktop)

**Step 2: Commit polish changes (if any)**

```bash
git add components/sections/HeroBackground.tsx
git commit -m "chore: hero background - visual polish pass (opacity/particle tuning)"
```

---

## Done

The hero background is now:
- A single unified component on all screen sizes
- Zero external dependencies (no Spline, no 3D library)
- Instant render — no async load or fallback timer
- Narratively on-brand: platform modules visibly converging to a single hub
