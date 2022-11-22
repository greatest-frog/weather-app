export const getForecastData = async function (city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&appid=76c4931477289c3dcd1e379572dd98e6`,
    { mode: "cors" }
  );
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error("404");
  }
  return data;
};
