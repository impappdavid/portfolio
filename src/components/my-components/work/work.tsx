'use client';

import { Inter } from 'next/font/google';
import type { Project } from './project-data';

const kodemonoFont = Inter({
  subsets: ['latin'],
  weight: '600',
});

export default function Work({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-8">
      <img src={project.assets.cover} alt={`${project.title} cover`} className="rounded-3xl" />

      <div className="grid grid-cols-3 grid-rows-3">
        <div className="flex flex-col items-start p-6">
          <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Type</div>
          <div className="text-lg sm:text-2xl font-semibold text-start">{project.type}</div>
        </div>

        <div className="row-span-3 col-span-2 p-6 flex items-start text-lg sm:text-2xl font-semibold text-start">
          {project.description}
        </div>

        <div className="flex flex-col items-start p-6">
          <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Role</div>
          <div className="text-lg sm:text-2xl font-semibold">{project.role}</div>
        </div>

        <div className="flex flex-col items-start p-6">
          <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Year</div>
          <div className="text-lg sm:text-2xl font-semibold">{project.year}</div>
        </div>
      </div>
    </div>
  );
}
