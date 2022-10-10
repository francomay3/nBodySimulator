import { canvasSize } from "../../constants";

export const density = 100;
const gravity = 0.3;

export const model2 = (particles) => {
  const allCombinations = [];
  particles.forEach((a) => {
    particles.forEach((b) => {
      if (a === b || a.mass === 0 || b.mass === 0) return;
      allCombinations.push({ a, b });
    });
  });

  allCombinations.forEach(({ a, b }) => {
    if (a.mass === 0 || b.mass === 0) return;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < a.radius + b.radius) {
      a.vx = (a.vx * a.mass + b.vx * b.mass) / (a.mass + b.mass);
      a.vy = (a.vy * a.mass + b.vy * b.mass) / (a.mass + b.mass);
      a.x = (a.x * a.mass + b.x * b.mass) / (a.mass + b.mass);
      a.y = (a.y * a.mass + b.y * b.mass) / (a.mass + b.mass);
      a.mass += b.mass;
      a.radius = Math.sqrt((a.mass * density) / Math.PI);
      b.mass = 0;
      b.x = -1000;
      b.y = -1000;
      return;
    }
    const force = (gravity * a.mass * b.mass) / (distance * distance);
    const ax = (dx / distance) * force;
    const ay = (dy / distance) * force;
    a.vx += ax / a.mass;
    a.vy += ay / a.mass;
    a.x += a.vx;
    a.y += a.vy;

    const limit = 200;

    if (a.x < -limit) {
      a.x = -limit;
      a.vx = -a.vx;
    }
    if (a.x > canvasSize + limit) {
      a.x = canvasSize + limit;
      a.vx = -a.vx;
    }
    if (a.y < -limit) {
      a.y = -limit;
      a.vy = -a.vy;
    }
    if (a.y > canvasSize + limit) {
      a.y = canvasSize + limit;
      a.vy = -a.vy;
    }
  });
};
