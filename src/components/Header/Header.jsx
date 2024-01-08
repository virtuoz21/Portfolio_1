import "./header.css";
import logoImg from "./../../img/icons/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <img src={logoImg} alt="logo" />
            <span>Fashion</span>
          </div>
          <nav className="header_nav">
            <ul>
              <li>
                <a href="#">CATALOGUE</a>
              </li>
              <li>
                <a href="#">FASHION</a>
              </li>
              <li>
                <a href="#">FAVORITE</a>
              </li>
              <li>
                <a href="#">LIFESTYLE</a>
              </li>
              <li>
                <a href="#" className="sign_up">
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
