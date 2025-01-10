"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import * as React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useState } from 'react';
import { Button } from "../ui/button";
import { Clipboard, Check } from 'lucide-react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface DataDisplayProps {
    data: string[];
  }

interface Tweet {
    tweetDate: string;
    taskName: string;
    taskType: string;
    tweetDescription: string;
    tweetImg: { url: string }[];
    codeString: string;
}

interface TweetListProps {
    data: {
        searchQuery: string;
        typeFilter: string | null;
    };
}

// Define the tweets array with unique code strings for each tweet
const tweets: Tweet[] = [
    /*
    Example data structure
    {
        tweetDate: "2024.12.21",
        taskName: "1.Two sum",
        taskType: "easy",
        tweetDescription:
            "it took an insane amount of effort to go from nothing to this in 2 weeks lmao i hope yall like it 🫶 What components do you want to see next?",
        tweetImg: [
            {
                url: "./twosum.png",
            },
        ],
        codeString: `
const add = (a, b) => {
    return a + b;
};
        
console.log(add(2, 3)); // Output: 5
        `,
    },
    */    
];

interface CodeSnippetCardProps {
    codeString: string;
}

const CodeSnippetCard = ({ codeString }: CodeSnippetCardProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset "Copied!" after 2 seconds
    };

    return (
        <div className="w-full text-white rounded-lg overflow-hidden relative">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs py-1.5 px-1.5 rounded"
            >
                {copied ? (
                    <Check className="w-3 h-3 text-white" />
                ) : (
                    <Clipboard className="w-3 h-3 text-white" />
                )}
            </button>

            <div className="rounded-lg overflow-auto dark:bg-zinc-900/70 bg-gray-800 border">
                <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    customStyle={{
                        backgroundColor: 'transparent',
                        fontSize: '14px',
                        borderRadius: '0.5rem',
                        padding: '0.5rem',
                    }}
                >
                    {codeString.trim()}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

const Insight = ({tweet}: {tweet: Tweet}) => {
    return(
        
        <div className={`grid h-full gap-2 ${tweet.tweetImg.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                        {tweet.tweetImg.map((img, index) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <img
                                        src={img.url}
                                        alt={tweet.taskName}
                                        className="bg-white/30 bg-no-repeat  bg-contain aspect-auto rounded-lg text-white flex items-center justify-center text-xl border hover:cursor-pointer hover:border-zinc-600 transition-all"
                                    />

                                </DialogTrigger>
                                <DialogContent className="w-full h-full aspect-video">
                                    <img
                                        src={img.url}
                                        alt={tweet.taskName}
                                        className="max-w-[1200px] h-fit aspect-auto"
                                    />
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
    )
}

function TweetList({ data }: TweetListProps) {
    // Filter tweets based on search query and type from props
    const filteredTweets = tweets.filter((tweet) => {
        const matchesSearch = tweet.taskName.toLowerCase().includes(data.searchQuery.toLowerCase());
        const matchesType = !data.typeFilter || tweet.taskType === data.typeFilter;
        return matchesSearch && matchesType;
    });

    return (
        <div className="flex flex-col ">
            {filteredTweets.length > 0 ? (
                filteredTweets.map((tweet, index) => (
                    <div
                        key={index}
                        className="w-full h-fit backdrop-blur-sm border-b flex flex-col gap-2 p-3"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="./me.png" />
                                    <AvatarFallback>PD</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col justify-center">
                                    <div className="flex gap-1 items-center">
                                        <div className="text-sm font-semibold">Papp Dávid</div>
                                        <div className="text-xs text-zinc-600 dark:text-zinc-400">-</div>
                                        <div className="text-xs text-zinc-600 dark:text-zinc-400">{tweet.tweetDate}</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-1 rounded-sm border">
                                            {tweet.taskName}
                                        </div>
                                        <div
                                            className={`text-xs px-1 rounded-sm border bg-zinc-100 dark:bg-zinc-900 ${tweet.taskType === "easy"
                                                ? "text-cyan-500"
                                                : tweet.taskType === "medium"
                                                    ? "text-orange-500"
                                                    : "text-red-500"
                                                }`}
                                        >
                                            {tweet.taskType}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-orange-500 hover:cursor-pointer hover:text-orange-400 transition-all">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 13h7.5M9.424 7.268l4.999-4.999m2.21 14.375l-2.402 2.415a3.19 3.19 0 0 1-4.524 0l-3.77-3.787a3.223 3.223 0 0 1 0-4.544l3.77-3.787a3.19 3.19 0 0 1 4.524 0l2.302 2.313"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-xs px-1" id="tweetText">
                            {tweet.tweetDescription}
                        </div>
                        <Tabs defaultValue="code" className="w-full">
                            <TabsList className="flex w-full ">
                                <TabsTrigger value="code">Code</TabsTrigger>
                                <TabsTrigger value="insight">Insight</TabsTrigger>
                            </TabsList>
                            <TabsContent value="code">
                                <CodeSnippetCard codeString={tweet.codeString} />
                            </TabsContent>
                            <TabsContent value="insight">
                                <Insight tweet={tweet}/>
                            </TabsContent>
                        </Tabs>

                    </div>
                ))
            ) : (
                <div className="text-center text-zinc-500 text-xs p-4">
                    No tasks found.
                </div>
            )}
        </div>
    );
}

// Create the main TweetCard component that will be exported
const TweetCard = ({ data }: TweetListProps) => {
    return <TweetList data={data} />;
};

export default TweetCard;
