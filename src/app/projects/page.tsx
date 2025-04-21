import Content from "@/components/my-components/experience/content"
import Hero from "@/components/my-components/explore/hero"
import AllCards from "@/components/my-components/projects/cards"
import ProjectContent from "@/components/my-components/projects/projects"

function Experience() {
    return (<>
        <div className="flex flex-col items-center bg-zinc-900/70 min-h-screen">
            <div className="w-56"></div>
            <div className="ml-56 w-full max-w-4xl h-fit flex flex-col items-center gap-12" >
                <ProjectContent />

            </div>
        </div>
    </>)
}
export default Experience