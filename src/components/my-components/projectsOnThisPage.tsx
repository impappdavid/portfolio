"use client"
import React from 'react';
import Link from 'next/link';

const ProjectsOnThisPage = () => {
    

    return (
        <div className="w-full flex flex-col justify-end gap-1 text-md px-2 ">
            <div className="text-bold text-sm">On this page</div>
            <Link href="#about" className="text-sm px-1 dark:text-zinc-400 text-zinc-600 hover:text-black  dark:hover:text-white transition-all">About</Link>
            <Link href="#features" className="text-sm px-1 dark:text-zinc-400 text-zinc-600 hover:text-black  dark:hover:text-white transition-all">Features</Link>
            <Link href="#problems" className="text-sm px-1 dark:text-zinc-400 text-zinc-600 hover:text-black dark:hover:text-white transition-all">Problems</Link>
        </div>
    );
};

export default ProjectsOnThisPage;
