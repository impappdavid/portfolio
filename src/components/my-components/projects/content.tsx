"use client";
import { Inter } from "next/font/google";
import Footer from "../footer";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";

const kodemonoFont = Inter({ subsets: ["latin"], weight: "400" });

const containerReveal = {
  initial: { opacity: 0, y: 32, scale: 0.985, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 420, damping: 32, mass: 0.9 }
  }
};

const heroChildren = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } }
};

const heroItem = {
  initial: { opacity: 0, y: 18, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const cardReveal = {
  initial: { opacity: 0, y: 32, scale: 0.985, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, delay: 0.2, ease: "easeOut" }
  }
};

const footerReveal = {
  initial: { opacity: 0, y: 28, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

function Content() {
  return (
    <div className="w-full">
      <motion.div
        variants={containerReveal}
        initial="initial"
        animate="animate"
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-64 flex flex-col items-center text-center gap-16 ${kodemonoFont.className}`}
      >
        <motion.div
          variants={heroChildren}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={heroItem} className="p-2 rounded-2xl bg-zinc-100 text-blue-600">
            <motion.svg
              initial={{ rotate: -3 }}
              animate={{ rotate: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.05 } }}
              style={{ originX: "50%", originY: "60%" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-24 h-24"
            >
              <path
                fill="currentColor"
                d="M22 9.885v7.7a3.85 3.85 0 0 1-2.373 3.542a3.8 3.8 0 0 1-1.467.288H5.83A3.82 3.82 0 0 1 2 17.585V6.425a3.82 3.82 0 0 1 3.83-3.84h3.08a3.87 3.87 0 0 1 3.2 1.71l.87 1.33a1 1 0 0 0 .36.32a.94.94 0 0 0 .47.12h4.35a3.8 3.8 0 0 1 2.71 1.11A3.85 3.85 0 0 1 22 9.885"
              />
            </motion.svg>
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.div variants={heroItem} className="text-5xl font-semibold">A List</motion.div>
            <motion.div variants={heroItem} className="text-5xl font-semibold text-zinc-400">of projects I love</motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={cardReveal}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <ProjectCard />
        </motion.div>

        <motion.div
          variants={footerReveal}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Content;
