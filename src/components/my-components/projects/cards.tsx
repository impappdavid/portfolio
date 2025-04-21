import Link from "next/link"
import azura from "./cover.png"
import cinemaview from "./mockup1.png"

function AllCards() {
    const projectsData = [
        {
            name: "Azura",
            description: "Azura is an AI-powered NFT platform with a marketplace for creating, customizing, and trading digital assets.",
            tag: "Crypto",
            image: azura,
            link: "/azura",

        },
        {
            name: "CinemaView",
            description: "This is an app that we made for the school exam",
            image: cinemaview,
            tag: "Cinema",
            link: "/azura",
        }
    ]
    return (
        <>
            {projectsData.map((card, index) => (
                <Link key={index} href={card.link} className="w-full bg-zinc-800/50 border border-zinc-800/40 rounded-2xl overflow-hidden hover:cursor-pointer">
                    <div className="overflow-hidden">
                        <img
                            src={card.image.src}
                            alt="cover"
                            className="rounded-t-2xl w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                    <div className="py-4 px-6 flex justify-between items-center gap-4">
                        <div className="">
                            <div className="text-white font-bold font-body">{card.name}</div>
                            <div className="text-xs text-zinc-400 font-body max-w-80">{card.description}</div>
                        </div>
                        <div className="">
                            <div className="py-1 px-2 bg-transparent border border-zinc-700 rounded-lg text-xs font-body">{card.tag}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}
export default AllCards