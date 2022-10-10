import { canvasSize, canvasContext } from "./constants";

export const calculateTotalEnergy = (particles) => {
  let totalEnergy = 0;
  particles.forEach((particle) => {
    totalEnergy +=
      particle.mass *
      Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
  });
  return totalEnergy;
};

const drawParticle = (x, y, radius, color) => {
  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, 0, Math.PI * 2);
  canvasContext.fillStyle = color;
  canvasContext.fill();
};

const draw = (x, y, color, s) => {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, s, s);
};
const randomFloatBetween = (min, max) => Math.random() * (max - min) + min;
const randomIntBetween = (min, max) => Math.floor(randomFloatBetween(min, max));

export const createParticle = (arg = {}) => {
  let {
    color = `hwb(${randomIntBetween(0, 360)}deg 0% 0%)`,
    mass = randomFloatBetween(10, 500),
    vx = randomFloatBetween(-0.015, 0.015),
    vy = randomFloatBetween(-0.015, 0.015),
    x = randomIntBetween(0, canvasSize),
    y = randomIntBetween(0, canvasSize),
  } = arg;
  if (typeof vx === "function") {
    vx = vx();
  }
  if (typeof vy === "function") {
    vy = vy();
  }
  if (typeof x === "function") {
    x = x();
  }
  if (typeof y === "function") {
    y = y();
  }

  const radius = Math.sqrt((mass * 100) / Math.PI);
  return { color, mass, vx, vy, x, y, radius };
};

export const createNparticles = (n, options) => {
  const particles = [];
  for (let i = 0; i < n; i++) {
    particles.push(createParticle(options));
  }
  console.log(particles);
  return particles;
};

export const drawParticles = (particles) => {
  particles.forEach(({ x, y, radius, color }) => {
    drawParticle(x, y, radius, color);
  });
};

export const fadeCanvas = () => {
  draw(0, 0, "hwb(0deg 0% 100% / 10%)", canvasSize);
};
