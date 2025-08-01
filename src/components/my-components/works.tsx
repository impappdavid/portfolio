"use client"
import React, { useRef, useEffect } from "react";
import { Bebas_Neue, Kode_Mono} from "next/font/google";
import gsap from "gsap";

const customFont = Kode_Mono({ subsets: ["latin"], weight: "400" });
const customWeightFont = Kode_Mono({ subsets: ["latin"], weight: "700" });
const kodemonoFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });

function HoverVideo({
    src,
    poster,
}: {
    src: string;
    poster?: string;
}) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) videoRef.current.play();
    };
    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <video
            ref={videoRef}
            src={src}
            muted
            loop
            preload="metadata"
            poster={poster}
            className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            style={{ maxHeight: 300, objectFit: "cover", width: "100%" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
}

function Works() {
    const titleRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Title animation
        if (titleRef.current) {
            gsap.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: -50,
                    rotationX: -45,
                    filter: "blur(10px)"
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out"
                }
            );
        }

        // Card animations with staggered delays
        const cards = [
            { ref: card1Ref, delay: 0.3 },
            { ref: card2Ref, delay: 0.6 },
            { ref: card3Ref, delay: 0.9 }
        ];

        cards.forEach(({ ref, delay }) => {
            if (ref.current) {
                // Initial reveal animation
                gsap.fromTo(ref.current,
                    {
                        opacity: 0,
                        y: 80,
                        scale: 0.8,
                        rotationY: -15,
                        filter: "blur(8px) brightness(0.5)",
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotationY: 0,
                        filter: "blur(0px) brightness(1)",
                        duration: 1.4,
                        delay,
                        ease: "back.out(1.2)",
                    }
                );

                // Set up hover animations
                const cardElement = ref.current;
                const titleElement = cardElement.querySelector('.card-title');
                const contentElement = cardElement.querySelector('.card-content');

                if (titleElement && contentElement) {
                    const handleMouseEnter = () => {
                        // Title hover effect
                        gsap.to(titleElement, {
                            scale: 1.03,
                            color: "#e2404e",
                            textShadow: "0 0 20px rgba(255,215,0,0.5)",
                            duration: 0.3,
                            ease: "power2.out"
                        });

                        // Content hover effect
                        gsap.to(contentElement, {
                            scale: 1.01,
                            filter: "brightness(1.1) contrast(1.1)",
                            duration: 0.3,
                            ease: "power2.out"
                        });

                        // Card container effect
                        gsap.to(cardElement, {
                            y: -5,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    };

                    const handleMouseLeave = () => {
                        // Reset title
                        gsap.to(titleElement, {
                            scale: 1,
                            color: "",
                            textShadow: "none",
                            duration: 0.3,
                            ease: "power2.out"
                        });

                        // Reset content
                        gsap.to(contentElement, {
                            scale: 1,
                            filter: "brightness(1) contrast(1)",
                            duration: 0.3,
                            ease: "power2.out"
                        });

                        // Reset card container
                        gsap.to(cardElement, {
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    };

                    cardElement.addEventListener('mouseenter', handleMouseEnter);
                    cardElement.addEventListener('mouseleave', handleMouseLeave);

                    // Cleanup event listeners
                    return () => {
                        cardElement.removeEventListener('mouseenter', handleMouseEnter);
                        cardElement.removeEventListener('mouseleave', handleMouseLeave);
                    };
                }
            }
        });
    }, []);

    return (
        <div className="flex flex-col px-6 w-full gap-6 pt-20">
            <div className="w-full py-2" ref={titleRef}>
                <div
                    className={`text-5xl sm:text-7xl flex justify-between tracking-wider text-[#1e1e1e] ${kodemonoFont.className} text-center`}
                >
                    <div>WORKS</div>
                    <div>OVERVIEW</div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="flex flex-col cursor-pointer" ref={card1Ref}>
                    <div className={`${customFont.className} flex gap-2 items-center card-title transition-all duration-300`}>
                        <span className={`${customWeightFont.className} font-semibold`}>
                            01{" "}
                        </span>
                        GamingWithMe
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" className="fill-orange-500 items-center">
                            <path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                        </svg>
                        <span className={`${customWeightFont.className} flex items-end`}>
                            Fiverr.
                        </span>
                    </div>
                    <div className={`h-full min-h-[200px] max-h-[300px] w-full bg-black text-green-500 text-3xl flex justify-center items-center ${customWeightFont.className} card-content transition-all duration-300`}>
                        GamingWithMe
                    </div>
                </div>

                {/* Card 2  */}
                <div className="flex flex-col cursor-pointer" data-video ref={card2Ref}>
                    <div className={`${customFont.className} flex gap-2 items-center card-title transition-all duration-300`}>
                        <span className={`${customWeightFont.className} font-semibold`}>
                            02{" "}
                        </span>
                        AZURA
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" className="fill-green-500 items-center">
                            <path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                        </svg>
                        <span className={`${customWeightFont.className} flex items-end`}>
                            Personal
                        </span>
                    </div>
                    <div className="card-content">
                        <HoverVideo
                            
                            src="/projects/azura/azuraCover.mp4"
                            poster="/projects/azura/cover.png"
                        />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col cursor-not-allowed" ref={card3Ref}>
                    <div className={`${customFont.className} flex gap-2 items-center card-title transition-all duration-300`}>
                        <span className={`${customWeightFont.className} font-semibold`}>
                            03{" "}
                        </span>
                        CinemaView
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" className="fill-green-500 items-center">
                            <path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                        </svg>
                        <span className={`${customWeightFont.className} flex items-end`}>
                            School exam
                        </span>
                    </div>
                    <img
                        src="/projects/CinemaView/login.png"
                        alt="CinemaView"
                        width="100%"
                        style={{ maxHeight: 300, objectFit: "cover" }}
                        className="card-content transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
}

export default Works;
