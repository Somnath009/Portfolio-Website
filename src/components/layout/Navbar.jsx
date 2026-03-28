import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../assets/styles/nav.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-6"} px-4 md:px-12`}
    >
      <div
        className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 ${scrolled ? "bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "bg-transparent px-2 py-2"}`}
      >
        {/* LOGO */}
        <h1
          className="font-sans text-white text-xl md:text-2xl font-bold tracking-tighter cursor-pointer select-none group flex items-center gap-1.5"
          onClick={(e) => handleScroll(e, "home")}
        >
          <span className="w-2 h-2 rounded-full bg-brand group-hover:scale-150 transition-transform duration-300"></span>
          Somnath<span className="opacity-50 font-normal">Paul</span>
        </h1>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-10 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 backdrop-blur-md">
          {["home", "projects", "about"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleScroll(e, item)}
              className="relative text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 group overflow-hidden py-1"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={(e) => handleScroll(e, "contact")}
          className="relative overflow-hidden bg-white text-black px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold group cursor-pointer"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Let's Talk
          </span>
          <div className="absolute inset-0 bg-brand translate-y-full rounded-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1] z-0"></div>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
