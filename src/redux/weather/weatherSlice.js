import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherApi from "../../api/weather";
import { initialState } from "../initialState";

export const getWeatherData = createAsyncThunk(
  "weather/getWeatherData",
  async (searchValue) => {
    const response = await weatherApi.getWeatherData(searchValue.name);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState.weather,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { incrementByAmount } = weatherSlice.actions;

export const selectWeatherData = (state) => state.weather.data;
export const selectWeatherCurrentData = (state) => state.weather.data.current;
export const selectWeatherForecastData = (state) => state.weather.data.forecast;
export const selectWeatherLocationData = (state) => state.weather.data.location;

export default weatherSlice.reducer;
