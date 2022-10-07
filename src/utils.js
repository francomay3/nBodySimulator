import { canvasSize, canvasContext } from "./constants";
import { density, backgroundColor, maxInitialVelocity } from "./variables";

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
  const {
    color = `hwb(${randomIntBetween(0, 360)}deg 0% 0%)`,
    mass = randomFloatBetween(4, 6),
    vx = randomFloatBetween(-maxInitialVelocity, maxInitialVelocity),
    vy = randomFloatBetween(-1, 1),
    x = randomIntBetween(0, canvasSize),
    y = randomIntBetween(0, canvasSize),
  } = arg;
  const radius = Math.sqrt((mass * density) / Math.PI);
  return { color, mass, vx, vy, x, y, radius };
};

export const createNparticles = (n, options) => {
  const particles = [];
  for (let i = 0; i < n; i++) {
    particles.push(createParticle(options));
  }
  return particles;
};

export const drawParticles = (particles) => {
  particles.forEach(({ x, y, radius, color }) => {
    drawParticle(x, y, radius, color);
  });
};

export const fadeCanvas = () => {
  draw(0, 0, backgroundColor, canvasSize);
};
