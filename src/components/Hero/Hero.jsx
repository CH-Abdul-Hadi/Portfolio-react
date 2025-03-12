import React from "react";
import style from "./Hero.module.css";
import profile from "../../assets/Profile_img.webp";
import Button from "../Button/Button";
import styleTextColor from '../Contact/Contact.module.css'


function Hero() {
  return (
    <>
    <div className={style.hero} >
      <img src={profile} alt="" className={style.profileImg}  />
      <h1>I'm <span className={styleTextColor.contactGet}>Front-End-Developer </span> based in Pakistan </h1>
      <p>
        I have word with Professionals and currently doing MERN stack from
        Saylani Mass IT Training Center Peshawar
      </p>
      <div className={style.herobtns} >
      <a href="#contact"><Button btn='Contact Me'  /></a>
      <Button btn="My Resume"  />
      </div>
      </div>
    </>
  );
}

export default Hero;
