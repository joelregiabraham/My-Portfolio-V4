"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

const colorVariants: Record<string, string> = {
  indigo: "from-indigo-500/20 to-violet-500/20",
  violet: "from-violet-500/20 to-purple-500/20",
  cyan:   "from-cyan-500/20 to-indigo-500/20",
};

const badgeColor: Record<string, "indigo" | "violet" | "cyan"> = {
  indigo: "indigo",
  violet: "violet",
  cyan:   "cyan",
};

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32" style={{ background: "var(--surface-2, var(--bg))" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of enterprise, ML, and web projects — from idea to deployment."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="grad-border rounded-2xl overflow-hidden group flex flex-col"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {/* Top gradient bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${colorVariants[project.color] ?? colorVariants.indigo}`}
                style={{ background: `linear-gradient(90deg, var(--grad-a), var(--grad-b))` }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold leading-snug" style={{ color: "var(--text-1)" }}>
                    {project.title}
                  </h3>
                  <Badge color={badgeColor[project.color] ?? "indigo"}>
                    {project.status}
                  </Badge>
                </div>

                <p className="text-xs font-medium mb-1" style={{ color: "var(--grad-a)" }}>
                  {project.subtitle}
                </p>

                <div className="flex items-center gap-1.5 text-xs mb-5" style={{ color: "var(--text-3)" }}>
                  <Calendar size={12} />
                  {project.period}
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2 mb-5 flex-1">
                  {project.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-2.5 text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "var(--grad-b)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} color="default" size="sm">{tag}</Badge>
                  ))}
                </div>

                {/* Link */}
                {"link" in project && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 hover:gap-2"
                    style={{ color: "var(--grad-a)" }}
                  >
                    <ExternalLink size={13} />
                    {"linkLabel" in project ? project.linkLabel : "View Project"}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
