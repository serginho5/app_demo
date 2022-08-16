import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/index";
import Calculadora from "../pages/Calculadora/index";

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculadora" element={<Calculadora />} />
    </Routes>
  );
};

export default MainRoutes;
