import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../assets/images/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-shine',
      delay: 100,
    });
  }, [])
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
  <section
    id='hero'
    className='w-[95%] min-h-150 m-auto bg-cover bg-center
    rounded-3xl flex flex-col justify-center items-start
    lg:px-28 md:px-16 px-6
    gap-7 relative overflow-hidden'
    style={{ backgroundImage: `url(${heroimg})` }}
  >
<div className='relative z-10 max-w-3xl'>

      <h1
        data-aos="zoom-in"
        className='text-white font-bold
        lg:text-7xl md:text-5xl text-5xl
        lg:leading-18.75 md:leading-15 leading-12.5'
      >
        Find Your Next Home in Las Vegas
      </h1>

      <p
        data-aos="zoom-in"
        className='text-gray-200
        lg:text-xl md:text-lg text-base
        mt-4 leading-8'
      >
        Discover premium properties, modern living spaces,
        and trusted real estate solutions designed to help
        you find your perfect dream home with ease and comfort.
      </p>

    </div>
        </section>

      </div>

      {/* from starts from here */}
      <div className={`${darkMode ? " dark bg-black" : "light-bg-transparent"} z-10`}>
        <div data-aos="zoom-in" id="form" className={`${darkMode ? "dark bg-gray-800" : "light bg-white"} 
      lg:w-[70%]  w-full m-auto grid lg:grid-cols-4 grid-cols-1
        justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
          <div className='w-full'>
            <h1 className='text-black font-semibold dark:text-white'>LOCATION</h1>
            <input type="text" placeholder='Enter an address , state, city or pincode'
              className='bg-white p-2 w-full mt-2 border-b border-[#c9c7c1]'
            />
          </div>
          <div className='w-full '>
            <h1 className='text-black font-semibold dark:text-white '>TYPE</h1>
            <select name="selectOption" id="selectOption"
              className='bg-white p-2 border-b w-full  mt-2 border-[#c9c7c1]
            text-gray-500 text-md' >
              <option value="" disabled>SelectProperty</option>
              <option value="option1">Rentals</option>
              <option value="option2">Sales</option>
              <option value="option3">Commercials</option>
            </select>
          </div>

          <div className='w-full '>
            <h1 className='text-black font-semibold dark:text-white'>Category</h1>
            <select name="selectOption" id="selectOption"
              className='bg-white p-2 border-b w-full  mt-2 border-[#c9c7c1]
            text-gray-500 text-md' >
              <option value="" disabled selected>Property Category</option>
              <option value="option1">Appartments</option>
              <option value="option2">Duples</option>
              <option value="option3">Condos</option>
              <option value="option3">Condos+ 1</option>
              <option value="option3">Condos + 2</option>
            </select>
          </div>

          <div className='w-full'>
            <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white 
            dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl
            cursor-pointer transform hover: scale-110 transition-transform-300'>
              SUBMIT
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero