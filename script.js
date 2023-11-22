let timer;
let minutes = 25;
let seconds = 0;
let isPaused = true;
let lastClickedButton = "";

function displayTime(duration) {
  clearInterval(timer);
  timer = null;
  isPaused = true;
  minutes = duration;
  seconds = 0;
  updateDisplay();
}

function startPomodoro() {
  displayTime(25);
}

function shortBreak() {
  displayTime(5);
}

function longBreak() {
  displayTime(10);
}

function startTimer() {
  if (isPaused) {
    timer = setInterval(updateTimer, 1000);
    isPaused = false;
  } else {
    clearInterval(timer);
    isPaused = true;
  }

  updateButtonState();
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
    chooseTimer();
  }

  updateDisplay();
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  isPaused = true;

  switch (lastClickedButton) {
    case "pomodoro":
      startPomodoro();
      break;
    case "shortBreak":
      shortBreak();
      break;
    case "longBreak":
      longBreak();
      break;
    default:
      startPomodoro();
      break;
  }

  seconds = 0;
  updateDisplay();
  updateButtonState();
}

function chooseTimer() {
  switch (lastClickedButton) {
    case "pomodoro":
      startPomodoro();
      break;
    case "shortBreak":
      shortBreak();
      break;
    case "longBreak":
      longBreak();
      break;
    default:
      startPomodoro();
      break;
  }
}

function updateDisplay() {
  const displayMinutes = String(minutes).padStart(2, "0");
  const displaySeconds = String(seconds).padStart(2, "0");
  document.getElementById(
    "timer"
  ).innerText = `${displayMinutes}:${displaySeconds}`;
}

function updateButtonState() {
  const pomodoroButton = document.querySelector(".start");
  pomodoroButton.innerText = isPaused ? "Start" : "Pause";
}

document.querySelector(".pomodoro-btn").addEventListener("click", function () {
  lastClickedButton = "pomodoro";
  resetTimer();
});

document
  .querySelector(".short-break-btn")
  .addEventListener("click", function () {
    lastClickedButton = "shortBreak";
    resetTimer();
  });

document
  .querySelector(".long-break-btn")
  .addEventListener("click", function () {
    lastClickedButton = "longBreak";
    resetTimer();
  });

updateDisplay();

// const modal = document.getElementById("modal");
// const theme = document.getElementById("theme");

// theme.addEventListener("onclick", function () {
//   modal.style.display = "block";
//   container.style.background = "rgba(0, 0, 0, 0.5)";
// });

const clickHere = document.getElementById("clickHere");
const modal = document.getElementById("modal");
const container = document.getElementById("container");

function closeModal() {
  modal.style.display = "none";
  container.style.background = "";
}

clickHere.addEventListener("click", function () {
  modal.style.display = "block";
  // container.style.background = "rgba(0, 0, 0, 0.5)";
});

const closeElements = [
  modal,
  document.getElementById("downButton"),
  document.getElementById("cancel"),
  document.getElementById("icon"),
];

closeElements.forEach((element) => {
  element.addEventListener("click", function (event) {
    if (event.target === element || event.target === modal) {
      closeModal();
    }
  });
});
