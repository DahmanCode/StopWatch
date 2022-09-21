let [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let int;

// ===== IMPLEMENTING THE 'START' FUNCTION ===== //

document.getElementById('startTimer').addEventListener('click', () => {
  int = setInterval(displayTimer, 10);
});

function displayTimer() {

  milliSeconds += 10;
  if (milliSeconds == 1000) {
    milliSeconds = 0;
    seconds ++;
    if (seconds == 60) {
      seconds = 0;
      minutes ++;
      if (minutes == 60) {
        minutes = 0;
        hours ++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliSeconds < 10 ? "00" + milliSeconds :
  milliSeconds < 100 ? "0" + milliSeconds : milliSeconds;

  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

// ===== IMPLEMENTING THE 'PAUSE' FUNCTION ===== //


document.getElementById('pauseTimer').addEventListener('click', () => {
  clearInterval(int);
});

// ===== IMPLEMENTING THE 'RESET' FUNCTION ===== //

document.getElementById('resetTimer').addEventListener('click', () => {
  clearInterval(int);
  [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML= '00 : 00 : 00 : 000';
});
