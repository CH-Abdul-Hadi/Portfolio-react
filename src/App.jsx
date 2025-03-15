import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Slider from "./components/Slider/Slider"; // Assuming this is Projects
import Contact from "./components/Contact/Contact";
import Loader2 from "./components/Loader2/Loader2";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetching data, preloading assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second delay for demo; adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader2 />
      ) : (
        <>
          <Navbar />
          <Hero id="home" />
          <AboutMe id="about" />
          <Slider id="projects" />
          <Contact id="contact" />
        </>
      )}
    </div>
  );
}

export default App;