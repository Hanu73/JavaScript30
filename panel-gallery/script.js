const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => panel.addEventListener("click", makeActive));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);

function makeActive() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
