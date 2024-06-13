// eslint-disable-next-line no-unused-vars
import React from 'react'
import IllHero from '../../assets/ill-hero.png'

const Hero = () => {
  return (
    <div className=' md:mt-0 mt-14 dark:bg-gray-900 bg-red-900'>
        <div className='container py-8 md:grid md:grid-cols-2 gap-10 bg-blue-900'>
            <div className='flex gap-5 md:gap-10 flex-col justify-center items-center '>
                <h1 className='uppercase text-secondary text-4xl md:text-5xl font-extrabold'>Neighborgood</h1>
                <p className=' text-gray-700 text-sm text-center dark:text-white'>NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an AI agent that acts as the highly-social extrovert neighbor who finds symbiotic activities for people to do together.</p>
                <div className='md:hidden flex justify-center'>
                <img src={IllHero} alt="hero" className=''/>
            </div>
                <button className='tracking-widest text-sm bg-secondary uppercase text-white px-6 py-3 rounded-3xl hover:ring-offset-2 hover:ring-2 hover:ring-primary'>Get Started</button>
            </div>
            <div className='hidden md:flex justify-center'>
                <img src={IllHero} alt="hero"/>
            </div>
        </div>
    </div>
  )
}

export default Hero