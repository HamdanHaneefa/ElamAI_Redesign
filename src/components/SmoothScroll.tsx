import React, { useRef, useEffect, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useSpring, useReducedMotion, MotionValue } from "framer-motion"

interface SmoothScrollProps {
  children: React.ReactNode
  // Allow customization of spring physics
  springConfig?: {
    damping?: number
    mass?: number
    stiffness?: number
  }
  // Option to disable on mobile for better performance
  disableOnMobile?: boolean
  // Add a threshold for enabling smooth scroll
  enableThreshold?: number
}

export function SmoothScroll({ 
  children, 
  springConfig = {
    damping: 20,  // Increased from 15 for smoother motion
    mass: 0.5,    // Increased from 0.27 for more weight
    stiffness: 100 // Increased from 55 for better responsiveness
  },
  disableOnMobile = true,
  enableThreshold = 768 
}: SmoothScrollProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  // Use RAF for smooth updates
  const rafRef = useRef<number>()
  const resizeTimeoutRef = useRef<NodeJS.Timeout>()

  const { scrollY } = useScroll()
  
  // Optimize spring configuration based on scroll velocity
  const smoothScrollY = useSpring(scrollY, springConfig)
  
  // Use transform for better performance
  const transform = useTransform(
    smoothScrollY,
    [0, contentHeight - windowHeight],
    [0, -(contentHeight - windowHeight)]
  )

  // Debounced resize handler
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current)
    }
    
    resizeTimeoutRef.current = setTimeout(() => {
      if (contentRef.current) {
        const newHeight = contentRef.current.scrollHeight
        setContentHeight(newHeight)
        setWindowHeight(window.innerHeight)
        setIsMobile(window.innerWidth < enableThreshold)
      }
    }, 150) // Debounce resize events
  }, [enableThreshold])

  // Update content height with ResizeObserver for better performance
  useEffect(() => {
    if (!contentRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      // Cancel any pending RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      rafRef.current = requestAnimationFrame(() => {
        for (const entry of entries) {
          if (entry.target === contentRef.current) {
            setContentHeight(entry.contentRect.height)
          }
        }
      })
    })

    resizeObserver.observe(contentRef.current)
    
    // Initial setup
    setContentHeight(contentRef.current.scrollHeight)
    setWindowHeight(window.innerHeight)
    setIsMobile(window.innerWidth < enableThreshold)

    return () => {
      resizeObserver.disconnect()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [children, enableThreshold])

  // Handle window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [handleResize])

  // Disable smooth scroll if user prefers reduced motion or on mobile
  if (prefersReducedMotion || (disableOnMobile && isMobile)) {
    return <div className="min-h-screen">{children}</div>
  }

  // Don't apply smooth scroll if content is shorter than viewport
  if (contentHeight <= windowHeight) {
    return <div className="min-h-screen">{children}</div>
  }

  return (
    <>
      {/* Spacer div for scroll height */}
      <div 
        style={{ 
          height: contentHeight,
          // Use will-change for optimization hint
          willChange: 'height'
        }}
        aria-hidden="true"
      />
      
      {/* Fixed content container */}
      <motion.div
        ref={contentRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          y: transform,
          // Performance optimizations
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: 1000
        }}
        // Use GPU acceleration
        initial={false}
      >
        {children}
      </motion.div>
      
      {/* Optional scroll progress indicator */}
      <ScrollProgressBar scrollY={smoothScrollY} />
    </>
  )
}

// Separate component for scroll progress to prevent re-renders
const ScrollProgressBar = React.memo(({ scrollY }: { scrollY: MotionValue<number> }) => {
  const [documentHeight, setDocumentHeight] = useState(0)
  
  useEffect(() => {
    const updateHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight - window.innerHeight)
    }
    
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])
  
  const scaleX = useTransform(
    scrollY,
    [0, documentHeight],
    [0, 1]
  )
  
  const smoothScale = useSpring(scaleX, {
    damping: 30,
    stiffness: 100
  })
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left pointer-events-none"
      style={{ 
        scaleX: smoothScale,
        zIndex: 9999,
        // GPU acceleration
        transform: 'translateZ(0)',
      }}
    />
  )
})

ScrollProgressBar.displayName = 'ScrollProgressBar'

// Hook for fine-tuning scroll behavior in specific sections
export function useSmoothScrollTrigger() {
  const { scrollY } = useScroll()
  const smoothY = useSpring(scrollY, {
    damping: 25,
    mass: 0.5,
    stiffness: 120
  })
  
  return smoothY
}