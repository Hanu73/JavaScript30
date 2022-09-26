const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".video");

function handleMove(e) {
  const x = e.pageX - this.offsetLeft;
  const percent = x / this.offsetWidth;
  const min = 0.4;
  const max = 5;
  const width = Math.round(percent * 100) + "%";
  const playbackRate = (percent * (max - min) + min).toFixed(2);
  bar.style.width = width;
  bar.textContent = playbackRate + "×";
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleMove);
