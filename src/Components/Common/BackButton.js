import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import TopArrow from "@iconscout/react-unicons/icons/uil-arrow-circle-up";
import classes from "./BackButton.module.css";
const BackButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <Link to="NavBar" spy={true} smooth={true}>
      <div className={classes.back}>{isVisible && <TopArrow />}</div>
    </Link>
  );
};

export default BackButton;
