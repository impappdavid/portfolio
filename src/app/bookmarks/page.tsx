import BookmarksContent from "@/components/my-components/bookmarks/content"

function Bookmarks() {
    return (<>
        <div className="flex flex-col items-center bg-zinc-900/70 min-h-screen">
            <div className="w-56"></div>
            <div className="ml-56 w-full max-w-4xl h-fit flex flex-col items-center justify-center gap-12" >

                <BookmarksContent />
            </div>
        </div>
    </>)
}
export default Bookmarks