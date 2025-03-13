import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.webp";
import Button from "../Button/Button";

function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
      setIsMenuOpen(false);
    };

    // Set initial active link
    handleHashChange();
    
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setIsMenuOpen(false);
  };

  return (
    <nav className={style.navbar}>
      <a href="#home" className={style.logo}>
        <img src={logo} alt="Company Logo" className={style.logoImg} />
      </a>

      <div
        className={`${style.hamburger} ${isMenuOpen ? style.active : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </div>

      <ul className={`${style.navMenu} ${isMenuOpen ? style.active : ""}`}>
        <li>
          <a
            href="#home"
            onClick={() => handleLinkClick("#home")}
            className={`${style.navLink} ${
              activeLink === "#home" ? style.active : ""
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => handleLinkClick("#about")}
            className={`${style.navLink} ${
              activeLink === "#about" ? style.active : ""
            }`}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => handleLinkClick("#projects")}
            className={`${style.navLink} ${
              activeLink === "#projects" ? style.active : ""
            }`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact")}
            className={`${style.navLink} ${
              activeLink === "#contact" ? style.active : ""
            }`}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className={style.contactBtn}>
        <a href="#contact" onClick={() => handleLinkClick("#contact")}>
          <Button btn="Contact Me" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;