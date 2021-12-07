import { configureStore } from "@reduxjs/toolkit";
import weather from "./weather/weatherSlice";
import locationSearch from "./locationSearch/locationSearchSlice";
import snackbar from "./snackbar/snackbarSlice";

const store = configureStore({
  reducer: {
    weather,
    locationSearch,
    snackbar,
  },
});

export default store;
