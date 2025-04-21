import Head from 'next/head';
import LeetcodeContent from "@/components/my-components/leetcode/content"

function LeetCode() {
    return (<>
        <Head>
            <title>Papp Dávid - Leetcode</title>
        </Head>
        <main className="flex flex-col items-center bg-zinc-900/70 min-h-screen">
            <div className="w-56"></div>
            <div className="ml-56 w-full max-w-3xl h-fit flex flex-col items-center justify-center gap-12" >
                <LeetcodeContent />

            </div>
        </main>
    </>)
}
export default LeetCode