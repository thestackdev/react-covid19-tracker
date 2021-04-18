import {
  Sidebar,
  Body,
  useEffect,
  useDispatch,
  updateGlobal,
  updateCountries,
  fetchGlobal,
  fetchCountries,
} from "Imports";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const func = async () => {
      dispatch(updateGlobal(await fetchGlobal()));
      dispatch(updateCountries(await fetchCountries()));
    };
    func();
  }, []);
  return (
    <div className="app">
      <Body />
      <Sidebar />
    </div>
  );
};
