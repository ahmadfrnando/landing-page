// eslint-disable-next-line no-unused-vars
import React from 'react';
import Image from '../../assets/about2.jpg';

const About = () => {
  return (
    <div id="info" className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col gap-10 items-center py-32">
        <div className="md:flex block gap-10 md:px-36">
          <img src={Image} alt="about" className="max-w-[370px] drop-shadow-2xl" />
          <div className="flex flex-col gap-6 font-semibold text-justify md:text-center text-xl items-center justify-center ">
            <h1 className="text-4xl md:mt-0 mt-10 font-bold text-secondary/80">A Way For Neighbors to Connect</h1>
            <p className='text-secondary'>Neighborhood norms have evolved away from spontaneous connections.</p>
            <p className='text-secondary'>
              Today we prefer to screen our contacts online before meeting in person. We screen work colleagues using LinkedIn; we screen activity participants on Facebook; we screen romance candidates using online
              dating services.
            </p>
            <p className='text-secondary'>Whats needed now is an app that lets us share specific info that we select, with nearby neighbors that we also select-just as we can do now on Linkedin, but for our social lives with nearby neighbors.</p>
            <p className='text-secondary'>
              Al can suggest matches and activities, making connection even easier. LLMs enable semantic understanding of wants and needs, allowing the neighborhood connector - formerly the local extrovert - to instead
              be an Al agent.
            </p>
            <button className='capitalize bg-secondary text-white px-6 py-3 rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-secondary'>get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
