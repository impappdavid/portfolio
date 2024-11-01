
import { FaUser } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Introduction() {
    return (
        <section className="w-full pt-4 animate-[downblur_2s_ease-in-out] flex flex-col gap-4" >

            <div className="flex justify-between px-4 sm:px-0">
                <div className="flex flex-col gap-2 ">
                    <h1 className="font-regularFont text-4xl sm:text-6xl font-semibold">Hi, I'm Dávid</h1>
                    <h2 className="font-regularFont text-xl sm:text-2xl">Software developer</h2>

                    <div className="flex gap-4 flex-wrap">
                        <div className="flex gap-1 items-center">
                            <FaUser className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />
                            <div className="text-xs font-regularFont text-zinc-600 dark:text-zinc-400">21 years old</div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaMapMarkerAlt className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />
                            <div className="text-xs font-regularFont text-zinc-600 dark:text-zinc-400">Hungary, Nógrád</div>
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

    )
};