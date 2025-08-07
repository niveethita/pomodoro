const startButton = document.querySelector('.btn-start');
const sesh = document.querySelector('.minutes');
const plant = document.getElementById('plant');
let state = false;
let totalSeconds;
let totalInitialSeconds;
let myInterval;

function countdown() {
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');

    totalSeconds--;

    let minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;

    secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    minuteDiv.textContent = minutesLeft;

    if (totalSeconds <= 0) {
        clearInterval(myInterval);
    }
    growPlant();
}

function growPlant() {
    
    const progress = (totalInitialSeconds - totalSeconds) / totalInitialSeconds;

    if (progress >= 1) {
        plant.src = 'https://i.imgur.com/CZwGNGU.png'; // stage 5
    } else if (progress >= 0.8) {
        plant.src = 'https://i.imgur.com/GMhfT8h.png'; // stage 4
    } else if (progress >= 0.6) {
        plant.src = 'https://i.imgur.com/idQdfAq.png'; // stage 3
    } else if (progress >= 0.4) {
        plant.src = 'https://i.imgur.com/aaymv9Y.png'; // stage 2
    } else if (progress >= 0.2) {
        plant.src = 'https://i.imgur.com/tehUm1u.png'; // stage 1
    } else {
        plant.src = 'https://i.imgur.com/LroNRFC.png'; // stage 0
    }
}

function timer() {
    const seshTotalMin = Number.parseInt(sesh.textContent);

    if (!state) {
        state = true;
        totalSeconds = seshTotalMin * 60;
        countdown();
        myInterval = setInterval(countdown, 1000);
    } else {
        alert('Session has already started.');
    }
    totalInitialSeconds = totalSeconds; 
}

startButton.addEventListener('click', timer);

