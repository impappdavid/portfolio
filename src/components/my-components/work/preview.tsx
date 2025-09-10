"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import type { Project } from "./project-data";

export default function Preview({ project }: { project: Project }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(ref, { amount: 0.25 });

  // Prime autoplay on mount (helps Safari/iOS and some Chromium variants)
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Ensure policy requirements are met before attempting play
    v.muted = true;
    v.setAttribute("muted", ""); // attribute + property for broader device coverage
    v.setAttribute("playsinline", "");
    // Initial attempt
    v.play().catch(() => {
      // If blocked, keep controls hidden for now; next effect will retry in-view
    });
  }, []);

  // Control playback based on viewport visibility
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (isInView) {
      v.muted = true;
      v.setAttribute("muted", "");
      v.play().catch(() => {
        // Autoplay blocked by policy—show controls so the user can start playback
        v.controls = true;
      });
    } else {
      v.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={ref}
      src={project.assets.video}
      // Policy-friendly attributes; order matters on some browsers
      muted
      playsInline
      autoPlay
      loop
      controls={false}
      poster={project.assets.poster}
      preload="metadata"
      className="w-full h-auto"
    />
  );
}