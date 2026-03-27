import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const updateCounter = () => {
      setCounter((prev) => {
        if (prev < 100) {
          const increment = Math.floor(Math.random() * 15) + 1;
          return Math.min(prev + increment, 100);
        }
        return prev;
      });
    };

    const interval = setInterval(updateCounter, 100);

    if (counter === 100) {
      clearInterval(interval);
      setTimeout(() => {
        onComplete();
      }, 500); // Hold for 500ms at 100%
    }

    return () => clearInterval(interval);
  }, [counter, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#030303] text-white"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="overflow-hidden">
        <motion.h1 
          className="text-[15vw] md:text-[10vw] font-black uppercase tracking-tighter text-white leading-none mix-blend-difference"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        >
          {counter}%
        </motion.h1>
      </div>
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 md:w-64 h-px bg-white/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div 
          className="h-full bg-brand origin-left shadow-[0_0_10px_#ff7300]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: counter / 100 }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
