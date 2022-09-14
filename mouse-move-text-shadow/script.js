const container = document.querySelector(".container");
const text = document.querySelector(".container");
const blur = "3px";
const distance = 18;

function shadowMove(e) {
  const { offsetWidth, offsetHeight } = container;

  let { offsetX, offsetY } = e;
  if (this !== e.target) {
    offsetX += e.target.offsetLeft;
    offsetY += e.target.offsetTop;
  }
  const xDistance = Math.round(
    (offsetX / (offsetWidth * 0.8)) * distance - distance / 2
  );
  const yDistance = Math.round(
    (offsetY / (offsetHeight * 0.8)) * distance - distance / 2
  );
  text.style.textShadow = `${xDistance}px ${yDistance}px ${blur} rgb(0 0 0 / 51%)`;
}

container.addEventListener("mousemove", shadowMove);
container.addEventListener("touchmove", shadowMove);
