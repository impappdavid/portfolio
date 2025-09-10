"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import type { Project } from "./project-data";

export default function Preview({ project }: { project: Project }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(ref, { amount: 0.25 });

  // Prime autoplay on mount
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.play().catch(() => {
      // Ignore autoplay block here; we'll retry in useEffect below
    });
  }, []);

  // Play/pause based on visibility
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (isInView) {
      v.muted = true;
      v.setAttribute("muted", "");
      v.play().catch(() => {
        v.controls = true;
      });
    } else {
      v.pause();
    }
  }, [isInView]);
  console.log(project.assets.video)

  return (
    <video
      ref={ref}
      muted
      playsInline
      autoPlay
      loop
      controls={false}
      poster={project.assets.poster}
      preload="metadata"
      className="w-full h-auto"
    >
      <source src={`${project.assets.video}.mp4`} type="video/mp4" />
      <source src={`${project.assets.video}.webm`} type="video/webm" />
    </video>
  );
}
