'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { BookImage, Bookmark, BriefcaseBusiness, CodeXml, Compass, Layers2, Pen, Send, User } from "lucide-react";
import { cn } from "@/lib/utils"; // You might need to create this utility

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    const linkStyle = (path: string) => {
        return cn(
            "flex gap-2 items-center py-1.5 px-2 rounded-lg transition-all duration-500 border border-transparent",
            isActive(path)
                ? "bg-zinc-800/90 border border-zinc-700 text-white"
                : "text-zinc-400 hover:text-white"
        );
    };

    return (
        <>
            <div className={` bg-zinc-900 h-screen fixed top-0 hidden xl:flex flex-col justify-between  w-56 transition-all duration-500`}>
                <div className="flex flex-col gap-4">
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
                        <Link href="/" className={linkStyle('/')}>
                            <Compass className="w-4 h-4" />
                            <div className="text-sm font-body">Explore</div>
                        </Link>
                        <Link href="/experience" className={linkStyle('/experience')}>
                            <BriefcaseBusiness className="w-4 h-4" />
                            <div className="text-sm font-body">Experience</div>
                        </Link>
                        <Link href="/projects" className={linkStyle('/projects')}>
                            <Pen className="w-4 h-4" />
                            <div className="text-sm font-body">Projects</div>
                        </Link>
                        <Link href="/about" className={linkStyle('/about')}>
                            <User className="w-4 h-4" />
                            <div className="text-sm font-body">About</div>
                        </Link>
                    </div>
                    <div className="flex flex-col px-4 gap-1">
                        <div className="px-2 text-zinc-400 text-xs mb-1 font-body">Resources</div>
                        <Link href="/leetcode" className={linkStyle('/leetcode')}>
                            <CodeXml className="w-4 h-4" />
                            <div className="text-sm font-body">Leetcode</div>
                        </Link>
                        <Link href="/stack" className={linkStyle('/stack')}>
                            <Layers2 className="w-4 h-4" />
                            <div className="text-sm font-body">Stack</div>
                        </Link>

                    </div>
                    <div className="flex flex-col px-4 gap-1">
                        <div className="px-2 text-zinc-400 text-xs mb-1 font-body">Extras</div>
                        <Link href="/gallery" className={linkStyle('/gallery')}>
                            <BookImage className="w-4 h-4" />
                            <div className="text-sm font-body">Guest Gallery</div>
                        </Link>
                        <Link href="/bookmarks" className={linkStyle('/bookmarks')}>
                            <Bookmark className="w-4 h-4" />
                            <div className="text-sm font-body">Bookmarks</div>
                        </Link>

                    </div>
                    <div className="flex flex-col px-4 gap-1">
                        <div className="px-2 text-zinc-400 text-xs mb-1 font-body">Connect</div>
                        <Link href="/contact" className={linkStyle('/contact')}>
                            <Send className="w-4 h-4" />
                            <div className="text-sm font-body">Contact</div>
                        </Link>
                        <Link
                            href="https://x.com/impappdavid"
                            target="_blank"
                            className="flex justify-between items-center py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500"
                        >
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                <div className="text-sm font-body">Twitter</div>
                            </div>
                            <div className=" border p-0.5 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15">
                                    <path fill="currentColor" fill-rule="evenodd" d="M3.646 11.354a.5.5 0 0 1 0-.707L10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708 0" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/david-papp-726a09267/" target="_blank" className="flex justify-between items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                                <div className="text-sm font-body">LinkedIn</div>
                            </div>
                            <div className=" border p-0.5 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15">
                                    <path fill="currentColor" fill-rule="evenodd" d="M3.646 11.354a.5.5 0 0 1 0-.707L10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708 0" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </Link>
                        <Link href="https://github.com/impappdavid" target="_blank" className="flex justify-between items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                <div className="text-sm font-body">GitHub</div>
                            </div>
                            <div className=" border p-0.5 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15">
                                    <path fill="currentColor" fill-rule="evenodd" d="M3.646 11.354a.5.5 0 0 1 0-.707L10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708 0" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </Link>

                    </div>
                </div>

            </div>

            <div className={` bg-zinc-900 h-screen fixed top-0 hidden md:flex xl:hidden flex-col justify-between  w-14 transition-all duration-500`}>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2 py-6  items-center">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="./me.png" className="rounded-full" />
                            <AvatarFallback >PD</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col px-4 gap-1">
                        <Link href="/" className={linkStyle('/')}>
                            <Compass className="w-4 h-4" />
                        </Link>
                        <Link href="/experience" className={linkStyle('/experience')}>
                            <BriefcaseBusiness className="w-4 h-4" />
                        </Link>
                        <Link href="/projects" className={linkStyle('/projects')}>
                            <Pen className="w-4 h-4" />
                        </Link>
                        <Link href="/about" className={linkStyle('/about')}>
                            <User className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="flex flex-col px-4 gap-1">
                        <Link href="/leetcode" className={linkStyle('/leetcode')}>
                            <CodeXml className="w-4 h-4" />
                        </Link>
                        <Link href="/stack" className={linkStyle('/stack')}>
                            <Layers2 className="w-4 h-4" />
                        </Link>

                    </div>
                    <div className="flex flex-col px-4 gap-1">
                        <Link href="/gallery" className={linkStyle('/gallery')}>
                            <BookImage className="w-4 h-4" />
                        </Link>
                        <Link href="/bookmarks" className={linkStyle('/bookmarks')}>
                            <Bookmark className="w-4 h-4" />
                        </Link>

                    </div>
                    <div className="flex flex-col px-4 gap-1">
                        <Link href="/contact" className={linkStyle('/contact')}>
                            <Send className="w-4 h-4" />
                        </Link>
                        <Link
                            href="https://x.com/impappdavid"
                            target="_blank"
                            className="flex gap-2 items-center py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>

                        </Link>
                        <Link href="https://www.linkedin.com/in/david-papp-726a09267/" target="_blank" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>

                        </Link>
                        <Link href="https://github.com/impappdavid" target="_blank" className="flex gap-2 items-center  py-1.5 px-2 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>

                        </Link>

                    </div>
                </div>

            </div>
        </>
    );
}
