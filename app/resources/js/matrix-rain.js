let canvasMatrixRain = document.getElementById("matrix-rain");

canvasFullScreen(canvasMatrixRain);
let items = getItems();

function canvasFullScreen(canvasMatrixRain) {
    canvasMatrixRain.height = window.innerHeight;
    canvasMatrixRain.width = window.innerWidth;
}

function getItems() {
    let input = "01";	
	return input.split("");
}