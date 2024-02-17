import React, { useContext } from "react";
import classes from "./Portfolio.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import login from "../../img/login.png";
import Ecommerce from "../../img/portfolio.png";
import Hoc from "../../img/chat.png";
import MusicApp from "../../img/store.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={classes.portfolio} id="Portfolio">
      {/* heading */}
      <span style={darkMode ? { color: "white" } : { color: "" }}>
        Recent Projects
      </span>
      <span>Portfolio</span>
      <Swiper
        className={classes.portfolio_slider}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
      >
        <SwiperSlide>
          <img src={login} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt=""></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
