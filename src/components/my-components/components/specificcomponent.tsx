'use client'

import { Project } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Prism from 'prismjs'
import '@/styles/prism-dark.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'
import {
    Github, ExternalLink, CheckCircle, AlertCircle,
    Layout, ShoppingCart, Database, Shield, Zap,
    Users, Settings, BarChart, Code, Palette,
    Smartphone, Globe, Lock, Cpu, Box,
    Package, Truck, CreditCard, Search,
    Filter, Heart, Star, Bell, MessageSquare, Images,
    Store,
    Gavel,
    ChartLine,
    CircleFadingArrowUp,
    Merge, KeyRound, Fingerprint, BadgePlus, MousePointerClick, Film, TicketPlus, Tickets,
    Check, Clipboard,
    Mail,
    EyeOff,
    Eye,
    Bold,
    Info,
    X
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface SpecificComponentProps {
    slug: string
}

function SpecificComponent({ slug }: SpecificComponentProps) {
    const codeRef = useRef<HTMLElement>(null)
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current)
        }
    }, [slug])

    // Map of feature titles to Lucide icons
    const getFeatureIcon = (title: string) => {
        const iconMap: Record<string, any> = {
            // ... existing icon map ...
        };

        // Try to find a matching icon by checking if the title contains any of the keys
        for (const [key, icon] of Object.entries(iconMap)) {
            if (title.toLowerCase().includes(key.toLowerCase())) {
                return icon;
            }
        }

        // Return default icon if no match found
        return iconMap.default;
    };

    // Component data based on slug
    const componentData = {
        "button": {
            title: "Animated Button",
            code: `import { Button } from "@/components/ui/button"

function Button(){
    return(
        <>
            <Button 
                className="bg-zinc-800/40 hover:bg-zinc-800/60 text-zinc-400 px-6 py-4 hover:text-zinc-200 border border-zinc-800 transition-all duration-300 rounded-xl active:scale-95"
            >
                Click me
            </Button>
        </>
    )
}
export default Button
`,
            preview: (
                <Button className="bg-zinc-800/40 hover:bg-zinc-800/60 text-zinc-400 px-6 py-4 hover:text-zinc-200 border border-zinc-800 transition-all duration-300 rounded-xl active:scale-95">Click me</Button>
            )
        },
        "inputemail": {
            title: "Input Email",
            code: `import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"        
            
function InputEmail(){
    return(
        <>
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
        </>
    )
}
export default InputEmail
`,
            preview: (
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
                </div>)
        },

        "inputpassword": {
            title: "Input Password",
            code: `import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Lock, EyeOff, Eye } from "lucide-react"        
            
function InputPassword(){

const [showPassword, setShowPassword] = useState(false)
const [password, setPassword] = useState("")

const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return(
        <>
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
        </>
    )
}
export default InputPassword
`,
            preview: (
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
                </div>)
        },

        "toggle": {
            title: "Toggle",
            code: `import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"        
            
function Toggle(){
    return(
        <>
            <Toggle className="bg-zinc-800/20 hover:bg-zinc-800/40 text-zinc-400 py-4 hover:text-zinc-200 border border-transparent transition-all duration-300 rounded-xl active:scale-95 data-[state=on]:border-sky-500 data-[state=on]:bg-sky-500/10">
                <Bold className="h-4 w-4" />
            </Toggle>
        </>
    )
}
export default Toggle
`,
            preview: (
                <Toggle className="bg-zinc-800/20 hover:bg-zinc-800/40 text-zinc-400 py-4 hover:text-zinc-200 border border-transparent transition-all duration-300 rounded-xl active:scale-95 data-[state=on]:border-sky-500 data-[state=on]:bg-sky-500/10">
                    <Bold className="h-4 w-4" />
                </Toggle>
            )
        },

        "formSignIn": {
            title: "Form Sign In",
            code: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip" 
import Link from "next/link" 
import { Info, Mail, Lock, X, EyeOff, Eye } from "lucide-react" 
            
function FormSignIn(){

const [showPassword, setShowPassword] = useState(false)
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")

const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
}

    return(
        <>
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
        </>
    )
}
export default FormSignIn
`,
            preview: (
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
            )
        },
        "card": {
            title: "Card",
            code: `function Card(){
    return(
        <>
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
                    className="mt-2 absolute top-0 right-2 backdrop-blur-lg  p-1 px-2 flex gap-1 items-center bg-purple-500/30"
                >
                    <div className="text-xs text-zinc-200">Epic</div>
                </div>
                <div
                    className="mt-2 absolute top-0 left-2 bg-green-500/30 backdrop-blur-lg  p-1 px-2 flex gap-1 items-center"
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
        </>
    )
}
export default Card
`,
            preview: (
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
            )
        },
        "link": {
            title: "Link",
            code: `import Link from "next/link"  
            
function LinkBox(){
    return(
        <>
            <Link 
                href="" 
                className="text-xs border-2 p-1.5 px-3 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
                >
                    Hover me
            </Link>
        </>
    )
}
export default LinkBox
`,
            preview: (
                <Link href="" className="text-xs border-2 p-1.5 px-3 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md">Hover me</Link>
            )
        },

        "loader": {
            title: "Loader",
            code: `function Loader(){
    return(
        <>
            <div className="flex flex-row gap-2">
                <div className="w-3 h-3 bg-[#9487e0b2] animate-bounce"></div>
                <div className="w-3 h-3 bg-[#9487e0b2] animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-3 h-3 bg-[#9487e0b2] animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </>
    )
}
export default Loader
`,
            preview: (
                <div className="flex flex-row gap-2">
                    <div className="w-3 h-3 bg-[#9487e0b2] animate-bounce"></div>
                    <div className="w-3 h-3 bg-[#9487e0b2] animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-3 h-3 bg-[#9487e0b2] animate-bounce [animation-delay:-.5s]"></div>
                </div>
            )
        },
    };

    const component = componentData[slug as keyof typeof componentData];

    if (!component) {
        return <div>Component not found</div>;
    }
    const [copied, setCopied] = useState(false)

    return (
        <>
            <div className="flex flex-col items-start w-full py-24 gap-8">
                <div className="flex flex-col gap-6 animate-[downblur_1.5s_ease-in-out] w-full">
                    <Link href="../components" className="text-sm text-zinc-400 font-body flex gap-2 items-center hover:text-white transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 16l-4-4m0 0l4-4m-4 4h12" />
                        </svg>
                        All components
                    </Link>
                    <div className="font-body text-5xl font-bold text-start">{component.title}</div>
                </div>

                <div className="flex flex-col w-full">
                    {/* Preview Section */}
                    <div className="w-full bg-zinc-900/60 border-x border-t border-zinc-800/60 px-16 py-16 rounded-t-2xl flex justify-center items-center">
                        {component.preview}
                    </div>

                    {/* Code Section */}
                    <div className="w-full bg-zinc-900/60 border border-zinc-800/60 rounded-b-2xl relative">
                        <div className="flex justify-between items-center">

                            <button
                                onClick={(e) => {
                                    navigator.clipboard.writeText(component.code)   // Prevent anchor navigation
                                    setCopied(!copied)
                                }}
                                className="p-2 rounded-md hover:bg-zinc-800 cursor-pointer transition-all absolute top-3 right-3"
                                aria-label="Copy code"
                            >
                                {copied ? <Check className="h-3 w-3 text-white" /> : <Clipboard className="h-3 w-3 text-zinc-300" />}
                            </button>
                        </div>
                        <pre className="bg-zinc-950/60 p-4 py-8 overflow-x-auto rounded-b-2xl">
                            <code ref={codeRef} className="language-tsx text-sm">{component.code}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecificComponent