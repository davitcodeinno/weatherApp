import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherCurrentData } from "../../redux/weather/weatherSlice";
import CardContent from "@mui/material/CardContent";
import WeatherCard from "../shared/WeatherCard";
import Avatar from "@mui/material/Avatar";
import LabelAndValue from "../shared/LabelAndValue";
import Grid from "@mui/material/Grid";
import { WEATHER_DATA_OBJECTS } from "../../constants/app";

const Now = () => {
  const weatherData = useSelector(selectWeatherCurrentData);
  const { condition: { text, icon } = {} } = weatherData;

  return (
    <WeatherCard>
      <CardContent>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <>
            <Grid item xs={2} sm={4} md={4}>
              <LabelAndValue
                label={text}
                value={
                  <Avatar
                    sx={{ width: 64, height: 64 }}
                    variant="square"
                    src={`https:${icon}`}
                  />
                }
              />
            </Grid>
            {WEATHER_DATA_OBJECTS.map(
              ({ key, label, additionalValue, valueRenderer }) => (
                <Grid item xs={2} sm={4} md={4} key={key}>
                  <LabelAndValue
                    label={label}
                    additionalValue={additionalValue}
                    value={
                      valueRenderer
                        ? valueRenderer(weatherData[key])
                        : weatherData[key]
                    }
                  />
                </Grid>
              )
            )}
          </>
        </Grid>
      </CardContent>
    </WeatherCard>
  );
};

export default Now;
