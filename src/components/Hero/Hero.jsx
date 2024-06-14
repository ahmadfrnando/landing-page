// eslint-disable-next-line no-unused-vars
import React from 'react';
import IllHero from '../../assets/hero.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="max-w-screen md:mt-0 mt-14 dark:bg-gray-900 ">
      <div data-aos="fade-up" className="container py-4 md:py-0 md:px-8 px-8 md:grid md:grid-cols-2 gap-10">
        <div className="flex gap-5 md:gap-10 flex-col justify-center items-center ">
          <h1 className="uppercase text-secondary text-4xl md:text-5xl font-extrabold">Neighborgood</h1>
          <p className=" text-gray-700 md:text-sm text-justify md:text-center dark:text-white font-semibold">
            NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an AI agent that acts as the highly-social extrovert
            neighbor who finds symbiotic activities for people to do together.
          </p>
          <div className="md:hidden flex justify-center">
            <LazyLoadImage src={IllHero} effect="blur" alt="hero" />
          </div>
          <Link to="/landing-page/login">
            <button className="tracking-widest text-sm bg-secondary uppercase text-white px-6 py-3 rounded-3xl hover:ring-offset-2 hover:ring-2 hover:ring-tertiary">Get Started</button>
          </Link>
        </div>
        <div className="hidden md:flex justify-center">
          <LazyLoadImage src={IllHero} effect="blur" alt="hero" className="max-w-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
