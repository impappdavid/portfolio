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
                        <Link href="/projects" className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all duration-200">View All</Link>
                    </div>
                </div>
                <div
                    className="w-full bg-zinc-200/60 rounded-3xl"
                >


                    <div className=" rounded-3xl sm:rounded-b-none  p-2 relative">
                        <img
                            src="/projects/revalo/cover1.png"
                            alt="revalo"
                            loading="lazy"
                            className="w-full h-auto rounded-b-3xl sm:rounded-3xl "
                        />

                        <div className="absolute top-8 left-8 flex flex-col items-start">
                            <div className="text-2xl sm:text-3xl font-semibold">Revalo</div>
                            <div className={`text-sm text-start text-zinc-500 leading-tight max-w-md ${kodemonoFont.className}`}>
                                Social Media App
                            </div>
                        </div>

                        <div className="absolute top-8 right-8 flex flex-col items-start">
                            <Link
                                href="/projects/revalo"
                                className={`bg-blue-600 w-fit mt-1 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 ${kodemonoFont.className}`}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default RecentProject