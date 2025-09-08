"use client"
import Content from "@/components/my-components/content";
import ReactLenis from "@studio-freight/react-lenis"

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="flex flex-col h-full sm:h-screen w-full items-center">
          <Content />
        </div>
      </ReactLenis>
    </>
  );
}
