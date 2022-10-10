import { fadeCanvas, createNparticles, drawParticles } from "./utils.js";
import models from "./models/index.js";

const bias = 0.2;
const particles = [
  ...createNparticles(330, {
    mass: 0.01,
    x: () => Math.random() * 300 + 300,
    y: () => Math.random() * 300,
    vx: () => (Math.random() - 0.5 + bias) * 0.01,
  }),
  ...createNparticles(330, {
    mass: 0.01,
    x: () => Math.random() * 300 + 300,
    y: () => Math.random() * 300 + 600,
    vx: () => (Math.random() - 0.5 - bias) * 0.01,
  }),
  ...createNparticles(330, {
    mass: 0.01,
    x: () => Math.random() * 300,
    y: () => Math.random() * 300 + 300,
    vy: () => (Math.random() - 0.5 - bias) * 0.01,
  }),
  ...createNparticles(330, {
    mass: 0.01,
    x: () => Math.random() * 300 + 600,
    y: () => Math.random() * 300 + 300,
    vy: () => (Math.random() - 0.5 + bias) * 0.01,
  }),
];
const update = (shouldRequestAnimationFrame) => {
  fadeCanvas();
  models.model2(particles);
  drawParticles(particles);
  if (shouldRequestAnimationFrame) {
    requestAnimationFrame(update);
  }
};

const run = (time) => {
  if (!time) {
    return update(true);
  }

  setInterval(() => {
    update(false);
  }, time);
};

run();
