import { useRef, useDispatch, updateSearchKey } from "Imports";

export const SidebarHeader = () => {
  const dispatch = useDispatch();
  const ref = useRef("");

  const handleInput = () => {
    dispatch(updateSearchKey(ref.current.value));
  };

  return (
    <div>
      <div className="sidebar-header">
        <h1>Cases Info</h1>
        <input
          type="text"
          placeholder="Search here"
          ref={ref}
          onChange={handleInput}
        />
      </div>
      <div className="sidebar-body-header">
        <h2>Country</h2>
        <h3>Infected</h3>
        <h3>Recovered</h3>
        <h3>Deaths</h3>
        <h3>Active</h3>
        <h3>Critical</h3>
      </div>
    </div>
  );
};
