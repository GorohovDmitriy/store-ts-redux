import React, { FC } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import MacPage from "./pages/MacPage";
import IphonePage from "./pages/IphonePage";
import AirPodsPage from "./pages/AirPodsPage";
import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/app/:id" element={<ProductPage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/phone" element={<IphonePage />} />
          <Route path="/pods" element={<AirPodsPage />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
