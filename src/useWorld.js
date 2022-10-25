import { useRef } from "react";
import models from "./models";
import { drawParticles } from "./utils";

export default ({
  model: modelArg,
  canvas: canvasArg,
  particles: particlesArg,
  frames: framesArg,
  canvasSize: canvasSizeArg,
  controls: controlsArg,
}) => {
  const model = useRef(modelArg);
  const controls = useRef(controlsArg);
  const canvas = useRef(canvasArg);
  const particles = useRef(particlesArg);
  const frames = useRef(framesArg);
  const stopped = useRef(false);
  const canvasSize = useRef(canvasSizeArg);

  const play = () => {
    if (stopped.current) return;
    console.log(canvas);
    const ctx = canvas.current.getContext("2d");

    const draw = (x, y, color, s) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, s, s);
    };

    const fadeCanvas = () => {
      draw(0, 0, "hwb(0deg 0% 100% / 10%)", canvasSize.current);
    };

    const update = () => {
      fadeCanvas();
      models[model.current].model(
        particles.current,
        controls.current,
        canvas.current
      );
      drawParticles(particles.current, canvas.current);
      if (frames.current) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          update();
        }, 1000 / frames.current);
      }
    };
    update();
  };

  const stop = () => {
    stopped.current = true;
  };

  const setControl = (control, value) => {
    controls.current[control] = value;
  };

  const setControls = (controls) => {
    controls.current = controls;
  };

  const addParticles = (p) => {
    particles.current = [...particles.current, ...p];
  };

  const setModel = (m) => {
    model.current = m;
    controls.current = models[model.current].controls;
  };

  const setCanvas = (c) => {
    canvas.current = c;
  };

  const setCanvasSize = (s) => {
    canvasSize.current = s;
  };

  const setParticles = (p) => {
    particles.current = p;
  };

  const setFrames = (f) => {
    frames.current = JSON.parse(f);
  };

  return {
    play,
    stop,
    setControl,
    addParticles,
    setModel,
    setControls,
    setParticles,
    setFrames,
    setCanvasSize,
    setCanvas,
  };
};
