import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Education from "@/components/my-components/education";
import Contact from "@/components/my-components/contact";
import Introduction from "@/components/my-components/introduction";
import AboutMe from "@/components/my-components/aboutme";
import Stack from "@/components/my-components/stack";
import Projects from "@/components/my-components/projects";
import LeetcodeCard from "@/components/my-components/leetcodeCard";
import Hero from "@/components/my-components/explore/hero";



export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-zinc-900/70">
        <div className="w-56"></div>
        <div className="ml-56 w-full max-w-4xl h-fit flex flex-col items-center gap-12" >

          <Hero />

        </div>
      </div>
    </>
  );
}
