"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ReactLenis from "@studio-freight/react-lenis";
import localFont from "next/font/local";
import AboutStory from "./aboutstory";
import { Maximize2, Minimize2, X } from "lucide-react";

const spleen = localFont({
  src: "../fonts/spleen.otf",
  variable: "--font-spleen",
});

export default function About() {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  // Handles animated exit before redirecting
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsClosing(true);
    // Wait for the scale-down animation to complete before changing routes
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  return (
    <>
      <ReactLenis root>
        <div
          className={`flex flex-col items-center text-2xl bg-[#0d0d0f] w-full text-white h-screen transition-all duration-300 ${
            isMaximized ? "p-0" : "p-6 md:p-14"
          } ${spleen.variable}`}
        >
          {/* Animated Window Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isClosing
                ? { scale: 0.8, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full border border-zinc-800 h-full flex flex-col overflow-hidden bg-zinc-950/40 transition-all duration-300 ${
              isMaximized ? "max-w-full border-none" : "max-w-6xl"
            }`}
          >
            {/* Retro Window Header */}
            <header className="w-full border-b border-zinc-900 p-4 flex justify-between items-center text-xs font-mono select-none shrink-0">
              {/* Left Side: Title */}
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 font-semibold tracking-wider">
                  # more about me
                </span>
              </div>

              {/* Right Side: Window Control Buttons */}
              <div className="flex items-center gap-3">
                {/* Maximize / Restore Toggle Button */}
                <button
                  onClick={() => setIsMaximized((prev) => !prev)}
                  aria-label={isMaximized ? "Minimize" : "Maximize"}
                  className="w-5 h-5 text-zinc-400 hover:text-zinc-100 flex items-center justify-center transition-colors text-[10px]"
                >
                  {isMaximized ? (
                    <Minimize2 className="w-3.5 h-3.5" />
                  ) : (
                    <Maximize2 className="w-3.5 h-3.5" />
                  )}
                </button>

                {/* Exit / Close Button (Triggers Exit Animation) */}
                <button
                  onClick={handleClose}
                  aria-label="Close"
                  className="w-5 h-5 text-zinc-400 hover:text-[#f59e0b] flex items-center justify-center transition-colors text-[10px]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </header>

            {/* Full Width Story Area - Centered when maximized */}
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
                <AboutStory />
              </div>
            </div>
          </motion.div>
        </div>
      </ReactLenis>
    </>
  );
}