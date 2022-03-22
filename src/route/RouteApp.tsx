import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../app/component/navbar/NavBar";
const NavigateRoute = () => {
  return (
    <Router>
      <NavBar />
    </Router>
  );
};
export default NavigateRoute;
