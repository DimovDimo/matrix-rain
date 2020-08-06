const canvasIdConstant = "matrix-rain";
const inputConstant = "01";
const inputSplitConstant = "";
const fontUnitConstant = "px";
const canvasContextConstant = "2d";
const canvasBackgroundColorConstant = "rgba(0, 0, 0, 0.1)";
const canvasTextColorConstant = "#0F0";

const randomFullMatrixConstant = 0.98;
const particlesConstant = 1;
const fontSizeConstant = 10;
const speedTimeDelayConstant = 50; // milliseconds

const isUseOutOfMatrixConstant = true;
const isUseWaveMatrixConstant = true;

let canvasMatrixRain = document.getElementById(canvasIdConstant);
let canvasMatrixRainContext = canvasMatrixRain.getContext(canvasContextConstant);

canvasFullScreen();
let items = getItems();
let particles = getParticles();

function matrixRain() {
	designCssMatrixRain();
	fillCanvasMatrixRain();
}

setInterval(matrixRain, speedTimeDelayConstant);

function canvasFullScreen() {
    canvasMatrixRain.width = window.innerWidth;
	canvasMatrixRain.height = window.innerHeight;
}

function getItems() {
	return inputConstant.split(inputSplitConstant);
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
	canvasMatrixRainContext.font = fontSizeConstant + fontUnitConstant;
	canvasMatrixRainContext.fillStyle = canvasBackgroundColorConstant;	
	canvasMatrixRainContext.fillRect(0, 0, window.innerWidth, window.innerHeight);	
	canvasMatrixRainContext.fillStyle = canvasTextColorConstant;
}

function fillCanvasMatrixRain() {
	for(let index = 0; index < particles.length; index++) {
		matrixFillText(index);
		outOfMatrix(particles, index);
		waveMatrix(particles, index);
		growthParticle(particles, index);
	}
}

function getRandomItem() {
	return items[getRandomItemsIndex()];
}

function getRandomItemsIndex() {
	let randomIndex = Math.random() * items.length;
	return Math.floor(randomIndex);
}

function getCanvasTextSize(index) {
	return fontSizeConstant * index;
}

function getParticlesSize(index) {
	return fontSizeConstant * particles[index];
}

function isOutOfMatrix(index) {
	return canvasMatrixRain.height < getParticlesSize(index);
}

function randomFullMatrix() {
	return randomFullMatrixConstant < Math.random();
}

function zeroParticle(particles, index) {
	particles[index] = 0;
}

function outOfMatrix(particles, index) {
	if(isUseOutOfMatrixConstant && isOutOfMatrix(index)) {
		zeroParticle(particles, index)
	}
}

function waveMatrix(particles, index) {
	if(isUseWaveMatrixConstant && randomFullMatrix()) {
		zeroParticle(particles, index)
	}
}

function growthParticle(particles, index) {
	particles[index] = particles[index] + particlesConstant;
}

function matrixFillText(index) {
	let randomItem = getRandomItem();
	let canvasTextSize = getCanvasTextSize(index);
	let particlesSize = getParticlesSize(index);
	
	canvasMatrixRainContext.fillText(randomItem, canvasTextSize, particlesSize);
}