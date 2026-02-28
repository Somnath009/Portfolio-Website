import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:08paulsomnath@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative bg-linear-to-b from-[#0c0c0c] to-black py-16 md:py-32 px-4 md:px-6 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.08),transparent_70%)]"></div>

      {/* Heading */}
      <h2 data-aos="fade-up" className="relative text-center text-4xl md:text-5xl font-bold text-white mb-12 md:mb-20 opacity-90">
        Get in <span className="text-orange-400">Touch</span>
        <div className="w-24 h-[3px] bg-orange-400 mx-auto mt-3 rounded-full"></div>
      </h2>

      {/* Main Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* ---------------- LEFT: Contact Form ---------------- */}
        <div data-aos="fade-right" data-aos-delay="200" className="bg-white/3 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-lg shadow-[0_0_15px_rgba(255,115,0,0.15)]">

          <h3 className="text-2xl font-semibold text-white mb-6">
            Send me a message
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm text-white/70">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Somnath Paul"
                  className="w-full mt-1 p-3 rounded-xl bg-white/5 text-white border border-white/20 outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="text-sm text-white/70">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="08paulsomnath@gmail.com"
                  className="w-full mt-1 p-3 rounded-xl bg-white/5 text-white border border-white/20 outline-none focus:border-orange-400"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm text-white/70">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
                rows="6"
                className="w-full mt-1 p-3 rounded-xl bg-white/5 text-white border border-white/20 resize-none outline-none focus:border-orange-400"
              ></textarea>
            </div>

            <button type="submit" className="bg-orange-500 hover:bg-orange-600 cursor-pointer transition text-white font-semibold px-6 md:px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(255,115,0,0.25)] w-full md:w-auto mt-2">
              Send Message
            </button>
          </form>
        </div>

        {/* ---------------- RIGHT: Contact Info + Social ---------------- */}
        <div data-aos="fade-left" data-aos-delay="400" className="flex flex-col gap-6 md:gap-8">

          {/* Contact Information Card */}
          <div className="bg-white/3 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-[0_0_15px_rgba(255,115,0,0.15)]">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="flex items-start gap-4 mb-6">
              <MdLocationOn className="text-orange-400 text-2xl" />
              <p className="text-white/80 text-lg">Kolkata, West Bengal, India</p>
            </div>

            <div className="flex items-start gap-4">
              <MdEmail className="text-orange-400 text-2xl" />
              <p className="text-white/80 text-lg">08paulsomnath@gmail.com</p>
            </div>
          </div>

          {/* Social Card */}
          <div className="bg-white/3 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-[0_0_15px_rgba(255,115,0,0.15)]">
            <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>

            <div className="space-y-4">
              <a href="https://github.com/Somnath009" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-orange-400 transition">
                <FaGithub className="text-xl" /> GitHub
              </a>

              <a href="https://www.linkedin.com/in/somnath-paul-0a453322a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-orange-400 transition">
                <FaLinkedin className="text-xl" /> LinkedIn
              </a>

              <a href="https://www.instagram.com/healthycodez/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-orange-400 transition">
                <FaInstagram className="text-xl" /> Instagram
              </a>

              <a href="mailto:08paulsomnath@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-orange-400 transition">
                <MdEmail className="text-xl" /> Email
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;