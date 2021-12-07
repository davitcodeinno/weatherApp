export const initialState = {
  weather: {
    data: null,
    loading: false,
  },
  locationSearch: {
    value: null,
    searchText: "",
    data: [],
    loading: false,
  },
  snackbar: {
    severity: "success",
    message: "asd",
    open: false,
  },
};
