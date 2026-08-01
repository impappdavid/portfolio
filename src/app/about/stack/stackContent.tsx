"use client";

import { useState, useEffect } from "react";

const STACK_CATEGORIES = [
  {
    section: "# 01. CURRENTLY LEARNING & FOCUS",
    description: "Deep-diving into high-performance systems engineering for space simulations.",
    items: [
      { name: "C++", detail: "Object-Oriented Programming, Memory Management, Physics & Orbital Simulations", status: "PRIMARY FOCUS" },
      { name: "Mathematics & Physics", detail: "Vectors, Calculus & Classical Mechanics Fundamentals", status: "IN PROGRESS" },
    ],
  },
  {
    section: "# 02. FRONTEND CRAFTSMANSHIP",
    description: "Building responsive, modern interfaces and web applications.",
    items: [
      { name: "TypeScript", detail: "Type-safe Frontend & Application Architecture", status: "DAILY" },
      { name: "React / Next.js", detail: "App Router, Server Components & Dynamic UI", status: "DAILY" },
      { name: "Tailwind CSS", detail: "Utility-First Layouts & Styling Systems", status: "DAILY" },
      { name: "Framer Motion", detail: "Declarative Animations & UI Transitions", status: "ACTIVE" },
      { name: "JavaScript (ES6+)", detail: "DOM Manipulation & Web Standards", status: "PROFICIENT" },
    ],
  },
  {
    section: "# 03. BACKEND & DATABASE",
    description: "Server runtimes, REST APIs, and data storage systems.",
    items: [
      { name: "Node.js", detail: "Backend Runtime & Server Operations", status: "PROFICIENT" },
      { name: "SQL", detail: "Relational Database Queries & Schema Design", status: "EXPERIENCED" },
      { name: "REST APIs", detail: "Endpoint Architecture & Data Fetching", status: "STANDARD" },
    ],
  },
  {
    section: "# 04. TOOLING & ENVIRONMENT",
    description: "Version control, workflow setup, and hosting.",
    items: [
      { name: "Git & GitHub", detail: "Version Control & Project Repositories", status: "ESSENTIAL" },
      { name: "Linux / CLI", detail: "Terminal Workflows & Bash Commands", status: "DAILY" },
      { name: "Vercel", detail: "Deployment & Automated Builds", status: "STANDARD" },
    ],
  },
];

export default function StackContent() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      data-lenis-prevent
      className="w-full h-full p-6 text-zinc-300 font-mono flex flex-col justify-between overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {/* Narrative Container */}
      <div className="max-w-6xl space-y-6 text-sm md:text-base leading-relaxed text-zinc-300">
        
        {/* Header Section */}
        <div className="space-y-2 border-b border-zinc-900 pb-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-500 tracking-widest uppercase flex items-center gap-2">
              &gt; SYSTEM_INVENTORY
            </span>
            <div className="flex items-center gap-4 text-zinc-500">
              <span>ACTIVE_STACK</span>
              <span>•</span>
              <span>T+{formatUptime(uptime)}</span>
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-zinc-100 tracking-tight pt-1">
            # TECHNICAL CAPABILITIES & TOOLSET
          </h1>
        </div>

        {/* Categories List */}
        <div className="space-y-8">
          {STACK_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-sm font-bold text-zinc-200 tracking-wider">
                {cat.section}
              </h2>
              <p className="text-xs text-zinc-500 pl-4 border-l border-zinc-800">
                &gt; {cat.description}
              </p>

              {/* Terminal Text Rows */}
              <div className="space-y-2 pt-2">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between text-xs md:text-sm py-1 border-b border-zinc-900/60 gap-1"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-zinc-400 font-bold">&gt;</span>
                      <span className="text-zinc-100 font-semibold">{item.name}</span>
                      <span className="text-zinc-600 hidden sm:inline">::</span>
                      <span className="text-zinc-400 text-xs">{item.detail}</span>
                    </div>

                    <span className="text-[11px] text-zinc-500 font-mono sm:self-auto pl-5 sm:pl-0">
                      [{item.status}]
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer */}
      <footer className="pt-8 mt-12 border-t border-zinc-900 flex flex-wrap justify-between items-center text-xs text-zinc-500 font-mono gap-4 select-none shrink-0">
        <span className="text-zinc-500">&gt; STATUS: CONTINUOUSLY LEARNING</span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f59e0b] transition-colors duration-200"
          >
            github/<span className="text-zinc-200">impappdavid</span>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f59e0b] transition-colors duration-200"
          >
            linkedin/<span className="text-zinc-200">impappdavid</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f59e0b] transition-colors duration-200"
          >
            <span className="text-zinc-200">impappdavid</span>@gmai.com
          </a>
        </div>
      </footer>
    </div>
  );
}