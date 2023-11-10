let timer;
let minutes = 25;
let seconds = 0;
let isPaused = true;

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
  isPaused = false;
  updateButtonState();
}

function restartTimer() {
  clearInterval(timer);
  timer = null;
  isPaused = true;
  minutes = 25;
  seconds = 0;
  updateDisplay();
  updateButtonState();
}

function toggleTimer() {
  if (isPaused) {
    startTimer();
  } else {
    pauseTimer();
  }
  updateButtonState();
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
  isPaused = true;
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

function updateButtonState() {
  const startButton = document.querySelector("button:nth-of-type(1)");
  const restartButton = document.querySelector("button:nth-of-type(2)");
  const toggleButton = document.querySelector("button:nth-of-type(3)");

  startButton.disabled = !isPaused;
  restartButton.disabled = isPaused;

  toggleButton.innerText = isPaused ? "Resume" : "Pause";
}
