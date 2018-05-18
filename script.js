const slideBar = document.getElementsByClassName("slide-bar")[0];
const slideBtton = document.getElementsByClassName("slide-button")[0];
const number = document.getElementsByClassName("start")[0];
const blueSlide = document.getElementsByClassName("changed-color")[0];
const getValues = document.getElementsByClassName("getValues")[0];
const moveButtonRight = document.querySelector(".move-slider-right");
const moveButtonLeft = document.querySelector(".move-slider-left");

var initialField = document.getElementsByClassName("initial")[0];
var initial = 0;
var lastField = document.getElementsByClassName("last")[0];
var last = 100;

slideBar.style.width = "1020px";
slideBtton.style.left = "0px";
slideBar.style.left = "0px";

let mouseMove  = false;


slideBar.addEventListener("click", barSlideClick);
slideBar.addEventListener("mousedown", onMouseDown);
document.addEventListener("mouseup", onMouseUp);
document.addEventListener("mousemove", onMouseMove);
getValues.addEventListener("click", getValuesFunc);
moveButtonRight.addEventListener("click", moveSlideRight);
moveButtonLeft.addEventListener("click", moveSlideLeft);


function onMouseMove(event) {
    let initialLeft = parseInt(slideBtton.style.left.split("px")[0]);
    let actualSlidebarLeft = parseInt(slideBar.style.left.split("px")[0]);
    let actualSlideLeft = initialLeft; 
    
    if (mouseMove == true) {
        let xCoords = event.clientX - actualSlidebarLeft;
        if (xCoords < 0) {
            slideBtton.style.left = "0px";
        } else if (xCoords > 1000) {
            slideBtton.style.left = "1000px";
        } else {
            slideBtton.style.left = xCoords + "px";
            blueSlide.style.width = (parseInt(actualSlideLeft) +10) + "px";
            number.innerHTML = Math.floor(displayNumber());
            console.log(xCoords);
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

function moveSlideRight() {
    let actualSlidebarLeft = parseInt(slideBar.style.left.split("px")[0]);
    let addRight = (actualSlidebarLeft + 20) + "px";
    slideBar.style.left = addRight;
    console.log(slideBar.style.left);
    console.log(addRight)
}

function moveSlideLeft() {
    let actualSlidebarLeft = parseInt(slideBar.style.left.split("px")[0]);
    let addRight = (actualSlidebarLeft - 20) + "px";
    slideBar.style.left = addRight;
    console.log(slideBar.style.left);
    console.log(addRight)
}

function barSlideClick(event) {
    let initialLeft = parseInt(slideBtton.style.left.split("px")[0]);
    let actualSlidebarLeft = parseInt(slideBar.style.left.split("px")[0]);
    let actualSlideLeft = initialLeft; 
    

        let xCoords = event.clientX - actualSlidebarLeft;
        if (xCoords < 0) {
            slideBtton.style.left = "0px";
        } else if (xCoords > 1000) {
            slideBtton.style.left = "1000px";
        } else {
            slideBtton.style.left = xCoords + "px";
            number.innerHTML = Math.floor(displayNumber());
        }
    actualSlidebarLeft = parseInt(slideBar.style.left.split("px")[0]);
    blueSlide.style.width = parseInt(slideBtton.style.left.split("px")[0]) + "px";
}