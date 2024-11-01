import { SiRender, SiShadcnui } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";


export default function Stack() {
    return (
        <section className="w-full flex flex-col gap-4 animate-[downblur_2.5s_ease-in-out] px-4 sm:px-0" id="stack">
            <div className=" flex flex-col gap-4">
                <h3 className="text-3xl font-medium font-regularFont ">Stack</h3>

                <div className="grid sm:grid-cols-3 gap-2">
                    <div className="flex px-2 py-2 bg-zinc-100 dark:bg-zinc-900 w-full rounded-xl gap-3 items-center hover:cursor-pointer border hover:border-zinc-300 hover:bg-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60 transition-all">
                        <div className="w-12 h-12 bg-zinc-400/30 dark:bg-black/20 rounded-lg flex justify-center items-center">
                            <RiNextjsFill className="w-8 h-8 text-black dark:text-white rounded-md" />
                        </div>
                        <div className="flex flex-col pr-3">
                            <div className="text-md font-regularFont tracking-wide">NexJS</div>
                            <div className="text-xs text-zinc-400 tracking-wide	">React framework</div>
                        </div>
                    </div>
                    <div className="flex px-2 py-2 bg-zinc-100 dark:bg-zinc-900 w-full rounded-xl gap-3 items-center hover:cursor-pointer border hover:border-zinc-300 hover:bg-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60 transition-all">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex justify-center items-center">
                            <RiSvelteFill className="w-8 h-8 text-orange-500 rounded-md" />
                        </div>
                        <div className="flex flex-col pr-3">
                            <div className="text-md font-regularFont tracking-wide">Svelte</div>
                            <div className="text-xs text-zinc-400 tracking-wide	">JavaScript framework</div>
                        </div>
                    </div>

                    <div className="flex px-2 py-2 bg-zinc-100 dark:bg-zinc-900 w-full rounded-xl gap-3 items-center hover:cursor-pointer border hover:border-zinc-300 hover:bg-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60 transition-all">
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex justify-center items-center">
                            <SiNestjs className="w-8 h-8 text-red-500 rounded-md" />
                        </div>
                        <div className="flex flex-col pr-3">
                            <div className="text-md font-regularFont tracking-wide">NestJS</div>
                            <div className="text-xs text-zinc-400 tracking-wide	">Node.js framework</div>
                        </div>
                    </div>


                </div>

                <div className="grid grid-cols-5 sm:grid-cols-9 gap-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                                    <div className="w-12 h-12 bg-blue-700/20 dark:bg-blue-500/20 rounded-lg flex justify-center items-center">
                                        <BiLogoTypescript className="w-8 h-8 text-blue-700 dark:text-blue-500 rounded-md" />

                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-sans">TypeScript</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                                    <div className="w-12 h-12 bg-sky-600/20 rounded-lg flex justify-center items-center">
                                        <FaReact className="w-8 h-8 text-sky-400 rounded-md" />

                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-sans">React</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                                    <div className="w-12 h-12 bg-orange-700/20 rounded-lg flex justify-center items-center">
                                        <FaGitAlt className="w-8 h-8 text-orange-600 rounded-md" />

                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-sans">Git</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                                    <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex justify-center items-center">
                                        <RiTailwindCssFill className="w-8 h-8 text-sky-500 rounded-md" />

                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-sans">TailwindCSS</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                                    <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex justify-center items-center">
                                        <DiMysql className="w-8 h-8 text-sky-500 rounded-md" />

                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-sans">MySQL</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex justify-center items-center">
                                        <FaNodeJs className="w-8 h-8 text-green-500 rounded-md" />

                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-sans">NodeJS</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                                    <div className="w-12 h-12 bg-zinc-400/30 dark:bg-black/20 rounded-lg flex justify-center items-center">
                                        <IoLogoVercel className="w-8 h-8 text-white-500 rounded-md" />

                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-sans">Vercel</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                                    <div className="w-12 h-12 bg-zinc-400/30 dark:bg-black/20 rounded-lg flex justify-center items-center">
                                        <SiRender className="w-8 h-8 text-white-500 rounded-md" />

                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-sans">Render</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                                    <div className="w-12 h-12 bg-zinc-400/30 dark:bg-black/20 rounded-lg flex justify-center items-center">
                                        <SiShadcnui className="w-8 h-8 text-white-500 rounded-md" />

                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-sans">Shadcn/ui</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </section>
    )
};