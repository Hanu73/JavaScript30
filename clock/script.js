const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");

function getDate() {
  const date = new Date();

  //seconds hand
  const seconds = date.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  //minutes hand
  const minutes = date.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  //Hours hand
  const hours = date.getHours();
  const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

  const digitalClock = document.querySelector(".digital-clock");
  const updatedHours = (hours + "").length > 1 ? hours : `0${hours}`;
  const updatedMinutes = (minutes + "").length > 1 ? minutes : `0${minutes}`;
  const updatedSeconds = (seconds + "").length > 1 ? seconds : `0${seconds}`;
  digitalClock.innerHTML = `${updatedHours} : ${updatedMinutes} : ${updatedSeconds}`;
}

setInterval(getDate, 1000);
