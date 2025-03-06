import React from 'react'
import style from './Experience.module.css'

function Experience(props) {
  return (
    <>
    <div className={style.exp}>
        <h2>{props.expTitle}</h2>
        <h3>{props.expNum}</h3>
    </div>
      
    </>
  )
}

export default Experience
