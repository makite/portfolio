import React, { useContext } from "react";
import classes from "./Experience.module.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={classes.experience}
      id="Experience"
      style={darkMode ? { color: "black" } : { color: "" }}
    >
      <motion.div
        initial={{ left: "10%" }}
        whileInView={{ left: "0%" }}
        transition={{ duration: 2, type: "spring" }}
        className={classes.achievement}
      >
        <div className={classes.circle}>1+</div>
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          years{" "}
        </span>
        <span>Experience</span>
      </motion.div>
      <div className={classes.achievement}>
        <div className={classes.circle}>10+</div>
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          completed{" "}
        </span>
        <span>projects</span>
      </div>
      <div className={classes.achievement}>
        <div className={classes.circle}>2</div>
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          companies
        </span>
        <span>work</span>
      </div>
    </div>
  );
};

export default Experience;
