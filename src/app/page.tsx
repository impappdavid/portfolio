"use client"
import Navbar from "@/components/my-components/global/Navbar";
import ReactLenis from "@studio-freight/react-lenis"

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="flex flex-col items-center bg-zinc-950 w-full h-screen p-2">
          <div className="w-full bg-zinc-200 h-screen rounded-2xl p-2 flex flex-col gap-4">
              <Navbar />
          </div>
        </div>
      </ReactLenis>
    </>
  );
}
