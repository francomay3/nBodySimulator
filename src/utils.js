import { canvasSize } from "./constants";

export const getCombinations = (arr) =>
  arr.reduce((acc, item, i) => {
    const rest = arr.slice(i + 1);
    const pairs = rest.map((item2) => [item, item2]);
    return [...acc, ...pairs];
  }, []);

export const calculateTotalEnergy = (particles) => {
  let totalEnergy = 0;
  particles.forEach((particle) => {
    totalEnergy +=
      particle.mass *
      Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
  });
  return totalEnergy;
};

const drawParticle = (x, y, radius, color, canvas) => {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const draw = (x, y, color, s, canvas) => {
  canvas.fillStyle = color;
  canvas.fillRect(x, y, s, s);
};
const randomFloatBetween = (min, max) => Math.random() * (max - min) + min;
const randomIntBetween = (min, max) => Math.floor(randomFloatBetween(min, max));

export const createParticle = (arg = {}) => {
  const getV = (vArg) => {
    if (typeof vArg === "number") {
      return vArg;
    }
    if (typeof vArg === "function") {
      return vArg();
    }
    return randomFloatBetween(-0.015, 0.015);
  };
  const getPos = (posArg) => {
    if (typeof posArg === "number") {
      return posArg;
    }
    if (typeof posArg === "function") {
      return posArg();
    }
    return randomFloatBetween(0, canvasSize);
  };
  const {
    color = `hwb(${randomIntBetween(0, 360)}deg 0% 0%)`,
    mass = randomFloatBetween(1, 10),
    vx,
    vy,
    x,
    y,
  } = arg;

  const radius = Math.sqrt(mass / Math.PI);
  return {
    color,
    mass,
    vx: getV(vx),
    vy: getV(vy),
    x: getPos(x),
    y: getPos(y),
    radius,
  };
};

export const createNparticles = (n, options) => {
  const retVal = Array(n)
    .fill("")
    .map(() => createParticle(options));

  return retVal;
};

export const drawParticles = (particles, canvas) => {
  particles.forEach(({ x, y, radius, color }) => {
    drawParticle(x, y, radius, color, canvas);
  });
};

export const fadeCanvas = () => {
  draw(0, 0, "hwb(0deg 0% 100% / 10%)", canvasSize);
};
