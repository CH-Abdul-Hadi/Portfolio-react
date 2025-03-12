import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.webp";
import Button from "../Button/Button";

function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };

    // Set initial active link
    handleHashChange();
    
    // Add hash change listener
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className={style.navbar}>
      <a href="#home">
        <img src={logo} alt="Company Logo" width={140} />
      </a>
      <ul className={style.navMenu}>
        <li>
          <a 
            href="#home" 
            className={`${style.navLink} ${activeLink === "#home" ? style.active : ""}`}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={`${style.navLink} ${activeLink === "#about" ? style.active : ""}`}
          >
            About Me
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={`${style.navLink} ${activeLink === "#projects" ? style.active : ""}`}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={`${style.navLink} ${activeLink === "#contact" ? style.active : ""}`}
          >
            Contact
          </a>
        </li>
      </ul>
      <a href="#contact" className={style.contactLink}>
        <Button btn="Contact Me"/>
      </a>
    </nav>
  );
}

export default Navbar;