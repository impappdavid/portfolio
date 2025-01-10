import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Education from "@/components/my-components/education";
import Contact from "@/components/my-components/contact";
import Introduction from "@/components/my-components/introduction";
import AboutMe from "@/components/my-components/aboutme";
import Stack from "@/components/my-components/stack";
import Projects from "@/components/my-components/projects";
import LeetcodeCard from "@/components/my-components/leetcodeCard";



export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center mt-16 pb-32" id="introduction">
        <GridPattern
          width={25}
          height={25}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] opacity-20",
          )}
        />
        <div className="w-full max-w-2xl h-fit  flex flex-col gap-12" >
          <Introduction />

          <AboutMe />

          <Stack />

          <Projects />

          <Education />

          <LeetcodeCard />

          <Contact />
        </div>
      </div>
    </>
  );
}
