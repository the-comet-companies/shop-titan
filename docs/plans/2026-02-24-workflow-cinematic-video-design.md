# Design: Workflow Cinematic Video

**Date:** 2026-02-24
**Status:** Approved — Iteration 2 (icon assets added)
**Feature:** Pre-rendered Remotion cinematic video cycling all 13 workflow stages
**Page Section:** Between `FeaturesSection` and `ProductShowcaseSection`

---

## Overview

A 39-second pre-rendered MP4 video that cycles through all 13 stages of the Shop Titan workflow in a dark, cinematic typographic style. The video is rendered via Remotion in a standalone workspace, output to `apps/marketing/public/animations/workflow.mp4`, and embedded in the marketing site as a native `<video>` element inside a new `WorkflowVideoSection` component.

The "theater moment" effect — a dark, full-width cinematic clip inside an otherwise light-mode page — is intentional. It creates contrast and draws attention, in the style of Apple and Stripe product pages.

---

## Decisions Made

| Decision | Choice | Rationale |
|---|---|---|
| Delivery | Pre-rendered MP4 | Zero runtime JS, best performance on Vercel, polished feel |
| Visual style | Dark cinematic / typographic | Theater moment, high contrast against light site |
| Placement | After Features, before Benefits | Video acts as "full picture" momentum builder |
| Duration | 3s per stage (~39s total) | Fast-paced, energetic, respects attention spans |
| Dimensions | 1920×1080 | Standard HD, 16:9 |
| FPS | 30 | Standard for web video |

---

## Remotion Workspace

**Location:** `apps/remotion/` (standalone package in monorepo)

This is a build-time tool only — it is never deployed. Running the render command outputs the final MP4 to the marketing app's public folder.

```
apps/remotion/
├── package.json
├── remotion.config.ts
└── src/
    ├── index.ts           # registerRoot
    ├── Root.tsx           # <Composition> registration
    └── WorkflowVideo/
        ├── index.tsx      # Main composition
        ├── Stage.tsx      # Individual stage component
        ├── Intro.tsx      # Intro sequence
        ├── Outro.tsx      # Outro sequence
        └── data.ts        # Stage copy / data
```

**Render command:**
```bash
cd apps/remotion
npx remotion render WorkflowVideo ../../apps/marketing/public/animations/workflow.mp4
```

---

## Composition Specs

| Property | Value |
|---|---|
| Composition ID | `WorkflowVideo` |
| Width | 1920px |
| Height | 1080px |
| FPS | 30 |
| Intro | 60 frames (2s) |
| Per stage | 90 frames (3s) × 13 stages = 1,170 frames |
| Outro | 60 frames (2s) |
| **Total** | **1,290 frames (~43s)** |

---

## Per-Stage Layout

Each stage occupies 90 frames. Layout is vertically centered on a `#0A0A0A` background. A large Lucide icon dominates the upper portion; text flows below.

```
                    [#0A0A0A background]

        [radial glow, rgba(0,102,204,0.12), ~400px diameter]
              [Lucide icon, 220px, #0066CC]          ← spring scale in, fr 8–30

                      01                             ← stage number, #6E6E73, fr 30–45
                    LEAD                             ← stage name, #FFFFFF, 80px, fr 42–60
                    ─────                            ← rule draws from center, fr 52–65
              Every job starts with a name.          ← insight copy, #6E6E73, fr 60–82
              Capture it before it goes cold.


[████████████░░░░░░░░░░░░░░░░░░░░░░]                 ← progress bar, #0066CC, 3px, bottom
```

### Animation Sequence Per Stage (Iteration 2)

| Frame Range | Element | Animation |
|---|---|---|
| 0–8 | Full screen | White flash cut (transition from previous stage) |
| 8–25 | Icon glow | Fade in behind icon |
| 8–30 | Lucide icon | Spring scale `0→1` + fade in |
| 30–45 | Stage number | Fade in |
| 42–60 | Stage name | Slide up `translateY(20px)→0` + fade in |
| 52–65 | Thin rule | Scale `0→1` from center |
| 60–82 | Insight copy | Fade up |
| 0–90 | Progress bar | Fill `0%→100%`, linear |

### Icon Rendering

- **Size:** 220×220px (Lucide `size` prop)
- **Color:** `#0066CC`
- **Stroke width:** 1.5 (thinner for large display)
- **Glow:** radial gradient div behind icon — `rgba(0,102,204,0.12)` center → `transparent` edge, 400×400px
- **Animation:** `spring({ frame: frame - 8, fps, config: { damping: 200 } })` for scale, `interpolate(frame, [8,25], [0,1])` for opacity

---

## Intro Sequence (60 frames / 2s)

- Frame 0–10: Black screen
- Frame 10–40: "The complete workflow." — Inter Bold, white, centered — fades in
- Frame 40–50: Hold
- Frame 50–60: Cut (white flash) into Stage 01

---

## Outro Sequence (60 frames / 2s)

- Frame 0–10: White flash cut from Stage 13
- Frame 10–15: Fade to black
- Frame 20–40: "Shop Titan." — Inter Bold, white, centered — fades in
- Frame 40–60: "One system. End to end." — Inter Regular, `#6E6E73` — fades in below

---

## Stage Icons (Lucide React)

| # | Stage Name | Lucide Icon | Import Name |
|---|---|---|---|
| 01 | LEAD | User Plus | `UserPlus` |
| 02 | QUOTE | File Text | `FileText` |
| 03 | QUOTE FOLLOW UPS | Bell Ring | `BellRing` |
| 04 | DEVELOPMENT | Settings | `Settings` |
| 05 | CREATIVE PROOFS | Palette | `Palette` |
| 06 | APPROVAL SYSTEM | Check Circle | `CheckCircle` |
| 07 | SAMPLING | Flask Conical | `FlaskConical` |
| 08 | PRODUCTION | Factory | `Factory` |
| 09 | PAYMENT LINKS | Credit Card | `CreditCard` |
| 10 | SHIPPING LABELS | Truck | `Truck` |
| 11 | PACKING DATA | Clipboard List | `ClipboardList` |
| 12 | INVOICING | Receipt | `Receipt` |
| 13 | REPORTING | Bar Chart 3 | `BarChart3` |

Icons are rendered inline as React components from `lucide-react`. The `icon` field in `StageData` stores the string name; `Stage.tsx` uses a lookup map to resolve the component.

---

## Stage Copy

| # | Stage Name (display) | Insight Copy |
|---|---|---|
| 01 | LEAD | Every job starts with a name. Capture it before it goes cold. |
| 02 | QUOTE | Professional quotes in seconds. Pricing matrices, not guesswork. |
| 03 | QUOTE FOLLOW UPS | Automated follow-ups. No lead dies in silence. |
| 04 | DEVELOPMENT | Custom job specs built once, referenced forever. |
| 05 | CREATIVE PROOFS | Artwork in, proof out. Version control built in. |
| 06 | APPROVAL SYSTEM | Client sign-off without the email thread. |
| 07 | SAMPLING | Pre-production samples tracked, not forgotten. |
| 08 | PRODUCTION | Machines scheduled. Team assigned. Status live. |
| 09 | PAYMENT LINKS | Payment sent automatically. Revenue recorded instantly. |
| 10 | SHIPPING LABELS | Labels printed the moment production closes. |
| 11 | PACKING DATA | Every item. Every count. Verified before it ships. |
| 12 | INVOICING | Invoices generated. Nothing falls through the cracks. |
| 13 | REPORTING | Every job, every margin, every machine. In one view. |

---

## Page Embedding

### New Component: `WorkflowVideoSection.tsx`

**File:** `apps/marketing/components/sections/WorkflowVideoSection.tsx`

**Layout:**

```
Section wrapper (py-24, light bg)
├── Section header
│   ├── "Every stage. One system."   ← Inter Bold, ~48px, #1D1D1F
│   └── "From the first lead to the final report — fully connected."
│                                    ← Inter Regular, #6E6E73
│
└── Video container (max-w-6xl, mx-auto, rounded-2xl, overflow-hidden)
    └── <video autoPlay loop muted playsInline>
            src="/animations/workflow.mp4"
```

**Scroll behavior:** Scroll-triggered fade-in using existing `useScrollAnimation` hook.

### Page Order Update (`apps/marketing/app/page.tsx`)

```tsx
<HeroSection />
<PainPointSection />
<FeaturesSection />
<WorkflowVideoSection />   // ← NEW
<BenefitsSection />
<IndustriesSection />
<ShowcaseSection />
<CtaSection />
```

---

## Typography

All text uses Inter (already loaded globally via `--font-inter`).

| Element | Font | Size | Weight | Color | Notes |
|---|---|---|---|---|---|
| Stage number | Inter | 14px | 400 | `#6E6E73` | |
| Stage name | Inter | **80px** | 700 | `#FFFFFF` | Reduced from 96px to accommodate icon |
| Rule | — | 2px height | — | `#0066CC` | |
| Insight copy | Inter | 22px | 400 | `#6E6E73` | |
| Progress bar | — | 3px height | — | `#0066CC` | |
| Lucide icon | — | 220×220px | — | `#0066CC` | stroke-width 1.5 |
| Icon glow | — | 400×400px | — | `rgba(0,102,204,0.12)` | radial gradient |
| Intro/Outro headline | Inter | 72px | 700 | `#FFFFFF` | |
| Outro subline | Inter | 28px | 400 | `#6E6E73` | |

---

## Dependencies to Install

In `apps/remotion/package.json` — add `lucide-react`:

```json
{
  "dependencies": {
    "remotion": "^4.0.0",
    "@remotion/cli": "^4.0.0",
    "@remotion/google-fonts": "^4.0.0",
    "lucide-react": "^0.469.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

> No Remotion or Lucide packages needed in the marketing app — only the pre-rendered MP4 is consumed there.

---

## File Outputs

| File | Description |
|---|---|
| `apps/remotion/` | New Remotion workspace |
| `apps/marketing/public/animations/workflow.mp4` | Rendered video output |
| `apps/marketing/components/sections/WorkflowVideoSection.tsx` | New page section |
| `apps/marketing/app/page.tsx` | Updated to include new section |

---

## Data Schema Change (Iteration 2)

`StageData` in `data.ts` gains an `icon` field:

```ts
export type StageData = {
  id: string;
  number: string;
  name: string;
  insight: string;
  icon: string; // Lucide icon component name, e.g. "UserPlus"
};
```

`Stage.tsx` uses a static lookup map to resolve the string to a Lucide component:

```tsx
import { UserPlus, FileText, BellRing, /* ... */ } from "lucide-react";

const ICON_MAP: Record<string, React.FC<{ size: number; color: string; strokeWidth: number }>> = {
  UserPlus, FileText, BellRing, Settings, Palette,
  CheckCircle, FlaskConical, Factory, CreditCard,
  Truck, ClipboardList, Receipt, BarChart3,
};
```

---

## Files Changed in Iteration 2

| File | Change |
|---|---|
| `apps/remotion/package.json` | Add `lucide-react` dependency |
| `apps/remotion/src/WorkflowVideo/data.ts` | Add `icon` field to type + all 13 stage entries |
| `apps/remotion/src/WorkflowVideo/Stage.tsx` | Add icon + glow rendering, updated animation timing, stage name 96px→80px |
| `apps/marketing/public/animations/workflow.mp4` | Re-rendered output |

---

## Out of Scope

- Audio / voiceover (not requested)
- Interactive player controls (pre-rendered only)
- Mobile-specific composition (video scales via CSS)
- Captions/subtitles (not requested)
