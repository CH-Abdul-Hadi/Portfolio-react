import React from "react";
import style from "./Footer.module.css";
import GithubIcons from "../Icons/GithubIcons";
import InstaIcons from "../Icons/InstaIcons";
import WhatsappIcons from "../Icons/WhatsappIcons";
import LinkdinIcons from "../Icons/LinkdinIcons";

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <a href="https://github.com/CH-Abdul-Hadi"   target="_blank">
          <GithubIcons />
        </a>

        {/* <a href="">
          {" "}
          <InstaIcons />{" "}
        </a> */}

        <a href="https://wa.me/+923279058035" target="_blank">
          {" "}
          <WhatsappIcons />
        </a>

        <a href="https://www.linkedin.com/in/abdul-hadi-shahid-2b7a15271" target="_blank">
          {" "}
          <LinkdinIcons />{" "}
        </a>
      </div>
    </>
  );
}

export default Footer;
