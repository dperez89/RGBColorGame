var bodyBG = window.getComputedStyle(document.getElementsByTagName("body")[0])
    .backgroundColor;
var squares = document.getElementsByClassName("square");
var randomColors = [];
var pickedColor;
var pickedColorDisplay = document.getElementById("pickedColorDisplay");
var isColorPicked = false;

setSquareEventListeners(squares);
setup();

function setup() {
    randomColors = generateRandomColors();
    pickedColor = selectRandomColor(randomColors);
    pickedColorDisplay.textContent = pickedColor;
}

function setSquareEventListeners(squares) {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            checkGuess(this);
        });
    }
}
function fadeInSquare(square) {
    square.style.opacity = 1;
}
function fadeOutSquare(square) {
    square.style.opacity = 0;
}
function checkGuess(square) {
    if (square.style.backgroundColor === pickedColor) {
        for (i = 0; i < squares.length; i++) {
            fadeOutSquare(squares[i]);
        }
        window.setTimeout(setup, 200);
    } else {
        fadeOutSquare(square);
    }
}
function generateRandomColors() {
    var colors = [];
    for (i = 0; i < squares.length; i++) {
        colors.push((squares[i].style.backgroundColor = randomBGColor()));
    }
    for (j = 0; j < squares.length; j++) {
        fadeInSquare(squares[j]);
    }
    return colors;
}

function selectRandomColor(randomColors) {
    var x = Math.floor(Math.random() * Math.floor(6));
    return randomColors[x];
}

function randomBGColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgColor;
}
