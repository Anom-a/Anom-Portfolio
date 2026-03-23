import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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

  // Close menu on route change / scroll
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 shadow-[0_20px_40px_rgba(96,89,135,0.06)] border-b border-white/40">
        <div className="text-xl font-bold tracking-tighter text-on-background">
          Anom Abebe
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 font-manrope font-light tracking-tight text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              // ✅ removed target="_blank" — these are anchor links, not external URLs
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

        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.resumeUrl}
            download="anom-abebe-cv.pdf"
            className="bg-gradient-to-r from-primary to-primary-dim text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest active:scale-95 transition-all duration-200 shadow-lg shadow-primary/10"
          >
            Download CV {/* ✅ fixed typo */}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-on-background p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/90 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light tracking-tight text-on-background hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}