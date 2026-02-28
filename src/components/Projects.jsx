import React from "react";
import case1 from "../assets/bg1.jpg";
import case2 from "../assets/bg2.jpg";
import case3 from "../assets/bg3.png";
import case4 from "../assets/bg4.jpg";

const caseStudies = [
  {
    number: "01",
    title: "MAC OS Style Portfolio Website",
    description:
      "I created a portfolio website that mimics the look and feel of macOS. It features a dock, a menu bar, and a window-based interface that allows users to navigate through my projects and learn more about me.",
    image: case1,
    live: "https://mac-os-style-portfolio-fawn.vercel.app/",
    repo: "https://github.com/Somnath009/MAC-OS-Style-Portfolio",
  },
  {
    number: "02",
    title: "Image Editing Website",
    description:
      "I created an image editing website that allows users to edit their images in a simple and intuitive way. It features a variety of tools that allow users to edit their images in a variety of ways.",
    image: case2,
    live: "https://somnath009.github.io/Image-Editor/",
    repo: "https://github.com/Somnath009/Image-Editor",
  },
  {
    number: "03",
    title: "A Fun Snake Game",
    description:
      "I created a snake game that is fun to play and easy to learn. It features a variety of power-ups that allow users to edit their images in a variety of ways.",
    image: case3,
    live: "https://somnath009.github.io/Snake_Game_V2/",
    repo: "https://github.com/Somnath009/Snake_Game_V2",
  },
  {
    number: "04",
    title: "A Productive Task Management Website",
    description:
      "I created a task management website that allows users to manage their tasks in a simple and intuitive way. It features a variety of tools that allow users to manage their tasks in a variety of ways.",
    image: case4,
    live: "https://somnath009.github.io/Task-Board/",
    repo: "https://github.com/Somnath009/Task-Board",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        min-h-screen h-auto
        w-full py-16 md:py-28
        bg-[#0b0b0b]
        relative
      "
    >
      <h2
        data-aos="fade-up"
        className="relative text-orange-400 text-3xl md:text-4xl text-center font-semibold font-mono opacity-80 mb-8 md:mb-12 tracking-wide"
      >
        Projects
      </h2>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {caseStudies.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="sticky top-[10vh] md:top-[18vh] mb-[15vh] md:mb-[25vh]"
            style={{ zIndex: index + 1 }}
          >
            <div
              className="
                bg-[#111]
                rounded-3xl p-5 md:p-10
                flex flex-col lg:flex-row
                gap-12 shadow-xl border border-orange-700
              "
            >
              {/* IMAGE */}
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">
                  {item.number}
                </p>

                <h2 className="mt-2 text-xl md:text-3xl font-Lausanne-500 text-white leading-snug">
                  {item.title}
                </h2>

                <p className="mt-3 md:mt-4 text-gray-300 leading-relaxed text-sm md:text-[15px]">
                  {item.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="
                        mt-8 bg-green-500/90
                        text-black font-semibold hover:bg-green-500/70
                        px-6 py-2 rounded-full
                        w-fit transition-all
                        cursor-pointer shadow-md hover:shadow-lg
                      "
                    >
                      Live Preview
                    </button>
                  </a>

                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="
                        mt-8 bg-green-500/90
                        text-black font-semibold hover:bg-green-500/70
                        px-6 py-2 rounded-full
                        w-fit transition-all
                        cursor-pointer shadow-md hover:shadow-lg
                      "
                    >
                      Repository Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="h-[70vh]" />
      </div>
    </section>
  );
};

export default Projects;