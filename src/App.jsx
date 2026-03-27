import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/sections/Hero.jsx'
import Navbar from './components/layout/Navbar.jsx'
import TechStack from './components/sections/TechStack.jsx'
import Projects from './components/sections/Projects.jsx'
import About from './components/sections/About.jsx'
import Contact from './components/sections/Contact';
import Footer_img from './components/layout/Footer_img';
import Preloader from './components/layout/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#030303] min-h-screen text-white relative overflow-x-hidden md:overflow-x-visible">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <Hero isLoaded={!loading} />
      <TechStack />
      <Projects />
      <About />
      <Contact />
      <Footer_img />
    </div>
  )
}

export default App
