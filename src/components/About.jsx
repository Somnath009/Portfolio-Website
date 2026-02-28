import React from "react";
import myImage from "../assets/image.png";

const About = () => {
  return (
    <section id="about" className="relative bg-[#0c0c0c] py-16 md:py-20 px-4 md:px-6 overflow-hidden">

      {/* Background Soft Orange Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.08),transparent_60%)]"></div>

      <h2 data-aos="fade-up" className="relative text-center text-4xl md:text-5xl font-bold text-white mb-12 md:mb-20 opacity-90 tracking-wide">
        About <span className="text-orange-400">Me</span>
      </h2>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 items-center">

        {/* Left: Image Card */}
        <div data-aos="fade-right" data-aos-delay="200" className="w-full lg:w-1/2 bg-white/5 border border-white/10 rounded-3xl p-4 md:p-6 backdrop-blur-md shadow-[0_0_40px_rgba(255,115,0,0.15)]">
          <img 
            src={myImage}
            alt="Somnath Paul"
            className="rounded-2xl w-full h-[350px] md:h-[450px] object-cover object-top"
          />
        </div>

        {/* Right: About Text */}
        <div data-aos="fade-left" data-aos-delay="400" className="w-full lg:w-1/2 text-white space-y-4 md:space-y-6">

          <h3 className="text-2xl md:text-3xl font-semibold opacity-95">
            Hey, I’m <span className="text-orange-400 font-bold">Somnath Paul</span>
          </h3>

          <p className="text-base md:text-lg opacity-75 leading-relaxed">
            I’m a passionate web developer who loves turning ideas into clean, 
            functional, and visually appealing digital experiences. Coding is not 
            just a skill for me-it’s a mindset of continuous growth, curiosity, 
            and creating something meaningful every day.
          </p>

          <p className="text-base md:text-lg opacity-75 leading-relaxed">
            I focus on writing readable, structured JavaScript, designing modern UI, 
            and building real-world full-stack projects. Along with development, I 
            share my journey through my brand 
            <span className="text-orange-400 font-semibold"> Healthy Codez</span> to inspire 
            beginner developers with honesty and simplicity.
          </p>

          <p className="text-base md:text-lg opacity-75 leading-relaxed">
            My long-term mission is to grow as a full-stack developer, build impactful 
            products, and continue improving both technically and personally-every 
            single day.
          </p>

          {/* Stats / Highlights */}
          <div className="pt-4 md:pt-6 grid grid-cols-2 gap-4 md:gap-6">

            <div data-aos="zoom-in" data-aos-delay="500" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-lg">
              <h4 className="text-xl md:text-2xl font-bold text-orange-400">2+</h4>
              <p className="text-xs md:text-sm opacity-70">Years Learning</p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="600" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-lg">
              <h4 className="text-xl md:text-2xl font-bold text-orange-400">15+</h4>
              <p className="text-xs md:text-sm opacity-70">Projects Built</p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="700" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-lg">
              <h4 className="text-xl md:text-2xl font-bold text-orange-400">JS</h4>
              <p className="text-xs md:text-sm opacity-70">Primary Stack</p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="800" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-lg">
              <h4 className="text-xl md:text-2xl font-bold text-orange-400">∞</h4>
              <p className="text-xs md:text-sm opacity-70">Consistency</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;