"use client"
import VideoArchive from "@/components/my-components/archive";
import ReactLenis from "@studio-freight/react-lenis"

export default function Archive() {
  return (
    <>
      <ReactLenis root>
        <div className="flex flex-col h-full min-h-screen w-full items-center bg-[#1c1c1c]">
          <VideoArchive />
        </div>
      </ReactLenis>
    </>
  );
}
