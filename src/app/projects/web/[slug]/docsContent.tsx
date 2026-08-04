"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Copy, Check, Maximize2 } from "lucide-react";

interface DocumentationItem {
  title: string;
  content: string;
  codeSnippet?: string;
}

interface ChallengeItem {
  issue: string;
  solution: string;
  codeSnippet?: string;
}

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  description: string;
  aspectRatio: string;
}

interface ProjectDoc {
  title: string;
  subtitle: string;
  metadata: {
    date: string;
    role: string;
    demoUrl: string;
    sourceUrl: string;
  };
  description: string[];
  stack: string[];
  howToStart: {
    prerequisites: string[];
    commands: string;
  };
  documentation: DocumentationItem[];
  challenges: ChallengeItem[];
  gallery: GalleryItem[];
}

const PROJECT_DATA: ProjectDoc = {
  title: "RETRO OS PORTFOLIO",
  subtitle: "v2.4.0 System Specification & Engineering Docs",
  metadata: {
    date: "2026",
    role: "Lead Frontend Engineer / Designer",
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/example/portfolio",
  },
  description: [
    "A terminal-inspired web application mimicking desktop window management systems. Built with Next.js App Router, Framer Motion, and Tailwind CSS.",
    "Engineered for sub-100ms transitions, smooth Lenis inertia scrolling, and modular UI windows that emulate classic operating systems."
  ],
  stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "React Lenis", "Lucide Icons"],
  howToStart: {
    prerequisites: ["Node.js 20.x or higher", "pnpm package manager"],
    commands: `git clone https://github.com/example/portfolio.git\ncd portfolio\npnpm install\npnpm dev`
  },
  documentation: [
    {
      title: "1.0 Window Lifecycle Management",
      content: "All pages wrap around a unified scale transition handler. When close (X) is triggered, the route change is deferred by 300ms to allow the scale-down exit animation to complete.",
      codeSnippet: `const handleClose = (e: React.MouseEvent) => {\n  e.preventDefault();\n  setIsClosing(true);\n  setTimeout(() => router.push("/"), 300);\n};`
    },
    {
      title: "2.0 Isolated Lenis Scroll Containers",
      content: "Nested scrollable views inside fixed-height window viewports use data-lenis-prevent to isolate internal scrolling from root smooth-scroll handlers.",
      codeSnippet: `// Isolate container scrolling\n<div data-lenis-prevent className="overflow-y-auto">\n  {children}\n</div>`
    }
  ],
  challenges: [
    {
      issue: "Nested Scroll Synchronization",
      solution: "Parent desktop scroll was capturing touch events from inside maximized windows. Solved by isolating sub-containers with custom data attributes and preventDefault handlers.",
      codeSnippet: `const onTouchMove = (e: TouchEvent) => {\n  if (e.target.closest('[data-lenis-prevent]')) {\n    e.stopPropagation();\n  }\n};`
    },
    {
      issue: "Custom OTF Font Loading Flash",
      solution: "Implemented Next.js localFont variables at root level with CSS fallback font-display swaps."
    }
  ],
  gallery: [
    {
      id: "fig-1",
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      alt: "Desktop Interface",
      caption: "FIG 01. Desktop Overview Interface",
      description: "Main workspace showing window management, custom retro taskbar, and active workspace widgets.",
      aspectRatio: "aspect-video"
    },
    {
      id: "fig-2",
      src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
      alt: "Terminal State",
      caption: "FIG 02. Terminal Modal State",
      description: "Built-in command line interface executing custom CLI scripts and dynamic command responses.",
      aspectRatio: "aspect-video"
    },
    {
      id: "fig-3",
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      alt: "Code Structure",
      caption: "FIG 03. System Architecture View",
      description: "High-level overview of component architecture, state management flow, and routing strategy.",
      aspectRatio: "aspect-video"
    }
  ]
};

export default function DocsContent() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeGalleryId, setActiveGalleryId] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeImage = PROJECT_DATA.gallery.find((img) => img.id === activeGalleryId);

  return (
    <div className="w-full h-full p-4 flex flex-col font-mono text-zinc-300 overflow-hidden select-none relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full flex flex-col overflow-hidden"
      >
        {/* Top Header Navigation - Hidden in Focus Mode */}
        {!activeGalleryId && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-zinc-900 shrink-0 text-xs">
            <div className="flex items-center gap-2 text-zinc-500">
              <Link href="/projects/web" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>back</span>
              </Link>
              <span>/</span>
              <span className="text-zinc-500 font-semibold">projects</span>
              <span>/</span>
              <span className="text-zinc-500 font-semibold">web</span>
              <span>/</span>
              <span className="text-white font-semibold">docs</span>
            </div>

            {/* Jump Links Navigation (Removed 'tree') */}
            <div className="flex items-center gap-3 text-[11px] overflow-x-auto scrollbar-none">
              <span className="text-zinc-600 hidden md:inline">JUMP TO:</span>
              {["meta", "stack", "setup", "architecture", "challenges", "gallery"].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="text-zinc-500 hover:text-emerald-500 transition-colors uppercase whitespace-nowrap"
                >
                  [{sec}]
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Display Area: Full Document OR Image Focus Mode */}
        {!activeGalleryId ? (
          /* STANDARD DOCUMENT VIEW */
          <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-xs flex flex-col gap-6 pr-2">
            
            {/* Header & External Links */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-900 pb-4">
              <div>
                <h1 className="text-zinc-100 text-lg font-bold tracking-wider">{PROJECT_DATA.title}</h1>
                <p className="text-zinc-500 text-xs mt-1">{PROJECT_DATA.subtitle}</p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={PROJECT_DATA.metadata.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-emerald-500 hover:underline transition-all text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={PROJECT_DATA.metadata.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white hover:underline transition-all text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
              </div>
            </div>

            {/* Section 1: Overview & Metadata */}
            <section id="meta" className="scroll-mt-2 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs py-1">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-zinc-500">DATE:</span>
                  <span className="text-zinc-200">{PROJECT_DATA.metadata.date}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <User className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-zinc-500">ROLE:</span>
                  <span className="text-zinc-200">{PROJECT_DATA.metadata.role}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-white font-medium text-xs"># DESCRIPTION</div>
                {PROJECT_DATA.description.map((p, idx) => (
                  <p key={idx} className="text-zinc-400 leading-relaxed pl-3">{p}</p>
                ))}
              </div>
            </section>

            {/* Section 2: Tech Stack */}
            <section id="stack" className="scroll-mt-4 flex flex-col gap-3 border-t border-zinc-900 pt-6">
              <div className="text-white font-medium text-xs"># TECH STACK</div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pl-3 text-zinc-400">
                {PROJECT_DATA.stack.map((item, idx) => (
                  <span key={idx} className="text-zinc-300">
                    • {item}
                  </span>
                ))}
              </div>
            </section>

            {/* Section 3: How to Start */}
            <section id="setup" className="scroll-mt-4 flex flex-col gap-3 border-t border-zinc-900 pt-6">
              <div className="text-white font-medium text-xs"># HOW TO START</div>
              <div className="pl-3 flex flex-col gap-2">
                <div className="text-zinc-500 text-[11px]">Prerequisites:</div>
                <ul className="pl-4 list-disc marker:text-zinc-600 text-zinc-400 flex flex-col gap-1">
                  {PROJECT_DATA.howToStart.prerequisites.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between text-zinc-500 text-[11px] mt-2">
                  <span>Commands:</span>
                  <button
                    onClick={() => handleCopyCode(PROJECT_DATA.howToStart.commands, "setup-cmd")}
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition-colors py-0.5 px-1"
                  >
                    {copiedId === "setup-cmd" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="text-[11px] text-emerald-400 whitespace-pre overflow-x-auto font-mono py-1">
                  {PROJECT_DATA.howToStart.commands}
                </pre>
              </div>
            </section>

            {/* Section 4: Architecture & Documentation */}
            <section id="architecture" className="scroll-mt-4 flex flex-col gap-4 border-t border-zinc-900 pt-6">
              <div className="text-white font-medium text-xs"># ARCHITECTURE & DOCUMENTATION</div>
              <div className="flex flex-col gap-6 pl-3">
                {PROJECT_DATA.documentation.map((doc, idx) => {
                  const snippetId = `doc-snippet-${idx}`;
                  return (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="text-zinc-200 font-semibold">{doc.title}</div>
                      <p className="text-zinc-400 leading-relaxed">{doc.content}</p>
                      
                      {doc.codeSnippet && (
                        <div className="flex flex-col gap-1 mt-1">
                          <div className="flex justify-end">
                            <button
                              onClick={() => handleCopyCode(doc.codeSnippet!, snippetId)}
                              className="flex items-center gap-1.5 text-[10px] text-zinc-500 hover:text-emerald-400 transition-colors py-0.5 px-1"
                            >
                              {copiedId === snippetId ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400">COPIED</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>COPY</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="text-[11px] text-emerald-400 whitespace-pre overflow-x-auto py-1 font-mono">
                            {doc.codeSnippet}
                          </pre>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 5: Challenges & Solutions */}
            <section id="challenges" className="scroll-mt-4 flex flex-col gap-4 border-t border-zinc-900 pt-6">
              <div className="text-white font-medium text-xs"># CHALLENGES & SOLUTIONS</div>
              <div className="flex flex-col gap-6 pl-3">
                {PROJECT_DATA.challenges.map((c, idx) => {
                  const snippetId = `challenge-snippet-${idx}`;
                  return (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="font-medium">
                        <span className="text-red-400">[ISSUE]</span>: {c.issue}
                      </div>
                      <div className="leading-relaxed text-zinc-300">
                        <span className="text-emerald-400">[SOLUTION]</span>: {c.solution}
                      </div>

                      {c.codeSnippet && (
                        <div className="flex flex-col gap-1 mt-1">
                          <div className="flex justify-end">
                            <button
                              onClick={() => handleCopyCode(c.codeSnippet!, snippetId)}
                              className="flex items-center gap-1.5 text-[10px] text-zinc-500 hover:text-emerald-400 transition-colors py-0.5 px-1"
                            >
                              {copiedId === snippetId ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400">COPIED</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>COPY</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="text-[11px] text-emerald-400 whitespace-pre overflow-x-auto py-1 font-mono">
                            {c.codeSnippet}
                          </pre>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 6: Gallery Default Grid */}
            <section id="gallery" className="scroll-mt-4 flex flex-col gap-4 border-t border-zinc-900 pt-6 pb-6">
              <div className="text-white font-medium text-xs"># GALLERY</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PROJECT_DATA.gallery.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => setActiveGalleryId(img.id)}
                    className="flex flex-col gap-2 cursor-pointer group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className={`w-full ${img.aspectRatio} object-cover opacity-80 group-hover:opacity-100 transition-opacity`}
                      />
                      <div className="absolute top-2 right-2 bg-zinc-950/80 text-zinc-300 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3 h-3" />
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 text-[10px] font-mono text-zinc-400">
                      <span className="text-emerald-400 shrink-0 select-none">|---&gt;</span>
                      <div className="flex flex-col">
                        <span className="text-zinc-200 font-semibold group-hover:text-emerald-400 transition-colors">
                          {img.caption}
                        </span>
                        <span className="text-zinc-500 text-[9px] uppercase tracking-wider mt-0.5">
                          [Click to expand]
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        ) : (
          /* FIXED NON-SCROLLABLE IMAGE FOCUS MODE WITH CRT ANIMATION */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex-1 min-h-0 flex flex-col justify-between gap-2 overflow-hidden h-full"
          >
            {/* Exit Button Header */}
            <div className="flex items-center justify-start pb-1 border-b border-zinc-900 shrink-0">
              <button
                onClick={() => setActiveGalleryId(null)}
                className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>[EXIT FOCUS MODE]</span>
              </button>
            </div>

            {/* Main Expanded Image Stage */}
            <div className="relative flex-1 min-h-0 w-full flex items-center justify-center bg-zinc-950/60 overflow-hidden rounded-sm p-1">
              <AnimatePresence mode="wait">
                {activeImage && (
                  <motion.div
                    key={activeImage.id}
                    initial={{
                      opacity: 0,
                      scale: 0.98,
                      filter: "blur(2px) contrast(120%)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px) contrast(100%)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.01,
                      filter: "blur(2px) contrast(120%)",
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={activeImage.src}
                      alt={activeImage.alt}
                      className="max-w-full max-h-full object-contain mx-auto select-none"
                    />

                    {/* Image Description Box Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                      className="absolute bottom-2 left-2 right-2 p-4 bg-zinc-950/90 text-zinc-200 text-xs backdrop-blur-sm border-l-2 border-emerald-500"
                    >
                      <div className="text-emerald-400 font-bold mb-0.5 text-[11px]">
                        {activeImage.caption}
                      </div>
                      <p className="text-zinc-300 text-[10px] leading-tight">
                        {activeImage.description}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Compact Thumbnail Strip */}
            <div className="shrink-0 flex justify-start px-2 min-h-16 items-center gap-2 border-t border-zinc-900">
              {PROJECT_DATA.gallery.map((img) => {
                const isActive = img.id === activeGalleryId;
                return (
                  <button
                    key={img.id}
                    onClick={() => setActiveGalleryId(img.id)}
                    className={`relative w-14 h-9 overflow-hidden transition-all duration-150 shrink-0 ${
                      isActive
                        ? "border border-emerald-500 opacity-100 scale-105 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                        : "opacity-40 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

      </motion.div>
    </div>
  );
}