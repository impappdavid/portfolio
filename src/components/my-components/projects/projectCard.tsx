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
      title: "Revalo",
      description: "Social Media App",
      isTestimonal: false,
      testimonial: "Social Media App",
      imageUrl: "/projects/revalo/cover1.png",
      projectUrl: "/projects/revalo"
    },
    {
      title: "Weecom Job Task",
      description: "React Query Task",
      isTestimonal: false,
      testimonial: "React Query Task",
      imageUrl: "/projects/weecom/cover1.png",
      projectUrl: "/projects/weecomtask"
    },
    {
      title: "MatchApply",
      description: "AI job application",
      isTestimonal: false,
      testimonial: "Apply via AI. Fast and efficient.",
      imageUrl: "/projects/matchapply/cover1.png",
      projectUrl: "/projects/matchapply"
    },
    {
      title: "GamingWitMe",
      description: "Booking Platform",
      isTestimonal: true,
      testimonial: "They did a good job. Quick response and solutions. Creative ideas. I recommend to everyone",
      imageUrl: "/projects/gamingwithme/cover1.png",
      projectUrl: "/projects/gamingwithme"
    },
    {
      title: "SkillStack",
      description: "Social Media for Developer's",
      isTestimonal: false,
      testimonial: "Social platform for developers to share and learn.",
      imageUrl: "/projects/skillstack/cover1.png",
      projectUrl: "/projects/skillstack"
    },
    {
      title: "ProjectHub",
      description: "Social Media for Job's",
      isTestimonal: false,
      testimonial: "App for create and apply for jobs.",
      imageUrl: "/projects/projecthub/cover1.png",
      projectUrl: "/projects/projecthub"
    },
    {
      title: "Azura",
      description: "NFT Marketplace and Minting",
      isTestimonal: false,
      testimonial: "AI & NFT",
      imageUrl: "/projects/azura/cover1.png",
      projectUrl: "/projects/azura"
    },
    {
      title: "CodeArc",
      description: "Developer Team Collaboration",
      isTestimonal: false,
      testimonial: "Dev platform for teams to plan, build, and manage projects.",
      imageUrl: "/projects/codearc/cover1.png",
      projectUrl: "/projects/codearc"
    },
    {
      title: "CivemaView",
      description: "Exam Project",
      isTestimonal: false,
      testimonial: "School exam project",
      imageUrl: "/projects/cinemaview/cover1.png",
      projectUrl: "/projects/cinemaview"
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full bg-zinc-200/60 rounded-3xl"
        >


          <div className=" rounded-3xl sm:rounded-b-none  p-2 relative">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              className="w-full h-auto rounded-b-3xl sm:rounded-3xl "
            />

            <div className="absolute top-8 left-8 flex flex-col items-start">
              <div className="text-2xl sm:text-3xl font-semibold">{project.title}</div>
              <div className={`text-sm text-start text-zinc-500 leading-tight max-w-md ${kodemonoFont.className}`}>
                {project.description}
              </div>
            </div>

            <div className="absolute top-8 right-8 flex flex-col items-start">
              <Link
                href={project.projectUrl}
                className={`bg-blue-600 w-fit mt-1 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 ${kodemonoFont.className}`}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
