const fontSizeConstant = 10;
const particlesConstant = 1;

let canvasMatrixRain = document.getElementById("matrix-rain");

canvasFullScreen();
let items = getItems();
let particles = getParticles();

function canvasFullScreen() {
    canvasMatrixRain.height = window.innerHeight;
    canvasMatrixRain.width = window.innerWidth;
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