import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUser } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiSvelteFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SiShadcnui } from "react-icons/si";


const BLUR_FADE_DELAY = 0.04;



export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center mt-16 " id="introduction">
        <GridPattern
          width={25}
          height={25}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] opacity-20",
          )}
        />
        <div className="w-full max-w-2xl min-h-[2000px] flex flex-col gap-12" >

          <section className="w-full pt-4 animate-[downblur_2s_ease-in-out] flex flex-col gap-4" >

            <div className="flex justify-between px-4 sm:px-0">
              <div className="flex flex-col gap-2 ">
                <h1 className="font-regularFont text-4xl sm:text-6xl font-semibold">Hi, I'm David</h1>
                <h2 className="font-regularFont text-xl sm:text-2xl">Software developer</h2>

                <div className="flex gap-4 flex-wrap">
                  <div className="flex gap-1 items-center">
                    <FaUser className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />
                    <div className="text-xs font-regularFont text-zinc-600 dark:text-zinc-400">21 years old</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaMapMarkerAlt className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />
                    <div className="text-xs font-regularFont text-zinc-600 dark:text-zinc-400">Hungary, Budapest</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaInfo className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />
                    <div className="text-xs font-regularFont text-zinc-600 dark:text-zinc-400">Junior</div>
                  </div>
                </div>
              </div>
              <Avatar className="h-32 w-32">
                <AvatarImage src="./me.png" />
                <AvatarFallback>PD</AvatarFallback>
              </Avatar>
            </div>
          </section>

          <section className="w-full flex flex-col gap-4 animate-[downblur_2.5s_ease-in-out]" id="aboutme">
            <div className=" flex flex-col gap-4 px-4 sm:px-0">
              <h3 className="text-3xl font-medium font-regularFont ">About</h3>
              <div className=" text-zinc-600 text-sm dark:text-zinc-300 tracking-wide leading-relaxed font-regularFont">
                I’m a developer who loves <span className="text-zinc-700 dark:text-zinc-100 text-md font-semibold">new challenges</span> and <span className="text-zinc-700 dark:text-zinc-100 text-md font-semibold">learning something new</span> with each project.
                Outside of tech,
                I’m into <span className="text-zinc-700 dark:text-zinc-100 text-md font-semibold">playing with friends and listening music.</span>
              </div>
            </div>
          </section>

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
                      <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                        <div className="w-12 h-12 bg-blue-700/20 rounded-lg flex justify-center items-center">
                          <BiLogoTypescript className="w-8 h-8 text-blue-700 rounded-md" />

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
                      <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
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
                      <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
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
                      <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
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
                      <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
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
                      <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
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
                      <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
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
                      <div className="w-16 h-16 border bg-zinc-100 dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
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
                      <div className="w-16 h-16 bg-zinc-100 border dark:bg-zinc-900 rounded-xl flex justify-center items-center hover:cursor-pointer">
                        <div className="w-12 h-12 bg-zinc-400/30 dark:bg-black/20 rounded-lg flex justify-center items-center">
                          <SiShadcnui  className="w-8 h-8 text-white-500 rounded-md" />

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





        </div>

      </div>
    </>
  );
}
