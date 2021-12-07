import React, { useCallback, useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import {
  searchLocation,
  selectIsWeatherDataLoading,
  selectData,
} from "../../redux/locationSearch/locationSearchSlice";
import debounce from "lodash/debounce";
import {
  selectSearchText,
  selectSearchValue,
  setSearchText,
  setSearchValue,
} from "../../redux/locationSearch/locationSearchSlice";

const SearchWrapper = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 1),
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: 30,
  },
}));

const StyledCircularProgress = styled(CircularProgress)(() => ({
  position: "absolute",
  right: 30,
  top: 20,
}));

export default function Search() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  const loading = useSelector(selectIsWeatherDataLoading);
  const options = useSelector(selectData);
  const searchText = useSelector(selectSearchText);
  const value = useSelector(selectSearchValue);

  // eslint-disable-next-line
  const updateDebouncedSearch = useCallback(
    debounce(setDebouncedSearchValue, 300),
    [setDebouncedSearchValue]
  );

  useEffect(() => {
    updateDebouncedSearch(searchText);
  }, [searchText, updateDebouncedSearch]);

  useEffect(() => {
    if (debouncedSearchValue) {
      dispatch(searchLocation(debouncedSearchValue));
    }
  }, [debouncedSearchValue, dispatch]);

  const onInputChange = (e) => {
    if (value) {
      dispatch(setSearchValue(null));
    }
    dispatch(setSearchText(e.target.value));
  };

  const onValueChange = (e, o) => {
    dispatch(setSearchValue(o));
  };

  return (
    <Autocomplete
      value={value}
      onChange={onValueChange}
      disableClearable
      freeSolo
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      filterOptions={(o, s) => o}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => {
        const { InputLabelProps, InputProps, ...rest } = params;
        return (
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              {...params.InputProps}
              {...rest}
              placeholder="Search"
              value={searchText}
              onChange={onInputChange}
            />
            {loading ? (
              <StyledCircularProgress color="inherit" size={20} />
            ) : null}
          </SearchWrapper>
        );
      }}
    />
  );
}
