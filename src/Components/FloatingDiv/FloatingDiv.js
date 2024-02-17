import React, { useContext } from "react";
import classes from "./FloatingDiv.module.css";
import { themeContext } from "../../Context";
const FloatingDiv = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={classes.floating_div}>
      <img src={props.image} alt="" style={{ transform: "scale(0.4)" }}></img>
      <span style={darkMode ? { color: "black" } : { color: "" }}>
        {props.text1} <br></br>
        {props.text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
