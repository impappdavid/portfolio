"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const SYSTEM_GOALS = [
  { id: "g1", name: "Physics Engine Sims", code: "rigid_body.cpp" },
  { id: "g2", name: "OpenGL / Graphics Rendering", code: "glDrawArrays" },
  { id: "g3", name: "Hardware Integration", code: "raspberry_pi.h" },
  { id: "g4", name: "Embedded Software Architecture", code: "firmware.bin" }
];

export default function LearningMatrix() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative col-span-1 w-full border cursor-crosshair border-zinc-900 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-6 overflow-hidden select-none text-zinc-400 font-sans flex flex-col justify-between shadow-xl"
    >
      {/* --- AMBIENT/BACKGROUND TELEMETRY --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Dynamic Horizontal System Bus Matrix Tracks */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="0" y1="48%" x2="100%" y2="48%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="0" y1="68%" x2="100%" y2="68%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="0" y1="88%" x2="100%" y2="88%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 8" />
        </svg>

        {/* Asynchronous Processing Vectors running along paths */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`bus-${i}`}
            initial={{ left: "-10%" }}
            animate={{ left: "110%" }}
            transition={{
              duration: 3.5 + i * 1.2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
            style={{ top: i === 0 ? "25%" : i === 1 ? "48%" : i === 2 ? "68%" : "88%" }}
            className="absolute h-[1.5px] w-12 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-60"
          />
        ))}

        {/* Binary Bitstream Allocator Background Noise */}
        <div className="absolute top-0 right-6 bottom-0 w-16 opacity-[0.03] font-mono text-[8px] flex justify-between tracking-tighter leading-none select-none">
          <motion.div 
            animate={{ y: ["0%", "-50%"] }} 
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-2 text-emerald-400"
          >
            <span>0101</span><span>1100</span><span>0011</span><span>1001</span><span>0110</span><span>1111</span><span>0000</span><span>1010</span>
          </motion.div>
          <motion.div 
            animate={{ y: ["-50%", "0%"] }} 
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-2 text-emerald-400"
          >
            <span>1110</span><span>0001</span><span>1011</span><span>0100</span><span>1111</span><span>0010</span><span>1001</span><span>0101</span>
          </motion.div>
        </div>
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 stroke-[1.5]" />
          <span>Learning</span>
        </div>
        <span className="font-mono text-[9px] text-zinc-600 tracking-tight">0x00FF8E</span>
      </div>

      {/* --- MAIN CORE LANGUAGE DISPLAY --- */}
      <div className="relative z-10 my-1">
        <div className="flex items-baseline gap-2">
          <h3 className="text-4xl font-light text-white tracking-tighter font-mono">
            C++
          </h3>
          <span className="text-[9px] font-mono tracking-widest text-emerald-500/80 uppercase">
            [sys_eng]
          </span>
        </div>
      </div>

      {/* --- TEXT MATRIX LIST --- */}
      <div className="relative z-10 flex flex-col gap-1.5 w-full">
        <div className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase mb-1">
          Goals / Targets
        </div>

        {SYSTEM_GOALS.map((goal, index) => {
          const isSelfHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <div
              key={goal.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex justify-between items-center w-full group  py-1 px-2 -mx-2 rounded-md transition-all duration-150"
            >
              {/* FIXED HOVER DESIGN: Rendered directly relative to the item element container */}
              {isSelfHovered && (
                <motion.div
                  layoutId="activeTargetHighlight"
                  className="absolute inset-0 bg-emerald-500/[0.06] border-l-2 border-emerald-500/60 z-0 pointer-events-none"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}

              <span
                className={`relative z-10 text-xs tracking-tight transition-colors duration-200 text-zinc-200`}
              >
                {goal.name}
              </span>

              <span
                className={`relative z-10 text-[10px] font-mono tracking-tight transition-all duration-200 ${
                  isSelfHovered
                    ? "text-emerald-400 font-medium"
                    : "text-zinc-500 "
                }`}
              >
                {goal.code}
              </span>
            </div>
          );
        })}
      </div>

      {/* --- FOOTER STATUS READOUT --- */}
      <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-zinc-400 border-t border-zinc-900/60 pt-2.5">
        <span>alloc = deterministic</span>
        <span>std::c++23</span>
      </div>
    </motion.div>
  );
}