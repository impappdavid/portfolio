"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PROJECTS = [
  {
    id: "001",
    tag: "Click for more",
    title: "Revalo",
    coverImage: "/projects/revalo.png", // File in /public
    stack: ["Reactjs", "TypeScript", "TailwindCss", "shadcn/ui"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "002",
    tag: "SE",
    title: "React Query task",
    coverImage: "/projects/weecomTask.png", // File in /public
    stack: ["React", "React Query", "Axios"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "003",
    tag: "PA",
    title: "Match Apply",
    coverImage: "/projects/matchapply.png", // File in /public
    stack: ["Next.js", "Node.js", "SQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "004",
    tag: "SP",
    title: "GamingWithMe",
    coverImage: "/projects/gamingwithme.png", // File in /public
    stack: ["TypeScript", "REST", "Node"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "005",
    tag: "SS",
    title: "SkillStack",
    coverImage: "/projects/skillstack.png", // File in /public
    stack: ["TypeScript", "REST", "Node"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "006",
    tag: "PH",
    title: "ProjectHub",
    coverImage: "/projects/projecthubCover.png", // File in /public
    stack: ["TypeScript", "REST", "Node"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "007",
    tag: "AA",
    title: "Azura",
    coverImage: "/projects/azuraCover.png", // File in /public
    stack: ["TypeScript", "REST", "Node"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "008",
    tag: "CA",
    title: "CodeArc",
    coverImage: "/projects/codearc.png", // File in /public
    stack: ["TypeScript", "REST", "Node"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "009",
    tag: "CV",
    title: "CinemaView",
    coverImage: "/login.png", // File in /public
    stack: ["TypeScript", "REST", "Node"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "010",
    tag: "AA",
    title: "CinemaView",
    coverImage: "/login.png", // File in /public
    stack: ["TypeScript", "REST", "Node"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export default function ProjectsContent() {
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
      className="w-full h-full p-4  text-zinc-300 font-mono flex flex-col justify-between overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="w-full space-y-6">

        {/* 4-Column Full-Image HUD Grid */}
        <div className="grid grid-cols-1  gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative h-[420px] w-full overflow-hidden border border-zinc-900  opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover  group-hover:scale-105 transition-all duration-500 opacity-100 group-hover:opacity-80"
              />

              {/* Ambient Dark/Amber Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 group-hover:from-black/100 group-hover:via-black/40 group-hover:to-black/40 transition-colors duration-500" />

              {/* Scanline Texture */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] z-10 pointer-events-none opacity-40" />

              {/* Content Overlaid Inside Image */}
              <div className="relative z-20 h-full p-4 flex flex-col justify-between">
                
                {/* Top Section: Code & Subtitle */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-bold tracking-widest">
                    <span>Click for more</span>
                    <span className="text-[10px] text-zinc-500">
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
                  <div className="space-y-0.5 text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
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

                  {/* Main Display Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-white transition-colors duration-300 tracking-tight leading-none">
                    {project.title}
                  </h2>
                </div>

                {/* Bottom Action Footer Overlay */}
                <div className="flex items-center justify-between text-xs pt-2 border-t border-zinc-800/80 text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f59e0b] transition-colors flex items-center gap-1"
                  >
                    <span>DEMO</span>
                    <span className="text-[10px]">&gt;&gt;</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f59e0b] transition-colors text-zinc-500 hover:text-zinc-200"
                  >
                    [SRC]
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cyber Footer */}
      <footer className="pt-6 mt-8 border-t border-zinc-900 flex flex-wrap justify-between items-center text-xs text-zinc-600 select-none shrink-0">
        <span>&gt; HUD_INTERFACE // READY</span>
        <div className="flex items-center gap-4">
          <span>T+{formatUptime(uptime)}</span>
        </div>
      </footer>
    </div>
  );
}