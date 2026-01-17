import style from './Navbar.module.css'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className={`${style.bg2C3E50} navbar navbar-expand-lg navbar-dark pt-4 pb-4`}> 
        <div className="container">
          <a className={`${style.navbarbrand}`} href="#">START BOOTSTRAP</a>
          <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto d-flex gap-5">
        <li className="nav-item">
          <a className={`${style.navlink} active`} aria-current="page" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className={`${style.navlink}`} href="#">About</a>
        </li>
        <li className="nav-item">
          <a className={`${style.navlink}`} href="#">Contact</a>
        </li>
      </ul>
    </div>
        </div>
      </nav>
    </div>
  )
}
