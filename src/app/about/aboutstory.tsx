"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Container variant with an initial delay to sync with the box pop-up animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4, // Wait 400ms for the parent box pop-up to finish
      staggerChildren: 0.1, // Smooth cascade for each section
    },
  },
};

// Item variant for subtle fade-up reveals
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function AboutStory() {
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
      className="w-full h-full p-6 text-zinc-300 font-mono flex flex-col justify-between overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {/* Story Narrative Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl space-y-6 text-sm md:text-base leading-relaxed text-zinc-300"
      >
        {/* Header Title Section */}
        <motion.div variants={itemVariants} className="space-y-2 border-b border-zinc-800 pb-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400 tracking-widest uppercase flex items-center gap-2">
              &gt; PERSONAL_ARCHIVE
            </span>
            <div className="flex items-center gap-4 text-zinc-500 font-mono">
              <span>ETA ~5 MIN READ</span>
              <span>•</span>
              <span>T+{formatUptime(uptime)}</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight pt-1">
            MY JOURNEY THROUGH CODE &amp; SPACE
          </h1>
        </motion.div>

        {/* Section 1: Early Spark & High School Robotics */}
        <motion.div variants={itemVariants} className="space-y-3">
          <span className="text-xs text-zinc-400 tracking-widest uppercase block font-semibold">
            &gt; 01. THE FIRST SPARK (2017)
          </span>
          <p>
            My coding journey started back in 2017. To be honest, I wasn't particularly passionate at first. In school, we focused on basic exercises calculating simple math sums and printing output to a command terminal, which felt abstract and distant from anything real.
          </p>
          <p className="text-zinc-400">
            Everything changed when we introduced web development. Seeing logic translate directly into visual, interactive interfaces on a screen was the exact moment code clicked for me. Shortly after, I joined an after-school LEGO programming team where we built and programmed autonomous robots for regional competitions. That experience opened my eyes to a fundamental reality: programming isn't just about software it’s a dynamic bridge that can connect to literally anything in the physical world.
          </p>
        </motion.div>

        {/* Section 2: Industry Immersion at Webváltó Kft. */}
        <motion.div variants={itemVariants} className="space-y-3">
          <span className="text-xs text-zinc-400 tracking-widest uppercase block font-semibold">
            &gt; 02. REAL-WORLD INDUSTRY DUAL TRAINING
          </span>
          <p>
            Deciding to take development seriously, I enrolled in an intensive 1-year Software Developer &amp; Tester program. Right on day one, they announced an opportunity for selected students to join a dual-training program directly inside an actual IT company: <strong className="text-zinc-100">Webváltó Kft.</strong>
          </p>
          <p className="text-zinc-400">
            I pushed hard, passed the selection, and stepped into my first real tech company environment. For our final graduation exam, we were tasked with building both a web application and a desktop application in teams of three. I took charge of the frontend my favorite domain. Guided by an industry mentor who coordinated our progress, reviewed code, and ran structured status meetings, I developed the frontend interfaces, handled comprehensive technical documentation, and helped lead our team to a successful project defense and graduation.
          </p>
        </motion.div>

        {/* Section 3: The Space & Physics Connection */}
        <motion.div variants={itemVariants} className="space-y-3">
          <span className="text-xs text-zinc-400 tracking-widest uppercase block font-semibold">
            &gt; 03. CONNECTING THE DOTS: SPACE &amp; SIMULATION
          </span>
          <p>
            Parallel to coding, I always had a deep fascination with space and cosmology. Standard school physics classes rarely touched on orbital mechanics or deep space science, so I turned to independent learning binge watching science communicators and astrophysicists on YouTube. I dreamed of discovering or inventing something meaningful for space exploration, but always assumed it was out of reach without a traditional physics background.
          </p>
          <p className="text-zinc-400">
            Then came the realization: <em className="text-zinc-200 not-italic">I could combine programming, physics, and mathematics into a single discipline.</em> That revelation unlocked my true ambition: targeting space industry development, specifically embedded software for satellites, rocket avionics, and complex orbital physics simulations.
          </p>
        </motion.div>

        {/* Section 4: Current Focus & Looking Ahead */}
        <motion.div variants={itemVariants} className="space-y-3">
          <span className="text-xs text-zinc-400 tracking-widest uppercase block font-semibold">
            &gt; 04. CURRENT TRAJECTORY &amp; WHAT'S NEXT
          </span>
          <p>
            After finishing the 1-year software development school, I wasn't entirely sure if standard full-stack development was where my heart truly lay, so I stepped away for a year to gain clarity. Coming back, my love for frontend craftsmanship remained intact, but I now had a much clearer ultimate target: becoming a developer in the aerospace and space sector.
          </p>
          <p className="text-zinc-400">
            Knowing how rigorous the space industry is, I researched the requirements: formal degree credentials and deep proficiency in high-performance system languages like **C++**. Having missed this year's university admission cycle, I am treating this gap year as an intense personal incubator. 
          </p>
          <p className="text-zinc-300">
            Over the next 12 months, I am diving headfirst into C++, building custom physics-based simulations, and sharpening my math foundations before starting university next year. If you're interested in following this journey, check back on this portfolio as new simulations and builds go live.
          </p>
        </motion.div>
      </motion.div>

      {/* Social Links Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.85 }} // Delayed sync with narrative finish
        className="pt-8 mt-12 border-t border-zinc-800 flex flex-wrap justify-between items-center text-xs text-zinc-500 font-mono gap-4 select-none shrink-0"
      >
        <span className="text-zinc-400">&gt; CONNECT</span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/impappdavid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f59e0b] transition-colors duration-200"
          >
            github/<span className="text-zinc-200">impappdavid</span>
          </a>

          <a
            href="https://linkedin.com/in/impappdavid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f59e0b] transition-colors duration-200"
          >
            linkedin/<span className="text-zinc-200">impappdavid</span>
          </a>
          <a
            href="mailto:impappdavid@gmail.com"
            className="hover:text-[#f59e0b] transition-colors duration-200"
          >
            <span className="text-zinc-200">impappdavid</span>@gmail.com
          </a>
        </div>
      </motion.footer>
    </div>
  );
}