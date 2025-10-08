import { Project } from "./project-data"
import { Inter } from 'next/font/google';
const kodemonoFont = Inter({ subsets: ['latin'], weight: '500' });

function Challenges({ project }: { project: Project }) {
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="text-2xl font-semibold">Challenges</div>

                {project.dificulties ? (
                    <>
                        {project.dificulties.map((item, index) => (
                            <>
                                <div className="grid sm:grid-cols-3 gap-2">
                                    <div key={index} className="bg-zinc-200/60 rounded-xl p-4 flex flex-col gap-4">
                                        <div className="flex flex-col items-start">
                                            <div className="text-xs text-zinc-600">Challenge</div>
                                            <div className={`text-start text-sm ${kodemonoFont.className}`}>{item.challenge}</div>
                                        </div>
                                    </div>
                                    <div key={index} className="bg-zinc-200/60 rounded-xl p-4 flex flex-col gap-4">
                                        <div className="flex flex-col items-start">
                                            <div className="text-xs text-zinc-600">Solution</div>
                                            <div className={`text-start text-sm ${kodemonoFont.className}`}>{item.solution}</div>
                                        </div>
                                    </div>
                                    <div key={index} className="bg-zinc-200/60 rounded-xl p-4 flex flex-col gap-4">
                                        <div className="flex flex-col items-start">
                                            <div className="text-xs text-zinc-600">Result</div>
                                            <div className={`text-start text-sm ${kodemonoFont.className}`}>{item.result}</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                    </>
                ) : (
                    <div className=""></div>
                )}

            </div>
        </>
    )
}
export default Challenges