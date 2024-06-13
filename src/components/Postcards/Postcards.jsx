// eslint-disable-next-line no-unused-vars
import React from 'react'
import ImagePostcards from '../../assets/postcards2.svg'

const Postcards = () => {
  return (
    <div id="postcards" className='bg-white dark:bg-gray-900'>
      <div className='container flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-4xl font-bold text-secondary'>Our Postcards</h1>
        <img src={ImagePostcards} alt="postcards" className='max-w-[500px]'/>
        <p className='md:px-52 text-center dark:text-white'>Explore our unique collection of postcards and share a slice of your world with your neighbors. Lets bridge distances one postcard at a time. Send a smile, share a story, and strengthen our community bonds. Pick your favorite, add a personal touch, and let the joy spread to every doorstep. Explore, connect, cherish!</p>
        <button className='bg-secondary text-white px-6 py-3 rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-secondary tracking-widest uppercase'>view postcards</button>
      </div>
    </div>
  )
}

export default Postcards