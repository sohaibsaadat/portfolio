import React from 'react'

const Project = () => {
  const projects = [
    {
      name: 'Forever-Ecommerce',
      desc: 'A MERN stack shopping website.',
      link: 'https://forever-ecommerce-xi.vercel.app/'
    },
    {
      name: 'Admin Panel Forever',
      desc: 'Admin Panel for Forever shopping website',
      link: 'https://forever-admin-murex.vercel.app/'
    },
    {
      name: 'Memon Industrial and Technical Institues',
      desc: 'Clone of my Institutes Home Page Using Bootstrap.',
      link: 'https://memon-eight.vercel.app/'
    },
    {
      name: 'Weather App ',
      desc: 'That that tells the real time weather made with javascript using open weather api.',
      link: 'https://weatherapp-two-khaki.vercel.app/'
    },
    {
      name: 'Marksheet Generator ',
      desc: 'Fill dut the detail and it will generate marksheet.',
      link: 'https://marksheet-seven-iota.vercel.app/'
    }

  ]
    return (
    <div id='project' className='w-full bg-white  '>
      <div className='w-full flex justify-center'>

      <h1 className='flex text-3xl text-center  pt-5 md:justify-start justify-center font-bold text-blue-900'>My Projects</h1>
      
      </div>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {projects.map((project, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 text-center'
              >
                <h2 className='text-xl font-semibold mb-2'>{project.name}</h2>
                <p className='text-gray-600 mb-4'>{project.desc}</p>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition'
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Project
