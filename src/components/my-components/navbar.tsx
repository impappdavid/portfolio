
import {Kode_Mono} from "next/font/google"

const kodemonoFont = Kode_Mono({
  subsets: ["latin"],
  weight: "400",
})

function Navbar() {
    return (
        <>
            <div className={`fixed top-0  px-6 w-full ${kodemonoFont.className}`}>
                <div className=" w-full py-2 flex justify-between items-center  border-zinc-400">
                    <div className="w-36">
                        <div className=" bg-[#e2404e] w-fit text-white px-2 py-1 font-mono font-semibold cursor-pointer transition-all duration-300 flex items-center">Papp Dávid</div>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <a href="" className=" hover:underline cursor-pointer ">About</a>
                        <a href="" className=" hover:underline cursor-pointer">Work</a>
                        <a href="" className=" hover:underline cursor-pointer">Project</a>
                    </div>
                    <div className="w-36 flex justify-end">
                        <div className="w-fit border-2 border-[#e2404e] font-mono text-[#e2404e] hover:bg-[#e2404e] hover:text-white px-3 py-1 font-semibold cursor-pointer transition-all duration-300">Contact</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar