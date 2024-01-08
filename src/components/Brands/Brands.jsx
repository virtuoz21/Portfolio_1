import "./brands.css";
import hm from "./../../img/brands/HM.png";
import obey from "./../../img/brands/Obey.png";
import lacoste from "./../../img/brands/Lacoste.png";
import levis from "./../../img/brands/Levis.png";
import amazon from "./../../img/brands/Amazon.png";
import shopify from "./../../img/brands/Shopify.png";

function Brands() {
  return (
    <div className="brands">
      <div className="container_brands">
        <a href="#!">
          <img src={hm} alt="brand" />
        </a>
        <a href="#!">
          <img src={obey} alt="brand" />
        </a>
        <a href="#!">
          <img src={lacoste} alt="brand" />
        </a>
        <a href="#!">
          <img src={levis} alt="brand" />
        </a>
        <a href="#!">
          <img src={amazon} alt="brand" />
        </a>
        <a href="#!">
          <img src={shopify} alt="brand" />
        </a>
      </div>
    </div>
  );
}

export default Brands;
