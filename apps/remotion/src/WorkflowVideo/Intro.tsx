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
