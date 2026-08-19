// app/projects/[slug]/page.tsx
"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import ReactLenis from "@studio-freight/react-lenis";
import localFont from "next/font/local";
import { Maximize2, Minimize2, X, AlertTriangle, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import DocsContent from "./docsContent";
import { ProjectDoc, PROJECTS_DATA } from "./data";

const spleen = localFont({
  src: "../../../fonts/spleen.otf",
  variable: "--font-spleen",
});

// Helper function to verify if project data has actual content
function isProjectPopulated(data?: ProjectDoc): boolean {
  if (!data) return false;
  
  // Check if critical content sections exist and have items
  const hasDescription = data.description && data.description.length > 0;
  const hasStack = data.stack && data.stack.length > 0;
  const hasDocumentation = data.documentation && data.documentation.length > 0;
  
  return Boolean(hasDescription || hasStack || hasDocumentation);
}

export default function ProjectDocs() {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();
  const params = useParams();

  // Retrieve project slug from URL parameter
  const slug = (params?.slug as string) || "";
  const projectData = PROJECTS_DATA[slug.toLowerCase()];

  const isExists = Boolean(projectData);
  const isPopulated = isProjectPopulated(projectData);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsClosing(true);
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  return (
    <ReactLenis root>
      <div
        className={`flex flex-col items-center text-2xl bg-zinc-300/20 dark:bg-[#0d0d0f] w-full text-zinc-900 dark:text-white h-screen transition-all duration-300 ${
          isMaximized ? "p-0" : "p-6 md:p-14"
        } ${spleen.variable}`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isClosing
              ? { scale: 0.8, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full border border-zinc-200 dark:border-zinc-800 h-full flex flex-col overflow-hidden bg-zinc-50/80 dark:bg-zinc-950/40 transition-all duration-300 ${
            isMaximized ? "max-w-full border-none" : "max-w-6xl"
          }`}
        >
          {/* Header Bar */}
          <header className="w-full border-b border-zinc-200 dark:border-zinc-900 p-4 flex justify-between items-center text-xs font-mono select-none shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 dark:text-zinc-400 font-semibold tracking-wider">
                # {projectData?.title ? projectData.title.toLowerCase() : slug.toLowerCase() || "unknown"} documentation / system specs
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMaximized((prev) => !prev)}
                aria-label={isMaximized ? "Minimize" : "Maximize"}
                className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center justify-center transition-colors text-[10px]"
              >
                {isMaximized ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>

              <button
                onClick={handleClose}
                aria-label="Close"
                className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-[#16a34a] dark:hover:text-[#22C55E] flex items-center justify-center transition-colors text-[10px]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Content Container */}
          <div
            className={`flex-1 w-full min-h-0 overflow-hidden ${
              isMaximized ? "flex justify-center" : ""
            }`}
            data-lenis-prevent
          >
            <div
              className={`w-full h-full ${
                isMaximized ? "max-w-5xl" : ""
              }`}
            >
              {isExists && isPopulated ? (
                /* Valid & Populated Project */
                <DocsContent data={projectData} />
              ) : isExists && !isPopulated ? (
                /* Coming Soon State (Project entry exists, but lacks details/values) */
                <div className="w-full h-full p-6 flex flex-col font-mono text-xs select-none">
                  {/* Top Navigation */}
                  <div className="flex items-center gap-2 pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-900 shrink-0">
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
                    <span className="font-semibold text-amber-500">
                      {projectData?.title.toLowerCase() || slug}
                    </span>
                  </div>

                  {/* Coming Soon Body */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6 gap-4">
                    <div className="p-3 rounded border border-amber-500/20 bg-amber-500/10 text-amber-500">
                      <Clock className="w-6 h-6 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-1 max-w-md">
                      <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase">
                        [PROJECT IN PROGRESS]
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-[11px]">
                        Documentation for <span className="text-amber-500 font-semibold">{projectData?.title || slug}</span> is currently being compiled and will be available soon.
                      </p>
                    </div>

                    <div className="p-3 border rounded border-zinc-200 dark:border-zinc-900 bg-zinc-100/50 dark:bg-zinc-950/50 text-[11px] text-zinc-500 dark:text-zinc-400 text-center font-mono max-w-xs w-full mt-2">
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold">STATUS: UNDER DEVELOPMENT</p>
                    </div>
                  </div>
                </div>
              ) : (
                /* 404 Error State (Project slug doesn't exist at all) */
                <div className="w-full h-full p-6 flex flex-col font-mono text-xs select-none">
                  {/* Top Navigation */}
                  <div className="flex items-center gap-2 pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-900 shrink-0">
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
                    <span className="font-semibold text-red-500">
                      {slug || "not-found"}
                    </span>
                  </div>

                  {/* Error Body */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6 gap-4">
                    <div className="p-3 rounded border border-red-500/20 bg-red-500/10 text-red-500">
                      <AlertTriangle className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col gap-1 max-w-md">
                      <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase">
                        [404] DOCUMENTATION NOT FOUND
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-[11px]">
                        No entry located in system data matching key: <code className="text-red-500">"{slug}"</code>.
                      </p>
                    </div>

                    <div className="p-3 border rounded border-zinc-200 dark:border-zinc-900 bg-zinc-100/50 dark:bg-zinc-950/50 text-[11px] text-zinc-500 dark:text-zinc-400 text-left font-mono max-w-sm w-full mt-2">
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">// Available records:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {Object.keys(PROJECTS_DATA).map((key) => (
                          <li key={key}>
                            <Link href={`/projects/${key}`} className="hover:underline text-zinc-700 dark:text-zinc-300">
                              {key}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </ReactLenis>
  );
}