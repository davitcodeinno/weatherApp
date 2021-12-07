import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import SharedSnackbar from "./components/shared/Snackbar";
import { styled } from "@mui/material/styles";

const AppWrapper = styled("div")(({ theme }) => ({
  height: "100vh",
}));

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <SharedSnackbar />
    </AppWrapper>
  );
}

export default App;
