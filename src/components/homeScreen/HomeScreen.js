import React from "react";
import { styled } from "@mui/material/styles";
import { APP_HEADER_HEIGHT } from "../../constants/app";
import autumnImage from "../../assets/autumn.jpg";
import springImage from "../../assets/spring.jpg";
import summerImage from "../../assets/summer.jpg";
import winterImage from "../../assets/winter.jpg";
import { Card, CardHeader, CardMedia } from "@mui/material";

const HomeScreenEl = styled("div")(({ theme }) => ({
  height: `calc(100vh - ${APP_HEADER_HEIGHT}px)`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  overflow: "hidden",
}));

const FlexCont = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
}));

const HomeScreen = () => {
  return (
    <HomeScreenEl>
      <FlexCont>
        <Card raised sx={{ width: 250, mb: 4 }}>
          <CardHeader title="Get weather data" />
          <CardMedia
            component="img"
            height="256"
            image={springImage}
            alt="summer"
          />
        </Card>
        <Card raised sx={{ width: 250, mb: 4 }}>
          <CardHeader title="Search by City" />
          <CardMedia
            component="img"
            height="256"
            image={autumnImage}
            alt="summer"
          />
        </Card>
      </FlexCont>
      <FlexCont>
        <Card raised sx={{ width: 250, mb: 4 }}>
          <CardHeader title="By Zip (USA only)" />
          <CardMedia
            component="img"
            height="256"
            image={summerImage}
            alt="summer"
          />
        </Card>
        <Card raised sx={{ width: 250, mb: 4 }}>
          <CardHeader title="Search by Region" />
          <CardMedia
            component="img"
            height="256"
            image={winterImage}
            alt="summer"
          />
        </Card>
      </FlexCont>
    </HomeScreenEl>
  );
};

export default HomeScreen;
