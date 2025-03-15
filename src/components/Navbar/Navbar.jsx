import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.webp";
import Button from "../Button/Button";

function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle both hash changes and scroll position
  useEffect(() => {
    // Handle hash changes (e.g., clicking links)
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setActiveLink(hash);
      setIsMenuOpen(false);
    };

    // Handle scroll position
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveLink(`#${section}`);
          break;
        }
      }
    };

    // Set initial active link
    handleHashChange();

    // Add event listeners
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
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
        aria-label="Toggle navigation menu"
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
