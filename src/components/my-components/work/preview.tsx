'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import type { Project } from './project-data';

export default function Preview({ project }: { project: Project }) {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { amount: 0.25 });

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (isInView) {
      video.muted = true;
      video.play().catch(() => {
        video.controls = true;
      });
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={ref}
      src={project.assets.video}
      playsInline
      muted
      loop
      controls={false}
      poster={project.assets.poster}
      className="w-full h-auto"
    />
  );
}
