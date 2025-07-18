import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
const App = () => {
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
