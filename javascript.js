const clock = document.querySelector('.display');

setInterval(() => {

    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let day = 'AM';

    if (hours > 12) {
        day = 'PM';
        hours = hours - 12;
    } else if (hours > 0 && hours < 10) {
        hours = '0' + hours;
    } else if (hours === 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    clock.innerHTML = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span> - <span>${day}</span>`;

},1000);