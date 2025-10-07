"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Inter } from "next/font/google";

const kodemonoFont = Inter({
  subsets: ["latin"],
  weight: "500",
});

export default function Dock() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWork = pathname.startsWith("/projects");
  const isAbout = pathname.startsWith("/about");

  const baseWrap =
    "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-2xl bg-zinc-100 p-2 flex gap-2 hover:px-4 hover:py-4 transition-all duration-300";
  const baseItem =
    "relative flex justify-center items-center w-12 h-12 rounded-xl bg-black/5 p-2 transition-transform duration-200 cursor-pointer hover:scale-110";
  const idleColor = "text-zinc-400 hover:text-blue-600";
  const activeColor = "text-blue-600";

  const Dot = () => (
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
  );

  return (
    <div className={`${baseWrap} ${kodemonoFont.className}`}>
      <TooltipProvider delayDuration={10}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
              aria-label="Home"
              className={`${baseItem} ${isHome ? activeColor : idleColor}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-9 h-9"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {isHome && <Dot />}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className={`font-medium ${kodemonoFont.className}`}>Home</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/projects"
              aria-label="Projects"
              className={`${baseItem} ${isWork ? activeColor : idleColor}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-9 h-9"
              >
                <path
                  fill="currentColor"
                  d="M22 9.885v7.7a3.85 3.85 0 0 1-2.373 3.542a3.8 3.8 0 0 1-1.467.288H5.83A3.82 3.82 0 0 1 2 17.585V6.425a3.82 3.82 0 0 1 3.83-3.84h3.08a3.87 3.87 0 0 1 3.2 1.71l.87 1.33a1 1 0 0 0 .36.32a.94.94 0 0 0 .47.12h4.35a3.8 3.8 0 0 1 2.71 1.11A3.85 3.85 0 0 1 22 9.885"
                />
              </svg>
              {isWork && <Dot />}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className={`font-medium ${kodemonoFont.className}`}>Projects</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/about"
              aria-label="About"
              className={`${baseItem} ${isAbout ? activeColor : idleColor}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-9 h-9"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M16.488 5.595q-.012-.684-.031-1.24c-.048-1.43-.933-2.74-2.512-2.83q-.42-.024-.945-.025c-.525-.001-.664.01-.944.025c-1.58.09-2.465 1.4-2.513 2.83c-.015.451-.028.969-.036 1.544q-.729.046-1.362.093c-3.277.24-5.853 2.735-6.135 6.032C1.754 15.01 1.5 19.591 1.5 26s.254 10.991.51 13.976c.282 3.297 2.858 5.791 6.135 6.032c3.267.24 8.455.492 15.855.492s12.588-.252 15.855-.492c3.277-.24 5.853-2.735 6.135-6.032c.256-2.985.51-7.567.51-13.976s-.254-10.991-.51-13.976c-.282-3.297-2.858-5.791-6.135-6.032a135 135 0 0 0-1.362-.093a77 77 0 0 0-.036-1.544c-.048-1.43-.933-2.74-2.512-2.83q-.42-.024-.945-.025c-.525-.001-.664.01-.944.025c-1.58.09-2.465 1.4-2.513 2.83q-.018.556-.031 1.24a264 264 0 0 0-4.025-.076a76 76 0 0 0-.03-1.164c-.048-1.43-.933-2.74-2.513-2.83Q24.525 1.501 24 1.5c-.525-.001-.664.01-.944.025c-1.58.09-2.465 1.4-2.513 2.83q-.018.527-.03 1.164q-2.161.026-4.025.076M12.75 24A2.25 2.25 0 0 1 15 21.75h18a2.25 2.25 0 0 1 0 4.5H15A2.25 2.25 0 0 1 12.75 24M15 32.75a2.25 2.25 0 0 0 0 4.5h9a2.25 2.25 0 0 0 0-4.5z"
                  clipRule="evenodd"
                />
              </svg>
              {isAbout && <Dot />}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className={`font-semibold ${kodemonoFont.className}`}>About</p>
          </TooltipContent>
        </Tooltip>
        <div className="flex items-center">
          <div className="w-0.5 h-8 bg-zinc-400"></div>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/Papp_David_Resume.pdf"
              aria-label="Resume"
              className={`relative text-white flex justify-center items-center w-12 h-12 rounded-xl bg-blue-500 p-2 transition-transform duration-200 cursor-pointer hover:scale-110`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 256 256">
                <path fill="currentColor" d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51m-75.28 92.31a8 8 0 0 1-7.87 6.61a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33A8 8 0 0 1 87.52 115l41.48 7.29a8 8 0 0 1 6.5 9.27m47-24.18a8 8 0 0 1-7.86 6.61a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1 2.79-15.76l83 14.66a8 8 0 0 1 6.51 9.27Zm5.55-31.52a8 8 0 0 1-7.87 6.61a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 1 1 2.78-15.75l83 14.65a8 8 0 0 1 6.52 9.27Z" />
              </svg>
              {isAbout && <Dot />}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className={`font-semibold ${kodemonoFont.className}`}>Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
