import {
  fadeCanvas,
  createNparticles,
  drawParticles,
  calculateTotalEnergy,
} from "./utils.js";
import models from "./models/index.js";

const particles = [
  ...createNparticles(10, { color: "red", mass: 10 }),
  ...createNparticles(5, { color: "white", mass: 100 }),
  ...createNparticles(1, { color: "blue", mass: 1000 }),
];
console.log(particles);

const update = (shouldRequestAnimationFrame) => {
  fadeCanvas();
  models.model1(particles);
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
