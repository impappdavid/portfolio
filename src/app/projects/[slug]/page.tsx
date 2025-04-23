import SpecificContent from "@/components/my-components/specificproject/content"
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

function SpecificProject({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }
  
  return (<>
    <div className="flex flex-col items-center bg-zinc-900/70 min-h-screen">
      <div className="w-56"></div>
      <div className="xl:ml-56 lg:ml-50 md:ml-20 ml-0 px-2 md:px-0 w-full sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-fit flex flex-col items-center gap-12 transition-all duration-500" >
        <SpecificContent project={project} />
      </div>
    </div>
  </>)
}

export default SpecificProject