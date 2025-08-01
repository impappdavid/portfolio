"use client"
import { Kode_Mono } from "next/font/google"
import { usePathname } from "next/navigation";

const kodemonoFont = Kode_Mono({
    subsets: ["latin"],
    weight: "400",
})

function Footer() {
    const pathname = usePathname();

    // Helper to check if the link is active (contains 'archive')
    const isArchiveActive = pathname?.toLowerCase().includes("archive");
    return (
        <>
            <div className={`px-6  ${isArchiveActive ? "bg-[#1c1c1c]" : "bg-[#d9d9d9]"} pt-16 sm:pt-0`}>
                <div className="border-t border-zinc-300 py-2 flex justify-center sm:justify-between">
                    <div className="hidden sm:flex gap-4 items-center w-56">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className={`fill-[#e2404e]`}>
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="fill-[#e2404e]">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div className={`${kodemonoFont.className} text-sm ${isArchiveActive ? "text-white" : "text-black"}`}>©2025 Papp Dávid</div>
                    </div>
                    <div   className="flex gap-4 items-center">
                        <a href="https://www.linkedin.com/in/david-papp-726a09267/" target="_blank" className={`${kodemonoFont.className} text-sm hover:underline cursor-pointer ${isArchiveActive ? "text-white" : "text-black"}`}>LinkedIn</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-[#e2404e]">
                            <path d="M1 21h22L12 2" />
                        </svg>
                        <a href="https://github.com/impappdavid" target="_blank" className={`${kodemonoFont.className} text-sm hover:underline cursor-pointer ${isArchiveActive ? "text-white" : "text-black"}`}>GitHub</a>
                    </div>

                    <div className="hidden sm:flex gap-4 items-center w-56">
                        <div className={`${kodemonoFont.className} text-sm ${isArchiveActive ? "text-white" : "text-black"}`}>impappdavid@gmail.com</div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="fill-[#e2404e]">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="fill-[#e2404e]">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Footer