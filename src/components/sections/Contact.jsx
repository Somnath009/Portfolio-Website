import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";
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
    <section id="contact" className="relative bg-[#030303] py-24 md:py-40 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">

        {/* Info Side */}
        <div data-aos="fade-right" className="w-full md:w-[45%] flex flex-col justify-between">
            <div>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
                    Let's <br/><span className="text-transparent" style={{ WebkitTextStroke: '2px #ff7300' }}>Talk.</span>
                </h2>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-12 max-w-sm">
                    Have a project in mind, or just want to say hi? I'm always open to discussing new ideas and opportunities.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand transition-colors">
                        <MdEmail className="text-brand text-xl" />
                    </div>
                    <div>
                        <p className="text-white/40 text-xs font-mono tracking-widest uppercase mb-1">Email</p>
                        <a href="mailto:08paulsomnath@gmail.com" className="text-white text-lg hover:text-brand transition-colors">08paulsomnath@gmail.com</a>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand transition-colors">
                        <MdLocationOn className="text-brand text-xl" />
                    </div>
                    <div>
                        <p className="text-white/40 text-xs font-mono tracking-widest uppercase mb-1">Location</p>
                        <p className="text-white text-lg">Kolkata, India</p>
                    </div>
                </div>

                <div className="pt-8 flex gap-6">
                    {[
                        { icon: FaGithub, link: "https://github.com/Somnath009" },
                        { icon: FaLinkedin, link: "https://www.linkedin.com/in/somnath-paul-0a453322a" },
                        { icon: FaInstagram, link: "https://www.instagram.com/healthycodez/" }
                    ].map((IconRef, i) => (
                        <a key={i} href={IconRef.link} target="_blank" rel="noopener noreferrer" 
                           className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand hover:text-black transition-all">
                            <IconRef.icon size={16} />
                        </a>
                    ))}
                </div>
            </div>
        </div>

        {/* Form Side */}
        <div data-aos="fade-left" data-aos-delay="200" className="w-full md:w-[55%]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="relative group">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required 
                           className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-xl md:text-2xl focus:outline-none focus:border-brand transition-colors placeholder:text-white/20" 
                           placeholder="What's your name?" />
                </div>
                <div className="relative group">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required 
                           className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-xl md:text-2xl focus:outline-none focus:border-brand transition-colors placeholder:text-white/20" 
                           placeholder="What's your email?" />
                </div>
                <div className="relative group">
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="4"
                           className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-xl md:text-2xl focus:outline-none focus:border-brand transition-colors resize-none placeholder:text-white/20" 
                           placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="submit" className="group self-start flex items-center gap-4 mt-4">
                    <span className="text-white text-lg font-medium tracking-wide group-hover:text-brand transition-colors">Send Message</span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand group-hover:bg-brand group-hover:text-black transition-all text-brand">
                        <FaArrowRight />
                    </div>
                </button>
            </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;