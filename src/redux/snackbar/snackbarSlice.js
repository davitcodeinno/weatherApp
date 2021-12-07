import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { searchLocation } from "../locationSearch/locationSearchSlice";
import { getWeatherData } from "../weather/weatherSlice";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: initialState.snackbar,
  reducers: {
    setSnackbarData: (
      state,
      { payload: { message = "", severity = "", open = false } }
    ) => {
      state.message = message;
      state.severity = severity;
      state.open = open;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.rejected, (state) => {
        state.message = "Something went wrong";
        state.severity = "error";
        state.open = true;
      })
      .addCase(searchLocation.fulfilled, (state, action) => {
        if (!action.payload.length) {
          state.message = "Oops, nothing to show";
          state.severity = "info";
          state.open = true;
        }
      });
  },
});

export const { setSnackbarData } = snackbarSlice.actions;

export const selectSnackbarData = (state) => state.snackbar;

export default snackbarSlice.reducer;
