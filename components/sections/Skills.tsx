"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

const categoryGradient: Record<string, string> = {
  indigo:  "from-indigo-500/10 to-violet-500/10",
  violet:  "from-violet-500/10 to-purple-500/10",
  cyan:    "from-cyan-500/10 to-indigo-500/10",
  emerald: "from-emerald-500/10 to-teal-500/10",
};

const categoryIcon: Record<string, string> = {
  indigo:  "⚡",
  violet:  "🌐",
  cyan:    "☁️",
  emerald: "📊",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Technical Skills"
          title="Tools of the trade"
          subtitle="Technologies and platforms I work with across mobile, web, cloud, and data domains."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="grad-border rounded-2xl p-6 group"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${categoryGradient[group.color] ?? categoryGradient.indigo} transition-transform duration-300 group-hover:scale-110`}
                >
                  {categoryIcon[group.color]}
                </div>
                <h3 className="text-sm font-bold" style={{ color: "var(--text-1)" }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + si * 0.04 }}
                  >
                    <Badge
                      color={group.color as "indigo" | "violet" | "cyan" | "emerald"}
                      size="md"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
