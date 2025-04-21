"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { useState, useEffect } from "react"
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

// Add custom styles for Prism.js
const customPrismStyles = `
  .custom-prism {
    background: transparent !important; /* zinc-800/30 */
    border-radius: 0.5rem !important;
    padding: 0.5rem !important;
  }
  
  .custom-prism code {
    color: #e4e4e7 !important; /* zinc-200 */
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
    font-size: 0.75rem !important;
  }
  
  .custom-prism .token.comment,
  .custom-prism .token.prolog,
  .custom-prism .token.doctype,
  .custom-prism .token.cdata {
    color: #71717a !important; /* zinc-500 */
  }
  
  .custom-prism .token.punctuation {
    color: #a1a1aa !important; /* zinc-400 */
  }
  
  .custom-prism .token.property,
  .custom-prism .token.tag,
  .custom-prism .token.boolean,
  .custom-prism .token.number,
  .custom-prism .token.constant,
  .custom-prism .token.symbol {
    color: #fbbf24 !important; /* amber-400 */
  }
  
  .custom-prism .token.selector,
  .custom-prism .token.attr-name,
  .custom-prism .token.string,
  .custom-prism .token.char,
  .custom-prism .token.builtin {
    color: #4ade80 !important; /* green-400 */
  }
  
  .custom-prism .token.operator,
  .custom-prism .token.entity,
  .custom-prism .token.url,
  .custom-prism .language-css .token.string,
  .custom-prism .style .token.string {
    color: #60a5fa !important; /* blue-400 */
  }
  
  .custom-prism .token.atrule,
  .custom-prism .token.attr-value,
  .custom-prism .token.keyword {
    color: #f472b6 !important; /* pink-400 */
  }
  
  .custom-prism .token.function,
  .custom-prism .token.class-name {
    color: #818cf8 !important; /* indigo-400 */
  }
  
  .custom-prism .token.regex,
  .custom-prism .token.important,
  .custom-prism .token.variable {
    color: #fb923c !important; /* orange-400 */
  }
`;

function LeetcodeContent() {

    const [isMostRecent, setIsMostRecent] = useState(true);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

    // Apply syntax highlighting when component mounts or when problems change
    useEffect(() => {
        Prism.highlightAll();

        // Add custom styles to the document
        const styleElement = document.createElement('style');
        styleElement.innerHTML = customPrismStyles;
        document.head.appendChild(styleElement);

        // Clean up when component unmounts
        return () => {
            document.head.removeChild(styleElement);
        };
    }, [selectedDifficulty, isMostRecent]);

    const problems = [
        {
            id: 1,
            title: "Two Sum",
            description: "Solved my first LeetCode problem, Two Sum! 🚀 Used a nested loop approach and working to reduce my runtime. Excited for more challenges ahead! 💪",
            difficulty: "Easy",
            date: "2024.12.21",
            solution: "https://github.com/yourusername/leetcode/blob/main/two-sum.js",
            codeSnippet: `function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`
        },

    ];

    const sortedProblems = [...problems]
        .filter(problem => selectedDifficulty === null || problem.difficulty === selectedDifficulty)
        .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return isMostRecent ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
        });

    return (
        <>
            <div className="flex flex-col items-start w-full py-24 gap-8 min-h-screen">
                <div className="flex flex-col gap-4 animate-[downblur_2s_ease-in-out]">
                    <div className="font-body text-5xl font-bold text-start">Leetcode</div>
                    <div className="text-zinc-400 font-body">
                        Here are my solutions to various LeetCode problems, showcasing my problem-solving approach and coding skills.
                    </div>

                </div>
                <div className="flex justify-between w-full animate-[downblur_2.5s_ease-in-out]">
                    <div className="flex gap-2">
                        <Button
                            className={`py-1.5 px-4 text-sm rounded-lg ${selectedDifficulty === 'Easy' ? 'bg-green-600' : 'bg-zinc-900'} text-white font-body hover:opacity-70 hover:bg-zinc-900 border flex items-center gap-1 border-zinc-800 transition-all duration-500`}
                            onClick={() => setSelectedDifficulty(selectedDifficulty === 'Easy' ? null : 'Easy')}
                        >
                            Easy
                        </Button>
                        <Button
                            className={`py-1.5 px-4 text-sm rounded-lg ${selectedDifficulty === 'Medium' ? 'bg-yellow-600' : 'bg-zinc-900'} text-white font-body hover:opacity-70 hover:bg-zinc-900 border flex items-center gap-1 border-zinc-800 transition-all duration-500`}
                            onClick={() => setSelectedDifficulty(selectedDifficulty === 'Medium' ? null : 'Medium')}
                        >
                            Medium
                        </Button>
                        <Button
                            className={`py-1.5 px-4 text-sm rounded-lg ${selectedDifficulty === 'Hard' ? 'bg-red-600' : 'bg-zinc-900'} text-white font-body hover:opacity-70 hover:bg-zinc-900 border flex items-center gap-1 border-zinc-800 transition-all duration-500`}
                            onClick={() => setSelectedDifficulty(selectedDifficulty === 'Hard' ? null : 'Hard')}
                        >
                            Hard
                        </Button>
                    </div>
                    <Button
                        className="py-1.5 px-4 text-sm rounded-lg bg-zinc-900 text-white font-body hover:opacity-70 hover:bg-zinc-900 border flex items-center gap-1 border-zinc-800 transition-all duration-500"
                        onClick={() => setIsMostRecent(!isMostRecent)}
                    >
                        {isMostRecent ? (
                            <>
                                <ArrowDownWideNarrow className="w-4 h-4" />
                                Recent
                            </>
                        ) : (
                            <>
                                <ArrowUpNarrowWide className="w-4 h-4" />
                                Oldest
                            </>
                        )}
                    </Button>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    {sortedProblems.map((problem, index) => (
                        <div key={index} className="w-full p-6 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col gap-2 animate-[downblur_3s_ease-in-out]">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-1">
                                    <div className="text-lg font-body font-semibold">{problem.title}</div>
                                </div>
                                <div className="flex gap-1">
                                    <Badge variant="outline" className="border-zinc-700 font-body text-zinc-400">
                                        {problem.date}
                                    </Badge>
                                    <Badge variant="outline" className="border-zinc-700 font-body">
                                        {problem.difficulty}
                                    </Badge>
                                </div>

                            </div>
                            <div className="text-zinc-400 font-body text-sm">
                                {problem.description}
                            </div>
                            <div className="w-full overflow-hidden rounded-lg bg-zinc-800/30 border p-4">
                                <pre className="text-xs overflow-x-auto custom-prism">
                                    <code className="language-javascript">
                                        {problem.codeSnippet}
                                    </code>
                                </pre>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
} export default LeetcodeContent
