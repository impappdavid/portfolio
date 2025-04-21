import { ExternalLink } from "lucide-react"
import Link from "next/link"


function BookmarksContent() {

    const bookmarks = [
        {
            link: "https://dribbble.com/",
            svg: `<g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M13.774 14.439a32.8 32.8 0 0 1 1.536 7A10 10 0 0 1 12 22a9.95 9.95 0 0 1-5.567-1.692a12.03 12.03 0 0 1 7.34-5.87Zm7.799.463a10.02 10.02 0 0 1-4.355 5.63a35 35 0 0 0-1.46-6.468a12.06 12.06 0 0 1 5.815.838m-9.428-4.417q.499 1.018.93 2.073a14.03 14.03 0 0 0-8.207 6.451a10.08 10.08 0 0 1-2.827-7.922c3.343.708 6.87.502 10.104-.602m7.575-4.841a10.07 10.07 0 0 1 2.24 7.26a14.1 14.1 0 0 0-6.9-.77a35 35 0 0 0-1.055-2.398a19 19 0 0 0 5.715-4.092M7.266 3.19a33 33 0 0 1 3.93 5.502a17.13 17.13 0 0 1-8.776.43A10.03 10.03 0 0 1 7.266 3.19M12 2c2.388 0 4.581.837 6.3 2.234a17 17 0 0 1-5.22 3.726a35 35 0 0 0-3.86-5.568A10 10 0 0 1 12 2" /></g>`,
            name: "Dribbble",
            description: `Design inspiration`,

        },
        {
            link: "https://ui.shadcn.com/",
            svg: `<path fill="currentColor" d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305" />`,
            name: "shadcn/ui",
            description: `UI library`,
        },
        {
            link: "https://thenounproject.com/",
            svg: `<path fill="currentColor" d="M17.672 8.846H24v6.327h-6.328zM6.328 11.99a3.164 3.164 0 0 1-3.164 3.163A3.164 3.164 0 0 1 0 11.991a3.164 3.164 0 0 1 3.164-3.164a3.164 3.164 0 0 1 3.164 3.164m5.504 1.142l2.04 2.021l1.142-1.16l-2.022-2.003l2.022-2.003l-1.142-1.142l-2.04 2.003L9.81 8.846L8.649 9.988l2.022 2.003l-2.022 2.003l1.16 1.16Z" />`,
            name: "Noun Project",
            description: `Icons`,
        },
        {
            link: "https://www.designspells.com/",
            svg: `<g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M15.541 4.16a1 1 0 0 1 .445 1.008l-.718 4.225a2 2 0 0 0 .089 1.01l1.81 5.05c.88.174 1.66.4 2.267.677c.366.167.724.376 1.004.646c.281.271.562.683.562 1.224c0 .848-.663 1.37-1.12 1.64c-.523.309-1.214.553-1.98.744c-1.548.387-3.634.616-5.9.616s-4.352-.229-5.9-.616c-.766-.191-1.457-.435-1.98-.744C3.663 19.37 3 18.848 3 18c0-.54.28-.953.562-1.224c.28-.27.638-.48 1.004-.646c.608-.277 1.387-.503 2.268-.678l2.46-6.866a4 4 0 0 1 1.524-1.964l3.622-2.45a1 1 0 0 1 1.101-.013Zm3.237 2.271c.17-.353.227-.399.338-.208l.067.128l.039.08a5.64 5.64 0 0 0 1.907 2.219l.226.147c.263.16.308.206.078.358l-.078.049a5.64 5.64 0 0 0-2.01 2.124l-.229.449c-.11.191-.168.145-.338-.208a5.64 5.64 0 0 0-1.907-2.219l-.357-.23c-.139-.1-.13-.153.053-.274l.078-.05a5.64 5.64 0 0 0 2.133-2.365M7.598 3.665l.069.123c.314.58.788 1.076 1.376 1.445l.226.131c.185.101.213.138.115.205l-.115.067a4 4 0 0 0-1.477 1.363l-.201.344c-.077.116-.118.106-.188-.008l-.07-.122a3.9 3.9 0 0 0-1.376-1.445l-.226-.132c-.185-.101-.213-.138-.115-.205l.115-.067a4 4 0 0 0 1.477-1.363l.125-.213c.132-.243.174-.269.264-.123Z" /></g>`,
            name: "Design spells",
            description: `Animation inspiration`,
        },
        {
            link: "https://www.seesaw.website/",
            svg: `<path fill="currentColor" d="m19 12l-7 10l-7-10l7-10" />`,
            name: "SEESAW",
            description: `Design inspiration`,
        },
        {
            link: "https://photogradient.com/",
            svg: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 8h.01M6 13l2.644-2.644a1.21 1.21 0 0 1 1.712 0L14 14" /><path d="m13 13l1.644-1.644a1.21 1.21 0 0 1 1.712 0L18 13M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2" /></g>`,
            name: "Photo Gradient",
            description: `Gradient generator`,
        },
        {
            link: "https://shots.so/",
            svg: `<path fill="currentColor" fill-rule="evenodd" d="M1 20.24c0-.42.344-.76.767-.76h20.466c.423 0 .767.34.767.76s-.344.76-.767.76H1.767A.764.764 0 0 1 1 20.24M3.69 3.89c-.9.89-.9 2.324-.9 5.19v5.067c0 1.91 0 2.866.6 3.46s1.564.593 3.494.593h10.232c1.93 0 2.895 0 3.494-.594c.6-.593.6-1.549.6-3.46V9.08c0-2.866 0-4.3-.9-5.19C19.411 3 17.964 3 15.07 3H8.93c-2.894 0-4.341 0-5.24.89m4.473 11.27c0-.42.343-.76.767-.76h6.14c.424 0 .767.34.767.76s-.343.76-.767.76H8.93a.764.764 0 0 1-.767-.76" clip-rule="evenodd" />`,
            name: "Shots",
            description: `Mockup generator`,
        },






    ]
    return (
        <>
            <div className="flex flex-col items-start w-full py-24 gap-12 min-h-screen">
                <div className="flex flex-col gap-4 animate-[downblur_2s_ease-in-out]">
                    <div className="font-body text-5xl font-bold text-start">Bookmarks</div>
                    <div className="text-zinc-400 font-body">
                        These are the tools and sites I use for design and inspiration.
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 w-full animate-[downblur_2.5s_ease-in-out]">

                    {bookmarks.map((bookmark, index) => (
                        <Link href={bookmark.link} target="_blank" key={index} className="p-2 flex gap-2 hover:bg-zinc-800/20 border border-transparent hover:border-zinc-800 rounded-lg transition-all duration-500 cursor-pointer group">
                            <div className="w-12 h-12 bg-zinc-800/50 rounded-md flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: bookmark.svg }} />
                            </div>
                            <div className="flex flex-col justify-start">
                                <div className="text-white text-md font-body font-semibold flex gap-1 items-center">
                                    {bookmark.name}
                                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-400" />
                                </div>
                                <div className="text-xs font-body text-zinc-400 max-w-80 ">
                                    {bookmark.description}
                                </div>
                            </div>
                        </Link>
                    ))}




                </div>
            </div>
        </>
    )
}
export default BookmarksContent