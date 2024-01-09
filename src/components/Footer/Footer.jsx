import facebookIkon from "./../../img/socials/fb.svg";
import instaIcon from "./../../img/socials/inst.svg";
import twitterIcon from "./../../img/socials/tw.svg";
import inIcon from "./../../img/socials/in.svg";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="left_footer">
          <div className="footer_title">
            <h3>FASHION</h3>
          </div>
          <div className="footer_desc">
            <p>Complete your style with awesome clothes from us.</p>
          </div>
          <div className="footer_socials">
            <a href="#!">
              <img src={facebookIkon} alt="Facebook" />
            </a>
            <a href="#!">
              <img src={instaIcon} alt="Instagram" />
            </a>
            <a href="#!">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#!">
              <img src={inIcon} alt="In" />
            </a>
          </div>
        </div>
        <div className="right_footer">
          <div className="footer_links">
            <a href="#!">
              <span>Company</span>
            </a>
            <a href="#!">About </a>
            <a href="#!"> Contact Us </a>
            <a href="#!">Support </a>
            <a href="#!">Careers</a>
          </div>
          <div className="footer_links">
            <a href="#!">
              <span>Quick Link</span>
            </a>
            <a href="#!">Share Location </a>
            <a href="#!"> Orders Tracking </a>
            <a href="#!">Size Guide </a>
            <a href="#!">FAQs</a>
          </div>
          <div className="footer_links">
            <a href="#!">
              <span>Legal</span>
            </a>
            <a href="#!">Terms & conditions </a>
            <a href="#!"> Privacy Policy </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
