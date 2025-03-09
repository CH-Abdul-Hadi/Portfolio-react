import React from "react";
import style from "./AboutMe.module.css";
import profileImg from "../../assets/Profile_img.webp";
import SkillCard from "../skillCard/SkillCard";
import html5 from "../../assets/html-5.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import vite from "../../assets/vite.svg";
import wordpress from "../../assets/wordpress.svg";
import Experience from "../experience/Experience";

function AboutMe() {
  return (
    <>
      <div className={style.aboutMe} id="about">
        <h1 className={style.abouthead}>About Me</h1>
        <div className={style.aboutMain}>
          <img
            src={profileImg}
            height={250}
            className={style.aboutImg}
            alt=""
          />
          <p className={style.aboutText}>
            I'm Abdul Hadi, a passionate Front-end Developer currently in my 6th
            semester of Computer Science at the University of Agriculture
            Peshawar. <br />
            {/* Skilled in HTML, CSS, JavaScript, Bootstrap, React, and
            WordPress, */}
             I focus on crafting seamless and user-friendly web
            experiences. I'm also diving deeper into MERN stack development at
            Saylani Mass IT Training Centre, expanding my expertise in
            full-stack technologies. <br />
            With a keen eye for design and a love for
            clean code, I strive to build websites that are both functional and
            visually captivating.
          </p>
        </div>
        <div className={style.skillimg}>
          <h1 className={style.skillhead}>My Skills</h1>
          <div className={style.mySkills}>
            <SkillCard skill={html5} />
            <SkillCard skill={css} />
            <SkillCard skill={js} />
            <SkillCard skill={react} />
            <SkillCard skill={vite} />
            <SkillCard skill={wordpress} />
          </div>
        </div>
        <div className={style.exp}>
          <Experience expTitle='Contributions' expNum='3' />
          <Experience expTitle='Projects' expNum='32' />
          <Experience expTitle='Certificates' expNum='3' />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
