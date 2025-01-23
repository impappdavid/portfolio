import { BadgePlus, BookDown, ImagePlus, KeyRound, MousePointer2, RectangleEllipsis, ShieldCheck, Ticket, Users } from "lucide-react";
import Link from "next/link";
const featureContent = [
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
];

const projectContent = {
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
    },
    features: featureContent
};

export default function JourneyContent() {
    return (
        <div className="w-full flex flex-col gap-0 animate-[downblur_4s_ease-in-out] p-4 pb-12">
            <div className="flex flex-col gap-1">
                <div className="text-3xl font-semibold ">{projectContent.title}</div>
                <img src={projectContent.mainImage} alt={projectContent.title} className="w-full aspect-auto sm:h-22 rounded-xl" />
            </div>
            
            <section className="flex flex-col gap-2" id="about">
                <div className="flex flex-col gap-2 mt-12">
                    <div className="text-xl font-semibold ">{projectContent.about.title}</div>
                    <div className="text-sm dark:text-zinc-400 text-zinc-600">
                        {projectContent.about.content}
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-2" id="features">
                <div className="flex flex-col gap-2 mt-12">
                    <div className="text-xl font-semibold">Features</div>
                    <div className="flex flex-col gap-6">
                        <div className="grid sm:grid-cols-4 grid-cols-2 gap-2">
                            {projectContent.features.map((feature) => (
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
                            ))}
                        </div>

                        {projectContent.features.map((feature) => (
                            <div key={feature.id} className="flex flex-col gap-2" id={feature.id}>
                                <div className="text-xl font-semibold mt-12">{feature.title}</div>
                                <img 
                                    src={feature.image} 
                                    alt={feature.title} 
                                    className="w-full aspect-auto sm:h-22 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900" 
                                />
                                <div className="text-sm dark:text-zinc-400 text-zinc-600">
                                    {feature.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-2" id="problems">
                <div className="flex flex-col gap-2 mt-12">
                    <div className="text-xl font-semibold ">{projectContent.problems.title}</div>
                    {projectContent.problems.content.map((problem) => (
                        <div key={problem.id} className="text-sm dark:text-zinc-400 text-zinc-600">
                            {problem.content}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}