"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Orbit, Zap, Sliders, Code } from "lucide-react";

const INTERESTS_DATA = [
  {
    id: "physics",
    title: "Physics & Mechanics",
    metric: "1.00x",
    subtitle: "Universal Frameworks",
    summary: "It is mind-blowing how absolutely everything connects back to physics. The ability to calculate complex real-world variables, maintain an open mind, and chase the opportunity to discover entirely new foundational truths is incredibly compelling.",
  },
  {
    id: "space",
    title: "Space & Cosmos",
    metric: "c",
    subtitle: "Theoretical Exploration",
    summary: "I love the deep mysteries embedded in the cosmos—from how planets are natively created to the mechanics of light travel. I am continually fascinated by theoretical concepts like breaking or matching the speed of light.",
  },
  {
    id: "simulations",
    title: "Interactive Simulations",
    metric: "f(x)",
    subtitle: "Frontend Integration",
    summary: "This bridges my passion for coding with physical environments. By combining frontend development with real physics calculations, I can build web showcases featuring live test cases, custom variables, and accurate aerodynamic systems like heavy wind behavior.",
  },
  {
    id: "coding",
    title: "Software & Synthesis",
    metric: "</>",
    subtitle: "The Ultimate Canvas",
    summary: "Coding is where all my separate interests fuse into a singular reality. It is the architectural tool that gives me the power to take abstract physics formulas, cosmic mysteries, and visual concepts, and simulate them right on a screen.",
  }
];

const CYCLE_DURATION = 6000; // 6 seconds

export default function InterestsMatrix() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoSliderDead, setIsAutoSliderDead] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered && !isAutoSliderDead) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % INTERESTS_DATA.length);
      }, CYCLE_DURATION);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, isAutoSliderDead]);

  const activeInterest = INTERESTS_DATA[activeIndex];

  // Radial track variables for the corner ring
  const radius = 7;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative col-span-2 w-full border border-zinc-900 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 overflow-hidden select-none text-zinc-400 font-sans"
    >
      {/* --- BACKGROUND TRACING LINE ANIMATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M -20,180 Q 160,120 220,240 T 500,160" 
            fill="none" 
            stroke="rgba(63, 63, 70, 0.4)" 
            strokeWidth="1.5" 
          />
          <motion.path
            d="M -20,180 Q 160,120 220,240 T 500,160" 
            fill="none" 
            stroke="rgba(59, 130, 246, 0.5)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            initial={{ strokeDasharray: "40 160", strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -200 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
        <div className="flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 stroke-[1.5]" />
          <span>Core Interests & Systems</span>
        </div>
        <span className="font-mono text-[8px] tracking-normal text-zinc-600 lowercase">
          {isAutoSliderDead ? "locked" : isHovered ? "paused" : "auto_cycle"}
        </span>
      </div>

      {/* --- MAIN MATRIX GRID --- */}
      <div className="relative z-10 grid grid-cols-12 mt-6 h-[calc(100%-3rem)] text-sm tracking-tight">
        
        {/* LEFT COLUMN: Main Interests */}
        <div className="col-span-5 flex flex-col items-start gap-1 justify-center">
          <div className="text-[10px] font-bold tracking-widest text-white uppercase mb-2">
            Focus Area
          </div>
          
          {INTERESTS_DATA.map((interest, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={interest.id}
                onMouseEnter={() => !isAutoSliderDead && setIsHovered(true)}
                onMouseLeave={() => !isAutoSliderDead && setIsHovered(false)}
                onClick={() => {
                  setIsAutoSliderDead(true);
                  setIsHovered(false);
                  setActiveIndex(index);
                }}
                className="flex items-center gap-2 group cursor-pointer py-1 w-full text-left outline-none transition-all duration-150"
              >
                <span
                  className={`text-sm transition-colors duration-200 ${
                    isActive 
                      ? "text-white font-medium pl-1 border-l border-blue-500" 
                      : isHovered || isAutoSliderDead
                      ? "text-zinc-700 hover:text-zinc-500" 
                      : "text-zinc-400"
                  }`}
                >
                  {interest.title}
                </span>
                
                <span className={`text-[9px] px-1.5 py-px rounded-full font-mono transition-all duration-200 ${
                  isActive 
                    ? "bg-zinc-800 text-blue-400" 
                    : "bg-zinc-900/40 text-zinc-600"
                }`}>
                  {interest.id === "physics" && <Zap className="w-2 h-2 inline mr-0.5" />}
                  {interest.id === "space" && <Orbit className="w-2 h-2 inline mr-0.5" />}
                  {interest.id === "simulations" && <Sliders className="w-2 h-2 inline mr-0.5" />}
                  {interest.id === "coding" && <Code className="w-2 h-2 inline mr-0.5" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* CENTER COLUMN: Interactive Scalar Metric */}
        <div className="col-span-2 flex flex-col items-center justify-center text-center px-1 border-x border-zinc-800/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInterest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.12 }}
              className="flex flex-col items-center"
            >
              <div className="text-xl font-bold tracking-tighter text-white font-mono leading-none">
                {activeInterest.metric}
              </div>
              <div className="text-[8px] font-mono tracking-wider text-zinc-500 uppercase mt-1 max-w-[65px] leading-tight">
                {activeInterest.subtitle}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: System Manifest Summary */}
        <div className="col-span-5 flex flex-col pl-4 justify-between relative">
          <div className="flex flex-col justify-center h-full">
            <div className="text-[10px] font-bold tracking-widest text-white uppercase mb-2">
              System Readout
            </div>
            
            <div className="h-28 overflow-y-auto pr-1 scrollbar-none">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeInterest.id}
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -4 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs text-zinc-400 leading-normal font-sans"
                >
                  {activeInterest.summary}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* --- CORNER RADAR TIMER --- */}
          <div className="absolute bottom-0 right-0 w-5 h-5 flex items-center justify-center">
            {!isAutoSliderDead ? (
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="10" cy="10" r={radius} className="stroke-zinc-400" strokeWidth="1.5" fill="transparent" />
                <motion.circle
                  key={activeIndex + "-" + isHovered}
                  cx="10" cy="10" r={radius} className="stroke-blue-500" strokeWidth="1.5" fill="transparent"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: isHovered ? circumference : 0 }}
                  transition={{ duration: isHovered ? 0 : CYCLE_DURATION / 1000, ease: "linear" }}
                />
              </svg>
            ) : (
              <span className="text-[9px] font-mono text-zinc-400 font-bold opacity-60">[•]</span>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}