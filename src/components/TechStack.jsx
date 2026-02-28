// techData.js
import reactLogo from "../assets/react.png";
import jsLogo from "../assets/js.jpg";
import nodeLogo from "../assets/nodeJs.png";
import mongoLogo from "../assets/mongo.png";
import tailwindLogo from "../assets/tailwind.png";
import githubLogo from "../assets/github.jpg";

const techStack = [
  { name: "React", img: reactLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "TailwindCSS", img: tailwindLogo },
  { name: "Node.js", img: nodeLogo },
  { name: "MongoDB", img: mongoLogo },
  { name: "GitHub", img: githubLogo },
];

const TechStack = () => {
  return (
    <div className="bg-[#0b0b0b] py-16 md:py-20 overflow-hidden">
      <h2 data-aos="fade-up" className="relative text-orange-400 font-mono text-2xl md:text-3xl text-center font-semibold opacity-80 mb-8 md:mb-12 tracking-wide">
        I build interactive web apps using
      </h2>

      {/* Tech Grid */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-10 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-white">
        {techStack.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="flex flex-col items-center gap-2 md:gap-4 p-4 md:p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-orange-700
      hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,115,0,0.25)]"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-16 w-16 md:h-24 md:w-24 object-contain"
            />

            <p className="text-sm md:text-md opacity-75 font-normal tracking-wide text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
