# IndustriesSection Redesign — Design Document

**Date:** 2026-02-27
**Status:** Approved

## Goal

Unify the currently split marquee + capabilities section into one cohesive dark-themed section that matches the visual energy of PainPoint3D and the polished sections around it.

---

## Current Problems

- Two disconnected zones (marquee zone + capabilities zone) separated by `border-b` and `mb-32` gap
- Plain `bg-background-light` — no visual depth, no contrast with surrounding sections
- Capability checklist animates in as one block — no stagger, no personality
- Marquee edge fades reference `background-light` — wrong on any dark treatment
- Section header underutilizes the rotating word mechanic (small `text-2xl`)
- Capabilities are plain rows with a tiny SVG checkmark — inconsistent with badge/pill language elsewhere

---

## New Architecture

### 1. Background

**Section bg:** `bg-background-dark dark:bg-background-dark` (`#0a0a0a`)

**Top bleed (light → dark):** Absolute `h-40 inset-x-0 top-0 bg-gradient-to-b from-background-light dark:from-background-dark to-transparent pointer-events-none z-0` — in light mode creates smooth fade from previous section's white into the dark bg; invisible in dark mode.

**Bottom bleed (dark → light):** Same pattern at bottom — `h-40 inset-x-0 bottom-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none z-0`.

**Background orbs:** Three faint animated orbs (matching FeaturesSection) at reduced opacity (`opacity-50`):
- Top-right: `bg-primary/[0.06]` with `animate-gradient-flow-1`
- Mid-left: `bg-indigo-500/[0.04]` with `animate-gradient-flow-2`
- Bottom-center: `bg-teal-400/[0.03]` with `animate-gradient-flow-3`

---

### 2. Section Header

Centered, `max-w-3xl mx-auto text-center`, staggered `whileInView` entry with `viewport={{ once: true }}`:

| Element | Delay | Classes |
|---|---|---|
| Eyebrow pill | 0ms | `px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase` · text: `"WHO WE SERVE"` |
| H2 | 100ms | `text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight` · copy: `"Built for businesses who actually make things."` with `italic font-serif` on "actually make" |
| Rotating subtitle | 200ms | `text-xl md:text-2xl text-white/60 font-medium` · prefix: `"Not just for"` · rotating word: `italic font-serif text-white` · wrapped in `AnimatePresence mode="wait"` |

Rotating word cycles every 2500ms through `highlightWords`. `IntersectionObserver` starts/stops the interval when the section enters/exits the viewport (same logic as current).

---

### 3. Marquee

Two-row infinite scroll — structure unchanged.

**Pill styling (updated for dark bg):**
```
bg-white/5 border border-white/10 text-white/75
text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap
hover:bg-white/10 hover:border-white/20 transition-colors
```

**Edge fades:** Change `from-background-light` → `from-background-dark` on both sides (left and right gradient overlays).

**Speed/direction:** Unchanged — 120s duration, alternating direction, offset delay.

**Bridge text (below marquee):**
```
"If your shop handles any of these, you're in the right place."
```
Class: `text-sm text-white/40 font-medium tracking-widest uppercase text-center mt-10 mb-8`

---

### 4. Capability Badges

Replaces the plain checklist. `flex flex-wrap gap-3 justify-center max-w-4xl mx-auto`.

**Badge styling:**
```
bg-white/8 border border-white/15 rounded-full
px-4 py-2.5 text-sm font-medium text-white/90
flex items-center gap-2
hover:bg-white/15 hover:border-white/25 transition-colors duration-200
```

**Icon:** `material-symbols-outlined text-primary text-base` — blue icon pops on dark bg.

**Icon mapping:**

| Capability | Icon |
|---|---|
| Take in custom orders | `shopping_bag` |
| Manage artwork | `palette` |
| RFQs & Work with subcontractors | `handshake` |
| Schedule machines | `precision_manufacturing` |
| Assign production tasks | `task_alt` |
| Manage pricing matrices | `grid_on` |
| Deal with rush jobs | `bolt` |
| Track QC | `verified` |
| Coordinate vendors | `people` |
| Handle sampling and reorders | `repeat` |

**Entry animation:** Each badge individually animated:
- `initial={{ opacity: 0, scale: 0.9 }}` → `animate={{ opacity: 1, scale: 1 }}`
- `whileInView`, `viewport={{ once: true }}`
- `delay: index * 0.06` (0ms → 540ms sweep)
- `transition={{ type: 'spring', stiffness: 280, damping: 22 }}`

---

### 5. Section Padding & Spacing

- Section: `pt-40 pb-40` (tall, to account for gradient bleeds)
- Content: `relative z-10`
- Header block: `mb-16 md:mb-20`
- Marquee block: `mb-0` (bridge text provides spacing)
- Capabilities block: `mt-0 pb-16`

---

### 6. Removed

| Removed | Reason |
|---|---|
| Two-column bottom grid (`lg:grid-cols-2`) | Replaced by centered single-column layout |
| Plain SVG checkmark + text row checklist | Replaced by staggered badge pills |
| `border-b` separator between zones | Section is now unified |
| `mb-20 md:mb-32` gap between zones | Tight uniform spacing instead |
| `from-background-light` edge fades | Updated to `from-background-dark` |
| `lg:order-last` column flip | No longer relevant |

---

### 7. Preserved

| Preserved | Where |
|---|---|
| `distributeIntoRows` helper | Marquee row distribution |
| `industryRows` computation | Marquee rendering |
| `highlightWords` array | Rotating subtitle |
| `capabilities` array | Badge data (icons added) |
| `carousel-track` CSS animation | Marquee scroll |
| IntersectionObserver for interval start/stop | Section visibility tracking |
