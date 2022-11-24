export const getOnlyNeedData = (point) => {
  const data = {
    date: new Date(point.dt_txt),
    temp: point.main.temp,
    windSpeed: point.wind.speed,
    humidity: point.main.humidity,
    feelsLike: point.main.feels_like,
    weather: {
      name: point.weather[0].main === "Clear" ? "Sunny" : point.weather[0].main,
      description: point.weather[0].description,
      icon: point.weather[0].icon,
    },
  };
  return data;
};
