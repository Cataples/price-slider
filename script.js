const slideBar = document.getElementsByClassName("slide-bar")[0];
const slideBtton = document.getElementsByClassName("slide-button")[0];
const number = document.getElementsByClassName("start")[0];
const blueSlide = document.getElementsByClassName("changed-color")[0];
const getValues = document.getElementsByClassName("getValues")[0];

var initialField = document.getElementsByClassName("initial")[0];
var initial = 0;
var lastField = document.getElementsByClassName("last")[0];
var last = 100;

slideBar.style.width = "1020px";
slideBtton.style.left = "0px";

let mouseMove  = false;

document.addEventListener("mousedown", onMouseDown);
document.addEventListener("mouseup", onMouseUp);
document.addEventListener("mousemove", onMouseMove);
getValues.addEventListener("click", getValuesFunc);


function onMouseMove(event) {
    const oldLeft = slideBtton.style.left.split("px")[0];
    
    if (mouseMove == true) {
        let xCoords = event.clientX;
        if (xCoords < 0) {
            slideBtton.style.left = "0px";;
        } else if (xCoords > 1000) {
            slideBtton.style.left = "1000px";
        } else {
            slideBtton.style.left = xCoords + "px";
            blueSlide.style.width = (parseInt(oldLeft) + 15) + "px";
            number.innerHTML = Math.floor(displayNumber());
        }
    }
}

function displayNumber() {
    const oldLeft = slideBtton.style.left.split("px")[0];

    var diff = last - initial;
    var diffRaport = diff/1000;
    var diffRaportNew = diffRaport * oldLeft;
    displayedNumber = diffRaportNew + initial;

    return displayedNumber;
}

function onMouseDown() {
    mouseMove = true;
    number.style.visibility = "visible";
}

function onMouseUp() {
    mouseMove = false;
    number.style.visibility = "hidden";
}

function getValuesFunc() {
    initial = parseInt(initialField.value);
    last = parseInt(lastField.value);
}