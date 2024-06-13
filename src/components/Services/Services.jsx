// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MdHandshake } from 'react-icons/md';
import { FaPeopleGroup } from "react-icons/fa6";
import { SiHearthisdotat } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";

const services = [
    {
        title: 'connect, discover, attend: meet your neighbors!',
        icon: <MdHandshake className=" text-white w-20 h-20 hover:text-secondary" />,
        desc: 'Find your perfect match based on shared interest and hobbies, with our interest matching service, becouse compatibility goes beyond looks!'
    },
    {
        title: 'connect with neighbors, discover local events',
        icon: <FaPeopleGroup className=" text-white w-20 h-20 hover:text-secondary" />,
        desc: 'looking for something fun to do? Our event discovery service helps you find the hottest concerts, festivals, and parties in your area, so you never miss out on the fun!'
    },
    {
        title: 'build your neighbors network, join now!',
        icon: <SiHearthisdotat className=" text-white w-20 h-20 hover:text-secondary" />,
        desc: 'want to create a killer online profile that stands out from crowd? our profile creation service will help you create a captivating and unique profile that gets you noticed!'
    },
    {
        title: 'get nearby support around ypu easily!',
        icon: <MdSupportAgent className=" text-white w-20 h-20 hover:text-secondary" />,
        desc: 'the platform facilitates carpooling, baby nursing, and food stall discovery, optimizing savings in time and expenses'
    },
]

const Services = () => {
  return (
    <div id='services' className="bg-white dark:bg-gray-900">
      <div className="container py-6">
        <h1 className="text-center font-bold text-4xl text-secondary capitalize dark:text-white">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-10 md:px-0 px-10 items-center gap-10">
            {services.map((service, index) => (
                <div key={index} className="flex flex-col rounded-xl gap-6 items-center px-8 py-16 h-[430px] bg-gradient-to-b from-primary/50 to-secondary/50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
                    <div className="rounded-full cursor-pointer bg-secondary p-2 hover:bg-white">
                        {service.icon}
                    </div>
                    <div className='flex  flex-col items-center'>
                        <h2 className='text-xl text-center font-bold capitalize dark:text-white'>{service.title}</h2>
                        <span className='text-center text-sm dark:text-white'>{service.desc}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
