var bodyBG = window.getComputedStyle(document.getElementsByTagName("body")[0])
    .backgroundColor;
var squares = document.getElementsByClassName("square");
var randomColors = [];
var pickedColor;
var pickedColorDisplay = document.getElementById("pickedColorDisplay");

setSquareEventListeners(squares);
randomColors = generateRandomColors();
pickedColor = selectRandomColor(randomColors);
pickedColorDisplay.textContent = pickedColor;

function setSquareEventListeners(squares) {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            if (this.style.backgroundColor === bodyBG) {
            } else {
                fadeOutSquare(this);
            }
        });
    }
}

function fadeOutSquare(square) {
    square.style.opacity = 0;
}
function generateRandomColors() {
    var colors = [];
    for (i = 0; i < squares.length; i++) {
        colors.push((squares[i].style.backgroundColor = randomBGColor()));
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
