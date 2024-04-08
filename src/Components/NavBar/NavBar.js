import React from "react";
import classes from "./NavBar.module.css";
import Togle from "../Togle/Togle";
import { Link, Element } from "react-scroll";
import MenuLine from "../../img/menu-line.png";
import { useEffect, useState } from "react";
import Layout from "../Layout";
const NavBar = (props) => {
  const onClickHandler = () => {
    props.togleClick();
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 480px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);
  return (
    <Element name="NavBar">
      <div className={classes.n_wrapper} id="NavBar">
        <div className={classes.n_left}>
          <div
            onClick={onClickHandler}
            className={isMobile ? classes.mobile_nav : classes.desktop_nav}
          >
            <img style={{ background: "white" }} src={MenuLine} alt=""></img>
          </div>
          <div className={classes.n_name}>Makite</div>
          <span>
            <Togle />
          </span>
        </div>
        <div className={classes.n_right}>
          <div className={classes.n_list}>
            <ul>
              <li>
                <Link spy={true} smooth={true} to="NavBar">
                  Home
                </Link>
              </li>
              <li>
                <Link spy={true} smooth={true} to="Services">
                  Skills
                </Link>
              </li>
              <li>
                <Link spy={true} smooth={true} to="Experience">
                  Experience
                </Link>
              </li>
              <li>
                <Link spy={true} smooth={true} to="Portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <Link spy={true} smooth={true} to="Contact">
            <button className={`button ${classes.n_button}`}>Contact</button>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default NavBar;
