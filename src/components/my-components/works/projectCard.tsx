import { Inter } from "next/font/google"
import Link from "next/link"

const kodemonoFont = Inter({
  subsets: ["latin"],
  weight: "600",
})

type Project = {
  title: string
  description: string
  isTestimonal: boolean
  testimonial: string
  imageUrl: string
  projectUrl: string
}

function ProjectCard() {
  const projects: Project[] = [
    {
      title: "Weecom Job Task",
      description: "This was a task to apply for a job.",
      isTestimonal: false,
      testimonial: "Task completed successfully.",
      imageUrl: "/projects/weecom/cover1.png",
      projectUrl: "/works/weecomtask"
    },
    {
      title: "MatchApply",
      description: "This is a ui for a job application platform where you can ask ai to apply jobs.",
      isTestimonal: false,
      testimonial: "Apply via AI. Fast and efficient.",
      imageUrl: "/projects/matchapply/cover1.png",
      projectUrl: "/works/matchapply"
    },
    {
      title: "GamingWitMe",
      description: "A booking platform for gamers and creators with profiles, services, payments, and admin tools.",
      isTestimonal: true,
      testimonial: "They did a good job. Quick response and solutions. Creative ideas. I recommend to everyone",
      imageUrl: "/projects/gamingwithme/cover1.png",
      projectUrl: "/works/gamingwithme"
    },
    {
      title: "SkillStack",
      description: "This is a social media platform for developers they can share code snipets or problems.",
      isTestimonal: false,
      testimonial: "Social platform for developers to share and learn.",
      imageUrl: "/projects/skillstack/cover1.png",
      projectUrl: "/works/skillstack"
    },
    {
      title: "ProjectHub",
      description: "This is an app where you can create jobs and users can apply for it.",
      isTestimonal: false,
      testimonial: "App for create and apply for jobs.",
      imageUrl: "/projects/projecthub/cover1.png",
      projectUrl: "/works/projecthub"
    },
    {
      title: "Azura",
      description: "This is an NFT marketplace where you can create your own NFT's via AI for tokens.",
      isTestimonal: false,
      testimonial: "AI & NFT",
      imageUrl: "/projects/azura/cover1.png",
      projectUrl: "/works/azura"
    },
    {
      title: "CodeArc",
      description: "This is a platform for developer teams here you can make Kanban's, Api routes and you can plan your database with clicks.",
      isTestimonal: false,
      testimonial: "Dev platform for teams to plan, build, and manage projects.",
      imageUrl: "/projects/codearc/cover1.png",
      projectUrl: "/works/codearc"
    },
    {
      title: "CivemaView",
      description: "A cinema booking app where you can book your tickets, see trailers and reviews. The employee side where you can manage movies, screenings and your work schedule from your phone.",
      isTestimonal: false,
      testimonial: "School exam project",
      imageUrl: "/projects/cinemaview/cover1.png",
      projectUrl: "/works/cinemaview"
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full bg-zinc-200/60 rounded-3xl"
        >
          <div className="flex gap-4 sm:gap-0 justify-between p-6 sm:p-8 leading-tight">
            <div className="flex gap-2 text-start items-start justify-between flex-col sm:flex-row sm:items-start w-full">
              <div className="flex flex-col gap-2">
                <div className="text-2xl sm:text-3xl font-semibold">{project.title}</div>
                <div className={`text-sm text-zinc-500 leading-tight max-w-md ${kodemonoFont.className}`}>
                  {project.description}
                </div>
                <Link
                  href={project.projectUrl}
                  className={`bg-blue-600 w-fit mt-1 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 ${kodemonoFont.className}`}
                >
                  Read More
                </Link>
              </div>

              {project.isTestimonal ? (
                <div className="p-3 bg-blue-500/20 rounded-3xl text-sm font-semibold text-start max-w-xs">
                  "{project.testimonial}"
                </div>
              ) : (
                <div className="p-2 bg-white rounded-lg text-sm text-start max-w-xs">
                  {project.testimonial}
                </div>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-b-3xl sm:rounded-b-none sm:rounded-r-3xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto rounded-b-3xl sm:rounded-bl-none sm:rounded-br-3xl sm:rounded-r-3xl"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
