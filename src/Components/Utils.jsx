import { Circle, Popup, CommaNumber } from "Imports";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 200,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 400,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 800,
  },
};

export const prettyPrintStat = (stat) =>
  stat ? `+${CommaNumber(stat)}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country, index) => (
    <Circle
      key={index}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div className="info-flag"></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {CommaNumber(country.cases)}
          </div>
          <div className="info-recovered">
            Recovered: {CommaNumber(country.recovered)}
          </div>
          <div className="info-deaths">
            Deaths: {CommaNumber(country.deaths)}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
