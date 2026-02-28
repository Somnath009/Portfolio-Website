import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import image from '../assets/image.png'

const Hero = () => {
  return (
    <div id="home" className='h-svh md:h-230 w-full relative overflow-hidden'>
        <img className='w-full h-full object-cover object-top' src={image} alt="Hero Image" />

        <div className="absolute  inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className='absolute top-20 sm:top-24 md:top-32 lg:top-1/4 left-6 sm:left-10 md:left-14 lg:left-20'
        >
        <h3 className='text-amber-50 text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold font-stretch-108% opacity-75'>Hey, i'm a</h3>
        <h1 className='text-amber-50 text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold flex flex-col mt-2 sm:mt-3 lg:mt-5 font-stretch-108% opacity-80 whitespace-nowrap leading-tight'>
          <span>Creative</span>
          <span>Director</span></h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          className='absolute top-[45%] sm:top-[42%] md:top-[45%] lg:top-1/2 right-6 sm:right-10 md:right-12 lg:right-15'
        >
          <h3 className='text-amber-50 text-xl sm:text-2xl md:text-3xl lg:text-5xl/14 font-semibold flex flex-col font-stretch-108% opacity-85 text-right md:text-left mt-0'>
            <span>Great design should</span>
            <span>feel invisible.</span></h3>
          <p className='text-amber-50 mt-2 sm:mt-4 lg:mt-8 text-xs sm:text-sm md:text-base font-mono opacity-45 text-right md:text-left max-w-[200px] sm:max-w-[280px] lg:max-w-none ml-auto'>From logo to language, I bulid brands that <br className='hidden md:block' />connect and convert.</p>
        </motion.div>
    
        <div className='absolute bottom-6 sm:bottom-10 lg:bottom-1 left-0 w-full flex flex-wrap lg:flex-nowrap justify-around px-4 lg:px-0 gap-y-6 lg:gap-y-4'>
          {[
            { id: "01", title: "Frontend Developer" },
            { id: "02", title: "UI/UX Designer" },
            { id: "03", title: "JavaScript Developer" },
            { id: "04", title: "Creative Designer" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              className='flex flex-col gap-1 sm:gap-2 lg:gap-4 lg:mb-10 text-amber-100 w-[45%] lg:w-auto text-center lg:text-left'
            >
              <h4 className='font-bold text-base sm:text-lg lg:text-xl opacity-85'><span className='text-orange-400'>#</span>{stat.id}</h4>
              <p className='opacity-65 text-xs sm:text-sm lg:text-lg mb-0 lg:mb-5 leading-tight'>{stat.title}</p>
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default Hero
