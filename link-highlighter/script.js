const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const { width, height, top, left } = linkCoords;
  const coords = {
    width,
    height,
    top: top + window.scrollY,
    left: left + window.scrollX,
  };

  highlight.style.width = `${width}px`;
  highlight.style.height = `${height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
