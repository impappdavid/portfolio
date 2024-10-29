import BlurFade from "../magicui/blur-fade";

export default function Sidebar() {
    return (
        <div className=" w-full w-fit h-screen sticky justify-center top-14  flex flex-col gap-6 pt-2 ">
            <BlurFade delay={0.5} inView>

                <h3 className="px-2 font-medium text-md text-zinc-400 font-sans">Contents</h3>
                <ul className="px-2 flex flex-col gap-3 pt-4">


                    <li className="font-sans text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400 flex gap-1 items-center hover:cursor-pointer transition-all">
                        <a href="#introduction">
                            Introduction
                        </a>
                    </li>

                    <li className="font-sans text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400 flex gap-1 items-center hover:cursor-pointer transition-all">
                        <a href="#aboutme">
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
    );
}
