"use client"
import Works from "@/components/my-components/works";
import ReactLenis from "@studio-freight/react-lenis"

export default function WorksPage() {
  return (
    <>
      <ReactLenis root>
        <div className="flex flex-col h-full min-h-screen w-full items-center bg-[#d9d9d9]">
          <Works />
        </div>
      </ReactLenis>
    </>
  );
}
