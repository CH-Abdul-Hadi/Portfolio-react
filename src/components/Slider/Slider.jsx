import { useState } from "react";
import "./Slider.css";
import dashboard from "../../assets/dashboard.webp";
import myReact from "../../assets/reactfirst.webp";
import foodpanda from "../../assets/foodpanda.webp";
import clinic from "../../assets/clinic.webp";
import ecomerrs from "../../assets/ecomerrs.webp";
import netflix from "../../assets/netflix.webp";
import techpro from "../../assets/techpro.webp";
import rps from "../../assets/rps.webp";
import tictac from "../../assets/tictac.webp";
import Button2 from "../Button2/Button2";
import age from "../../assets/agecal.webp";
import calculator from "../../assets/calculator.webp";
import clock from "../../assets/clock.webp";
import password from "../../assets/password.webp";
import wordcount from "../../assets/wordcount.webp";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(7);

  const slides = [
    {
      image: techpro,
      title: "Tech Company",
      para: "A modern website for a tech company.",
      src: "https://tech-repo.vercel.app/",
    },

    {
      image: foodpanda,
      title: "FoodPanda Clone",
      para: "A food delivery web app inspired by FoodPanda.",
      src: "https://foodpanda-clone-beige.vercel.app/",
    },

    {
      image: rps,
      title: "Rock Paper Scissors",
      para: "A fun and interactive rock-paper-scissors.",
      src: "https://rock-paper-scissors-xi-lilac.vercel.app/",
    },
    {
      image: age,
      title: "Age Calculator",
      para: "A simple tool to calculate your age accurately based on your date of birth.",
      src: "https://age-calculator-chi-one.vercel.app/",
    },
    {
      image: clock,
      title: "Digital Clock",
      para: "A modern digital clock displaying real-time updates.",
      src: "https://digital-clock-one-omega.vercel.app/",
    },
    {
      image: calculator,
      title: "Online Calculator",
      para: "A functional calculator for performing basic arithmetic operations.",
      src: "https://calculator-tawny-sigma.vercel.app/",
    },
    {
      image: password,
      title: "Secure Password Generator",
      para: "A tool to generate strong and secure passwords for better online safety",
      src: "https://random-password-brown.vercel.app/",
    },
    {
      image: wordcount,
      title: "Word Counter",
      para: "A simple tool to count words and characters in your text.",
      src: "https://word-counter-theta-taupe.vercel.app/",
    },

    {
      image: clinic,
      title: "Clinic Management System",
      para: "A comprehensive web application designed to streamline clinic operations",
      src: "https://bddc.vercel.app/",
    },

    {
      image: ecomerrs,
      title: "E-commerce Website",
      para: "A fully responsive e-commerce platform with product listings",
      src: "https://project-main-delta.vercel.app/",
    },
    {
      image: myReact,
      title: "React project",
      para: "An introductory React project highlighting.",
      src: "https://first-react-project-indol.vercel.app/",
    },

    {
      image: tictac,
      title: "Tic-Tac-Toe Game",
      para: "A classic tic-tac-toe game built with JavaScript",
      src: "https://tic-tac-lilac.vercel.app/",
    },
    {
      image: netflix,
      title: "Netflix Clone",
      para: "A sleek, responsive Netflix-inspired web app",
      src: "https://netflix-alpha-five.vercel.app/",
    },
    {
      image: dashboard,
      title: "Admin Dashboard",
      para: "An intuitive admin panel",
      src: "https://dashboard-lyart-phi.vercel.app/",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const calculateStyle = (index) => {
    let stt = 0;
    let style = {};

    if (index === activeIndex) {
      return {
        transform: "none",
        zIndex: 1,
        filter: "none",
        opacity: 1,
      };
    }

    if (index > activeIndex) {
      stt = index - activeIndex;
      style.transform = `translateX(${280 * stt}px) scale(${
        0.8 - 0.1 * stt
      }) perspective(16px) rotateY(-1deg)`;
    } else {
      stt = activeIndex - index;
      style.transform = `translateX(${-280 * stt}px) scale(${
        0.8 - 0.1 * stt
      }) perspective(16px) rotateY(1deg)`;
    }

    style.zIndex = -stt;
    style.filter = "blur(4px)";
    style.opacity = stt > 2 ? 0 : 0.6;

    return style;
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={index} className="item" style={calculateStyle(index)}>
          <div className="image-container">
            <img src={slide.image} alt={slide.title} />
          </div>
          <div className="content">
            <h2>{slide.title}</h2>
            <p>{slide.para}</p>
            <a href={slide.src} target="_blank">
              <Button2 />
            </a>
          </div>
        </div>
      ))}

      <button className="nav-btn prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="nav-btn next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
