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
import { STAGES } from "./data";
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

// Thematic exit animation per stage
const EXIT_MAP: Record<string, string> = {
  lead: "slideUp",         // person walks away
  quote: "shrink",          // document filed
  "follow-ups": "spinShrink", // bell rings away
  development: "spinZoomOut", // gears overdrive
  "creative-proofs": "slideLeft", // palette swings left
  approval: "zoomOut",      // step back — approved
  sampling: "tipAndFall",   // flask tips and falls
  production: "zoomIn",     // enter the factory
  payment: "slideRight",    // card swipe
  shipping: "slideRight",   // truck drives off
  packing: "scaleDownY",    // box closes
  invoicing: "slideDown",   // receipt tears off
  reporting: "zoomOut",     // big picture view
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

  // ─── Background sweeps ──────────────────────────────────────────────────

  // Sweep 1: wide, primary direction, frames 0–22
  const sweep1X = interpolate(
    frame,
    [0, 22],
    [isEven ? -300 : width + 300, isEven ? width + 300 : -300],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Sweep 2: medium, opposite direction, frames 4–26
  const sweep2X = interpolate(
    frame,
    [4, 26],
    [isEven ? width + 200 : -200, isEven ? -200 : width + 200],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Sweep 3: thin, same as sweep 1 but faster, frames 8–20
  const sweep3X = interpolate(
    frame,
    [8, 20],
    [isEven ? -150 : width + 150, isEven ? width + 150 : -150],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ─── Exit animations (frames 37–45) ─────────────────────────────────────

  const exitProgress = interpolate(frame, [37, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Icon zone translation
  const exitIconX =
    exitType === "slideRight"
      ? interpolate(exitProgress, [0, 1], [0, 1920])
      : exitType === "slideLeft"
      ? interpolate(exitProgress, [0, 1], [0, -1920])
      : 0;

  const exitIconY =
    exitType === "slideUp"
      ? interpolate(exitProgress, [0, 1], [0, -1200])
      : exitType === "slideDown" || exitType === "tipAndFall"
      ? interpolate(exitProgress, [0, 1], [0, 1200])
      : 0;

  // Icon zone rotation
  const exitIconRotation =
    exitType === "spinShrink" || exitType === "spinZoomOut"
      ? interpolate(exitProgress, [0, 1], [0, 360])
      : exitType === "tipAndFall"
      ? interpolate(exitProgress, [0, 1], [0, -90])
      : 0;

  // Icon zone uniform scale
  const exitIconScale =
    exitType === "shrink" ||
    exitType === "spinShrink" ||
    exitType === "spinZoomOut"
      ? interpolate(exitProgress, [0, 1], [1, 0])
      : 1;

  // Icon zone Y-only scale (box closing)
  const exitIconScaleY =
    exitType === "scaleDownY"
      ? interpolate(exitProgress, [0, 1], [1, 0])
      : 1;

  // Icon zone opacity: stays 1 for slide exits (flies away), fades for scale exits
  const exitIconZoneOpacity = [
    "slideRight",
    "slideLeft",
    "slideUp",
    "slideDown",
    "tipAndFall",
  ].includes(exitType)
    ? 1
    : interpolate(exitProgress, [0, 1], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  // Whole content block scale for zoom exits
  const exitContentScale =
    exitType === "zoomIn"
      ? interpolate(exitProgress, [0, 1], [1, 2.5], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : exitType === "zoomOut"
      ? interpolate(exitProgress, [0, 1], [1, 0.3], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  // Text fade-out on exit (all non-zoom exits: text fades while icon flies)
  const textExitOpacity = interpolate(frame, [37, 45], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─── Entry animations ────────────────────────────────────────────────────

  // Single spring progress value drives all icon motion (frames 0–12)
  const iconProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.5 },
    durationInFrames: 12,
  });

  const iconX = interpolate(iconProgress, [0, 1], [isEven ? -150 : 150, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const iconRotation = interpolate(
    iconProgress,
    [0, 1],
    [isEven ? -20 : 20, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const iconScale = interpolate(iconProgress, [0, 1], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const iconOpacity = interpolate(frame, [0, 4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const glowOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const numberOpacity = interpolate(frame, [11, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const nameOpacity = interpolate(frame, [17, 26], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const nameY = interpolate(frame, [17, 26], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const ruleScale = interpolate(frame, [22, 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const insightOpacity = interpolate(frame, [26, 37], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const insightY = interpolate(frame, [26, 37], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // ─── Progress dots ───────────────────────────────────────────────────────

  // Pulsing ring: breathes continuously with ~0.6s period
  const dotRingSize = 20 + 5 * Math.sin((frame * Math.PI * 2) / 18);
  const dotRingOpacity = 0.4 + 0.25 * Math.sin((frame * Math.PI * 2) / 18);

  const IconComponent = ICON_MAP[stage.icon];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0A", fontFamily }}>
      {/* ── Background sweeps ─────────────────────────────────────────── */}
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

      {/* ── Centered content block ────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${exitContentScale})`,
          textAlign: "center",
          width: "100%",
          padding: "0 200px",
          boxSizing: "border-box",
        }}
      >
        {/* Icon zone — has its own exit transform */}
        <div
          style={{
            position: "relative",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
            opacity: exitIconZoneOpacity,
            transform: `translateX(${exitIconX}px) translateY(${exitIconY}px) rotate(${exitIconRotation}deg) scale(${exitIconScale}) scaleY(${exitIconScaleY})`,
          }}
        >
          {/* Radial glow */}
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
          {/* Icon — entry animation only (exit handled by zone wrapper) */}
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

        {/* Text block — fades out on exit */}
        <div style={{ opacity: textExitOpacity }}>
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

          {/* Rule */}
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
      </div>

      {/* ── Progress dots — centered, 48px from bottom ────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {STAGES.map((_, i) => {
          const isCompleted = i < index;
          const isCurrent = i === index;
          const dotSize = isCompleted ? 10 : isCurrent ? 14 : 8;

          return (
            <div
              key={i}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 24,
                height: 24,
              }}
            >
              {/* Pulsing ring on current dot */}
              {isCurrent && (
                <div
                  style={{
                    position: "absolute",
                    width: dotRingSize,
                    height: dotRingSize,
                    borderRadius: "50%",
                    border: "2px solid #0066CC",
                    opacity: dotRingOpacity,
                  }}
                />
              )}
              {/* Dot */}
              <div
                style={{
                  width: dotSize,
                  height: dotSize,
                  borderRadius: "50%",
                  backgroundColor:
                    isCompleted || isCurrent
                      ? "#0066CC"
                      : "rgba(255,255,255,0.2)",
                }}
              />
            </div>
          );
        })}
      </div>

    </AbsoluteFill>
  );
};
