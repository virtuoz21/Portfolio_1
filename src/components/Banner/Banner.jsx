import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Element } from "react-scroll";
import debounce from "lodash/debounce";
import { useInView } from "react-intersection-observer";
import "./banner.css";
import bannerImg from "./../../img/images/promo-img.jpg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_img">
        <img src={bannerImg} alt="Banner" />
      </div>
      <div className="banner_title">
        <div className="banner_container_title">
          <div className="highlight_banner">
            <span className="highlight_2">
              <span>PAYDAY</span>
            </span>
          </div>
          SALE NOW
          <div className="banner_desc">
            <p className="text_shadow">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <h3>1 June - 10 June 2021</h3>
            <span>*Terms & Conditions apply</span>
          </div>
          <div className="banner_btn_wrapper">
            <a href="#!" className="banner_btn">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
