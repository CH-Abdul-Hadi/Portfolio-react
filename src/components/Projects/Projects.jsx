import React from "react";
import style from "./Projects.module.css";
import Slider from "../Slider/Slider";

function Projects() {
  return (
    <>
      <div className={style.Projects} id="projects">
        <h1 className={style.projecthead}>Projects</h1>

        <Slider />
      </div>
    </>
  );
}

export default Projects;
