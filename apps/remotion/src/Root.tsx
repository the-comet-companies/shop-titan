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
