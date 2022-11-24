import { getForecastData } from "../getForecastData/getForecastData";
import { getOnlyNeedData } from "../getOnlyNeedData/getOnlyNeedData";

export const Weather = async (city) => {
  const data = await getForecastData(city);
  const weather = {
    name: data.city.name,
    list: [
      getOnlyNeedData(data.list[0]),
      getOnlyNeedData(data.list[8]),
      getOnlyNeedData(data.list[16]),
      getOnlyNeedData(data.list[24]),
      getOnlyNeedData(data.list[32]),
    ],
  };
  return weather;
};
