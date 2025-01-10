'use client';

import { FaXTwitter } from "react-icons/fa6";

export default function LeetcodeCard() {
    return (
        <section className="w-full flex flex-col gap-4 animate-[downblur_4s_ease-in-out] px-4 sm:px-0" id="aboutme">
            <h3 className="text-3xl font-medium font-regularFont ">Blog</h3>
            <div 
                onClick={() => window.location.href = '/leetcode'} 
                className="w-full bg-gradient-to-br dark:from-zinc-800 from-zinc-200 dark:to-zinc-900 to-zinc-300 p-2 sm:p-4 rounded-xl flex justify-between items-center cursor-pointer hover:shadow-lg transition-all duration-300 group"
            >
                <div className="flex gap-3">
                    <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 border rounded-xl flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
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
                    <div className="flex flex-col justify-center">
                        <div className="text-3xl">LeetCode</div>
                        <div className="text-sm">Check out my coding journey blog!</div>
                    </div>
                </div>
                
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </div>
        </section>
    )
};