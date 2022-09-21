const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voices"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector("#msg").value;
msg.text = "Please write your message here"; // default value
const textData = document.querySelector('[name="text"]');

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map((voice) => `<option value="${voice.name}"> ${voice.name} </option>`)
    .join("");
}

function setVoice() {
  msg.voice = voices.find((v) => v.name === this.value);
  utterVoice();
}

function setOption() {
  msg[this.name] = this.value;
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);

function utterVoice(start = true) {
  speechSynthesis.cancel();
  if (start) {
    speechSynthesis.speak(msg);
  }
}

textData.addEventListener("change", setOption);
speakButton.addEventListener("click", utterVoice);
stopButton.addEventListener("click", () => utterVoice(false));
