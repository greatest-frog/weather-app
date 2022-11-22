import { getForecastData } from "../getForecastData/getForecastData";
import { getOnlyNeedData } from "../getOnlyNeedData/getOnlyNeedData";

export const Weather = async (city) => {
  const data = await getForecastData(city);
  const weather = {
    name: data.city.name,
    list: data.list.map((point) => getOnlyNeedData(point)),
  };
  return weather;
};
