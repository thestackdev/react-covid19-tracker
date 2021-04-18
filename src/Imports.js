// Styles
import "Styles/index.scss";

// Components
export { useRef, useEffect } from "react";
export { default as ReactDOM } from "react-dom";
export { App } from "Components/App";
export { Body } from "Components/Body/Body";
export { BodyHeader } from "Components/Body/BodyHeader";
export { BodyCards } from "Components/Body/BodyCards";
export { BodyFooter } from "Components/Body/BodyFooter";
export { Sidebar } from "Components/Sidebar/Sidebar";
export { SidebarHeader } from "Components/Sidebar/SidebarHeader";
export { SidebarBody } from "Components/Sidebar/SidebarBody";

// Redux
export { createStore } from "redux";
export { useSelector, useDispatch, Provider } from "react-redux";
export {
  default as Reducer,
  updateSearchKey,
  updateSelectedCoords,
  updateGlobal,
  updateCountries,
} from "Redux/covid19";

// API
export { fetchGlobal, fetchCountries } from "Redux/API";

// Utils
export { showDataOnMap } from "Components/Utils";

// Libraries
export { default as Axios } from "axios";
export { default as CommaNumber } from "comma-number";
export { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
