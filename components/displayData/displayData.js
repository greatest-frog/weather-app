const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const img = new Set([
  "Clouds",
  "Drizzle",
  "Rain",
  "Snow",
  "Sunny",
  "Thunderstorm",
]);

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const displayData = (data) => {
  const day1 = data.list[0];

  const body = document.querySelector("body");
  body.style.backgroundImage = `url('./resources/img/${
    img.has(day1.weather.name) ? day1.weather.name : "Atmosphere"
  }.png')`;

  const weather = document.querySelector("h1");
  weather.textContent = capitalize(day1.weather.description);

  const city = document.querySelector("h2");
  city.textContent = data.name;

  const mainTemp = document.querySelector(".main_temp");
  mainTemp.textContent = day1.temp;
  mainTemp.innerHTML += "&deg;C";

  const feelsLikeTemp = document.querySelector(".secondary_temp_data");
  feelsLikeTemp.textContent = day1.feelsLike;
  feelsLikeTemp.innerHTML += "&deg;C";

  const windSpeed = document.querySelector(".secondary_wind_data");
  windSpeed.textContent = day1.windSpeed + "km/h";

  const humidity = document.querySelector(".secondary_humidity_data");
  humidity.textContent = day1.humidity + "%";

  for (let i = 1; i <= 4; i++) {
    const day = data.list[i];
    const dayDiv = document.querySelector(".week-info_day__" + i);
    const label = dayDiv.querySelector(".week-info_day_label");
    const weather = dayDiv.querySelector(".week-info_day_weather");
    const temperature = dayDiv.querySelector(".week-info_day_temperature");
    const icon = dayDiv.querySelector(".weather-icon");

    label.textContent = weekday[day.date.getDay()];
    weather.textContent = capitalize(day.weather.description);
    temperature.textContent = day.temp;
    temperature.innerHTML += "&deg;C";
    icon.src = `http://openweathermap.org/img/wn/${day.weather.icon}@2x.png`;
  }
};
