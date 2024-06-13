// eslint-disable-next-line no-unused-vars
import React from 'react';
import DarkMode from './DarkModa';
import ToogleBar from './ToogleBar';

const Navbar = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <div className="container fixed top-0 backdrop-blur-lg z-10 flex h-20 justify-between items-center">
        <a href="#">
          <img src="./logo.png" alt="logo" className='w-52' />
        </a>
        <div className="hidden md:flex font-bold h-full items-center justify-center">
          <a href="#services" className="flex text-dark px-5 h-full items-center justify-center hover:bg-secondary/80 transition-all duration-150 dark:text-white dark:hover:text-secondary/80">
            Services
          </a>
          <a href="#info" className="flex text-dark px-5 h-full items-center justify-center hover:bg-secondary/80 transition-all duration-150 dark:text-white dark:hover:text-secondary/80">
            Info
          </a>
          <a href="#about" className="flex text-dark px-5 h-full items-center justify-center hover:bg-secondary/80 transition-all duration-150 dark:text-white dark:hover:text-secondary/80">
            About Us
          </a>
          <a href="#postcards" className="flex text-dark px-5 h-full items-center justify-center hover:bg-secondary/80 transition-all duration-150 dark:text-white dark:hover:text-secondary/80">
            Postcards
          </a>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <DarkMode />
          <ToogleBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
