const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const timerSecs = document.querySelector("#timerSecs");

let current = 60;
let intervID;

startBtn.addEventListener("click", () => {
  startTimer();
});

pauseBtn.addEventListener("click", () => {
  pauseTimer();
});

function updateUI(secs) {
  if (secs < 0) {
    clearInterval(intervID);
  } else {
    current--;
  }
  timerSecs.textContent = current;
}

function startTimer() {
  if (!intervID) {
    intervID = setInterval(updateUI, 1000);
  }
}

function pauseTimer() {
  clearInterval(intervID);
  intervID = null;
}
