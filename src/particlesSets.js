import { createNparticles } from "./utils";
import { canvasSize } from "./constants";

export const particles1 = () => {
  const bias = 0.8;
  return [
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
};
export const exampleParticles = () => {
  const oneWhite = createNparticles(1, {
    mass: 100,
    color: "white",
    vx: 0,
    vy: 0,
    y: 500,
    x: 400,
  });
  const oneBlue = createNparticles(1, {
    mass: 5,
    color: "blue",
    vx: 0,
    vy: 0,
    y: 500,
    x: 200,
  });
  console.log("exampleParticles: calling createNparticles. received", oneWhite);
  const retVal = [...oneWhite, ...oneBlue];
  console.log("returning", retVal);
  return retVal;
};
