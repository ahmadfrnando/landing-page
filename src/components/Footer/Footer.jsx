// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // <div className='max-w-screen bg-gradient-to-b from-white to-secondary dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600'>
    //     <div className='container py-10 flex items-center justify-center'>
    //             <p className='text-xl font-semibold dark:text-secondary'>Copyright &copy; Neighborgood 2024</p>
    //     </div>
    // </div>
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-8" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-hitam sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <Link to="/landing-page/login" className="hover:underline me-4 md:me-6">Dashboard</Link>
                </li>
                <li>
                    <a href="#info" className="hover:underline me-4 md:me-6">Info</a>
                </li>
                <li>
                    <a href="#services" className="hover:underline">Services</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Neighborgood</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer