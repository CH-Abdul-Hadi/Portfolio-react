import React from 'react'
import style from './Button.module.css'

function Button(props) {
  return (
    <>
      <button className={style.btns}>{props.btn}</button>
    </>
  )
}

export default Button
