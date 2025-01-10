"use client"
import { Suspense } from 'react';
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import TweetCard from "@/components/my-components/tweetCard";
import LeetCodeStats from "@/components/my-components/leetcodeStats";
import LeetCodeSideBar from "@/components/my-components/leetCodeSideBar";
import { useSearchParams } from 'next/navigation';

function LeetCodeContent() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const typeFilter = searchParams.get('type') || null;

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
            <div className="flex w-full justify-center">
                <div className="w-full max-w-64 h-fit flex flex-col gap-12 sticky top-14 hidden xl:flex animate-[upblur_3s_ease-in-out]" >
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
                <div className="w-full max-w-64 h-fit flex flex-col gap-12 sticky top-14 hidden xl:flex animate-[upblur_3s_ease-in-out]" >
                    <LeetCodeStats />
                </div>
            </div>
        </div>
    );
}

export default function LeetCode() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LeetCodeContent />
        </Suspense>
    );
}
