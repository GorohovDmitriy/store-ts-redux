import React, { FC, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import MacPage from "./pages/MacPage";
import IphonePage from "./pages/IphonePage";
import AirPodsPage from "./pages/AirPodsPage";
import NotFound from "./pages/NotFound";

import { fetchProduct } from "./redux/actions/productAction";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
