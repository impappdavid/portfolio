'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bebas_Neue, Kode_Mono } from "next/font/google"

const kodemonoFont = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
})

const customFont = Kode_Mono({
    subsets: ["latin"],
    weight: "400",
})

// Custom hook for hack text animation
const useHackText = (originalText: string, isHovering: boolean): string => {
    const [displayText, setDisplayText] = useState<string>(originalText);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    
    useEffect(() => {
        if (isHovering && !isAnimating) {
            setIsAnimating(true);
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}<?>';
            let iteration = 0;
            
            const interval = setInterval(() => {
                setDisplayText(
                    originalText
                        .split('')
                        .map((char: string, index: number) => {
                            if (index < iteration) {
                                return originalText[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );
                
                if (iteration >= originalText.length) {
                    clearInterval(interval);
                    setDisplayText(originalText);
                    setIsAnimating(false);
                }
                
                iteration += 1 / 3;
            }, 50);
            
            return () => clearInterval(interval);
        } else if (!isHovering && !isAnimating) {
            setDisplayText(originalText);
        }
    }, [isHovering, originalText, isAnimating]);
    
    return displayText;
};

// Props interface for HackText component
interface HackTextProps {
    children: string;
    className?: string;
    href?: string;
    target?: string;
    rel?: string;
    [key: string]: any;
}

const HackText: React.FC<HackTextProps> = ({ children, className, href, ...props }) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const hackText = useHackText(children, isHovering);
    
    const Component = href ? 'a' : 'div';
    
    return (
        <Component
            className={className}
            href={href}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            {...props}
        >
            {hackText}
        </Component>
    );
};

const ContactButterfly: React.FC = () => {
    const [butterflyVisible, setButterflyVisible] = useState<boolean>(false);
    const [infoVisible, setInfoVisible] = useState<boolean>(false);

    useEffect(() => {
        const butterflyTimer = setTimeout(() => {
            setButterflyVisible(true);
        }, 800);

        const infoTimer = setTimeout(() => {
            setInfoVisible(true);
        }, 2500);

        return () => {
            clearTimeout(butterflyTimer);
            clearTimeout(infoTimer);
        };
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Beautiful Butterfly Animation */}
            <motion.div
                className="absolute z-0"
                initial={{ 
                    y: 400,
                    x: 0,
                    scale: 0.4, 
                    opacity: 0 
                }}
                animate={butterflyVisible ? {
                    y: -50,
                    x: 0,
                    scale: 2.2,
                    opacity: 0.3,
                    transition: {
                        type: "spring",
                        damping: 18,
                        stiffness: 45,
                        duration: 3.5,
                        ease: "easeOut"
                    }
                } : {}}
            >
                {/* Butterfly with smooth wing animation */}
                <motion.div
                    animate={{
                        scaleY: [1, 0.92, 1],
                        scaleX: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                >
                    <ElegantButterflyIcon />
                </motion.div>
                
                {/* Gentle floating motion */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        y: [0, -18, 0],
                        x: [0, 12, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                />
            </motion.div>

            {/* Contact Information */}
            <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={infoVisible ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    }
                } : {}}
            >
                <div className="flex flex-col gap-6">
                    <motion.div 
                        className={`text-7xl flex justify-center tracking-wider ${kodemonoFont.className} text-center`}
                        initial={{ opacity: 0 }}
                        animate={infoVisible ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {"PAPP DÁVID".split('').map((char: string, index: number) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={infoVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ 
                                    delay: 0.3 + index * 0.04,
                                    duration: 0.4
                                }}
                                className="inline-block"
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="flex flex-col text-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={infoVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <HackText className={`flex justify-center tracking-wider ${customFont.className} text-center mb-2`}>
                            Connect
                        </HackText>
                        
                        <HackText 
                            href="tel:+36303292678"
                            className={`underline hover:text-[#e2404e] transition-colors cursor-pointer ${customFont.className}`}
                        >
                            +36 30 329 2678
                        </HackText>
                        
                        <HackText 
                            href="mailto:impappdavid@gmail.com"
                            className={`underline hover:text-[#e2404e] transition-colors cursor-pointer ${customFont.className}`}
                        >
                            impappdavid@gmail.com
                        </HackText>
                    </motion.div>

                    <motion.div 
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={infoVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.1, duration: 0.4 }}
                    >
                        <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="36" 
                            height="36" 
                            viewBox="0 0 24 24" 
                            className='fill-[#e2404e]'
                            whileHover={{ 
                                scale: 1.2, 
                                rotate: 180,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <path d="M1 21h22L12 2" />
                        </motion.svg>
                    </motion.div>

                    <motion.div 
                        className="flex justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={infoVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.4, duration: 0.5 }}
                    >
                        <HackText 
                            href="https://www.linkedin.com/in/david-papp-726a09267/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`underline hover:text-[#e2404e] transition-colors cursor-pointer ${customFont.className}`}
                        >
                            LinkedIn
                        </HackText>

                        <HackText 
                            href="https://www.fiverr.com/impappdavid?public_mode=true" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`underline hover:text-green-600 transition-colors cursor-pointer ${customFont.className}`}
                        >
                            Fiverr.
                        </HackText>
                        
                        <HackText 
                            href="https://github.com/impappdavid" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`underline hover:text-[#e2404e] transition-colors cursor-pointer ${customFont.className}`}
                        >
                            GitHub
                        </HackText>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

// ELEGANT BUTTERFLY - Perfect Balance of Detail and Simplicity
const ElegantButterflyIcon: React.FC = () => (
    <svg
        width="180"
        height="150"
        viewBox="0 0 160 130"
        className="drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 8px 20px rgba(226, 64, 78, 0.4))' }}
    >
        <defs>
            {/* Beautiful gradient with your red theme */}
            <radialGradient id="wingGradient" cx="40%" cy="30%" r="70%">
                <stop offset="0%" style={{ stopColor: '#fef2f2', stopOpacity: 0.9 }} />
                <stop offset="25%" style={{ stopColor: '#fecaca', stopOpacity: 0.95 }} />
                <stop offset="50%" style={{ stopColor: '#f87171', stopOpacity: 1 }} />
                <stop offset="75%" style={{ stopColor: '#e2404e', stopOpacity: 0.95 }} />
                <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 0.8 }} />
            </radialGradient>
            
            <radialGradient id="lowerWingGradient" cx="50%" cy="40%" r="60%">
                <stop offset="0%" style={{ stopColor: '#fed7d7', stopOpacity: 0.85 }} />
                <stop offset="40%" style={{ stopColor: '#fca5a5', stopOpacity: 0.9 }} />
                <stop offset="80%" style={{ stopColor: '#e2404e', stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: '#991b1b', stopOpacity: 0.7 }} />
            </radialGradient>

            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#7f1d1d', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#991b1b', stopOpacity: 0.95 }} />
                <stop offset="100%" style={{ stopColor: '#450a0a', stopOpacity: 0.9 }} />
            </linearGradient>

            {/* Subtle shadow */}
            <filter id="butterflyGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>

        <g className="elegant-butterfly" filter="url(#butterflyGlow)">
            {/* LEFT UPPER WING - Elegant curved shape */}
            <path
                d="M40 65 C25 45 15 30 12 25 C10 20 12 16 16 15 C22 14 30 18 38 28 C45 38 48 52 46 62 C43 66 41 66 40 65 Z"
                fill="url(#wingGradient)"
                className="opacity-85"
            />
            
            {/* RIGHT UPPER WING - Mirror image */}
            <path
                d="M120 65 C135 45 145 30 148 25 C150 20 148 16 144 15 C138 14 130 18 122 28 C115 38 112 52 114 62 C117 66 119 66 120 65 Z"
                fill="url(#wingGradient)"
                className="opacity-85"
            />

            {/* LEFT LOWER WING - Rounded teardrop */}
            <path
                d="M40 65 C32 78 26 88 24 93 C23 97 25 100 29 100 C35 100 42 95 47 87 C49 82 48 76 46 72 C44 68 42 66 40 65 Z"
                fill="url(#lowerWingGradient)"
                className="opacity-80"
            />
            
            {/* RIGHT LOWER WING - Rounded teardrop */}
            <path
                d="M120 65 C128 78 134 88 136 93 C137 97 135 100 131 100 C125 100 118 95 113 87 C111 82 112 76 114 72 C116 68 118 66 120 65 Z"
                fill="url(#lowerWingGradient)"
                className="opacity-80"
            />

            {/* Wing Pattern Details */}
            {/* Upper wing eye spots */}
            <ellipse cx="28" cy="40" rx="5" ry="7" fill="#991b1b" className="opacity-60" />
            <ellipse cx="132" cy="40" rx="5" ry="7" fill="#991b1b" className="opacity-60" />
            <ellipse cx="28" cy="40" rx="2.5" ry="3.5" fill="white" className="opacity-80" />
            <ellipse cx="132" cy="40" rx="2.5" ry="3.5" fill="white" className="opacity-80" />
            <circle cx="28" cy="40" r="1.2" fill="#450a0a" className="opacity-90" />
            <circle cx="132" cy="40" r="1.2" fill="#450a0a" className="opacity-90" />
            
            {/* Wing veins - Natural curves */}
            <path d="M40 65 C35 52 32 40 30 30" stroke="#dc2626" strokeWidth="0.8" fill="none" className="opacity-50" />
            <path d="M40 65 C37 55 34 45 32 35" stroke="#dc2626" strokeWidth="0.6" fill="none" className="opacity-40" />
            <path d="M40 65 C42 55 44 45 45 35" stroke="#dc2626" strokeWidth="0.6" fill="none" className="opacity-40" />
            
            <path d="M120 65 C125 52 128 40 130 30" stroke="#dc2626" strokeWidth="0.8" fill="none" className="opacity-50" />
            <path d="M120 65 C123 55 126 45 128 35" stroke="#dc2626" strokeWidth="0.6" fill="none" className="opacity-40" />
            <path d="M120 65 C118 55 116 45 115 35" stroke="#dc2626" strokeWidth="0.6" fill="none" className="opacity-40" />

            {/* Lower wing spots */}
            <ellipse cx="32" cy="85" rx="3" ry="2" fill="white" className="opacity-60" transform="rotate(-20 32 85)" />
            <ellipse cx="128" cy="85" rx="3" ry="2" fill="white" className="opacity-60" transform="rotate(20 128 85)" />
            <circle cx="28" cy="92" r="1.8" fill="#fecaca" className="opacity-50" />
            <circle cx="132" cy="92" r="1.8" fill="#fecaca" className="opacity-50" />

            {/* BODY - Segmented and realistic */}
            <ellipse cx="80" cy="65" rx="4" ry="28" fill="url(#bodyGradient)" />
            
            {/* Body segments */}
            <ellipse cx="80" cy="55" rx="3" ry="1.2" fill="#7f1d1d" className="opacity-70" />
            <ellipse cx="80" cy="60" rx="3.2" ry="1.2" fill="#7f1d1d" className="opacity-65" />
            <ellipse cx="80" cy="65" rx="3.5" ry="1.2" fill="#7f1d1d" className="opacity-60" />
            <ellipse cx="80" cy="70" rx="3.2" ry="1.2" fill="#7f1d1d" className="opacity-55" />
            <ellipse cx="80" cy="75" rx="2.8" ry="1.2" fill="#7f1d1d" className="opacity-50" />

            {/* HEAD - Proportional and detailed */}
            <ellipse cx="80" cy="45" rx="4.5" ry="3.5" fill="url(#bodyGradient)" />
            
            {/* Compound eyes */}
            <ellipse cx="77" cy="43" rx="1.8" ry="2.2" fill="#450a0a" className="opacity-90" />
            <ellipse cx="83" cy="43" rx="1.8" ry="2.2" fill="#450a0a" className="opacity-90" />
            <ellipse cx="77" cy="43" rx="0.8" ry="1" fill="white" className="opacity-50" />
            <ellipse cx="83" cy="43" rx="0.8" ry="1" fill="white" className="opacity-50" />

            {/* ANTENNAE - Graceful curves */}
            <path 
                d="M77 42 C74 36 70 31 66 28 C64 26 63 25 62 24" 
                stroke="#450a0a" 
                strokeWidth="1.2" 
                fill="none" 
                strokeLinecap="round"
            />
            <path 
                d="M83 42 C86 36 90 31 94 28 C96 26 97 25 98 24" 
                stroke="#450a0a" 
                strokeWidth="1.2" 
                fill="none" 
                strokeLinecap="round"
            />
            
            {/* Antennal clubs */}
            <ellipse cx="62" cy="24" rx="2" ry="1.5" fill="#7f1d1d" transform="rotate(-30 62 24)" />
            <ellipse cx="98" cy="24" rx="2" ry="1.5" fill="#7f1d1d" transform="rotate(30 98 24)" />

            {/* Wing edge highlights for depth */}
            <path d="M40 65 C30 50 20 35 16 25" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" className="opacity-60" />
            <path d="M120 65 C130 50 140 35 144 25" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" className="opacity-60" />

            {/* Subtle wing texture details */}
            <circle cx="22" cy="55" r="1" fill="rgba(255,255,255,0.3)" className="opacity-40" />
            <circle cx="138" cy="55" r="1" fill="rgba(255,255,255,0.3)" className="opacity-40" />
            <circle cx="35" cy="48" r="0.8" fill="#fecaca" className="opacity-35" />
            <circle cx="125" cy="48" r="0.8" fill="#fecaca" className="opacity-35" />
        </g>
    </svg>
);

export default ContactButterfly;
