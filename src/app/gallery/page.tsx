import Content from "@/components/my-components/experience/content"
import Hero from "@/components/my-components/explore/hero"
import AllCards from "@/components/my-components/projects/cards"
import ProjectContent from "@/components/my-components/projects/projects"

function Experience() {
    return (<>
        <div className="flex flex-col items-center bg-zinc-900/70 min-h-screen">
            <div className="w-56"></div>
            <div className="ml-56 w-full max-w-4xl h-fit flex flex-col items-center justify-center gap-12" >
                <div className="flex items-center justify-center w-full h-screen animate-[downblur_1s_ease-in-out]">
                    <div className="font-body text-6xl font-bold p-2 bg-gradient-to-br from-zinc-400 to-zinc-600 bg-clip-text text-transparent">Coming Soon</div>
                </div>

            </div>
        </div>
    </>)
}
export default Experience