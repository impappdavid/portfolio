import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { ModeToggle } from "../mode-toggle";
import { HiAtSymbol } from "react-icons/hi";



export default function Navbar() {
    return (
        
            <div className="w-full fixed top-0 animate-[example_1s_ease-in-out] z-50">
                
                <div className="mx-auto px-4 sm:px-0 w-full max-w-6xl h-[50px] flex items-center justify-between px-2 pt-1 backdrop-blur-lg">

                    <div className="text-xl font-semibold flex gap-2 items-center font-mono">
                        <div className="w-6 h-6 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center">
                            <HiAtSymbol className="w-4 h-4 text-white dark:text-black" />

                        </div>
                        Papp Dávid
                    </div>

                    <div className="flex items-center gap-2">

                        <div className="flex gap-1 items-center">
                            <Link href="https://github.com/impappdavid" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-xl transition-all" target="_blank">
                                <AiFillGithub className="w-5 h-5" />
                            </Link>

                            <Link href="https://www.linkedin.com/in/david-papp-726a09267/" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-xl transition-all" target="_blank">
                                <AiFillLinkedin className="w-5 h-5" />
                            </Link>

                            <Link href="https://x.com/impappdavid" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-xl transition-all" target="_blank">
                                <BsTwitterX />
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <ModeToggle />
                        </div>

                    </div>
                </div>
                
                <div className="mx-auto relative w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            
            </div >
    );
}
