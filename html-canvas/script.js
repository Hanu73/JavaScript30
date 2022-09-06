const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let osX = 0;
let osY = 0;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle = "#000";

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();

  ctx.moveTo(osX, osY);

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  osX = e.offsetX;
  osY = e.offsetY;
}

const colorPicker = document.querySelector("#color");

colorPicker.addEventListener("click", (e) => {
  isDrawing = false;
});
colorPicker.addEventListener("change", (e) => {
  ctx.strokeStyle = e.currentTarget.value;
  isDrawing = false;
});

const thickness = document.querySelector("#thickness");

thickness.addEventListener("change", (e) => {
  ctx.lineWidth = e.currentTarget.value;
  isDrawing = false;
});
document.addEventListener("mousedown", function (e) {
  isDrawing = true;
  osX = e.offsetX;
  osY = e.offsetY;
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
});

canvas.addEventListener("mouseout", (e) => {
  isDrawing = false;
});

canvas.addEventListener(
  "touchstart",
  function (e) {
    isDrawing = true;
    osX = e.touches[0].pageX;
    osY = e.touches[0].pageY;
  },
  0
);

canvas.addEventListener(
  "touchend",
  function () {
    isDrawing = false;
  },
  0
);

canvas.addEventListener(
  "touchmove",
  function (e) {
    if (isDrawing) {
      with (ctx) {
        beginPath();
        moveTo(osX, osY);
        lineTo(e.touches[0].pageX, e.touches[0].pageY);
        stroke();
      }
      osX = e.touches[0].pageX;
      osY = e.touches[0].pageY;
    }
  },
  0
);
