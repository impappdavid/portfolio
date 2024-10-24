import Link from "next/link";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { ModeToggle } from "../mode-toggle";


export default function Navbar() {
    return (
        <div className="w-full fixed top-0 p-2">
            <div className="mx-auto w-full max-w-2xl h-[50px] flex items-center justify-between px-2">

                <div className="text-xl font-semibold flex items-center font-mono">
                    Papp David
                </div>

                <div className="flex items-center gap-2">

                    <div className="flex gap-1 items-center">
                        <Link href="" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-xl transition-all">
                            <AiFillGithub className="w-5 h-5" />
                        </Link>

                        <Link href="" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-xl transition-all">
                            <AiFillLinkedin className="w-5 h-5" />
                        </Link>

                        <Link href="" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-xl transition-all">
                            <BsTwitterX />
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <ModeToggle />
                    </div>

                </div>
            </div>
        </div>
    );
}
