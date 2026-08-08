"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Copy, Check, Maximize2, Code, ChevronRight, ChevronLeft } from "lucide-react";

interface DocumentationItem {
  title: string;
  content: string;
  codeSnippet?: string;
  image?: string; // Optional showcase image
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
  title: "Noda",
  subtitle: "Job Board",
  metadata: {
    date: "2026",
    role: "Frontend Engineer / Designer",
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/example/portfolio",
  },
  description: [
    "After experiencing the frustrations of a prolonged job search firsthand, I built Noda to address systemic flaws in existing recruitment platforms. Current systems are plagued by unverified ghost jobs, opaque qualification requirements, fragmented tracking, and recruiter ghosting.",
    "Noda fixes these friction points through automated pipeline state machines, built-in application tracking, verified company reviews, and strict employer response timers. Alongside the job marketplace, it features Launchpad—a collaborative module where engineers form equity-based teams to ship side projects and prove real engineering capability."
  ],
  stack: [
    "React", 
    "TypeScript", 
    "TailwindCSS", 
    "Vite", 
    "React Router", 
    "shadcn", 
    "CMDK", 
    "Recharts", 
    "Framer Motion"
  ],
  howToStart: {
    prerequisites: ["Node.js 20.x or higher", "npm package manager"],
    commands: `git clone https://github.com/example/noda.git\ncd noda\nnpm install\nnpm run dev`
  },
  documentation: [
    {
      title: "1.0 Anonymus Mode",
      content: "I saw on job boards that some people wont write their real oppinion because, they are affraid that companies will see and they can get a disadvantage from that. So this feature is helping to write our real oppinion.",
      codeSnippet: ``,
      image: "/projects/Noda/features/anonymus.png"
    },
    {
      title: "1.1 Role Match",
      content: "This feature came from that when i searched for jobs i always had to read each role because i just saw the title but nothing else. Thats why i put every important information on the trigger card like title, company, experience a match percentage based on your profile setup(skills, experience) so you dont have to read all and the end you see something that not you.",
      codeSnippet: ``,
      image: "/projects/Noda/features/jobmatch.png"
    },
    {
      title: "1.2 Tracker",
      content: "I tracked most of my applies but started to get annoying to go to another web application and document everything that was connected to that role. Thats why the on site applications are automaticly added in the tracker but you can add manually.",
      codeSnippet: ``,
      image: "/projects/Noda/features/tracker.png"
    },
    {
      title: "1.3 Multiple Sources",
      content: "I saw a lot of comments that people are annoyed to go through multiple web applications to see every opportunity. So i decided that why not implement api-s so the user doesnt have to go throuh 10 web site.",
      codeSnippet: ``
    },
    {
      title: "1.4 Company Reviews",
      content: "So this is an interesting feature and i had to think for this one but i got it. So for the interview we cant let anyone to comment because that would be some fake accusations so just whose applied onsite can like get access like interview to share their experience. For the employees we want that every experience to be valid so on this application you have to be in a team to count that experience.",
      codeSnippet: ``
    },
    {
      title: "1.5 Anti Ghosting Protocol",
      content: "On this feature i had to be careful because it couldnt be that strict. I thought that the company can choose like a waiting for applierers day up to 30day after the waiting time we start a 14day period where the recruiter must answer canidates. If not the role will be delisted and the company page got a strike that is seeable on their profile.",
      codeSnippet: ``
    },
    {
      title: "2.0 Verifications",
      content: "So job boards usually verify users to help companies that they dont get bots or trolls but what about the users it is so annoying that a random company post a job but they dont even exist they just farm user datas. So in this application we verify both parties.",
      codeSnippet: ``
    },
    {
      title: "2.1 Easy Accept and Reject",
      content: "If a recruiter chose the canidates we dont want that the recruiter click on each canidate that rejected so we ask after each accepted canidate that the recruiter would want to continue the selection or reject everyone else and everyone else would get an automatic message.",
      codeSnippet: ``
    },
    {
      title: "2.2 Canidate Filter",
      content: "In these days ai can make it easier for do your profile so we decided that the recruiter could add more filters that the user cant see and cant modify his account to match with the job a 100%.",
      codeSnippet: ``
    },
    {
      title: "2.3 Canidate Match",
      content: "Beside the filter there will be a canidate match too which is showing to the recruiter whose the best match for that role.",
      codeSnippet: ``
    },
    {
      title: "2.4 Interview",
      content: "To reduce emails i wanted to implement a feature that helps recruiters. The recruiter for each role can add interview dates and if a user accepted the site automaticly send a message to the canidate that he is accepted and he has to choose an interview date.",
      codeSnippet: ``
    },
  ],
  challenges: [
    {
      issue: "Eliminating Application 'Black Holes' & Recruiter Ghosting",
      solution: "Engineered a state machine layer into job application pipelines. Applications feature an automatic system countdown; if an employer fails to send a decision or request an interview within 14 days, the posting is flagged and removed, penalizing the employer's responsiveness score.",
      codeSnippet: `const checkPipelineExpiry = (application: AppRecord) => {\n  const SLA_DAYS = 14;\n  const daysSinceApplied = differenceInDays(new Date(), application.appliedAt);\n  \n  if (daysSinceApplied > SLA_DAYS && application.status === 'pending') {\n    return triggerSlaViolation(application.employerId, application.id);\n  }\n  return application.status;\n};`
    },
    {
      issue: "High-Performance Keyboard Command Palette Across Dynamic Routes",
      solution: "Implementing a global shortcut palette that needs to instantly search across deep relational data caused unnecessary re-renders. Leveraged CMDK with decoupled state triggers and memoized indexing hooks to allow sub-10ms UI filtering without blocking the React render thread.",
      codeSnippet: `// Memoizing lookup indices to prevent re-render lag\nconst searchIndex = useMemo(() => {\n  return buildSearchIndex([\n    ...activeJobs.map(j => ({ type: 'job', text: j.title })),\n    ...candidates.map(c => ({ type: 'user', text: c.name }))\n  ]);\n}, [activeJobs, candidates]);`
    },
    {
      issue: "Native Upgrades to Tailwind CSS v4 Ecosystem",
      solution: "Upgrading to Tailwind v4 removed the conventional postcss setup, breaking standard utility classes. Refactored the design system to align with Tailwind v4’s CSS-first config approach, defining custom color primitives directly inside the main CSS entry file.",
      codeSnippet: `@import "tailwindcss";\n\n@theme {\n  --color-primary: #3b82f6;\n  --color-surface-dark: #121212;\n  --font-sans: 'Inter', sans-serif;\n  --radius-xl: 1rem;\n}`
    }
  ],
  gallery: [
    {
      id: "fig-1",
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
      alt: "Candidate Dashboard",
      caption: "FIG 01. Unified Candidate Dashboard",
      description: "Main workspace showing the automated application tracker, match-scored job feed, and upcoming interview calendar.",
      aspectRatio: "aspect-video"
    },
    {
      id: "fig-2",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      alt: "Employer Pipeline",
      caption: "FIG 02. Employer Pipeline & SLA Timers",
      description: "Recruiter view highlighting the 14-day anti-ghosting countdown timers and batch-rejection workflow interface.",
      aspectRatio: "aspect-video"
    },
    {
      id: "fig-3",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      alt: "Launchpad Incubator",
      caption: "FIG 03. Launchpad Project Incubator",
      description: "Collaborative team formation view where engineers build verifiable side-projects and manage equity splits.",
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

            {/* Jump Links Navigation */}
            <div className="flex items-center gap-3 text-[11px] overflow-x-auto scrollbar-none">
              <span className="text-zinc-600 hidden md:inline">JUMP TO:</span>
              {["meta", "stack", "setup", "features", "challenges", "gallery"].map((sec) => (
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
              <div className="flex flex-wrap gap-x-1 gap-y-1 pl-3 text-zinc-400">
                {PROJECT_DATA.stack.map((item, idx) => (
                  <span key={idx} className="text-zinc-300 flex items-center">
                    <ChevronLeft className="w-3.5 h-3.5 text-zinc-500"/> {item} <ChevronRight className="w-3.5 h-3.5 text-zinc-500"/>
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

            {/* Section 4: Architecture & Documentation / Features */}
            <section id="features" className="scroll-mt-4 flex flex-col gap-4 border-t border-zinc-900 pt-6">
              <div className="text-white font-medium text-xs"># FEATURES</div>
              <div className="flex flex-col gap-8 pl-3">
                {PROJECT_DATA.documentation.map((doc, idx) => {
                  const snippetId = `doc-snippet-${idx}`;
                  return (
                    <div 
                      key={idx} 
                      className={`flex flex-col ${doc.image ? 'md:flex-row md:items-start' : ''} gap-4 pb-4 ${
                        idx !== PROJECT_DATA.documentation.length - 1 ? 'border-b border-zinc-900/50' : ''
                      }`}
                    >
                      {/* Left side: Content & Snippet */}
                      <div className={`flex flex-col gap-2 ${doc.image ? 'md:w-1/2' : 'w-full'}`}>
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
                            <pre className="text-[11px] text-emerald-400 whitespace-pre overflow-x-auto py-1 font-mono bg-zinc-950/40 p-2 border border-zinc-900 rounded">
                              {doc.codeSnippet}
                            </pre>
                          </div>
                        )}
                      </div>

                      {/* Right side: Image Showcase (rendered if `image` URL is supplied) */}
                      {doc.image && (
                        <div className="md:w-1/2 flex flex-col gap-1.5 mt-2 md:mt-0">
                          <div className="relative overflow-hidden border border-zinc-800 bg-zinc-950 group">
                            <img
                              src={doc.image}
                              alt={doc.title}
                              className="w-full h-auto max-h-52 object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-mono">
                            [Feature Preview: {doc.title}]
                          </span>
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
                          <pre className="text-[11px] text-emerald-400 whitespace-pre overflow-x-auto py-1 font-mono bg-zinc-950/40 p-2 border border-zinc-900 rounded">
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