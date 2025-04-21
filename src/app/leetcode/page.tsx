import Head from 'next/head';
import LeetcodeContent from "@/components/my-components/leetcode/content"

function LeetCode() {
    return (<>
        <Head>
            <title>Papp Dávid - Leetcode</title>
        </Head>
        <main className="flex flex-col items-center bg-zinc-900/70 min-h-screen">
            <div className="w-56"></div>
            <div className="xl:ml-56 lg:ml-50 md:ml-20 ml-0 px-2 md:px-0 w-full sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-fit flex flex-col items-center gap-12 transition-all duration-500" >
                <LeetcodeContent />

            </div>
        </main>
    </>)
}
export default LeetCode