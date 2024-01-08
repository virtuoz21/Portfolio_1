import vouchersImg from "./../../img/images/vouchers-img.png";
import appleImg from "./../../img/icons/app-store.png";
import googleImg from "./../../img/icons/google-play.png";
import "./vouchers.css";

function Vouchers() {
  return (
    <div className="vouchers">
      <div className="vouchers_content">
        <div className="vouchers_title">
          <h2>DOWNLOAD APP & GET THE VOUCHER!</h2>
        </div>
        <div className="vouchers_text">
          <p>
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </p>
        </div>
        <div className="vouchers_socials">
          <a href="#!">
            <img src={appleImg} alt="AppStore" />
          </a>
          <a href="#!">
            <img src={googleImg} alt="GooglePlay" />
          </a>
        </div>
      </div>
      <div className="vouchers_img">
        <img src={vouchersImg} alt="Vouchers" />
      </div>
    </div>
  );
}

export default Vouchers;
