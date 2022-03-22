import clsx from "clsx";
import { Route, Routes } from "react-router-dom";
import { DEFINE_ROUTE, ROUTE } from "../contant/Contant";
import HomeScreen from "../screen/home/HomeScreen";
import ProductScreen from "../screen/product/ProductScreen";
import { useNavBarStyles } from "./navbar/styles";

const MainApp = (props: { open: boolean }) => {
  const classes = useNavBarStyles();
  const { open } = props;
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentActive]: open,
      })}
    >
      <div className={classes.toolbar} />
      <Routes>
        <Route path={DEFINE_ROUTE[ROUTE.HOME].route} element={<HomeScreen />} />
        <Route path="/product" element={<ProductScreen />} />
      </Routes>
    </main>
  );
};
export default MainApp;
