"use client";
import { Kode_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const kodemonoFont = Kode_Mono({
  subsets: ["latin"],
  weight: "400",
});

function Navbar() {
  const pathname = usePathname();
  const router = useTransitionRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial reveal animations with staggered luxury entrance
    const tl = gsap.timeline({ delay: 0.2 });

    // Navbar container reveal
    if (navbarRef.current) {
      tl.fromTo(navbarRef.current,
        {
          opacity: 0,
          y: -100,
          backdropFilter: "blur(0px)",
        },
        {
          opacity: 1,
          y: 0,
          backdropFilter: "blur(20px)",
          duration: 1.2,
          ease: "power3.out"
        }
      );
    }

    // Logo (Papp Dávid) reveal
    if (logoRef.current) {
      tl.fromTo(logoRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotationY: -45,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "back.out(1.4)"
        },
        "-=0.8"
      );
    }

    // Navigation links reveal
    if (navLinksRef.current) {
      const links = navLinksRef.current.querySelectorAll('a');
      tl.fromTo(links,
        {
          opacity: 0,
          y: -30,
          scale: 0.8,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.6"
      );
    }

    // Contact/Menu button reveal
    if (contactRef.current) {
      tl.fromTo(contactRef.current,
        {
          opacity: 0,
          x: 50,
          scale: 0.7,
          filter: "blur(8px)"
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "elastic.out(1, 0.5)"
        },
        "-=0.4"
      );
    }

    if (mobileMenuRef.current) {
      tl.fromTo(mobileMenuRef.current,
        {
          opacity: 0,
          x: 50,
          scale: 0.7,
          filter: "blur(8px)"
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "elastic.out(1, 0.5)"
        },
        "-=0.4"
      );
    }
  }, []);

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)"
        },
        {
          opacity: 0.2,
          transform: "translateY(-100px)"
        },
      ], {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
        },
      ], {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)"
    }
    )
  }

  // Helper function to check if a route is active
  const isActive = (route: string) => {
    if (route === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(route);
  };

  // Check if we're on the archive page (dark mode)
  const isArchiveActive = pathname?.toLowerCase().startsWith("/archive");

  const handleNavigation = (route: string) => {
    setDrawerOpen(false);
    router.push(route, {
      onTransitionReady: slideInOut,
    });
  };

  return (
    <>
      <div
        ref={navbarRef}
        className={`fixed top-0 px-6 w-full ${kodemonoFont.className} z-50 backdrop-blur-xl`}
      >
        <div className="w-full py-2 flex justify-between items-center">
          <div className="w-36">
            <div
              ref={logoRef}
              data-magnetic="50"
              data-magnetic-strength="0.6"
              className="bg-[#e2404e] w-fit text-white px-2 py-1 font-mono font-semibold cursor-pointer transition-all duration-500 flex items-center hover:scale-110 hover:shadow-lg hover:shadow-[#e2404e]/30 transform-gpu"
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              Papp Dávid
            </div>
          </div>

          {/* Desktop Navigation */}
          <div ref={navLinksRef} className="hidden sm:flex gap-4 justify-center">
            <a
              href="/"
              data-magnetic="40"
              data-magnetic-strength="0.5"
              className={`hover:underline cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#e2404e] relative overflow-hidden group ${isActive("/")
                  ? "text-[#e2404e]"
                  : isArchiveActive ? "text-white" : "text-black"
                }`}
              onClick={(e) => {
                e.preventDefault();
                router.push("/", {
                  onTransitionReady: slideInOut,
                })
              }}
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e2404e]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>

            <a
              href="/works"
              data-magnetic="40"
              data-magnetic-strength="0.5"
              className={`hover:underline cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#e2404e] relative overflow-hidden group ${isActive("/works")
                  ? "text-[#e2404e]"
                  : isArchiveActive ? "text-white" : "text-black"
                }`}
              onClick={(e) => {
                e.preventDefault();
                router.push("/works", {
                  onTransitionReady: slideInOut,
                })
              }}
            >
              <span className="relative z-10">Works</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e2404e]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>

            <a
              href="/archive"
              data-magnetic="40"
              data-magnetic-strength="0.5"
              className={`hover:underline cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#e2404e] relative overflow-hidden group ${isActive("/archive")
                  ? "text-[#e2404e]"
                  : isArchiveActive ? "text-white" : "text-black"
                }`}
              onClick={(e) => {
                e.preventDefault();
                router.push("/archive", {
                  onTransitionReady: slideInOut,
                })
              }}
            >
              <span className="relative z-10">Archive</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e2404e]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>
          </div>

          {/* Desktop Contact */}
          <div ref={contactRef} className="w-36 hidden sm:flex justify-end">
            <a
              href="/contact"
              data-magnetic="40"
              data-magnetic-strength="0.7"
              onClick={(e) => {
                e.preventDefault();
                router.push("/contact", {
                  onTransitionReady: slideInOut,
                })
              }}
              className="w-fit border-2 border-[#e2404e] font-mono text-[#e2404e] hover:bg-[#e2404e] hover:text-white px-3 py-1 font-semibold cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#e2404e]/20 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-[#e2404e] -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </a>
          </div>

          {/* Mobile Menu Drawer */}
          <div ref={mobileMenuRef} className="w-36 flex sm:hidden justify-end">
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <div
                  data-magnetic="40"
                  data-magnetic-strength="0.7"
                  className="w-fit border-2 border-[#e2404e] font-mono text-[#e2404e] hover:bg-[#e2404e] hover:text-white px-3 py-1 font-semibold cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#e2404e]/20 relative overflow-hidden group backdrop-blur-2xl"
                >
                  <span className="relative z-10">Menu</span>
                  <span className="absolute inset-0 bg-[#e2404e] -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </div>
              </DrawerTrigger>
              <DrawerContent className="bg-[#d9d9d9] backdrop-blur-xl border-[#e2404e]/20">
                <DrawerHeader className="text-center border-b border-[#e2404e]/20 pb-4">
                  <DrawerTitle className={`text-black text-2xl ${kodemonoFont.className}`}>
                    Navigation
                  </DrawerTitle>
                  <DrawerDescription className="text-gray-600">
                    Choose your destination
                  </DrawerDescription>
                </DrawerHeader>
                
                <div className="flex flex-col space-y-4 p-6">
                  <button
                    onClick={() => handleNavigation("/")}
                    className={`${kodemonoFont.className} text-left py-4 px-4 rounded-lg border border-[#e2404e]/20 hover:border-[#e2404e] transition-all duration-300 hover:bg-[#e2404e]/10 group ${
                      isActive("/") ? "bg-[#e2404e]/20 border-[#e2404e] text-[#e2404e]" : "text-black"
                    }`}
                  >
                    <span className="text-lg font-semibold group-hover:text-[#e2404e] transition-colors">
                      About
                    </span>
                    <p className="text-sm text-gray-600 mt-1">Learn more about me</p>
                  </button>

                  <button
                    onClick={() => handleNavigation("/works")}
                    className={`${kodemonoFont.className} text-left py-4 px-4 rounded-lg border border-[#e2404e]/20 hover:border-[#e2404e] transition-all duration-300 hover:bg-[#e2404e]/10 group ${
                      isActive("/works") ? "bg-[#e2404e]/20 border-[#e2404e] text-[#e2404e]" : "text-black"
                    }`}
                  >
                    <span className="text-lg font-semibold group-hover:text-[#e2404e] transition-colors">
                      Works
                    </span>
                    <p className="text-sm text-gray-600 mt-1">View my projects</p>
                  </button>

                  <button
                    onClick={() => handleNavigation("/archive")}
                    className={`${kodemonoFont.className} text-left py-4 px-4 rounded-lg border border-[#e2404e]/20 hover:border-[#e2404e] transition-all duration-300 hover:bg-[#e2404e]/10 group ${
                      isActive("/archive") ? "bg-[#e2404e]/20 border-[#e2404e] text-[#e2404e]" : "text-black"
                    }`}
                  >
                    <span className="text-lg font-semibold group-hover:text-[#e2404e] transition-colors">
                      Archive
                    </span>
                    <p className="text-sm text-gray-600 mt-1">Browse older work</p>
                  </button>
                </div>

                <DrawerFooter className="border-t border-[#e2404e]/20 pt-4">
                  <button
                    onClick={() => handleNavigation("/contact")}
                    className={`${kodemonoFont.className} w-full bg-[#e2404e] text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#e2404e]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#e2404e]/30`}
                  >
                    Contact Me
                  </button>
                  <DrawerClose asChild>
                    <button className={`${kodemonoFont.className} w-full border border-[#e2404e]/40 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:border-[#e2404e] hover:text-black`}>
                      Close
                    </button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
