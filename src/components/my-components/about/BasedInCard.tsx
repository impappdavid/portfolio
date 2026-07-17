"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

export default function NodeLocationCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  // Replace with your actual email address
  const emailAddress = "impappdavid@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative col-span-1 w-full border border-zinc-900 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-6 overflow-hidden select-none text-zinc-400 font-sans flex flex-col justify-between shadow-xl"
    >
      {/* --- GEOGRAPHIC HUNGARY WIREFRAME ANIMATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.06]">
        <svg 
          viewBox="0 0 100 60" 
          className="w-[85%] h-[85%] transition-transform duration-700 ease-out scale-105"
          style={{ transform: isHovered ? "scale(1.10) rotate(-0.5deg)" : "scale(1.05)" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 5,25 Q 12,12 28,10 T 55,12 T 78,8 T 95,20 T 92,38 T 80,48 T 50,52 T 24,46 T 8,42 Z"
            fill="none"
            stroke="rgba(16, 185, 129, 0.2)"
            strokeWidth="0.5"
          />
          <motion.path
            d="M 5,25 Q 12,12 28,10 T 55,12 T 78,8 T 95,20 T 92,38 T 80,48 T 50,52 T 24,46 T 8,42 Z"
            fill="none"
            stroke="rgba(16, 185, 129, 0.8)"
            strokeWidth="0.75"
            strokeLinecap="round"
            initial={{ strokeDasharray: "15 60", strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -150 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="46"
            cy="22"
            r="1.2"
            className="fill-emerald-400"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="46" cy="22" r="3" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.25" className="animate-ping" style={{ animationDuration: '3s' }} />
        </svg>
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 stroke-[1.5] text-zinc-500" />
          <span>Node Origin</span>
        </div>
        <span className="font-mono text-[9px] text-zinc-600 tracking-tight">47.1625° N</span>
      </div>

      {/* --- MAIN LOCATION DISPLAY --- */}
      <div className="relative z-10 my-0.5">
        <div className="flex items-baseline gap-2">
          <h3 className="text-4xl font-light text-white tracking-tighter font-mono">
            Hungary
          </h3>
          <span className="text-[9px] font-mono tracking-widest text-emerald-500/80 uppercase">
            [eu_central]
          </span>
        </div>
      </div>

      {/* --- SYSTEM METRICS & CONTACT --- */}
      <div className="relative z-10 flex flex-col gap-1.5 w-full">
        <div className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase mb-0.5">
          Telemetry Readout
        </div>

        <div className="flex justify-between items-center py-px border-b border-zinc-900/40">
          <span className="text-xs tracking-tight text-zinc-400">Regional Gateway</span>
          <span className="text-[10px] font-mono text-zinc-400">Budapest</span>
        </div>

        <div className="flex justify-between items-center py-px border-b border-zinc-900/40">
          <span className="text-xs tracking-tight text-zinc-400">Zone Base</span>
          <span className="text-[10px] font-mono text-zinc-400">UTC +02:00 (CEST)</span>
        </div>

        {/* Interactive Direct Contact Line */}
        <div 
          onClick={handleCopy}
          className="flex justify-between items-center py-1 mt-1 px-2 -mx-2 rounded-md bg-zinc-950/30 border border-zinc-900/50 hover:bg-emerald-500/[0.02] hover:border-emerald-500/20 transition-all duration-150 cursor-pointer group"
        >
          <span className="text-xs tracking-tight text-zinc-300 flex items-center gap-1.5 group-hover:text-white transition-colors">
            <Mail className="w-3 h-3 stroke-[1.5] text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            Contact me
          </span>
          <span className="text-[10px] font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors">
            {copied ? "copied to clipboard" : emailAddress}
          </span>
        </div>
      </div>

      {/* --- FOOTER STATUS READOUT --- */}
      <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-zinc-400 border-t border-zinc-900/60 pt-2.5">
        <span>status = online_ping</span>
        <span>ping ~ 14ms</span>
      </div>
    </motion.div>
  );
}