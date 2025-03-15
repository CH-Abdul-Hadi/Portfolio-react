// AboutMe.jsx
import React, { useEffect, useRef } from "react";
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
import bootstrapsicon from "../../assets/bootstrap.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Ensure animations run after DOM is fully loaded
    const ctx = gsap.context(() => {
      // Header animation (immediate)
      gsap.fromTo(
        ".abouthead",
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      // About main section
      gsap.fromTo(
        ".aboutMain",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".aboutMain",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true // Uncomment for debugging
          },
        }
      );

      // Profile image
      gsap.fromTo(
        ".aboutImg",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".aboutMain",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      );

      // Skills section header
      gsap.fromTo(
        ".skillhead",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skillimg",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      );

      // Skill cards
      gsap.fromTo(
        ".skillCard",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mySkills",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      );

      // Experience cards
      gsap.fromTo(
        ".exp > div",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".exp",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      );

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, aboutRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <>
      <div ref={aboutRef} className={style.aboutMe}>
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
            I focus on crafting seamless and user-friendly web experiences. I'm
            also diving deeper into MERN stack development at Saylani Mass IT
            Training Centre, expanding my expertise in full-stack technologies.{" "}
            <br />
            With a keen eye for design and a love for clean code, I strive to
            build websites that are both functional and visually captivating.
          </p>
        </div>
        <div className={style.skillimg}>
          <h1 className={style.skillhead}>My Skills</h1>
          <div className={style.mySkills}>
            <SkillCard className="skillCard" skill={html5} />
            <SkillCard className="skillCard" skill={css} />
            <SkillCard className="skillCard" skill={bootstrapsicon} />
            <SkillCard className="skillCard" skill={js} />
            <SkillCard className="skillCard" skill={react} />
            <SkillCard className="skillCard" skill={vite} />
            <SkillCard className="skillCard" skill={wordpress} />
          </div>
        </div>
        <div className={style.exp}>
          <Experience expTitle="Contributions" expNum="3" />
          <Experience expTitle="Projects" expNum="32" />
          <Experience expTitle="Certificates" expNum="3" />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
