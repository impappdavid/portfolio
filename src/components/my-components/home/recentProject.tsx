import { Inter } from "next/font/google"
import Link from "next/link"

const kodemonoFont = Inter({
    subsets: ["latin"],
    weight: "600",
})

function RecentProject() {
    return (
        <>
            <div className="flex flex-col gap-6 items-start w-full">

                <div className="flex flex-col gap-1 items-start w-full">
                    <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>PROJECTS</div>
                    <div className="w-full flex justify-between items-center">
                        <div className="text-3xl font-semibold">Recent project</div>
                        <Link href="/works" className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all duration-200">View All</Link>
                    </div>
                </div>
                <div className="w-full bg-zinc-200/60 rounded-3xl  grid sm:grid-cols-3 ">
                    <div className="flex flex-col gap-4 sm:gap-0 justify-between p-4 leading-tight ">
                        <div className="p-2 bg-white rounded-lg text-sm font-semibold text-start">
                            "They did a good job. Quick response and solutions. Creative ideas. I recommend to everyone"
                        </div>
                        <div className="flex flex-col gap-0.5 text-start">
                            <div className="text-xl font-semibold">GamingWitMe</div>
                            <div className={`text-xs text-zinc-400 leading-tight ${kodemonoFont.className}`}>
                                A booking platform for gamers and creators with profiles, services, payments, and admin tools.
                            </div>
                            <a href="/works/gamingwithme" className="bg-blue-600 w-fit mt-3 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all duration-200">Read More</a>
                        </div>
                    </div>
                    <div className="col-span-2  overflow-hidden rounded-b-3xl sm:rounded-b-none sm:rounded-r-3xl">
                        <img src="/projects/gamingwithme.png" alt="azura" className="rounded-b-3xl sm:rounded-bl-none sm:rounded-br-3xl sm:rounded-r-3xl" />
                    </div>
                </div>

            </div>
        </>
    )
}
export default RecentProject