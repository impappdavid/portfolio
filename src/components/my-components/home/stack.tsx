import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Inter } from "next/font/google"

const kodemonoFont = Inter({
    subsets: ["latin"],
    weight: "600",
})

function Stack() {
    return (
        <>
            <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-1 items-start">
                    <div className={`text-xs text-zinc-400 font-normal ${kodemonoFont.className}`}>TECH STACK</div>
                    <div className="text-3xl font-semibold">What I Use</div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <div className={`text-start text-sm text-zinc-400 ${kodemonoFont.className}`}>Frontend</div>

                        <div className="flex gap-2 w-full">
                            <TooltipProvider delayDuration={10}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="p-2 sm:p-3 bg-gradient-to-b from-sky-500 to-sky-600 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="text-white">
                                                <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
                                            </svg>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className={`font-medium ${kodemonoFont.className}`}>React</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="p-2 sm:p-3 bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="text-white">
                                                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" >
                                                    <path d="M2.5 12c0-4.478 0-6.717 1.391-8.109c1.391-1.39 3.63-1.39 8.109-1.39c4.478 0 6.718 0 8.109 1.39c1.391 1.392 1.391 3.63 1.391 8.11c0 4.478 0 6.717-1.391 8.108S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z" />
                                                    <path stroke-linecap="round" d="M18 12h-1.8a1.2 1.2 0 0 0-1.2 1.2v.6a1.2 1.2 0 0 0 1.2 1.2h.6a1.2 1.2 0 0 1 1.2 1.2v.6a1.2 1.2 0 0 1-1.2 1.2H15m-6.5-6h2m2 0h-2m0 0v6" />
                                                </g>
                                            </svg>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className={`font-medium ${kodemonoFont.className}`}>TypeScript</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="p-2 sm:p-3 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16" className="text-zinc-800">
                                                <path fill="currentColor" d="M8.5 7.5A1.5 1.5 0 0 1 10 6h1.5a.5.5 0 0 1 0 1H10a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5h.5A1.5 1.5 0 0 1 12 10v.5a1.5 1.5 0 0 1-1.5 1.5H9a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5H10A1.5 1.5 0 0 1 8.5 8zm-.5-1a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1A1.5 1.5 0 0 0 8 10.5zm-6-2A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3z" />
                                            </svg>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className={`font-medium ${kodemonoFont.className}`}>JavaScript</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="p-2 sm:p-3 bg-gradient-to-b from-sky-500 to-sky-600 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="text-white">
                                                <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12" />
                                            </svg>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className={`font-medium ${kodemonoFont.className}`}>TailwindCSS</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="p-2 sm:p-3 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32" >
                                                <path stroke="#dedede" stroke-linecap="round" stroke-width="4.48" d="m27.76 16.56l-11.2 11.2m8.96-23.52L4.24 25.52" />
                                            </svg>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className={`font-medium ${kodemonoFont.className}`}>shadcn/ui</p>
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="p-2 sm:p-3 bg-gradient-to-b from-orange-600 to-red-600 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="text-white">
                                                <path fill="currentColor" d="M6.93 13.688a.343.343 0 0 1 .468.132l.063.106q.72 1.277 1.5 2.426a36 36 0 0 0 2.074 2.742a.346.346 0 0 1-.039.484l-.074.066c-2.543 2.223-4.191 2.665-4.953 1.333c-.746-1.305-.477-3.672.808-7.11a.34.34 0 0 1 .153-.18M17.75 16.3a.34.34 0 0 1 .395.27l.02.1q.942 4.93-1.325 4.93c-1.48 0-3.36-1.402-5.649-4.203a.33.33 0 0 1-.074-.222c0-.188.156-.34.344-.34h.121a33 33 0 0 0 2.809-.098q1.606-.128 3.359-.437m.871-6.977a.353.353 0 0 1 .445-.21l.102.034q4.895 1.665 3.719 3.664q-1.148 1.957-6.684 2.848a.36.36 0 0 1-.238-.047a.343.343 0 0 1-.125-.476l.062-.106a34 34 0 0 0 1.367-2.523q.717-1.484 1.352-3.184M7.797 8.34a.36.36 0 0 1 .238.047a.343.343 0 0 1 .125.476l-.062.106a34 34 0 0 0-1.367 2.523q-.717 1.483-1.352 3.184a.353.353 0 0 1-.445.21l-.102-.034q-4.895-1.666-3.719-3.664Q2.261 9.23 7.797 8.34m5.281-3.984c2.543-2.223 4.192-2.664 4.953-1.332q1.12 1.954-.808 7.109a.34.34 0 0 1-.153.18a.343.343 0 0 1-.468-.133l-.063-.106a35 35 0 0 0-1.5-2.426a36 36 0 0 0-2.074-2.742a.346.346 0 0 1 .039-.484ZM7.285 2.274q2.22 0 5.649 4.203a.35.35 0 0 1 .078.218a.35.35 0 0 1-.348.344l-.117-.004a35 35 0 0 0-2.809.102a36 36 0 0 0-3.363.437a.343.343 0 0 1-.394-.273l-.02-.098q-.944-4.929 1.324-4.93m2.871 5.812h3.688a.64.64 0 0 1 .55.316l1.848 3.22a.64.64 0 0 1 0 .628l-1.847 3.223a.64.64 0 0 1-.551.316h-3.688a.63.63 0 0 1-.547-.316L7.758 12.25a.64.64 0 0 1 0-.629L9.61 8.402a.63.63 0 0 1 .546-.316m3.23.793a.64.64 0 0 1 .552.316l1.39 2.426a.64.64 0 0 1 0 .629l-1.39 2.43a.64.64 0 0 1-.551.316h-2.774a.63.63 0 0 1-.546-.316l-1.395-2.43a.64.64 0 0 1 0-.629l1.395-2.426a.63.63 0 0 1 .546-.316Zm-.491.867h-1.79a.62.62 0 0 0-.546.316l-.899 1.56a.64.64 0 0 0 0 .628l.899 1.563a.63.63 0 0 0 .547.316h1.789a.63.63 0 0 0 .547-.316l.898-1.563a.64.64 0 0 0 0-.629l-.898-1.558a.62.62 0 0 0-.547-.317m-.477.828c.227 0 .438.121.547.317l.422.73a.63.63 0 0 1 0 .629l-.422.734a.63.63 0 0 1-.547.317h-.836a.63.63 0 0 1-.547-.317l-.422-.734a.63.63 0 0 1 0-.629l.422-.73a.63.63 0 0 1 .547-.317zm-.418.817a.55.55 0 0 0-.473.273a.55.55 0 0 0 0 .547a.54.54 0 0 0 .473.27a.54.54 0 0 0 .473-.27a.55.55 0 0 0 0-.547a.55.55 0 0 0-.473-.273m-4.422.546h.98M18.982 7.75c.39-1.894.476-3.344.222-4.398c-.148-.63-.422-1.137-.84-1.508c-.441-.39-1-.582-1.625-.582c-1.035 0-2.12.472-3.281 1.367a15 15 0 0 0-1.473 1.316a1 1 0 0 0-.136-.144c-1.446-1.285-2.66-2.082-3.7-2.39c-.617-.184-1.195-.2-1.722-.024c-.559.187-1.004.574-1.317 1.117c-.515.894-.652 2.074-.46 3.527q.119.885.402 1.934a1 1 0 0 0-.215.047C3.008 8.62 1.71 9.269.926 10.015c-.465.442-.77.938-.883 1.481c-.113.578 0 1.156.312 1.7c.516.894 1.465 1.597 2.817 2.155q.813.334 1.844.61a1 1 0 0 0-.07.226c-.391 1.891-.477 3.344-.223 4.395c.148.629.425 1.14.84 1.508c.44.39 1 .582 1.625.582c1.035 0 2.12-.473 3.28-1.364q.715-.556 1.489-1.336a1.2 1.2 0 0 0 .195.227c1.446 1.285 2.66 2.082 3.7 2.39c.617.184 1.195.2 1.722.024c.559-.187 1.004-.574 1.317-1.117c.515-.894.652-2.074.46-3.527a15 15 0 0 0-.425-2.012a1.2 1.2 0 0 0 .238-.047c1.828-.61 3.125-1.258 3.91-2.004c.465-.441.77-.937.883-1.48c.113-.578 0-1.157-.312-1.7c-.516-.894-1.465-1.597-2.817-2.156a15 15 0 0 0-1.906-.625a1 1 0 0 0 .059-.195" />
                                            </svg>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className={`font-medium ${kodemonoFont.className}`}>React Query</p>
                                    </TooltipContent>
                                </Tooltip>

                            </TooltipProvider>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <div className={`text-start text-sm text-zinc-400 ${kodemonoFont.className}`}>Tools</div>
                        <div className="flex gap-2 w-full">
                            <TooltipProvider delayDuration={10}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="p-2 sm:p-3 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="text-white">
                                                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                            </svg>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className={`font-medium ${kodemonoFont.className}`}>GitHub</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>


                        </div>
                    </div>

                </div >
            </div >
        </>
    )
}
export default Stack