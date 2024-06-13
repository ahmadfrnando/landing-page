// eslint-disable-next-line no-unused-vars
import React from 'react';

const ResponsiveNav = () => {
  return (
    <div className="absolute top-20 right-0 w-screen bg-white dark:bg-gray-900 border-4 border-secondary rounded-lg z-10">
      <ul className="w-full flex flex-col font-semibold">
        <li className="">
          <a href="#services" className='w-full flex px-5 py-6 focus:bg-secondary'>Services</a>
        </li>
        <li className="">
          <a href="#info" className='w-full flex px-5 py-6 focus:bg-secondary'>Info</a>
        </li>
        <li className="">
          <a href="#about" className='w-full flex px-5 py-6 focus:bg-secondary'>About Us</a>
        </li>
        <li className="">
          <a href="#postcards" className='w-full flex px-5 py-6 focus:bg-secondary'>Postcards</a>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveNav;
