"use client";

import { Code2, Heart } from "lucide-react";
import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
          >
            <Code2 size={14} className="text-white" />
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--text-2)" }}>
            {personal.name}
          </span>
        </div>

        {/* Credit */}
        <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-3)" }}>
          Built with
          <Heart size={11} className="text-rose-400 fill-rose-400" />
          using Next.js &amp; Tailwind CSS
        </p>

        {/* Copyright */}
        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          &copy; {new Date().getFullYear()} {personal.name}
        </p>
      </div>
    </footer>
  );
}
