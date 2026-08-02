import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper component for typewriter character animation
function TypewriterText({
  text,
  delay = 0,
  speed = 0.02,
  className = "",
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={childVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Fade/slide-in container for block elements
const fadeInUp = {
  hidden: { opacity: 0, y: 6 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: "easeOut" },
  }),
};

// Variants for staggered parent grid container
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 2.1, // Starts right after bio finishes
      staggerChildren: 0.15, // Delay between each row reveal
    },
  },
};

// Variants for each individual grid row
const gridItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const INFO_ITEMS = [
  { label: "> Full Name", value: "Dávid Papp" },
  { label: "> Date of Birth", value: "12/21/2002" },
  { label: "> Profession", value: "Software Developer" },
  { label: "> Currently Learning", value: "c++" },
  { label: "> Location", value: "Hungary" },
];

function Intro() {
  const [activeMode, setActiveMode] = useState<"1" | "2" | "3">("1");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Handle Initial Load (1500ms timeout)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle Mode Switching Loading State (1500ms timeout)
  const handleModeChange = (mode: "1" | "2" | "3") => {
    if (mode === activeMode) return;
    setIsLoading(true);
    setActiveMode(mode);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <div className="min-w-96 max-w-96 h-full p-4 flex flex-col gap-6 text-zinc-100 shadow-xl overflow-hidden font-mono">
        {/* Bio / Header */}
        <div className="flex flex-col gap-2">
          <div className="tracking-wide text-lg font-bold text-[#f59e0b]">
            <TypewriterText text="Hello World!" speed={0.04} delay={0.2} />
          </div>
          <div className="text-sm text-zinc-300 leading-relaxed min-h-[48px]">
            <TypewriterText
              text="Hi, I'm Dávid a Full-Stack Developer. My goal is to write software for the aerospace and space industry."
              speed={0.015}
              delay={0.7}
            />
          </div>
        </div>

        {/* Info Table - Animated Row by Row */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 text-sm"
        >
          {INFO_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={gridItemVariants}
              className="grid grid-cols-2 gap-2"
            >
              <div className="text-zinc-400">{item.label}</div>
              <div className="text-zinc-100">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Aerospace Orbital Radar & Trajectory Display */}
        <motion.div
          custom={3.2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative flex-1 min-h-[140px] w-full flex items-center justify-center my-2 overflow-hidden rounded border border-zinc-900/60 bg-zinc-950/40"
        >
          {/* Background Grid & Crosshairs */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20" />
          <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-zinc-800/80" />
          <div className="absolute inset-y-0 left-1/2 border-r border-dashed border-zinc-800/80" />

          {/* SVG Canvas */}
          <svg
            className="absolute inset-0 w-full h-full p-2"
            viewBox="0 0 300 150"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="cyan-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Orbit Rings around Central Body */}
            <circle cx="150" cy="75" r="30" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="150" cy="75" r="55" fill="none" stroke="#18181b" strokeWidth="1" />

            {/* Central Planet Mass (Main Dot) */}
            <g>
              <circle cx="150" cy="75" r="16" fill="#f59e0b" opacity="0.2" />
              <circle cx="150" cy="75" r="9" fill="#f59e04" stroke="#f59e0b" strokeWidth="1" />
            </g>

            {/* SKETCH #1 */}
            {activeMode === "1" && (
              <g>
                <path
                  d="M 20 0 Q 150 -50 280 50"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />
                <g filter="url(#cyan-glow)">
                  <circle r="4" fill="#f59e0b">
                    <animateMotion
                      key="case-1"
                      dur="5s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="M 20 0 Q 150 -50 280 50"
                      calcMode="spline"
                      keySplines="0.4 0 0.6 1"
                    />
                  </circle>
                </g>
              </g>
            )}

            {/* SKETCH #2 */}
            {activeMode === "2" && (
              <g>
                <path
                  d="M 30 130 C 100 110, 110 50, 150 50 C 190 50, 200 110, 220 140"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  className="opacity-80"
                />
                <g filter="url(#cyan-glow)">
                  <circle r="4" fill="#f59e0b">
                    <animateMotion
                      key="case-2"
                      dur="3.5s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="M 30 130 C 100 110, 110 50, 150 50 C 190 50, 200 110, 220 140"
                    />
                  </circle>
                </g>
              </g>
            )}

            {/* SKETCH #3 */}
            {activeMode === "3" && (
              <g>
                <circle cx="215" cy="105" r="7" fill="#064e3b" opacity="0.5" />
                <circle cx="215" cy="105" r="4" fill="#059669" stroke="#34d399" strokeWidth="1" />

                <path
                  d="M 25 125 C 80 110, 100 52, 145 52 C 185 52, 185 105, 200 120 C 200 120, 230 155, 255 170"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  className="opacity-80"
                />
                <g filter="url(#cyan-glow)">
                  <circle r="4" fill="#f59e0b">
                    <animateMotion
                      key="case-3"
                      dur="4s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="M 25 125 C 80 110, 100 52, 145 52 C 185 52, 185 105, 200 120 C 200 120, 230 155, 255 170"
                    />
                  </circle>
                </g>
              </g>
            )}
          </svg>

          {/* Fixed Aspect Radar Sweep */}
          <motion.div
            className="w-32 h-32 border-r border-[#f59e0b]/30 rounded-full bg-gradient-to-tr from-transparent via-transparent to-[#f59e0b]/10 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Telemetry HUD Label */}
          <div className="absolute top-1.5 left-2 font-mono text-[9px] text-zinc-600 tracking-widest pointer-events-none">
            {activeMode === "1" && "TRAJECTORY // 01.WIDE_ARC"}
            {activeMode === "2" && "TRAJECTORY // 02.CLOSE_HAIRPIN"}
            {activeMode === "3" && "TRAJECTORY // 03.DUAL_DEFLECTION"}
          </div>

          {/* Mode Switch Buttons */}
          <div className="absolute top-1.5 right-1.5 z-10 flex flex-col gap-1 font-mono text-[9px]">
            <button
              onClick={() => handleModeChange("1")}
              className={`w-fit px-2 h-5 flex items-center justify-center border transition-colors ${
                activeMode === "1"
                  ? "bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/20"
                  : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-zinc-200"
              }`}
            >
              case 1
            </button>
            <button
              onClick={() => handleModeChange("2")}
              className={`w-fit px-2 h-5 flex items-center justify-center border transition-colors ${
                activeMode === "2"
                  ? "bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/20"
                  : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-zinc-200"
              }`}
            >
              case 2
            </button>
            <button
              onClick={() => handleModeChange("3")}
              className={`w-fit px-2 h-5 flex items-center justify-center border transition-colors ${
                activeMode === "3"
                  ? "bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/20"
                  : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-zinc-200"
              }`}
            >
              case 3
            </button>
          </div>

          {/* Active Status Badge */}
          <div className="absolute bottom-1.5 right-2 font-mono text-[9px] text-[#f59e0b]/70 tracking-widest flex items-center gap-1 pointer-events-none">
            <span className="w-1 h-1 rounded-full bg-[#f59e0b] animate-pulse" />
            {activeMode === "1" && "WIDE.SLINGSHOT"}
            {activeMode === "2" && "HAIRPIN.PASS"}
            {activeMode === "3" && "BINARY.DEFLECTION"}
          </div>

          {/* Plain Text "loading..." Overlay */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-[#0d0d0f] select-none"
              >
                <div className="flex items-center font-mono text-xs text-zinc-400 tracking-wider">
                  <span>Loading</span>
                  <div className="flex ml-0.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.15,
                        }}
                      >
                        .
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Minimal Text Social Links */}
        <motion.div
          custom={3.6}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between pt-3 text-xs text-zinc-400"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f59e0b] transition-colors duration-200"
          >
            github/<span className="text-zinc-200">davidpapp</span>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f59e0b] transition-colors duration-200"
          >
            linkedin/<span className="text-zinc-200">davidpapp</span>
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Intro;