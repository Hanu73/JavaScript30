const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const random = Math.floor(Math.random() * holes.length);
  const hole = holes[random];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function hidenseek() {
  // Can provide an option in future to user for increasing the speed
  const time = randomTime(100, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) {
      hidenseek();
    } else {
      alert(`Time's Up 😄 Your score - ${score}`);
    }
  }, time);
}

function startGame() {
  scoreBoard.textContent = `Score : 0`;
  timeUp = false;
  score = 0;
  hidenseek();
  setTimeout(() => (timeUp = true), 20000);
}

function hit(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = `Score : ${score}`;
}

moles.forEach((mole) => mole.addEventListener("click", hit));
