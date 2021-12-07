import { Box } from "@mui/system";
import React from "react";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, justifyContent: "center", display: "flex" }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
