import React, { useRef, useState, useContext } from "react";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ks6di19",
        "template_wx7dwko",
        form.current,
        "jAyYtX2Y1Irf0I169"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={classes.contact_form} id="Contact">
      <div className={classes.c_left}>
        <div className={classes.awesome}>
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            Simply You Can
          </span>
          <span>Contact Me throug</span>
          <br></br>
          <div
            className={`blur ${classes.c_blur1}`}
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className={classes.c_right}>
        <form ref={form} onSubmit={sendEmail}>
          <input
            required={true}
            type="text"
            name="from_name"
            placeholder="enter your name"
            className={classes.user}
          ></input>
          <input
            type="email"
            required={true}
            name="to_name"
            placeholder="enter your email address"
            className={classes.user}
          ></input>
          <textarea
            cols={6}
            rows={4}
            name="message"
            placeholder="put your message here"
            className={classes.user}
          ></textarea>
          <input type="submit" value={"send"} className="button"></input>
          {done && <span>thanks for contacting me!</span>}
          <div
            className={`blur ${classes.c_blur2}`}
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
