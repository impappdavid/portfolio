import { Button } from "@/components/ui/button"
import { CodeXml, Copy, Layers2, Pen, Tag } from "lucide-react"
import AllCards from "./cards"

function ProjectContent() {

    

    return (
        <>
            <div className="flex flex-col items-start w-full py-24 gap-12 min-h-screen">
                <div className="flex flex-col gap-4">
                    <div className="font-body text-5xl font-bold text-start">Projects</div>
                    <div className="text-zinc-400 font-body">
                        Crafting memorable digital experiences.
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4">
                    <AllCards />
                </div>

            </div>
        </>
    )
}
export default ProjectContent