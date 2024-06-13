// eslint-disable-next-line no-unused-vars
import React from 'react';
import DarkMode from './DarkModa';
import ToogleBar from './ToogleBar';

const Items = [
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Info",
    link: "#info",
  },
  {
    title: "About Us",
    link: "#about",
  },
  {
    title: "Postcards",
    link: "#postcards",
  },
]

const Navbar = () => {
  return (
    <div className="bg-white h-auto max-w-screen dark:bg-gray-900">
      <div className="container bg-white dark:bg-gray-900 z-10 flex h-20 justify-between items-center">
        <a href="#">
          <img src="./logo.png" alt="logo" className='md:w-52 w-40' />
        </a>
        <div className="hidden md:flex font-bold h-full items-center justify-center">
          {Items.map((item, index) => (
          <a key={index} href={item.link} className="flex text-dark px-5 h-full items-center text-hitam justify-center hover:bg-secondary/80 transition-all duration-150 dark:text-white dark:hover:text-secondary/80 dark:hover:text-white">
            {item.title}
          </a>
          ))}
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
