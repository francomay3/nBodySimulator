import { fadeCanvas, createNparticles, drawParticles } from "./utils.js";
import models from "./models/index.js";
import { canvasSize } from "./constants.js";

const bias = 0.8;
const particles1 = [
  ...createNparticles(50, {
    mass: 0.1,
    x: () => Math.random() * (canvasSize / 2),
    y: () => Math.random() * (canvasSize / 2),
    vx: () => (Math.random() - 0.5 + bias) * 0.01,
    vy: () => (Math.random() - 0.5 - bias) * 0.01,
  }),
  ...createNparticles(50, {
    mass: 0.1,
    x: () => Math.random() * (canvasSize / 2) + 600,
    y: () => Math.random() * (canvasSize / 2) + 600,
    vx: () => (Math.random() - 0.5 - bias) * 0.01,
    vy: () => (Math.random() - 0.5 + bias) * 0.01,
  }),
  ...createNparticles(50, {
    mass: 0.1,
    x: () => Math.random() * (canvasSize / 2),
    y: () => Math.random() * (canvasSize / 2) + 600,
    vy: () => (Math.random() - 0.5 - bias) * 0.01,
    vx: () => (Math.random() - 0.5 - bias) * 0.01,
  }),
  ...createNparticles(50, {
    mass: 0.1,
    color: "red",
    x: () => Math.random() * (canvasSize / 2) + 600,
    y: () => Math.random() * (canvasSize / 2),
    vy: () => (Math.random() - 0.5 + bias) * 0.01,
    vx: () => (Math.random() - 0.5 + bias) * 0.01,
  }),
  ...createNparticles(1, {
    mass: 10,
    color: "blue",
    x: () => canvasSize / 2,
    y: () => canvasSize / 2,
    vx: () => 0,
    vy: () => 0,
  }),
];
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
const update = (shouldRequestAnimationFrame) => {
  fadeCanvas();
  models.model2(particles1);
  drawParticles(particles1);
  if (shouldRequestAnimationFrame) {
    requestAnimationFrame(update);
  }
};

export const run = (time) => {
  if (!time) {
    return update(true);
  }

  setInterval(() => {
    update(false);
  }, time);
};
