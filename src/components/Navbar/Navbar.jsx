import React from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
function Navbar() {
  return (
    <>
      <div className={style.navbar}>
        <img src={logo} alt="" width={140} />
        <ul className={style.navMenu}>
          <li>Home</li>
          <li>About Me</li>
          {/* <li>Services</li> */}
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <Button btn="Connect Me"/>
      </div>
    </>
  );
}

export default Navbar;
