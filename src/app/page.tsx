"use client";
import NodeLocationCard from "@/components/my-components/about/BasedInCard";
import ExperienceCard from "@/components/my-components/about/ExperienceCard";
import IntroCard from "@/components/my-components/about/HelloCard";
import InterestsMatrix from "@/components/my-components/about/InterestCard";
import LearningCard from "@/components/my-components/about/LearningCard";
import ProjectStackCard from "@/components/my-components/about/ProjectStackCard";
import Navbar from "@/components/my-components/global/Navbar";
import ReactLenis from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="flex flex-col items-center bg-zinc-950 w-full h-screen max-h-screen p-2 gap-4">
          <div className="w-full bg-zinc-200 h-screen rounded-2xl p-2 flex flex-col gap-4">
            <Navbar />
            <div className="w-full grid grid-cols-4 gap-2 h-full">
              <IntroCard />
              <ExperienceCard />
              <ProjectStackCard />
              <InterestsMatrix />
              <LearningCard />
              <NodeLocationCard />
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
}
