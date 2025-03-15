// SkillCard.jsx
import React from "react";
import style from "./SkillCard.module.css";

function SkillCard(props) {
  return (
    <div className={`${style.skill} ${props.className || ""}`}>
      <img
        src={props.skill}
        className={style.imgs}
        alt={props.alt || "Skill icon"}
      />
    </div>
  );
}

export default SkillCard;
