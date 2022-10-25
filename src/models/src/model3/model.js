export default (particles, controls, canvas) => {
  let ctx = canvas.getContext("2d");
  let image = ctx.createImageData(1000, 1000);
  let data = image.data;

  let size = 1000;

  for (let x = 0; x < size * 4; x += 4) {
    for (let y = 0; y < size * 4; y += 4) {
      let index = x + y * size * 4;
      data[index] = 1;
      data[index + 1] = 255;
      data[index + 2] = 2;
      data[index + 3] = 255;
    }
  }

  ctx.putImageData(image, 0, 0);
  particles.forEach((particle) => {
    const gravityField = (x, y) =>
      particle.mass / ((x - particle.x) ** 2 + (y - particle.y) ** 2);
  });
};
