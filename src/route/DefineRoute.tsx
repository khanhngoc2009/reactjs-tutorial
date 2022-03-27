import { Navigate } from "react-router-dom";
import LoginScreen from "../app/auth/LoginScreen";
import HomeScreen from "../app/screen/home/HomeScreen";
import ProductScreen from "../app/screen/product/ProductScreen";
import { getToken } from "../app/service/StorageService";

export const AUTH_ROUTE = [
  {
    route: "/login",
    screen: <LoginScreen />,
  },
];

export const PRIVATE_ROUTE = [
  {
    route: "/",
    screen: <HomeScreen />,
  },
  {
    route: "/product",
    screen: <ProductScreen />,
  },
];

export function PrivateRoute(props: { children: any }) {
  const { children } = props;
  let token = getToken();
  return token ? children : <Navigate to="/login" />;
}

export function AuthRoute(childrent: any) {
  let token = getToken();
  return !token ? childrent : <Navigate replace to="/" />;
}
