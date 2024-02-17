import React, { useContext } from "react";
import classes from "./Togle.module.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../Context";
const Togle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clickHandler = () => {
    theme.dispatch({ type: "togle" });
  };
  return (
    <div className={classes.togle} onClick={clickHandler}>
      <Moon />
      <Sun />
      <div
        className={classes.t_button}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Togle;
