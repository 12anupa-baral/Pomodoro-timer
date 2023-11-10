let timer;
let minutes = 25;
let seconds = 0;
let isPaused = false;

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  isPaused = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function updateTimer() {
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else {
    clearInterval(timer);
    timer = null;
    // You can add a notification or other actions when the timer reaches 0
  }

  updateDisplay();
}

function updateDisplay() {
  const displayMinutes = String(minutes).padStart(2, "0");
  const displaySeconds = String(seconds).padStart(2, "0");
  document.getElementById(
    "timer"
  ).innerText = `${displayMinutes}:${displaySeconds}`;
}
