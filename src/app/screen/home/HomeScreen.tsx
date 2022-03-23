import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import EnhancedTable from "./layout/ListData";
import { incrementAsyncHome } from "./slice/HomeSlice";
const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.home);
  useEffect(() => {
    getData();
  }, []);
  console.log({ data: data.data });

  const getData = async () => {
    try {
      await dispatch(incrementAsyncHome());
    } catch (e) {}
  };
  return (
    <div>
      {data.data && data.data.length > 0 && (
        <EnhancedTable data={data.data || []} />
      )}
    </div>
  );
};
export default HomeScreen;
