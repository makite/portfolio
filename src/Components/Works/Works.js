import React, { useContext } from "react";
import classes from "./Works.module.css";
import HRMS from "../../img/HR.png";
import Fiver from "../../img/pay.png";
import Voting from "../../img/vote.png";
import ERP from "../../img/erp.png";
import Shopify from "../../img/sh.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={classes.works}>
      {/* left side */}
      <div className={classes.awesome}>
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          Works on all these
        </span>
        <span>Projects & Systems</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>

        <button className={`button ${classes.w_button}`}>Hire Me</button>

        <div
          className={`blur ${classes.s_blur1}`}
          style={{ background: "#ABF1FF94" }}
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
  );
};

export default Works;
