const fontSizeConstant = 10;
const particlesConstant = 1;
const canvasIdConstant = "matrix-rain";
const canvasContextConstant = "2d";
const canvasBackgroundColorConstant = "rgba(0, 0, 0, 0.1)";
const canvasTextColorConstant = "#0F0";

let canvasMatrixRain = document.getElementById(canvasIdConstant);
let canvasMatrixRainContext = canvasMatrixRain.getContext(canvasContextConstant);

canvasFullScreen();
let items = getItems();
let particles = getParticles();

function matrixRain()
{
	designCssMatrixRain();
}

function canvasFullScreen() {
    canvasMatrixRain.width = window.innerWidth;
	canvasMatrixRain.height = window.innerHeight;
}

function getItems() {
    let input = "01";	
	return input.split("");
}

function getNumberOfColumns() {
	return canvasMatrixRain.width / fontSizeConstant;
}

function getParticles() {
	let particles = [];
	let numberOfColumns = getNumberOfColumns();
	for(let x = 0; x < numberOfColumns; x++) {
		particles[x] = particlesConstant;
	}
	
	return particles;
}

function designCssMatrixRain() {
	canvasMatrixRainContext.fillStyle = canvasBackgroundColorConstant;
	canvasMatrixRainContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
	canvasMatrixRainContext.fillStyle = canvasTextColorConstant;
}