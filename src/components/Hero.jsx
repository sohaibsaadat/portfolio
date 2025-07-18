import React from 'react'
import { bg4, sohaib } from '../assets/images'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id='home' style={{backgroundImage: `url(${bg4})`,backgroundSize: 'cover',
        backgroundPosition: 'center'
}} className='w-full flex items-center top-0 inset-0  md:p-35 p-10 h-[600px] relative' >
  <div className=' w-[100%] justify-center  md:justify-start gap-12 flex flex-col md:w-[80%]  h-auto'>
<div className='h-auto flex md:justify-start justify-center w-full'>
<h1 className='font-bold  text-2xl'>UI/UX Developer</h1>
</div>
<div className='md:text-start text-2xl  text-center font-bold t sm:text-6xl flex justify-center md:justify-start wrap-normal w-full   text-gray-700'>
    <Typewriter
  options={{
    strings: ['Hello', 'I am Sohaib Ali','JavaScript UI/UX Developer'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
<div className='flex md:flex-row flex-col w-full md:justify-start items-center  justify-center gap-5'>
<a href="#contact">
  <button className='bg-black text-white text-lg p-3 rounded-xl font-bold w-50 hover:bg-white hover:text-black duration-200 transition-all ease-in-out cursor-pointer h-05'>
    Contact
  </button>
</a>
    <button
      onClick={() => downloadPDF('/resume.pdf', 'My_CV.pdf')}
      className='w-full hover:bg-blue-500 hover:text-white duration-300 ease-in-out transition-all bg-amber-600 h-10 font-bold cursor-pointer text-sm p-2 rounded-2xl'
    >
      Download CV
    </button></div>    
    
    </div>   

<div className='w-full  md:flex hidden justify-center'>
    <img  src={sohaib} className='h-130 w-40 max-w-40'   alt="" />
</div>
    </div>
  )
}

export default Hero
