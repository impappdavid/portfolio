"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Make sure to run: npm i lucide-react if you don't have it
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

// Stagger entry variants for the grid items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function SocialDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-sm bg-black rounded-full py-1.5 px-4 text-white cursor-pointer hover:bg-zinc-800 transition-colors">
          Socials
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm bg-zinc-50 border border-zinc-200/80 flex flex-col gap-4 p-5 rounded-3xl shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:duration-200">
        
        {/* Header Section */}
        <DialogHeader className="w-full flex flex-row justify-between items-center space-y-0 pb-1">
          <DialogTitle className="font-semibold text-zinc-900 tracking-tight">Socials</DialogTitle>
          
          {/* Functional DialogClose badge with Hover Effect */}
          <DialogClose asChild>
            <button className="border border-zinc-300 w-8 h-8 flex items-center justify-center rounded-full text-[10px] uppercase font-mono bg-white text-zinc-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 cursor-pointer transition-all duration-200 shadow-sm active:scale-95">
              Esc
            </button>
          </DialogClose>
        </DialogHeader>

        {/* Bento Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="grid grid-cols-2 w-full gap-3"
        >
          
          {/* GitHub Card */}
          <motion.a
            variants={itemVariants}
            href="https://github.com/impappdavid"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden aspect-square border border-zinc-200 bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 group cursor-pointer"
          >
            {/* Smooth Radial Gradient Hover Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(244,244,245,1)_0%,rgba(255,255,255,1)_100%)] transition-opacity duration-300 z-0" />
            
            <div className="relative z-10 flex flex-col items-center gap-2 w-full h-full justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 fill-zinc-800"
              >
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
              </svg>
              
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            variants={itemVariants}
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden aspect-square border border-zinc-200 bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 group cursor-pointer"
          >
            {/* Subtle Custom Tinted Gradient Hover Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(239,246,255,0.6)_0%,rgba(255,255,255,1)_100%)] transition-opacity duration-300 z-0" />
            
            <div className="relative z-10 flex flex-col items-center gap-2 w-full h-full justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 fill-[#0077B5]"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
              </svg>
              
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          </motion.a>

        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export default SocialDialog;