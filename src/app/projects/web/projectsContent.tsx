"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const PROJECTS = [
  {
    id: "001",
    tag: "Click for more",
    title: "Noda",
    coverImage: "/projects/Noda/Cover.jpg",
    stack: ["Reactjs", "TypeScript", "TailwindCss", "shadcn/ui"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "002",
    tag: "Click for more",
    title: "Revalo",
    coverImage: "/projects/revalo.png",
    stack: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "003",
    tag: "SE",
    title: "React Query task",
    coverImage: "/projects/weecomTask.png",
    stack: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "004",
    tag: "PA",
    title: "Match Apply",
    coverImage: "/projects/matchapply.png",
    stack: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "005",
    tag: "SP",
    title: "GamingWithMe",
    coverImage: "/projects/gamingwithme.png",
    stack: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "006",
    tag: "SS",
    title: "SkillStack",
    coverImage: "/projects/skillstack.png",
    stack: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "007",
    tag: "PH",
    title: "ProjectHub",
    coverImage: "/projects/projecthubCover.png",
    stack: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "008",
    tag: "AA",
    title: "Azura",
    coverImage: "/projects/azuraCover.png",
    stack: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "009",
    tag: "CA",
    title: "CodeArc",
    coverImage: "/projects/codearc.png",
    stack: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "010",
    tag: "CV",
    title: "CinemaView",
    coverImage: "/login.png",
    stack: [],
    demoUrl: "",
    githubUrl: "",
  },
];

// Grid wrapper variants delaying initial trigger for the main container box animation
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.08,
    },
  },
};

// Image Box Card Variant: subtle scale + fade-up
const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 0.85,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function ProjectsContent() {
  const [uptime, setUptime] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
      className="w-full h-full p-4 text-zinc-700 dark:text-zinc-300 font-mono flex flex-col justify-between overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="w-full space-y-6">
        {/* 4-Column Full-Image HUD Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4"
        >
          {PROJECTS.map((project) => {
            const hasDemo = Boolean(project.demoUrl && project.demoUrl.trim());
            const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim());
            const hasAnyLink = hasDemo || hasGithub;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
              >
                {/* Entire Card wrapped in Next.js Link */}
                <Link
                  href={`/projects/web/${project.title.toLowerCase()}`}
                  className="group relative block h-[420px] w-full overflow-hidden border border-zinc-300 dark:border-zinc-900 transition-all duration-500 cursor-pointer "
                >
                  {/* Background Image */}
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500 opacity-100 group-hover:opacity-80"
                  />

                  {/* Ambient Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 group-hover:from-black/100 group-hover:via-black/40 group-hover:to-black/40 transition-colors duration-500 pointer-events-none" />

                  {/* Scanline Texture */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] z-10 pointer-events-none opacity-40" />

                  {/* Content Overlaid Inside Image */}
                  <div className="relative z-20 h-full p-4 flex flex-col justify-between pointer-events-none">
                    {/* Top Section: Code & Subtitle */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-zinc-300 font-bold tracking-widest">
                        <span>Click for more</span>
                        <span className="text-[10px] text-zinc-300">
                          [{project.id}]
                        </span>
                      </div>
                      <div className="text-[10px] text-zinc-400 tracking-wider">
                        ( {project.title.toUpperCase()} )
                      </div>
                    </div>

                    {/* Middle/Bottom Section: Stack & Title */}
                    <div className="space-y-3">
                      {/* Tech Stack List Inside Image */}
                      {project.stack.length > 0 && (
                        <div className="space-y-0.5 text-[10px] text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300">
                          <span className="text-white block font-bold text-[9px] tracking-widest uppercase">
                            TECH_STACK:
                          </span>
                          <div className="flex flex-wrap gap-x-1.5 leading-tight">
                            {project.stack.map((tech, i) => (
                              <span key={i}>
                                {tech}
                                {i < project.stack.length - 1 ? " /" : ""}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Main Display Title */}
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white transition-colors duration-300 tracking-tight leading-none">
                        {project.title}
                      </h2>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-zinc-700/80 text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300">
                      <div className="text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        <span>
                          AVBL:{" "}
                          {hasAnyLink ? (
                            <>
                              {hasDemo && "[DEMO] "}
                              {hasGithub && "[SRC]"}
                            </>
                          ) : (
                            "[N/A]"
                          )}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-300 group-hover:text-[#16a34a] dark:group-hover:text-[#22C55E] transition-colors flex items-center gap-1 font-semibold">
                        <span>ACCESS</span>
                        <span className="text-[10px]">&gt;&gt;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Cyber Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.8 }}
        className="pt-6 mt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-wrap justify-between items-center text-xs text-zinc-500 dark:text-zinc-600 select-none shrink-0"
      >
        <span>&gt; HUD_INTERFACE // READY</span>
        <div className="flex items-center gap-4">
          <span>T+{mounted ? formatUptime(uptime) : "00:00"}</span>
        </div>
      </motion.footer>
    </div>
  );
}