import { Layers2, Pen } from "lucide-react"
import Link from "next/link"

function Content() {
    return (
        <>
            <div className="flex flex-col items-start w-full py-24 gap-12 min-h-screen">
                <div className="flex flex-col gap-4 animate-[downblur_2s_ease-in-out]">
                    <div className="font-body text-5xl font-bold text-start">Experience</div>
                    <div className="text-zinc-400 font-body">
                        A summary of my professional work history, technologies I've used, and key achievements.
                    </div>

                </div>
                <div className="flex flex-col gap-4 animate-[downblur_2.5s_ease-in-out]">
                    <div className="font-body text-2xl font-bold text-start">Freelance</div>
                    <div className="text-zinc-400 font-body">
                        Frontend Developer, 2025 - Present
                    </div>

                    <ul className="text-zinc-400 font-body list-disc pl-6">
                        <li>Focus on crafting responsive, user-friendly interfaces using React, Tailwind CSS, and modern JavaScript/TypeScript.</li>
                        <li>Translate client requirements into clean, efficient, and scalable frontend code.</li>
                        <li>Work closely with backend systems (APIs, authentication, and databases) to ensure seamless user experiences.</li>
                        <li>Deliver custom frontend solutions for various projects, including dashboards, landing pages, and e-commerce features.</li>
                        <li>Actively learning and applying new frontend technologies to improve development workflows and code quality.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 animate-[downblur_3s_ease-in-out]">
                    <div className="font-body text-2xl font-bold text-start">Webváltó.kft</div>
                    <div className="text-zinc-400 font-body">
                        Intern - Frontend Developer, Jan 2023 - Apr 2023
                    </div>

                    <ul className="text-zinc-400 font-body list-disc pl-6">
                        <li>Selected for a project-based internship at Webvalto, where I worked in a 3-person team to develop a full-stack application as part of our final exam.</li>
                        <li>Took full responsibility for the frontend, building a responsive user interface using React, CSS, and JavaScript.</li>
                        <li>Collaborated closely with teammates and participated in regular meetings with our mentor a professional developer from Webvalto who guided us through real-world development practices.</li>
                        <li>Learned how to plan, build, and present a complete application from scratch while following agile-style workflows and version control with Git.</li>
                        <li>Gained valuable experience working in a team, problem-solving, and turning ideas into a functional UI.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6 w-full animate-[downblur_3.5s_ease-in-out]">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-56 w-full p-8 bg-zinc-800/30 border border-zinc-700/50 rounded-2xl flex flex-col gap-4">
                            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center"><Layers2 className="w-5 h-5" /></div>
                            <div className="flex flex-col ">
                                <div className="text-lg font-body font-semibold">Stack</div>
                                <div className="text-xs text-zinc-400 font-body">Dive into my skills</div>
                            </div>
                            <Link href="../stack" className="w-fit py-1.5 px-4 text-sm rounded-lg bg-zinc-800 text-white font-body hover:opacity-70 hover:bg-zinc-800 border flex items-center gap-1  border-zinc-700 transition-all duration-500">
                                View Stack
                            </Link>
                        </div>
                        <div className="h-56 w-full p-8 bg-zinc-800/30 border border-zinc-700/50 rounded-2xl flex flex-col gap-4">
                            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center"><Pen className="w-4 h-4" /></div>
                            <div className="flex flex-col ">
                                <div className="text-lg font-body font-semibold">Projects</div>
                                <div className="text-xs text-zinc-400 font-body">Explore my projects in web development.</div>
                            </div>
                            <Link href="../projects" className="w-fit py-1.5 px-4 text-sm rounded-lg bg-zinc-800 text-white font-body hover:opacity-70 hover:bg-zinc-800 border flex items-center gap-1  border-zinc-700 transition-all duration-500">
                                View Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content