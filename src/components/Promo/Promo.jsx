import "./promo.css";
import promoImg from "./../../img/images/header-img.jpg";

function Promo() {
  return (
    <div className="promo">
      <div className="promo_container">
        <div className="promo_content">
          <div className="promo_text">
            <div className="promo_title">
              <span className="highlight">
                <span>LET`S</span>
              </span>
              EXPLORE
              <span className="highlight highlight_yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo_desc">Innovative fashion!</div>
            <div className="promo_btn_wrapper">
              <a href="#" className="promo_btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo_img">
            <img src={promoImg} alt="promo_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
