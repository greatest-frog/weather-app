import { displayData } from "../components/displayData/displayData";
import { displayError } from "../components/displayError/displayError";
import { Weather } from "../components/Weather/Weather";

const searchForm = document.querySelector(".search");

Weather("Moscow")
  .then((weather) => {
    document.querySelector(".error")?.classList.add("disabled");
    document.querySelector(".content")?.classList.remove("disabled");
    displayData(weather, document.querySelector(".content"));
  })
  .catch((error) => displayError(error));

searchForm.addEventListener("submit", (e) => {
  const searchInput = searchForm.querySelector("input");
  Weather(searchInput.value)
    .then((weather) => {
      console.log(weather);
      document.querySelector(".error")?.classList.add("disabled");
      document.querySelector(".content")?.classList.remove("disabled");
      displayData(weather, document.querySelector(".content"));
      searchInput.value = "";
    })
    .catch((error) => displayError(error));
  e.preventDefault();
});
