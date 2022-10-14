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
      const proportional = (prop) =>
        (a[prop] * a.mass + b[prop] * b.mass) / (a.mass + b.mass);
      a.vx = proportional("vx");
      a.vy = proportional("vy");
      a.x = proportional("x");
      a.y = proportional("y");
      a.mass += b.mass;
      a.radius = Math.sqrt((a.mass * density) / Math.PI);
      b.mass = 0;
      b.x = -1000;
      b.y = -1000;
      console.log("3", particles);
      return;
    }
    const forces = (times) => (gravity * a.mass * b.mass) / distance ** times;
    const experimentalForce3 =
      gravity *
      a.mass *
      b.mass *
      ((Math.sin(distance ** 2 - 0.6) + 0.1 * distance) / distance ** 2);
    const force = forces(2);
    const ax = (dx / distance) * force;
    const ay = (dy / distance) * force;
    a.vx += ax / a.mass;
    a.vy += ay / a.mass;
    a.x += a.vx;
    a.y += a.vy;

    const limit = 0;

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
