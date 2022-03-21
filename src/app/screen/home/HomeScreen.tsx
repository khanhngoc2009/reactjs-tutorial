import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { incrementAsyncHome } from "./slice/HomeSlice";
const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.home);
  useEffect(() => {
    getData();
  }, []);
  console.log({ data });

  const getData = async () => {
    try {
      await dispatch(incrementAsyncHome());
    } catch (e) {}
  };
  return <div>khanh</div>;
};
export default HomeScreen;
