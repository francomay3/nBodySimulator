import React, { useRef, useEffect, useMemo } from "react";
import { drawParticles } from "./utils";
import models from "./models";
import styled from "styled-components";
import { canvasSize } from "./constants";
import { createNparticles } from "./utils";
import useWorld from "./useWorld";

const CanvasElm = styled.canvas`
  width: 100%;
`;

const Canvas = ({ frames, model, controls }) => {
  const canvasElement = useRef(null);
  const world = useWorld({
    canvas: null,
    model,
    frames,
    particles: createNparticles(10),
    canvasSize: 1000,
    controls,
  });
  useEffect(() => {
    if (canvasElement) {
      world.setCanvas(canvasElement.current);
      world.play();
    }
  }, [canvasElement]);

  useEffect(() => {
    world.setFrames(frames);
  }, [frames]);

  return (
    <div>
      <CanvasElm
        ref={canvasElement}
        id="canvas"
        height={canvasSize}
        width={canvasSize}
      />
    </div>
  );
};

export default Canvas;
