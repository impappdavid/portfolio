import { Kode_Mono } from "next/font/google"

const kodemonoFont = Kode_Mono({
    subsets: ["latin"],
    weight: "400",
})

function Footer() {
    return (
        <>
            <div className="px-6 bg-[#ebe7e1] pt-16 sm:pt-0">
                <div className="border-t border-zinc-300 py-2 flex justify-center sm:justify-between">
                    <div className="hidden sm:flex gap-4 items-center w-56">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="fill-zinc-900">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="fill-zinc-900">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div className={`${kodemonoFont.className} text-sm`}>©2025 Papp Dávid</div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className={`${kodemonoFont.className} text-sm hover:underline cursor-pointer`}>LinkedIn</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-[#e2404e]">
                            <path d="M1 21h22L12 2" />
                        </svg>
                        <div className={`${kodemonoFont.className} text-sm hover:underline cursor-pointer`}>GitHub</div>
                    </div>

                    <div className="hidden sm:flex gap-4 items-center w-56">
                        <div className={`${kodemonoFont.className} text-sm`}>impappdavid@gmail.com</div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="fill-zinc-900">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="fill-zinc-900">
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