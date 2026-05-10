"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personal } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    desc: "Drop me an email",
    color: "indigo",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/joel-regi-abraham",
    href: personal.linkedin,
    desc: "Connect professionally",
    color: "violet",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/joelregiabraham",
    href: personal.github,
    desc: "See my code",
    color: "cyan",
  },
];

const glowColor: Record<string, string> = {
  indigo: "rgba(99,102,241,0.15)",
  violet: "rgba(168,85,247,0.15)",
  cyan:   "rgba(6,182,212,0.15)",
};

const iconBg: Record<string, string> = {
  indigo: "rgba(99,102,241,0.15)",
  violet: "rgba(168,85,247,0.15)",
  cyan:   "rgba(6,182,212,0.15)",
};

const iconColor: Record<string, string> = {
  indigo: "#818cf8",
  violet: "#c084fc",
  cyan:   "#22d3ee",
};

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32" style={{ background: "var(--surface-2, var(--bg))" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionTitle
            eyebrow="Contact"
            title="Let's work together"
            subtitle="I'm open to software engineering roles, freelance projects, and collaboration opportunities. Reach out through any of the channels below."
            center
          />
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative grad-border rounded-3xl p-8 sm:p-12 mb-10 text-center overflow-hidden"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 60%)" }}
          />

          <div className="relative">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
              style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
            >
              <Send size={22} className="text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "var(--text-1)" }}>
              Open to new opportunities
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: "var(--text-2)" }}>
              Whether it&apos;s a full-time role, co-op, or an interesting project — let&apos;s talk.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))",
                boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
              }}
            >
              <Mail size={16} />
              Say hello
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Link cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: `0 12px 40px ${glowColor[link.color]}`, transition: { duration: 0.2 } }}
                className="group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: iconBg[link.color] }}
                >
                  <Icon size={20} style={{ color: iconColor[link.color] }} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-3)" }}>
                    {link.desc}
                  </div>
                  <div className="text-sm font-medium truncate" style={{ color: "var(--text-1)" }}>
                    {link.value}
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                  style={{ color: iconColor[link.color] }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
