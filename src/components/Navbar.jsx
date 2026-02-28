import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './nav.css'

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className='fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm'
    >
        <div className='h-20 w-full flex items-center justify-between px-5 md:px-10 py-5'>
            <h1 className='font-sans text-white text-xl md:text-2xl font-semibold font-stretch-108% opacity-82 whitespace-nowrap'>Somnath Paul</h1>

            <div className='flex items-center gap-4 md:gap-10 lg:gap-20'>

            <div className=' links hidden md:flex items-center gap-4 md:gap-10 lg:gap-20 text-white'>
                <a href="#home" onClick={(e) => handleScroll(e, 'home')}>
                  Home
                  <span id='line1' className='line'></span>
                  <span id='line2' className='line'></span>
                  </a>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
                  Projects
                  <span id='line1' className='line'></span>
                  <span id='line2' className='line'></span>
                  </a>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
                  About
                  <span id='line1' className='line'></span>
                  <span id='line2' className='line'></span>
                  </a>
            </div>

            <button 
              onClick={(e) => handleScroll(e, 'contact')}
              className='bg-white text-orange-500 px-4 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full hover:bg-orange-600 hover:text-white font-semibold opacity-85 cursor-pointer md:mt-2 transition-all ease-linear whitespace-nowrap'
            >
              Get in touch
            </button>

            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar
