import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import AOS from 'aos'
import "aos/dist/aos.css";

const App = () => {
  useEffect(()=>{
     AOS.init({
      duration: 600,
      once:false
    });
  })
  return (
    <div className='w-full h-full scroll-smooth'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
