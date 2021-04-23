import {
  Sidebar,
  Body,
  useEffect,
  useDispatch,
  fetchGlobal,
  fetchCountries,
} from "Imports";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGlobal());
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <div className="app">
      <Body />
      <Sidebar />
    </div>
  );
};
