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
  value: 2,
  maxVal: 100,
  minVal: 0.1,
  step: 0.1,
  type: "number",
  name: "gravity",
  description: "sets the gravity",
};

const backgroundColor = {
  value: "hwb(0deg 0% 100% / 10%)",
  type: "color",
  name: "background color",
  description: "sets the background color",
};

const initialEnergy = {
  value: 0.05,
  maxVal: 50,
  minVal: 0.1,
  step: 0.1,
  type: "number",
  name: "initial energy",
  description: "sets the initial energy",
};

const wallDamping = {
  value: 1,
  maxVal: 1,
  minVal: 0,
  step: 0.1,
  type: "number",
  name: "wall damping",
  description: "sets the wall damping",
};

const drag = {
  value: 0,
  maxVal: 1,
  minVal: 0,
  step: 0.1,
  type: "number",
  name: "drag",
  description: "sets the drag",
};

export default [
  density,
  gravity,
  backgroundColor,
  initialEnergy,
  wallDamping,
  drag,
];
