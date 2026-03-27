import React from "react";
// techData.js
import reactLogo from "../../assets/images/react.png";
import jsLogo from "../../assets/images/js.jpg";
import nodeLogo from "../../assets/images/nodeJs.png";
import mongoLogo from "../../assets/images/mongo.png";
import tailwindLogo from "../../assets/images/tailwind.png";
import githubLogo from "../../assets/images/github.jpg";

const techStack = [
  { name: "React", img: reactLogo, category: "Frontend" },
  { name: "JavaScript", img: jsLogo, category: "Language" },
  { name: "Tailwind", img: tailwindLogo, category: "Styling" },
  { name: "Node.js", img: nodeLogo, category: "Backend" },
  { name: "MongoDB", img: mongoLogo, category: "Database" },
  { name: "GitHub", img: githubLogo, category: "Tools" },
];

const TechStack = () => {
  return (
    <div className="bg-[#030303] py-24 md:py-32 overflow-hidden relative border-t border-white/5">
      {/* Background Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <p data-aos="fade-up" className="text-brand font-mono text-sm uppercase tracking-widest mb-4">The Arsenal</p>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Technologies I <span className="text-white/40 italic">master.</span>
            </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {techStack.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative flex flex-col items-center justify-center gap-2 md:gap-4 p-4 md:p-12 rounded-2xl md:rounded-3xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-linear-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img
                loading="lazy"
                src={item.img}
                alt={item.name}
                className="h-10 w-10 md:h-20 md:w-20 object-contain filter grayscale-0 opacity-100 md:grayscale md:opacity-50 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-500 transform md:group-hover:scale-110"
              />

              <div className="text-center mt-2 opacity-100 translate-y-0 md:opacity-0 md:transform md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                <p className="text-xs md:text-sm font-semibold tracking-wider text-white">
                  {item.name}
                </p>
                <p className="text-[10px] md:text-xs text-brand font-medium">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
