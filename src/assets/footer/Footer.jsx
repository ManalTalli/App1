import style from './Footer.module.css'
import React from 'react'

export default function Footer() {
  return (
    <div className={`${style.bg2C3E50}`}>
      <div className={`container d-flex justify-content-between`}>
        <div>
          <h3 className={`${style.title}`}>Location</h3>
          <p>2215 John Daniel Drive<br/>
Clark, MO 65243</p>
        </div>

        <div>
          <h3 className={`${style.title}`}>Around the Web</h3>

        </div>
        <div>
          <h3 className={`${style.title}`}>About Freelancer</h3>
          <p>Freelance is a free to use, MIT licensed<br/> Bootstrap theme created by Start Bootstrap .</p>
      </div>
      </div>
    </div>
  )
}
