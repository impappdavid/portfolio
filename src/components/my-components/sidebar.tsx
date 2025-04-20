'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { BookImage, Bookmark, BriefcaseBusiness, ChevronLeft, CodeXml, Compass, Layers2, Pen, Send, User } from "lucide-react";


export default function Sidebar() {
    return (
        <>
            <div className={` bg-zinc-900 h-screen fixed top-0 flex flex-col gap-4 w-56`}>
                <div className="flex gap-2 py-6 px-4 items-center">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="./me.png" className="rounded-full" />
                        <AvatarFallback >PD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center">
                        <div className="font-semibold font-body text-sm">Papp David</div>
                        <div className="text-xs text-zinc-400 font-body">Software engineer</div>
                    </div>
                </div>
                <div className="flex flex-col px-4 gap-1">
                    <Link href="" className="flex gap-2 items-center bg-zinc-800/90 py-1.5 px-2 rounded-lg border border-zinc-700 transition-all duration-500">
                        <Compass className="w-4 h-4" />
                        <div className="text-sm font-body">Explore</div>
                    </Link>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <BriefcaseBusiness className="w-4 h-4" />
                        <div className="text-sm font-body">Experience</div>
                    </Link>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <Pen className="w-4 h-4" />
                        <div className="text-sm font-body">Projects</div>
                    </Link>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <User className="w-4 h-4" />
                        <div className="text-sm font-body">About</div>
                    </Link>
                </div>
                <div className="flex flex-col px-4 gap-1">
                    <div className="px-2 text-zinc-400 text-xs mb-1 font-body">Resources</div>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <CodeXml className="w-4 h-4" />
                        <div className="text-sm font-body">Leetcode</div>
                    </Link>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <Layers2 className="w-4 h-4" />
                        <div className="text-sm font-body">Stack</div>
                    </Link>

                </div>
                <div className="flex flex-col px-4 gap-1">
                    <div className="px-2 text-zinc-400 text-xs mb-1 font-body">Extras</div>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <BookImage className="w-4 h-4" />
                        <div className="text-sm font-body">Guest Gallery</div>
                    </Link>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <Bookmark className="w-4 h-4" />
                        <div className="text-sm font-body">Bookmarks</div>
                    </Link>

                </div>
                <div className="flex flex-col px-4 gap-1">
                    <div className="px-2 text-zinc-400 text-xs mb-1 font-body">Connect</div>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <Send className="w-4 h-4" />
                        <div className="text-sm font-body">Contact</div>
                    </Link>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                        <div className="text-sm font-body">Twitter</div>
                    </Link>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                        <div className="text-sm font-body">LinkedIn</div>
                    </Link>
                    <Link href="" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                        <div className="text-sm font-body">GitHub</div>
                    </Link>

                </div>
            </div>
        </>
    );
}
