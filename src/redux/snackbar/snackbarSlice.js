import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

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
});

export const { setSnackbarData } = snackbarSlice.actions;

export const selectSnackbarData = (state) => state.snackbar;

export default snackbarSlice.reducer;
