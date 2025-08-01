"use client"
import About from "@/components/my-components/about";
import ReactLenis from "@studio-freight/react-lenis"

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="flex flex-col h-full sm:h-screen w-full items-center bg-[#d9d9d9]">
          <About />
        </div>
      </ReactLenis>
    </>
  );
}
