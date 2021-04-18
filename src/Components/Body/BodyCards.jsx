import { useSelector, CommaNumber } from "Imports";

const Card = ({ title, total, newCases, className }) => (
  <div className="card">
    <h2>{title}</h2>
    <div>
      <h3 className={className}>{CommaNumber(total)}</h3>
      {newCases && (
        <div className="bottom">
          <h4>{CommaNumber(newCases)}</h4>
          <i class="arrow gg-arrow-long-up" />
        </div>
      )}
    </div>
  </div>
);

export const BodyCards = () => {
  const global = useSelector((state) => state.global);

  return (
    <div className="body-cards">
      <Card
        className="confirmed"
        title="Infected"
        total={global.cases}
        newCases={global.todayCases}
      />
      <Card
        className="recovered"
        title="Recovered"
        total={global.recovered}
        newCases={global.todayRecovered}
      />
      <Card
        className="deaths"
        title="Deaths"
        total={global.deaths}
        newCases={global.todayDeaths}
      />
      <Card className="active" title="Active" total={global.active} />
      <Card className="critical" title="Critical" total={global.critical} />
    </div>
  );
};
