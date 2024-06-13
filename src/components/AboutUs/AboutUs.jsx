// eslint-disable-next-line no-unused-vars
import React from 'react';
import AboutImages from '../../assets/aboutus.svg'

const AboutUs = () => {
  return (
    <div id="about" className="bg-white dark:bg-gray-900">
      <div className="container py-20 md:px-0 px-8">
        <h1 className="text-center font-bold md:text-4xl text-3xl text-tertiary">About Us</h1>
        <div className='flex flex-col gap-10 items-center justify-center text-justify md:text-center'>
            <img src={AboutImages} alt="About"  className='w-[700px]'/>
          <p className='md:px-52 font-semibold text-hitam dark:text-white'>
            NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an Al agent that acts as the highly-social extrovert
            neighbor who finds symbiotic activities for people to do together.
            <br />
            <br />
            We offer users the ability to screen potential nearby connections and arrange shared face-to-face activities. Our team previously founded Foresight Institute, Persist Ventures, & Systemic Altruism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
