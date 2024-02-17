import React, { useContext } from "react";
import Card from "../Card/Card";
import HeartEmoji from "../../img/design.png";
import Glasses from "../../img/stack.png";
import classes from "./Services.module.css";
import Resume from "./Makite.pdf";
import { themeContext } from "../../Context";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={classes.services} id="Services">
      {/* left side */}
      <div className={classes.awesome}>
        {/* dark mode */}
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          My Awesome
        </span>
        <span>services</span>
        <span>
          Solution-Oriented Developer with a strong focus on user experience and
          problem-solving. Effectively identifies and resolves complex technical
          challenges, ensuring the seamless operation and user satisfaction of
          applications.
        </span>
        <a href={Resume} download>
          <button className={`button ${classes.s_button}`}>Download CV</button>
        </a>
        <div
          className={`blur ${classes.s_blur1}`}
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      {/* right */}
      <div className={classes.cards}>
        {/* first card */}

        <Card
          image={HeartEmoji}
          heading={"Design"}
          detail={"Figma, Photoshop, Adobe Illustrator"}
        />
        {/* second card*/}

        <Card
          image={Glasses}
          heading={"Developer"}
          detail={
            "Html, Css, JavaScript, React, Nodejs, Express,Nextjs,ASP.Net,Flutter"
          }
          color="rgba(252, 166, 31, 0.45)"
        />

        <div
          className={`blur ${classes.s_blur2}`}
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
