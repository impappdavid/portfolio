"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const hoverItems = {
  cpp: {
    title: "C++ Programming",
    image: "https://media.tenor.com/-BjTGPdDJNAAAAAj/cpp-cplusplus.gif",
    alt: "Programming code on a screen",
  },
  physics: {
    title: "Physics",
    image: "https://i.imgur.com/q8fwi3i.gif",
    alt: "Mathematical equations",
  },
  simulations: {
    title: "Simulations & Embedded Systems",
    image: "https://cdn.mos.cms.futurecdn.net/cwfPWpSeMWWZPSMjNvgjzJ.gif",
    alt: "Embedded systems and circuit boards",
  },
  space: {
    title: "Space Exploration",
    image: "https://sociable.co/wp-content/uploads/2012/08/mars-curiosity-animated-gif.gif",
    alt: "Earth from space",
  },
};

type HoverKey = keyof typeof hoverItems;

export default function AboutMe() {
  const [active, setActive] = useState<HoverKey | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    damping: 30,
    stiffness: 300,
    mass: 0.2,
  };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handlePointerMove = (e: React.PointerEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY - 160);
  };

  function HoverWord({
    id,
    children,
  }: {
    id: HoverKey;
    children: React.ReactNode;
  }) {
    return (
      <span
        className="select-none cursor-pointer rounded bg-sky-500/40 px-1 py-0.5 text-zinc-600 dark:text-zinc-300 transition-colors hover:bg-sky-500/60"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY - 160);
            setActive(id);
          }
        }}
        onPointerMove={(e) => {
          if (e.pointerType === "mouse") {
            handlePointerMove(e);
          }
        }}
        onPointerLeave={() => setActive(null)}
      >
        {children}
      </span>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      className="relative text-zinc-500 dark:text-zinc-400 mt-2"
      onPointerLeave={() => setActive(null)}
    >
      <p className="text-sm leading-relaxed">
        I'm a developer driven by curiosity and a desire to understand how
        things work. From{" "}
        <HoverWord id="cpp">C++ programming</HoverWord> to{" "}
        <HoverWord id="physics">physics</HoverWord>, I enjoy turning complex
        ideas into something tangible.
      </p>

      <p className="mt-2 text-sm leading-relaxed">
        I'm currently building my fundamentals, experimenting with new
        concepts, and exploring{" "}
        <HoverWord id="simulations">
          simulations & embedded systems
        </HoverWord>.
      </p>

      <p className="mt-2 text-sm leading-relaxed">
        My long-term ambition is to contribute to something bigger, from
        engineering systems to{" "}
        <HoverWord id="space">space exploration</HoverWord>.
      </p>

      <AnimatePresence>
        {active && (
          <motion.div
            key={active}
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              opacity: { duration: 0.12 },
              scale: { duration: 0.12, ease: "easeOut" },
            }}
            className="pointer-events-none fixed left-0 top-0 z-50 w-48 overflow-hidden rounded-xl shadow-2xl"
          >
            <img
              src={hoverItems[active].image}
              alt={hoverItems[active].alt}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}