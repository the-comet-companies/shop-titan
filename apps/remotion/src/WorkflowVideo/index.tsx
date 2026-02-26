import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { Intro } from "./Intro";
import { Outro } from "./Outro";
import { Stage } from "./Stage";
import { STAGES, STAGE_FRAMES, INTRO_FRAMES, OUTRO_FRAMES } from "./data";

export const WorkflowVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0A" /* fallback canvas between sequences */ }}>
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
