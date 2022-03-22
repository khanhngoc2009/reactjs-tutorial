import Product from "@material-ui/icons/Computer";
import Home from "@material-ui/icons/HomeSharp";

export const BaseUrl = "http://localhost:3001/";

export const ROUTE = {
  HOME: "HOME",
  PRODUCT: "PRODUCT",
};

export const DEFINE_ROUTE = {
  [ROUTE.HOME]: {
    name: "Home",
    route: "/",
  },
  [ROUTE.PRODUCT]: {
    name: "Product",
    route: "./product",
  },
};

export const LIST_MENU_DRAWER = [
  {
    name: ROUTE.HOME,
    route: DEFINE_ROUTE[ROUTE.HOME].route,
    icon: Home,
  },
  {
    name: ROUTE.PRODUCT,
    route: DEFINE_ROUTE[ROUTE.PRODUCT].route,
    icon: Product,
  },
];
