import { useState } from "react";
import "./Slider.css";
import dashboard from '../../assets/dashboard.webp'

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  // Array of slide objects with different images
  const slides = [
    {
      image: "https://source.unsplash.com/random/800x600?nature,water",
      title: "Nature & Water",
    },
    {
      image: "https://source.unsplash.com/random/800x600?mountain",
      title: "Mountain View",
    },
    {
      image: "https://source.unsplash.com/random/800x600?city,night",
      title: "City Lights",
    },
    {
      image: dashboard,
      title: "Tech World",
    },
    {
      image: "https://source.unsplash.com/random/800x600?space,galaxy",
      title: "Space Exploration",
    },
    {
      image: "https://source.unsplash.com/random/800x600?forest",
      title: "Deep Forest",
    },
    {
      image: "https://source.unsplash.com/random/800x600?animal,wild",
      title: "Wild Animals",
    },
    {
      image: "https://source.unsplash.com/random/800x600?animal,wild",
      title: "Wild Animals",
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
        1 - 0.1 * stt
      }) perspective(16px) rotateY(-1deg)`;
    } else {
      stt = activeIndex - index;
      style.transform = `translateX(${-280 * stt}px) scale(${
        1 - 0.1 * stt
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
        <div
          key={index}
          className="item"
          style={{
            ...calculateStyle(index),
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="content">
            <h1>{slide.title}</h1>
          </div>
        </div>
      ))}

      <button id="next" onClick={handleNext}>
        &gt;
      </button>
      <button id="prev" onClick={handlePrev}>
        &lt;
      </button>
    </div>
  );
};

export default Slider;
