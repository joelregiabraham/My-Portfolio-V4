"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Education"
          title="Academic Background"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="grad-border rounded-2xl p-6 group"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
              >
                <GraduationCap size={22} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold leading-snug" style={{ color: "var(--text-1)" }}>
                  {edu.degree}
                </h3>
                {edu.current && <Badge color="indigo">Current</Badge>}
              </div>

              <p className="text-sm font-semibold mb-3" style={{ color: "var(--grad-a)" }}>
                {edu.institution}
              </p>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-3)" }}>
                  <MapPin size={13} />
                  {edu.location}
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-3)" }}>
                  <Calendar size={13} />
                  {edu.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
