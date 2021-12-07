import { getWindDirectionText } from "../helpers/app";

export const APP_HEADER_HEIGHT = 64;
export const WEATHER_DATA_OBJECTS = [
  { key: "temp_c", label: "Temperature", additionalValue: " ℃" },
  { key: "feelslike_c", label: "Real Feel", additionalValue: " ℃" },
  { key: "pressure_mb", label: "Pressure", additionalValue: " MB" },
  { key: "humidity", label: "Humidity", additionalValue: " %" },
  { key: "wind_kph", label: "Wind speed", additionalValue: " k/h" },
  {
    key: "wind_dir",
    label: "Wind direction",
    additionalValue: "",
    valueRenderer: getWindDirectionText,
  },
  { key: "cloud", label: "Cloud", additionalValue: "" },
  { key: "vis_km", label: "Visibility", additionalValue: " km" },
];
