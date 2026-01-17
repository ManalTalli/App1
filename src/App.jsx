import Navbar from './assets/navbar/Navbar.jsx';
import Hero from './assets/hero/Hero.jsx';
import Portfolio from './assets/portfolio/Portfolio.jsx';
import About from './assets/about/About.jsx';
import Contact from './assets/contact/Contact.jsx';
import Footer from './assets/footer/Footer.jsx';
import React from 'react'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      
    </div>
  )
}
