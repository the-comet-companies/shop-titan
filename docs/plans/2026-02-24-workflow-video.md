# Workflow Cinematic Video Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a pre-rendered Remotion composition that cycles through all 13 Shop Titan workflow stages in a dark cinematic style and embed it as an MP4 in the marketing site.

**Architecture:** Standalone `apps/remotion/` package renders a 1920×1080 MP4 to `apps/marketing/public/animations/workflow.mp4`. The marketing app consumes it as a plain `<video>` element inside a new `WorkflowVideoSection` component placed between `FeaturesSection` and `BenefitsSection`.

**Tech Stack:** Remotion 4, `@remotion/google-fonts/Inter`, React 19, TypeScript — all isolated inside `apps/remotion/`. Next.js marketing app unchanged except for one new section component and one import in `page.tsx`.

**Design Reference:** `docs/plans/2026-02-24-workflow-cinematic-video-design.md`

---

## Critical Remotion Rules (Read Before Every Task)

- **ALL animations MUST use `useCurrentFrame()` + `interpolate()` or `spring()`**
- **CSS transitions/animations are FORBIDDEN — they will not render**
- **Tailwind animation classes are FORBIDDEN — they will not render**
- Inside a `<Sequence>`, `useCurrentFrame()` returns local frame (starts at 0)
- Always `extrapolateLeft: "clamp"` and `extrapolateRight: "clamp"` on `interpolate()`

---

## Task 1: Scaffold the Remotion Workspace

**Files:**
- Create: `apps/remotion/package.json`
- Create: `apps/remotion/tsconfig.json`
- Create: `apps/remotion/remotion.config.ts`

**Step 1: Create `apps/remotion/package.json`**

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

**Step 2: Create `apps/remotion/tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "esModuleInterop": true
  },
  "include": ["src", "remotion.config.ts"]
}
```

**Step 3: Create `apps/remotion/remotion.config.ts`**

```ts
import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
```

**Step 4: Install dependencies**

```bash
cd apps/remotion && npm install
```

Expected: `node_modules/` created, no errors.

**Step 5: Commit**

```bash
git add apps/remotion/package.json apps/remotion/tsconfig.json apps/remotion/remotion.config.ts
git commit -m "feat(remotion): scaffold remotion workspace"
```

---

## Task 2: Stage Data File

**Files:**
- Create: `apps/remotion/src/WorkflowVideo/data.ts`

**Step 1: Create `apps/remotion/src/WorkflowVideo/data.ts`**

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
export const STAGE_FRAMES = 60; // 2s
export const INTRO_FRAMES = 60; // 2s
export const OUTRO_FRAMES = 90; // 3s
// 60 + (13 × 60) + 90 = 930 frames total
export const TOTAL_FRAMES =
  INTRO_FRAMES + STAGES.length * STAGE_FRAMES + OUTRO_FRAMES;
```

**Step 2: Commit**

```bash
git add apps/remotion/src/WorkflowVideo/data.ts
git commit -m "feat(remotion): add workflow stage data"
```

---

## Task 3: Stage Component

**Files:**
- Create: `apps/remotion/src/WorkflowVideo/Stage.tsx`

This is the core visual component. Each of the 13 stages renders this with its own data. All animation is driven by `useCurrentFrame()`. No CSS transitions. No Tailwind.

**Step 1: Create `apps/remotion/src/WorkflowVideo/Stage.tsx`**

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
  UserPlus, FileText, BellRing, Settings, Palette, CheckCircle,
  FlaskConical, Factory, CreditCard, Truck, ClipboardList, Receipt, BarChart3,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { STAGES } from "./data";
import type { StageData } from "./data";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  UserPlus, FileText, BellRing, Settings, Palette, CheckCircle,
  FlaskConical, Factory, CreditCard, Truck, ClipboardList, Receipt, BarChart3,
};

// Thematic exit animation per stage (last 8 frames: 37–45)
const EXIT_MAP: Record<string, string> = {
  lead: "slideUp",           // person walks away
  quote: "shrink",           // document filed
  "follow-ups": "spinShrink",  // bell rings away
  development: "spinZoomOut",  // gears overdrive
  "creative-proofs": "slideLeft", // palette swings left
  approval: "zoomOut",       // step back — approved
  sampling: "tipAndFall",    // flask tips and falls
  production: "zoomIn",      // enter the factory
  payment: "slideRight",     // card swipe
  shipping: "slideRight",    // truck drives off
  packing: "scaleDownY",     // box closes
  invoicing: "slideDown",    // receipt tears off
  reporting: "zoomOut",      // big picture view
};

type StageProps = {
  stage: StageData;
  index: number;
};

export const Stage: React.FC<StageProps> = ({ stage, index }) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const isEven = index % 2 === 0;
  const exitType = EXIT_MAP[stage.id] ?? "shrink";

  // ─── Background sweeps ───────────────────────────────────────────────────

  // Sweep 1: wide, primary direction, frames 0–22
  const sweep1X = interpolate(frame, [0, 22],
    [isEven ? -300 : width + 300, isEven ? width + 300 : -300],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  // Sweep 2: medium, opposite direction, frames 4–26
  const sweep2X = interpolate(frame, [4, 26],
    [isEven ? width + 200 : -200, isEven ? -200 : width + 200],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  // Sweep 3: thin, same as sweep 1 but faster, frames 8–20
  const sweep3X = interpolate(frame, [8, 20],
    [isEven ? -150 : width + 150, isEven ? width + 150 : -150],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ─── Exit animations (frames 50–60) ─────────────────────────────────────

  const exitProgress = interpolate(frame, [50, 60], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const exitIconX = exitType === "slideRight" ? interpolate(exitProgress, [0, 1], [0, 1920])
    : exitType === "slideLeft" ? interpolate(exitProgress, [0, 1], [0, -1920]) : 0;

  const exitIconY = exitType === "slideUp" ? interpolate(exitProgress, [0, 1], [0, -1200])
    : exitType === "slideDown" || exitType === "tipAndFall"
    ? interpolate(exitProgress, [0, 1], [0, 1200]) : 0;

  const exitIconRotation = exitType === "spinShrink" || exitType === "spinZoomOut"
    ? interpolate(exitProgress, [0, 1], [0, 360])
    : exitType === "tipAndFall" ? interpolate(exitProgress, [0, 1], [0, -90]) : 0;

  const exitIconScale = exitType === "shrink" || exitType === "spinShrink" || exitType === "spinZoomOut"
    ? interpolate(exitProgress, [0, 1], [1, 0]) : 1;

  const exitIconScaleY = exitType === "scaleDownY"
    ? interpolate(exitProgress, [0, 1], [1, 0]) : 1;

  // Slide exits: icon stays opaque as it flies away. Scale exits: fade out.
  const exitIconZoneOpacity = ["slideRight", "slideLeft", "slideUp", "slideDown", "tipAndFall"]
    .includes(exitType) ? 1
    : interpolate(exitProgress, [0, 1], [1, 0], {
        extrapolateLeft: "clamp", extrapolateRight: "clamp",
      });

  // Zoom exits scale the whole content block
  const exitContentScale = exitType === "zoomIn"
    ? interpolate(exitProgress, [0, 1], [1, 2.5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : exitType === "zoomOut"
    ? interpolate(exitProgress, [0, 1], [1, 0.3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : 1;

  // Text always fades on exit regardless of icon animation
  const textExitOpacity = interpolate(frame, [50, 60], [1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // ─── Entry animations ────────────────────────────────────────────────────

  const iconProgress = spring({
    frame, fps,
    config: { damping: 14, stiffness: 100, mass: 0.5 },
    durationInFrames: 12,
  });

  const iconX = interpolate(iconProgress, [0, 1], [isEven ? -150 : 150, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const iconRotation = interpolate(iconProgress, [0, 1], [isEven ? -20 : 20, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const iconScale = interpolate(iconProgress, [0, 1], [0.6, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const iconOpacity = interpolate(frame, [0, 4], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const glowOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const numberOpacity = interpolate(frame, [11, 18], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const nameOpacity = interpolate(frame, [17, 26], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const nameY = interpolate(frame, [17, 26], [20, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const ruleScale = interpolate(frame, [22, 28], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const insightOpacity = interpolate(frame, [26, 37], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const insightY = interpolate(frame, [26, 37], [15, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // ─── Progress dots ───────────────────────────────────────────────────────

  // Pulsing ring breathes with ~0.6s period (18 frames)
  const dotRingSize = 20 + 5 * Math.sin((frame * Math.PI * 2) / 18);
  const dotRingOpacity = 0.4 + 0.25 * Math.sin((frame * Math.PI * 2) / 18);

  const IconComponent = ICON_MAP[stage.icon];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0A", fontFamily }}>
      {/* ── Background sweeps ─────────────────────────────────────────── */}
      <div style={{ position: "absolute", top: "-50%", left: 0, width: 280, height: "200%",
        background: "linear-gradient(to right, transparent 0%, rgba(0,102,204,0.05) 30%, rgba(0,102,204,0.12) 50%, rgba(0,102,204,0.05) 70%, transparent 100%)",
        transform: `skewX(-15deg) translateX(${sweep1X}px)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-50%", left: 0, width: 160, height: "200%",
        background: "linear-gradient(to right, transparent 0%, rgba(0,102,204,0.03) 30%, rgba(0,102,204,0.07) 50%, rgba(0,102,204,0.03) 70%, transparent 100%)",
        transform: `skewX(-28deg) translateX(${sweep2X}px)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-50%", left: 0, width: 80, height: "200%",
        background: "linear-gradient(to right, transparent 0%, rgba(0,102,204,0.04) 50%, transparent 100%)",
        transform: `skewX(-6deg) translateX(${sweep3X}px)`, pointerEvents: "none" }} />

      {/* ── Centered content block ────────────────────────────────────── */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: `translate(-50%, -50%) scale(${exitContentScale})`,
        textAlign: "center", width: "100%", padding: "0 200px", boxSizing: "border-box",
      }}>
        {/* Icon zone — has its own exit transform */}
        <div style={{
          position: "relative", display: "inline-flex",
          justifyContent: "center", alignItems: "center", marginBottom: 40,
          opacity: exitIconZoneOpacity,
          transform: `translateX(${exitIconX}px) translateY(${exitIconY}px) rotate(${exitIconRotation}deg) scale(${exitIconScale}) scaleY(${exitIconScaleY})`,
        }}>
          <div style={{ position: "absolute", width: 400, height: 400,
            background: "radial-gradient(circle, rgba(0,102,204,0.12) 0%, transparent 70%)",
            opacity: glowOpacity }} />
          {IconComponent && (
            <div style={{
              opacity: iconOpacity,
              transform: `translateX(${iconX}px) rotate(${iconRotation}deg) scale(${iconScale})`,
              position: "relative",
            }}>
              <IconComponent size={220} color="#0066CC" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Text block — fades out on exit */}
        <div style={{ opacity: textExitOpacity }}>
          <div style={{ opacity: numberOpacity, color: "#6E6E73", fontSize: 56,
            letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32, fontWeight: 400 }}>
            {stage.number}
          </div>
          <div style={{ opacity: nameOpacity, transform: `translateY(${nameY}px)`,
            color: "#FFFFFF", fontSize: 80, fontWeight: 700,
            letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 28 }}>
            {stage.name}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
            <div style={{ height: 2, width: 80, backgroundColor: "#0066CC",
              transform: `scaleX(${ruleScale})`, transformOrigin: "center" }} />
          </div>
          <div style={{ opacity: insightOpacity, transform: `translateY(${insightY}px)`,
            color: "#6E6E73", fontSize: 22, fontWeight: 400, lineHeight: 1.7, whiteSpace: "pre-line" }}>
            {stage.insight}
          </div>
        </div>
      </div>

      {/* ── Progress dots — centered, 48px from bottom ────────────────── */}
      <div style={{ position: "absolute", bottom: 48, left: 0, right: 0,
        display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
        {STAGES.map((_, i) => {
          const isCompleted = i < index;
          const isCurrent = i === index;
          const dotSize = isCompleted ? 10 : isCurrent ? 14 : 8;
          return (
            <div key={i} style={{ position: "relative", display: "flex",
              alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
              {isCurrent && (
                <div style={{ position: "absolute", width: dotRingSize, height: dotRingSize,
                  borderRadius: "50%", border: "2px solid #0066CC", opacity: dotRingOpacity }} />
              )}
              <div style={{ width: dotSize, height: dotSize, borderRadius: "50%",
                backgroundColor: isCompleted || isCurrent ? "#0066CC" : "rgba(255,255,255,0.2)" }} />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
```

**Step 2: Commit**

```bash
git add apps/remotion/src/WorkflowVideo/Stage.tsx
git commit -m "feat(remotion): add Stage component with frame-driven animations"
```

---

## Task 4: Intro Component

**Files:**
- Create: `apps/remotion/src/WorkflowVideo/Intro.tsx`

**Step 1: Create `apps/remotion/src/WorkflowVideo/Intro.tsx`**

```tsx
import React from "react";
import { useCurrentFrame, interpolate, Easing, AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();

  // "The complete workflow." — fades + slides in, frames 10–40
  const textOpacity = interpolate(frame, [10, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textY = interpolate(frame, [10, 40], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // White flash out to Stage 01 — frames 50–60
  const outFlash = interpolate(frame, [50, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0A0A",
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          color: "#FFFFFF",
          fontSize: 72,
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        The complete workflow.
      </div>

      {/* Flash to white before Stage 01 */}
      <AbsoluteFill
        style={{
          backgroundColor: "#FFFFFF",
          opacity: outFlash,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
```

**Step 2: Commit**

```bash
git add apps/remotion/src/WorkflowVideo/Intro.tsx
git commit -m "feat(remotion): add Intro component"
```

---

## Task 5: Outro Component

**Files:**
- Create: `apps/remotion/src/WorkflowVideo/Outro.tsx`

**Step 1: Create `apps/remotion/src/WorkflowVideo/Outro.tsx`**

```tsx
import React from "react";
import { useCurrentFrame, interpolate, Easing, AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  // White flash in from Stage 13 — clears over frames 0–15
  const flashOpacity = interpolate(frame, [0, 15], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "Shop Titan." — fades + slides in, frames 20–40
  const titleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [20, 40], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // "One system. End to end." — fades in, frames 40–60
  const subOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0A0A",
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          color: "#FFFFFF",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: 24,
        }}
      >
        Shop Titan.
      </div>

      <div
        style={{
          opacity: subOpacity,
          color: "#6E6E73",
          fontSize: 28,
          fontWeight: 400,
          letterSpacing: "0.01em",
        }}
      >
        One system. End to end.
      </div>

      {/* White flash in from Stage 13 */}
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

**Step 2: Commit**

```bash
git add apps/remotion/src/WorkflowVideo/Outro.tsx
git commit -m "feat(remotion): add Outro component"
```

---

## Task 6: Main Composition

**Files:**
- Create: `apps/remotion/src/WorkflowVideo/index.tsx`

**Step 1: Create `apps/remotion/src/WorkflowVideo/index.tsx`**

```tsx
import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { Intro } from "./Intro";
import { Outro } from "./Outro";
import { Stage } from "./Stage";
import { STAGES, STAGE_FRAMES, INTRO_FRAMES, OUTRO_FRAMES } from "./data";

export const WorkflowVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0A" }}>
      <Series>
        <Series.Sequence durationInFrames={INTRO_FRAMES} premountFor={30}>
          <Intro />
        </Series.Sequence>

        {STAGES.map((stage, index) => (
          <Series.Sequence
            key={stage.id}
            durationInFrames={STAGE_FRAMES}
            premountFor={15}
          >
            <Stage stage={stage} index={index} />
          </Series.Sequence>
        ))}

        <Series.Sequence durationInFrames={OUTRO_FRAMES} premountFor={15}>
          <Outro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
```

**Step 2: Commit**

```bash
git add apps/remotion/src/WorkflowVideo/index.tsx
git commit -m "feat(remotion): assemble WorkflowVideo composition with Series"
```

---

## Task 7: Root and Entry Point

**Files:**
- Create: `apps/remotion/src/Root.tsx`
- Create: `apps/remotion/src/index.ts`

**Step 1: Create `apps/remotion/src/Root.tsx`**

```tsx
import React from "react";
import { Composition } from "remotion";
import { WorkflowVideo } from "./WorkflowVideo";
import { TOTAL_FRAMES, FPS } from "./WorkflowVideo/data";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="WorkflowVideo"
      component={WorkflowVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
```

**Step 2: Create `apps/remotion/src/index.ts`**

```ts
import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";

registerRoot(RemotionRoot);
```

**Step 3: Commit**

```bash
git add apps/remotion/src/Root.tsx apps/remotion/src/index.ts
git commit -m "feat(remotion): register composition root"
```

---

## Task 8: Verify in Remotion Studio

This step opens the visual preview. You must visually confirm all 13 stages play correctly before rendering.

**Step 1: Open Remotion Studio**

```bash
cd apps/remotion
npm run studio
```

Expected: Browser opens at `http://localhost:3000`. You should see `WorkflowVideo` in the left sidebar.

**Step 2: Visual checks**

Work through each check:
- [ ] Intro: "The complete workflow." fades in, white flash at end
- [ ] Stage 01 (LEAD): number → name → rule → insight → progress bar all animate
- [ ] All 13 stages cycle correctly
- [ ] Outro: white flash clears, "Shop Titan." and subline appear
- [ ] No broken fonts (Inter loads, not fallback)
- [ ] No TypeScript errors in terminal

**Step 3: Fix any issues before proceeding**

If animations look wrong, check that `useCurrentFrame()` is being used (not CSS transitions). If font is wrong, verify `@remotion/google-fonts` is installed and the import path is `@remotion/google-fonts/Inter`.

---

## Task 9: Render the Video

**Step 1: Ensure output directory exists**

```bash
mkdir -p apps/marketing/public/animations
```

**Step 2: Render**

```bash
cd apps/remotion
npm run render
```

This runs: `remotion render WorkflowVideo --output ../../apps/marketing/public/animations/workflow.mp4`

Expected output:
```
Rendering WorkflowVideo...
705/705 frames rendered
Encoded: ../../apps/marketing/public/animations/workflow.mp4
```

**Step 3: Verify the file exists**

```bash
ls -lh apps/marketing/public/animations/workflow.mp4
```

Expected: file exists, size is roughly 5–25MB depending on encode settings.

**Step 4: Quick playback check**

Open the MP4 in any video player and confirm:
- Plays smoothly, ~23.5 seconds
- All stages visible and legible
- Clean dark cuts between stages (no white flash)

**Step 5: Commit**

```bash
git add apps/marketing/public/animations/workflow.mp4
git commit -m "feat(remotion): render workflow cinematic video"
```

---

## Task 10: WorkflowVideoSection Component

**Files:**
- Create: `apps/marketing/components/sections/WorkflowVideoSection.tsx`

**Step 1: Create `apps/marketing/components/sections/WorkflowVideoSection.tsx`**

```tsx
'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WorkflowVideoSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasExpanded = useRef(false);

  // Fires once to trigger the expand animation
  const isContainerInView = useInView(containerRef, { once: true, margin: '-80px' });

  // Ongoing visibility for play/pause control
  const isVideoVisible = useInView(containerRef, { once: false, amount: 0.3 });

  // After the expand animation finishes, start playing if still in view
  const handleExpandComplete = () => {
    hasExpanded.current = true;
    if (isVideoVisible) {
      videoRef.current?.play();
    }
  };

  // Play/pause as user scrolls in and out — only after expand has run
  useEffect(() => {
    if (!hasExpanded.current) return;
    if (isVideoVisible) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isVideoVisible]);

  return (
    <section id="workflow-video" className="py-24 md:py-32 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
            Every stage. One system.
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            From the first lead to the final report — fully connected.
          </p>
        </div>

        {/* Video container — cinematic expand reveal */}
        <div ref={containerRef}>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl origin-center"
            initial={{ scaleX: 0, scaleY: 0.04 }}
            animate={
              isContainerInView
                ? { scaleX: [0, 1, 1], scaleY: [0.04, 0.04, 1] }
                : { scaleX: 0, scaleY: 0.04 }
            }
            transition={{
              duration: 0.9,
              times: [0, 0.45, 1],
              ease: ['easeOut', 'easeInOut'],
            }}
            onAnimationComplete={handleExpandComplete}
          >
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="w-full block"
            >
              <source src="/animations/workflow.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

**Reveal behaviour:** On scroll-into-view, the container animates from a thin horizontal sliver (phase 1: scaleX 0→1) then expands vertically (phase 2: scaleY 0.04→1) over 0.9s. The video plays only after the expand completes and pauses automatically when the section is scrolled out of view.

**Step 2: Commit**

```bash
git add apps/marketing/components/sections/WorkflowVideoSection.tsx
git commit -m "feat(marketing): add WorkflowVideoSection component"
```

---

## Task 11: Wire Into Page

**Files:**
- Modify: `apps/marketing/app/page.tsx`

**Step 1: Read current `apps/marketing/app/page.tsx`**

Current content:
```tsx
import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PainPointSection />
        <FeaturesSection />
        <ProductShowcaseSection />
        <BenefitsSection />
        <IndustriesSection />
        <ShowcaseSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Add the import and section**

Add import after the FeaturesSection import:
```tsx
import WorkflowVideoSection from "@/components/sections/WorkflowVideoSection";
```

Insert `<WorkflowVideoSection />` between `<FeaturesSection />` and `<BenefitsSection />`:

```tsx
import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorkflowVideoSection from "@/components/sections/WorkflowVideoSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PainPointSection />
        <FeaturesSection />
        <WorkflowVideoSection />
        <BenefitsSection />
        <IndustriesSection />
        <ShowcaseSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
```

**Step 3: Verify the dev server**

```bash
cd apps/marketing && npm run dev
```

Navigate to `http://localhost:3001`. Scroll past FeaturesSection. Confirm:
- [ ] "Every stage. One system." section header is visible
- [ ] Video autoplays and loops
- [ ] Video scales to full width
- [ ] Rounded corners on video container

**Step 4: Commit**

```bash
git add apps/marketing/app/page.tsx
git commit -m "feat(marketing): wire WorkflowVideoSection into page"
```

---

## Done

All tasks complete. The workflow cinematic video is live at `http://localhost:3001` between the Features and Benefits sections.

**Re-rendering:** If stage copy, timing, or animations need to change in future, edit the relevant files in `apps/remotion/src/WorkflowVideo/`, re-run `npm run render` from `apps/remotion/`, and commit the new MP4.

**Current video specs:** 930 frames · 30fps · ~31s
- 2s intro + 13 × 2s stages + 3s outro
- Each stage: 3 background sweeps (multi-directional, direction alternates per stage), icon slides in with alternating direction + rotation (even=left/−20°, odd=right/+20°), text cascades in (entry completes by frame 37), 13-frame dwell, thematic exit animation frames 50–60
- Step number: 56px · Stage name: 80px · Insight: 22px
- Progress: 13 dots centered 48px from bottom — completed=solid blue, current=14px + pulsing ring, upcoming=dim
- Marketing embed: cinematic expand reveal on scroll (horizontal bar → full rectangle, 0.9s); video plays only after expand and pauses when scrolled out of view

**Exit animations per stage:**
| Stage | Exit type | Effect |
|-------|-----------|--------|
| LEAD | slideUp | Icon floats off top |
| QUOTE | shrink | Icon shrinks to zero |
| QUOTE FOLLOW UPS | spinShrink | Icon spins 360° and shrinks |
| DEVELOPMENT | spinZoomOut | Icon spins and scales out |
| CREATIVE PROOFS | slideLeft | Icon slides off left |
| APPROVAL SYSTEM | zoomOut | Whole scene shrinks back |
| SAMPLING | tipAndFall | Icon rotates −90° and falls |
| PRODUCTION | zoomIn | Whole scene rushes forward |
| PAYMENT LINKS | slideRight | Icon swipes right |
| SHIPPING LABELS | slideRight | Truck drives off right |
| PACKING DATA | scaleDownY | Icon flattens closed |
| INVOICING | slideDown | Icon tears off downward |
| REPORTING | zoomOut | Whole scene steps back |
