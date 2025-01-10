"use client"
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Education from "@/components/my-components/education";
import Contact from "@/components/my-components/contact";
import Introduction from "@/components/my-components/introduction";
import AboutMe from "@/components/my-components/aboutme";
import Stack from "@/components/my-components/stack";
import Projects from "@/components/my-components/projects";
import TweetCard from "@/components/my-components/tweetCard";
import LeetCodeStats from "@/components/my-components/leetcodeStats";
import LeetCodeSideBar from "@/components/my-components/leetCodeSideBar";
import { useSearchParams } from 'next/navigation';

export default function LeetCode() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const typeFilter = searchParams.get('type') || null;

    return (
        <>
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
                <div className="flex w-full justify-center">
                    <div className="w-full max-w-64 h-fit flex flex-col gap-12 sticky top-14" >
                        <LeetCodeSideBar />
                    </div>
                    <div className="w-full max-w-xl h-fit flex flex-col gap-4 border-x backdrop-blur-sm animate-[upblur_2s_ease-in-out]" >
                        <TweetCard 
                            data={{
                                searchQuery,
                                typeFilter
                            }}
                        />
                    </div>
                    <div className="w-full max-w-64 h-fit flex flex-col gap-12 sticky top-14" >
                        <LeetCodeStats />
                    </div>
                </div>
            </div>
        </>
    );
}
