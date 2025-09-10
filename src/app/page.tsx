"use client"
import Content from "@/components/my-components/home/content";
import ReactLenis from "@studio-freight/react-lenis"

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="flex flex-col items-center">

          <Content />

        </div>
      </ReactLenis>
    </>
  );
}
