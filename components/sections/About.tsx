"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Users } from "lucide-react";
import { personal } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";

const iconMap = [Briefcase, GraduationCap, Users, MapPin];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32" style={{ background: "var(--surface-2, var(--bg))" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <SectionTitle
              eyebrow="About Me"
              title="Building software that ships"
              subtitle={personal.about}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 mt-6"
              style={{ color: "var(--text-2)" }}
            >
              <MapPin size={16} className="text-indigo-400 flex-shrink-0" />
              <span className="text-sm">{personal.location}</span>
            </motion.div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {personal.highlights.map((item, i) => {
              const Icon = iconMap[i] ?? Briefcase;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="grad-border p-5 rounded-2xl group cursor-default"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))" }}
                  >
                    <Icon size={20} style={{ color: "var(--grad-a)" }} />
                  </div>
                  <div className="text-xl font-bold mb-0.5" style={{ color: "var(--text-1)" }}>
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: "var(--grad-a)" }}>
                    {item.label}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-3)" }}>
                    {item.sub}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
