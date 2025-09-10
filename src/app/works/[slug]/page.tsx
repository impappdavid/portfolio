"use client"
import Content from "@/components/my-components/work/content";
import ReactLenis from "@studio-freight/react-lenis"

function SpecificWorkPage({ params }: { params: { slug: string } }) {
    return (
        <>
            <ReactLenis root>
                <div className="flex flex-col h-full w-full items-center">
                    <Content initialSlug={params.slug}/>
                </div>
            </ReactLenis>
        </>
    )
}
export default SpecificWorkPage;