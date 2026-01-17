import style from './Contact.module.css'
import React from 'react'

export default function Contact() {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center pb-5'>

      <h2 className={`${style.title}`}>Contact Me</h2>

      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form  className="custom-form">

              <div className="mb-4">
                <input
                  type="text"
                  name="fullName"
                  className="form-control custom-input"
                  placeholder="Full name"
                  />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="form-control custom-input"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  className="form-control custom-input"
                  placeholder="Phone number"
                />
              </div>

              <div className="mb-4 position-relative">
                <label className="text-muted mb-2 d-block">Message</label>
                <textarea
                  name="message"
                  className="form-control custom-input custom-textarea"
                  rows="3"
                  ></textarea>
                <div className="textarea-resize-icon"></div>
              </div>

              <button type="submit" className="btn btn-send shadow-sm">
                Send
              </button>

            </form>
          </div>
        </div>
      </div>
            </div>

      )
}
