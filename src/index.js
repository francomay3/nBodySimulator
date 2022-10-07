import {
  fadeCanvas,
  createNparticles,
  drawParticles,
  calculateTotalEnergy,
} from "./utils.js";
import interactParticles from "./interactParticles.js";

const particles = [
  ...createNparticles(10, { color: "red", mass: 10 }),
  ...createNparticles(5, { color: "white", mass: 100 }),
  ...createNparticles(1, { color: "blue", mass: 1000 }),
];
const initialEnergy = calculateTotalEnergy(particles);

const update = (shouldRequestAnimationFrame) => {
  fadeCanvas();
  interactParticles({ particles, initialEnergy });
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
