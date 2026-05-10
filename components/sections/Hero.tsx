"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personal } from "@/lib/data";

const roles = [
  "Software Developer",
  "Android Developer",
  "IT Professional",
  "Full-Stack Engineer",
  "Cloud Architect",
  "ML Engineer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10 animate-orb"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full opacity-15 dark:opacity-8 animate-orb-delay"
          style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-5 animate-spin-slow"
          style={{ background: "conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #6366f1)", filter: "blur(100px)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(var(--text-1) 1px, transparent 1px), linear-gradient(90deg, var(--text-1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border"
          style={{
            background: "rgba(99,102,241,0.08)",
            borderColor: "rgba(99,102,241,0.2)",
            color: "var(--grad-a)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 leading-[1.05]"
          style={{ color: "var(--text-1)" }}
        >
          {personal.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "gradient-text" : ""}>{word}{" "}</span>
          ))}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-0 text-2xl sm:text-3xl font-semibold mb-6 h-10"
          style={{ color: "var(--text-2)" }}
        >
          <span className="shimmer-text">{displayed}</span>
          <span className="animate-blink ml-0.5 text-indigo-400">|</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "var(--text-2)" }}
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="group relative px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            style={{
              background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))",
              boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
            }}
          >
            <span className="flex items-center gap-2">
              View My Work
              <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-3.5 rounded-xl text-sm font-semibold border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            style={{
              color: "var(--text-1)",
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: personal.github,   icon: GithubIcon,   label: "GitHub" },
            { href: personal.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border transition-all duration-300 hover:scale-110 hover:border-indigo-500/50 hover:text-indigo-400"
              style={{
                color: "var(--text-2)",
                border: "1px solid var(--border)",
                background: "var(--surface)",
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float"
        style={{ color: "var(--text-3)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
