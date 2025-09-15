'use client';

import { Inter } from 'next/font/google';
import type { Project } from './project-data';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const kodemonoFont = Inter({
  subsets: ['latin'],
  weight: '600',
});

export default function Work({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-8">
      <img src={project.assets.cover} alt={`${project.title} cover`} className="rounded-3xl" />


      {project.isLive && project.github ? (
        <>
          <div className="grid grid-cols-2 gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-blue-500 border-2 border-blue-500 font-medium px-5 py-3 rounded-full flex gap-1 group items-center justify-center hover:bg-blue-500/20 transition-all duration-200 w-full"
            >
              View Source Code
              <ArrowRight className='w-5 h-5 group-hover:-rotate-45 transition-all duration-300'/>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all flex gap-1 group items-center justify-center duration-200 w-full"
            >
              View Live Project
              <ArrowRight className='w-5 h-5 group-hover:-rotate-45 transition-all duration-300'/>
            </a>
          </div>
        </>
      ) : project.github ? (

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent text-blue-500 border-2 border-blue-500 group font-medium px-5 py-3 gap-1 rounded-full hover:bg-blue-500/20 transition-all duration-200 w-full flex items-center justify-center"
        >
          View Source Code
          <ArrowRight className='w-5 h-5 group-hover:-rotate-45 transition-all duration-300'/>
        </a>
      ) : project.isLive ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 flex gap-1 group items-center justify-center  transition-all duration-200 w-full"
        >
          View Live Project
          <ArrowRight className='w-5 h-5 group-hover:-rotate-45 transition-all duration-300'/>
        </a>
      ) : null}
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
    </div >
  );
}
