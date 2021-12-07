import { Avatar, CardContent, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherForecastData } from "../../redux/weather/weatherSlice";
import WeatherCard from "../shared/WeatherCard";
import m from "moment";
import LabelAndValue from "../shared/LabelAndValue";
import { styled } from "@mui/material/styles";

const FlexContainer = styled("div")(() => ({
  pointerEvents: "none",
  display: "flex",
  justifyContent: "center",
}));

const FlexItem = styled("div")(({ flex }) => ({
  flex,
}));

const Forecast = () => {
  const { forecastday = [] } = useSelector(selectWeatherForecastData);

  return (
    <WeatherCard maxWidth={1024}>
      <CardContent>
        <Grid container spacing={{ xs: 2 }}>
          {forecastday.map((d) => {
            const {
              day: {
                condition: { text, icon } = {},
                maxtemp_c,
                mintemp_c,
                maxwind_kph,
              } = {},
              date,
            } = d;
            return (
              <Grid item xs={12} sm={12} md={4} key={date}>
                <Paper
                  sx={{
                    pl: 1,
                    pt: 1,
                    height: "calc(100% - 8px)",
                    minWidth: 300,
                  }}
                >
                  <Typography variant="h4" component="div" align="center">
                    {m(date).format("dddd")}
                  </Typography>
                  <FlexContainer>
                    <FlexItem flex={3}>
                      <Typography variant="body1">{text}</Typography>
                      <Avatar
                        sx={{ width: 64, height: 64 }}
                        variant="square"
                        src={`https:${icon}`}
                      />
                    </FlexItem>
                    <FlexItem flex={5}>
                      <LabelAndValue
                        label="Temperature ℃ (min/max)"
                        value={`${maxtemp_c} / ${mintemp_c}`}
                      />
                      <LabelAndValue
                        label="Max wind (k/h)"
                        value={maxwind_kph}
                      />
                    </FlexItem>
                  </FlexContainer>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </WeatherCard>
  );
};

export default Forecast;
