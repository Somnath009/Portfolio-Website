import React from "react";
import { motion } from "framer-motion";
import { FiHeadphones, FiActivity, FiFigma } from "react-icons/fi";

const hobbies = [
  {
    icon: <FiHeadphones className="w-10 h-10 text-brand" />,
    title: "Music",
    description: "Whether it's lo-fi beats or high-energy tracks, music is the ultimate background score to my coding sessions.",
  },
  {
    icon: <FiActivity className="w-10 h-10 text-brand" />,
    title: "Fitness & Training",
    description: "Keeping the body active is just as important as keeping the mind sharp. I enjoy working out to stay healthy and energized.",
  },
  {
    icon: <FiFigma className="w-10 h-10 text-brand" />,
    title: "Design Enthusiast",
    description: "Obsessed with pixel-perfect layouts, typography, and creating seamless user experiences.",
  },
];

const marqueeText = " DESIGN < CODE < FITNESS < MUSIC < ART < DESIGN < CODE < FITNESS < MUSIC < ART < ";

const BeyondCoding = () => {
  return (
    <section className="relative bg-[#030303] pt-24 md:pt-32 overflow-hidden border-t border-white/5">
      {/* Background Ambient Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Beyond <span className="text-brand italic font-light">Coding.</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/50 text-base md:text-lg max-w-2xl mx-auto font-light">
            When I'm not writing functions or debugging endpoints, here is what keeps me inspired and energized.
          </p>
        </div>

        {/* Hobby Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {hobbies.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative p-8 md:p-10 bg-[#111] border border-white/10 rounded-3xl hover:-translate-y-2 transition-transform duration-500 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Subtle top border glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:scale-110 group-hover:bg-brand/10 transition-all duration-500">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="relative mt-24 md:mt-32 border-y border-white/5 py-8 md:py-12 flex rotate-0 md:-rotate-2 scale-105 bg-[#0a0a0a] z-0 overflow-hidden">
        <div className="absolute inset-0 bg-brand/5"></div>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
          className="flex whitespace-nowrap will-change-transform"
        >
          {/* Repeating the text a few times to ensure a smooth loop */}
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-black text-transparent uppercase mx-4 tracking-wider"
              style={{ WebkitTextStroke: "1px rgba(255,115,0,0.5)" }} /* text-brand stroke */
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default BeyondCoding;
