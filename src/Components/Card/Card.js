import React from "react";
import classes from "./Card.module.css";
const Card = (props, { color }) => {
  return (
    <div className={classes.card} style={{ borderColor: { color } }}>
      <img src={props.image} alt=""></img>
      <span>{props.heading}</span>
      <span>{props.detail}</span>
      <button className={classes.c_button}>Read more...</button>
    </div>
  );
};

export default Card;
