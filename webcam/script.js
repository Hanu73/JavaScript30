const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const error = document.querySelector(".error");
const displayCamera = document.querySelector(".display-camera");
const noAccess = document.querySelector(".no-access");
noAccess.style.display = "none";
strip.style.display = "none";

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      displayCamera.style.display = "none";
      noAccess.style.display = "flex";
      error.innerHTML = `OOPS!! You have Denied the Camera Access 😿`;
      console.error(`OOPS!!`, err);
    });
}

function paintToCanvas() {
  const { videoWidth: width, videoHeight: height } = video;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takePhoto() {
  strip.style.display = "block";
  // snap sound
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "camera-snap");
  link.innerHTML = `<img src="${data}" alt="Camera Snap" />`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
