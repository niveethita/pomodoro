
const startButton = document.querySelector('.btn-start');
const sesh = document.querySelector('.minutes'); 
let timerOn = false

function countdown() {     
      const minuteDiv = document.querySelector('.minutes');
      const secondDiv = document.querySelector('.seconds');

      totalSeconds--;          

      let minutesLeft = Math.floor(totalSeconds / 60); 
      let secondsLeft = totalSeconds % 60;

      secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
      minuteDiv.textContent = minutesLeft;

      if (minutesLeft === 0 && secondsLeft === 0) {   
        clearInterval(myInterval);
      }
    };

function timer() {
    const seshTotalMin = Number.parseInt(sesh.textContent); 

    if (!state) {
        state = true
        const seshTotalSec = seshTotalMin*60
        countdown()
        myInterval = setInterval(updateSeconds, 1000)
    }

    else {
        alert('Session has already started.');
    }
}

