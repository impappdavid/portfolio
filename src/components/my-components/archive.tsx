"use client"
import React, { useState, useEffect, useRef } from "react";
import { Bebas_Neue, Kode_Mono } from "next/font/google";
import gsap from "gsap";

const customFont = Kode_Mono({ subsets: ["latin"], weight: "400" });
const customWeightFont = Kode_Mono({ subsets: ["latin"], weight: "700" });
const kodemonoFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });

type MediaType = "image" | "video";

interface TableRow {
    id: number;
    client: string;
    title: string;
    type: string;
    country: string;
    link: string,
    year: number;
    media: string;
    mediaType: MediaType;
}

const tableRows: TableRow[] = [
    {
        id: 1,
        client: "s00n",
        title: "s00n",
        type: "s00n",
        country: "s00n",
        link: "s00n",
        year: 2025,
        media: "",
        mediaType: "image",
    },
    {
        id: 2,
        client: "Fiverr.",
        title: "GamingWithMe",
        type: "FREELANCE",
        country: "EN",
        link: "https://gamingwithme.vercel.app/",
        year: 2025,
        media: "",
        mediaType: "image",
    },
    {
        id: 3,
        client: "PERSONAL",
        title: "AZURA",
        type: "CRYPTO",
        country: "HU",
        link: "https://github.com/impappdavid/Azura",
        year: 2024,
        media: "/projects/azura/azuraCover.mp4",
        mediaType: "video",
    },
    {
        id: 4,
        client: "PERSONAL",
        title: "CinemaView",
        type: "EXAM",
        country: "HU",
        link: "",
        year: 2023,
        media: "/projects/CinemaView/login.png",
        mediaType: "image",
    },
];

export default function VideoArchive() {
    const [hovered, setHovered] = useState<{ url: string; type: "image" | "video" } | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isRevealing, setIsRevealing] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);
    const mediaContainerRef = useRef<HTMLDivElement>(null);
    const currentVideoRef = useRef<HTMLVideoElement>(null);
    const glitchOverlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Title reveal animation
        if (titleRef.current) {
            gsap.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: -60,
                    rotationX: -30,
                    filter: "blur(12px)"
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    filter: "blur(0px)",
                    duration: 1.4,
                    ease: "power3.out"
                }
            );
        }

        // Table rows staggered reveal animation
        if (tableRef.current) {
            const rows = tableRef.current.querySelectorAll('.table-row');
            
            gsap.fromTo(rows,
                {
                    opacity: 0,
                    x: -100,
                    skewX: 15,
                    filter: "blur(6px)"
                },
                {
                    opacity: 1,
                    x: 0,
                    skewX: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power2.out",
                    delay: 0.5
                }
            );
        }
    }, []);

    const createGlitchAnimation = (): gsap.core.Timeline | null => {
        if (!mediaContainerRef.current || !glitchOverlayRef.current) return null;

        const tl = gsap.timeline();

        // Initial glitch reveal
        tl.set(mediaContainerRef.current, {
            opacity: 0,
            scale: 0.8,
            rotationY: 25,
            filter: "blur(10px) contrast(2) saturate(0)"
        })
        .set(glitchOverlayRef.current, {
            opacity: 1
        })
        // Glitch distortion phase
        .to(mediaContainerRef.current, {
            opacity: 0.3,
            scale: 1.05,
            rotationY: -5,
            x: "random(-10, 10)",
            y: "random(-5, 5)",
            filter: "blur(3px) contrast(3) saturate(2) hue-rotate(90deg)",
            duration: 0.1,
            ease: "power2.inOut"
        })
        .to(mediaContainerRef.current, {
            x: "random(-15, 15)",
            y: "random(-8, 8)",
            scaleX: 0.98,
            scaleY: 1.02,
            filter: "blur(2px) contrast(4) saturate(0.5) hue-rotate(180deg)",
            duration: 0.08,
            ease: "power2.inOut"
        })
        .to(mediaContainerRef.current, {
            x: "random(-20, 20)",
            y: "random(-10, 10)",
            scaleX: 1.03,
            scaleY: 0.97,
            filter: "blur(5px) contrast(2.5) saturate(3) hue-rotate(270deg)",
            duration: 0.06,
            ease: "power2.inOut"
        })
        // RGB split effect
        .to(mediaContainerRef.current, {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            rotationY: 0,
            filter: "blur(1px) contrast(1.5) saturate(1.2)",
            duration: 0.15,
            ease: "power2.out"
        })
        // Final reveal
        .to([mediaContainerRef.current, glitchOverlayRef.current], {
            opacity: 0.6,
            scale: 1,
            filter: "blur(0px) contrast(1) saturate(1) hue-rotate(0deg)",
            duration: 0.3,
            ease: "power2.out"
        })
        .to(glitchOverlayRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        }, "-=0.1");

        return tl;
    };

    const handleMouseEnter = (media: string, type: MediaType) => {
        setIsHovering(true);
        setIsRevealing(true);
        
        // Only set hovered if there's actual media content
        if (media && media.trim() !== "") {
            setHovered({ url: media, type });
        } else {
            // Show "s00n" text for empty media
            setHovered({ url: "s00n", type: "image" });
        }

        // Kill any existing animations and start glitch reveal
        if (mediaContainerRef.current) {
            gsap.killTweensOf(mediaContainerRef.current);
            gsap.killTweensOf(glitchOverlayRef.current);
            
            const glitchTl = createGlitchAnimation();
            
            // Check if glitchTl exists before using it
            if (glitchTl) {
                glitchTl.eventCallback("onComplete", () => {
                    setIsRevealing(false);
                });
            } else {
                // Fallback if animation couldn't be created
                setIsRevealing(false);
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setIsRevealing(false);
        
        if (mediaContainerRef.current && glitchOverlayRef.current) {
            gsap.killTweensOf(mediaContainerRef.current);
            gsap.killTweensOf(glitchOverlayRef.current);
            
            // Quick glitch out effect
            const tl = gsap.timeline();
            tl.to(mediaContainerRef.current, {
                scale: 0.9,
                opacity: 0.2,
                rotationY: 15,
                x: "random(-5, 5)",
                filter: "blur(8px) contrast(0.5) saturate(0)",
                duration: 0.1,
                ease: "power2.in"
            })
            .to(mediaContainerRef.current, {
                opacity: 0,
                scale: 0.8,
                x: 0,
                y: 0,
                duration: 0.2,
                ease: "power2.in",
                onComplete: () => {
                    setHovered(null);
                }
            });
        } else {
            setHovered(null);
        }
    };

    return (
        <>
            {/* CSS for glitch effects */}
            <style jsx>{`
                .glitch-overlay {
                    background: repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2px,
                        rgba(255, 0, 0, 0.03) 2px,
                        rgba(255, 0, 0, 0.03) 4px,
                        transparent 4px,
                        transparent 6px,
                        rgba(0, 255, 0, 0.03) 6px,
                        rgba(0, 255, 0, 0.03) 8px,
                        transparent 8px,
                        transparent 10px,
                        rgba(0, 0, 255, 0.03) 10px,
                        rgba(0, 0, 255, 0.03) 12px
                    );
                    animation: glitch-scan 0.1s linear infinite;
                }
                
                @keyframes glitch-scan {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(2px); }
                }
                
                .rgb-split {
                    position: relative;
                }
                
                .rgb-split::before,
                .rgb-split::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: inherit;
                    opacity: 0.8;
                    mix-blend-mode: screen;
                }
                
                .rgb-split::before {
                    transform: translateX(-2px);
                    filter: sepia(1) hue-rotate(180deg) saturate(2);
                }
                
                .rgb-split::after {
                    transform: translateX(2px);
                    filter: sepia(1) hue-rotate(90deg) saturate(2);
                }
            `}</style>

            <div className="flex flex-col px-6 w-full gap-6 pt-20 text-neutral-100 font-mono">
                <div className="w-full py-2" ref={titleRef}>
                    <div
                        className={`text-5xl sm:text-7xl flex justify-between tracking-wider text-white ${kodemonoFont.className} text-center`}
                    >
                        <div>PROJECT</div>
                        <div>ARCHIVE</div>
                    </div>
                </div>

                {/* Fixed background media container with glitch effects */}
                <div
                    ref={mediaContainerRef}
                    aria-hidden="true"
                    className="fixed inset-0 z-10 flex justify-center items-center pointer-events-none"
                    style={{
                        opacity: (hovered && isHovering) ? 0.6 : 0,
                    }}
                >
                    {/* Glitch overlay */}
                    <div
                        ref={glitchOverlayRef}
                        className="absolute inset-0 glitch-overlay opacity-0 z-20"
                    />
                    
                    <div className={`max-w-4xl w-full aspect-video transform-gpu ${isRevealing ? 'rgb-split' : ''}`}>
                        {hovered?.url === "s00n" ? (
                            <div className="w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg border border-white/20">
                                <span className={`text-6xl text-white/70 ${kodemonoFont.className} tracking-wider`}>
                                    s00n
                                </span>
                            </div>
                        ) : hovered?.type === "image" && hovered?.url ? (
                            <div
                                className="w-full h-full bg-cover bg-center shadow-2xl rounded-lg border border-white/20"
                                style={{ backgroundImage: `url(${hovered.url})` }}
                            />
                        ) : hovered?.type === "video" && hovered?.url && isHovering ? (
                            <video
                                ref={currentVideoRef}
                                className="w-full h-full object-cover shadow-2xl rounded-lg border border-white/20"
                                autoPlay
                                loop
                                muted
                                playsInline
                                src={hovered.url}
                                onLoadedData={() => {
                                    // Ensure video plays when loaded
                                    if (currentVideoRef.current && isHovering) {
                                        currentVideoRef.current.play().catch(console.error);
                                    }
                                }}
                            />
                        ) : null}
                    </div>
                </div>

                <div className="relative z-20 w-full mx-auto py-16" ref={tableRef}>
                    <div className="w-full">
                        {tableRows.map((row, i) => (
                            <div
                                key={row.id}
                                className={`
                                    grid lg:grid-cols-7 
                                    text-zinc-400
                                    transition-all duration-300
                                    relative
                                    before:absolute before:left-0 before:right-0 before:top-0 before:h-[1px]
                                    before:bg-zinc-400 before:opacity-0 before:transition-all before:duration-300
                                    after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px]
                                    after:bg-zinc-400 after:opacity-0 after:transition-all after:duration-300
                                    hover:text-white
                                    hover:before:opacity-100
                                    hover:after:opacity-100
                                    hover:scale-[1.01]
                                    hover:shadow-lg
                                    cursor-pointer
                                `}
                                onMouseEnter={() => handleMouseEnter(row.media, row.mediaType)}
                                onMouseLeave={handleMouseLeave}
                                data-magnetic="40"
                                data-magnetic-strength="0.3"
                            >
                                <div className={`py-2 px-6 transition-all duration-300 hover:text-cyan-400 ${customWeightFont.className}`}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className={`py-2 px-6 transition-all duration-300 hover:text-green-400 ${customFont.className}`}>
                                    {row.client}
                                </div>
                                <div className={`py-2 px-6 transition-all duration-300 hover:text-yellow-400 ${customFont.className}`}>
                                    {row.title}
                                </div>
                                <div className={`py-2 px-6 transition-all duration-300 hover:text-purple-400 ${customFont.className}`}>
                                    {row.type}
                                </div>
                                <div className={`py-2 px-6 flex transition-all duration-300 hover:text-pink-400 ${customFont.className}`}>
                                    {row.country}
                                </div>
                                {row.link.length > 0 && row.link !== "s00n" ? (
                                    <a 
                                        href={row.link} 
                                        target="_blank" 
                                        className={`py-2 px-6 flex text-xs items-center underline cursor-pointer hover:text-sky-500 ${customFont.className}`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {row.link}
                                    </a>
                                ) : (
                                    <div className=""></div>
                                )}
                                <div className={`py-2 px-6 flex justify-end transition-all duration-300 hover:text-orange-400 ${customFont.className}`}>
                                    {row.year}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
