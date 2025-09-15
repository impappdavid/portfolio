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
                <div className="w-full bg-zinc-200/60 rounded-3xl   ">
                    <div className="flex gap-4 sm:gap-0 justify-between p-8 leading-tight ">

                        <div className="flex gap-2 text-start items-start justify-between flex-col sm:flex-row sm:items-start w-full">
                            <div className="flex flex-col gap-2">
                                <div className="text-3xl font-semibold">GamingWitMe</div>
                                <div className={`text-sm text-zinc-400 leading-tight max-w-sm ${kodemonoFont.className}`}>
                                    A booking platform for gamers and creators with profiles, services, payments, and admin tools.
                                </div>
                                <a href="/works/gamingwithme" className="bg-blue-600 w-fit mt-1 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all duration-200">Read More</a>

                            </div>
                            <div className="p-3 bg-blue-500/20 rounded-3xl text-sm font-semibold text-start max-w-xs">
                                "They did a good job. Quick response and solutions. Creative ideas. I recommend to everyone"
                            </div>

                        </div>
                    </div>
                    <div className="  overflow-hidden rounded-b-3xl sm:rounded-b-none sm:rounded-r-3xl">
                        <img src="/projects/gamingwithme/cover1.png" alt="azura" className="rounded-b-3xl sm:rounded-bl-none sm:rounded-br-3xl sm:rounded-r-3xl" />
                    </div>
                </div>

            </div>
        </>
    )
}
export default RecentProject