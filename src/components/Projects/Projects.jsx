import React from "react";
import style from "./Projects.module.css";
import Slider from "../Slider/Slider";

function Projects() {
  return (
    <>
      <section id="projects">
        <div className={style.Projects}>
          <h1 className={style.projecthead}>Projects</h1>
          <Slider />
        </div>
      </section>
    </>
  );
}

export default Projects;
