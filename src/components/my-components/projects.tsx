import Link from "next/link";


export default function Projects() {
    let projects = [
        {
            name: "Cinema View",
            description: "This is an app that we made for the school exam",
            stack: [
                {
                    path: '<path fill="#ff3e00" d="M110.43 16.936C98.553-.076 75.09-5.118 58.13 5.696l-29.792 19a34.2 34.2 0 0 0-15.48 22.897a25.478 30.64 0 0 0-.572 6.396a36.15 36.15 0 0 0 4.163 16.73A34.4 34.4 0 0 0 11.34 83.5a25.348 30.483 0 0 0 .345 14.412a36.5 36.5 0 0 0 5.9 13.152c11.878 17.01 35.394 22.053 52.3 11.24l29.762-19.001a34.13 34.13 0 0 0 15.438-22.918a35.5 35.5 0 0 0 .572-6.386a36.2 36.2 0 0 0-4.112-16.71a34.4 34.4 0 0 0 5.112-12.77c.369-2.11.557-4.245.562-6.386a36.4 36.4 0 0 0-6.787-21.178z"/><path fill="#fff" d="M55.219 112.662a28.463 34.23 0 0 1-5.954.76a23.64 23.64 0 0 1-19.435-10.187a21.9 21.9 0 0 1-4.08-12.74a15.658 18.83 0 0 1 .333-3.833a15.425 18.55 0 0 1 .72-2.782l.561-1.708l1.52 1.156a38.7 38.7 0 0 0 11.658 5.834l1.104.333l-.104 1.104v.573a6.63 6.63 0 0 0 1.228 3.854a7.1 7.1 0 0 0 2.538 2.288a8.262 9.936 0 0 0 3.312.837a8.251 9.923 0 0 0 1.79-.229a7.272 8.745 0 0 0 1.833-.802l29.76-19.094a6.26 6.26 0 0 0 2.904-5.302a6.62 6.62 0 0 0-1.26-3.844a7.14 7.14 0 0 0-2.553-2.252a8.313 9.997 0 0 0-3.307-.81a8.246 9.917 0 0 0-1.79.23a6.938 8.344 0 0 0-1.822.801l-11.346 7.25a24.376 29.314 0 0 1-6.048 2.656a23.64 23.64 0 0 1-25.39-9.416a21.94 21.94 0 0 1-4.08-12.74c.002-1.285.114-2.567.333-3.833a20.65 20.65 0 0 1 9.286-13.781l29.792-18.99a21.9 21.9 0 0 1 6.048-2.667a24 24 0 0 1 5.954-.75A23.68 23.68 0 0 1 98.22 24.745a21.94 21.94 0 0 1 4.029 12.75a15.748 18.939 0 0 1-.334 3.844a15.407 18.529 0 0 1-.718 2.781l-.562 1.708l-1.52-1.114a38.4 38.4 0 0 0-11.658-5.834l-1.104-.343l.104-1.105v-.572a6.7 6.7 0 0 0-1.228-3.865a7.1 7.1 0 0 0-2.55-2.25a8.309 9.992 0 0 0-3.3-.813a8.221 9.887 0 0 0-1.77.271a6.819 8.2 0 0 0-1.831.802l-29.793 18.99a5.88 7.071 0 0 0-1.836 1.79a4.75 5.713 0 0 0-.963 2.377a5.037 6.057 0 0 0-.136 1.104a6.62 6.62 0 0 0 1.228 3.844a7.1 7.1 0 0 0 2.549 2.25a8.299 9.98 0 0 0 3.301.812a8.247 9.918 0 0 0 1.79-.23a6.943 8.35 0 0 0 1.833-.801l11.367-7.292a24.218 29.125 0 0 1 6.048-2.656a28.526 34.305 0 0 1 5.954-.76A23.66 23.66 0 0 1 96.566 60.61a21.94 21.94 0 0 1 3.737 16.614a20.6 20.6 0 0 1-9.286 13.781l-29.74 18.99a24.308 29.233 0 0 1-6.057 2.667z"/>',
                },
                {
                    path: '<path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/><path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"/>',
                },
                {
                    path: '<path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"/>',
                },
                
                ],
            github: "",
            src: "/projects/CinemaView/mockup1.png",
            journey: "/projects/frontend/cinema-view",
            live: "",
        },
        
    ]
    return (
        <section className="w-full flex flex-col gap-4 animate-[downblur_3s_ease-in-out]" id="aboutme">
            <div className=" flex flex-col gap-4 px-4 sm:px-0">
                <h3 className="text-3xl font-medium font-regularFont ">Projects</h3>
                <div className="grid sm:grid-cols-2 gap-4">

                    {projects.map((project, index) => (
                        <Link href={project.journey} className="block">
                            <div className="w-full bg-zinc-100 dark:bg-zinc-900  rounded-xl hover:cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-all relative group">
                                <img src={project.src} alt={project.name} className="w-full aspect-auto sm:h-72 rounded-xl" />
                                
                                {/* Stack icons in top left */}
                                <div className="absolute top-3 left-3 flex gap-2 bg-black/50 p-2 rounded-lg">
                                    {project.stack.map((stack, index) => (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 128 128" 
                                            dangerouslySetInnerHTML={{ __html: stack.path }}
                                        />
                                    ))}
                                </div>

                                {/* Arrow animation in top right on hover */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </div>

                                {/* Project info in bottom left */}
                                <div className="absolute bottom-0 bg-zinc-900/30 backdrop-blur-sm left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                                        {project.live.length > 0 && (
                                            <div className="text-zinc-100 flex gap-1 items-center text-xs bg-emerald-500 px-1 rounded-sm">
                                                <div className="w-1 h-1 bg-zinc-100 rounded-full"></div>
                                                Live
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-zinc-200">{project.description}</p>
                                    
                                    
                                </div>
                            </div>
                        </Link>
                ))}

                </div>
            </div>
        </section>
    )
};