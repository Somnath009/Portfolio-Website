import React from "react";
import { FiLayout, FiServer, FiCode } from "react-icons/fi";

const expertiseData = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "Crafting immersive, animated, and responsive user interfaces with modern React, Tailwind, and Framer Motion. I bring designs to life with a focus on web performance and smooth user experiences.",
    icon: <FiLayout className="w-8 h-8 text-brand" />,
  },
  {
    id: "02",
    title: "Backend Development",
    description:
      "Building scalable and robust server-side architectures. From designing RESTful APIs to managing database schemas, I architect logic-driven solutions that ensure real-time data flow and maximum security.",
    icon: <FiServer className="w-8 h-8 text-brand" />,
  },
  {
    id: "03",
    title: "Full-Stack Solutions",
    description:
      "Connecting the dots between interactive frontends and solid backends. I architect end-to-end applications that solve real-world problems, bringing a holistic approach to software development.",
    icon: <FiCode className="w-8 h-8 text-brand" />,
  },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="relative bg-[#030303] py-24 md:py-32 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 text-center md:text-left">
          <div data-aos="fade-right" className="w-full">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
              My <br className="hidden md:block" />
              <span className="text-brand italic font-light">Expertise.</span>
            </h2>
          </div>
          <div
            data-aos="fade-left"
            className="md:w-full lg:w-1/2 text-white/50 text-base md:text-lg font-light max-w-lg mx-auto md:mx-0"
          >
            I specialize in transforming complex problems into elegant,
            high-performance web applications. My focus spans across the entire
            stack to build scalable solutions.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full h-full">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-brand/30 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Background Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[60px] rounded-full group-hover:bg-brand/20 transition-all duration-500 pointer-events-none"></div>

              <div className="mb-8">{item.icon}</div>
              
              <div className="text-brand font-mono text-xs tracking-widest uppercase mb-4 opacity-70">
                // {item.id}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {item.title}
              </h3>
              
              <p className="text-white/60 font-light leading-relaxed text-sm md:text-base flex-1">
                {item.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-brand/0 via-brand/50 to-brand/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Ambient Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};

export default Expertise;
