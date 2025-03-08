import React from "react";
import style from "./Hero.module.css";
import profile from "../../assets/Profile_img.jpg";
import Button from "../Button/Button";


function Hero() {
  return (
    <>
    <div className={style.hero}>
      <img src={profile} alt="" className={style.profileImg}  />
      <h1>I'm Front-End-Developer based in Pakistan </h1>
      <p>
        I have word with Professionals and currently doing MERN stack from
        Saylani Mass IT Training Center Peshawar
      </p>
      <div className={style.herobtns} >
      <Button btn='Connect Me' />
      <Button btn="My Resume"  />
      {/* <Button btn='My Resume' btnstyle={{backgroundColor:"black"}} /> */}
      </div>
      </div>
    </>
  );
}

export default Hero;
