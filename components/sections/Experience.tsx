"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Hands-on experience building enterprise tools and supporting production IT operations."
        />

        <div className="mt-14 relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, var(--grad-a), transparent)" }}
          />

          <div className="flex flex-col gap-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-5 w-5 h-5 rounded-full border-2 items-center justify-center hidden sm:flex"
                  style={{
                    background: job.current
                      ? "linear-gradient(135deg, var(--grad-a), var(--grad-b))"
                      : "var(--surface)",
                    borderColor: job.current ? "transparent" : "var(--border)",
                    zIndex: 1,
                  }}
                >
                  {job.current && (
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="grad-border rounded-2xl p-6 sm:p-7 group"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))" }}
                    >
                      <Briefcase size={18} style={{ color: "var(--grad-a)" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base font-bold" style={{ color: "var(--text-1)" }}>
                          {job.role}
                        </h3>
                        {job.current && <Badge color="indigo">Current</Badge>}
                      </div>
                      <p className="text-sm font-semibold" style={{ color: "var(--grad-a)" }}>
                        {job.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-5">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                      <Calendar size={13} />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                      <MapPin size={13} />
                      {job.location}
                    </div>
                    {"link" in job && job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs hover:text-indigo-400 transition-colors"
                        style={{ color: "var(--text-3)" }}
                      >
                        <ExternalLink size={13} />
                        Visit site
                      </a>
                    )}
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2.5">
                    {job.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "var(--grad-a)" }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
