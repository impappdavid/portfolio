// docsContent.tsx
"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  X,
  ZoomIn,
} from "lucide-react";
import { ProjectDoc, GalleryItem } from "./data";

interface DocsContentProps {
  data: ProjectDoc;
}

export default function DocsContent({ data }: DocsContentProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isGalleryExpanded, setIsGalleryExpanded] = useState<boolean>(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef<number>(0);

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

  const handleOpenGallery = () => {
    if (scrollContainerRef.current) {
      scrollPosRef.current = scrollContainerRef.current.scrollTop;
    }
    setIsGalleryExpanded(true);
    setSelectedGalleryItem(null);
  };

  const handleCloseGallery = () => {
    setIsGalleryExpanded(false);
    setSelectedGalleryItem(null);
  };

  // Restore scroll position after gallery closes
  useLayoutEffect(() => {
    if (!isGalleryExpanded && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollPosRef.current;
    }
  }, [isGalleryExpanded]);

  return (
    <div className="w-full h-full p-4 flex flex-col font-mono text-zinc-700 dark:text-zinc-300 overflow-hidden select-none relative transition-colors duration-200">
      <div className="w-full h-full flex flex-col overflow-hidden">
        {!isGalleryExpanded ? (
          <div className="w-full h-full flex flex-col overflow-hidden">
            {/* Top Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-900 shrink-0 text-xs">
              <div className="flex items-center gap-2">
                <Link
                  href="/projects/web"
                  className="text-zinc-400 dark:text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>back</span>
                </Link>
                <span className="text-zinc-300 dark:text-zinc-600">/</span>
                <span className="text-zinc-400 dark:text-zinc-500">projects</span>
                <span className="text-zinc-300 dark:text-zinc-600">/</span>
                <span className="font-semibold text-zinc-900 dark:text-white">
                  {data.title.toLowerCase()}
                </span>
              </div>

              {/* Jump Links */}
              <div className="flex items-center gap-3 text-[11px] overflow-x-auto scrollbar-none">
                <span className="text-zinc-400 dark:text-zinc-600 hidden md:inline">
                  JUMP TO:
                </span>
                {["meta", "stack", "setup", "features", "challenges", "gallery"].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => scrollToSection(sec)}
                    className="text-zinc-400 dark:text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors uppercase whitespace-nowrap"
                  >
                    [{sec}]
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex-1 min-h-0 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-xs flex flex-col gap-6 pr-2"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-900 pb-4">
                <div>
                  <h1 className="text-lg font-bold tracking-wider text-zinc-900 dark:text-zinc-100">
                    {data.title}
                  </h1>
                  <p className="text-xs mt-1 text-zinc-400 dark:text-zinc-500">
                    {data.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {Boolean(data.metadata.demoUrl && data.metadata.demoUrl.trim()) && (
                    <a
                      href={data.metadata.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500 hover:underline transition-all text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {Boolean(data.metadata.sourceUrl && data.metadata.sourceUrl.trim()) && (
                    <a
                      href={data.metadata.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:underline transition-all text-xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Section 1: Overview & Metadata */}
              <section id="meta" className="scroll-mt-2 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs py-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                    <span className="text-zinc-400 dark:text-zinc-500">DATE:</span>
                    <span className="text-zinc-800 dark:text-zinc-200">{data.metadata.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                    <span className="text-zinc-400 dark:text-zinc-500">ROLE:</span>
                    <span className="text-zinc-800 dark:text-zinc-200">{data.metadata.role}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-medium text-xs text-zinc-900 dark:text-white">
                    # DESCRIPTION
                  </div>
                  {data.description.map((p, idx) => (
                    <p key={idx} className="leading-relaxed pl-3 text-zinc-600 dark:text-zinc-400">
                      {p}
                    </p>
                  ))}
                </div>
              </section>

              {/* Section 2: Tech Stack */}
              <section id="stack" className="scroll-mt-4 flex flex-col gap-3 border-t border-zinc-200 dark:border-zinc-900 pt-6">
                <div className="font-medium text-xs text-zinc-900 dark:text-white">
                  # TECH STACK
                </div>
                <div className="flex flex-wrap gap-x-1 gap-y-1 pl-3">
                  {data.stack.map((item, idx) => (
                    <span key={idx} className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <ChevronLeft className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                      {item}
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                    </span>
                  ))}
                </div>
              </section>

              {/* Section 3: How to Start */}
              <section id="setup" className="scroll-mt-4 flex flex-col gap-3 border-t border-zinc-200 dark:border-zinc-900 pt-6">
                <div className="font-medium text-xs text-zinc-900 dark:text-white">
                  # HOW TO START
                </div>
                <div className="pl-3 flex flex-col gap-2">
                  <div className="text-[11px] text-zinc-400 dark:text-zinc-500">
                    Prerequisites:
                  </div>
                  <ul className="pl-4 list-disc flex flex-col gap-1 marker:text-zinc-300 dark:marker:text-zinc-600 text-zinc-600 dark:text-zinc-400">
                    {data.howToStart.prerequisites.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between text-[11px] mt-2">
                    <span className="text-zinc-400 dark:text-zinc-500">Commands:</span>
                    <button
                      onClick={() => handleCopyCode(data.howToStart.commands, "setup-cmd")}
                      className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-0.5 px-1"
                    >
                      {copiedId === "setup-cmd" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="text-[11px] whitespace-pre overflow-x-auto font-mono py-1 rounded p-2 border text-emerald-700 bg-zinc-100 border-zinc-200 dark:text-emerald-400 dark:bg-zinc-950/40 dark:border-zinc-900">
                    {data.howToStart.commands}
                  </pre>
                </div>
              </section>

              {/* Section 4: Features */}
              <section id="features" className="scroll-mt-4 flex flex-col gap-4 border-t border-zinc-200 dark:border-zinc-900 pt-6">
                <div className="font-medium text-xs text-zinc-900 dark:text-white">
                  # FEATURES
                </div>
                <div className="flex flex-col gap-8 pl-3">
                  {data.documentation.map((doc, idx) => {
                    const snippetId = `doc-snippet-${idx}`;
                    return (
                      <div
                        key={idx}
                        className={`flex flex-col ${doc.image ? "md:flex-row md:items-start" : ""} gap-4 pb-4 ${
                          idx !== data.documentation.length - 1
                            ? "border-b border-zinc-200/60 dark:border-zinc-900/50"
                            : ""
                        }`}
                      >
                        <div className={`flex flex-col gap-2 ${doc.image ? "md:w-1/2" : "w-full"}`}>
                          <div className="font-semibold text-zinc-800 dark:text-zinc-200">
                            {doc.title}
                          </div>
                          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {doc.content}
                          </p>

                          {doc.codeSnippet && doc.codeSnippet.trim() !== "" && (
                            <div className="flex flex-col gap-1 mt-1">
                              <div className="flex justify-end">
                                <button
                                  onClick={() => handleCopyCode(doc.codeSnippet!, snippetId)}
                                  className="flex items-center gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-0.5 px-1"
                                >
                                  {copiedId === snippetId ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-500" />
                                      <span className="text-emerald-500">COPIED</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>COPY</span>
                                    </>
                                  )}
                                </button>
                              </div>
                              <pre className="text-[11px] whitespace-pre overflow-x-auto py-1 font-mono p-2 border rounded text-emerald-700 bg-zinc-100 border-zinc-200 dark:text-emerald-400 dark:bg-zinc-950/40 dark:border-zinc-900">
                                {doc.codeSnippet}
                              </pre>
                            </div>
                          )}
                        </div>

                        {doc.image && (
                          <div className="md:w-1/2 flex flex-col gap-1.5 mt-2 md:mt-0">
                            <div className="relative overflow-hidden border group border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
                              <img
                                src={doc.image}
                                alt={doc.title}
                                className="w-full h-auto max-h-52 object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                              />
                            </div>
                            <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500">
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
              <section id="challenges" className="scroll-mt-4 flex flex-col gap-4 border-t border-zinc-200 dark:border-zinc-900 pt-6">
                <div className="font-medium text-xs text-zinc-900 dark:text-white">
                  # CHALLENGES & SOLUTIONS
                </div>
                <div className="flex flex-col gap-6 pl-3">
                  {data.challenges.map((c, idx) => {
                    const snippetId = `challenge-snippet-${idx}`;
                    return (
                      <div key={idx} className="flex flex-col gap-2">
                        <div className="font-medium">
                          <span className="text-red-600 dark:text-red-400">[ISSUE]</span>: {c.issue}
                        </div>
                        <div className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                          <span className="text-emerald-600 dark:text-emerald-400">[SOLUTION]</span>: {c.solution}
                        </div>

                        {c.codeSnippet && (
                          <div className="flex flex-col gap-1 mt-1">
                            <div className="flex justify-end">
                              <button
                                onClick={() => handleCopyCode(c.codeSnippet!, snippetId)}
                                className="flex items-center gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-0.5 px-1"
                              >
                                {copiedId === snippetId ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-500" />
                                    <span className="text-emerald-500">COPIED</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>COPY</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="text-[11px] whitespace-pre overflow-x-auto py-1 font-mono p-2 border rounded text-emerald-700 bg-zinc-100 border-zinc-200 dark:text-emerald-400 dark:bg-zinc-950/40 dark:border-zinc-900">
                              {c.codeSnippet}
                            </pre>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section 6: Gallery Trigger */}
              <section id="gallery" className="scroll-mt-4 flex flex-col gap-4 border-t border-zinc-200 dark:border-zinc-900 pt-6 pb-6">
                <div className="font-medium text-xs flex items-center gap-2 text-zinc-900 dark:text-white">
                  <span># GALLERY</span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                    ({data.gallery.length} SHOWCASES)
                  </span>
                </div>

                <div
                  onClick={handleOpenGallery}
                  className="relative w-full h-80 cursor-pointer overflow-hidden flex items-center justify-center group border rounded border-zinc-200 bg-zinc-100/50 dark:border-zinc-900/60 dark:bg-transparent transition-colors"
                >
                  <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    {data.gallery.map((img) => (
                      <div
                        key={img.id}
                        className="absolute w-48 md:w-64 rounded overflow-hidden"
                        style={{
                          top: img.position?.top || "20%",
                          left: img.position?.left || "20%",
                          transform: `rotate(${img.position?.rotate || "0deg"})`,
                        }}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-28 md:h-36 object-cover filter brightness-75 contrast-110"
                        />
                      </div>
                    ))}
                  </div>

                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-emerald-500 transition-colors duration-200" />
                  <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-emerald-500 transition-colors duration-200" />
                  <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-emerald-500 transition-colors duration-200" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-emerald-500 transition-colors duration-200" />

                  <span className="relative z-10 text-xs text-zinc-600 group-hover:text-emerald-600 dark:text-zinc-400 dark:group-hover:text-emerald-400 transition-colors duration-200 tracking-wider">
                    [EXPLORE GALLERY]
                  </span>
                </div>
              </section>
            </div>
          </div>
        ) : (
          /* Transparent Lightbox Overlay */
          <div className="w-full h-full flex flex-col bg-transparent backdrop-blur-md  text-xs z-50 overflow-hidden relative">
            {!selectedGalleryItem ? (
              /* Grid-3 View (Pure Images Only) */
              <div className="w-full h-full flex flex-col">
                <div className="flex justify-end pb-2">
                  <button
                    onClick={handleCloseGallery}
                    className="p-1 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 min-h-0 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
                  {data.gallery.map((img) => (
                    <div
                      key={img.id}
                      onClick={() => setSelectedGalleryItem(img)}
                      className="group cursor-pointer relative overflow-hidden aspect-video"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 border border-zinc-300 dark:border-transparent"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Single Zoomed View */
              <div className="w-full h-full flex items-center justify-center relative">
                <button
                  onClick={() => setSelectedGalleryItem(null)}
                  className="absolute top-0 right-0 p-1.5 text-zinc-400 hover:text-white transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative max-w-full max-h-full flex items-center justify-center overflow-hidden rounded">
                  <img
                    src={selectedGalleryItem.src}
                    alt={selectedGalleryItem.alt}
                    className="max-w-full max-h-[82vh] object-contain border border-zinc-300 dark:border-transparent"
                  />

                  <div className="absolute bottom-0 inset-x-0 p-3 bg-black/75 backdrop-blur-sm text-zinc-100 flex flex-col gap-0.5">
                    <span className="font-semibold text-emerald-400 text-xs">
                      {selectedGalleryItem.caption}
                    </span>
                    {selectedGalleryItem.description && (
                      <p className="text-[11px] text-zinc-300 leading-snug">
                        {selectedGalleryItem.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}