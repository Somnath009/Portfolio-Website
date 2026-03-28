import React from "react";
import myImage from "../../assets/images/image2.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#030303] py-24 md:py-40 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
        {/* Left: Huge Text & Bio */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
            A blend of <br />
            <span className="text-brand italic font-light">art</span> &{" "}
            <span className="text-brand italic font-light">code.</span>
          </h2>

          <div className="space-y-6 text-white/60 text-base md:text-lg font-light leading-relaxed max-w-lg">
            <p>
              I’m a passionate web developer who loves turning ideas into clean,
              functional, and visually appealing digital experiences. Coding is
              not just a skill for me—it’s a mindset of continuous growth,
              curiosity, and creating something meaningful.
            </p>
            <p>
              I focus on writing readable, structured JavaScript, designing
              modern UI, and building real-world full-stack projects. Along with
              development, I share my journey through my brand{" "}
              <span className="text-white font-medium">Healthy Codez</span> to
              inspire beginner developers with honesty and simplicity.
            </p>
          </div>

          {/* Brutalist Stats */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 mt-12 pt-12 border-t border-white/10">
            <div>
              <h4 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                2<span className="text-brand">+</span>
              </h4>
              <p className="text-brand text-xs uppercase tracking-widest font-mono">
                Years Exp
              </p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                15<span className="text-brand">+</span>
              </h4>
              <p className="text-brand text-xs uppercase tracking-widest font-mono">
                Projects
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image Card with sophisticated frame */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="w-full lg:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative aspect-4/5 w-full max-w-md mx-auto group perspective overflow-hidden rounded-4xl">
            <img
              loading="lazy"
              src={myImage}
              alt="Somnath Paul"
              className="w-full h-full object-cover object-top filter grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-700 transform md:group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-white/10 rounded-4xl z-10 pointer-events-none"></div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-transparent opacity-60 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
