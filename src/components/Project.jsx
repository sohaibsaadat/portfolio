import React from 'react'

const Project = () => {
  const projects = [
    {
      name: 'Forever-Ecommerce',
      desc: 'This is the Forever E-commerce website, a full-featured online store where users can browse products, add them to cart, place orders, and make payments. Built with React, Tailwind CSS, Node.js, Express, and MongoDB.',
      link: 'https://forever-ecommerce-xi.vercel.app/'
    },
    {
      name: 'MERN STACK Complete Sign Up and Login System',
      desc: 'This is a complete Sign-Up and Login system built using the MERN stack (MongoDB, Express, React, Node.js) with secure authentication, email verification, and password reset functionality.',
      link: 'https://complete-mern-sign-up-login-system.vercel.app/'
    },
    {
      name: 'AI-Fiesta Clone',
      desc: 'This is a clone of the AI Fiesta website, built using React.js, Tailwind CSS, and modern React libraries for animations and UI effects. The project demonstrates a responsive, interactive, and visually appealing front-end similar to AI Fiesta.',
      link: 'https://ai-fiesta-clone-two.vercel.app/'
    },
    {
      name: 'Admin Panel Forever',
      desc: 'This is the **Admin Panel** for the Forever E-commerce website. Admins can log in, manage products, and view orders. Built using React,Tailwind CSS, Node.js, Express*, and MongoDB',
      link: 'https://forever-admin-murex.vercel.app/'
    },
    {
      name: 'Memon Industrial and Technical Institues',
      desc: 'Clone of my Institutes Home Page Using Bootstrap. In this website i also used javascript slider library for image slider in it it help me alot to learn about utility classes',
      link: 'https://memon-eight.vercel.app/'
    },
    {
      name: 'Weather Web App ',
      desc: 'This is a Weather Web Project developed as part of the curriculum at Memon Industrial and Technical Institute. The application fetches real-time weather data for any city using the OpenWeather API and displays key weather details along with a live clock for the searched city. Built using HTML, CSS, and Vanilla Javascript',
      link: 'https://group-f.vercel.app/'
    },
    {
      name: 'Marksheet Generator ',
      desc: 'Fill dut the detail and it will generate marksheet.',
      link: 'https://marksheet-seven-iota.vercel.app/'
    }

  ]
    return (
    <div id='project' className='w-full p-5 bg-white  '>
      <div className='w-full flex justify-center'>

      <h1 className='flex text-3xl text-center  pt-5 md:justify-start justify-center font-bold text-blue-900'>My Projects</h1>
      
      </div>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-6 '>
            {projects.map((project, index) => (
              <div
              data-aos="fade-up" 
              data-aos-delay={index * 200}
                key={index}
                className='bg-white border rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 text-center'
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
