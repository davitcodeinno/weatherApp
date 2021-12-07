import { Card } from "@mui/material";
import React from "react";

const WeatherCard = ({ children, maxWidth = 500, ...rest }) => {
  return (
    <Card raised sx={{ minWidth: 275, maxWidth }} {...rest}>
      {children}
    </Card>
  );
};

export default WeatherCard;
