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

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(4);

  const slides = [
    // ... keep your existing slides array

    {
      image: techpro,
      title: "Deep Forest",
    },
    {
      image: foodpanda,
      title: "Mountain View",
    },

    {
      image: rps,
      title: "Space Exploration",
    },

    {
      image: clinic,
      title: "Nature & Water",
    },

    {
      image: ecomerrs,
      title: "Wild Animals",
    },
    {
      image: myReact,
      title: "City Lights",
    },

    {
      image: tictac,
      title: "Wild Animals",
    },
    {
      image: netflix,
      title: "Wild Animals",
    },
    {
      image: dashboard,
      title: "Tech World",
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
            <button className="cardBtn">Learn More</button>
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
