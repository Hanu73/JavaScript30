const timerDisplay = document.querySelector(".countdown-time");
const brbNote = document.querySelector(".brb-time");
const buttons = document.querySelectorAll("[data-time]");
let countdown;

function timer(seconds) {
  countdown ? clearInterval(countdown) : "";
  const startTime = Date.now();
  const endTime = startTime + seconds * 1000;
  displayTimer(seconds);
  displayEndTime(endTime);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimer(secondsLeft);
  }, 1000);
}

function displayTimer(time) {
  const timeToDisplay = returnDigitalTimeFormat(time);
  timerDisplay.textContent = timeToDisplay;
  document.title = timeToDisplay;
}

function displayEndTime(time) {
  brbNote.innerHTML = `Be Right Back at &nbsp; <b style="color:#0707078f"> ${padLeft(
    new Date(time).getHours(),
    "0",
    2
  )} : ${padLeft(new Date(time).getMinutes(), "0", 2)} : ${padLeft(
    new Date(time).getSeconds(),
    "0",
    2
  )} </b>`;
}

function returnDigitalTimeFormat(time) {
  let timeLeft = time;

  const hours = Math.floor(timeLeft / 3600);
  timeLeft = timeLeft % 3600;

  const minutes = Math.floor(timeLeft / 60);
  timeLeft = timeLeft % 60;

  const seconds = timeLeft;

  var finalTime = `${hours > 0 ? padLeft(hours, "0", 2) : ""} ${
    hours > 0 ? ":" : ""
  } ${padLeft(minutes, "0", 2)} : ${padLeft(seconds, "0", 2)} `;

  return finalTime;
}

function padLeft(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

function startTimer() {
  timer(parseInt(this.dataset.time));
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
