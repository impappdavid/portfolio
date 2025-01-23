"use client"
import React from 'react';
import Link from 'next/link';

const ProjectsSideBar = () => {
    

    return (
        <div className="w-full flex flex-col justify-end gap-2 text-md px-2 ">
            <div className="text-bold text-sm">Side</div>
            <Link href="/frontend" className="text-sm px-1.5 py-1 border-l dark:border-white border-black bg-zinc-500/10 hover:bg-zinc-200/70 dark:hover:bg-zinc-500/10 transition-all">Frontend</Link>
        </div>
    );
};

export default ProjectsSideBar;
