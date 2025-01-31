"use client"
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import ProjectsOnThisPage from "@/components/my-components/projectsOnThisPage";
import ProjectsSidebar from "@/components/my-components/projectsSidebar";
import JourneyContent from "@/components/my-components/jorneyContent";
import { useSearchParams } from 'next/navigation';

function Projects() {

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
                <div className="w-full max-w-48 h-fit flex flex-col gap-12 sticky top-14 hidden xl:flex animate-[upblur_3s_ease-in-out]" >
                    <ProjectsSidebar />
                </div>
                <div className="w-full max-w-xl h-fit flex flex-col gap-4 border-x backdrop-blur-sm animate-[upblur_2s_ease-in-out]" >
                    <JourneyContent />
                </div>
                <div className="w-full max-w-48 h-fit flex flex-col gap-12 sticky top-14 hidden xl:flex animate-[upblur_3s_ease-in-out]" >
                    <ProjectsOnThisPage />
                </div>
            </div>
        </div>
    );
}

export default function LeetCode() {
    return (
        <Projects />
    );
}
