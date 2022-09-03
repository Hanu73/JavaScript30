function playBeats(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const music = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!music) return;

  key.classList.add("triggered");
  music.currentTime = 0;
  music.play();

  // Remove the animation css class after 500ms
  setTimeout(function () {
    key.classList.remove("triggered");
  }, 500);
}

// Trigger the music when the respective key is pressed
window.addEventListener("keydown", playBeats);

// Not just keyboard events , but writing the click events
// As we can experience the sounds even in the mobile
const key = document.querySelectorAll(".key");
key.forEach((k) => {
  k.addEventListener("click", function (e) {
    playBeats({ keyCode: e.currentTarget.dataset.key });
  });
});

const sound = document.querySelector(`audio[data-key]`);
