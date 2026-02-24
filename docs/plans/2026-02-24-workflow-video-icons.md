# Workflow Video — Icon Assets Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a large animated Lucide icon per stage to the Remotion WorkflowVideo, replacing the text-only layout with a visual-first design where a 220px icon dominates the upper half and text flows below.

**Architecture:** Two file changes + one dependency install + one re-render. `data.ts` gains an `icon` string field on `StageData`. `Stage.tsx` gains an icon lookup map, radial glow div, animated icon zone above the text block, and updated animation timing. The MP4 is re-rendered and committed.

**Tech Stack:** Remotion 4, `lucide-react`, React 19, TypeScript. All changes are isolated to `apps/remotion/`.

**Design reference:** `docs/plans/2026-02-24-workflow-cinematic-video-design.md`

---

## Critical Remotion Rules (Must Follow)

- **ALL animations use `useCurrentFrame()` + `interpolate()` or `spring()` — never CSS transitions**
- **CSS transitions/animations are FORBIDDEN — will not render in Remotion**
- **Tailwind animation classes are FORBIDDEN — will not render in Remotion**
- Always add `extrapolateLeft: "clamp"` and `extrapolateRight: "clamp"` to every `interpolate()` call

---

## Task 1: Install lucide-react

**Files:**
- Modify: `apps/remotion/package.json`

**Step 1: Add lucide-react to package.json dependencies**

Edit `apps/remotion/package.json`. Add `"lucide-react": "^0.469.0"` to the `dependencies` block:

```json
{
  "name": "shop-titan-remotion",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "studio": "remotion studio",
    "render": "remotion render WorkflowVideo --output ../../apps/marketing/public/animations/workflow.mp4"
  },
  "dependencies": {
    "@remotion/cli": "^4.0.0",
    "@remotion/google-fonts": "^4.0.0",
    "lucide-react": "^0.469.0",
    "remotion": "^4.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.6",
    "@types/react-dom": "^19.2.3",
    "typescript": "^5.7.3"
  }
}
```

**Step 2: Install**

```bash
cd apps/remotion && npm install
```

Expected: `lucide-react` added to `node_modules/`, lockfile updated, no errors.

**Step 3: Verify import works**

```bash
cd apps/remotion && node -e "const { UserPlus } = require('lucide-react'); console.log(typeof UserPlus)"
```

Expected output: `function`

**Step 4: Commit**

```bash
git add apps/remotion/package.json apps/remotion/package-lock.json
git commit -m "feat(remotion): install lucide-react for stage icons"
```

---

## Task 2: Update data.ts — Add icon field

**Files:**
- Modify: `apps/remotion/src/WorkflowVideo/data.ts`

**Step 1: Replace the entire file with this content**

```ts
export type StageData = {
  id: string;
  number: string;
  name: string;
  insight: string;
  icon: string;
};

export const STAGES: StageData[] = [
  {
    id: "lead",
    number: "01",
    name: "LEAD",
    insight: "Every job starts with a name.\nCapture it before it goes cold.",
    icon: "UserPlus",
  },
  {
    id: "quote",
    number: "02",
    name: "QUOTE",
    insight: "Professional quotes in seconds.\nPricing matrices, not guesswork.",
    icon: "FileText",
  },
  {
    id: "follow-ups",
    number: "03",
    name: "QUOTE FOLLOW UPS",
    insight: "Automated follow-ups.\nNo lead dies in silence.",
    icon: "BellRing",
  },
  {
    id: "development",
    number: "04",
    name: "DEVELOPMENT",
    insight: "Custom job specs built once,\nreferenced forever.",
    icon: "Settings",
  },
  {
    id: "creative-proofs",
    number: "05",
    name: "CREATIVE PROOFS",
    insight: "Artwork in, proof out.\nVersion control built in.",
    icon: "Palette",
  },
  {
    id: "approval",
    number: "06",
    name: "APPROVAL SYSTEM",
    insight: "Client sign-off without\nthe email thread.",
    icon: "CheckCircle",
  },
  {
    id: "sampling",
    number: "07",
    name: "SAMPLING",
    insight: "Pre-production samples tracked,\nnot forgotten.",
    icon: "FlaskConical",
  },
  {
    id: "production",
    number: "08",
    name: "PRODUCTION",
    insight: "Machines scheduled. Team assigned.\nStatus live.",
    icon: "Factory",
  },
  {
    id: "payment",
    number: "09",
    name: "PAYMENT LINKS",
    insight: "Payment sent automatically.\nRevenue recorded instantly.",
    icon: "CreditCard",
  },
  {
    id: "shipping",
    number: "10",
    name: "SHIPPING LABELS",
    insight: "Labels printed the moment\nproduction closes.",
    icon: "Truck",
  },
  {
    id: "packing",
    number: "11",
    name: "PACKING DATA",
    insight: "Every item. Every count.\nVerified before it ships.",
    icon: "ClipboardList",
  },
  {
    id: "invoicing",
    number: "12",
    name: "INVOICING",
    insight: "Invoices generated.\nNothing falls through the cracks.",
    icon: "Receipt",
  },
  {
    id: "reporting",
    number: "13",
    name: "REPORTING",
    insight: "Every job, every margin,\nevery machine. In one view.",
    icon: "BarChart3",
  },
];

export const FPS = 30;
export const STAGE_FRAMES = 90; // 3s
export const INTRO_FRAMES = 60; // 2s
export const OUTRO_FRAMES = 60; // 2s
// 60 + (13 × 90) + 60 = 1,290 frames total
export const TOTAL_FRAMES =
  INTRO_FRAMES + STAGES.length * STAGE_FRAMES + OUTRO_FRAMES;
```

**Step 2: Verify all 13 icons are assigned**

Check each stage entry has an `icon` field and that the icon names match exactly: `UserPlus`, `FileText`, `BellRing`, `Settings`, `Palette`, `CheckCircle`, `FlaskConical`, `Factory`, `CreditCard`, `Truck`, `ClipboardList`, `Receipt`, `BarChart3`.

**Step 3: Commit**

```bash
git add apps/remotion/src/WorkflowVideo/data.ts
git commit -m "feat(remotion): add icon field to StageData and all 13 stages"
```

---

## Task 3: Update Stage.tsx — Icon rendering and updated timing

**Files:**
- Modify: `apps/remotion/src/WorkflowVideo/Stage.tsx`

Replace the entire file with the following:

```tsx
import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  AbsoluteFill,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import {
  UserPlus,
  FileText,
  BellRing,
  Settings,
  Palette,
  CheckCircle,
  FlaskConical,
  Factory,
  CreditCard,
  Truck,
  ClipboardList,
  Receipt,
  BarChart3,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { STAGE_FRAMES } from "./data";
import type { StageData } from "./data";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  UserPlus,
  FileText,
  BellRing,
  Settings,
  Palette,
  CheckCircle,
  FlaskConical,
  Factory,
  CreditCard,
  Truck,
  ClipboardList,
  Receipt,
  BarChart3,
};

type StageProps = {
  stage: StageData;
};

export const Stage: React.FC<StageProps> = ({ stage }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // White flash: fades from opaque to transparent over first 8 frames
  const flashOpacity = interpolate(frame, [0, 8], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Icon: spring scale in from frame 8, completes ~frame 30
  const iconScale = spring({
    frame: frame - 8,
    fps,
    config: { damping: 200 },
    durationInFrames: 22,
  });

  // Icon opacity: fades in frames 8–25
  const iconOpacity = interpolate(frame, [8, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Glow opacity: fades in frames 8–25
  const glowOpacity = interpolate(frame, [8, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage number: fades in frames 30–45
  const numberOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage name: slides up + fades in frames 42–60
  const nameOpacity = interpolate(frame, [42, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const nameY = interpolate(frame, [42, 60], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Rule: draws symmetrically from center, frames 52–65
  const ruleScale = interpolate(frame, [52, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Insight copy: fades up, frames 60–82
  const insightOpacity = interpolate(frame, [60, 82], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const insightY = interpolate(frame, [60, 82], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Progress bar: fills 0→100% linearly over full stage duration
  const progressWidth = interpolate(frame, [0, STAGE_FRAMES], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const IconComponent = ICON_MAP[stage.icon];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0A", fontFamily }}>
      {/* Centered content block */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          padding: "0 200px",
          boxSizing: "border-box",
        }}
      >
        {/* Icon zone */}
        <div
          style={{
            position: "relative",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          {/* Radial glow behind icon */}
          <div
            style={{
              position: "absolute",
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(0,102,204,0.12) 0%, transparent 70%)",
              opacity: glowOpacity,
            }}
          />
          {/* Icon */}
          {IconComponent && (
            <div
              style={{
                opacity: iconOpacity,
                transform: `scale(${iconScale})`,
                position: "relative",
              }}
            >
              <IconComponent size={220} color="#0066CC" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Stage number */}
        <div
          style={{
            opacity: numberOpacity,
            color: "#6E6E73",
            fontSize: 14,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 32,
            fontWeight: 400,
          }}
        >
          {stage.number}
        </div>

        {/* Stage name */}
        <div
          style={{
            opacity: nameOpacity,
            transform: `translateY(${nameY}px)`,
            color: "#FFFFFF",
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          {stage.name}
        </div>

        {/* Rule — draws symmetrically from center */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              height: 2,
              width: 80,
              backgroundColor: "#0066CC",
              transform: `scaleX(${ruleScale})`,
              transformOrigin: "center",
            }}
          />
        </div>

        {/* Insight copy */}
        <div
          style={{
            opacity: insightOpacity,
            transform: `translateY(${insightY}px)`,
            color: "#6E6E73",
            fontSize: 22,
            fontWeight: 400,
            lineHeight: 1.7,
            whiteSpace: "pre-line",
          }}
        >
          {stage.insight}
        </div>
      </div>

      {/* Progress bar — pinned to bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 3,
          width: `${progressWidth}%`,
          backgroundColor: "#0066CC",
        }}
      />

      {/* White flash overlay — on top of everything */}
      <AbsoluteFill
        style={{
          backgroundColor: "#FFFFFF",
          opacity: flashOpacity,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
```

**Key changes from previous version:**
- Added `useVideoConfig` and `spring` imports from `"remotion"`
- Added all 13 Lucide icon imports + `LucideProps` type import
- Added `ICON_MAP` lookup at module level
- Added `iconScale` (spring), `iconOpacity`, `glowOpacity` animation variables
- Added icon zone block (glow div + icon div) above stage number
- Stage number timing: `[8,20]` → `[30,45]`
- Stage name timing: `[20,40]` → `[42,60]`, fontSize `96` → `80`
- Rule timing: `[30,45]` → `[52,65]`
- Insight timing: `[40,65]` → `[60,82]`

**Step 2: Commit**

```bash
git add apps/remotion/src/WorkflowVideo/Stage.tsx
git commit -m "feat(remotion): add icon zone to Stage with spring animation and updated timing"
```

---

## Task 4: Re-render the Video

**Step 1: Run the render**

```bash
cd apps/remotion && npm run render
```

This runs: `remotion render WorkflowVideo --output ../../apps/marketing/public/animations/workflow.mp4`

Expected output (last few lines):
```
Rendered 1290/1290
Encoded 1290/1290
+ ../../apps/marketing/public/animations/workflow.mp4  X.X MB
```

**Step 2: Verify the file**

```bash
ls -lh apps/marketing/public/animations/workflow.mp4
```

Expected: file exists with non-zero size (likely 3–8 MB given added icon complexity).

**Step 3: Commit**

```bash
git add apps/marketing/public/animations/workflow.mp4
git commit -m "feat(remotion): re-render workflow video with stage icons"
```

---

## Done

The video at `apps/marketing/public/animations/workflow.mp4` now shows a large animated Lucide icon per stage. Refresh the marketing dev server at `http://localhost:3001` and scroll to the WorkflowVideoSection to see the result.

**If any icon is missing or wrong:** Edit `apps/remotion/src/WorkflowVideo/data.ts`, change the `icon` string to a valid Lucide component name, and re-run Task 4.

**Valid icon names:** `UserPlus`, `FileText`, `BellRing`, `Settings`, `Palette`, `CheckCircle`, `FlaskConical`, `Factory`, `CreditCard`, `Truck`, `ClipboardList`, `Receipt`, `BarChart3`
