import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/image.png";

const Hero = ({ isLoaded }) => {
  const textVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      id="home"
      className="h-svh w-full relative overflow-hidden flex flex-col justify-end lg:justify-center items-start px-6 md:px-12 lg:px-24 pb-20 lg:pb-0 bg-[#030303]"
    >
      {/* Background Image Offset to Right */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={
          isLoaded ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }
        }
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full lg:w-[75%] h-full z-0 pointer-events-none"
      >
        <img
          loading="eager"
          className="w-full h-full object-cover object-[center_top] filter grayscale md:grayscale-0 opacity-60 md:opacity-80 transition-all duration-1000"
          src={image}
          alt="Hero Background"
        />

        {/* Blending Gradients */}
        <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-[#030303] via-[#030303]/70 lg:via-[#030303]/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 lg:h-1/3 bg-linear-to-t from-[#030303] via-[#030303]/80 to-transparent"></div>
      </motion.div>

      {/* Asymmetrical Huge Typography */}
      <div className="relative z-10 flex flex-col items-start justify-center pointer-events-none w-full max-w-6xl mt-auto lg:mt-0">
        <div className="overflow-hidden py-2">
          <motion.h1
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textVariants}
            className="text-[15vw] lg:text-[11vw] leading-[0.85] font-black tracking-tighter text-white uppercase text-left drop-shadow-2xl"
          >
            Creative
          </motion.h1>
        </div>
        <div className="overflow-hidden py-2">
          <motion.h1
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textVariants}
            className="text-[17vw] lg:text-[11vw] leading-[0.85] font-black tracking-tighter text-transparent uppercase text-left"
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)" }}
          >
            Director
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 md:mt-12 flex items-center gap-4"
        >
          <div className="w-10 md:w-20 h-[2px] bg-brand shadow-[0_0_10px_#ff7300]"></div>
          <p className="text-brand font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
            Crafting Premium Experiences
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
