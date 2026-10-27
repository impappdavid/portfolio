"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle"; // import your toggle

export default function ProfileAndControl() {
  const [showOne, setShowOne] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleImageClick = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setShowOne(true);

    timerRef.current = setTimeout(() => {
      setShowOne(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      className="w-full flex items-center justify-between mt-4"
    >
      {/* Left Side: Avatar + Temporary Text */}
      <div className="flex items-center gap-3">
        <motion.button
          onClick={handleImageClick}
          whileHover={{ scale: 1.08 }}
          whileTap={{ 
            scale: 1.15, 
            rotate: -6,
            transition: { type: "spring", stiffness: 400, damping: 10 } 
          }}
          className="cursor-pointer focus:outline-none outline-none border-none rounded-xl overflow-hidden shrink-0"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
            alt="Profile"
            className="w-10 h-10 object-cover rounded-xl"
          />
        </motion.button>

        <AnimatePresence>
          {showOne && (
            <motion.div
              initial={{ opacity: 0, x: -8, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="text-sm text-zinc-500 select-none"
            >
              Always learning. Always looking further.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Side: Theme Toggle Control */}
      <div>
        <ThemeToggle />
      </div>
    </motion.div>
  );
}