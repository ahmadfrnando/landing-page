// eslint-disable-next-line no-unused-vars
import React from 'react'
import ImagePostcards from '../../assets/postcards2.svg'

const Postcards = () => {
  return (
    <div id="postcards" className='bg-white dark:bg-gray-900 max-w-screen'>
      <div className='container flex flex-col gap-6 md:px-0 px-8 justify-center items-center'>
        <h1 className='text-3xl md:text-4xl font-bold text-tertiary'>Our Postcards</h1>
        <img src={ImagePostcards} alt="postcards" className='md:w-[500px] w-[290px]'/>
        <p className='md:px-52 md:text-center text-justify text-hitam font-semibold dark:text-white'>Explore our unique collection of postcards and share a slice of your world with your neighbors. Lets bridge distances one postcard at a time. Send a smile, share a story, and strengthen our community bonds. Pick your favorite, add a personal touch, and let the joy spread to every doorstep. Explore, connect, cherish!</p>
        <button className='tracking-widest text-sm bg-secondary uppercase text-white px-6 py-3 rounded-3xl hover:ring-offset-2 hover:ring-2 hover:ring-tertiary'>View postcard</button>
      </div>
    </div>
  )
}

export default Postcards