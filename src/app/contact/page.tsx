"use client"
import ContactButterfly from "@/components/my-components/contact";
import ReactLenis from "@studio-freight/react-lenis"

export default function Contact() {
  return (
    <>
      <ReactLenis root>
        <div className="flex flex-col h-full sm:h-screen justify-center w-full items-center bg-[#d9d9d9]">
          <ContactButterfly />
        </div>
      </ReactLenis>
    </>
  );
}
