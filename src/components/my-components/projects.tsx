import { AiFillGithub } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { Button } from "../ui/button";


export default function Projects() {
    return (
        <section className="w-full flex flex-col gap-4 animate-[downblur_3s_ease-in-out]" id="aboutme">
        <div className=" flex flex-col gap-4 px-4 sm:px-0">
          <h3 className="text-3xl font-medium font-regularFont ">Projects</h3>
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="w-full bg-zinc-100 dark:bg-zinc-900 border p-0.5 rounded-xl hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
              <img src="/portfolio.png" alt="portfolio.png" className="w-full aspect-video sm:h-22  rounded-xl	hidden dark:flex" />
              <img src="/lightportfolio.png" alt="portfolio.png" className="w-full max-h-44 rounded-xl  flex dark:hidden	" />
              <div className="p-1 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="text-xl font-sans font-semibold">Portfolio</div>
                  <div className="text-zinc-100 dark:text-zinc-900 flex gap-1 items-center text-xs bg-emerald-500 px-1 rounded-sm">
                    <div className="w-1 h-1 bg-zinc-100 dark:bg-zinc-900 rounded-full"></div>
                    Live
                  </div>
                </div>
                <div className="text-xs font-sans tracking-wide text-zinc-600	dark:text-zinc-400">This is my personal portfolio</div>

                <div className="flex gap-1 flex-wrap">
                  <div className="h-fit py-1 bg-zinc-400/30 dark:bg-black/20 border flex justify-center gap-1 px-1 pr-2 items-center rounded-md text-xs font-sans">
                    <RiNextjsFill className="w-4 h-4 text-black dark:text-white rounded-md" />
                    NextJS
                  </div>
                  <div className="h-fit py-1 bg-zinc-400/30 dark:bg-black/20 border flex justify-center gap-1 px-1 pr-2 items-center rounded-md text-xs font-sans">
                    <RiTailwindCssFill className="w-4 h-4 text-sky-500 rounded-md" />
                    TailwindCSS
                  </div>
                  <div className=" h-fit py-1 bg-zinc-400/30 dark:bg-black/20 border flex justify-center gap-1 px-1 pr-2 items-center rounded-md text-xs font-sans">
                    <SiShadcnui className="w-4 h-4 text-white-500 rounded-md" />
                    Shadcn/ui
                  </div>
                  <div className=" h-fit py-1 bg-zinc-400/30 dark:bg-black/20 border flex justify-center gap-1 px-1 pr-2 items-center rounded-md text-xs font-sans">
                    <IoLogoVercel className="w-4 h-4 text-white-500 rounded-md" />
                    Vercel
                  </div>

                </div>

                <div className="flex gap-2">
                  <Button className="px-2 bg-zinc-100 dark:bg-zinc-950 text-xs font-sans text-black dark:text-white flex gap-1 border hover:bg-zinc-200/50 dark:hover:bg-zinc-950/50 dark:hover:border-zinc-700 hover:border-zinc-300 rounded-lg">
                    <AiFillGithub className="w-4 h-4 text-white-500 rounded-md" />

                    View code
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
};