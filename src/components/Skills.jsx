import React from 'react'
import { css, exp, html, mongodb, node, react,js } from '../assets/images'

const Skills = () => {
    const cards = [
    { title: 'HTML',level: 'Good',logo:html },
    { title: 'CSS', level: 'Good',logo:css },
    { title: 'JAVASCRIPT', level: 'Good',logo:js },
    { title: 'REACT', level: 'Intermediate',logo:react },
    { title: 'MONGO DB', level: 'Intermediate',logo:mongodb },
    { title: 'EXPRESS', level: 'Intermediate',logo:exp },
    { title: 'NODE', level: 'Intermediate',logo:node }
  ]

    return (
    <div id='skills' className='w-full h-auto p-3'>
        <div className='w-full p-5 h-auto bg-white'>
<div className='w-full flex justify-center'>
<h1 className=' text-3xl font-bold text-blue-900 mt-5'>My Skills</h1>

</div>
<div className='w-full mt-5'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
 {cards.map((card, index) => (
        <div key={index} className='bg-white flex justify-center flex-col items-center rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300'
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
