
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <section className="w-full flex flex-col gap-4 animate-[downblur_4s_ease-in-out]" id="aboutme">
            <div className=" flex flex-col gap-4 px-4 sm:px-0">
                <h3 className="text-3xl font-medium font-regularFont ">Contact</h3>
                <div className="w-full flex flex-col gap-3 justify-center text-xs text-zinc-600 dark:text-zinc-400 ">
                    <div className="text-3xl text-center">
                        Get in touch with me via Twitter DM for any questions or collaborations!
                    </div>
                    <div className="w-full flex justify-center">
                        <a href="https://x.com/Dvid50334776" target="__blank"
                            className="bg-black dark:bg-white p-1 px-3 w-fit rounded-lg flex gap-1 items-center text-lg hover:text-white text-zinc-300 dark:hover:text-black transition-all dark:text-zinc-600">
                            <FaXTwitter className="w-4 h-4" />
                            Message</a>
                    </div>
                </div>
            </div>
        </section>
    )
};