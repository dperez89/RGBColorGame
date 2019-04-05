var bodyBG = window.getComputedStyle(document.getElementsByTagName("body")[0])
    .backgroundColor;
var squares = document.getElementsByClassName("square");
var randomColors = [];
var pickedColor;
var pickedColorDisplay = document.getElementById("pickedColorDisplay");
var isColorPicked = false;
var messageDisplay = document.querySelector("#message");
var h1Display = document.getElementsByTagName("h1")[0];

setSquareEventListeners(squares);
setup();

function checkGuess(square) {
    if (square.style.backgroundColor === pickedColor) {
        correctGuess();
    } else {
        incorrectGuess(square);
    }
}
function correctGuess() {
    matchColors();
    for (j = 0; j < squares.length; j++) {
        fadeInSquare(squares[j]);
    }

    messageDisplay.textContent = "Correct!";

    window.setTimeout(function() {
        for (i = 0; i < squares.length; i++) {
            fadeOutSquare(squares[i]);
        }
        resetHeaderBGColor();
        messageDisplay.innerHTML = "&nbsp";
        window.setTimeout(setup, 400);
    }, 2000);
}
function fadeInSquare(square) {
    square.style.opacity = 1;
    square.style.cursor = "pointer";
}
function fadeOutSquare(square) {
    square.style.opacity = 0;
    square.style.cursor = "initial";
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
function incorrectGuess(square) {
    fadeOutSquare(square);
    messageDisplay.textContent = "Try Again!";
}
function matchColors() {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
    h1Display.style.backgroundColor = pickedColor;
}
function randomBGColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgColor;
}

function resetHeaderBGColor() {
    h1Display.style.backgroundColor = bodyBG;
}
function selectRandomColor(randomColors) {
    var x = Math.floor(Math.random() * Math.floor(6));
    return randomColors[x];
}
function setSquareEventListeners(squares) {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            checkGuess(this);
        });
    }
}
function setup() {
    randomColors = generateRandomColors();
    pickedColor = selectRandomColor(randomColors);
    pickedColorDisplay.textContent = pickedColor;
}
