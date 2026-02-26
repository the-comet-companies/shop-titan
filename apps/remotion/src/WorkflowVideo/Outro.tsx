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
