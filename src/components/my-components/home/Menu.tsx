"use client";

import React, { useState, useRef, useEffect } from "react";

import { Settings, SquareTerminal } from "lucide-react";

import { motion } from "framer-motion";



type HistoryItem = {

  type: "input" | "output" | "error";

  text: string;

};



type DirectoryData = {

  name: string;

  description: string;

  targets: Record<string, string>;

  info?: string[];

};



const DIRECTORIES: Record<string, DirectoryData> = {

  about: {

    name: "about",

    description: "Personal overview, background, tech stack, and future goals.",

    targets: {

      "more-about-me": "/about",

      "tech-stack": "/about/stack",

    },

  },

  projects: {

    name: "projects",

    description: "Selected web development projects & upcoming builds.",

    targets: { "web-development": "/projects/web", s00n: "/projects/soon" },

  },

  experience: {

    name: "experience",

    description: "Professional background and internship history (6 months total).",

    targets: {},

    info: [

      "Freelance Frontend Developer (Fiverr) | May 2025 – Aug 2025",

      "Software Developer Intern (Webváltó Kft.) | Jan 2023 – Apr 2023",

    ],

  },

  education: {

    name: "education",

    description: "Academic background and certifications.",

    targets: {},

    info: [

      "Full Stack Open (Univ. of Helsinki) | 2025 – 2026",

      "Software Dev. Tech. (BMSZC Petrik) | 2022 – 2023",

      "IT System Operator (BMSZC Újpest) | 2017 – 2022",

    ],

  },

};



const BASE_PATH = "Portfolio:\\David";



const WELCOME_BANNER = `
  ██████╗  █████╗ ██╗   ██╗██╗██████╗
  ██╔══██╗██╔══██╗██║   ██║██║██╔══██╗
  ██║  ██║███████║██║   ██║██║██║  ██║
  ██║  ██║██╔══██║╚██╗ ██╔╝██║██║  ██║
  ██████╔╝██║  ██║ ╚████╔╝ ██║██████╔╝
  ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═════╝

Welcome to Dávid Papp Terminal Interface v1.0.0

─────────────────────────────────────────────────

Type 'help' to see available commands.
Type 'ls' to list available directories or targets.
Use 'cd <dir>' to enter a section (e.g., 'cd about').
`;



// Dynamic Motion Variants for the Graphical Menu

const getMenuContainerVariants = (delay: number) => ({

  hidden: { opacity: 0 },

  visible: {

    opacity: 1,

    transition: {

      delayChildren: delay, // 2.8s initial delay, 0.05s on return from terminal

      staggerChildren: 0.06, // Faster stagger speed

    },

  },

});



const menuItemVariants = {

  hidden: { opacity: 0, x: -8 },

  visible: {

    opacity: 1,

    x: 0,

    transition: { duration: 0.2, ease: "easeOut" },

  },

};



export default function MainMenu() {

  const [isTerminal, setIsTerminal] = useState(false);

  const [activeFolder, setActiveFolder] = useState<string>("");

  const [input, setInput] = useState("");

  const [history, setHistory] = useState<HistoryItem[]>([]);



  // Tracks if user has seen the menu at least once

  const [hasSeenMenu, setHasSeenMenu] = useState(false);



  // Typewriter animation states

  const [displayedBanner, setDisplayedBanner] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const [hasInitializedTerminal, setHasInitializedTerminal] = useState(false);



  const inputRef = useRef<HTMLInputElement>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);



  const currentDir = activeFolder

    ? `${BASE_PATH}\\${activeFolder}`

    : BASE_PATH;



  // Mark menu as seen after the initial sequence runs

  useEffect(() => {

    if (!hasSeenMenu && !isTerminal) {

      const timer = setTimeout(() => {

        setHasSeenMenu(true);

      }, 3500); // Intro timing offset

      return () => clearTimeout(timer);

    }

  }, [hasSeenMenu, isTerminal]);



  // Terminal welcome typewriter trigger

  useEffect(() => {

    if (isTerminal && !hasInitializedTerminal) {

      setIsTyping(true);

      setDisplayedBanner("");

      let i = 0;

      const speed = 3;



      const timer = setInterval(() => {

        if (i < WELCOME_BANNER.length) {

          setDisplayedBanner((prev) => prev + WELCOME_BANNER.charAt(i));

          i++;

        } else {

          clearInterval(timer);

          setIsTyping(false);

          setHasInitializedTerminal(true);

          setHistory([{ type: "output", text: WELCOME_BANNER }]);

        }

      }, speed);



      return () => clearInterval(timer);

    }

  }, [isTerminal, hasInitializedTerminal]);



  const handleTerminalClick = () => {

    if (isTyping) {

      setIsTyping(false);

      setHasInitializedTerminal(true);

      setDisplayedBanner(WELCOME_BANNER);

      setHistory([{ type: "output", text: WELCOME_BANNER }]);

    }

    inputRef.current?.focus();

  };



  useEffect(() => {

    if (scrollContainerRef.current) {

      scrollContainerRef.current.scrollTop =

        scrollContainerRef.current.scrollHeight;

    }

  }, [history, displayedBanner, isTerminal]);



  useEffect(() => {

    if (isTerminal && !isTyping) {

      inputRef.current?.focus();

    }

  }, [isTerminal, isTyping]);



  const handleCommand = (e: React.FormEvent) => {

    e.preventDefault();

    const cmd = input.trim();

    if (!cmd) return;



    const newHistory: HistoryItem[] = [

      ...history,

      { type: "input", text: `${currentDir} $> ${cmd}` },

    ];

    const parts = cmd.split(" ");

    const mainCmd = parts[0].toLowerCase();

    const arg = parts[1]?.toLowerCase();



    switch (mainCmd) {

      case "help":

        newHistory.push({

          type: "output",

          text: `AVAILABLE COMMANDS:

  ls / list         - List directories or targets/info in current path

  cd <dir>          - Change directory (e.g., 'cd about', 'cd ..' to return)

  goto <target>     - Jump to target page (e.g., 'goto tech-stack')

  cat [dir]         - Print directory details/info

  clear             - Clear terminal history

  exit / gui        - Return to graphical menu mode`,

        });

        break;



      case "ls":

      case "list":

        if (!activeFolder) {

          newHistory.push({

            type: "output",

            text: `DIRECTORIES:\n  about\\\n  projects\\\n  experience\\\n  education\\\n\nUse 'cd <dir>' to enter a section.`,

          });

        } else {

          const dirData = DIRECTORIES[activeFolder];

          const targetKeys = Object.keys(dirData ? dirData.targets : {});

         

          if (targetKeys.length === 0) {

            const infoLines = (dirData?.info || [])

              .map((item) => `  # ${item}`)

              .join("\n");



            newHistory.push({

              type: "output",

              text: `[${currentDir.toUpperCase()}]:\n(No redirect links available for this section)\n\nINFORMATIONAL ENTRIES:\n${infoLines}`,

            });

          } else {

            const targetsList = targetKeys.map((t) => `  * ${t}`).join("\n");

            newHistory.push({

              type: "output",

              text: `TARGETS IN [${currentDir.toUpperCase()}]:\n${targetsList}\n\nUse 'goto <target>' to navigate.`,

            });

          }

        }

        break;



      case "cd":

        if (!arg || arg === "~" || arg === "/" || arg === "..") {

          setActiveFolder("");

          newHistory.push({

            type: "output",

            text: `Returned to ${BASE_PATH}`,

          });

        } else if (DIRECTORIES[arg]) {

          setActiveFolder(arg);

          const dirData = DIRECTORIES[arg];

          let outputText = `Entered ${BASE_PATH}\\${arg}\n${dirData.description}`;

          if (dirData.info && dirData.info.length > 0) {

            outputText += `\nType 'ls' or 'cat' to view detailed items.`;

          } else {

            outputText += `\nType 'ls' to view available target links.`;

          }

          newHistory.push({

            type: "output",

            text: outputText,

          });

        } else {

          newHistory.push({

            type: "error",

            text: `cd: no such directory: ${arg}. Type 'ls' for available directories.`,

          });

        }

        break;



      case "goto":

        if (!arg) {

          newHistory.push({ type: "error", text: "Usage: goto <target>" });

        } else {

          let targetPath = "";

          if (activeFolder && DIRECTORIES[activeFolder]?.targets[arg]) {

            targetPath = DIRECTORIES[activeFolder].targets[arg];

          } else {

            for (const dir of Object.values(DIRECTORIES)) {

              if (dir.targets[arg]) {

                targetPath = dir.targets[arg];

                break;

              }

            }

          }



          if (targetPath) {

            newHistory.push({

              type: "output",

              text: `Navigating to ${targetPath} --- ...`,

            });

            setHistory(newHistory);

            setInput("");



            setTimeout(() => {

              window.location.href = targetPath;

            }, 1200);

            return;

          } else {

            newHistory.push({

              type: "error",

              text: `Target '${arg}' not found. Type 'ls' inside directory to view available targets.`,

            });

          }

        }

        break;



      case "cat": {

        const targetDirKey = arg || activeFolder;

        if (!targetDirKey) {

          newHistory.push({

            type: "output",

            text: `Root directory [${BASE_PATH}]. Use 'cd <dir>' or 'cat <dir>' to view a section.`,

          });

        } else if (DIRECTORIES[targetDirKey]) {

          const dirData = DIRECTORIES[targetDirKey];

          let outputText = `[${targetDirKey.toUpperCase()}]: ${dirData.description}`;

          if (dirData.info && dirData.info.length > 0) {

            const infoList = dirData.info.map((item) => `  # ${item}`).join("\n");

            outputText += `\n\nDETAILS:\n${infoList}`;

          }

          newHistory.push({

            type: "output",

            text: outputText,

          });

        } else {

          newHistory.push({

            type: "error",

            text: `cat: directory not found: ${arg}`,

          });

        }

        break;

      }



      case "clear":

        setHistory([]);

        setInput("");

        return;



      case "exit":

      case "gui":

        setIsTerminal(false);

        setInput("");

        return;



      default:

        newHistory.push({

          type: "error",

          text: `Command not found: '${cmd}'. Type 'help' for available commands.`,

        });

        break;

    }



    setHistory(newHistory);

    setInput("");

  };



  return (

    <div className="w-full max-h-[855px] p-4 flex flex-col font-mono text-zinc-300 overflow-hidden select-none">

      {/* Top Bar / Header */}

      <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-900/80 shrink-0">

        <div className="flex items-center gap-2 text-zinc-500 text-sm">

          <span>#</span>

          <span className="text-zinc-400">

            {isTerminal ? "terminal" : "main"}

          </span>

        </div>

        <div className="flex items-center gap-3 text-zinc-500">

          <button

            onClick={() => setIsTerminal(!isTerminal)}

            className={`transition-colors ${

              isTerminal ? "text-[#22C55E]" : "hover:text-zinc-200"

            }`}

            title="Toggle Terminal"

          >

            <SquareTerminal className="w-4 h-4" />

          </button>

          <button className="hover:text-zinc-200 transition-colors">

            <Settings className="w-4 h-4" />

          </button>

        </div>

      </div>



      {/* TERMINAL MODE */}

      {isTerminal ? (

        <div

          ref={scrollContainerRef}

          className="flex-1 min-h-0 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-xs cursor-text"

          onClick={handleTerminalClick}

        >

          <div className="flex flex-col gap-2">

            {isTyping ? (

              <div className="text-zinc-400 pl-2 border-l border-zinc-800 whitespace-pre-wrap leading-relaxed">

                {displayedBanner}

                <span className="inline-block w-2 h-3 bg-cyan-400 animate-pulse ml-0.5 align-middle" />

              </div>

            ) : (

              history.map((item, index) => (

                <div

                  key={index}

                  className="whitespace-pre-wrap leading-relaxed"

                >

                  {item.type === "input" && (

                    <div className="flex items-center gap-2 text-cyan-400">

                      <span className="text-zinc-200">{item.text}</span>

                    </div>

                  )}

                  {item.type === "output" && (

                    <div className="text-zinc-400 pl-2 border-l border-zinc-800">

                      {item.text}

                    </div>

                  )}

                  {item.type === "error" && (

                    <div className="text-red-400/90 pl-2 border-l border-red-900/50">

                      {item.text}

                    </div>

                  )}

                </div>

              ))

            )}



            {!isTyping && (

              <form

                onSubmit={handleCommand}

                className="flex items-center gap-2 pt-1 pb-2"

              >

                <span className="text-[#22C55E] shrink-0">

                  {currentDir} $&gt;

                </span>

                <input

                  ref={inputRef}

                  type="text"

                  value={input}

                  onChange={(e) => setInput(e.target.value)}

                  className="w-full bg-transparent outline-none text-zinc-100 placeholder-zinc-700"

                  placeholder="type 'help' or command..."

                />

              </form>

            )}

          </div>

        </div>

      ) : (

        /* GRAPHICAL MENU WITH DYNAMIC INITIAL DELAY */

        <motion.div

          variants={getMenuContainerVariants(hasSeenMenu ? 0.05 : 0.1)}

          initial="hidden"

          animate="visible"

          className="flex-1 min-h-0 flex flex-col gap-6 max-w-md overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"

        >

          <motion.div variants={menuItemVariants} className="text-zinc-400 font-semibold text-base">

            .menu

          </motion.div>



          {/* Category 1: About */}

          <div className="flex flex-col gap-1.5 pl-2">

            <motion.div variants={menuItemVariants} className="text-zinc-300 font-medium text-sm">

              # About

            </motion.div>

            <motion.a

              variants={menuItemVariants}

              href="/about"

              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-[#22C55E] transition-colors pl-2"

            >

              <span>&gt;</span>

              <span>More About Me</span>

            </motion.a>

            <motion.a

              variants={menuItemVariants}

              href="/about/stack"

              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-[#22C55E] transition-colors pl-2"

            >

              <span>&gt;</span>

              <span>Tech Stack</span>

            </motion.a>

          </div>



          {/* Category 2: Project Types */}

          <div className="flex flex-col gap-1.5 pl-2">

            <motion.div variants={menuItemVariants} className="text-zinc-300 font-medium text-sm">

              # Project Types

            </motion.div>

            <motion.a

              variants={menuItemVariants}

              href="/projects/web"

              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-[#22C55E] transition-colors pl-2"

            >

              <span>&gt;</span>

              <span>Web Development</span>

            </motion.a>

            <motion.div

              variants={menuItemVariants}

              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-[#22C55E] transition-colors pl-2"

            >

              <span>&gt;</span>

              <span>s00n</span>

            </motion.div>

          </div>



          {/* Category 3: Experience */}

          <div className="flex flex-col gap-1.5 pl-2">

            <motion.div variants={menuItemVariants} className="text-zinc-300 font-medium text-sm flex gap-2 items-center">

              # Experience

              <div className="text-xs text-zinc-400">(6 months)</div>

            </motion.div>

            <motion.div variants={menuItemVariants} className="flex items-center gap-2 hover:text-[#22C55E] transition-colors text-xs text-zinc-500 pl-2">

              <span>#</span>

              <span>Freelance Frontend Developer (Fiverr) | May 2025 – Aug 2025</span>

            </motion.div>

            <motion.div variants={menuItemVariants} className="flex items-center gap-2 text-xs hover:text-[#22C55E] transition-colors text-zinc-500 pl-2">

              <span>#</span>

              <span>Software Developer Intern (Webváltó Kft.) | Jan 2023 – Apr 2023</span>

            </motion.div>

          </div>



          {/* Category 4: Education & Certification */}

          <div className="flex flex-col gap-1.5 pl-2">

            <motion.div variants={menuItemVariants} className="text-zinc-300 font-medium text-sm">

              # Education &amp; Certification

            </motion.div>

            <motion.div variants={menuItemVariants} className="flex items-center gap-2 hover:text-[#22C55E] transition-colors text-xs text-zinc-500 pl-2">

              <span>#</span>

              <span>Full Stack Open (Univ. of Helsinki) | 2025 – 2026</span>

            </motion.div>

            <motion.div variants={menuItemVariants} className="flex items-center gap-2 hover:text-[#22C55E] transition-colors text-xs text-zinc-500 pl-2">

              <span>#</span>

              <span>Software Dev. Tech. (BMSZC Petrik) | 2022 – 2023</span>

            </motion.div>

            <motion.div variants={menuItemVariants} className="flex items-center gap-2 hover:text-[#22C55E] transition-colors text-xs text-zinc-500 pl-2">

              <span>#</span>

              <span>IT System Operator (BMSZC Újpest) | 2017 – 2022</span>

            </motion.div>

          </div>

        </motion.div>

      )}

    </div>

  );

} 

