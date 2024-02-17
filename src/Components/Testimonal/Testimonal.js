import React from "react";
import classes from "./Testmonal.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import amharabank from "../../img/amharabank.jpg";
import "swiper/css";
import "swiper/css/pagination";
const Testimonal = () => {
  const clients = [
    {
      img: amharabank,
      review:
        "i Have developed Shareholder management syatem for amhara bank sc ",
    },
    {
      img: amharabank,
      review:
        "i have developed amazing Human Resource management syatem for amhara bank sc ",
    },
    {
      img: amharabank,
      review:
        "i have developed awesome Payroll  management syatem for amhara bank sc ",
    },
    {
      img: amharabank,
      review: "I have developed mobile banking for amharabank sc",
    },
  ];
  return (
    <div className={classes.t_wrapper} id="Testimonial">
      <div className={classes.t_heading}>
        <span>Client Always Get </span>
        <span>Amazing Works </span>
        <span>from me</span>
        <div
          className={`blur ${classes.t_blur1}`}
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className={`blur ${classes.t_blur2}`}
          style={{ background: "skyblue" }}
        ></div>
      </div>
      <Swiper
        modules={Pagination}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={classes.testimonial}>
                <img src={item.img} alt="" />
                <span>{item.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonal;
