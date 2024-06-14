// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MdHandshake } from 'react-icons/md';
import { FaPeopleGroup } from "react-icons/fa6";
import { SiHearthisdotat } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";

const services = [
    {
        title: 'connect, discover, attend: meet your neighbors!',
        icon: <MdHandshake className=" text-white w-16 h-16 hover:text-secondary" />,
        desc: 'Find your perfect match based on shared interest and hobbies, with our interest matching service, becouse compatibility goes beyond looks!'
    },
    {
        title: 'connect with neighbors, discover local events',
        icon: <FaPeopleGroup className=" text-white w-16 h-16 hover:text-secondary" />,
        desc: 'looking for something fun to do? Our event discovery service helps you find the hottest concerts, festivals, and parties in your area, so you never miss out on the fun!'
    },
    {
        title: 'build your neighbors network, join now!',
        icon: <SiHearthisdotat className=" text-white w-16 h-16 hover:text-secondary" />,
        desc: 'want to create a killer online profile that stands out from crowd? our profile creation service will help you create a captivating and unique profile that gets you noticed!'
    },
    {
        title: 'get nearby support around ypu easily!',
        icon: <MdSupportAgent className=" text-white w-16 h-16 hover:text-secondary" />,
        desc: 'the platform facilitates carpooling, baby nursing, and food stall discovery, optimizing savings in time and expenses'
    },
]

const Services = () => {
    const [open, setOpen] = React.useState(null);
    const handleIconClick = (index) => {
        setOpen(open === index ? null : index)
    }
  return (
    <div id='services' className="bg-white dark:bg-gray-900 max-w-screen">
      <div className="container flex flex-col md:py-6 md:h-[450px]">
        <h1 data-aos="zoom-in" data-aos-duration="2000" className="text-center font-bold text-3xl md:text-4xl text-tertiary capitalize dark:text-white">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-10 md:px-0 px-6 gap-10 md:gap-4">
            {services.map((service, index) => (
                <div key={index} data-aos="zoom-in-up" data-aos-duration="2000" className="flex flex-col gap-6 items-center px-8 py-16 rounded-[50px] bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
                    <button onClick={() => handleIconClick(index)} className="rounded-full transition-all duration-300 cursor-pointer bg-secondary p-2 hover:bg-white">
                        {service.icon}
                    </button>
                    <div className='flex text-hitam flex-col items-center gap-2'>
                        <h2 className='text-xl text-center font-bold capitalize text-hitam dark:text-white'>{service.title}</h2>
                        {open === index &&<span className='text-center text-sm font-semibold dark:text-white'>{service.desc}</span>}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
