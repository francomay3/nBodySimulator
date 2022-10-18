import { canvasSize } from "../../../../constants";
import controls from "../controls/index.js";
import { getCombinations } from "../../../../utils";

const [density, gravity] = controls;

export default (particles) =>
  getCombinations(particles).forEach(([a, b]) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const proportional = (prop) =>
      (a[prop] * a.mass + b[prop] * b.mass) / (a.mass + b.mass);

    if (distance < a.radius + b.radius) {
      a.vx = proportional("vx");
      a.vy = proportional("vy");
      a.x = proportional("x");
      a.y = proportional("y");
      a.mass += b.mass;
      a.radius = Math.sqrt(a.mass / Math.PI);
      particles.splice(particles.indexOf(b), 1);
      return;
    }
    const force = (gravity.value * a.mass * b.mass) / distance ** 2;
    const ax = (dx / distance) * force;
    const ay = (dy / distance) * force;
    a.vx += ax / a.mass;
    a.vy += ay / a.mass;
    b.vx -= ax / b.mass;
    b.vy -= ay / b.mass;

    a.x += a.vx;
    a.y += a.vy;
    b.x += b.vx;
    b.y += b.vy;
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
