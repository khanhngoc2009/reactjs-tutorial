import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AuthRoute,
  AUTH_ROUTE,
  PrivateRoute,
  PRIVATE_ROUTE,
} from "./DefineRoute";

const NavigateRoute = () => {
  return (
    <Router>
      <Routes>
        {PRIVATE_ROUTE.map((e) => {
          return (
            <Route
              path={e.route}
              element={<PrivateRoute>{e.screen}</PrivateRoute>}
            />
          );
        })}
        {AUTH_ROUTE.map((e) => {
          return (
            <Route path={e.route} element={<AuthRoute>{e.screen}</AuthRoute>} />
          );
        })}
      </Routes>
    </Router>
  );
};
export default NavigateRoute;
