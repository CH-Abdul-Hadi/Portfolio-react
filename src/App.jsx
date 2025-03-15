import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import { gsap } from "gsap";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
