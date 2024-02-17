import React from "react";
import classes from "./BackDrop.module.css";
const BackDrop = (props) => {
  const handleClick = () => {
    props.togleClick();
  };
  return (
    <div
      onClick={handleClick}
      className={
        props.sidebar
          ? `${classes.backdrop} ${classes.backdrop_open}`
          : classes.backdrop
      }
    ></div>
  );
};

export default BackDrop;
