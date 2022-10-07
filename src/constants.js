const canvas = document.querySelector("#canvas");
export const canvasContext = canvas.getContext("2d");
export const canvasSize = 1000;

canvas.setAttribute("width", canvasSize);
canvas.setAttribute("height", canvasSize);
