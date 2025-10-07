import { Inter } from "next/font/google"
import { motion } from "framer-motion";

const kodemonoFont = Inter({
    subsets: ["latin"],
    weight: "500",
})

function FreelanceStats() {
    return (
        <>
            <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-zinc-200/60 p-6 col-span-2 sm:col-span-1 rounded-3xl flex flex-col justify-between  gap-4">
                    <div className="flex flex-col">
                        <div className="text-xl font-semibold text-zinc-400">Projects</div>
                        <div className="w-full flex justify-center">
                            <div className="text-6xl">10+</div>
                        </div>
                    </div>
                    <div className="h-full relative">
                        <motion.img
                            src="/laptop.png"
                            alt="laptop.png"
                            loading="lazy"
                            className="h-full object-contain"
                            initial={{ opacity: 0, scale: 0.001 }}
                            whileInView={{ opacity: 1, scale: 1.02 }}
                            transition={{ type: "tween", duration: 0.6, ease: "easeOut" , delay: 0.2}}
                            viewport={{ once: true, amount: 0.5 }}
                        />
                    </div>
                </div>
                <div className="bg-zinc-200/60  col-span-2 rounded-3xl flex justify-between gap-6">
                    <div className="flex flex-col col-span-1 p-6 items-start rounded-3xl justify-between gap-4 ">
                        <div className="flex flex-col items-start text-start">
                            <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Freelance Since</div>
                            <div className={`text-2xl font-semibold`}>January 2025</div>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className={`text-xs text-zinc-400 ${kodemonoFont.className}`}>Clients Served</div>
                            <div className={`text-4xl font-semibold`}>1+</div>
                        </div>

                    </div>
                    <div className="h-full relative">
                        <motion.img
                            src="/happy.png"
                            alt="happy.png"
                            loading="lazy"
                            className="h-fit object-contain"
                            initial={{ opacity: 0, scale: 0.001 }}
                            whileInView={{ opacity: 1, scale: 1.02 }}
                            transition={{ type: "tween", duration: 0.6, ease: "easeOut" , delay: 0.2}}
                            viewport={{ once: true, amount: 0.5 }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default FreelanceStats;