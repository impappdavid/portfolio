import BlurFade from "../magicui/blur-fade";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { GiGraduateCap } from "react-icons/gi";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";


export default function Education() {
    return (
        <section className="w-full flex flex-col gap-4 animate-[downblur_3.5s_ease-in-out]" id="aboutme">
            <div className=" flex flex-col gap-4 px-4 sm:px-0">
                <h3 className="text-3xl font-medium font-regularFont ">Education</h3>
                <Accordion type="single" collapsible className="w-full flex flex-col gap-2">



                    <AccordionItem value="item-1" className=" transition-all border">
                        <AccordionTrigger className="flex p-2">
                            <div className="flex gap-2 ">
                                <div className="min-w-10 h-10 bg-black rounded-lg"></div>
                                <div className="flex flex-col items-start justify-center">
                                    <div className="sm:text-sm text-left text-xs">BMSZC Petrik Lajos Két tanítási Nyelvű Technikum</div>
                                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Software developer and tester</div>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="container max-w-2xl py-4 mx-auto">
                                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-12">
                                        <div className="col-span-12 space-y-12 relative px-4 col-span-8 space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-zinc-700 before:bg-zinc-400">
                                            <div className="flex flex-col relative before:absolute before:top-2 before:w-3 before:h-3 before:rounded-full before:left-[-33px] before:z-[1] before:dark:bg-white before:bg-zinc-600">
                                                <h3 className="text-xl font-semibold tracking-wide">Professional exam</h3>
                                                <time className="text-xs tracking-wide text-zinc-600 dark:text-zinc-400 font-sans">Jun 2023</time>
                                                <p className="mt-3 flex gap-1 items-center">
                                                    <GiGraduateCap className="w-4 h-4" />

                                                    Software developer and tester
                                                </p>
                                            </div>

                                            <div className="flex flex-col relative before:absolute before:top-2 before:w-3 before:h-3 before:rounded-full before:left-[-33px] before:z-[1] before:dark:bg-white before:bg-zinc-600">
                                                <h3 className="text-xl font-semibold tracking-wide">Dual training</h3>
                                                <time className="text-xs tracking-wide text-zinc-600 dark:text-gray-400 font-sans">Jan - Apr 2023</time>
                                                <p className="mt-3">I joined my school’s first dual training program as one of 15 students selected. Over three months at <a href="https://www.webvalto.hu/en/main-page/" target="__blank" className="underline">Webváltó.kft</a>, I learned how they work, collaborated in a group of three with my classmates, and completed an exam project with help from a mentor.</p>
                                            </div>

                                            <div className="flex flex-col relative before:absolute before:top-2 before:w-3 before:h-3 before:rounded-full before:left-[-33px] before:z-[1] before:dark:bg-white before:bg-zinc-600">
                                                <h3 className="text-xl font-semibold tracking-wide ">Learnt</h3>
                                                <p className="mt-3 flex gap-2 flex-wrap ">
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-sky-400/30 dark:bg-sky-500/20 rounded-lg flex justify-center items-center">
                                                                        <FaReact className="w-8 h-8 text-sky-500 rounded-md" />

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
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-red-400/30 dark:bg-red-500/20 rounded-lg flex justify-center items-center">
                                                                        <SiNestjs className="w-8 h-8 text-red-500 rounded-md" />

                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="font-sans">NestJS</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-blue-400/30 dark:bg-blue-500/20 rounded-lg flex justify-center items-center">
                                                                        <SiTypescript className="w-8 h-8 text-blue-500 rounded-md" />

                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="font-sans">Typescript</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-zinc-400/30 dark:bg-black/20 rounded-lg flex justify-center items-center">
                                                                        <FaJava className="w-8 h-8 text-white-500 rounded-md" />

                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="font-sans">Java</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-sky-400/30 dark:bg-sky-500/20 rounded-lg flex justify-center items-center">
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
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-black/50 dark:bg-black/20 rounded-lg flex justify-center items-center">
                                                                        <FaGithub className="w-8 h-8 text-white rounded-md" />

                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="font-sans">Github</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-orange-400/30 dark:bg-orange-500/20 rounded-lg flex justify-center items-center">
                                                                        <FaGitAlt className="w-8 h-8 text-orange-600 rounded-md" />

                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="font-sans">Git</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                </p>
                                            </div>

                                            <div className="flex flex-col relative before:absolute before:top-2 before:w-3 before:h-3 before:rounded-full before:left-[-33px] before:z-[1] before:dark:bg-white before:bg-zinc-600">
                                                <h3 className="text-xl font-semibold tracking-wide">Starting school</h3>
                                                <time className="text-xs tracking-wide text-zinc-600 dark:text-gray-400 font-sans">Sep 2022</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className=" transition-all border">
                        <AccordionTrigger className="flex p-2">
                            <div className="flex gap-2 ">
                                <div className="min-w-10 h-10 bg-black rounded-lg"></div>
                                <div className="flex flex-col items-start justify-center">
                                    <div className="sm:text-sm text-left text-xs">BMSZC Újpesti Két Tanítási Nyelvű Műszaki Technikum</div>
                                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Graduation</div>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="container max-w-2xl py-4 mx-auto">
                                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                                        <div className="col-span-12 space-y-12 relative px-4 col-span-8 space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-zinc-700 before:bg-zinc-400">
                                            <div className="flex flex-col relative before:absolute before:top-2 before:w-3 before:h-3 before:rounded-full before:left-[-33px] before:z-[1] before:dark:bg-white before:bg-zinc-600">
                                                <h3 className="text-xl font-semibold tracking-wide">Graduated from middle school</h3>
                                                <time className="text-xs tracking-wide text-zinc-600 dark:text-zinc-400 font-sans">Jun 2022</time>
                                                <p className="mt-3 flex gap-1 items-center">
                                                    <GiGraduateCap className="w-4 h-4" />

                                                    Computer system maintainer.
                                                </p>
                                            </div>

                                            <div className="flex flex-col relative before:absolute before:top-2 before:w-3 before:h-3 before:rounded-full before:left-[-33px] before:z-[1] before:dark:bg-white before:bg-zinc-600">
                                                <h3 className="text-xl font-semibold tracking-wide">Learnt</h3>
                                                <p className="mt-3 flex gap-2 flex-wrap">
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-orange-400/30 dark:bg-orange-500/20 rounded-lg flex justify-center items-center">
                                                                        <FaHtml5 className="w-8 h-8 text-orange-500 rounded-md" />

                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="font-sans">HTML5</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-blue-400/30 dark:bg-blue-500/20 rounded-lg flex justify-center items-center">
                                                                        <FaCss3Alt className="w-8 h-8 text-blue-500 rounded-md" />

                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="font-sans">CSS</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-yellow-400/30 dark:bg-yellow-500/20 rounded-lg flex justify-center items-center">
                                                                        <RiJavascriptFill className="w-8 h-8 text-yellow-500 rounded-md" />

                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="font-sans">Javascript</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                                                                    <div className="w-12 h-12 bg-violet-400/30 dark:bg-violet-500/20 rounded-lg flex justify-center items-center">
                                                                        <SiCsharp className="w-8 h-8 text-violet-500 rounded-md" />

                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="font-sans">C#</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                </p>
                                            </div>

                                            <div className="flex flex-col relative before:absolute before:top-2 before:w-3 before:h-3 before:rounded-full before:left-[-33px] before:z-[1] before:dark:bg-white before:bg-zinc-600">
                                                <h3 className="text-xl font-semibold tracking-wide">Starting school</h3>
                                                <time className="text-xs tracking-wide text-zinc-600 dark:text-gray-400 font-sans">Sep 2018</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
}