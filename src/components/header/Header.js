import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Search1 from "./Search";
import { APP_HEADER_HEIGHT } from "../../constants/app";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: APP_HEADER_HEIGHT,
        }}
      >
        <Toolbar>
          <Search1 />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
