const density = {
  value: 100,
  maxVal: 1000,
  minVal: 1,
  step: 1,
  type: "number",
  name: "density",
  description: "sets the density",
};
const gravity = {
  value: 0.003,
  maxVal: 100,
  minVal: 0.1,
  step: 0.1,
  type: "number",
  name: "gravity",
  description: "sets the gravity",
};

export default [density, gravity];
