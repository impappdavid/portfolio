import { Button } from "@/components/ui/button"
import { CodeXml, Copy, Layers2, MapPin, Pen } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Education from "./education"
function AboutContent() {
    return (
        <>
            <div className="flex flex-col items-start w-full py-24 gap-12 min-h-screen">
                <div className="grid grid-cols-2 gap-2 ">
                    <div className="flex flex-col gap-2 animate-[downblur_2s_ease-in-out]">
                        <div className="w-fit border rounded-full flex gap-1 py-1 px-2">
                            <MapPin className="w-4 h-4 text-zinc-400" />
                            <div className="text-xs text-zinc-400 font-body">Hungary</div>
                        </div>
                        <div className="font-body text-5xl font-bold text-start">About Me</div>
                        <div className="text-zinc-400 font-body">
                            I’m a developer who enjoys building useful and practical tools. I like solving problems with code and making things that are easy to use and understand. Most of my time goes into learning, experimenting, and improving what I work on. I care about writing clear code, staying organized, and finishing what I start.

                            Outside of coding, I enjoy music, spending time with friends, and coming up with new project ideas.
                        </div>
                    </div>
                    <div className="flex justify-end animate-[downblur_2.5s_ease-in-out]">
                        <Avatar className="h-80 w-80">
                            <AvatarImage src="./me.png" />
                            <AvatarFallback >PD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                <div className="w-full animate-[downblur_3s_ease-in-out]">
                    <Education />
                </div>


                <div className="flex flex-col gap-6 w-full animate-[downblur_3.5s_ease-in-out]">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-56 w-full p-8 bg-zinc-800/30 border border-zinc-700/50 rounded-2xl flex flex-col gap-4">
                            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center"><CodeXml className="w-5 h-5" /></div>
                            <div className="flex flex-col ">
                                <div className="text-lg font-body font-semibold">LeetCode</div>
                                <div className="text-xs text-zinc-400 font-body">Dive into my LeetCode answers</div>
                            </div>
                            <Button className="w-fit bg-zinc-800 text-sm text-white font-body hover:opacity-70 hover:bg-zinc-800 border flex gap-1  border-zinc-700 transition-all duration-500">
                                View LeetCode
                            </Button>
                        </div>
                        <div className="h-56 w-full p-8 bg-zinc-800/30 border border-zinc-700/50 rounded-2xl flex flex-col gap-4">
                            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center"><Pen className="w-4 h-4" /></div>
                            <div className="flex flex-col ">
                                <div className="text-lg font-body font-semibold">Projects</div>
                                <div className="text-xs text-zinc-400 font-body">Explore my projects in web development.</div>
                            </div>
                            <Button className="w-fit bg-zinc-800 text-sm text-white font-body hover:opacity-70 hover:bg-zinc-800 border flex gap-1  border-zinc-700 transition-all duration-500">
                                View Projects
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutContent