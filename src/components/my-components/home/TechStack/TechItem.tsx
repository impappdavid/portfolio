import { motion } from "framer-motion";
import { Inter } from "next/font/google"
import { TechItemType } from "../../../constants/Stack";

const kodemonoFont = Inter({
    subsets: ["latin"],
    weight: "600",
})

function TechItem({ item }: { item: TechItemType }) {
    return (
        <motion.div 
            className="relative flex flex-col p-2 border-y first:border-l border-r items-center justify-center hover:bg-zinc-50 aspect-square transition-colors cursor-default overflow-hidden"
            whileHover="hover" 
        >
            <motion.div
                variants={{
                    initial: { y: 0 },
                    hover: { y: -10 } 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-2"
            >
                {item.icon}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                variants={{
                    initial: { opacity: 0, y: 10 },
                    hover: { opacity: 1, y: 0 } 
                }}
                className={`absolute bottom-4 text-xs font-medium uppercase tracking-wider text-zinc-600 ${kodemonoFont.className}`}
            >
                {item.name}
            </motion.div>
        </motion.div>
    );
}

export default TechItem