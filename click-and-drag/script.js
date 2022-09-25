const boxes = document.querySelectorAll(".box");
const scrollView = document.querySelector(".scroll-view");
boxes.forEach((box) => {
  setTimeout(() => {
    box.innerHTML = `<img src=${"https://picsum.photos/400/180/?random&t="}${new Date().getMilliseconds()} />`;
  }, 350);
  box.addEventListener("mouseenter", zoomIn);
  box.addEventListener("mouseleave", zoomOut);
});

function zoomIn() {
  this.classList.add("zoomin");
  this.classList.remove("zoomout");
}
function zoomOut() {
  this.classList.add("zoomout");
  this.classList.remove("zoomin");
}

let isDown = true;
let startX;
let scrollLeft;

scrollView.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollView.offsetLeft;
  const walk = (x - startX) * 3;
  scrollView.scrollLeft = scrollLeft - walk;
});

scrollView.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - scrollView.offsetLeft;
  scrollLeft = scrollView.scrollLeft;
});

scrollView.addEventListener("mouseup", (e) => {
  isDown = false;
});

scrollView.addEventListener("mouseleave", (e) => {
  isDown = false;
});
