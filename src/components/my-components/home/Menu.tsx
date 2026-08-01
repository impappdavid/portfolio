"use client";
import React, { useState, useRef, useEffect } from "react";
import { Settings, SquareTerminal } from "lucide-react";

type HistoryItem = {
  type: "input" | "output" | "error";
  text: string;
};

const DIRECTORIES: Record<
  string,
  { name: string; description: string; targets: Record<string, string> }
> = {
  about: {
    name: "about",
    description: "Personal overview, background, and tech stack.",
    targets: { "more-about-me": "#about-me" },
  },
  projects: {
    name: "projects",
    description: "Selected web development projects & upcoming builds.",
    targets: { "web-development": "#web-development", s00n: "#s00n" },
  },
  experience: {
    name: "experience",
    description: "Professional background and internship history.",
    targets: { freelance: "#freelance", intern: "#freelance" },
  },
  future: {
    name: "future",
    description: "Long-term goals and aerospace engineering roadmap.",
    targets: { "aerospace-software": "#aerospace" },
  },
  education: {
    name: "education",
    description: "Academic background and certifications.",
    targets: { "full-stack-open": "#aerospace" },
  },
};

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

export default function MainMenu() {
  const [isTerminal, setIsTerminal] = useState(false);
  const [currentDir, setCurrentDir] = useState<string>("Portfolio:\\David>");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "output", text: WELCOME_BANNER },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll output container to bottom
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history, isTerminal]);

  // Auto-focus input when entering terminal mode
  useEffect(() => {
    if (isTerminal) {
      inputRef.current?.focus();
    }
  }, [isTerminal]);

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
  ls / list         - List directories or targets in current path
  cd <dir>          - Change directory (e.g., 'cd about', 'cd ..' to return)
  goto <target>     - Jump to page section (e.g., 'goto more-about-me')
  cat               - Print current section details
  clear             - Clear terminal history
  exit / gui        - Return to graphical menu mode`,
        });
        break;

      case "ls":
      case "list":
        if (currentDir === "~") {
          newHistory.push({
            type: "output",
            text: `DIRECTORIES:\n  about/\n  projects/\n  experience/\n  future/\n  education/\n\nUse 'cd <dir>' to enter a section.`,
          });
        } else {
          const dirData = DIRECTORIES[currentDir];
          const targetsList = Object.keys(dirData.targets)
            .map((t) => `  * ${t}`)
            .join("\n");
          newHistory.push({
            type: "output",
            text: `TARGETS IN [${currentDir.toUpperCase()}]:\n${targetsList}\n\nUse 'goto <target>' to navigate.`,
          });
        }
        break;

      case "cd":
        if (!arg || arg === "~" || arg === "/") {
          setCurrentDir("~");
          newHistory.push({ type: "output", text: "Returned to root (~)" });
        } else if (arg === "..") {
          setCurrentDir("~");
          newHistory.push({ type: "output", text: "Returned to root (~)" });
        } else if (DIRECTORIES[arg]) {
          setCurrentDir(arg);
          newHistory.push({
            type: "output",
            text: `Entered ~/${arg}\n${DIRECTORIES[arg].description}\nType 'ls' to view available target links.`,
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
          let targetHash = "";
          if (currentDir !== "~" && DIRECTORIES[currentDir]?.targets[arg]) {
            targetHash = DIRECTORIES[currentDir].targets[arg];
          } else {
            for (const dir of Object.values(DIRECTORIES)) {
              if (dir.targets[arg]) {
                targetHash = dir.targets[arg];
                break;
              }
            }
          }

          if (targetHash) {
            window.location.hash = targetHash;
            newHistory.push({ type: "output", text: `Navigating to ${targetHash}...` });
          } else {
            newHistory.push({
              type: "error",
              text: `Target '${arg}' not found. Type 'ls' inside directory to view targets.`,
            });
          }
        }
        break;

      case "cat":
        if (currentDir === "~") {
          newHistory.push({
            type: "output",
            text: "Root directory containing portfolio sections. Use 'cd <dir>' to enter one.",
          });
        } else {
          newHistory.push({
            type: "output",
            text: `[${currentDir.toUpperCase()}]: ${DIRECTORIES[currentDir].description}`,
          });
        }
        break;

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
          <span className="text-zinc-400">{isTerminal ? "terminal" : "main"}</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-500">
          <button
            onClick={() => setIsTerminal(!isTerminal)}
            className={`transition-colors ${
              isTerminal ? "text-cyan-400" : "hover:text-zinc-200"
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
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex flex-col gap-2">
            {/* Command History */}
            {history.map((item, index) => (
              <div key={index} className="whitespace-pre-wrap leading-relaxed">
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
            ))}

            {/* Inline Active Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1 pb-2">
              <span className="text-cyan-400 shrink-0">{currentDir} $&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent outline-none text-zinc-100 placeholder-zinc-700"
                placeholder="type 'help' or command..."
              />
            </form>
          </div>
        </div>
      ) : (
        /* STANDARD GRAPHICAL MENU */
        <div className="flex-1 min-h-0 flex flex-col gap-6 max-w-xs overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="text-zinc-400 font-semibold text-base">.menu</div>

          {/* Category 1: About */}
          <div className="flex flex-col gap-1.5 pl-2">
            <div className="text-zinc-300 font-medium text-sm"># About</div>
            <a
              href="#about-me"
              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-zinc-200 transition-colors pl-2"
            >
              <span>&gt;</span>
              <span>More About Me</span>
            </a>
          </div>

          {/* Category 2: Project Types */}
          <div className="flex flex-col gap-1.5 pl-2">
            <div className="text-zinc-300 font-medium text-sm"># Project Types</div>
            <a
              href="#web-development"
              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-zinc-200 transition-colors pl-2"
            >
              <span>&gt;</span>
              <span>Web Development</span>
            </a>
            <div className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-zinc-200 transition-colors pl-2">
              <span>&gt;</span>
              <span>s00n</span>
            </div>
          </div>

          {/* Category 3: Experience */}
          <div className="flex flex-col gap-1.5 pl-2">
            <div className="text-zinc-300 font-medium text-sm"># Experience</div>
            <a
              href="#freelance"
              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-zinc-200 transition-colors pl-2"
            >
              <span>&gt;</span>
              <span>Freelance</span>
            </a>
            <a
              href="#freelance"
              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-zinc-200 transition-colors pl-2"
            >
              <span>&gt;</span>
              <span>Intern</span>
            </a>
          </div>

          {/* Category 4: Goal */}
          <div className="flex flex-col gap-1.5 pl-2">
            <div className="text-zinc-300 font-medium text-sm"># My Future</div>
            <a
              href="#aerospace"
              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-zinc-200 transition-colors pl-2"
            >
              <span>&gt;</span>
              <span>Aerospace Software</span>
            </a>
          </div>

          {/* Category 5: Education */}
          <div className="flex flex-col gap-1.5 pl-2">
            <div className="text-zinc-300 font-medium text-sm">
              # Education &amp; Certification
            </div>
            <a
              href="#aerospace"
              className="flex items-center gap-2 text-xs w-fit text-zinc-500 hover:text-zinc-200 transition-colors pl-2"
            >
              <span>&gt;</span>
              <span>Full Stack Open - University of Helsinki</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}