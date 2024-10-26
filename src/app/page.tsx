import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { IoMdFolder } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdHome } from "react-icons/io";






export default function Home() {
  return (
    <div className=" flex justify-center mt-14">

      <div className=" w-full max-w-7xl flex">
        <div className=" w-full max-w-[250px] h-fit sticky top-14  flex flex-col gap-4 pt-2 ">
          
            <ul className="px-2 flex flex-col gap-1.5">

                <li className="font-semibold text-md font-sans">Stack</li>
             
                <li className="font-sans text-md text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 flex gap-1 items-center hover:cursor-pointer">

                  <RiNextjsFill className="w-5 h-5" />
                  NextJS
                </li>

                <li className="font-sans text-md text-zinc-700 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 flex gap-1 items-center hover:cursor-pointer">

                  <FaReact className="w-5 h-5" />
                  React
                </li>

                <li className="font-sans text-md text-zinc-700  dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 flex gap-1 items-center hover:cursor-pointer">
                  <RiSvelteFill className="w-5 h-5" />
                  Svelte
                </li>

                <li className="font-sans text-md text-zinc-700 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-500 flex gap-1 items-center hover:cursor-pointer">
                  <BiLogoGit className="w-5 h-5" />
                  Git
                </li>

                <li className="font-sans text-md text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 flex gap-1 items-center hover:cursor-pointer">
                  <BiLogoTypescript className="w-5 h-5" />
                  TypeScript
                </li>
                <li className="font-sans text-md text-zinc-700 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 flex gap-1 items-center hover:cursor-pointer">

                  <SiNestjs className="w-5 h-5" />
                  NestJS
                </li>
                <li className="font-sans text-md text-zinc-700 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 flex gap-1 items-center hover:cursor-pointer">

                  <DiMysql className="w-5 h-5" />
                  MySQL
                </li>
                <li className="font-sans text-md text-zinc-700 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 flex gap-1 items-center hover:cursor-pointer">

                  <RiTailwindCssFill className="w-5 h-5" />
                  TailwindCSS
                </li>
            </ul>

          <Collapsible >
            <ul className="px-2 flex flex-col gap-1.5">

              <CollapsibleTrigger className="flex justify-between items-center">
                <li className="font-semibold text-md font-sans">Projects</li>
                <IoIosArrowDown className="w-3 h-3" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <li className="font-sans text-sm text-zinc-700 dark:text-zinc-400 transition-all">
                  Not yet
                </li>
              </CollapsibleContent>


            </ul>
          </Collapsible>
        </div>

        <div className="w-full max-w-3xl min-h-[2000px] flex bg-red-500/20 mx-auto">

        </div>

        <div className=" w-full max-w-[250px] h-fit sticky top-14  flex flex-col gap-6 pt-2 ">
        </div>
      </div>
    </div>
  );
}
