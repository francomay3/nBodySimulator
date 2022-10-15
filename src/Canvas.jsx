import React, { useRef, useEffect } from "react";
import { createNparticles, drawParticles } from "./utils";
import models from "./models";
import styled from "styled-components";

const run = (canvas) => {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  window.canvasCtx = canvas.getContext("2d");

  const particles2 = [
    ...createNparticles(1, {
      mass: 100,
      color: "white",
      vx: 0,
      vy: 0,
      y: 500,
      x: 400,
    }),
    ...createNparticles(1, {
      mass: 5,
      color: "blue",
      vx: 0,
      vy: 0,
      y: 500,
      x: 200,
    }),
  ];

  const draw = (x, y, color, s) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, s, s);
  };

  const fadeCanvas = () => {
    draw(0, 0, "hwb(0deg 0% 100% / 10%)", 1000);
  };

  const update = () => {
    fadeCanvas();
    models.model2(particles2);
    drawParticles(particles2);
    requestAnimationFrame(update);
  };

  update();
};

const CanvasElm = styled.canvas`
  width: 100%;
`;

const Canvas = () => {
  const canvasElement = useRef(null);
  useEffect(() => {
    if (canvasElement) {
      run(canvasElement.current);
    }
  }, [canvasElement]);

  return (
    <div>
      <CanvasElm ref={canvasElement} id="canvas" height="1000" width="1000" />
    </div>
  );
};

export default Canvas;
