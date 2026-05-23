import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {FaXmark,FaBars, FaX} from 'react-icons/fa6'
import logo from '../assets/images/logo.png'
import { useDarkMode } from './DarkModeContext'
import { FaPhoneAlt, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa'
const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu=()=>{
      setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = ()=>{
      setIsMenuOpen(false);
    }
    const navItems = [
      {
        link:'Home', path:'home'
      },
      {
        link:'About', path:'about'
      },
      {
        link:'Properties', path:'properties'
      },
      {
        link:'Services', path:'services'
      },
      {
        link:'Testimonials', path:'testimonials'
      },
      {
        link:'Contact', path:'contact'
      },
    ]
  return (
    <nav className={`${darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'} flex
    justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
      <div id="logo">
        <img src={logo} alt='company' className='lg:w-37.5 w-30 dark:invert'/>
      </div>

      <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {navItems.map(({link,path}) =>(
          <Link key={path} className='text-black text-[15px] uppercase font-semibold cursor-pointer
          px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white' to={path} spy={true}  offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      {/* for mobile display */}

        <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
          <div>
            {isMenuOpen ? <FaXmark className='text-black dark:text-white text-2xl cursor-pointer'/> : <FaBars className='text-black dark:text-white text-2xl cursor-pointer'/>}
          </div>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-20 left-0`} 
        onClick={closeMenu}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({link,path}) =>(
              <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 
              rounded-lg hover:bg-red-600 hover:text-black w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
            ))}

          </ul>

        </div>
<div className='flex justify-center items-center lg:gap-6 gap-3'>

  <div className='hidden md:flex justify-center items-center lg:gap-3 gap-1'>
    <FaPhoneAlt className='size-5 text-red-600'/>

    <h1 className='lg:text-lg text-sm text-black dark:text-white font-semibold whitespace-nowrap'>
      +91 94640 0010
    </h1>
  </div>

  <FaUserCircle className='size-6 text-red-600 cursor-pointer'/>

  <button 
    onClick={toggleDarkMode}
    className='flex items-center justify-center
    w-10 h-10 rounded-full
    bg-orange-500 hover:bg-orange-600
    transition-all duration-300 shadow-lg cursor-pointer'
  >
    {
      darkMode ? (
        <FaSun className='text-white text-lg'/>
      ) : (
        <FaMoon className='text-black text-lg'/>
      )
    }
  </button>

</div>
    </nav>
  )
}

export default Header