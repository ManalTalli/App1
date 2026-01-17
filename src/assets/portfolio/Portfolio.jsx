import style from './Portfolio.module.css'
import img1 from '../img/portfolio/1.png'
import img2 from '../img/portfolio/2.png'
import img3 from '../img/portfolio/3.png'
import img4 from '../img/portfolio/4.png'
import img5 from '../img/portfolio/5.png'
import img6 from '../img/portfolio/6.png'
import React from 'react'

export default function Portfolio() {
  return (
    <div>
      
      <h2 className={`${style.title} d-flex align-items-center justify-content-center`}>Portfolio</h2>
      <div className='container d-flex align-items-center justify-content-center'>
        

        <div>
          <div class="row row-cols-4 row-cols-md-3 g-4 pb-5">


            <div class="col">
              <div class="">
                <img src={img1} class="card-img-top rounded-2" alt="..." />
              </div>
            </div>


            <div class="col">
              <div class="card">
                <img src={img2} class="card-img-top rounded-2" alt="..." />
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src={img3} class="card-img-top rounded-2" alt="..." />
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src={img4} class="card-img-top rounded-2" alt="..." />
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src={img5} class="card-img-top rounded-2" alt="..." />
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src={img6} class="card-img-top rounded-2" alt="..." />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
