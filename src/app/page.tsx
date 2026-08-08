"use client";

import HungaryWidget from "@/components/my-components/home/Info";
import Intro from "@/components/my-components/home/Intro";
import MainMenu from "@/components/my-components/home/Menu";
import ReactLenis from "@studio-freight/react-lenis";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const spleen = localFont({
  src: "./fonts/spleen.otf",
  variable: "--font-spleen",
});

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <div
          className={`flex flex-col items-center bg-[#0d0d0f] w-full text-white min-h-screen lg:h-screen p-4 sm:p-6 lg:p-14 ${spleen.variable}`}
        >
          {/* Animated Retro Window Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl border border-zinc-800 flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden bg-zinc-950/40"
          >
            <Intro />
            <HungaryWidget />
            <MainMenu />
          </motion.div>
        </div>
      </ReactLenis>
    </>
  );
}