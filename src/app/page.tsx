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
import { BsList } from "react-icons/bs";
import { TbFolderFilled } from "react-icons/tb";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa";


const BLUR_FADE_DELAY = 0.04;








export default function Home() {
  return (
    <div className=" flex justify-center mt-14">

      <div className=" w-full max-w-2xl flex justify-center">
        
        <div className="w-full max-w-2xl min-h-[2000px] ">
          <section className="w-full px-4 pt-4 animate-[downblur_2s_ease-in-out] flex flex-col gap-4">
            <div className="grid grid-cols-4">
              <div className="flex flex-col gap-2 col-span-3">
                <h1 className="font-sans text-6xl font-semibold">Hi, I'm David</h1>
                <h2 className="font-sans text-2xl">Software developer</h2>

                <div className="flex gap-4">
                  <div className="flex gap-1 ">
                    <FaUser className="w-3 h-3 dark:text-zinc-400" />
                    <div className="text-xs dark:text-zinc-400">21 years old</div>
                  </div>
                  <div className="flex gap-1">
                    <FaLocationPin className="w-3 h-3 dark:text-zinc-400" />
                    <div className="text-xs dark:text-zinc-400">Hungary, Budapest</div>
                  </div>
                  <div className="flex gap-1">
                    <FaInfo className="w-3 h-3 dark:text-zinc-400" />
                    <div className="text-xs dark:text-zinc-400">Junior</div>
                  </div>
                </div>
              </div>
              <Avatar className="h-32 w-32">
                <AvatarImage src="./me.png" />
                <AvatarFallback>PD</AvatarFallback>
              </Avatar>
            </div>


          </section>

        </div>

        
      </div>
      <div className=" w-full w-fit h-screen sticky justify-center top-14  flex flex-col gap-6 pt-2 ">
        <BlurFade delay={0.5} inView>
            
              <ul className="px-2 flex flex-col gap-3 ">
  
  
                <li className="font-sans text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400 flex gap-1 items-center hover:cursor-pointer transition-all">
                  <a href="">
                    Introduction
                  </a>
                </li>
  
                <li className="font-sans text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400 flex gap-1 items-center hover:cursor-pointer transition-all">
                  <a href="">
                    About
                  </a>
                </li>

                <li className="font-sans text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400 flex gap-1 items-center hover:cursor-pointer transition-all">
                  <a href="">
                    Stack
                  </a>
                </li>

                <li className="font-sans text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400 flex gap-1 items-center hover:cursor-pointer transition-all">
                  <a href="">
                    Projects
                  </a>
                </li>
  
                <li className="font-sans text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400 flex gap-1 items-center hover:cursor-pointer transition-all">
                  <a href="">
                    Education
                  </a>
                </li>
  
                <li className="font-sans text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400 flex gap-1 items-center hover:cursor-pointer transition-all">
                  <a href="">
                    Experience
                  </a>
                </li>
  
                <li className="font-sans text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400 flex gap-1 items-center hover:cursor-pointer transition-all">
                  <a href="">
                    Contact
                  </a>
                </li>
  
              </ul>
            </BlurFade>
        </div>
    </div>
  );
}
