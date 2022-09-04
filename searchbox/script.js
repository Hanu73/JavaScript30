const endPoint =
  "https://raw.githubusercontent.com/Hanu73/JavaScript30/main/searchbox/cities.json";

const cities = [];
fetch(endPoint)
  .then((res) => res.json())
  .then((data) => {
    cities.push(...data);
  });

const searchBox = document.querySelector(".search");
searchBox.addEventListener("keyup", searchLocations);

const suggestionResults = document.querySelector(".suggestions");

function searchLocations(e) {
  const searchValue = e.target.value.trim(); // trims the spaces at the string starting or ending
  if (searchValue) {
    const result = getCitiesList(searchValue);
    const formatter = Intl.NumberFormat("en", { notation: "compact" });

    const output = result
      .map((res) => {
        const highlightRegex = new RegExp(searchValue, "gi");

        const city = res.city.replace(
          highlightRegex,
          `<span class="highlight">${searchValue}</span>`
        );
        const state = res.state.replace(
          highlightRegex,
          `<span class="highlight">${searchValue}</span>`
        );
        return `
    <li>
    <span> ${city}, ${state} </span>
    <span class="population">${formatter.format(res.population)}</span>
    </li>
    `;
      })
      .join("");

    suggestionResults.innerHTML = output;
  } else {
    const defaultTemplate = `<li>Filter for a city</li>
    <li>or a state</li>`;
    suggestionResults.innerHTML = defaultTemplate;
  }
}

function getCitiesList(value) {
  return cities.filter((name) => {
    const regex = new RegExp(value.toLowerCase(), "gi");
    return name.state.match(regex) || name.city.match(regex);
  });
}
