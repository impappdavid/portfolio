'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Lock, EyeOff, Eye, Bold, X, Info } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


function ComponentsLayout() {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <div className="flex flex-col items-start w-full py-24 gap-12 min-h-screen">
                <div className="flex flex-col gap-4 animate-[downblur_2s_ease-in-out]">
                    <div className="font-body text-5xl font-bold text-start">Components</div>
                    <div className="text-zinc-400 font-body pl-1">
                        Using <Link href="https://tailwindcss.com/" target="_blank" className="underline hover:text-white transition-all duration-300">TailwindCSS</Link> and <Link href="https://ui.shadcn.com/" target="_blank" className="underline hover:text-white transition-all duration-300">shadcn/ui</Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 font-body sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 w-full animate-[downblur_2.5s_ease-in-out]">
                    <div className="w-full bg-zinc-900 border border-zinc-800/60 p-4 aspect-square rounded-2xl flex justify-center items-center relative group">
                        <Button className="bg-zinc-800/40 hover:bg-zinc-800/60 text-zinc-400 px-6 py-4 hover:text-zinc-200 border border-zinc-800 transition-all duration-300 rounded-xl active:scale-95 ">Click me</Button>
                        <div className="absolute top-4 left-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Button</div>
                        <Link href="/components/button" className="absolute bottom-4 right-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Get code</Link>

                    </div>
                    <div className="w-full bg-zinc-900 border border-zinc-800/60 p-4 px-16 col-span-2 rounded-2xl flex justify-center items-center relative group">
                        <div className="relative w-full flex items-center">
                            <div className="absolute -inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Mail className="h-4 w-4 text-zinc-500" />
                            </div>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="pl-10 h-12 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60 transition-all duration-500"

                            />
                        </div>
                        <div className="absolute top-4 left-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Input email</div>
                        <Link href="/components/inputemail" className="absolute bottom-4 right-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Get code</Link>

                    </div>
                    <div className="w-full bg-zinc-900 border border-zinc-800/60 p-4 px-16 col-span-2 rounded-2xl flex justify-center items-center relative group">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Lock className="h-4 w-4 text-gray-500" />
                            </div>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="pl-10 pr-10 h-12 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60 transition-all duration-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="pr-2">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute inset-y-1.5 pr-2 right-0 flex items-center justify-center hover:bg-transparent text-gray-500 hover:text-white"
                                    onClick={togglePasswordVisibility}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4 " /> : <Eye className="h-4 w-4 " />}
                                </Button>
                            </div>
                        </div>
                        <div className="absolute top-4 left-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Input password</div>
                        <Link href="/components/inputpassword" className="absolute bottom-4 right-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Get code</Link>

                    </div>
                    <div className="w-full bg-zinc-900 border border-zinc-800/60 p-4 aspect-square rounded-2xl flex justify-center items-center relative group">
                        <Toggle className="bg-zinc-800/20 hover:bg-zinc-800/40 text-zinc-400 py-4 hover:text-zinc-200 border border-transparent transition-all duration-300 rounded-xl active:scale-95 data-[state=on]:border-sky-500 data-[state=on]:bg-sky-500/10">
                            <Bold className="h-4 w-4" />
                        </Toggle>
                        <div className="absolute top-4 left-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Toggle</div>
                        <Link href="/components/toggle" className="absolute bottom-4 right-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Get code</Link>

                    </div>

                    <div className="w-full h-full bg-zinc-900 border border-zinc-800/60 py-16 px-16 col-span-3 row-span-2 rounded-2xl flex justify-center items-center relative group">
                        <div className="bg-zinc-950/60 w-full sm:w-96 p-3 py-3 mt-3 sm:mt-0 sm:border border-zinc-800/70 rounded-3xl flex flex-col gap-4 sm:items-center">
                            <div className="flex justify-between w-full items-center">
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="p-1 hover:bg-zinc-800/40 text-zinc-400 hover:text-white rounded-lg transition-all duration-500">
                                                <Info className="w-5 h-5 " />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="mb-1 bg-zinc-950/60 backdrop-blur-md ">
                                            <p>ProjectHub</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <div className="font-semibold">
                                    Sign In
                                </div>
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="p-1 hover:bg-zinc-800/40 rounded-lg text-zinc-400 hover:text-white transition-all duration-500">
                                                <Link href="" className="">
                                                    <X className="w-5 h-5 " />
                                                </Link>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="mb-1 bg-zinc-950/60 backdrop-blur-md">
                                            <p>Go back</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <form className="flex flex-col w-full gap-2">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Mail className="h-4 w-4 text-zinc-500" />
                                        </div>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="pl-10 h-12 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60 transition-all duration-500"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Lock className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="pl-10 pr-10 h-12 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60 transition-all duration-500"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className="pr-2">
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute inset-y-1.5 pr-2 right-0 flex items-center justify-center hover:bg-transparent text-gray-500 hover:text-white"
                                                onClick={togglePasswordVisibility}
                                                aria-label={showPassword ? "Hide password" : "Show password"}
                                            >
                                                {showPassword ? <EyeOff className="h-4 w-4 " /> : <Eye className="h-4 w-4 " />}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between my-2 px-1">
                                        <div className="flex items-center space-x-1 ">
                                            <Checkbox id="terms" />
                                            <Label htmlFor="terms" className="text-xs text-zinc-400 cursor-pointer">Remember me</Label>
                                        </div>
                                        <Link href="" className="text-zinc-400 text-xs hover:text-white transition-all duration-500">Forgot password?</Link>
                                    </div>
                                    <Button className="rounded-xl active:scale-95 h-12 bg-[#28A745] hover:bg-[#218838] transition-all duration-500">Sign In</Button>
                                    <div className="flex justify-center w-full mt-2">
                                        <div className="text-xs text-zinc-400">Don't have an account? <Link href="" className="text-[#28A745]">Sign Up</Link></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="absolute top-4 left-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Form</div>
                        <Link href="/components/formSignIn" className="absolute bottom-4 right-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Get code</Link>

                    </div>
                    <div className="w-full h-full bg-zinc-900 border border-zinc-800/60 p-4 py-16 col-span-2 row-span-2 rounded-2xl flex justify-center items-center relative group">
                        <a
                            href=""
                            className="h-[344px] w-full max-w-[280px] transition-all duration-300 ease-in-out relative cursor-pointer group border-2"
                        >
                            <div className="relative overflow-hidden h-full max-h-[280px]">
                                <img
                                    src="/s1-1.jpg"
                                    alt="def1"
                                    className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>

                            <div
                                className={`mt-2 absolute top-0 right-2 backdrop-blur-lg  p-1 px-2 flex gap-1 items-center bg-purple-500/30`}
                            >
                                <div className="text-xs text-zinc-200">Epic</div>
                            </div>
                            <div
                                className={`mt-2 absolute top-0 left-2 bg-green-500/30 backdrop-blur-lg  p-1 px-2 flex gap-1 items-center `}
                            >
                                <div className="text-xs text-green-400">S1</div>
                            </div>
                            <div className="w-full bg-zinc-900 px-2 py-2">
                                <div className="flex justify-between items-center">
                                    <div className="text-start text-white text-xl">
                                        Kai
                                    </div>
                                    <div className="text-xs text-zinc-200">#3012</div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="font-body text-start text-zinc-400 text-xs">
                                        Floor price
                                    </div>
                                    <div className="text-xs text-zinc-400 flex gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                        ><path
                                                fill="currentColor"
                                                fill-rule="evenodd"
                                                d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78m-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78m11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78"
                                            /></svg
                                        >
                                        <div className="">0.26</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="absolute top-4 left-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Card</div>
                        <Link href="/components/card" className="absolute bottom-4 right-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Get code</Link>

                    </div>
                    <div className="w-full h-full bg-zinc-900 border border-zinc-800/60 p-4 row-span-1 rounded-2xl flex justify-center items-center relative group">
                        <Link href="" className="text-xs border-2 p-1.5 px-3 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md">Hover me</Link>
                        <div className="absolute top-4 left-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Link</div>
                        <Link href="/components/link" className="absolute bottom-4 right-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Get code</Link>

                    </div>
                    <div className="w-full h-full bg-zinc-900 border border-zinc-800/60 p-4 row-span-1 rounded-2xl flex justify-center items-center relative group">
                        <div className="flex flex-row gap-2">
                            <div className="w-3 h-3 bg-[#9487e0b2] animate-bounce"></div>
                            <div className="w-3 h-3 bg-[#9487e0b2] animate-bounce [animation-delay:-.3s]"></div>
                            <div className="w-3 h-3 bg-[#9487e0b2] animate-bounce [animation-delay:-.5s]"></div>
                        </div>
                        <div className="absolute top-4 left-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Loader</div>
                        <Link href="/components/loader" className="absolute bottom-4 right-4 text-xs text-zinc-400 p-1.5 bg-zinc-900/20 rounded-lg px-3 border border-zinc-800/40 opacity-0 group-hover:opacity-100 transition-all duration-300">Get code</Link>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ComponentsLayout