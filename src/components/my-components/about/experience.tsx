import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const kodemonoFont = Inter({ subsets: ["latin"], weight: "500" });

function Experience() {
    return (
        <>
            <div className="flex flex-col gap-6 items-start w-full">

                <div className="flex flex-col gap-1 items-start w-full">
                    <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>INTRODUCTION</div>
                    <div className="w-full flex justify-between items-center">
                        <div className="text-3xl font-semibold text-start">Work History</div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 w-full">
                    <div className="p-6 bg-zinc-200/60 flex gap-4 col-span-2 sm:col-span-1 rounded-3xl">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2 24 24" className="text-zinc-400 h-full p-1">
                                <g fill="currentColor">
                                    <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.63 5.63 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75z" />
                                    <circle cx="14.375" cy="1.875" r="1.875" />
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2 items-start ">
                            <div className="flex flex-col items-start">
                                <div className="text-md font-semibold">Frontend Developer</div>
                                <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Freelance</div>
                            </div>
                            <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>January 2025 - Present</div>
                        </div>
                    </div>

                    <div className="p-6 bg-zinc-200/60 flex gap-4 rounded-3xl col-span-2 sm:col-span-1">
                        <div className="relative">
                            <img src="/webvalto.png" alt="webvalto.png" className="h-14 grayscale" />
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex flex-col items-start">
                                <div className="text-md font-semibold">Frontend Developer</div>
                                <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Dual Training</div>
                            </div>
                            <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>January 2025 - Present</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start col-span-2 bg-zinc-200/60 rounded-3xl   justify-between gap-12 ">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col justify-between p-6">
                                <div className="flex gap-1.5 items-center ">
                                    <div className="w-1.5 h-1.5 bg-green-600 animate-pulse rounded-full"></div>
                                    <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Open To Work</div>
                                </div>
                            </div>
                            <div className="relative w-full flex justify-center ">
                                <motion.img
                                    src="/jobme.png"
                                    alt="jobme.png"
                                    className="h-72 object-contain"
                                    initial={{ opacity: 0, scale: 0.001 }}
                                    whileInView={{ opacity: 1, scale: 1.02 }}
                                    transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.5 }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Experience;