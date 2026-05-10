interface BadgeProps {
  children: React.ReactNode;
  color?: "indigo" | "violet" | "cyan" | "emerald" | "default";
  size?: "sm" | "md";
}

const colorMap = {
  indigo:  "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300",
  violet:  "bg-violet-500/10 text-violet-500 border border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300",
  cyan:    "bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-300",
  emerald: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300",
  default: "bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700",
};

export function Badge({ children, color = "default", size = "sm" }: BadgeProps) {
  const sizeClass = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm";
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${sizeClass} ${colorMap[color]} transition-all duration-200`}>
      {children}
    </span>
  );
}
