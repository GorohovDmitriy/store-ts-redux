import React, { FC } from "react";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./pages/Homepage";
import { Cartpage } from "./pages/Cartpage";
import { Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/cart:id" element={<Homepage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
