# Hero Background Redesign — Design Doc

**Date:** 2026-03-02
**Status:** Approved
**Scope:** Background animation only. Headline, subtitle, CTAs, and layout are unchanged.

---

## Problem

The current hero background has two separate, mismatched implementations:

- **Desktop:** Spline 3D scene (a logistics/container yard) — visually unrelated to the decoration industry, slow to load, 5s fallback timeout, unreliable
- **Mobile:** Four spinning blob gradients — generic, no narrative connection

Neither reinforces the headline: *"A single source of truth for the decoration industry."*

---

## Solution: "The Convergence Network"

A full-bleed animated SVG background showing the Shop Titan platform's modules as floating nodes (Quote, Orders, Scheduler, Pricing, Analytics, Customers) connected to a central glowing hub by lines with traveling particles. Everything flows into one place — the product's core promise made visual.

---

## Section 1 — Visual Structure

- SVG absolutely positioned (`inset-0 w-full h-full`), `viewBox="0 0 1440 720"`, `preserveAspectRatio="xMidYMid slice"`
- **Center hub:** glowing pulsing orb at ~65% from left, vertically centered — sits in the right half behind the text block
- **6–7 module nodes** radiating outward at organic, asymmetric positions. Each node is a small glass card with a Material Symbol icon + label
- **Hero text** (`max-w-3xl`, left-aligned) sits at `z-20`, in front of the network
- **Network opacity:** ~30–40% overall so text readability is never compromised
- **Readability overlays:** existing `from-white via-white/70 to-transparent` gradient overlay is kept, ensuring the left side (text area) is always clean

**Node list:**

| id | Label | Icon |
|---|---|---|
| quotes | Quotes | `request_quote` |
| orders | Orders | `shopping_cart` |
| scheduler | Scheduler | `precision_manufacturing` |
| pricing | Pricing | `grid_on` |
| analytics | Analytics | `analytics` |
| customers | Customers | `people` |

**Light mode:** white glass nodes (`bg-white/80 border border-primary/20`), lines `stroke-primary/25`, particles `fill-primary`

**Dark mode:** dark glass nodes (`bg-white/5 border border-white/10`), lines `stroke-white/15`, particles `fill-primary/80`

**Mobile (below `md`):** 3 nodes shown (Quotes, Orders, Scheduler), hub centered, layout simplified

---

## Section 2 — Animation Layers

### Layer 1 — Entrance (one-time, on load)
- Nodes: `opacity 0→1, y 20→0`, staggered 0.1s apart, Framer Motion
- Paths: SVG `pathLength 0→1`, duration 0.8s each, staggered after nodes
- Hub: scale `0.5→1`, Framer Motion spring (`stiffness: 200, damping: 20`)

### Layer 2 — Idle Ambient (continuous)
- Each node drifts on an independent sine-wave (±6px vertical, ±4px horizontal)
- Each node has a unique period (8–14s) so motion is never synchronized
- Hub emits a slow radial pulse ring every ~3s: expands outward, fades to transparent

### Layer 3 — Particles (continuous)
- 2–3 particles per connection path, evenly staggered in time
- Travel direction: outer node → center hub
- Implementation: CSS `offset-path: url(#path-{id})` + `offset-distance` animated via `@keyframes`
- Particle style: `r=3` filled circle in brand primary, fade in at start, fade out near hub
- Travel time: 2.5–3.5s per trip (varies per path)

### Reduced Motion
- `prefers-reduced-motion`: particles and ambient drift are disabled; nodes and lines remain static. Handled by existing `globals.css` rule.

---

## Section 3 — Technical Implementation

### Files

| File | Change |
|---|---|
| `components/sections/HeroSection.tsx` | Replace Spline mount logic with `<HeroBackground />` |
| `components/sections/HeroBackground.tsx` | New component — the SVG network |
| `components/sections/SplineHero.tsx` | **Deleted** |

### HeroBackground component
- Node positions defined as a typed data array: `{ id, label, icon, x, y, mobileVisible }`
- Paths: cubic bezier curves between each node and the hub for organic feel
- Nodes rendered as SVG `<foreignObject>` containing a `div` with icon + label (keeps Material Symbols icon system)
- Fallback: pure SVG `<circle>` + `<text>` if `foreignObject` causes layout issues
- Particle `<circle>` elements reference their parent path via `offset-path`

### HeroSection changes
- Remove `useState(mountSpline)`, `handleSplineReady`, the 5s fallback timer
- Remove Spline-related `useEffect`
- Remove `dynamic(() => import('./SplineHero'))` import
- Section `opacity` starts at `1` (no fade-in gate needed — no slow asset to wait for)
- Replace both background layers (Spline div + mobile wave divs) with `<HeroBackground />`

### Responsive
- `HeroBackground` reads a `isMobile` flag (via `useEffect` + `window.innerWidth < 768`)
- Mobile: hub at center, 3 nodes, reduced particle count (1 per path)
- Desktop: hub at 65% x, full 6 nodes, 2–3 particles per path

---

## Out of Scope

- Headline, subtitle, CTA buttons — no changes
- Section padding, layout, z-index of content — no changes
- Dark mode toggle behavior — no changes
- Any other section of the page
