"use client"
import Content from "@/components/my-components/about/content";
import ReactLenis from "@studio-freight/react-lenis"

export default function AboutPage() {
  return (
    <>
      <ReactLenis root>
        <div className="flex flex-col h-full w-full items-center">
          <Content />
        </div>
      </ReactLenis>
    </>
  );
}
