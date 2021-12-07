import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const LabelAndValue = ({
  label,
  value,
  additionalValue,
  valueProps = {},
  labelProps = {},
}) => {
  return (
    <Box>
      <Typography color="text.secondary" variant="body2" {...labelProps}>
        {label}
      </Typography>
      <Typography variant="h5" component="div" {...valueProps}>
        {value}
        {!!additionalValue && additionalValue}
      </Typography>
    </Box>
  );
};

export default LabelAndValue;
