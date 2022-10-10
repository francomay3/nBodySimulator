import {
  fadeCanvas,
  createNparticles,
  drawParticles,
  calculateTotalEnergy,
} from "./utils.js";
import models from "./models/index.js";

const particles = [
  ...createNparticles(500, {
    color: "red",
    mass: 0.1,
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
