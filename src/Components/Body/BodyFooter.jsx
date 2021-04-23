import { useSelector, MapContainer, TileLayer, showDataOnMap } from "Imports";

const leafURL =
  "https://api.mapbox.com/styles/v1/nicknyr/cje7mtk2y6gf92snsydobiahf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmlja255ciIsImEiOiJjajduNGptZWQxZml2MndvNjk4eGtwbDRkIn0.L0aWwfHlFJVGa-WOj7EHaA";

export const BodyFooter = () => {
  const { countries, selectedCoords } = useSelector((state) => state.Reducer);
  return (
    <MapContainer
      attributionControl={false}
      className="map-container"
      center={[selectedCoords?.lat, selectedCoords?.long]}
      zoom={3}
      scrollWheelZoom={false}
    >
      <TileLayer url={leafURL} />
      {showDataOnMap(countries, "cases")}
    </MapContainer>
  );
};
