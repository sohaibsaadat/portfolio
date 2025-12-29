import React from 'react'
import { sohaib2 } from '../assets/images'

const About = () => {
  return (
    <div   id='about' className='w-full flex p-15 gap-5   bg-white'>
      <div data-aos="fade-up"    className='bg-gray-200 hidden md:flex   w-1/3  items-center   justify-center'>
<img  className='h-80 ' src={sohaib2} alt="" />
      </div>
      <div data-aos="fade-up"  className='w-full  flex gap-5 border-2 md:border-0 border-gray-400 p-2 flex-col h-auto'  >
<h3 className='flex italic font-bold md:justify-start justify-center text-gray-500'>My Intro</h3>
<h1 className='flex text-3xl md:justify-start justify-center font-bold text-blue-900'>About Me</h1>
<p className='text-gray-600 font-bold'>
    My name is Sohaib Ali. I am a learner MERN stack developer. I am pursuing a 3-year DAE in software and, alongside this, I am working on my MERN stack projects. These projects also include quiz and weather app clones of different websites, as well as an e-commerce and, audio player. I use AI to increase the efficiency of my web pages to achieve the desired?
</p>
<h1 className='flex text-3xl md:justify-start justify-center     font-bold text-blue-900'>Personnel Info</h1>
<div className="text-left space-y-2 font-sans">
  <p><strong>Name:</strong> <span className="text-gray-700">Sohaib Ali</span></p>
  <p><strong>Date of birth:</strong> <span className="text-gray-700">09-June-2008</span></p>
  <p><strong>Address:</strong> <span className="text-gray-700">Sector 35/A Zaman Town Korangi 4,Karachi</span></p>
  <p><strong>Zip code:</strong> <span className="text-gray-700">74900</span></p>
  <p><strong>Email:</strong> <span className="text-gray-700">sohaibsaadat9@gmail.com</span></p>
  <p><strong>Phone:</strong> <span className="text-gray-700">03122874454</span></p>
</div>

      </div>
    </div>
  )
}

export default About
