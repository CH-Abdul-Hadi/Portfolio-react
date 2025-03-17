import React from 'react'
import style from './Button.module.css'

function Button(props) {
  return (
    <>
      <button className={style.btns} style={props.btnstyle}  >{props.btn}</button>
  
    </>
  )
}

export default Button
