import { WEATHER_API_KEY } from "../constants/api";
import Axios from "./main/mainApi";

const searchLocation = async (searchValue) => {
  return Axios.get(`/search.json?q=${searchValue}&key=${WEATHER_API_KEY}`);
};

const locationSearchApi = {
  searchLocation,
};

export default locationSearchApi;
