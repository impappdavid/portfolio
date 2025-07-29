import { Bebas_Neue, Barlow_Condensed } from "next/font/google"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const kodemonoFont = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
})
const barlowFont = Barlow_Condensed({
    subsets: ["latin"],
    weight: "400",
})

function About() {
    return (
        <>
            <div className="flex flex-col gap-6 pt-24">
                <div className={`text-7xl flex justify-center tracking-wider ${kodemonoFont.className} text-center`}>PAPP DÁVID</div>
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-col items-center">
                        <div className={`text-xl tracking-wide ${kodemonoFont.className}`}>ABOUT ME</div>
                        <span className={`${barlowFont.className} text-xl text-zinc-600 max-w-2xl px-4 text-center`}>
                            I'm a developer <span className="font-semibold">focused on frontend</span> work, using
                            {/* --- JavaScript Icon Tooltip --- */}
                            <TooltipProvider>
                                <Tooltip delayDuration={120}>
                                    <TooltipTrigger asChild>
                                        <span className="font-semibold inline-flex items-center mx-1 align-middle">
                                            <svg aria-label="JavaScript" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" className="inline-block align-middle -rotate-12 hover:scale-125 hover:rotate-0 transition-all duration-300 cursor-pointer">
                                                <path fill="#f7df1e" d="M0 0h256v256H0z" />
                                                <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
                                            </svg>
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className={`${barlowFont.className} bg-yellow-300 backdrop-blur-2xl text-black text-md`}>
                                        <span className="flex items-center gap-2 font-semibold">
                                            JavaScript
                                        </span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            and

                            {/* --- TypeScript Icon Tooltip --- */}
                            <TooltipProvider>
                                <Tooltip delayDuration={120}>
                                    <TooltipTrigger asChild>
                                        <span className="font-semibold inline-flex items-center mx-1 align-middle">
                                            <svg aria-label="TypeScript" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128" className="inline-block align-middle rotate-12 hover:scale-125 hover:rotate-0 transition-all duration-300 cursor-pointer">
                                                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                                                <path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z" />
                                            </svg>
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className={`${barlowFont.className} bg-blue-500 backdrop-blur-2xl text-white text-md`}>
                                        <span className="flex items-center gap-2 font-semibold">

                                            TypeScript
                                        </span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            {/* --- ...repeat with similar structure for React, Tailwind, and so on... --- */}

                            for building dynamic, interactive functionality. TypeScript also helps me write safer, more scalable code.

                            I use

                            {/* --- React Icon Tooltip --- */}
                            <TooltipProvider>
                                <Tooltip delayDuration={120}>
                                    <TooltipTrigger asChild>
                                        <span className="font-semibold inline-flex items-center mx-1 align-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="p-0.5 bg-cyan-500 inline-block align-middle rotate-0 hover:scale-125 hover:rotate-180 transition-all duration-300 cursor-pointer">
                                                <path fill="#fff" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
                                            </svg>
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className={`${barlowFont.className} bg-cyan-500 backdrop-blur-2xl text-white text-md`}>
                                        <span className="flex items-center gap-2 font-semibold">

                                            React
                                        </span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            for crafting modular and efficient user interfaces, and

                            {/* --- TailwindCSS Icon Tooltip --- */}
                            <TooltipProvider>
                                <Tooltip delayDuration={120}>
                                    <TooltipTrigger asChild>
                                        <span className="font-semibold inline-flex items-center mx-1 align-middle">
                                            <svg aria-label="TailwindCSS" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128" className="p-0.5 bg-sky-400 inline-block align-middle rotate-0 hover:scale-125 hover:rotate-180 transition-all duration-300 cursor-pointer">
                                                <path fill="#fff" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0" />
                                            </svg>
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className={`${barlowFont.className} bg-sky-400 backdrop-blur-2xl text-white text-md`}>
                                        <span className="flex items-center gap-2 font-semibold">

                                            Tailwind CSS
                                        </span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            to style components quickly with a utility-first approach.

                            I like turning designs into <span className="font-semibold">functional interfaces</span> that are clean and responsive.
                            I care about writing <span className="font-semibold">clear code</span> and making things that
                            <span className="font-semibold">work well</span> for real people.
                            Most of my time goes into <span className="font-semibold">learning</span> and building projects that reflect what I value in good software.
                        </span>


                    </div>
                    <span className={`${barlowFont.className} text-xl text-zinc-600 max-w-2xl text-center`}>
                        Outside of programming, I’ve always found science fascinating
                        <span className="inline-flex items-center mx-1 align-middle" title="Science">
                            {/* Flask/Science Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-orange-500 inline-block align-middle -rotate-12 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer">
                                <path d="M2.5 20.504h-1v2h1zm1-2h-1v2h1zm1-2.001h-1v2h1zm1-1h-1v1h1zm1.001-1h-1v1h1zm1-1h-1v1h1zm1.001-1.001h-1v1h1zm7.001 0h-1v1h1zm1 1.001h-1v1h1zm1.001 1h-1v1h1zm1 1h-1v1h1zm1 1h-1v2h1zm1 2.001h-1v2h1zm1.001 2h-1v2h1zm-1.001 2.001H2.5v1h18.004z" />
                                <path d="M18.504 20.505v-2h-1v-2.001h-1v-1h-1v-1h-1.001v-1.001h-3v1h-1v1H6.5v1h-1v2.001h-1v2h-1v1h16.003v-1zM7.5 17.504h2v2h-2zm4.001-1h1v1h-1zM14.503 3.5h-1v9.002h1zm-5.001 0h-1v9.002h1zm6.001-1h-1v1h1zm-7.001 0h-1v1h1zm6.001-1H8.502v1h6.001z" />
                            </svg>
                        </span>. I’ve never studied it in depth, but I think it’s mind blowing how it explains the world and how things work
                        <span className="inline-flex items-center mx-1 align-middle" title="Atom">
                            {/* Atom Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="inline-block align-middle rotate-12 hover:scale-125 hover:-rotate-12 transition-all duration-300 cursor-pointer">
                                <path fill="#3b82f6" d="M16.471 16.471c4.939-4.939 6.94-10.944 4.471-13.413c-2.469-2.47-8.474-.468-13.413 4.47c-4.939 4.94-6.94 10.945-4.471 13.414c2.47 2.47 8.475.468 13.413-4.47" opacity="0.3" />
                                <path fill="#3b82f6" d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058c2.469-2.47 8.474-.468 13.413 4.47c4.939 4.94 6.94 10.945 4.471 13.414c-2.47 2.47-8.475.468-13.413-4.47" opacity="0.3" />
                                <path fill="#3b82f6" d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" />
                            </svg>
                        </span>. The way everything connects from the tiniest particles
                        <span className="inline-flex items-center mx-1 align-middle" title="Molecule">
                            {/* Molecule Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="inline-block align-middle -rotate-12 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer">
                                <g fill="none" stroke="#f43f5e" stroke-width="1">
                                    <circle cx="12" cy="12" r="2.5" />
                                    <path stroke-linejoin="round" d="m10 14l-3.5 3.5m4-7L6 6" />
                                    <circle cx="17" cy="17" r="1.5" />
                                    <circle cx="20" cy="12" r="1.5" />
                                    <path stroke-linejoin="round" d="M18.5 12h-4m-.5 2l2 2" />
                                    <circle cx="19" cy="5" r="2.5" />
                                    <path stroke-linejoin="round" d="m17 7l-3 3" />
                                    <circle cx="5" cy="5" r="1.5" />
                                    <circle cx="5" cy="19" r="2.5" />
                                </g>
                            </svg>
                        </span> to the universe itself
                        <span className="inline-flex items-center mx-1 align-middle" title="Universe/Planet">
                            {/* Planet Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" className="inline-block align-middle rotate-45 hover:scale-125 hover:-rotate-45 transition-all duration-300 cursor-pointer">
                                <circle cx="18" cy="18" r="10.694" fill="#ffcc4d" />
                                <path fill="#f4900c" d="M10.229 22.751c-.985.067-1.689-.308-2.203-.917c.214.557.487 1.081.788 1.588c.771.289 1.591.41 2.54-.272c-.463-.227-.88-.415-1.125-.399M23.086 8.608c.045.328-.187.5-.75.363c-.955-.232-1.793.776-2.274 1.619c-.947 1.657-4.854 3.524-4.857 2.087c-.001-.679-3.452.843-3.893.161c-.417-.644-1.663-.396-1.921-1.168a10.66 10.66 0 0 0-2.04 5.422c.377.718.864 1.282 1.352 1.526c.66.33 3.726 1.528 4.174.763c.747-1.276 5.229-.373 5.122-1.044c-.205-1.285 2.427-.23 3.373-1.886c.482-.843 1.533-1.49 2.489-1.258c1.116.271 2.493-1.643 2.389-3.996a10.7 10.7 0 0 0-3.164-2.589m3.181 16.175c-.338.166-.671.293-.975.326c-2.248.243-2.734 2.005-4.242 1.703c-.777-.156-1.837 1.214-3.05 1.297a22 22 0 0 0-2.386.308a10.7 10.7 0 0 0 2.386.277c3.331 0 6.305-1.523 8.267-3.911" />
                                <path fill="#e85e00" d="M23.225 8.674a10.7 10.7 0 0 1 2.554 2.003c2.491-.157 4.01.429 3.883 1.777c-.066.705-.585 1.542-1.431 2.435c-2.108 2.221-6.309 4.796-11.07 6.602c-3.309 1.255-6.258 1.9-8.366 1.934c-2.145.035-3.418-.563-3.302-1.803c.076-.815.752-1.806 1.852-2.857c-.019-.255-.039-.507-.039-.765c0-.848.109-1.669.296-2.461C3.3 18.522.5 21.807.5 24.369c0 3.487 5.162 4.558 12.275 2.957A43 43 0 0 0 18 25.777c3.9-1.419 7.489-3.3 10.399-5.317c4.301-2.983 7.101-6.268 7.101-8.83c0-3.486-5.162-4.558-12.275-2.956" />
                                <path fill="#f4900c" d="M6.356 18.051a11.3 11.3 0 0 0-1.88 2.382c-.49.852-.907 1.811-.844 2.671c.035.856.682 1.366 1.558 1.602c.874.227 1.845.287 2.834.229a25.3 25.3 0 0 0 5.841-.965c1.924-.505 3.791-1.225 5.615-2.036a42.6 42.6 0 0 0 10.132-6.382c.368-.333.771-.649 1.124-.986c.333-.337.647-.713.91-1.097c.522-.768.826-1.667.335-2.352c-.49-.696-1.495-1.075-2.453-1.271c-.981-.187-2.01-.23-3.03-.111c.992-.265 2.037-.395 3.088-.316c1.03.092 2.172.3 3.008 1.221c.41.457.599 1.145.524 1.746c-.057.611-.293 1.15-.563 1.635c-.278.485-.59.925-.945 1.348c-.352.404-.709.777-1.072 1.163c-2.932 2.994-6.44 5.414-10.261 7.159c-3.816 1.72-7.974 2.911-12.261 2.754c-1.056-.04-2.157-.133-3.236-.548c-.534-.209-1.082-.517-1.5-1.016a2.5 2.5 0 0 1-.589-1.774c.098-1.213.704-2.152 1.349-2.976a9.8 9.8 0 0 1 2.316-2.08" />
                            </svg>
                        </span> is something I find endlessly interesting. Even if I don’t always understand the details, I love reading or watching things about physics
                        <span className="inline-flex items-center mx-1 align-middle" title="Physics">
                            {/* Physics/Relativity Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="inline-block align-middle rotate-0 hover:scale-125 hover:rotate-180 transition-all duration-300 cursor-pointer">
                                <g fill="none" stroke="#f43f5e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                    <path d="M12 5.793a28 28 0 0 1 3.342 2.865A28 28 0 0 1 18.207 12M12 5.793a28 28 0 0 0-3.342 2.865A28 28 0 0 0 5.793 12M12 5.793c3.57-2.584 6.947-3.554 8.354-2.147S20.791 8.43 18.207 12m0 0c2.584 3.57 3.554 6.947 2.147 8.354c-1.043 1.043-3.17.78-5.654-.48M18.207 12a28 28 0 0 1-2.865 3.342A28 28 0 0 1 12 18.207m0 0a28 28 0 0 1-3.342-2.865A28 28 0 0 1 5.793 12M12 18.207c-3.57 2.584-6.947 3.554-8.354 2.147S3.209 15.57 5.793 12m0 0C3.21 8.43 2.24 5.053 3.646 3.646c1.043-1.043 3.17-.78 5.654.48" />
                                    <circle cx="12" cy="12" r="2" />
                                </g>
                            </svg>
                        </span>, space
                        <span className="inline-flex items-center mx-1 align-middle" title="Space">
                            {/* Saturn Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="inline-block align-middle -rotate-12 hover:scale-125 hover:rotate-45 transition-all duration-300 cursor-pointer">
                                <path fill="#5f65b2" d="M488.951 10.383H21.716c-6.6 0-12 5.4-12 12v467.234c0 6.6 5.4 12 12 12H488.95c6.6 0 12-5.4 12-12V22.383c.001-6.6-5.399-12-11.999-12" />
                                <path fill="#8280d8" d="M488.951 10.383H257.513a202 202 0 0 1-12.238 10.88c-23.164 18.991-37.945 47.829-37.945 80.12q0 1.321.033 2.635a15.253 15.253 0 0 1-15.767 15.697a95 95 0 0 0-2.974-.046c-25.083 0-47.876 9.796-64.766 25.771c-11.403 10.784-28.374 13.309-42.341 6.149c-21.533-11.039-45.938-17.265-71.799-17.265v315.258c74.614 0 137.11-51.844 153.452-121.474c2.752-11.727 13.182-19.897 25.228-19.868h.226c37.339 0 69.605-21.706 84.874-53.189c6.18-12.742 22.812-15.95 33.346-6.484c35.03 31.479 81.354 50.635 132.158 50.635c21.639 0 42.462-3.483 61.951-9.904V22.383c0-6.6-5.4-12-12-12" />
                                <path fill="#5f65b2" d="M59.732 319.087a7.444 7.444 0 1 1 0-14.889a7.444 7.444 0 0 1 0 14.889m177.162-53.566c-9.776 0-17.701-7.925-17.701-17.701s7.925-17.701 17.701-17.701s17.701 7.925 17.701 17.701s-7.925 17.701-17.701 17.701m72.977-114.324c-7.484 0-13.55-6.067-13.55-13.55s6.067-13.55 13.55-13.55s13.55 6.067 13.55 13.55s-6.067 13.55-13.55 13.55m134.077 7.738c-13.595 0-24.616-11.021-24.616-24.616s11.021-24.616 24.616-24.616s24.616 11.021 24.616 24.616c-.001 13.595-11.021 24.616-24.616 24.616" />
                                <path fill="#2b3b47" d="M21.716 501.617H488.95c6.6 0 12-5.4 12-12V319.682c-18.713-8.416-42.152-3.472-55.287 14.866l-51.058 71.277c-12.713 17.747-37.984 20.606-54.34 6.148l-7.456-6.591c-24.548-21.699-64.717-21.699-89.265 0c-4.849 4.286-12.377 3.242-15.877-2.201l-24.938-38.783c-20.888-32.486-68.377-32.486-89.265 0L98.585 387.54c-11.131 17.311-36.436 17.311-47.567 0l-2.397-3.727c-9.002-13.999-24.211-20.398-38.904-19.231v125.035c-.001 6.6 5.399 12 11.999 12" />
                                <path fill="#8280d8" d="M81.44 109.703c0 7.483-6.067 13.55-13.55 13.55s-13.55-6.067-13.55-13.55s6.067-13.55 13.55-13.55s13.55 6.067 13.55 13.55m277.423 203.974c-13.595 0-24.616 11.021-24.616 24.616s11.021 24.616 24.616 24.616s24.616-11.021 24.616-24.616s-11.021-24.616-24.616-24.616" />
                                <path fill="#c4a6ff" d="M465.377 57.533c0 7.483-6.067 13.55-13.55 13.55s-13.55-6.067-13.55-13.55s6.067-13.55 13.55-13.55s13.55 6.067 13.55 13.55M211.305 163.022c-7.483 0-13.55 6.067-13.55 13.55s6.067 13.55 13.55 13.55s13.55-6.067 13.55-13.55s-6.066-13.55-13.55-13.55M27.131 173.028c-7.483 0-13.55 6.067-13.55 13.55s6.067 13.55 13.55 13.55s13.55-6.067 13.55-13.55s-6.067-13.55-13.55-13.55m125.823 67.348a7.444 7.444 0 1 0 0 14.889a7.444 7.444 0 0 0 0-14.889m197.265-47.691a7.444 7.444 0 1 0 0 14.889a7.444 7.444 0 0 0 0-14.889M85.792 36.54a7.444 7.444 0 1 0 0 14.889a7.444 7.444 0 0 0 0-14.889m179.612 287.512c-7.865 0-14.24 6.376-14.24 14.24s6.376 14.24 14.24 14.24s14.24-6.376 14.24-14.24s-6.375-14.24-14.24-14.24" />
                                <path fill="#f7f9aa" d="m88.887 202.052l5.019 10.17a3.45 3.45 0 0 0 2.599 1.888l11.223 1.631c2.831.411 3.961 3.89 1.913 5.887l-8.121 7.916a3.45 3.45 0 0 0-.993 3.055l1.917 11.178c.484 2.82-2.476 4.97-5.008 3.638l-10.038-5.277a3.45 3.45 0 0 0-3.212 0l-10.038 5.277c-2.532 1.331-5.491-.819-5.008-3.638l1.917-11.178a3.45 3.45 0 0 0-.993-3.055l-8.121-7.916c-2.048-1.997-.918-5.476 1.913-5.887l11.223-1.631a3.45 3.45 0 0 0 2.599-1.888l5.019-10.17c1.266-2.565 4.924-2.565 6.19 0m349.059 0l-5.019 10.17a3.45 3.45 0 0 1-2.599 1.888l-11.223 1.631c-2.831.411-3.961 3.89-1.913 5.887l8.121 7.916a3.45 3.45 0 0 1 .993 3.055l-1.917 11.178c-.484 2.82 2.476 4.97 5.008 3.638l10.038-5.277a3.45 3.45 0 0 1 3.212 0l10.038 5.277c2.532 1.331 5.491-.819 5.008-3.638l-1.917-11.178a3.45 3.45 0 0 1 .993-3.055l8.121-7.916c2.048-1.997.918-5.476-1.913-5.887l-11.223-1.631a3.45 3.45 0 0 1-2.599-1.888l-5.019-10.17c-1.266-2.565-4.924-2.565-6.19 0M372.019 22.061L367 32.231a3.45 3.45 0 0 1-2.599 1.888l-11.223 1.631c-2.831.411-3.961 3.89-1.913 5.887l8.121 7.916a3.45 3.45 0 0 1 .993 3.055l-1.917 11.178c-.484 2.82 2.476 4.97 5.008 3.638l10.038-5.277a3.45 3.45 0 0 1 3.212 0l10.038 5.277c2.532 1.331 5.491-.819 5.008-3.638l-1.917-11.178a3.45 3.45 0 0 1 .993-3.055l8.121-7.916c2.048-1.997.918-5.476-1.913-5.887l-11.223-1.631a3.45 3.45 0 0 1-2.599-1.888l-5.019-10.17c-1.266-2.565-4.924-2.565-6.19 0M145.511 39.832c-9.776 0-17.701 7.925-17.701 17.701s7.925 17.701 17.701 17.701s17.701-7.925 17.701-17.701s-7.925-17.701-17.701-17.701m112.45 27.997a7.444 7.444 0 1 0 0 14.889a7.444 7.444 0 0 0 0-14.889m49.282 223.858a6.257 6.257 0 1 0 0 12.514a6.257 6.257 0 0 0 0-12.514" />
                            </svg>
                        </span>, and how nature works
                        <span className="inline-flex items-center mx-1 align-middle" title="Nature">
                            {/* Leaf */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="inline-block align-middle rotate-12 hover:scale-125 hover:-rotate-12 transition-all duration-300 cursor-pointer">
                                <path fill="#22c55e" d="M169.92 15.654c-10.512 16.697-22.392 34.058-41.688 50.473c.46.447.934.89 1.405 1.336l23.55-.406l-3.527 10.7a71 71 0 0 1-1.678 4.552a184 184 0 0 0 8.872 5.788l25.052 15.33l-45.99-.793c-1.954 2.474-4.06 4.9-6.305 7.275c8.8 11.517 22.045 22.713 38.675 32.766l-12.404-.365l-.015 5.678c8.53 6.358 17.792 12.448 27.162 18.48c18.11-11.568 31.79-24.5 39.51-37.616l-57.353.99l25.052-15.33c8.97-5.488 16.525-11.115 23.082-16.867c-5.098-5.475-9-10.962-11.257-16.69l-4.04-10.246l29.742-1.823C205.14 54.41 182.44 38.31 169.92 15.654m234.605 13.223c-6.537 12.962-13.88 29.016-23.638 44.63c10.927 18.367 24.428 35.997 46.773 52.382l20.42 14.97l-52.51-1.085c6.956 12.136 19.936 26.858 34.58 40.047c19.157 17.254 40.928 32.572 53.907 39.914l11.34 6.418c.005-4.163.005-7.382.015-13.972c-17.176-11.938-29.767-25.795-36.322-42.2l-4.115-10.298l43.605-2.58c-9.91-4.358-19.747-8.263-28.723-12.06c-8.498-3.594-16.23-7.107-22.724-11.23c-6.495-4.122-12.102-8.954-14.858-15.943l-3.93-9.962l36.077-3.178c-24.245-20.226-47.223-48.756-59.897-75.853M84.027 34.62c-12.52 22.656-35.22 38.757-57.843 53.234l29.738 1.822l-4.037 10.244c-4.78 12.125-16.815 24.123-33.182 36.873c-.295 11.21-.392 17.66-.385 17.732c.005.044.19 1.1.29 3.127c.038.742.04 3.177.066 4.358l13.828.797l-.004.55l-3.906 9.778c-1.18 2.955-2.498 6.07-4.16 9.232l11.525-7.05c37.376-22.87 50.42-48.163 67.395-74.833l-.233 6.366l4.474-1.875a72 72 0 0 1-3.305-8.25l-3.528-10.7l26.582.46C107.068 69.66 94.836 51.787 84.027 34.618zM263.06 61.036c-10.808 17.168-23.04 35.04-43.314 51.86l26.582-.458l-3.527 10.7c-6.657 20.188-22.772 37.89-44.874 52.91l17.916 11.573l18.273.688l-4.127 10.5c-2.305 5.863-5.355 11.4-9.01 16.65l8.737-6.19c17.913-12.69 36.773-27.495 51.8-41.534c10.026-9.365 17.978-18.52 23.083-25.914l-50.537-3.715l16.5-12.773c10.37-8.027 20.973-15.94 30.924-24.178c-15.49-11.246-29.53-24.024-38.423-40.12zm93.07.68c-12.76 26.805-36.227 46.04-59.107 63.506l31.39 2.306l-3.194 9.726c-4.503 13.7-16.983 27.412-32.783 42.172c-10.794 10.083-23.245 20.29-35.896 29.926l49.278 3.494l-3.26 9.78c-11.273 33.806-46.845 56.924-75.816 75.597c13.487 8.056 27.67 15.44 39.813 22.318c68.34 18.82 147.594 6.972 200.924-16c-13.19-7.554-23.844-14.547-32.748-23.006c-11.805-11.216-20.072-24.96-26.377-44.183l-3.017-9.208l51.97-6.61c-11.874-8.21-25.17-18.39-37.867-29.825c-20.11-18.113-38.394-38.003-43.915-58.067L372.68 123.3l27.867.577c-21.174-20.07-33.542-41.485-44.416-62.16zM108.78 121.84c-10.807 17.168-23.038 35.04-43.313 51.86l26.582-.456l-3.53 10.697c-8.24 24.998-30.974 46.186-61.625 63.185l52.94 1.99l-4.126 10.496c-11.05 28.11-29.76 52.974-61.038 71.585c73.885 22.566 156.574 31.568 231.582-3.572c-12.908-7.055-26.9-14.653-40.33-23.56c-18.07-11.983-34.525-25.736-41.71-43.713l-4.116-10.3l48.4-2.864c-11.828-7.625-23.415-15.48-33.557-23.383c-16.245-12.663-29.06-24.086-34.02-36.664l-4.04-10.247l29.74-1.823c-22.62-14.476-45.318-30.576-57.84-53.23zm-40.52 67.816l-49.016.844c-.168.218-.32.44-.492.656c-.276 21.495-.448 33.384-.502 42.38c23.342-13.057 40.863-28.338 50.01-43.88m105.674 12.403a190 190 0 0 0 10.845 9.124a360 360 0 0 0 11.14 8.308c5.44-5.177 10.084-10.545 13.692-16.092zm41.658 20.428a113 113 0 0 1-5.947 6.504a619 619 0 0 0 28.38 17.815l17.645 10.427c11.34-9.42 21.135-19.423 27.215-29.972zm279.803 10.334l-68.383 8.698c4.666 11.45 10.047 19.75 17.28 26.992l-.21-9.6c17.455-.996 34.705-3.352 51.4-7.363c-.065-7.174-.084-12.42-.087-18.728zm-243.96 27.852l-66.394 3.928c3.903 5.187 9.085 10.326 15.097 15.314a496 496 0 0 0 19.455 3.504c10.638-7.12 21.72-14.713 31.842-22.746m-219.744 2.64l-.29 35.618c10.746-10.37 18.692-21.97 24.83-34.694zm413.947 66.534c-14.262 4.577-29.517 8.396-45.38 11.222l5.55 132.18h42.978zm-181.83 7.002a257 257 0 0 1-8.018 4.046l-.927 114.274h52.682l-2.426-110.496c-13.946-1.552-27.788-4.123-41.313-7.824zm120.54 6.693c-15.085 1.992-30.582 3.05-46.18 2.994l-.386 139.742h52.56zm-353.38 9.146l-.924 114.04H74.31l1.975-104.398c-15.362-2.464-30.51-5.75-45.318-9.643zm174.72 6.27c-11.576 2.87-23.226 4.935-34.898 6.284l3.915 66.195h33.065l-2.084-72.48zm-113.443 5.628l-2.508 132.56l72.692-2.287l-7.584-128.21c-20.97 1.29-41.936.424-62.6-2.062z" />
                            </svg>
                        </span>. It reminds me how much there is to explore and how little we still know.
                    </span>

                    <span className={`${barlowFont.className} text-xl text-zinc-600 max-w-2xl text-center`}>
                        I'm available for freelance work on{' '}
                        <TooltipProvider>
                            <Tooltip delayDuration={120}>
                                <TooltipTrigger asChild>
                                    <a href="" className="inline-flex items-center font-medium underline mx-1 rounded rotate-12 hover:scale-125 hover:-rotate-0 transition-all duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="-2.5 -2 24 24"
                                            className="inline-block bg-green-500 p-0.5"
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                            <g fill="#fff">
                                                <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.63 5.63 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75z" />
                                                <circle cx="14.375" cy="1.875" r="1.875" />
                                            </g>
                                        </svg>
                                        {/* Optionally, add descriptive text here */}
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent className={` ${barlowFont.className} bg-green-500/80  backdrop-blur-2xl text-white text-md `}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                        <path fill="#fff" d="M23.004 15.588a.995.995 0 1 0 .002-1.99a.995.995 0 0 0-.002 1.99m-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858c.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364c-1.748 0-2.549-1.355-2.549-2.515c0-1.14.703-2.505 2.45-2.505c1.856 0 2.471 1.384 2.471 2.408c0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81c-.508 0-.81.225-.908.81zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837l-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" />
                                    </svg>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        . Together with a friend, we build full-stack web applications he handles the backend, and I take care of the frontend. If you need a custom web app, a sleek user interface, or a complete project from start to finish, feel free to reach out!
                    </span>

                    <div className="max-w-2xl border hover:scale-105 cursor-pointer transition-all duration-300 mt-8 border-[#e2404e] p-6 mx-auto my-6 font-sans">
                        <div className="flex items-center ">
                            <div className="w-14 h-14 bg-[#e2404e]  mr-4 shadow-md flex items-center justify-center"  >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <circle cx="12" cy="6" r="4" fill="#fff" />
                                    <path fill="#fff" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" />
                                </svg>
                            </div>
                            <div>
                                <div className="w-full flex justify-between">
                                    <span className={`${kodemonoFont.className} block font-semibold text-2xl`}>davidtimko1986</span>
                                    <span className="block text-[#e2404e] text-lg">★★★★★ 5</span>
                                </div>
                                <div className={`${barlowFont.className} text-base text-gray-800 leading-snug`}>
                                    They did a good job. Quick response and solutions. Creative ideas. I recommend to everyone
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default About