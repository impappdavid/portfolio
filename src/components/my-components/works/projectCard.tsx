import { Inter } from "next/font/google"
import Link from "next/link";

const kodemonoFont = Inter({
    subsets: ["latin"],
    weight: "500",
})

function ProjectCard() {
    const projects = [
        {
            title: "Weecom Job Task",
            description: "This was a task to apply for a job.",
            isTestimonal: false,
            testimonial: "Task completed successfully.",
            imageUrl: "/projects/weecomTask.png",
            projectUrl: "/works/weecomtask"
        },
        {
            title: "MatchApply",
            description: "This is a ui for a job application platform where you can ask ai to apply jobs.",
            isTestimonal: false,
            testimonial: "Apply via AI. Fast and efficient.",
            imageUrl: "/projects/matchapply.png",
            projectUrl: "/works/matchapply"
        },
        {
            title: "GamingWitMe",
            description: "A booking platform for gamers and creators with profiles, services, payments, and admin tools.",
            isTestimonal: true,
            testimonial: "They did a good job. Quick response and solutions. Creative ideas. I recommend to everyone",
            imageUrl: "/projects/gamingwithme.png",
            projectUrl: "/works/gamingwithme"
        },
        {
            title: "SkillStack",
            description: "This is a social media platform for developers they can share code snipets or problems.",
            isTestimonal: false,
            testimonial: "Social platform for developers to share and learn.",
            imageUrl: "/projects/skillstack.png",
            projectUrl: "/works/skillstack"
        },
        {
            title: "ProjectHub",
            description: "This is an app where you can create jobs and users can apply for it.",
            isTestimonal: false,
            testimonial: "App for create and apply for jobs.",
            imageUrl: "/projects/projecthubCover.png",
            projectUrl: "/works/projecthub"
        },
        {
            title: "Azura",
            description: "This is an NFT marketplace where you can create your own NFT's via AI for tokens.",
            isTestimonal: false,
            testimonial: "AI & NFT",
            imageUrl: "/projects/azuraCover.png",
            projectUrl: "/works/azura"
        },
        {
            title: "CodeArc",
            description: "This is a platform for developer teams here you can make Kanban's, Api routes and you can plan your database with clicks.",
            isTestimonal: false,
            testimonial: "Dev platform for teams to plan, build, and manage projects.",
            imageUrl: "/projects/codearc.png",
            projectUrl: "/works/codearc"
        },
        {
            title: "CivemaView",
            description: "A cinema booking app where you can book your tickets, see trailers and reviews. The employee side where you can manage movies, screenings and your work schedule from your phone.",
            isTestimonal: false,
            testimonial: "School exam project",
            imageUrl: "/projects/cinemaViewCover.png",
            projectUrl: "/works/cinemaview"
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            {projects.map((project, index) => {
                const isReversed = index % 2 === 1;

                return (
                    <div
                        key={index}
                        className={`w-full bg-zinc-200/60 rounded-3xl grid sm:grid-cols-3`}
                    >
                        {isReversed ? (
                            <>
                                <div className="col-span-2 overflow-hidden rounded-t-3xl sm:rounded-t-none sm:rounded-l-3xl">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl"
                                    />
                                </div>
                                <div className="flex flex-col gap-4 sm:gap-0 justify-between p-4 leading-tight">
                                    {project.isTestimonal ? (
                                        <div className="p-2 bg-white rounded-lg text-sm font-semibold text-start">
                                            "{project.testimonial}"
                                        </div>
                                    ) : (
                                        <div className="p-2 bg-white border border-zinc-300 w-fit rounded-lg text-sm font-semibold text-start">
                                            {project.testimonial}
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-0.5 text-start">
                                        <div className="text-xl font-semibold">{project.title}</div>
                                        <div className={`text-sm text-zinc-400 leading-tight ${kodemonoFont.className}`}>
                                            {project.description}
                                        </div>
                                        <Link
                                            href={project.projectUrl}
                                            className={`bg-blue-600 w-fit mt-3 text-white px-5 py-3 text-sm rounded-full hover:bg-blue-700 transition-all duration-200 ${kodemonoFont.className}`}
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col gap-4 sm:gap-0 justify-between p-4 leading-tight">
                                    {project.isTestimonal ? (
                                        <div className="p-2 bg-white rounded-lg text-sm font-semibold text-start">
                                            "{project.testimonial}"
                                        </div>
                                    ) : (
                                        <div className="p-2 bg-white border border-zinc-300 w-fit rounded-lg text-sm font-semibold text-start">
                                            {project.testimonial}
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-0.5 text-start">
                                        <div className="text-xl font-semibold">{project.title}</div>
                                        <div className={`text-sm text-zinc-400 leading-tight ${kodemonoFont.className}`}>
                                            {project.description}
                                        </div>
                                        <a
                                            href={project.projectUrl}
                                            className={`bg-blue-600 w-fit mt-3 text-white px-5 py-3 text-sm rounded-full hover:bg-blue-700 transition-all duration-200 ${kodemonoFont.className}`}
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="col-span-2 overflow-hidden rounded-b-3xl sm:rounded-b-none sm:rounded-r-3xl">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="rounded-b-3xl sm:rounded-bl-none sm:rounded-r-3xl"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectCard
