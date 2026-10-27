"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allWorks = [
  { id: 1, image: "https://i.pinimg.com/originals/19/67/fa/1967fa9fb299a00e53356d97a772a3ab.gif", title: "Project 1" },
  { id: 2, image: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/01/milky_way_s_precessing_galactic_disc/21863379-1-eng-GB/Milky_Way_s_precessing_galactic_disc.gif", title: "Project 2" },
  { id: 3, image: "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUybHBhdWdlamR3ZndvdTRqYXAxbzl6bTh1d3J3d3c5cXQyNHBoY2JrdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohs4gSs3V0Q7qOtKU/200.gif", title: "Project 3" },
  { id: 4, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80", title: "Project 4" },
  { id: 5, image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80", title: "Project 5" },
  { id: 6, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", title: "Project 6" },
  { id: 7, image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80", title: "Project 7" },
  { id: 8, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", title: "Project 8" },
  { id: 9, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80", title: "Project 9" },
];

const resizeTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function WorkSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        width: "100%",
        maxWidth: isExpanded ? 1536 : 512,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.3, ease: "easeOut" },
        y: { duration: 0.4, delay: 0.3, ease: "easeOut" },
        width: resizeTransition,
        maxWidth: resizeTransition,
      }}
      className="mx-auto w-full px-4 sm:px-0 mt-12"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium tracking-wider text-zinc-400">
          /work
        </span>

        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="cursor-pointer text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-600 focus:outline-none"
        >
          {isExpanded ? "collapse ⤴" : "view more ⤵"}
        </button>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-3 gap-2"
        transition={{
          layout: resizeTransition,
        }}
      >
        {allWorks.slice(0, isExpanded ? 9 : 6).map((work) => (
          <motion.div
            key={work.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.2 },
              layout: resizeTransition,
            }}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-zinc-300"
          >
            <img
              src={work.image}
              alt={work.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}