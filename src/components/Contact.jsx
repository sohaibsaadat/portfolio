import { Home, Mail, Phone, Quote } from 'lucide-react'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { work1 } from '../assets/images'

const Contact = () => {
  return (
    <div id='contact' className='bg-gray-100 pb-5  w-full  '>
      {/* QUOTE SECTION */}
      <div className='flex h-full items-center justify-center text-center max-w-4xl mx-auto p-10'>
        <Quote className='w-6 h-6 text-green-600 mr-2' />
        <div className='whitespace-pre-line text-lg md:text-xl font-medium text-gray-800'>
          <Typewriter
            options={{
              strings: [
                'I believe in teamwork, clean code, and building solutions that matter.\nLet’s work together to achieve your digital goals.'
              ],
              autoStart: true,
              loop: true,
              delay: 30
            }}
          />
        </div>
        <Quote className='w-6 h-6 text-green-600 ml-2 rotate-180' />
      </div>

      {/* MAIN CONTACT SECTION */}
      <div className='bg-white rounded-xl shadow-xl max-w-6xl mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2'>
        {/* Image Section */}
        <div className=' flex items-center justify-center p-6'>
          <img src={work1} alt='Contact Visual' className='rounded-xl w-full h-auto max-w-sm' />
        </div>

        {/* Info Section */}
        <div className='p-8 flex flex-col justify-center gap-6'>
          <h2 className='text-3xl font-bold text-blue-900 mb-2'>Contact Me</h2>

          <div className='flex items-center gap-4'>
            <Phone className='w-7 h-7 text-green-600' />
            <span className='text-lg md:text-xl font-medium'>0312-2874454</span>
          </div>

          <div className='flex items-center gap-4'>
            <Mail className='w-7 h-7 text-green-600' />
            <span className='text-lg md:text-xl font-medium'>sohaibsaadat9@email.com</span>
          </div>

          <div className='flex items-center gap-4'>
            <Home className='w-7 h-7 text-green-600' />
            <span className='text-lg md:text-xl font-medium'>Karachi, Pakistan</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
