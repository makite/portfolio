import React from "react";
import classes from "./Footer.module.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src={Wave} alt="" style={{ width: "100%" }}></img>
      <div className={classes.f_content}>
        <span>makimanmtu@gmail.com</span>
        <div className={classes.f_icons}>
          <a href="https://www.instagram.com/makimanmtu/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/maki.man.106">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/makite">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
