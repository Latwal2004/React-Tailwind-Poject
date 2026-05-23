import React from 'react'
import { useDarkMode } from './DarkModeContext'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full 
    m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center  items-start lg:gap-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>About us</h1>
          <p className='text-slate-200 text-justify'>At our company, we are dedicated to helping you find the perfect property with ease and confidence.
            With trusted services, expert guidance, and a commitment to customer satisfaction, we make your real estate journey simple, secure, and stress-free.</p>

          <div id="social-icons" className='flex justify-start items-center gap-4 mt-4'>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300'>
              <FaFacebookF className='size-5' />
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300'>
              <FaInstagram className='size-5' />
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300'>
              <FaYoutube className='size-5' />
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300'>
              <FaTwitter className='size-5' />
            </div>
          </div>

          <h1 className='text-white mt-8'>Copyright Real Estate, All Rights reserved</h1>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Contact us</h1>

          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white size-5' />
            <p className='text-slate-200'>We provide trusted real estate solutions with modern properties,
              and,expert guidance.</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white size-5' />
            <p className='text-slate-200'>+91 1800-255-25</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <FaFax className='text-white size-5' />
            <p className='text-slate-200'>1800-2555-61</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='text-white size-5' />
            <p className='text-slate-200'>real_estate@gmail.com</p>
          </div>
        </div>
        <div className='flex flex-col items-start justify-center gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop7} alt='' className='w-30 rounded-lg transform hover:scale-110
            cursor-pointer transition-all duration-300 '/>
            <div>
              <h1 className='text-lg text-white'>Villa With Amazing view</h1>
              <p className='text-slate-400'>Rs.50 Lakh</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop8} alt='' className='w-30 rounded-lg transform hover:scale-110
            cursor-pointer transition-all duration-300 '/>
            <div>
              <h1 className='text-lg text-white'>Smart View From Beach</h1>
              <p className='text-slate-400'>Rs.90 Lakh</p>
            </div>
          </div>
        </div>
      </footer>
      {/* slide-to-top-button */}
      <div id="icon-box" className='bg-red-600 p-4 rounded-full hover:bg-black  cursor-pointer fixed lg:bottom-12 bottom-6  right-6 lg:right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6 text-white' />
        </Link>
      </div>
    </>
  )
}

export default Footer