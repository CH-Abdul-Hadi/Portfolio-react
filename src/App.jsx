import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Loader2 from "./components/Loader2/Loader2";
import Educations from './components/Educations/Educations.jsx'
import "./index.css";
import Footer from "./components/Footer/Footer";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetching data, preloading assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2-second delay for demo; adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader2 />
      ) : (
        <>
          <Navbar />
          <Hero />
          <AboutMe />
          <Educations/>
          <Projects/>
          <Contact />
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
