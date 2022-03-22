import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../app/component/navbar/NavBar";
import { DEFINE_ROUTE, ROUTE } from "../app/contant/Contant";
import HomeScreen from "../app/screen/home/HomeScreen";
import ProductScreen from "../app/screen/product/ProductScreen";
const NavigateRoute = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path={DEFINE_ROUTE[ROUTE.HOME].route}
            element={<HomeScreen />}
          />
          <Route
            path={DEFINE_ROUTE[ROUTE.PRODUCT].route}
            element={<ProductScreen />}
          />
        </Routes>
      </div>
    </Router>
  );
};
export default NavigateRoute;
