import style from './Hero.module.css'
import imgboy from '../img/hero/boy.svg'
import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className={`${style.bg1ABC9C} d-flex flex-column justify-content-center align-items-center`}>
      <img src={imgboy} className={`${style.imgb} pt-3`} alt="boy" />
      <h1 className={`${style.title} pt-5`}>Start Bootstrap</h1>
      <p className={`${style.par} pt-5`}>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
