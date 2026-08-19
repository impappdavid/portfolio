"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function IntroCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href="/projects" passHrefLegacy legacyBehavior>
      <motion.a
        variants={cardVariants}
        initial="hidden"
        animate="show"
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden airy-card border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-6 flex flex-col justify-between group shadow-xl cursor-pointer block select-none"
      >
        {/* Animated Background Canvas Layer */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            {/* Ambient Earth Globe Sphere Structure */}
            <circle cx="200" cy="200" r="40" className="fill-zinc-900/20 stroke-zinc-500 stroke-[1px]" />
            <path d="M160 200 Q200 165 240 200" className="fill-none stroke-zinc-400 stroke-[1px]" />
            <path d="M160 200 Q200 235 240 200" className="fill-none stroke-zinc-400 stroke-[1px]" />
            
            {/* Spinning Orbit Path Definition */}
            <motion.ellipse 
              cx="200" 
              cy="200" 
              rx="120" 
              ry="75" 
              className="fill-none stroke-zinc-500 stroke-[1px] stroke-dashed"
              style={{ transformOrigin: "200px 200px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Core Orbit Indicator Node */}
          <motion.div
            className="absolute bg-zinc-400 group-hover:bg-zinc-100 rounded-full w-1.5 h-1.5 shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-colors"
            style={{
              motionPath: "M 200 200 m -120, 0 a 120,75 0 1,0 240,0 a 120,75 0 1,0 -240,0",
              transformOrigin: "center",
            }}
            animate={{ motionOffset: ["0%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Dynamic Ambient Spotlight Overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                160px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.04),
                transparent 80%
              )
            `,
          }}
        />

        {/* Top Section: Navigation Header */}
        <div className="relative z-20 flex justify-between items-start w-full">
          {/* Stacked Heading Block */}
          <div className="flex flex-col gap-0.5">
            <h1 className="text-6xl font-bold tracking-tight leading-none text-zinc-300 group-hover:text-white transition-colors flex items-center gap-1.5">
              {/* Looped Shining Effect Container */}
              <span className="relative inline-block overflow-hidden">
                <span className="bg-gradient-to-r from-zinc-300 via-white to-zinc-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
                  Hello
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1" />
            </h1>
            
            {/* "world" is now positioned strictly below "Hello" */}
            <h1 className="text-6xl font-bold tracking-tight leading-none mb-1.5">
              <span className="bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine delay-150">
                World!
              </span>
            </h1>

            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors">
              // click to view work
            </span>
          </div>

          {/* Micro Status Beacon */}
          <div className="flex items-center gap-1.5 border border-zinc-800 bg-zinc-900/40 rounded-full px-2 py-0.5 text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
            <span className="relative flex h-1 w-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-400"></span>
            </span>
            online
          </div>
        </div>

        {/* Bottom Section: Narrative Copy */}
        <div className="relative z-20 flex flex-col gap-3 w-full border-t border-zinc-700/60 pt-4">
          <p className="text-[13px] font-normal leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors balance font-sans">
            I'm a fullstack developer i've been coding since 2017 i made some complex frontend projects.
          </p>

          <div className="flex justify-between items-center w-full font-mono text-[10px] text-zinc-600 group-hover:text-zinc-500 transition-colors">
            <span>ctx.experience = {new Date().getFullYear() - 2017}y;</span>
            <span className="text-[9px] opacity-40 group-hover:opacity-80 transition-opacity">node v20.6</span>
          </div>
        </div>
      </motion.a>
    </Link>
  );
}