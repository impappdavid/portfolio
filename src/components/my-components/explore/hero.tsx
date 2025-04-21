import { Button } from "@/components/ui/button"
import { CodeXml, Copy, Download, Pen } from "lucide-react"
import LatestCard from "./cards"
import Learning from "./learning"

function Hero() {
    return (<>
        <div className="flex flex-col items-start w-full py-24 gap-8">
            <div className="flex flex-col gap-6 animate-[downblur_2s_ease-in-out]">
                <div className="font-body text-5xl font-semibold text-start">Hey, I'm David, <br /> A Full-Stack <span className="bg-gradient-to-br from-zinc-400 to-zinc-600 bg-clip-text text-transparent">Developer.</span></div>
                <div className="text-zinc-400 font-body">
                    I'm a developer who builds practical tools to solve real problems. I focus on creating simple, <br /> effective solutions that meet user needs and deliver results.
                </div>
                <div className="flex gap-4 font-body">
                    <Button className="bg-zinc-800 border border-zinc-700 text-white hover:opacity-70 hover:bg-zinc-800 transition-all duration-500">About</Button>
                    <Button className="bg-zinc-900 border border-zinc-800 text-white hover:opacity-70 hover:bg-zinc-900 transition-all duration-500">
                        <Download className="w-3 h-3 text-zinc-400"/>
                        Resumé
                    </Button>
                    <Button className="bg-zinc-900 border border-zinc-800 text-white hover:opacity-70 hover:bg-zinc-900 transition-all duration-500">
                        <Copy className="w-3 h-3 text-zinc-400" />
                        Email
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-6 animate-[downblur_2.5s_ease-in-out]">
                <div className="font-body text-lg font-semibold text-start">Latest Projects</div>
                <div className="grid grid-cols-2 gap-4">
                    <LatestCard />
                </div>

            </div>
            <div className="flex flex-col gap-6 w-full animate-[downblur_3s_ease-in-out]">
                <Learning />

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
    </>)
}

export default Hero