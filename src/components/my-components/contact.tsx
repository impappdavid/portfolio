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
            {/* Simple Black Butterfly Animation with Opacity */}
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
                    opacity: 0.15, // Reduced opacity so text remains readable
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
                    <SimpleBlackButterfly />
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

// Simple Black Butterfly with proper opacity
const SimpleBlackButterfly: React.FC = () => (
    <svg
        width="230"
        height="200"
        viewBox="0 0 180 150"
        className="drop-shadow-lg"
    >
        <defs>
            {/* Simple black gradient for depth */}
            <radialGradient id="blackWingGradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#1f2937', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#111827', stopOpacity: 1 }} />
            </radialGradient>
            
            <linearGradient id="blackBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
            </linearGradient>
        </defs>

        <g className="simple-butterfly">
            {/* LEFT UPPER WING - Natural butterfly shape */}
            <path
                d="M90 75 C85 65 80 55 75 45 C70 35 65 25 55 20 C45 15 35 18 30 25 C25 32 28 40 35 45 C45 50 55 55 65 62 C75 68 85 72 90 75 Z"
                fill="url(#blackWingGradient)"
            />
            
            {/* RIGHT UPPER WING - Mirror of left wing */}
            <path
                d="M90 75 C95 65 100 55 105 45 C110 35 115 25 125 20 C135 15 145 18 150 25 C155 32 152 40 145 45 C135 50 125 55 115 62 C105 68 95 72 90 75 Z"
                fill="url(#blackWingGradient)"
            />

            {/* LEFT LOWER WING - Smaller, rounded lower wing */}
            <path
                d="M90 75 C88 80 85 85 80 90 C75 95 70 98 65 100 C58 102 52 100 50 95 C48 90 52 85 58 82 C65 78 72 76 80 76 C85 76 88 75 90 75 Z"
                fill="url(#blackWingGradient)"
            />
            
            {/* RIGHT LOWER WING - Mirror of left lower wing */}
            <path
                d="M90 75 C92 80 95 85 100 90 C105 95 110 98 115 100 C122 102 128 100 130 95 C132 90 128 85 122 82 C115 78 108 76 100 76 C95 76 92 75 90 75 Z"
                fill="url(#blackWingGradient)"
            />

            {/* BODY - Elongated oval */}
            <ellipse cx="90" cy="75" rx="3" ry="30" fill="url(#blackBodyGradient)" />
            
            {/* HEAD - Smaller, proportional */}
            <ellipse cx="90" cy="50" rx="4" ry="5" fill="#111827" />
            
            {/* ANTENNAE - Curved like real butterfly antennae */}
            <path 
                d="M87 48 C85 42 82 38 78 35 C76 33 74 32 72 32" 
                stroke="#000000" 
                strokeWidth="1.5" 
                fill="none" 
                strokeLinecap="round"
            />
            <path 
                d="M93 48 C95 42 98 38 102 35 C104 33 106 32 108 32" 
                stroke="#000000" 
                strokeWidth="1.5" 
                fill="none" 
                strokeLinecap="round"
            />
            
            {/* Antennal clubs - Small oval tips */}
            <ellipse cx="72" cy="32" rx="2" ry="1" fill="#111827" />
            <ellipse cx="108" cy="32" rx="2" ry="1" fill="#111827" />

            {/* Simple wing spots for realism */}
            <circle cx="65" cy="50" r="3" fill="#111827" opacity="0.3" />
            <circle cx="115" cy="50" r="3" fill="#111827" opacity="0.3" />
            <circle cx="75" cy="88" r="2" fill="#111827" opacity="0.2" />
            <circle cx="105" cy="88" r="2" fill="#111827" opacity="0.2" />
        </g>
    </svg>
);


export default ContactButterfly;
