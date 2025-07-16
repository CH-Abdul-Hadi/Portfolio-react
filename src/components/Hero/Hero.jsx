import React, { useEffect, useRef } from "react";
import style from "./Hero.module.css";
import profile from "../../assets/Profile_img.webp";
import Button from "../Button/Button";
import styleTextColor from "../Contact/Contact.module.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import resume from "../../assets/newResume.pdf";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const paraRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "power2.out",
    });

    gsap.from(textRef.current, {
      text: "",
      duration: 3,
      ease: "none",
      delay: 0.5,
    });

    gsap.from(paraRef.current, {
      opacity: 0,
      y: 20,
      duration: 2,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from(btnsRef.current, {
      opacity: 0,
      y: 20,
      duration: 2,
      delay: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section id="home">
      <div className={style.hero}>
        <img
          ref={imgRef}
          loading="lazy"
          src={profile}
          alt=""
          className={style.profileImg}
        />
        <h1>
          I'm{" "}
          <span
            ref={textRef}
            className={`${styleTextColor.contactGet} ${style.herotext}`}
          >
            Front-End-Developer{" "}
          </span>{" "}
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
          <a href={resume}>
            <Button btn="My Resume" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
