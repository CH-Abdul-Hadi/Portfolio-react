import React from "react";
import style from "./Projects.module.css";
import Card from "../Projecs_cards/Card";
import profile from "../../assets/Profile_img.jpg";

function Projects() {
  return (
    <>
      <div className={style.Projects}>
        <h1 className={style.projecthead}>Projects</h1>
        <div className={style.projectsCard}>
          <Card imgTitle='' image={profile}/>
          <Card />
          <Card />
        </div>
        <div className={style.projectsCard}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Projects;
