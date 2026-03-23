import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import TimelineItem from "./components/TimelineItem";
import { PORTFOLIO_DATA } from "./constants";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const recipient = PORTFOLIO_DATA.contact.email;
    if (!recipient) {
      window.alert("Contact email is not configured yet.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setContactForm({ name: "", email: "", message: "" });
  };

  // Flatten skillGroups into a single list for the skills cloud
  const allSkills = Object.values(PORTFOLIO_DATA.skillGroups).flat();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-24 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-2xl shadow-primary/30 hover:bg-primary-dim transition-all active:scale-95"
          >
            <ChevronDown className="rotate-180" size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-8 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] orb-glow opacity-30 -z-10 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] orb-glow opacity-20 -z-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-64 h-64 mb-16"
        >
          <div className="absolute inset-0 bg-primary-container/40 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-full h-full bg-white/40 backdrop-blur-xl rounded-full border border-white/40 flex items-center justify-center shadow-2xl">
            <img
              src="/anomabebe.jpg"
              alt="Anom Abebe"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        <div className="text-center max-w-4xl z-10">
          {/* ✅ availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary-container/30 border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              {PORTFOLIO_DATA.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-[5.5rem] font-bold text-on-background tracking-tighter leading-[1.1] mb-4"
          >
            Hello, I'm {PORTFOLIO_DATA.name}.
          </motion.h1>

          {/* ✅ title line — no more hardcoded split */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-bold tracking-widest text-primary uppercase mb-6"
          >
            {PORTFOLIO_DATA.title}
          </motion.p>

          {/* ✅ tagline renders directly — no fragile string split */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed max-w-2xl mx-auto"
          >
            {PORTFOLIO_DATA.tagline}
          </motion.p>

          {/* ✅ CTA buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <a
              href="#projects"
              className="bg-primary text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest font-bold shadow-lg shadow-primary/20 hover:bg-primary-dim active:scale-95 transition-all"
            >
              See my work
            </a>
            <a
              href="#connect"
              className="border border-primary/30 text-primary px-8 py-3 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-primary-container/20 active:scale-95 transition-all"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* ✅ removed target="_blank" — this is an anchor scroll link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <a
            href="#identity"
            className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold">
              Discovery
            </span>
            <ChevronDown className="text-primary animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* ─── Identity / About ─────────────────────────────── */}
      <section id="identity" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-7">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-6 text-sm">
              Identity
            </h2>
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

            {/* ✅ skill groups — replaces flat skills array */}
            <div className="mt-12 space-y-6">
              {Object.entries(PORTFOLIO_DATA.skillGroups).map(([group, skills]) => (
                <div key={group}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-3">
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white shadow-[0_10px_30px_rgba(96,89,135,0.04)] rounded-xl text-xs font-bold text-on-background tracking-wider border border-white/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ skills cloud on the right — driven from skillGroups */}
          <div className="md:col-span-5 pt-12 md:pt-24">
            <div className="flex flex-wrap gap-3">
              {allSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="px-6 py-3 bg-white shadow-[0_10px_30px_rgba(96,89,135,0.04)] rounded-xl text-xs font-bold text-on-background tracking-wider border border-white/60"
                >
                  {skill.toUpperCase()}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Evolution / Journey ──────────────────────────── */}
      <section id="evolution" className="py-32 bg-surface-container-low/30">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              Evolution
            </h2>
            <h3 className="text-4xl font-bold text-on-background">
              Professional Lineage
            </h3>
          </div>

          <div className="relative space-y-12">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />
            {PORTFOLIO_DATA.journey.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects ─────────────────────────────────────── */}
      <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-center text-sm">
            Selected Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-on-background text-center tracking-tight">
            Digital Artefacts
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div key={project.id} className={index % 2 !== 0 ? "md:mt-16" : ""}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Connect ──────────────────────────────────────── */}
      <section id="connect" className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-20 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_40px_80px_rgba(96,89,135,0.08)] overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 orb-glow opacity-40 blur-3xl" />

            <div className="relative z-10 text-center mb-16">
              <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Connect
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-on-background mb-4">
                Let's build something.
              </h3>
              {/* ✅ honest copy — student looking for roles, not a consultant */}
              <p className="text-on-surface-variant font-light">
                Open to remote internships, junior backend roles, and interesting
                collaborations. I reply to every message.
              </p>
            </div>

            <form
              className="relative z-10 space-y-10"
              onSubmit={handleContactSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-primary mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    required
                    className="w-full bg-transparent border-b-2 border-surface-container-highest focus:border-primary focus:outline-none px-0 py-3 text-on-background font-light transition-colors placeholder:text-surface-container-highest"
                    placeholder="Your name"  // ✅ removed Jake Paul
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-primary mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    required
                    className="w-full bg-transparent border-b-2 border-surface-container-highest focus:border-primary focus:outline-none px-0 py-3 text-on-background font-light transition-colors placeholder:text-surface-container-highest"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-primary mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold">
                  Message {/* ✅ removed "Project Inquiry" — too narrow */}
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactFormChange}
                  required
                  className="w-full bg-transparent border-b-2 border-surface-container-highest focus:border-primary focus:outline-none px-0 py-3 text-on-background font-light transition-colors placeholder:text-surface-container-highest resize-none"
                  placeholder="What are you working on?"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary-dim active:scale-95 transition-all font-bold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Footer ───────────────────────────────────────── */}
      <footer className="w-full py-12 px-8 bg-background border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-on-background">Anom Abebe</div>

        {/* ✅ fixed year + removed "Status: Aliveness Active" */}
        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 font-bold">
          © {new Date().getFullYear()} Anom Abebe. All rights reserved.
        </div>

        <div className="flex gap-8 items-center">
          <button
            onClick={handleCopyEmail}
            className="text-[10px] uppercase tracking-widest text-primary font-bold hover:underline underline-offset-4 transition-all"
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
          <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href={PORTFOLIO_DATA.contact.twitter} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
          <a href={PORTFOLIO_DATA.contact.telegram} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:text-primary transition-colors">
            <Send size={18} />
          </a>
          <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="opacity-50 hover:opacity-100 hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}