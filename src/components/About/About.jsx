// eslint-disable-next-line no-unused-vars
import React from 'react';
import Image from '../../assets/about2.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {
  return (
    <div id="info" className="bg-white dark:bg-gray-900 max-w-screen">
      <div className="container flex flex-col gap-10 items-center py-32">
        <div className="flex md:flex-row flex-col gap-10 md:px-20 items-center justify-center">
          <LazyLoadImage src={Image} alt="about" effect='blur' className="md:flex hidden max-w-[300px] h-auto drop-shadow-lg rounded-[30px]" />
          <div className="flex flex-col gap-10 md:px-0 px-6 md:gap-6 font-semibold text-justify md:text-center text-xl items-center justify-center ">
            <h1 className="text-3xl md:text-4xl text-center md:mt-0 font-bold text-tertiary/80">A Way For Neighbors to Connect</h1>
            <LazyLoadImage src={Image} effect="blur" alt="about" className="md:hidden max-w-[300px] h-auto drop-shadow-lg" />
            <p className="text-hitam dark:text-white font-semibold">Neighborhood norms have evolved away from spontaneous connections.</p>
            <p className="text-hitam dark:text-white font-semibold">
              Today we prefer to screen our contacts online before meeting in person. We screen work colleagues using LinkedIn; we screen activity participants on Facebook; we screen romance candidates using online
              dating services.
            </p>
            <p className="text-hitam dark:text-white font-semibold">
              Whats needed now is an app that lets us share specific info that we select, with nearby neighbors that we also select-just as we can do now on Linkedin, but for our social lives with nearby neighbors.
            </p>
            <p className="text-hitam dark:text-white font-semibold">
              Al can suggest matches and activities, making connection even easier. LLMs enable semantic understanding of wants and needs, allowing the neighborhood connector - formerly the local extrovert - to instead
              be an Al agent.
            </p>
            <button className="tracking-widest text-sm bg-secondary uppercase text-white px-6 py-3 rounded-3xl hover:ring-offset-2 hover:ring-2 hover:ring-tertiary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
