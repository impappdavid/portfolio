import Content from "@/components/my-components/experience/content"
import Hero from "@/components/my-components/explore/hero"

function Experience(){
    return(<>
    <div className="flex flex-col items-center bg-zinc-900/70">
        <div className="w-56"></div>
        <div className="ml-56 w-full max-w-4xl h-fit flex flex-col items-center gap-12" >
            <Content />

        </div>
      </div>
      </>)
}
export default Experience