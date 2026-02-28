import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer_img from './components/Footer_img.jsx'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Contact />
        <Footer_img />
    </div>
  )
}

export default App
