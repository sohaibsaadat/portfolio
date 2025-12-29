import React from 'react'
import { css, exp, html, mongodb, node, react,js, tailwindCss, reduxSvg, materialUi, socketIo, jwtSvg } from '../assets/images'

const Skills = () => {
    const cards = [
    { title: 'HTML',level: 'Excellent',logo:html },
    { title: 'CSS', level: 'Excellent',logo:css },
    { title: 'JAVASCRIPT', level: 'Excellent',logo:js },
    { title: 'Tailwind Css', level: 'Good',logo:tailwindCss },
    { title: 'REACT', level: 'Excellent',logo:react },
    { title: 'Redux Toolkit', level: 'Good',logo:reduxSvg },
    { title: 'Material UI', level: 'Good',logo:materialUi },
    { title: 'Socket IO', level: 'Good',logo:socketIo },
    { title: 'MONGO DB', level: 'Good',logo:mongodb },
    { title: 'EXPRESS', level: 'Excellent',logo:exp },
    { title: 'JWT Authentication', level: 'Good',logo:jwtSvg },
    { title: 'NODE', level: 'Good',logo:node }
  ]

    return (
    <div id='skills' className='w-full h-auto p-3'>
        <div className='w-full p-5 h-auto bg-white'>
<div className='w-full flex justify-center'>
<h1 className=' text-3xl font-bold text-blue-900 mt-5'>My Skills</h1>

</div>
<div className='w-full mt-5'>
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
 {cards.map((card, index) => (
        <div data-aos="fade-up" data-aos-delay={index * 200}  key={index} className='bg-white flex justify-center  border flex-col items-center rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300'
>
    <img className='w-20' src={card.logo} alt="" />
          <h2 className='text-xl font-semibold mb-2'>{card.title}</h2>
          <p className='text-white-600 font-bold text-center w-full rounded-2xl bg-green-500'>{card.level}</p>
        </div>
      ))}
    </div>
</div>
        </div>
      
    </div>
  )
}

export default Skills
