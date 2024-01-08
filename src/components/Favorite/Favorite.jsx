import Card from "../Card/Card";
import youngImg from "./../../img/images/promo-01.jpg";
import youngImg2 from "./../../img/images/promo-02.jpg";

function Favorite() {
  return (
    <div className="arrivals">
      <div className="container_arrivals">
        <div className="arrivals_header">
          <h2 className="title-2">Young`s Favorite</h2>
        </div>
        <div className="arrivals_cards">
          <Card title="Trending on instagram" img={youngImg} />
          <Card title="All under 40$" img={youngImg2} />
        </div>
      </div>
    </div>
  );
}

export default Favorite;
