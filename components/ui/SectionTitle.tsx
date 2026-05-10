"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, center = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={center ? "text-center" : ""}
    >
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ background: "rgba(99,102,241,0.12)", color: "var(--grad-a)", border: "1px solid rgba(99,102,241,0.2)" }}>
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
        style={{ color: "var(--text-1)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-2)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
