import { canvasSize } from "./constants";
import { calculateTotalEnergy } from "./utils";
import { gravity } from "./variables";

export default function interactParticles({ particles, initialEnergy }) {
  particles.forEach((a) => {
    const currentEnergy = calculateTotalEnergy(particles);
    const energyRatio = currentEnergy / initialEnergy;
    console.log(energyRatio);

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
      a.x += a.vx;
      a.y += a.vy;

      const damping = 0;

      if (a.x > canvasSize) {
        a.vx = -a.vx * damping;
        a.x = canvasSize;
      }
      if (a.x < 0) {
        a.vx = -a.vx * damping;
        a.x = 0;
      }

      if (a.y > canvasSize) {
        a.vy = -a.vy * damping;
        a.y = canvasSize;
      }
      if (a.y < 0) {
        a.vy = -a.vy * damping;
        a.y = 0;
      }
    });
  });
}
