import { ExternalLink } from "lucide-react"
import Link from "next/link"

function Learning() {
    return (
        <>
            <div className="w-full border  rounded-2xl flex flex-col gap-4">
                <div className="p-8 flex flex-col gap-4">
                    <div className="">
                        <div className="text-lg font-body font-bold">Learning</div>
                        <div className="text-sm text-zinc-400 font-body">Always learning every step is a chance to improve.</div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <Link href="https://www.docker.com/" target="_blank" className="group p-2 flex gap-2 hover:bg-zinc-800/20 border border-transparent hover:border-zinc-800 rounded-lg transition-all duration-500 cursor-pointer">
                            <div className="w-9 h-9 bg-zinc-800/50 rounded-md flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-docker text-zinc-400"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z" /><path d="M5 10h3v3h-3z" /><path d="M8 10h3v3h-3z" /><path d="M11 10h3v3h-3z" /><path d="M8 7h3v3h-3z" /><path d="M11 7h3v3h-3z" /><path d="M11 4h3v3h-3z" /><path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" /><path d="M10 16l0 .01" /></svg>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-white text-sm font-body font-semibold flex gap-1">
                                    Docker
                                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-400" />
                                </div>
                                <div className="text-xs font-body text-zinc-400">Docker runs your app the same way, anywhere.</div>
                            </div>

                        </Link>

                        <Link href="https://expressjs.com/" target="_blank" className="group p-2 flex gap-2 hover:bg-zinc-800/20 border border-transparent hover:border-zinc-800 rounded-lg transition-all duration-500 cursor-pointer">
                            <div className="w-9 h-9 bg-zinc-800/50 rounded-md flex justify-center items-center font-body text-xs">
                                ex
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-white text-sm font-body font-semibold flex gap-1">
                                    Express.js
                                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-400" />
                                </div>
                                <div className="text-xs font-body text-zinc-400 max-w-64 md:max-w-80 truncate ">Express.js helps you build web servers with Node.js, fast and simple.</div>
                            </div>

                        </Link>
                    </div>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-b-2xl border-t flex justify-between items-center">
                    <div className="flex flex-col ">
                        <div className="text-lg font-body font-semibold">Stack</div>
                        <div className="text-xs font-body text-zinc-400">This stack shows the tools and technologies I use to build and run apps.</div>
                    </div>
                    <div className="">
                        <Link href="../stack" className="py-1.5 px-4 text-sm rounded-lg bg-zinc-800 text-white font-body hover:opacity-70 hover:bg-zinc-800 border flex items-center gap-1  border-zinc-700 transition-all duration-500">
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Learning