"use client"
import Content from "@/components/my-components/home/content";
import ReactLenis from "@studio-freight/react-lenis"

export default function Home() {
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
