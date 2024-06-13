// eslint-disable-next-line no-unused-vars
import React from 'react';

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

const ResponsiveNav = () => {
  return (
    <div className="absolute top-20 right-0 w-screen bg-white dark:bg-gray-900 z-10">
      <ul className="w-full flex flex-col font-semibold items-center">
        {Items.map((item, index) => (
          <li key={index} className="">
            <a href={item.link} className="w-full flex px-5 py-6 focus:bg-secondary dark:text-white text-hitam">{item.title}</a>
          </li>
        ))}        
      </ul>
    </div>
  );
};

export default ResponsiveNav;
