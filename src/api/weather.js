import { WEATHER_API_KEY } from "../constants/api";
import Axios from "./main/mainApi";

const getWeatherData = async (searchValue) => {
  return Axios.get(
    `/forecast.json?q=${searchValue}&days=3&key=${WEATHER_API_KEY}`
  );
};

const weatherApi = {
  getWeatherData,
};

export default weatherApi;
