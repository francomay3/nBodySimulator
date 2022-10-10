import { canvasSize } from "../../constants";
import { calculateTotalEnergy } from "../../utils";

export const backgroundColor = "hwb(0deg 0% 100% / 10%)";
export const density = 100;
export const gravity = 2;
export const initialEnergy = 0.05;
export const wallDamping = 1;
export const drag = 0;

export const model1 = (particles) => {
  particles.forEach((a) => {
    const currentEnergy = calculateTotalEnergy(particles);
    let energyRatio = currentEnergy / initialEnergy;
    energyRatio = energyRatio ? energyRatio : 0.0001;

    particles.forEach((b) => {
      if (a === b) {
        return;
      }
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceCorrection = 1;
      if (distance < a.radius + b.radius) {
        distance = a.radius + b.radius;
        forceCorrection = -2;
      }
      let force =
        ((gravity * a.mass * b.mass) / (distance * distance)) * forceCorrection;

      const angle = Math.atan2(dy, dx);
      const fx = force * Math.cos(angle);
      const fy = force * Math.sin(angle);
      a.vx += fx / energyRatio / a.mass;
      a.vy += fy / energyRatio / a.mass;
      a.vx *= 1 - drag;
      a.vy *= 1 - drag;
      a.x += a.vx;
      a.y += a.vy;
      const speedLimit = 0.02;
      if (a.vx > speedLimit) {
        a.vx = speedLimit;
      }
      if (a.vy > speedLimit) {
        a.vy = speedLimit;
      }

      if (a.x > canvasSize) {
        a.vx *= -1 * wallDamping;
        a.x = canvasSize - 1;
      }
      if (a.x < 0) {
        a.vx *= -1 * wallDamping;
        a.x = 1;
      }

      if (a.y > canvasSize) {
        a.vy *= -1 * wallDamping;
        a.y = canvasSize - 1;
      }
      if (a.y < 0) {
        a.vy *= -1 * wallDamping;
        a.y = 1;
      }
    });
  });
};
