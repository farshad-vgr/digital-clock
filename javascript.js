const clock = document.querySelector('.clock');
let clockBoxShadowBlur = getComputedStyle(clock).getPropertyValue("box-shadow").split(/ (?![^(]*\))/)[3];
let clockBoxShadowSpread = getComputedStyle(clock).getPropertyValue("box-shadow").split(/ (?![^(]*\))/)[4];
const display = document.querySelector('.display');
const selectedColor = document.getElementById('colorOutput');
const rangeRed = document.getElementById('rangeRed');
const rangeGreen = document.getElementById('rangeGreen');
const rangeBlue = document.getElementById('rangeBlue');
const randomColor = document.getElementById('randomColor');

rangeRed.addEventListener('input', changeColor);
rangeGreen.addEventListener('input', changeColor);
rangeBlue.addEventListener('input', changeColor);

//------------------------------------------------ shows your local time -----------------------------------------------------------
setInterval(() => {

    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let day = 'AM';

    if (hours >= 22) {
        day = 'PM';
        hours = hours - 12;
    } else if (hours > 12 && hours < 22) {
        day = 'PM';
        hours = hours - 12;
        hours = '0' + hours;
    } else if (hours === 12) {
        day = 'PM';
    } else if (hours > 0 && hours < 10) {
        day = 'AM';
        hours = '0' + hours;
    } else if (hours === 0) {
        day = 'AM';
        hours = 12;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    display.innerHTML = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span> - <span>${day}</span>`;

},1000);

//------------------------------------------------------------- change color controller ----------------------------------------------------
function changeColor() {
    let red = rangeRed.value;
    let green = rangeGreen.value;
    let blue = rangeBlue.value;
    let color = `rgb(${red}, ${green}, ${blue})`;

    clock.style.boxShadow = `0 0 ${clockBoxShadowBlur} ${clockBoxShadowSpread} ${color} inset`;
    display.style.color = color;
    display.style.filter = `drop-shadow(0 0 7px ${color})`;
    selectedColor.innerHTML = `: rgb(<span style="color: red">${red}</span>, <span style="color: green">${green}</span>, <span style="color: blue">${blue}</span>)`;
    return color;
}

randomColor.addEventListener('click', function () {
    rangeRed.value = Math.floor(Math.random() * 255);
    rangeGreen.value = Math.floor(Math.random() * 255);
    rangeBlue.value = Math.floor(Math.random() * 255);

    changeColor();
    randomColor.style.background = changeColor();

    let rangeAverage = (Number(rangeRed.value) + Number(rangeGreen.value) + Number(rangeBlue.value))/3;
    if (rangeAverage < 150) {
        randomColor.style.color = 'white';
        randomColor.style.borderColor = 'white';
    } else {
        randomColor.style.color = 'black';
        randomColor.style.borderColor = 'black';
    }
});