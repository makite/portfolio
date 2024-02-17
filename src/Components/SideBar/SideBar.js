import React from "react";
import classes from "./SideBar.module.css";
import { Link } from "react-scroll";
const SideBar = (props) => {
  const handleClick = () => {
    props.togleClick();
  };
  const sidebarItem = [
    { DisplayItem: "Home", LinkTo: "NavBar" },
    { DisplayItem: "Services", LinkTo: "Services" },
    { DisplayItem: "Experience", LinkTo: "Experience" },
    { DisplayItem: "Portfolio", LinkTo: "Portfolio" },
    { DisplayItem: "Testimonial", LinkTo: "Testimonial" },
  ];
  return (
    <div
      onClick={handleClick}
      className={
        props.sidebar
          ? `${classes.sidebar} ${classes.sidebar_open}`
          : classes.sidebar
      }
    >
      <ul>
        {sidebarItem.map((items) => (
          <li key={items.LinkTo}>
            <Link
              spy={true}
              smooth={true}
              to={items.LinkTo}
              onClick={handleClick}
            >
              {items.DisplayItem}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
