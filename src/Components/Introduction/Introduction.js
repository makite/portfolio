import React, { useContext, useState, useEffect } from "react";
import classes from "./Introduction.module.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkden from "../../img/linkedin.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Boy from "../../img/boy2.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Crown from "../../img/crown.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
const Introduction = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const tranisition = { duration: 2, type: "spring" };
  const [letterClass, setLetterClass] = useState("text-animate");
  const intro = "Iam ".split("");

  const nameArray = "Makite Desta".split("");
  const jobArray = "Fullstack Developer".split("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="main-app">
      <div className={classes.introduction}>
        <div className={classes.i_left}>
          <div className={classes.i_name}>
            <span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={intro}
                idx={15}
              />
            </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={22}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={33}
            />
            <span></span>
            <span></span>
            <span>
              I am a Versatile Full-Stack Developer with a passion for building
              innovative and engaging web and mobile applications.
            </span>
          </div>
          <Link spy={true} smooth={true} to="Contact">
            <button className={`button ${classes.i_button}`}>Contact Me</button>
          </Link>
          <div className={classes.i_icons}>
            <a href="https://github.com/makite">
              {" "}
              <img src={Github} alt=""></img>
            </a>
            <a href="https://www.instagram.com/makimanmtu/">
              <img src={Instagram} alt=""></img>
            </a>
            <a href="https://www.linkedin.com/in/makite-desta-b0ab8b19b/">
              <img src={Linkden} alt=""></img>
            </a>
            <a href="https://www.facebook.com/maki.man.106">
              <Facebook color="var(--yellow)" size={"5rem"} />
            </a>
          </div>
        </div>
        <div className={classes.i_right}>
          {/* <img src={Vector1} alt=""></img> */}
          {/* <img src={Vector2} alt=""></img> */}
          <img src={Boy} alt=""></img>

          <motion.div
            initial={{ left: "-6rem" }}
            whileInView={{ left: "60%" }}
            tranisition={tranisition}
          >
            <FloatingDiv image={Crown} text1="Fullstack " text2="Developer" />
          </motion.div>

          {/* div blur */}
          <div
            className={classes.blur}
            style={
              darkMode
                ? { background: "black" }
                : { background: "rgba(238 210 235)" }
            }
          ></div>
          <div
            className={classes.blur}
            style={
              darkMode
                ? { background: "black" }
                : {
                    background: "#c1f5ff",
                    top: "17rem",
                    width: "21rem",
                    left: "-9rem",
                    height: "11rem",
                  }
            }
          ></div>
        </div>
        <Loader type="pacman" />
      </div>
    </div>
  );
};

export default Introduction;
