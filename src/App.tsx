import React, { FC } from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#231f20",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const App: FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <AppRouter />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
