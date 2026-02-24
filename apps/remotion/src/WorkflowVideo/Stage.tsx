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
import { STAGE_FRAMES, STAGES } from "./data";
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
  const { fps, width } = useVideoConfig();

  const isEven = index % 2 === 0;

  // Sweep 1: wide, direction follows isEven, frames 0–22
  const sweep1X = interpolate(
    frame,
    [0, 22],
    [isEven ? -300 : width + 300, isEven ? width + 300 : -300],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Sweep 2: medium, opposite direction, delayed to frames 4–26
  const sweep2X = interpolate(
    frame,
    [4, 26],
    [isEven ? width + 200 : -200, isEven ? -200 : width + 200],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Sweep 3: thin, same direction as sweep 1, faster, frames 8–20
  const sweep3X = interpolate(
    frame,
    [8, 20],
    [isEven ? -150 : width + 150, isEven ? width + 150 : -150],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Single spring progress value drives all icon motion (frames 0–12)
  const iconProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.5 },
    durationInFrames: 12,
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

  // Opacity: fades in frames 0–4
  const iconOpacity = interpolate(frame, [0, 4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Glow opacity: fades in frames 0–8
  const glowOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage number: fades in frames 11–18
  const numberOpacity = interpolate(frame, [11, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage name: slides up + fades in frames 17–26
  const nameOpacity = interpolate(frame, [17, 26], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const nameY = interpolate(frame, [17, 26], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Rule: draws from center, frames 22–28
  const ruleScale = interpolate(frame, [22, 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Insight copy: fades up, frames 26–37
  const insightOpacity = interpolate(frame, [26, 37], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const insightY = interpolate(frame, [26, 37], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Current segment fill
  const progressWidth = interpolate(frame, [0, STAGE_FRAMES], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const IconComponent = ICON_MAP[stage.icon];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0A", fontFamily }}>
      {/* Sweep 1 — wide, primary direction */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: 0,
          width: 280,
          height: "200%",
          background:
            "linear-gradient(to right, transparent 0%, rgba(0,102,204,0.05) 30%, rgba(0,102,204,0.12) 50%, rgba(0,102,204,0.05) 70%, transparent 100%)",
          transform: `skewX(-15deg) translateX(${sweep1X}px)`,
          pointerEvents: "none",
        }}
      />

      {/* Sweep 2 — medium, opposite direction, delayed */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: 0,
          width: 160,
          height: "200%",
          background:
            "linear-gradient(to right, transparent 0%, rgba(0,102,204,0.03) 30%, rgba(0,102,204,0.07) 50%, rgba(0,102,204,0.03) 70%, transparent 100%)",
          transform: `skewX(-28deg) translateX(${sweep2X}px)`,
          pointerEvents: "none",
        }}
      />

      {/* Sweep 3 — thin, same direction as sweep 1, faster */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: 0,
          width: 80,
          height: "200%",
          background:
            "linear-gradient(to right, transparent 0%, rgba(0,102,204,0.04) 50%, transparent 100%)",
          transform: `skewX(-6deg) translateX(${sweep3X}px)`,
          pointerEvents: "none",
        }}
      />

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
            fontSize: 56,
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

      {/* 13-segment progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          display: "flex",
          gap: 2,
        }}
      >
        {STAGES.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "100%",
              backgroundColor:
                i < index ? "#0066CC" : "rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {i === index && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: `${progressWidth}%`,
                  backgroundColor: "#0066CC",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
