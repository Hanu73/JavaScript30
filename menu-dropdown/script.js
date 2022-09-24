const data = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".navbar");

function showData() {
  this.classList.add("on-hover");
  setTimeout(
    () =>
      this.classList.contains("on-hover") &&
      this.classList.add("on-hover-active"),
    100
  );
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = getCoords(dropdown);
  const navCoords = getCoords(nav);

  function getCoords(element) {
    return element.getBoundingClientRect();
  }

  const { height, width, top, left } = dropdownCoords;

  background.style.setProperty("width", `${width}px`);
  background.style.setProperty("height", `${height}px`);

  const { top: navTop, left: navLeft } = navCoords;

  const coords = {
    top: top - navTop,
    left: left - navLeft,
  };
  
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function hideData() {
  this.classList.remove("on-hover", "on-hover-active");
  background.classList.remove("open");
}

data.forEach((trigger) => trigger.addEventListener("mouseenter", showData));
data.forEach((trigger) => trigger.addEventListener("mouseleave", hideData));
