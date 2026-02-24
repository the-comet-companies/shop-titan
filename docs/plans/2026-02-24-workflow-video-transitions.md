# Workflow Video — Transition & Icon Animation Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the white flash transition and add alternating slide + rotation + scale icon entry animations to the Remotion WorkflowVideo.

**Architecture:** Two file changes + one re-render. `index.tsx` passes a new `index` prop to `<Stage>`. `Stage.tsx` removes the white flash overlay and replaces the icon animation with a single `spring()` progress value driving translateX, rotation, scale, and opacity — all alternating direction based on `index % 2`. Downstream text timing shifts 8 frames earlier throughout.

**Tech Stack:** Remotion 4, React 19, TypeScript. All changes isolated to `apps/remotion/`.

**Critical Remotion Rules:**
- ALL animations use `useCurrentFrame()` + `interpolate()` or `spring()` — never CSS transitions
- CSS transitions/animations are FORBIDDEN — will not render in Remotion
- Always add `extrapolateLeft: "clamp"` and `extrapolateRight: "clamp"` to every `interpolate()` call

---

## Task 1: Pass `index` prop from WorkflowVideo to Stage

**Files:**
- Modify: `apps/remotion/src/WorkflowVideo/index.tsx`
- Modify: `apps/remotion/src/WorkflowVideo/Stage.tsx` (prop type only)

**Step 1: Update the `StageProps` type in `Stage.tsx`**

Open `apps/remotion/src/WorkflowVideo/Stage.tsx`. Change the `StageProps` type from:

```tsx
type StageProps = {
  stage: StageData;
};
```

to:

```tsx
type StageProps = {
  stage: StageData;
  index: number;
};
```

And update the component signature from:

```tsx
export const Stage: React.FC<StageProps> = ({ stage }) => {
```

to:

```tsx
export const Stage: React.FC<StageProps> = ({ stage, index }) => {
```

(The `index` variable won't be used yet — that's fine, it will be used in Task 2.)

**Step 2: Pass `index` in `index.tsx`**

Open `apps/remotion/src/WorkflowVideo/index.tsx`. Change the `.map()` callback from:

```tsx
{STAGES.map((stage) => (
  <Series.Sequence
    key={stage.id}
    durationInFrames={STAGE_FRAMES}
    premountFor={15}
  >
    <Stage stage={stage} />
  </Series.Sequence>
))}
```

to:

```tsx
{STAGES.map((stage, index) => (
  <Series.Sequence
    key={stage.id}
    durationInFrames={STAGE_FRAMES}
    premountFor={15}
  >
    <Stage stage={stage} index={index} />
  </Series.Sequence>
))}
```

**Step 3: Commit**

```bash
git add apps/remotion/src/WorkflowVideo/index.tsx apps/remotion/src/WorkflowVideo/Stage.tsx
git commit -m "feat(remotion): pass index prop from WorkflowVideo to Stage"
```

---

## Task 2: Rewrite Stage.tsx — remove flash, add alternating icon animation

**Files:**
- Modify: `apps/remotion/src/WorkflowVideo/Stage.tsx`

**Step 1: Replace the entire file with the following**

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
  index: number;
};

export const Stage: React.FC<StageProps> = ({ stage, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isEven = index % 2 === 0;

  // Single spring progress value drives all icon motion (frames 0–25)
  const iconProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.5 },
    durationInFrames: 25,
  });

  // Slide: even stages enter from left (−150→0), odd from right (+150→0)
  const iconX = interpolate(iconProgress, [0, 1], [isEven ? -150 : 150, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Rotation: even start at −20°, odd at +20°, both resolve to 0°
  const iconRotation = interpolate(iconProgress, [0, 1], [isEven ? -20 : 20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scale: springs from 0.6 → 1
  const iconScale = interpolate(iconProgress, [0, 1], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Opacity: fades in over first 30% of the spring
  const iconOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Glow opacity: fades in frames 0–17
  const glowOpacity = interpolate(frame, [0, 17], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage number: fades in frames 22–37 (was 30–45)
  const numberOpacity = interpolate(frame, [22, 37], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage name: slides up + fades in frames 34–52 (was 42–60)
  const nameOpacity = interpolate(frame, [34, 52], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const nameY = interpolate(frame, [34, 52], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Rule: draws from center, frames 44–57 (was 52–65)
  const ruleScale = interpolate(frame, [44, 57], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Insight copy: fades up, frames 52–74 (was 60–82)
  const insightOpacity = interpolate(frame, [52, 74], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const insightY = interpolate(frame, [52, 74], [15, 0], {
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
          {/* Icon — slide + rotate + scale */}
          {IconComponent && (
            <div
              style={{
                opacity: iconOpacity,
                transform: `translateX(${iconX}px) rotate(${iconRotation}deg) scale(${iconScale})`,
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
    </AbsoluteFill>
  );
};
```

**Key changes from previous version:**
- `flashOpacity` variable removed
- White `AbsoluteFill` overlay removed
- `index: number` added to `StageProps` and destructured
- `isEven` computed from `index % 2 === 0`
- Single `iconProgress` spring drives `iconX`, `iconRotation`, `iconScale`
- `iconOpacity` uses direct frame interpolation (frames 0–8)
- `glowOpacity` starts at frame 0 (was frame 8)
- Stage number timing: `[30,45]` → `[22,37]`
- Stage name timing: `[42,60]` → `[34,52]`
- Rule timing: `[52,65]` → `[44,57]`
- Insight timing: `[60,82]` → `[52,74]`

**Step 2: Commit**

```bash
git add apps/remotion/src/WorkflowVideo/Stage.tsx
git commit -m "feat(remotion): remove white flash, add alternating slide+rotation icon animation"
```

---

## Task 3: Re-render the Video

**Step 1: Run the render**

```bash
cd apps/remotion && npm run render
```

This runs: `remotion render WorkflowVideo --output ../../apps/marketing/public/animations/workflow.mp4`

Expected output (last few lines):
```
Rendered 1290/1290
Encoded 1290/1290
○ ../../apps/marketing/public/animations/workflow.mp4  X MB
```

**Step 2: Verify the file**

```bash
ls -lh apps/marketing/public/animations/workflow.mp4
```

Expected: file exists with non-zero size.

**Step 3: Commit**

```bash
git add apps/marketing/public/animations/workflow.mp4
git commit -m "feat(remotion): re-render workflow video with new transitions and icon animations"
```

---

## Done

The video at `apps/marketing/public/animations/workflow.mp4` now shows:
- Clean dark cuts between stages (no white flash)
- Even-numbered stages (01, 03, 05…): icon slides in from the left with −20° rotation
- Odd-numbered stages (02, 04, 06…): icon slides in from the right with +20° rotation

**If the spring feel is too bouncy or too stiff:** Adjust `config` in the `iconProgress` spring:
- More bounce: lower `damping` (e.g. `10`)
- Less bounce / stiffer: higher `damping` (e.g. `20`) or higher `stiffness`
- Slower entry: increase `durationInFrames` (e.g. `35`)
