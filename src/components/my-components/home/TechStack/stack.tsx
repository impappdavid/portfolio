import { Inter } from "next/font/google"
import { 
    languages, 
    frontend, 
    backend, 
    databases, 
    toolsTesting
} from "../../../constants/Stack";

import StackSection from "./StackSelection";

const kodemonoFont = Inter({
    subsets: ["latin"],
    weight: "600",
})

function Stack() {
    return (
        <>
            <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-1 items-start">
                    <div className={`text-xs text-zinc-400 font-normal ${kodemonoFont.className}`}>
                        TECH STACK
                    </div>
                    <div className="text-3xl font-semibold">What I Use</div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <StackSection title="Languages" items={languages} columns={4} />
                    <StackSection title="Frontend" items={frontend} columns={4} />
                    <StackSection title="Backend" items={backend} columns={3} />
                    <StackSection title="Databases" items={databases} columns={2} />
                    <StackSection title="Tools/Testing" items={toolsTesting} columns={4} />
                </div>
            </div>
        </>
    )
}
export default Stack