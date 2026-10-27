"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const busy = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  async function toggleTheme(e: React.MouseEvent<HTMLButtonElement>) {
    if (busy.current) return;

    const next = isDark ? "light" : "dark";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Fallback: unsupported browsers or reduced motion -> instant switch.
    if (!document.startViewTransition || reduceMotion) {
      setTheme(next);
      return;
    }

    // Read geometry BEFORE any await (currentTarget is cleared afterwards).
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    busy.current = true;

    const transition = document.startViewTransition(() => {
      // flushSync makes React commit (and next-themes toggle the class)
      // synchronously, so the "new" snapshot is captured with the new theme.
      flushSync(() => setTheme(next));
    });

    try {
      await transition.ready;

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );

      await transition.finished;
    } catch {
      // Transition was skipped (e.g. tab hidden) - theme is still applied.
    } finally {
      busy.current = false;
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative flex h-9 w-9 items-center justify-center rounded-xl
        border border-zinc-300 bg-zinc-100 text-zinc-700 transition-colors
        hover:bg-zinc-200
        dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200
        dark:hover:bg-zinc-800"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-sky-400" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}