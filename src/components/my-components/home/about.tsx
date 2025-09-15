import { motion } from "framer-motion";
import { Inter } from "next/font/google"

const kodemonoFont = Inter({
    subsets: ["latin"],
    weight: "600",
})

function About() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-4 grid-rows-2 w-full gap-4">
                    <div className="flex flex-col col-span-2 row-span-2 items-start bg-zinc-200/60 rounded-3xl p-6 gap-2">
                        <div className="font-semibold text-zinc-400 text-start text-base">
                            <span className="text-black text-3xl">Frontend developer</span>
                            {' '}
                            <span className="text-3xl">with a love for clean UI and fast apps</span>
                        </div>
                        <motion.img
                            src="/laptop.png"
                            alt="laptop.png"
                            className="h-96 object-contain"
                            initial={{ opacity: 0, scale: 0.001 }}
                            whileInView={{ opacity: 1, scale: 1.02 }}
                            transition={{ type: "tween", duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        />
                    </div>
                    <div className="flex flex-col col-span-2 items-start bg-zinc-200/60 rounded-3xl p-6 justify-between gap-4 pb-6">
                        <div className="flex flex-col items-start">
                            <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Based In</div>
                            <div className={`text-3xl font-semibold`}>Hungary</div>
                        </div>
                        <div className="flex w-full justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 512 512" className="text-blue-600">
                                <path fill="currentColor" d="M20.99 284.7C64.73 325.3 79.94 391.5 158.3 401c65.1-24.1 131.3-47.5 223.9-51L468 182.4c90.6-51.1-102.4-91.48-136.1-52.5c-26 30-70.5 37.1-115.9 42.7l-11.2 26.6c-91.6 8.4-82.5-17.3-102.8-33c-39.26 20-70.5 77.8-81.01 118.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-2 items-start bg-zinc-200/60 rounded-3xl p-6 justify-between gap-4 pb-6">
                        <div className="flex flex-col items-start">
                            <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Coding Since</div>
                            <div className={`text-2xl font-semibold`}>September 2017</div>
                        </div>
                        <div className="flex w-full justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
                                <path fill="#2563eb" d="M12 14.195c-.176 0-.348-.046-.5-.133l-9-5.198a1 1 0 0 1 0-1.732l9-5.194c.31-.177.69-.177 1 0l9 5.194a1 1 0 0 1 0 1.732l-9 5.198a1 1 0 0 1-.5.133" opacity="0.25" />
                                <path fill="#2563eb" d="m21.5 11.132l-1.964-1.134l-7.036 4.064c-.31.178-.69.178-1 0L4.464 9.998L2.5 11.132a1 1 0 0 0 0 1.732l9 5.198c.31.178.69.178 1 0l9-5.198a1 1 0 0 0 0-1.732" opacity="0.5" />
                                <path fill="#2563eb" d="m21.5 15.132l-1.964-1.134l-7.036 4.064c-.31.178-.69.178-1 0l-7.036-4.064L2.5 15.132a1 1 0 0 0 0 1.732l9 5.198c.31.178.69.178 1 0l9-5.198a1 1 0 0 0 0-1.732" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-start bg-zinc-200/60 rounded-3xl  p-6 justify-between gap-12 ">
                        <div className="flex gap-1.5 items-center ">
                            <div className="w-1.5 h-1.5 bg-blue-600 animate-pulse rounded-full"></div>
                            <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>What I Do?</div>
                        </div>
                        <div className="flex w-full justify-center">
                            <div className="font-semibold text-zinc-400 text-start leading-tight text-base pr-2">
                                <span className="text-black text-xl">Focused on fast builds, clean code,</span>
                                {' '}
                                <span className="text-xl">and smart design</span>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col items-start col-span-2 bg-zinc-200/60 rounded-3xl  p-6 justify-between gap-12 ">
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col justify-between">
                                <div className="flex gap-1.5 items-center ">
                                    <div className="w-1.5 h-1.5 bg-blue-600 animate-pulse rounded-full"></div>
                                    <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Always Learning</div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="font-semibold text-zinc-400 text-start leading-tight text-base pr-2">
                                        <span className=" text-xl">Exploring</span>
                                        <br />
                                        <span className="text-black text-xl">TanStack query</span>
                                    </div>

                                </div>
                            </div>
                            <div className="">
                                <motion.img
                                    src="/learnme.png"
                                    alt="learnme.png"
                                    className="h-36 object-contain"
                                    initial={{ opacity: 0, scale: 0.001 }}
                                    whileInView={{ opacity: 1, scale: 1.02 }}
                                    transition={{ type: "tween", duration: 0.6, ease: "easeOut", delay: 0.2 }}
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
export default About;