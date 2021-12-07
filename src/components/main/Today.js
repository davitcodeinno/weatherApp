import { Avatar, CardContent, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../../redux/locationSearch/locationSearchSlice";
import {
  getWeatherData,
  selectWeatherForecastData,
} from "../../redux/weather/weatherSlice";
import WeatherCard from "../shared/WeatherCard";

const Today = () => {
  const searchValue = useSelector(selectSearchValue);
  const { forecastday = [] } = useSelector(selectWeatherForecastData) || {};
  const hours = useMemo(
    () =>
      (
        forecastday.find(
          (d) => new Date(d.date).getDate() === new Date().getDate()
        ) || {}
      ).hour || [],
    [forecastday]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchValue?.name) {
      dispatch(getWeatherData(searchValue));
    }
  }, [searchValue, dispatch]);

  return (
    <WeatherCard maxWidth={920}>
      <CardContent>
        <Grid container spacing={{ xs: 1 }}>
          {hours.map((h) => {
            const { condition: { text, icon } = {}, time, temp_c } = h;
            return (
              <Grid item xs={2} sm={1} key={time}>
                <Paper sx={{ pl: 1, pt: 1, height: "calc(100% - 8px)" }}>
                  <Typography variant="body1">
                    {time.split(" ")?.[1]}
                  </Typography>
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    variant="square"
                    src={`https:${icon}`}
                  />
                  <Typography variant="body2">{text}</Typography>
                  <Typography variant="body2">{temp_c}℃</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </WeatherCard>
  );
};

export default Today;
