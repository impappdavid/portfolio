import Link from "next/link"
import cover from "./cover.png"

function LatestCard() {
    return (
        <>
            <Link href="" className="w-full bg-zinc-800/50 border border-zinc-800/40 rounded-2xl overflow-hidden hover:cursor-pointer">
                <div className="overflow-hidden">
                    <img 
                        src={cover.src} 
                        alt="cover" 
                        className="rounded-t-2xl w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                    />
                </div>
                <div className="py-4 px-6 flex justify-between items-center gap-4">
                    <div className="">
                        <div className="text-white font-bold font-body">Azura</div>
                        <div className="text-xs text-zinc-400 font-body max-w-80">Azura is an AI-powered NFT platform with a marketplace for creating, customizing, and trading digital assets.</div>
                    </div>
                    <div className="">
                        <div className="py-1 px-2 bg-transparent border border-zinc-700 rounded-lg text-xs font-body">Crypto</div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default LatestCard