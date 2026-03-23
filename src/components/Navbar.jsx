import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "../constants";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Identity", href: "#identity" },
    { name: "Evolution", href: "#evolution" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#connect" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ["identity", "evolution", "projects", "connect"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 shadow-[0_20px_40px_rgba(96,89,135,0.06)] border-b border-white/40">
      <div className="text-xl font-bold tracking-tighter text-on-background">
        Anom Abebe
      </div>
      
      <div className="hidden md:flex items-center gap-10 font-manrope font-light tracking-tight text-sm">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-on-background transition-all duration-300 ${
              activeSection === item.href.slice(1)
                ? "opacity-100 text-primary font-medium"
                : "opacity-70 hover:opacity-100 hover:text-primary"
            }`}
          >
            {item.name}
            {activeSection === item.href.slice(1) && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>
      
      <a
        href={PORTFOLIO_DATA.resumeUrl}
        download="anomabebe.pdf"
        className="bg-gradient-to-r from-primary to-primary-dim text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest active:scale-95 transition-all duration-200 shadow-lg shadow-primary/10"
      >
        Download CV
      </a>
    </nav>
  );
}
