"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2 } from "lucide-react";

const PROJECTS_DATA = [
  { 
    id: "p1", 
    name: "Noda", 
    pages: 14, 
    details: "Hooks, Context, Custom State", 
    stack: ["React", "TypeScript", "TailwindCSS", "PostgreSQL"] 
  },
  { 
    id: "p2", 
    name: "Noda waitlist", 
    pages: 6, 
    details: "WebSockets, Dynamic State", 
    stack: ["React", "TypeScript", "MongoDB", "TailwindCSS"] 
  },
  { 
    id: "p3", 
    name: "Internal Admin Dashboard", 
    pages: 22, 
    details: "Zustand, Query, Table Hooks", 
    stack: ["React", "JavaScript", "TailwindCSS", "SQL"] 
  },
  { 
    id: "p4", 
    name: "Enterprise API Mesh", 
    pages: 1, 
    details: "Stateless Routing, Streams", 
    stack: ["Java", "SQL", "Node.js"] 
  },
];

const ALL_TECH_TAGS = [
  "React", "TypeScript", "TailwindCSS", "JavaScript", 
  "WebSockets", "Node.js", "MongoDB", "PostgreSQL", "Java", "SQL"
];

export default function DesignSkillMatrix() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Find active project metrics based on hover state
  const activeProject = PROJECTS_DATA.find((p) => p.id === hoveredProjectId);
  const activeStack = activeProject?.stack || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative col-span-2 w-full border border-zinc-900 cursor-crosshair  bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 overflow-hidden select-none text-zinc-400 font-sans"
    >
      {/* --- TOP GRADIENT LINE LOOP --- */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] overflow-hidden opacity-70">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
        />
      </div>

      {/* --- HEADER --- */}
      <div className="flex items-center gap-1.5 text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
        <BarChart2 className="w-3.5 h-3.5 stroke-[1.5]" />
        <span>Project Stacks</span>
      </div>

      {/* --- MAIN MATRIX GRID --- */}
      <div className="grid grid-cols-12 mt-6 h-[calc(100%-3rem)] text-sm tracking-tight">
        
        {/* LEFT COLUMN: Projects (Spans 5 of 12 columns) */}
        <div className="col-span-5 flex flex-col items-start gap-0.5">
          <div className="text-[10px] font-bold tracking-widest text-white uppercase mb-2">
            Project
          </div>
          
          {PROJECTS_DATA.map((project, index) => {
            const isSelfHovered = hoveredProjectId === project.id;
            const isAnyHovered = hoveredProjectId !== null;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="flex items-center gap-2 group py-0.5 w-full transition-all duration-150"
              >
                <span
                  className={`text-sm transition-colors duration-200 ${
                    !isAnyHovered 
                      ? "text-zinc-300" 
                      : isSelfHovered 
                      ? "text-white font-medium" 
                      : "text-zinc-700"
                  }`}
                >
                  {project.name}
                </span>
                
                <span className={`text-[9px] px-1.5 py-px rounded-full font-mono transition-all duration-200 ${
                  isSelfHovered 
                    ? "bg-zinc-600 text-emerald-400" 
                    : "bg-zinc-600/40 text-zinc-400"
                }`}>
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>

        {/* CENTER COLUMN: Dynamic Pages & Internal System Details (Spans 2 of 12 columns) */}
        <div className="col-span-2 flex flex-col items-center justify-center text-center px-1 border-x border-zinc-800/30">
          <AnimatePresence mode="wait">
            {hoveredProjectId && activeProject ? (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col items-center"
              >
                {/* Big Page Count */}
                <div className="text-2xl font-bold tracking-tighter text-white font-mono leading-none">
                  {activeProject.pages}
                </div>
                <div className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase mt-0.5 mb-2">
                  {activeProject.pages === 1 ? "Page" : "Pages"}
                </div>

                {/* Smaller technical layout metadata */}
                <span className="text-[10px] text-emerald-400/90 font-mono leading-tight max-w-[90px] inline-block break-words">
                  {activeProject.details}
                </span>
              </motion.div>
            ) : (
              /* Idle placeholder state when nothing is hovered */
              <motion.div
                key="idle-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase"
              >
                System
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Tools / Tech Stack (Spans 5 of 12 columns) */}
        <div className="col-span-5 flex flex-col items-end gap-0.5 text-right">
          <div className="text-[10px] font-bold tracking-widest text-white uppercase mb-2">
            Tool
          </div>

          {ALL_TECH_TAGS.map((tech) => {
            const isAnyHovered = hoveredProjectId !== null;
            const isHighlighted = isAnyHovered && activeStack.includes(tech);

            return (
              <span
                key={tech}
                className={`text-xs transition-all duration-200 ${
                  !isAnyHovered
                    ? "text-zinc-500"
                    : isHighlighted
                    ? "text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                    : "text-zinc-800 opacity-40"
                }`}
              >
                {tech}
              </span>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}