// eslint-disable-next-line no-unused-vars
import React from 'react';
import AboutImages from '../../assets/aboutus.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutUs = () => {
  return (
    <div id="about" className="bg-white dark:bg-gray-900">
      <div className="container py-20 md:px-0 px-8">
        <h1 data-aos="zoom-in" data-aos-duration="2000" className="text-center font-bold md:text-4xl text-3xl text-tertiary">About Us</h1>
        <div data-aos="fade-out" data-aos-duration="2000" className='flex flex-col gap-10 items-center justify-center text-justify md:text-center'>
            <LazyLoadImage src={AboutImages} data-aos="fade-out" data-aos-duration="2000" alt="About" effect='blur' className='w-[700px]'/>
          <p data-aos="fade-out" data-aos-duration="2000" className='md:px-52 font-semibold text-hitam dark:text-white'>
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
