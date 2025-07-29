import { Bebas_Neue, Barlow_Condensed } from "next/font/google"

const kodemonoFont = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
})
const barlowFont = Barlow_Condensed({
    subsets: ["latin"],
    weight: "400",
})

function About() {
    return (
        <>
            <div className="flex flex-col gap-6 pt-24">
                <div className={`text-7xl flex justify-center tracking-wider ${kodemonoFont.className}`}>PAPP DÁVID</div>
                
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-col items-center">
                        <div className={`text-xl tracking-wide ${kodemonoFont.className}`}>ABOUT ME</div>
                        <div className={`${barlowFont.className} max-w-2xl text-xl text-zinc-600 text-center`}>
                            I'm a developer <span className="font-semibold">focused on frontend</span> work. I like turning designs into <span className="font-semibold">functional interfaces</span> that are clean and responsive.
                            I care about writing <span className="font-semibold">clear code</span> and making things that <span className="font-semibold">work well</span> for real people.
                            Most of my time goes into <span className="font-semibold">learning</span> and building projects that reflect what I value in good software.
                        </div>
                    </div>
                    <div className={`${barlowFont.className} max-w-2xl text-xl text-zinc-600 text-center`}>
                        Outside of programming, I’ve always found science fascinating. I’ve never studied it in depth, but I think it’s mind-blowing how it explains the world and how things work. The way everything connects from the tiniest particles to the universe itself is something I find endlessly interesting. Even if I don’t always understand the details, I love reading or watching things about physics, space, and how nature works. It reminds me how much there is to explore and how little we still know.
                    </div>
                    <div className={`${barlowFont.className} max-w-2xl text-xl text-zinc-600 text-center`}>
                    I'm available for freelance work on <a href="" className="text-green-600 font-medium underline">Fiverr</a>. Together with a friend, we build full-stack web applications he handles the backend, and I take care of the frontend. If you need a custom web app, a sleek user interface, or a complete project from start to finish, feel free to reach out!
                    </div>
                </div>
            </div>
        </>
    )
}
export default About