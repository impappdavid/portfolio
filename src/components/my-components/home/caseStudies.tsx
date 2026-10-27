"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CaseStudy {
  id: string;
  year: string;
  title: string;
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    year: "2026",
    title: "Not Just Taste, But Intuition",
    href: "/case-studies/not-just-taste",
  },
  {
    id: "2",
    year: "2026",
    title: "A Bridge Between Design and Code",
    href: "/case-studies/bridge-between-design-and-code",
  },
  {
    id: "3",
    year: "2025",
    title: "Creative Work Isn’t a Service, It’s a Bet",
    href: "/case-studies/creative-work-is-a-bet",
  },
  {
    id: "4",
    year: "2024",
    title: "Building Low-Latency Trading Systems in C++",
    href: "/case-studies/trading-systems-cpp",
  },
];

export default function CaseStudiesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  let lastRenderedYear = "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto py-6 mt-12"
    >
      {/* Header */}
      <div className="mb-4">
        <span className="text-xs font-medium tracking-wider text-zinc-500">
          /writings
        </span>
      </div>

      {/* List */}
      <div 
        className="relative flex flex-col space-y-1"
        onMouseLeave={() => setHoveredId(null)}
      >
        {caseStudies.map((study) => {
          const showYear = study.year !== lastRenderedYear;
          lastRenderedYear = study.year;

          const isHovered = hoveredId === study.id;

          return (
            <Link
              key={study.id}
              href={study.href}
              onMouseEnter={() => setHoveredId(study.id)}
              className="relative flex items-center px-2 py-1.5 rounded-lg cursor-pointer transition-colors"
            >
              {/* Sliding background hover box */}
              {isHovered && (
                <motion.div
                  layoutId="hoverHighlight"
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-md bg-zinc-300/60"
                />
              )}

              {/* Content Row */}
              <div className="relative z-10 flex items-center w-full">
                {/* Year column */}
                <span className="w-16 text-xs font-mono text-zinc-500 select-none">
                  {showYear ? study.year : ""}
                </span>

                {/* Title */}
                <span
                  className={`text-sm transition-colors duration-150 ${
                    isHovered ? "text-zinc-900" : "text-zinc-900"
                  }`}
                >
                  {study.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}