import React from 'react'
import style from './SkillCard.module.css'

function SkillCard(props) {
  return (
    <>
        <div className={style.skill}>
            <img src={props.skill} className={style.imgs} width={50} height={50} alt="" />
        </div>
    </>
  )
}

export default SkillCard
