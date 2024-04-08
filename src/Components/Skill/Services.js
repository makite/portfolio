import React, { useContext, useState, useEffect } from "react";
import classes from "./Services.module.css";
import Resume from "./Makite.pdf";
import WordCloud from "./wordcloud";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { themeContext } from "../../Context";
const Services = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const skill = "My Awesome".split("");
  const skill1 = "Skills".split("");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="main-app">
      <div className={classes.services} id="Services">
        {/* left side */}
        <div className={classes.awesome}>
          {/* dark mode */}
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skill}
              idx={25}
            />
          </span>
          <span>
            {" "}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skill1}
              idx={35}
            />
          </span>
          <span>
            As a Solution-Oriented Developer, I prioritize user experience and
            excel at problem-solving. My expertise lies in identifying and
            resolving complex technical challenges, ensuring seamless
            application operation, and maximizing user satisfaction
          </span>
          <a href={Resume} download>
            <button className={`button ${classes.s_button}`}>Get CV</button>
          </a>
          <div
            className={`blur ${classes.s_blur1}`}
            style={
              darkMode ? { background: "black" } : { background: "#ABF1FF94" }
            }
          ></div>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
        <div
          className={`blur ${classes.s_blur2}`}
          style={
            darkMode ? { background: "black" } : { background: "var(--purple)" }
          }
        ></div>
      </div>
    </div>
  );
};

export default Services;
