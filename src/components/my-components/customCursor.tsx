"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface MagneticTarget {
    element: HTMLElement
    centerX: number
    centerY: number
    distance: number
}

function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
    const [isAttracting, setIsAttracting] = useState(false)
    const [isPlayMode, setIsPlayMode] = useState(false)
    const [targetElement, setTargetElement] = useState<HTMLElement | null>(null)
    const [selectionBox, setSelectionBox] = useState<{
        x: number
        y: number
        width: number
        height: number
        visible: boolean
    }>({ x: 0, y: 0, width: 0, height: 0, visible: false })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const newMousePosition = { x: e.clientX, y: e.clientY }
            setMousePosition(newMousePosition)

            const magneticElements = Array.from(document.querySelectorAll('[data-magnetic]')) as HTMLElement[]
            let foundTarget: MagneticTarget | null = null
            let minDistance = Infinity
            
            for (const element of magneticElements) {
                const rect = element.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                
                // Get separate width and height for magnetic field
                const magneticWidthAttr = element.getAttribute('data-magnetic-width')
                const magneticHeightAttr = element.getAttribute('data-magnetic-height')
                const magneticAttr = element.getAttribute('data-magnetic')
                
                const magneticWidth = magneticWidthAttr ? parseInt(magneticWidthAttr, 10) : 
                                   (magneticAttr ? parseInt(magneticAttr, 10) : 100)
                const magneticHeight = magneticHeightAttr ? parseInt(magneticHeightAttr, 10) : 
                                    (magneticAttr ? parseInt(magneticAttr, 10) : 100)
                
                // Calculate elliptical distance for different width/height
                const normalizedX = (e.clientX - centerX) / magneticWidth
                const normalizedY = (e.clientY - centerY) / magneticHeight
                const distance = Math.sqrt(normalizedX * normalizedX + normalizedY * normalizedY)
                
                if (distance < 1 && distance < minDistance) {
                    foundTarget = { element, centerX, centerY, distance }
                    minDistance = distance
                }
            }

            if (foundTarget) {
                const { centerX, centerY, distance, element } = foundTarget
                
                const magneticWidthAttr = element.getAttribute('data-magnetic-width')
                const magneticHeightAttr = element.getAttribute('data-magnetic-height')
                const magneticAttr = element.getAttribute('data-magnetic')
                const strengthAttr = element.getAttribute('data-magnetic-strength')
                
                const magneticWidth = magneticWidthAttr ? parseInt(magneticWidthAttr, 10) : 
                                   (magneticAttr ? parseInt(magneticAttr, 10) : 100)
                const magneticHeight = magneticHeightAttr ? parseInt(magneticHeightAttr, 10) : 
                                    (magneticAttr ? parseInt(magneticAttr, 10) : 100)
                const attractionStrength = strengthAttr ? parseFloat(strengthAttr) : 0.6
                
                // Check if this is a video element - FIXED boolean conversion
                const isVideo = element.hasAttribute('data-video') || 
                              !!element.querySelector('video') || 
                              element.classList.contains('video-element') ||
                              element.tagName.toLowerCase() === 'video'
                
                // Calculate magnetic pull strength
                const pullX = centerX + (e.clientX - centerX) * (1 - distance * attractionStrength)
                const pullY = centerY + (e.clientY - centerY) * (1 - distance * attractionStrength)
                
                // Create selection box around the target element
                const rect = element.getBoundingClientRect()
                setSelectionBox({
                    x: rect.left - 8,
                    y: rect.top - 8,
                    width: rect.width + 16,
                    height: rect.height + 16,
                    visible: true
                })
                
                setTargetPosition({ x: pullX, y: pullY })
                setIsAttracting(true)
                setIsPlayMode(isVideo)
                setTargetElement(element)
            } else {
                setTargetPosition({ x: e.clientX, y: e.clientY })
                setIsAttracting(false)
                setIsPlayMode(false)
                setTargetElement(null)
                setSelectionBox(prev => ({ ...prev, visible: false }))
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
            `}</style>

            {/* L-shaped corner borders */}
            <motion.div
                className="fixed pointer-events-none z-[9998]"
                animate={{
                    x: selectionBox.x,
                    y: selectionBox.y,
                    opacity: selectionBox.visible ? 1 : 0,
                    scale: selectionBox.visible ? 1 : 0.8,
                }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                    mass: 0.5
                }}
            >
                <svg 
                    width={selectionBox.width} 
                    height={selectionBox.height}
                    className="absolute top-0 left-0"
                >
                    {/* Top-left L corner */}
                    <path
                        d={`M 2 10 L 2 2 L 10 2`}
                        stroke="#e2404e"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                    
                    {/* Top-right L corner */}
                    <path
                        d={`M ${selectionBox.width - 10} 2 L ${selectionBox.width - 2} 2 L ${selectionBox.width - 2} 10`}
                        stroke="#e2404e"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                    
                    {/* Bottom-left L corner */}
                    <path
                        d={`M 2 ${selectionBox.height - 10} L 2 ${selectionBox.height - 2} L 10 ${selectionBox.height - 2}`}
                        stroke="#e2404e"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                    
                    {/* Bottom-right L corner */}
                    <path
                        d={`M ${selectionBox.width - 10} ${selectionBox.height - 2} L ${selectionBox.width - 2} ${selectionBox.height - 2} L ${selectionBox.width - 2} ${selectionBox.height - 10}`}
                        stroke="#e2404e"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
            </motion.div>

            {/* Custom magnetic cursor - transforms into play button */}
            <motion.div
                className="fixed pointer-events-none z-[9999] flex items-center justify-center"
                style={{ 
                    backgroundColor: isPlayMode ? 'rgba(226, 64, 78, 0.9)' : '#e2404e',
                    borderRadius: '50%',
                }}
                animate={{
                    x: targetPosition.x - (isPlayMode ? 20 : 8),
                    y: targetPosition.y - (isPlayMode ? 20 : 8),
                    width: isPlayMode ? '40px' : '16px',
                    height: isPlayMode ? '40px' : '16px',
                }}
                transition={{
                    type: "spring",
                    damping: isAttracting ? 20 : 30,
                    stiffness: isAttracting ? 300 : 500,
                    mass: 0.2
                }}
            >
                {/* Play triangle icon */}
                <motion.svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    animate={{
                        opacity: isPlayMode ? 1 : 0,
                        scale: isPlayMode ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.2,
                        delay: isPlayMode ? 0.1 : 0
                    }}
                >
                    <path
                        d="M8 5.14v13.72L19 12z"
                        fill="white"
                        stroke="white"
                        strokeWidth="1"
                    />
                </motion.svg>
            </motion.div>
        </>
    )
}

export default CustomCursor
