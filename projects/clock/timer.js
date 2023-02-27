const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const startTimerBtn = document.querySelector("#start-timer");
const stopTimerBtn = document.querySelector("#stop-timer");
const resetTimerBtn = document.querySelector("#reset-timer");

let intervalId;
let seconds = 0;



function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    minutesDisplay.innerHTML = pad(Math.floor(seconds / 60));
    secondsDisplay.innerHTML = pad(seconds % 60);
  }, 1000);
  startTimerBtn.style.display = "none";
  stopTimerBtn.style.display = "inline-block";
}

function stopTimer() {
  clearInterval(intervalId);
  startTimerBtn.style.display = "inline-block";
  stopTimerBtn.style.display = "none";
}

function resetTimer() {
  clearInterval(intervalId);
  minutesDisplay.innerHTML = "00";
  secondsDisplay.innerHTML = "00";
  seconds = 0;
  startTimerBtn.style.display = "inline-block";
  stopTimerBtn.style.display = "none";
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

startTimerBtn.addEventListener("click", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);
resetTimerBtn.addEventListener("click", resetTimer);
