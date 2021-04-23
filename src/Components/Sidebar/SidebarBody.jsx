import { useSelector, CommaNumber } from "Imports";

const match = (stra, strb) => {
  return stra.toLowerCase().includes(strb.toLowerCase());
};

export const SidebarBody = () => {
  const { searchKey, countries } = useSelector((state) => state.Reducer);
  return (
    <div className="sidebar-body">
      {countries?.map((country, index) => {
        return !searchKey.length ? (
          <Tile
            key={index}
            Country={country.country}
            NewConfirmed={country.todayCases}
            TotalConfirmed={country.cases}
            NewDeaths={country.todayDeaths}
            TotalDeaths={country.deaths}
            NewRecovered={country.todayRecovered}
            TotalRecovered={country.recovered}
            Active={country.active}
            Critical={country.critical}
          />
        ) : (
          match(country.country, searchKey) && (
            <Tile
              key={index}
              Country={country.country}
              NewConfirmed={country.todayCases}
              TotalConfirmed={country.cases}
              NewDeaths={country.todayDeaths}
              TotalDeaths={country.deaths}
              NewRecovered={country.todayRecovered}
              TotalRecovered={country.recovered}
              Active={country.active}
              Critical={country.critical}
            />
          )
        );
      })}
    </div>
  );
};

const Tile = ({
  Country,
  NewConfirmed,
  TotalConfirmed,
  NewDeaths,
  TotalDeaths,
  NewRecovered,
  TotalRecovered,
  Active,
  Critical,
}) => (
  <div className="sidebar-body-country">
    <h3>{Country}</h3>
    <div>
      <h4 className="confirmed">{CommaNumber(TotalConfirmed)}</h4>
      <div className="bottom">
        <h5>{CommaNumber(NewConfirmed)}</h5>
        <i className="arrow gg-arrow-long-up" />
      </div>
    </div>
    <div>
      <h4 className="recovered">{CommaNumber(TotalRecovered)}</h4>
      <div className="bottom">
        <h5>{CommaNumber(NewRecovered)}</h5>
        <i className="arrow gg-arrow-long-up" />
      </div>
    </div>
    <div>
      <h4 className="deaths">{CommaNumber(TotalDeaths)}</h4>
      <div className="bottom">
        <h5>{CommaNumber(NewDeaths)}</h5>
        <i className="arrow gg-arrow-long-up" />
      </div>
    </div>
    <div>
      <h4 className="active">{CommaNumber(Active)}</h4>
    </div>
    <div>
      <h4 className="critical">{CommaNumber(Critical)}</h4>
    </div>
  </div>
);
