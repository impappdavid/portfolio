"use client";
import { Inter } from "next/font/google";
import Footer from "../footer";
import { motion } from "framer-motion";
import FreelanceStats from "./stats";
import Experience from "./experience";

const kodemonoFont = Inter({ subsets: ["latin"], weight: "500" });

const containerReveal = {
  initial: { opacity: 0, y: 32, scale: 0.985, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 1, bounce: 0.15 }
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
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

function Content() {
  return (
    <>
      <div className="w-full">
        <motion.div
          variants={containerReveal}
          initial="initial"
          animate="animate"
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-64 flex flex-col items-center text-center gap-16 ${kodemonoFont.className}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 480, damping: 34 }}
            className="p-2 rounded-2xl bg-zinc-100"
          >
            <img src="/me2.png" alt="me.png" className="w-24 h-24" />
          </motion.div>

          <motion.div
            variants={heroChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-2"
          >
            <motion.div variants={heroItem} className="text-5xl font-semibold">
              I build
            </motion.div>
            <motion.div variants={heroItem} className="text-5xl font-semibold text-zinc-400 max-w-xl">
              fast, functional, and elegant experiences.
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-64 w-full">
            <motion.div
              variants={cardReveal}
              initial="initial"
              animate="animate"
              className="w-full"
            >
              <FreelanceStats />
            </motion.div>

            <motion.div
              variants={cardReveal}
              initial="initial"
              animate="animate"
              transition={{ type: "spring", stiffness: 460, damping: 34, delay: 0.05 }}
              className="w-full"
            >
              <div className="flex flex-col gap-6 items-start w-full">

                <div className="flex flex-col gap-1 items-start w-full">
                  <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>INTRODUCTION</div>
                  <div className="w-full flex justify-between items-center">
                    <div className="text-3xl font-semibold text-start">I’m a web developer building scalable, user-focused applications combining clean code with creative problem-solving.</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardReveal}
              initial="initial"
              animate="animate"
              transition={{ type: "spring", stiffness: 460, damping: 34, delay: 0.05 }}
              className="w-full"
            >
              <Experience />
            </motion.div>

            

            <motion.div
              variants={footerReveal}
              initial="initial"
              animate="animate"
              className="w-full"
            >
              <Footer />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Content;
