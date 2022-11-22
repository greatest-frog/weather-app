import { Weather } from "../components/Weather/Weather";

const searchForm = document.querySelector(".search");

Weather("Moscow").then((weather) => {
  console.log(weather);
});

searchForm.addEventListener("submit", (e) => {
  const searchInput = searchForm.querySelector("input");
  Weather(searchInput.value)
    .then((weather) => {
      console.log(weather);
    })
    .catch((error) => console.log(error));
  e.preventDefault();
});
