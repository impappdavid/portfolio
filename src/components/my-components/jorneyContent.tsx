import { BadgePlus, BookDown, ImagePlus, KeyRound, MousePointer2, RectangleEllipsis, ShieldCheck, Ticket, Users, Brain, SunSnow, Type, Gauge, Store, Hammer, ChartLine, CircleFadingArrowUp, Merge, Receipt, Maximize2, Expand } from "lucide-react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

// Define a type for the valid slugs
type ProjectSlug = 'cinemaview' | 'azura';

const projectData: Record<ProjectSlug, {
    title: string;
    mainImage: string;
    about: { title: string; content: JSX.Element };
    features: { id: string; title: string; icon: React.ElementType; iconColor: string; image: string; content: JSX.Element }[];
    stack: { title: string; icons: { id: string; path: string; title: string }[] };
    problems: { title: string; content: { id: string; content: JSX.Element }[] };
}> = {
    cinemaview: {
        title: "Cinema View",
        mainImage: "/projects/CinemaView/mockup1.png",
        about: {
            title: "About",
            content: (
                <>
                    We developed this app for our <span className="font-semibold dark:text-white text-black">school exam</span>. We had to design an app that solves a real-world problem. Our team member worked at a cinema, and the main issue was that employees had to manually schedule their shifts.
                    We thought of a solution where <span className="font-semibold dark:text-white text-black">employees could select shifts themselves</span> based on their <span className="font-semibold dark:text-white text-black">availability</span> and the options that the <span className="font-bold dark:text-white text-black">manager</span> posted.
                    We had <span className="font-semibold dark:text-white text-black">3 months</span> to develop this app, focusing on making it <span className="font-semibold dark:text-white text-black">user-friendly</span> and intuitive.
                    I was responsible for the <span className="font-semibold dark:text-white text-black">frontend development</span>.
                    This was my <span className="font-semibold dark:text-white text-black">first experience working with a team on a real project</span>, which proved to be incredibly valuable.
                    Additionally, we implemented a <span className="font-semibold text-white">cinema ticket booking system</span>.
                </>
            )
        },
        features: [
            {
                id: "authentication",
                title: "Authentication",
                icon: KeyRound,
                iconColor: "group-hover:text-yellow-600",
                image: "/projects/CinemaView/login.png",
                content: (
                    <>
                        We implemented a secure <span className="font-semibold dark:text-white text-black">authentication system</span> using JWT and 2FA.
                        This ensures that only authorized users can access the app.
                        I used <span className="font-semibold dark:text-white text-black">regex</span> to validate the email and password.
                        I also used <span className="font-semibold dark:text-white text-black">bcrypt</span> to hash the password.
                        And I used <span className="font-semibold dark:text-white text-black">jsonwebtoken</span> to create the JWT.
                        I also made sure that the unauthorized users are redirected to the login page.
                    </>
                )
            },
            {
                id: "2fa",
                title: "2FA",
                icon: RectangleEllipsis,
                iconColor: "group-hover:text-blue-500",
                image: "/projects/CinemaView/2fa.png",
                content: (
                    <>
                        We implemented a <span className="font-semibold dark:text-white text-black">2FA system</span> using Google Authenticator.
                        This ensures that only authorized users can access the app.
                        I used <span className="font-semibold dark:text-white text-black">otplib</span> to generate the QR code and the secret key.
                        I also used <span className="font-semibold dark:text-white text-black">jsonwebtoken</span> to create the JWT.
                    </>
                )
            },
            {
                id: "createshifts",
                title: "Create Shifts",
                icon: BadgePlus,
                iconColor: "group-hover:text-sky-500",
                image: "/projects/CinemaView/addshift.png",
                content: (
                    <>
                        To add a shift, the <span className="font-semibold dark:text-white text-black">manager</span> can click on the Create Shift button.
                        This will open a page where the manager can select the <span className="font-semibold dark:text-white text-black">start and end time</span> of the shift.
                        The manager can also select the <span className="font-semibold dark:text-white text-black">number of employees</span> needed for the shift.
                        I used <span className="font-semibold dark:text-white text-black">date-fns</span> to format the date and time.
                    </>
                )
            },
            {
                id: "selectshifts",
                title: "Select Shifts",
                icon: MousePointer2,
                iconColor: "group-hover:text-orange-600",
                image: "/projects/CinemaView/selectshift.png",
                content: (
                    <>
                        The <span className="font-semibold dark:text-white text-black">employees</span> can select the shifts they want to work.
                        They can also see the shifts they have already <span className="font-semibold dark:text-white text-black">selected</span>.
                    </>
                )
            },
            {
                id: "screenings",
                title: "Screenings",
                icon: ImagePlus,
                iconColor: "group-hover:text-red-500",
                image: "/projects/CinemaView/addmovie.png",
                content: (
                    <>
                        To add a movie, the <span className="font-semibold dark:text-white text-black">manager</span> can click on the Create Movie button.
                        He has to select the <span className="font-semibold dark:text-white text-black">room</span>, the <span className="font-semibold dark:text-white text-black">movie</span>, the <span className="font-semibold dark:text-white text-black">date</span> and the <span className="font-semibold dark:text-white text-black">time</span>.
                    </>
                )
            },
            {
                id: "book",
                title: "Book Movies",
                icon: BookDown,
                iconColor: "group-hover:text-emerald-500",
                image: "/projects/CinemaView/booking.png",
                content: (
                    <>
                        To book a movie, the <span className="font-semibold dark:text-white text-black">user</span> can click on the Book Movie button.
                        He has to select the <span className="font-semibold dark:text-white text-black">movie</span>, the <span className="font-semibold dark:text-white text-black">date</span> and the <span className="font-semibold dark:text-white text-black">time</span>.
                    </>
                )
            },
            {
                id: "managetickets",
                title: "Tickets",
                icon: Ticket,
                iconColor: "group-hover:text-violet-500",
                image: "/projects/CinemaView/tickets.png",
                content: (
                    <>
                        On the tickets page, the user can see the <span className="font-semibold dark:text-white text-black">tickets</span> he has booked.
                        He can also <span className="font-semibold dark:text-white text-black">cancel</span> a ticket.
                        And the user can see the <span className="font-semibold dark:text-white text-black">time and date</span> of the screening.
                    </>
                )
            }
        ],
        stack: {
            title: "Stack",
            icons: [
                {
                    id: "svelte",
                    path: "M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.27 6.27 0 0 1 1.072 4.74a5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.88 5.88 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.27 6.27 0 0 1-1.07-4.741a5.9 5.9 0 0 1 .88-2.198a6.2 6.2 0 0 1-.611-3.977a5.88 5.88 0 0 1 2.658-3.94zM8.049 20.25c.782.29 1.633.332 2.44.123c.369-.099.72-.253 1.042-.458l5.128-3.267a3.54 3.54 0 0 0 1.598-2.37a3.77 3.77 0 0 0-.645-2.85a4.07 4.07 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.1 1.1 0 0 1-.314.138a1.227 1.227 0 0 1-1.5-.899a1.1 1.1 0 0 1-.01-.45a1.07 1.07 0 0 1 .48-.713l5.129-3.268a1.1 1.1 0 0 1 .314-.138a1.23 1.23 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19l.191.058a6.6 6.6 0 0 1 2.005 1.003l.263.192l.096-.295q.078-.235.123-.478a3.77 3.77 0 0 0-.644-2.85a4.07 4.07 0 0 0-4.371-1.621a3.7 3.7 0 0 0-1.042.458L7.34 7.357a3.54 3.54 0 0 0-1.6 2.37a3.77 3.77 0 0 0 .645 2.85a4.07 4.07 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248q.148-.093.315-.137a1.23 1.23 0 0 1 1.5.899c.034.147.037.3.011.449a1.07 1.07 0 0 1-.482.713l-5.127 3.269a1.1 1.1 0 0 1-.314.137a1.23 1.23 0 0 1-1.317-.488a1.15 1.15 0 0 1-.207-.762l.017-.19l-.19-.058a6.6 6.6 0 0 1-2.005-1.003l-.263-.192l-.096.295a4 4 0 0 0-.123.478a3.77 3.77 0 0 0 .644 2.85a4.07 4.07 0 0 0 1.93 1.498",
                    title: "Svelte"
                },
                {
                    id: "ts",
                    path: "M23.429 0H.57A.57.57 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.57.57 0 0 0 .571-.571V.57a.57.57 0 0 0-.572-.57m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719s-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755",
                    title: "TypeScript"
                    
                },
                {
                    id: "tailwindcss",
                    path: "M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12",
                    title: "TailwindCSS"
                },
            ]
        },
        problems: {
            title: "Problems",
            content: [
                {
                    id: "teamwork",
                    content: (
                        <>
                            I learned a lot of new things during this project because this was my first experience working with a team on a real project.
                            I learned how to <span className="font-semibold dark:text-white text-black">communicate</span> with my team members and how to <span className="font-semibold dark:text-white text-black">manage</span> a project.
                        </>
                    )
                },
                {
                    id: "jwt",
                    content: (
                        <>
                            Using <span className="font-semibold dark:text-white text-black">jsonwebtoken</span> to create the JWT was a bit challenging because I had to make sure that the JWT was valid and that the user was authorized to access the app.
                            I also had to make sure that the <span className="font-semibold dark:text-white text-black">unauthorized users</span> are redirected to the login page.
                        </>
                    )
                },
                {
                    id: "2fa-challenge",
                    content: (
                        <>
                            The 2fa was a bit challenging because I never worked with qr codes before.
                            I had to learn how to <span className="font-semibold dark:text-white text-black">generate</span> the qr code and the secret key.
                            I also had to learn how to <span className="font-semibold dark:text-white text-black">validate</span> the qr code and the secret key.
                        </>
                    )
                },
                {
                    id: "dates",
                    content: (
                        <>
                            Managing the <span className="font-semibold dark:text-white text-black">dates</span> was a bit challenging because I had to make sure that the dates were valid and that the dates were not in the past.
                            I also had to make sure that the dates were in the correct format.
                        </>
                    )
                }
            ]
        }
    },
    azura: {
        title: "Azura",
        mainImage: "/projects/azura/cover.png",
        about: {
            title: "About",
            content: (
                <>
                    <span className="font-semibold dark:text-white text-black">Azura</span> is a groundbreaking <span className="font-semibold dark:text-white text-black">NFT ecosystem</span> where <span className="font-semibold dark:text-white text-black">AI-generated assets</span> meet <span className="font-semibold dark:text-white text-black">customization and investment</span>. With features like <span className="font-semibold dark:text-white text-black">merging, upgrades, and rarity-based NFTs</span>, collectors can <span className="font-semibold dark:text-white text-black">shape their own digital assets</span> and trade for real value.
                    Our vision is to <span className="font-semibold dark:text-white text-black">redefine ownership</span> by creating a <span className="font-semibold dark:text-white text-black">dynamic marketplace</span> that evolves with <span className="font-semibold dark:text-white text-black">creators, investors, and collectors</span>. With future plans for <span className="font-semibold dark:text-white text-black">collaborations and asset trading</span>, <span className="font-semibold dark:text-white text-black">Azura</span> is shaping the <span className="font-semibold dark:text-white text-black">next era of NFTs</span>.
                </>
            )
        },
        features: [
            {
                id: "feature1",
                title: "AI-Generated",
                icon: Brain,
                iconColor: "group-hover:text-yellow-600",
                image: "/projects/azura/generate.png",
                content: (
                    <>
                        Create unique, AI-powered NFTs with customizable elements and rarity-based traits.
                    </>
                )
            },
            {
                id: "feature2",
                title: "Seasons",
                icon: SunSnow,
                iconColor: "group-hover:text-sky-500",
                image: "/projects/azura/characters.png",
                content: (
                    <>
                        Each season introduces new default characters, features, and opportunities. Season 1 launches with the marketplace and AI-generated NFTs. Season 2 brings creator collaborations and an asset marketplace. Future seasons will expand with new mechanics, characters, and investments, keeping the experience fresh and exciting.
                    </>
                )
            },
            {
                id: "feature3",
                title: "NFT types",
                icon: Type,
                iconColor: "group-hover:text-pink-500",
                image: "/projects/azura/generate1.png",
                content: (
                    <>
                        There are 2 types of NFT's you can mint. Normal with the normal type you can either put on the marketplace or the auction. Invest with that you can put the invesment marketplace where users can invest up to 50% and if the NFT sold the investors gets their share.
                    </>
                )
            },
            {
                id: "feature4",
                title: "Rarity Based",
                icon: Gauge,
                iconColor: "group-hover:text-violet-500",
                image: "/projects/azura/fullGenerate.png",
                content: (
                    <>
                        You can choose what rarity you want to mint. There are 5 rarity each rarity has its own price and each rarity has its own supply.
                    </>
                )
            },
            {
                id: "feature5",
                title: "Marketplace",
                icon: Store,
                iconColor: "group-hover:text-red-500",
                image: "/projects/azura/market.png",
                content: (
                    <>
                        On the default market people can buy set priced NFT's.
                    </>
                )
            },
            {
                id: "feature5",
                title: "",
                icon: ImagePlus,
                iconColor: "group-hover:text-red-500",
                image: "/projects/azura/marketbuy.png",
                content: (
                    <>
                        Here you can check the NFT price history and the prompt that the user used to make this NFT.
                    </>
                )
            },
            {
                id: "feature6",
                title: "Auction",
                icon: Hammer,
                iconColor: "group-hover:text-orange-500",
                image: "/projects/azura/auction.png",
                content: (
                    <>
                        Users can see the current bid and the remaining time.
                    </>
                )
            },
            {
                id: "feature6",
                title: "",
                icon: ImagePlus,
                iconColor: "group-hover:text-red-500",
                image: "/projects/azura/auction1.png",
                content: (
                    <>

                    </>
                )
            },
            {
                id: "feature7",
                title: "Investment",
                icon: ChartLine,
                iconColor: "group-hover:text-sky-500",
                image: "/projects/azura/invest.png",
                content: (
                    <>
                        The user who wants to sell its he can add a price he want to sell and from that price we set the invesment price for every(5%).
                    </>
                )
            },
            {
                id: "feature7",
                title: "",
                icon: ImagePlus,
                iconColor: "group-hover:text-blue-500",
                image: "/projects/azura/investbuy.png",
                content: (
                    <>
                        Here the users can set their own percentage how many they want to buy up to 50%
                    </>
                )
            },
            {
                id: "feature8",
                title: "Upgrade",
                icon: CircleFadingArrowUp,
                iconColor: "group-hover:text-green-500",
                image: "/projects/azura/upgrade.png",
                content: (
                    <>
                        In the upgrade users can upgrade their own NFT's. Each rarity has its own area like the legandary you can set face expression.
                    </>
                )
            },
            {
                id: "feature8",
                title: "",
                icon: ImagePlus,
                iconColor: "group-hover:text-red-500",
                image: "/projects/azura/upgrade2.png",
                content: (
                    <>
                    </>
                )
            },
            {
                id: "feature9",
                title: "Merge",
                icon: Merge,
                iconColor: "group-hover:text-black",
                image: "/projects/azura/merge.png",
                content: (
                    <>
                        Users can merge their NFT's like a character and an animal.
                    </>
                )
            },
            {
                id: "feature9",
                title: "",
                icon: ImagePlus,
                iconColor: "group-hover:text-red-500",
                image: "/projects/azura/merge2.png",
                content: (
                    <>
                    </>
                )
            },
            {
                id: "feature10",
                title: "Selling",
                icon: Receipt,
                iconColor: "group-hover:text-emerald-500",
                image: "/projects/azura/homesell.png",
                content: (
                    <>
                        In the sell page we make sure to write out the market fees so the user will know how much he gets when the NFT is sold.
                    </>
                )
            },
        ],
        stack: {
            title: "Stack",
            icons: [
                {
                    id: "svelte",
                    path: "M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.27 6.27 0 0 1 1.072 4.74a5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.88 5.88 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.27 6.27 0 0 1-1.07-4.741a5.9 5.9 0 0 1 .88-2.198a6.2 6.2 0 0 1-.611-3.977a5.88 5.88 0 0 1 2.658-3.94zM8.049 20.25c.782.29 1.633.332 2.44.123c.369-.099.72-.253 1.042-.458l5.128-3.267a3.54 3.54 0 0 0 1.598-2.37a3.77 3.77 0 0 0-.645-2.85a4.07 4.07 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.1 1.1 0 0 1-.314.138a1.227 1.227 0 0 1-1.5-.899a1.1 1.1 0 0 1-.01-.45a1.07 1.07 0 0 1 .48-.713l5.129-3.268a1.1 1.1 0 0 1 .314-.138a1.23 1.23 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19l.191.058a6.6 6.6 0 0 1 2.005 1.003l.263.192l.096-.295q.078-.235.123-.478a3.77 3.77 0 0 0-.644-2.85a4.07 4.07 0 0 0-4.371-1.621a3.7 3.7 0 0 0-1.042.458L7.34 7.357a3.54 3.54 0 0 0-1.6 2.37a3.77 3.77 0 0 0 .645 2.85a4.07 4.07 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248q.148-.093.315-.137a1.23 1.23 0 0 1 1.5.899c.034.147.037.3.011.449a1.07 1.07 0 0 1-.482.713l-5.127 3.269a1.1 1.1 0 0 1-.314.137a1.23 1.23 0 0 1-1.317-.488a1.15 1.15 0 0 1-.207-.762l.017-.19l-.19-.058a6.6 6.6 0 0 1-2.005-1.003l-.263-.192l-.096.295a4 4 0 0 0-.123.478a3.77 3.77 0 0 0 .644 2.85a4.07 4.07 0 0 0 1.93 1.498",
                    title: "Svelte"
                },
                {
                    id: "ts",
                    path: "M23.429 0H.57A.57.57 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.57.57 0 0 0 .571-.571V.57a.57.57 0 0 0-.572-.57m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719s-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755",
                    title: "TypeScript"
                    
                },
                {
                    id: "tailwindcss",
                    path: "M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12",
                    title: "TailwindCSS"
                },
                {
                    id: "git",
                    path: "M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82",
                    title: "Git"
                },
                {
                    id: "d3",
                    path: "M13.312 12C13.312 5.718 8.22.625 1.937.625H0v5h1.938a6.375 6.375 0 1 1 0 12.75H0v5h1.938c6.281 0 11.374-5.093 11.374-11.375M24 7.563A6.94 6.94 0 0 0 17.062.625h-8a13.4 13.4 0 0 1 4.686 5h3.314a1.94 1.94 0 0 1 0 3.876h-1.938a13.4 13.4 0 0 1 0 5h1.938a1.94 1.94 0 0 1 0 3.876h-3.314a13.4 13.4 0 0 1-4.686 5h8a6.939 6.939 0 0 0 5.333-11.375A6.95 6.95 0 0 0 24 7.563",
                    title: "D3 chart"
                },
                {
                    id: "shadcn",
                    path: "M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305",
                    title: "shadcn"
                },
            ]
        },
        problems: {
            title: "Challenges Faced",
            content: [
                {
                    id: "problem1",
                    content: (
                        <>
                            The designing was hard to make sure its easy to understand and that its not overdesigned.
                        </>
                    )
                },
                {
                    id: "problem2",
                    content: (
                        <>
                            This was my first time using d3 charts it was not easy to understand. The most challenging was the hover tooltip.
                        </>
                    )
                },
            ]
        }
    }
};

interface JourneyContentProps {
    slug: ProjectSlug; // Use the defined type for slug
}

const JourneyContent: React.FC<JourneyContentProps> = ({ slug }) => {
    const projectContent = projectData[slug] || projectData.cinemaview; // Default to Cinema View if slug is not found

    return (
        <div className="w-full flex flex-col gap-0 animate-[downblur_4s_ease-in-out] p-4 pb-12">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold">{projectContent.title}</h1>
                <img src={projectContent.mainImage} alt={projectContent.title} className="w-full aspect-auto sm:h-22 rounded-xl" />
            </div>

            <section className="flex flex-col gap-2" id="about">
                <div className="flex flex-col gap-2 mt-12">
                    <h2 className="text-xl font-semibold">{projectContent.about.title}</h2>
                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                        {projectContent.about.content}
                    </p>
                </div>
            </section>

            <section className="flex flex-col gap-2" id="features">
                <div className="flex flex-col gap-2 mt-12">
                    <h2 className="text-xl font-semibold">Features</h2>
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-2">
                        {projectContent.features.map((feature) => (
                            feature.title.length !== 0 && (
                                <Link
                                    key={feature.id}
                                    href={`#${feature.id}`}
                                    className="flex flex-col gap-4 dark:bg-zinc-900/70 bg-zinc-200 p-4 rounded-xl items-center aspect-square justify-center hover:scale-105 transition-all duration-300 hover:cursor-pointer group"
                                >
                                    <div className="p-3 dark:bg-zinc-800 bg-zinc-100/80 rounded-xl w-12 h-12 flex items-center justify-center">
                                        <feature.icon className={`w-7 h-7 ${feature.iconColor} transition-colors`} />
                                    </div>
                                    <div className="text-sm">{feature.title}</div>
                                </Link>
                            )
                        ))}
                    </div>

                    {projectContent.features.map((feature) => (
                        <div key={feature.id} className="flex flex-col gap-2" id={feature.id}>
                            <h3 className="text-xl font-semibold mt-12">{feature.title}</h3>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="hover:cursor-pointer relative group">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full aspect-auto sm:h-22 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 transition-all duration-300 "
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="bg-white/70 backdrop-blur-sm rounded-full p-4 shadow-lg">
                                                <Expand className="w-10 h-10 text-zinc-800" />
                                            </div>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[1200px] sm:max-h-[600px] aspect-square">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full aspect-auto sm:h-22 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900"
                                    />
                                </DialogContent>
                            </Dialog>
                            <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                {feature.content}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-2" id="stack">
                <div className="flex flex-col gap-2 mt-12">
                    <h2 className="text-xl font-semibold">{projectContent.stack.title}</h2>
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-2">
                        {projectContent.stack.icons.map((icon) => (
                            <div
                            key={icon.id}
                            className="flex flex-col gap-4 dark:bg-zinc-900/70 bg-zinc-200 p-4 rounded-xl items-center aspect-square justify-center hover:scale-105 transition-all duration-300 hover:cursor-pointer group"
                        >
                            <div className="p-3 dark:bg-zinc-800 bg-zinc-100/80 rounded-xl w-12 h-12 flex items-center justify-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8"
                                >
                                    <path d={icon.path} fill="currentColor" />
                                </svg>
                            </div>
                            <div className="text-sm">{icon.title}</div>
                        </div>
                        
                            
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-2" id="problems">
                <div className="flex flex-col gap-2 mt-12">
                    <h2 className="text-xl font-semibold">{projectContent.problems.title}</h2>
                    {projectContent.problems.content.map((problem) => (
                        <p key={problem.id} className="text-sm dark:text-zinc-400 text-zinc-600">
                            {problem.content}
                        </p>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default JourneyContent;