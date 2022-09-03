const inputData = document.querySelectorAll(".controls input");

inputData.forEach((input) => {
  input.addEventListener("change", updateData);
  input.addEventListener("mousemove", updateData);
});

function updateData() {
  const getUnitsData = this.dataset.units || "";
  document.documentElement.style.setProperty(
    `---${this.name}`,
    this.value + getUnitsData
  );
}
