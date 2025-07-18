import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { downloadPDF } from './download'
const Navbar = () => {
  const [active, setActive] = useState(false)
   

  return (
<nav className='w-full bg-white fixed top-0 left-0 z-50 shadow-md'>
      <div className='media flex  items-center justify-center px-4 py-3 lg:px-20'>
        <div className='text-2xl font-bold noto-serif text-center w-1/2 lg:w-auto'>
          Sohaib Ali.
        </div>

        <ul className='hidden lg:flex list-none gap-5 font-bold text-md mx-auto'>
            <li className='cursor-pointer navItem'><a href="#home">Home</a></li>
  <li className='cursor-pointer navItem'><a href="#about">About Me</a></li>
  <li className='cursor-pointer navItem'><a href="#skills">My Skills</a></li>
  <li className='cursor-pointer navItem'><a href="#project">My Projects</a></li>
  <li className='cursor-pointer navItem'><a href="#contact">Contact Me</a></li>

        </ul>

        <div className='w-1/3 lg:w-1/6 flex justify-center '>
    <button
      onClick={() => downloadPDF('/resume.pdf', 'My_CV.pdf')}
      className='w-full hover:bg-blue-500 hover:text-white duration-300 ease-in-out transition-all bg-amber-600 h-10 font-bold cursor-pointer text-sm p-2 rounded-2xl'
    >
      Download CV
    </button>        </div>

        <div className='lg:hidden absolute right-4 top-4'>
          <button onClick={() => setActive(!active)}>
            {active ? <X className='w-8 h-8' /> : <Menu className='w-8 h-8' />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          active ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul onClick={()=>setActive(!active)} className='list-none flex flex-col items-center gap-4 font-bold text-lg'>
         <li className='cursor-pointer navItem'><a href="#home">Home</a></li>
  <li className='cursor-pointer navItem'><a href="#about">About Me</a></li>
  <li className='cursor-pointer navItem'><a href="#skills">My Skills</a></li>
  <li className='cursor-pointer navItem'><a href="#project">My Projects</a></li>
  <li className='cursor-pointer navItem'><a href="#contact">Contact Me</a></li>

          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
