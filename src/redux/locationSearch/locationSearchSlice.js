import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import locationSearchApi from "../../api/locationSearch";
import { initialState } from "../initialState";

export const searchLocation = createAsyncThunk(
  "locationSearch/searchLocation",
  async (searchValue) => {
    const response = await locationSearchApi.searchLocation(searchValue);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const locationSearchSlice = createSlice({
  name: "locationSearch",
  initialState: initialState.locationSearch,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchLocation.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const { setSearchText, setSearchValue } = locationSearchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectData = (state) => state.locationSearch.data;
export const selectIsWeatherDataLoading = (state) =>
  state.locationSearch.loading;
export const selectSearchText = (state) => state.locationSearch.searchText;
export const selectSearchValue = (state) => state.locationSearch.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default locationSearchSlice.reducer;
