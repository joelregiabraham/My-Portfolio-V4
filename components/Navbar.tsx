"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [mounted,  setMounted]    = useState(false);
  const { theme, setTheme }       = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 backdrop-blur-xl border-b"
            : "py-5"
        }`}
        style={scrolled ? {
          background: "rgba(var(--bg-rgb, 9,9,15), 0.85)",
          borderColor: "var(--border)",
        } : undefined}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}>
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight hidden sm:block" style={{ color: "var(--text-1)" }}>
              Joel<span className="gradient-text">RA</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:text-indigo-400"
                  style={{ color: "var(--text-2)" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ color: "var(--text-2)", background: "var(--surface-2, var(--surface))" }}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark"
                ? <Sun size={18} />
                : <Moon size={18} />
              }
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-200"
              style={{ color: "var(--text-2)", background: "var(--surface)" }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 md:hidden border-b"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:text-indigo-400"
                    style={{ color: "var(--text-1)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
