import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function Dock() {
    return (
        <>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50 bg-zinc-100 border border-zinc-300 rounded-2xl p-2 flex gap-0 hover:px-4 hover:gap-2 transition-all duration-300 ">
                <TooltipProvider delayDuration={10}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex justify-center items-center w-12 h-12  rounded-xl hover:scale-110 bg-black/5 p-2 transition-transform duration-200 grpoup cursor-pointer text-zinc-400 hover:text-blue-600 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9">
                                    <path fill="currentColor" fill-rule="evenodd" d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="font-medium">Home</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex justify-center items-center w-12 h-12  rounded-xl hover:scale-110 bg-black/5 p-2 transition-transform duration-200 grpoup cursor-pointer text-zinc-400 hover:text-orange-600 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9">
                                    <path fill="currentColor" d="M22 9.885v7.7a3.85 3.85 0 0 1-2.373 3.542a3.8 3.8 0 0 1-1.467.288H5.83A3.82 3.82 0 0 1 2 17.585V6.425a3.82 3.82 0 0 1 3.83-3.84h3.08a3.87 3.87 0 0 1 3.2 1.71l.87 1.33a1 1 0 0 0 .36.32a.94.94 0 0 0 .47.12h4.35a3.8 3.8 0 0 1 2.71 1.11A3.85 3.85 0 0 1 22 9.885" />
                                </svg>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Work</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex justify-center items-center w-12 h-12  rounded-xl hover:scale-110 bg-black/5 p-2 transition-transform duration-200 grpoup cursor-pointer text-zinc-400 hover:text-violet-600 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-9 h-9">
                                    <path fill="currentColor" fill-rule="evenodd" d="M16.488 5.595q-.012-.684-.031-1.24c-.048-1.43-.933-2.74-2.512-2.83q-.42-.024-.945-.025c-.525-.001-.664.01-.944.025c-1.58.09-2.465 1.4-2.513 2.83c-.015.451-.028.969-.036 1.544q-.729.046-1.362.093c-3.277.24-5.853 2.735-6.135 6.032C1.754 15.01 1.5 19.591 1.5 26s.254 10.991.51 13.976c.282 3.297 2.858 5.791 6.135 6.032c3.267.24 8.455.492 15.855.492s12.588-.252 15.855-.492c3.277-.24 5.853-2.735 6.135-6.032c.256-2.985.51-7.567.51-13.976s-.254-10.991-.51-13.976c-.282-3.297-2.858-5.791-6.135-6.032a135 135 0 0 0-1.362-.093a77 77 0 0 0-.036-1.544c-.048-1.43-.933-2.74-2.512-2.83q-.42-.024-.945-.025c-.525-.001-.664.01-.944.025c-1.58.09-2.465 1.4-2.513 2.83q-.018.556-.031 1.24a264 264 0 0 0-4.025-.076a76 76 0 0 0-.03-1.164c-.048-1.43-.933-2.74-2.513-2.83Q24.525 1.501 24 1.5c-.525-.001-.664.01-.944.025c-1.58.09-2.465 1.4-2.513 2.83q-.018.527-.03 1.164q-2.161.026-4.025.076M12.75 24A2.25 2.25 0 0 1 15 21.75h18a2.25 2.25 0 0 1 0 4.5H15A2.25 2.25 0 0 1 12.75 24M15 32.75a2.25 2.25 0 0 0 0 4.5h9a2.25 2.25 0 0 0 0-4.5z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>About</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </>
    )
}
export default Dock