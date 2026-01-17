import style from './About.module.css'
import React from 'react'

export default function About() {
  return (
    <div>
      <div className={`${style.bg1ABC9C} d-flex justify-content-center flex-column align-items-center mt-5`}>
        <h2 className={`${style.title}`}>About</h2>
        <div className='container d-flex pe-5 ps-5 pb-5'>
          <p className='ps-5'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='pe-5 pb-5'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
      </div>

    </div>
  )
}
