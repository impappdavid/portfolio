"use client";
import Intro from "@/components/my-components/home/Intro";
import ReactLenis from "@studio-freight/react-lenis";
import localFont from "next/font/local";



const spleen = localFont({
  src: "./fonts/spleen.otf",
  variable: "--font-spleen",
});

export default function Home() {
  // Quadratic Bezier Control Points:
  // Start: (20, 130), Control Point/Gravitational Pull: (150, 0), End: (280, 130)
  

  return (
    <>
      <ReactLenis root>
        <div
          className={`flex flex-col items-center text-2xl bg-[#0d0d0f] w-full text-white h-screen max-h-screen p-14 gap-4 ${spleen.variable}`}
        >
          <div className="w-full max-w-6xl border border-zinc-800 h-screen flex">
            <Intro />
            <div className="min-w-16 h-fill p-2 border-x border-zinc-800 text-white">
              
            </div>
            <div className="w-full h-fill p-2 "></div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
}