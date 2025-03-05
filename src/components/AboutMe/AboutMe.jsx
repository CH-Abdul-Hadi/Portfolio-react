import React from "react";
import style from "./AboutMe.module.css";
import profileImg from "../../assets/Profile_img.jpg";

function AboutMe() {
  return (
    <>
      <div className={style.aboutMe}>
        <h1 className={style.abouthead}>About Me</h1>
        <div className={style.aboutMain}>
          <img
            src={profileImg}
            height={250}
            className={style.aboutImg}
            alt=""
          />
          <p className={style.aboutText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            architecto perferendis dicta et aspernatur assumenda laudantium nam,
            omnis necessitatibus? Cumque unde ab explicabo ratione fugiat
            consequatur magni repellendus adipisci numquam. <br /> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nesciunt, nemo!
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
