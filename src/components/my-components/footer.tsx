"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const kodemonoFont = Inter({
    subsets: ["latin"],
    weight: "600",
});

function Footer() {
    return (
        <>
            <div className="flex flex-col gap-6 items-center w-full">
                <div className="flex flex-col gap-1 items-center">
                    <div className={`text-xs text-zinc-400 font-normal ${kodemonoFont.className}`}>GET IN TOUCH</div>
                    <div className="text-3xl font-semibold">Let’s Connect</div>
                </div>

                <div>
                    <a href="mailto:impappdavid@gmail.com" target="_blank" className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all duration-200">
                        Send Message
                    </a>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 w-full mt-6">
                    <div className="col-span-3 p-4 rounded-3xl bg-zinc-200/60 flex  gap-4 sm:gap-0 justify-center items-center sm:items-start">
                        <div className="text-xl font-semibold">impappdavid@gmail.com</div>
                    </div>
                    <div className="bg-zinc-200/60 rounded-3xl col-span-3 sm:col-span-1 p-4 flex flex-col items-center gap-2 w-full">
                        <div>
                            <div className="text-black font-semibold text-sm">Hi, I’m David.</div>
                            <div className="text-zinc-400 font-semibold text-sm">I create user interfaces.</div>
                        </div>

                        <motion.img
                            src="/laptop.png"
                            alt="laptop.png"
                            className="w-64 h-40 object-contain"
                            initial={{ opacity: 0, scale: 0.001 }}
                            whileInView={{ opacity: 1, scale: 1.02 }}
                            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        />
                    </div>

                    <div className="col-span-3 sm:col-span-2 bg-zinc-200/60 rounded-3xl p-6 flex flex-col gap-16 sm:gap-0 justify-between">
                        <div className="grid grid-cols-3 w-full">
                            <div className="flex flex-col gap-2 items-start">
                                <div className={`text-sm text-zinc-400 ${kodemonoFont.className}`}>Menu</div>
                                <div className="flex flex-col items-start">
                                    <Link href="/" className="text-xl font-semibold hover:text-zinc-600 transition-all duration-200">Home</Link>
                                    <Link href="/works" className="text-xl font-semibold hover:text-zinc-600 transition-all duration-200">Works</Link>
                                    <Link href="/about" className="text-xl font-semibold hover:text-zinc-600 transition-all duration-200">About</Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 items-start">
                                <div className={`text-sm text-zinc-400 ${kodemonoFont.className}`}>Socials</div>
                                <div className="flex flex-col items-start">
                                    <Link href="https://x.com/impappdavid" target="_blank" className="text-xl font-semibold hover:text-zinc-600 transition-all duration-200">X</Link>
                                    <Link href="https://www.linkedin.com/in/david-papp-726a09267/" target="_blank" className="text-xl font-semibold hover:text-zinc-600 transition-all duration-200">LinkedIn</Link>
                                    <Link href="https://github.com/impappdavid" target="_blank" className="text-xl font-semibold hover:text-zinc-600 transition-all duration-200">GitHub</Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 items-start">
                                <div className={`text-sm text-zinc-400 ${kodemonoFont.className}`}>Explore</div>
                                <div className="flex flex-col items-start">
                                    <Link href="https://www.fiverr.com/impappdavid?public_mode=true" target="_blank" className="text-xl font-semibold hover:text-zinc-600 transition-all duration-200">Fiverr.</Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className={`text-sm text-zinc-400 ${kodemonoFont.className}`}>© 2025, David</div>
                            <Link href="#" className={`text-sm text-zinc-400 hover:text-black transition-all duration-200 ${kodemonoFont.className}`}>Back to Top</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;
