"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AnimatedThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = (resolvedTheme ?? theme) === "dark";
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-[52px] items-center rounded-full border border-black/10 dark:border-white/20 px-1 transition-colors duration-300 bg-white/80 dark:bg-black/30 hover:bg-white dark:hover:bg-black/40"
    >
      <span
        className={[
          "absolute left-1 top-1 h-7 w-7 rounded-full transition-transform duration-300",
          isDark ? "translate-x-[22px] bg-yellow-400" : "translate-x-0 bg-blue-500",
        ].join(" ")}
      />
      <span className="absolute left-[6px] text-blue-600"><Sun className="h-3.5 w-3.5" /></span>
      <span className="absolute right-[6px] text-yellow-400"><Moon className="h-3.5 w-3.5" /></span>
      {/* Invisible text for accessible label */}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
