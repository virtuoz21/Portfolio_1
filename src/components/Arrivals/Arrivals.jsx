import Card from "../Card/Card";
import "./arrivals.css";
import card_1 from "./../../img/categories/cat-01.jpg";
import card_2 from "./../../img/categories/cat-02.jpg";
import card_3 from "./../../img/categories/cat-03.jpg";

function Arrivals() {
  return (
    <div className="arrivals">
      <div className="container_arrivals">
        <div className="arrivals_header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals_cards">
          <Card title="Hoodies & Sweetshorts" img={card_1} />
          <Card title="Coats & Parkas" img={card_2} />
          <Card title="Tees & T-shirts" img={card_3} />
        </div>
      </div>
    </div>
  );
}

export default Arrivals;
