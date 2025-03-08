import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={style.card}
      style={{ backgroundImage: `url(${props.image})`, backgroundSize: `cover`  }}>
        <div className={style.cardContent}>
          <p className={style.cardTitle}>{props.imgTitle}</p>
          {/* <p className={style.cardPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
        </div>
      </div>
    </>
  );
};

//

export default Card;
