import React, { FC } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart:id" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
