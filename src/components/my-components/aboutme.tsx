
export default function AboutMe() {
    return (
        <section className="w-full flex flex-col gap-4 animate-[downblur_2.5s_ease-in-out]" id="aboutme">
            <div className=" flex flex-col gap-4 px-4 sm:px-0">
                <h3 className="text-3xl font-medium font-regularFont ">About</h3>
                <div className=" text-zinc-600 text-sm dark:text-zinc-300 tracking-wide leading-relaxed font-regularFont">
                    I’m a developer who loves <span className="text-zinc-700 dark:text-zinc-100 text-md font-semibold">new challenges</span> and <span className="text-zinc-700 dark:text-zinc-100 text-md font-semibold">learning something new</span> with each project.
                    Outside of tech,
                    I’m into <span className="text-zinc-700 dark:text-zinc-100 text-md font-semibold">playing with friends and listening music.</span>
                </div>
            </div>
        </section>
    )
};