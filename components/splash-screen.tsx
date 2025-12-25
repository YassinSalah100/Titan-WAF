"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const letters = "TITAN".split("")

// --- 1. REALISTIC SHARD DEBRIS ---
const DebrisShard = ({ angle, distance }: { angle: number; distance: number }) => (
  <motion.div
    initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
    animate={{ 
      opacity: 0, 
      x: Math.cos(angle) * distance, 
      y: Math.sin(angle) * distance, 
      rotate: Math.random() * 360 
    }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="absolute w-1 h-3 bg-cyan-200/50 clip-triangle"
    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
  />
)

// --- 2. ADVANCED FRACTURE CRACK (For Words Only) ---
const RealisticCrack = ({ style, className }: { style: React.CSSProperties; className?: string }) => (
  <motion.svg
    viewBox="0 0 200 200"
    className={`absolute pointer-events-none z-0 opacity-70 ${className || ''}`}
    style={{ width: '400px', height: '400px', ...style }}
  >
    <defs>
      <filter id="shock-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <motion.path
      d="M100,100 L120,80 L140,85 L180,60 M100,100 L80,120 L70,150 L40,180 M100,100 L130,120 L160,130 L190,120 M100,100 L70,70 L60,40 L20,20"
      fill="none"
      stroke="rgba(34, 211, 238, 0.9)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      filter="url(#shock-glow)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: [0, 1, 0.6] }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    />
  </motion.svg>
)

// --- 3. BACKGROUND THUNDER EFFECT ---
const Lightning = () => (
  <motion.svg
    viewBox="0 0 200 400"
    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full sm:w-[120%] sm:h-[120%] z-[-1] pointer-events-none opacity-60 sm:opacity-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0, 0.8, 0] }}
    transition={{ duration: 0.2, times: [0, 0.1, 0.4, 0.6, 1] }}
  >
    <path
      d={`M${50 + Math.random() * 100},0 
         L${80 + Math.random() * 40},100 
         L${40 + Math.random() * 40},150 
         L${100 + Math.random() * 40},300 
         L${60 + Math.random() * 40},350 
         L${100 + Math.random() * 50},400`}
      stroke="cyan"
      strokeWidth="4"
      fill="none"
      filter="drop-shadow(0 0 40px rgba(34,211,238,0.9))"
    />
  </motion.svg>
)

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [startExit, setStartExit] = useState(false)
  const [impacts, setImpacts] = useState<number[]>([]) 
  const [shake, setShake] = useState({ x: 0, y: 0 })
  const [lightningKey, setLightningKey] = useState(0)

  // Trigger random lightning
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setLightningKey(prev => prev + 1)
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const triggerImpact = (index: number) => {
    // Heavy Camera Shake (Randomized Direction)
    const force = index === -1 ? 25 : 12
    setShake({ 
      x: (Math.random() - 0.5) * force, 
      y: (Math.random() - 0.5) * force 
    })
    
    // Quick Reset
    setTimeout(() => setShake({ x: 0, y: 0 }), 80)

    // Register Impact
    setImpacts(prev => [...prev, index])
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartExit(true)
      // Extended delay to allow letters to fully reach navbar before splash completes
      setTimeout(onComplete, 1600) 
    }, 4500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      // Screen Shake Application
      animate={{ x: shake.x, y: shake.y }}
      transition={{ type: "tween", duration: 0.05 }}
      // Keep background FULLY OPAQUE during exit to prevent letters showing on main content
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#020617] overflow-hidden"
    >
      {/* 3D Perspective Floor */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] sm:bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-size-[40px_40px] sm:bg-size-[60px_60px]" 
        style={{ 
          transform: "perspective(800px) rotateX(70deg) translateY(100px) scale(1.5)",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)"
        }}
      />

      {/* Background Thunder */}
      {lightningKey > 0 && (
        <Lightning key={lightningKey} />
      )}

      <div className="relative flex flex-col items-center z-10 px-4">
        
        {/* === SHARED LOGO (No Visual FX, Just Physics) === */}
        <motion.div 
          layoutId="main-logo"
          initial={{ y: -1000, opacity: 0, scale: 4 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, mass: 2 }} // Heavy Mass
          onAnimationComplete={() => triggerImpact(-1)} 
          className="relative mb-10 sm:mb-12 md:mb-16"
        >
          <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w-55 md:h-55">
            <Image
              src="/logo_transparent.png"
              alt="TITAN"
              fill
              className="drop-shadow-[0_0_40px_rgba(6,182,212,0.5)] sm:drop-shadow-[0_0_60px_rgba(6,182,212,0.5)] relative z-10 object-contain"
              priority
            />
          </div>
          {/* REMOVED: Cracks and Flash from logo as requested */}
        </motion.div>

        {/* === SHARED LETTERS (With Cracks & Debris) === */}
        <div className="flex gap-1.5 xs:gap-2 sm:gap-3 md:gap-5 relative">
          <AnimatePresence>
            {!startExit && letters.map((letter, i) => (
              <div key={i} className="relative">
                <motion.span
                  layoutId={`letter-${i}`}
                  initial={{ y: -800, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 350, 
                    damping: 30,    
                    mass: 3,        
                    delay: 0.8 + (i * 0.1) 
                  }}
                  onAnimationComplete={() => triggerImpact(i)}
                  className="block text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl relative z-10"
                >
                  {letter}
                </motion.span>
                
                {/* Impact FX (Words Only) - Scale down on mobile */}
                {impacts.includes(i) && (
                  <>
                    <RealisticCrack style={{ left: '-100px', top: '-80px', transform: `rotate(${i * 60}deg) scale(0.4)` }} className="hidden sm:block" />
                    <RealisticCrack style={{ left: '-150px', top: '-100px', transform: `rotate(${i * 60}deg) scale(0.6)` }} className="sm:hidden" />
                    {/* Spawn Debris Particles */}
                    {[...Array(6)].map((_, p) => (
                      <DebrisShard key={p} angle={(p * 60 * Math.PI) / 180} distance={80} />
                    ))}
                  </>
                )}
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* REMOVED: Loading Bar */}
      </div>
    </motion.div>
  )
}