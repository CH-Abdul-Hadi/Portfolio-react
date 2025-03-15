import React, { useEffect, useRef } from "react";
import style from "./Hero.module.css";
import profile from "../../assets/Profile_img.webp";
import Button from "../Button/Button";
import styleTextColor from "../Contact/Contact.module.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const paraRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      text: "Front-End-Developer",
      duration: 6,
      ease: "none",
      delay: 0.5,
    });
  }, []);

  return (
    <div className={style.hero}>
      <img ref={imgRef} src={profile} alt="" className={style.profileImg} />
      <h1>
        I'm <span ref={textRef} className={styleTextColor.contactGet}></span>
        based in Pakistan{" "}
      </h1>
      <p ref={paraRef}>
        I have worked with Professionals and currently doing MERN stack from
        Saylani Mass IT Training Center Peshawar
      </p>
      <div ref={btnsRef} className={style.herobtns}>
        <a href="#contact">
          <Button btn="Contact Me" />
        </a>
        <Button btn="My Resume" />
      </div>
    </div>
  );
}

export default Hero;
