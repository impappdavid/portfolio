"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Terminal } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const LOGO_NODES = [
  {
    id: "fiverr",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQ-Mhqs5q79K4ZzxGKG3VVrA-IbnX3LT94eyMTvSC8KXR1xkaCscOena6&s=10",
    fallbackInitials: "Fi",
    name: "Fiverr",
    role: "Frontend Developer",
    period: "May – August 2025",
    color: "hover:bg-emerald-950/20 hover:border-emerald-800/50 hover:text-emerald-400",
    description: "Turned client wireframes into highly interactive components. Engineered real-time messaging using WebSockets and handled user roles, authentication, and secure payments.",
    stack: "React, TypeScript, WebSockets, TailwindCSS",
  },
  {
    id: "webvalto",
    logoUrl: "/webvalto.png",
    fallbackInitials: "Wv",
    name: "Webváltó",
    role: "Software Intern",
    period: "January – April 2023",
    color: "hover:bg-blue-950/20 hover:border-blue-800/50 hover:text-blue-400",
    description: "Collaborated inside an Agile team of developers, syncing closely with backend engineering to connect RESTful APIs and manage critical structural frontend data flows.",
    stack: "React, JavaScript, TypeScript, Java, SQL",
  },
  {
    id: "helsinki",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELU_SCDlB-3hrqDTxSnKcIGDIo15NXe3m1WvtziT5JizZkPW0m6vn-U4a&s=10",
    fallbackInitials: "Uh",
    name: "Helsinki",
    role: "Fullstack Developer",
    period: "Sept 2025 – Jan 2026",
    color: "hover:bg-purple-950/20 hover:border-purple-800/50 hover:text-purple-400",
    description: "Completed a comprehensive deep dive into modern fullstack architecture, building robust applications and writing production-ready backends from scratch.",
    stack: "Node.js, Express, MongoDB, PostgreSQL",
  }
];

export default function ExperienceCard() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const activePageData = LOGO_NODES.find((node) => node.id === selectedNodeId);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      className="relative  border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 overflow-hidden shadow-xl select-none text-zinc-200"
    >
      {/* --- BACKGROUND TRACING LINE ANIMATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle static guide path */}
          <path
            d="M -20,40 Q 120,80 160,200 T 400,240"
            fill="none"
            stroke="rgba(63, 63, 70, 0.3)"
            strokeWidth="1.5"
          />
          {/* Infinite self-chasing line */}
          <motion.path
            d="M -20,40 Q 120,80 160,200 T 400,240"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ strokeDasharray: "60 180", strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -240 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Secondary intersecting tracing line */}
          <path
            d="M 400,80 Q 200,160 140,320 T -40,360"
            fill="none"
            stroke="rgba(63, 63, 70, 0.3)"
            strokeWidth="1.5"
          />
          <motion.path
            d="M 400,80 Q 200,160 140,320 T -40,360"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ strokeDasharray: "40 200", strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 240 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {!selectedNodeId ? (
            /* --- MAIN BOARD VIEW --- */
            <motion.div
              key="main-board"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start w-full">
                  <h2 className="text-xl font-bold tracking-tight text-white">
                    Work Experience
                  </h2>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600" />
                </div>
                <p className="text-xs text-zinc-500 mt-1">
                  Click any dashboard block below to view technical metrics.
                </p>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-2 gap-2.5 my-auto">
                {LOGO_NODES.map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`group relative flex flex-col items-center justify-center border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 shadow-sm cursor-pointer transition-all duration-300 ${node.color}`}
                  >
                    {/* Container for Image Logos */}
                    <div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-inherit transition-colors">
                      <img 
                        src={node.logoUrl} 
                        alt={`${node.name} logo`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const fallback = document.createElement("span");
                            fallback.className = "font-mono font-bold text-sm text-zinc-400";
                            fallback.innerText = node.fallbackInitials;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    
                    {/* Brand Meta Stack */}
                    <span className="text-xs font-bold text-zinc-300 group-hover:text-zinc-100 transition-colors mt-3">
                      {node.name}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-tight mt-0.5">
                      {node.role}
                    </span>
                  </button>
                ))}

                {/* Decorative Empty Grid Slot */}
                <div className="border border-zinc-800/40 border-dashed bg-transparent rounded-xl p-4 flex flex-col items-center justify-center opacity-40">
                  <Terminal className="w-5 h-5 text-zinc-400" />
                  <span className="text-[9px] font-mono tracking-wider text-zinc-400 mt-2">
                    // node_null
                  </span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-zinc-400">
                sys.map = [01, 02, 03]
              </div>
            </motion.div>
          ) : (
            /* --- SUB-PAGE INNER PANEL VIEW --- */
            <motion.div
              key="detail-page"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="h-full flex flex-col justify-between"
            >
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setSelectedNodeId(null)}
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors w-fit cursor-pointer group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Go Back</span>
                </button>

                <div className="flex items-center gap-2.5 mt-1">
                  <div className="w-8 h-8 rounded-full border border-zinc-700 bg-zinc-950 flex items-center justify-center overflow-hidden">
                    <img 
                      src={activePageData?.logoUrl} 
                      alt="" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent && activePageData) {
                          const fallback = document.createElement("span");
                          fallback.className = "font-mono text-xs text-zinc-400";
                          fallback.innerText = activePageData.fallbackInitials;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {activePageData?.role}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 block">
                      {activePageData?.name} • {activePageData?.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-3 my-auto">
                {activePageData?.description}
              </p>

              <div className="pt-2.5 border-t border-zinc-800/60 mt-auto">
                <p className="text-[11px] text-zinc-400 font-sans">
                  <span className="font-mono text-zinc-500 font-semibold mr-1">Tools:</span>
                  {activePageData?.stack}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}