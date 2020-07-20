let canvasMatrixRain = document.getElementById("matrix-rain");

canvasFullScreen(canvasMatrixRain);

function canvasFullScreen(canvasMatrixRain) {
    canvasMatrixRain.height = window.innerHeight;
    canvasMatrixRain.width = window.innerWidth;
}