import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "./TabPanel";
import { useTheme } from "@mui/material/styles";
import Now from "./Now";
import Today from "./Today";
import Forecast from "./Forecast";
import { useSelector } from "react-redux";
import {
  selectData,
  selectIsWeatherDataLoading,
  selectSearchValue,
} from "../../redux/locationSearch/locationSearchSlice";
import HomeScreen from "../homeScreen/HomeScreen";
import { APP_HEADER_HEIGHT } from "../../constants/app";

const Main = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const search = useSelector(selectSearchValue);
  const data = useSelector(selectData);
  const loading = useSelector(selectIsWeatherDataLoading);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      {!search && !loading && !data?.length ? (
        <HomeScreen />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: `calc(100vh - ${APP_HEADER_HEIGHT}px)`,
            bgcolor: "background.paper",
          }}
        >
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Now" />
            <Tab label="Today" />
            <Tab label="3 days" />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Now />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Today />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Forecast />
            </TabPanel>
          </SwipeableViews>
        </Box>
      )}
    </>
  );
};

export default Main;
