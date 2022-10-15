const getCanvas = () => window.appVars?.canvas ?? null;
export const canvasContext = getCanvas()?.getContext("2d");
export const canvasSize = 1000;

getCanvas()?.setAttribute("width", canvasSize);
getCanvas()?.setAttribute("height", canvasSize);
