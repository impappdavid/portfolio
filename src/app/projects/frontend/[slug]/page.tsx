'use client';
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import ProjectsOnThisPage from "@/components/my-components/projectsOnThisPage";
import ProjectsSidebar from "@/components/my-components/projectsSidebar";
import JourneyContent from "@/components/my-components/jorneyContent";
import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router' in Next.js App Router
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Define a type for the valid slugs
type ProjectSlug = 'cinemaview' | 'azura';

interface Params {
    slug: ProjectSlug; // Use the defined type for slug
}

interface ProjectsProps {
    params: Params; // Define the structure of params
}

function Projects({ params }: ProjectsProps) {
    console.log("Slug on server:", params.slug);

    return (
        <div className="w-full flex justify-center mt-12" id="introduction">
            <GridPattern
                width={25}
                height={25}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] opacity-20",
                )}
            />
            <div className="flex w-full justify-center gap-3">
                <div className="w-full max-w-48 h-fit  flex-col gap-12 sticky top-14 hidden xl:flex animate-[upblur_3s_ease-in-out]" >
                    <ProjectsSidebar slug={params.slug}/>
                </div>
                <div className="w-full max-w-xl h-fit flex flex-col gap-4 border-x backdrop-blur-sm animate-[upblur_2s_ease-in-out]" >
                    <JourneyContent slug={params.slug} />
                </div>
                <div className="w-full max-w-48 h-fit  flex-col gap-12 sticky top-14 hidden xl:flex animate-[upblur_3s_ease-in-out]" >
                    <ProjectsOnThisPage />
                </div>
            </div>
        </div>
    );
}

export default Projects;
