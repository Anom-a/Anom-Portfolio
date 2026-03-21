import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import TimelineItem from "./components/TimelineItem";
import { PORTFOLIO_DATA } from "./constants";

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-2xl shadow-primary/30 hover:bg-primary-dim transition-all active:scale-95"
          >
            <ChevronDown className="rotate-180" size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-8 overflow-hidden">
        {/* Background Lavender Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] orb-glow opacity-30 -z-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] orb-glow opacity-20 -z-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Sentient Orb Graphic */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-64 h-64 mb-16"
        >
          <div className="absolute inset-0 bg-primary-container/40 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-full h-full bg-white/40 backdrop-blur-xl rounded-full border border-white/40 flex items-center justify-center shadow-2xl">
            <div className="w-32 h-32 bg-gradient-to-tr from-primary to-primary-container rounded-full opacity-80 blur-sm" />
          </div>
        </motion.div>
        
        <div className="text-center max-w-4xl z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-[5.5rem] font-bold text-on-background tracking-tighter leading-[1.1] mb-8"
          >
            Hello, I'm {PORTFOLIO_DATA.name}.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed max-w-2xl mx-auto"
          >
            {PORTFOLIO_DATA.tagline.split('intersection of')[0]} intersection of <span className="text-primary font-medium italic">intelligence</span> and <span className="text-primary font-medium italic">design</span>.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <a href="#identity" className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Discovery</span>
            <ChevronDown className="text-primary animate-bounce" />
          </a>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section id="identity" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-7">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-6 text-sm">Identity</h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold text-on-background mb-8 leading-tight"
            >
              {PORTFOLIO_DATA.about.headline}
            </motion.h3>
            <div className="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed">
              <p>{PORTFOLIO_DATA.about.description1}</p>
              <p>{PORTFOLIO_DATA.about.description2}</p>
            </div>
          </div>
          
          <div className="md:col-span-5 pt-12 md:pt-24">
            <div className="flex flex-wrap gap-3">
              {PORTFOLIO_DATA.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 bg-white shadow-[0_10px_30px_rgba(96,89,135,0.04)] rounded-xl text-xs font-bold text-on-background tracking-wider border border-white/60"
                >
                  {skill.toUpperCase()}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section id="evolution" className="py-32 bg-surface-container-low/30">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">Evolution</h2>
            <h3 className="text-4xl font-bold text-on-background">Professional Lineage</h3>
          </div>
          
          <div className="relative space-y-12">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />
            {PORTFOLIO_DATA.journey.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-center text-sm">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-on-background text-center tracking-tight">Digital Artefacts</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div key={project.id} className={index % 2 !== 0 ? 'md:mt-16' : ''}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="connect" className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-20 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_40px_80px_rgba(96,89,135,0.08)] overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 orb-glow opacity-40 blur-3xl" />
            
            <div className="relative z-10 text-center mb-16">
              <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">Connect</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-on-background mb-4">Let's create together.</h3>
              <p className="text-on-surface-variant font-light">Available for select collaborations and digital consulting.</p>
            </div>
            
            <form className="relative z-10 space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-primary mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b-2 border-surface-container-highest focus:border-primary focus:outline-none px-0 py-3 text-on-background font-light transition-colors placeholder:text-surface-container-highest"
                    placeholder="Julian Smith"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-primary mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b-2 border-surface-container-highest focus:border-primary focus:outline-none px-0 py-3 text-on-background font-light transition-colors placeholder:text-surface-container-highest"
                    placeholder="hello@luminous.com"
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-primary mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold">Project Inquiry</label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-surface-container-highest focus:border-primary focus:outline-none px-0 py-3 text-on-background font-light transition-colors placeholder:text-surface-container-highest resize-none"
                  placeholder="Tell me about your vision..."
                />
              </div>
              <div className="pt-6">
                <button className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary-dim active:scale-95 transition-all font-bold">
                  Send Transmission
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-12 px-8 bg-background border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-on-background">Luminous Portfolio</div>
        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 font-bold">
          © 2024 Luminous Ether. All rights reserved. Status: Aliveness Active.
        </div>
        <div className="flex gap-8 items-center">
          <button 
            onClick={handleCopyEmail}
            className="text-[10px] uppercase tracking-widest text-primary font-bold hover:underline underline-offset-4 transition-all"
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
          <a href={PORTFOLIO_DATA.contact.linkedin} className="opacity-50 hover:opacity-100 hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href={PORTFOLIO_DATA.contact.github} className="opacity-50 hover:opacity-100 hover:text-primary transition-colors"><Github size={18} /></a>
          <a href={PORTFOLIO_DATA.contact.twitter} className="opacity-50 hover:opacity-100 hover:text-primary transition-colors"><Twitter size={18} /></a>
          <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="opacity-50 hover:opacity-100 hover:text-primary transition-colors"><Mail size={18} /></a>
        </div>
      </footer>
    </div>
  );
}
