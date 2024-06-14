// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import illLogin from '../assets/login.svg';
import illRegis from '../assets/register.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Login = () => {
  const [login, setLogin] = React.useState(false);
  const btnLogin = () => {
    setLogin(!login);
  };
  const [show, setShow] = React.useState(false);
  const [showRepas, setShowRepas] = React.useState(false);
  const showRepasHandle = () => {
    setShowRepas(!showRepas);
  }
  const showPass = () => {
    setShow(!show);
  }
  return (
    <div className="max-w-screen h-screen ">
      <div className="flex items-center justify-center w-full h-full px-10 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center border-2 border-secondary rounded-3xl p-10">
          <div className="flex flex-col gap-6 relative">
            {login && <LazyLoadImage src={illRegis} alt="" className="w-[500px]" />}
            {/* form */}
            {!login && (
              <>
              <a href='/landing-page/' className='absolute left-0'>
                  <TfiArrowCircleLeft className='w-10 h-10 text-black hover:text-tertiary' />
              </a>
                <h1 className="text-3xl font-extrabold text-center uppercase tracking-widest text-hitam">Login</h1>
                <div className="flex flex-col gap-2">
                  <label className="text-md font-semibold text-hitam" htmlFor="email">
                    Email
                  </label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-secondary px-6 py-2 focus:border-secondary rounded-3xl " />
                </div>
                <div className="flex flex-col gap-2 relative ">
                  <label className="text-md font-semibold text-hitam" htmlFor="password">
                    Password
                  </label>
                  <button onClick={() => showPass()} className='absolute right-4 top-10 text-gray-500 hover:text-gray-900'>
                    {!show ? <IoMdEye className=' w-6 h-6' /> : <IoMdEyeOff className=' w-6 h-6' />}
                      
                  </button>
                  <input type={!show ? `text` : `password`} name="password" id="password" className="bg-gray-50 border border-secondary px-6 py-2 focus:border-secondary rounded-3xl " />
                </div>
                <button className="tracking-widest text-sm bg-secondary uppercase text-white px-6 py-3 rounded-3xl hover:ring-offset-2 hover:ring-2 hover:ring-tertiary">login</button>
                <button onClick={() => btnLogin()} className="tracking-widest text-sm bg-secondary uppercase text-white px-6 py-3 rounded-3xl hover:ring-offset-2 hover:ring-2 hover:ring-tertiary">
                  register
                </button>
              </>
            )}
          </div>
          <div className="flex flex-col gap-2 relative">
          {!login && <LazyLoadImage src={illLogin} alt="" className="w-[500px]" />}
            {/* form */}
            {login && (
              <>
               <a href='/landing-page/' className='absolute right-0'>
                  <TfiArrowCircleRight className='w-10 h-10 text-black hover:text-tertiary' />
              </a>
                <h1 className="text-3xl font-extrabold text-center uppercase tracking-widest text-hitam">Register</h1>
                <div className="flex flex-col gap-2">
                  <label className="text-md font-semibold text-hitam" htmlFor="email">
                    Name
                  </label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-secondary px-6 py-2 focus:border-secondary rounded-3xl " />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-md font-semibold text-hitam" htmlFor="email">
                    Email
                  </label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-secondary px-6 py-2 focus:border-secondary rounded-3xl " />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label className="text-md font-semibold text-hitam" htmlFor="password">
                    Password
                  </label>
                  <button onClick={() => showPass()} className='absolute right-4 top-10 text-gray-500 hover:text-gray-900'>
                    {show ?  <IoMdEyeOff className=' w-6 h-6' /> : <IoMdEye className=' w-6 h-6' />}
                      
                  </button>
                  <input type={show ? `text` : `password`} name="password" id="password" className="bg-gray-50 border border-secondary px-6 py-2 focus:border-secondary rounded-3xl " />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label className="text-md font-semibold text-hitam" htmlFor="password">
                    Confirm Password
                  </label>
                  <button onClick={() => showRepasHandle()} className='absolute right-4 top-10 text-gray-500 hover:text-gray-900'>
                    {showRepas ?  <IoMdEyeOff className=' w-6 h-6' /> : <IoMdEye className=' w-6 h-6' />}
                      
                  </button>
                  <input type={showRepas ? `text` : `password`} name="repassword" id="repassword" className="bg-gray-50 border border-secondary px-6 py-2 focus:border-secondary rounded-3xl " />
                </div>
                <button  className="tracking-widest text-sm bg-secondary uppercase text-white px-6 py-3 rounded-3xl hover:ring-offset-2 hover:ring-2 hover:ring-tertiary">
                  register
                </button>
                <button onClick={() => btnLogin()} className="tracking-widest text-sm bg-secondary uppercase text-white px-6 py-3 rounded-3xl hover:ring-offset-2 hover:ring-2 hover:ring-tertiary">login</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
