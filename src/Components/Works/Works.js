import React, { useContext, useEffect, useState } from "react";
import classes from "./Works.module.css";
import HRMS from "../../img/HR.png";
import Fiver from "../../img/pay.png";
import Voting from "../../img/vote.png";
import ERP from "../../img/erp.png";
import Shopify from "../../img/sh.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [letterClass, setLetterClass] = useState("text-animate");
  const work = " Works on all these".split("");
  const work1 = "Projects & Systems".split("");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="main-app">
      <div className={classes.works}>
        {/* left side */}
        <div className={classes.awesome}>
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={work}
              idx={15}
            />
          </span>
          <span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={work1}
              idx={33}
            />
          </span>
          <span>
            As a chance i have worked on the largest and complex ERP Sytems and
            Mobile Banking app
            <br />
            and i am familar with developing system from scratch and custumize
            existing Systems.
          </span>

          <button className={`button ${classes.w_button}`}>Hire Me</button>

          <div
            className={`blur ${classes.s_blur1}`}
            style={  darkMode
              ? { background: 'black' }:{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right */}
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className={classes.w_mainCircle}
        >
          <div className={classes.w_secCircle}>
            <img src={HRMS} alt=""></img>
          </div>
          <div className={classes.w_secCircle}>
            <img src={Fiver} alt=""></img>
          </div>
          <div className={classes.w_secCircle}>
            <img src={ERP} alt=""></img>
          </div>
          <div className={classes.w_secCircle}>
            <img src={Shopify} alt=""></img>
          </div>
          <div className={classes.w_secCircle}>
            <img src={Voting} alt=""></img>
          </div>
        </motion.div>
        {/* back circle */}
        <div className={`w_backCircle ${classes.blueCircle}`}></div>
        <div className={`w_backCircle ${classes.yellowCircle}`}></div>
      </div>
    </div>
  );
};

export default Works;
