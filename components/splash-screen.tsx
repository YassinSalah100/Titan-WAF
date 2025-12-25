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
    className="absolute w-1 h-3 bg-cyan-200/50 clip-triangle z-1"
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

// --- 3. ADVANCED REALISTIC THUNDER EFFECT ---
const Lightning = ({ variant }: { variant?: number }) => {
  const randomX = 50 + Math.random() * 100
  const branches = Math.floor(2 + Math.random() * 3) // 2-4 branches
  
  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 200 400"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full sm:w-[120%] sm:h-[120%] z-[-1] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0.3, 1, 0.2, 0],
          scale: [1, 1.02, 1, 1.01, 1, 1]
        }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          times: [0, 0.05, 0.15, 0.2, 0.4, 1],
          ease: "easeOut"
        }}
      >
      <defs>
        {/* Bright glow filter */}
        <filter id="lightning-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Main lightning bolt with jagged, realistic path */}
      <motion.path
        d={`M${randomX},0 
           L${randomX + (Math.random() - 0.5) * 20},50 
           L${randomX + (Math.random() - 0.5) * 30},80
           L${randomX + (Math.random() - 0.5) * 25},120
           L${randomX + (Math.random() - 0.5) * 35},160
           L${randomX + (Math.random() - 0.5) * 20},200
           L${randomX + (Math.random() - 0.5) * 40},250
           L${randomX + (Math.random() - 0.5) * 30},300
           L${randomX + (Math.random() - 0.5) * 25},350
           L${randomX + (Math.random() - 0.5) * 20},400`}
        stroke="rgba(34, 211, 238, 1)"
        strokeWidth="3"
        fill="none"
        filter="url(#lightning-glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.08, ease: "linear" }}
      />
      
      {/* Secondary thinner bolt for realism */}
      <motion.path
        d={`M${randomX + 5},20 
           L${randomX + (Math.random() - 0.5) * 15},60 
           L${randomX + (Math.random() - 0.5) * 20},100
           L${randomX + (Math.random() - 0.5) * 15},150`}
        stroke="rgba(34, 211, 238, 0.6)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#lightning-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 0.06, delay: 0.02, ease: "linear" }}
      />
      
      {/* Side branches for more realistic effect */}
      {[...Array(branches)].map((_, i) => {
        const branchY = 100 + i * 80
        const branchDir = Math.random() > 0.5 ? 1 : -1
        return (
          <motion.path
            key={i}
            d={`M${randomX},${branchY} 
               L${randomX + branchDir * 30},${branchY + 20}
               L${randomX + branchDir * 50},${branchY + 50}`}
            stroke="rgba(34, 211, 238, 0.5)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.05, delay: 0.03 + i * 0.01, ease: "linear" }}
          />
        )
      })}
    </motion.svg>
    </AnimatePresence>
  )
}

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [startExit, setStartExit] = useState(false)
  const [impacts, setImpacts] = useState<number[]>([]) 
  const [shake, setShake] = useState({ x: 0, y: 0 })
  const [lightningKey, setLightningKey] = useState(0)
  const [screenFlash, setScreenFlash] = useState(false)

  // Trigger random realistic lightning with screen flash
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) { // More frequent
        setLightningKey(prev => prev + 1)
        // Screen flash effect
        setScreenFlash(true)
        setTimeout(() => setScreenFlash(false), 80)
      }
    }, 1500) // More frequent strikes
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
      {/* Screen Flash on Lightning Strike */}
      <motion.div 
        className="absolute inset-0 bg-cyan-400/30 pointer-events-none z-50"
        animate={{ opacity: screenFlash ? 1 : 0 }}
        transition={{ duration: 0.05 }}
      />
      {/* Enhanced 3D Perspective Floor with pulsing effect */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] sm:bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" 
        style={{ 
          transform: "perspective(800px) rotateX(70deg) translateY(100px) scale(1.5)",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)"
        }}
        animate={{
          opacity: screenFlash ? 0.3 : 0.8
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Multiple Background Thunder Bolts for Realism */}
      {lightningKey > 0 && (
        <>
          <Lightning key={`main-${lightningKey}`} variant={1} />
          {Math.random() > 0.6 && (
            <Lightning key={`secondary-${lightningKey}`} variant={2} />
          )}
        </>
      )}

      <div className="relative flex flex-col items-center justify-center z-10 px-4 min-h-screen">
        
        {/* === SHARED LOGO (Titan Power Surge Effect) === */}
        <motion.div 
          layoutId="main-logo"
          initial={{ y: -1000, opacity: 0, scale: 4, rotateY: -180 }}
          animate={{ 
            y: 0, 
            opacity: 1, 
            scale: 1,
            rotateY: 0
          }}
          exit={{
            scale: 0.2,
            opacity: 0,
            y: -500,
            rotateY: 360,
            filter: "brightness(3)"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20, 
            mass: 2,
            exit: {
              type: "tween",
              duration: 1.2,
              ease: [0.34, 1.56, 0.64, 1]
            }
          }}
          onAnimationComplete={() => triggerImpact(-1)} 
          className="relative mb-6 sm:mb-10 md:mb-16"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Energy Ring Pulse on Exit */}
          {startExit && (
            <>
              <motion.div
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ 
                  scale: [1, 3, 5],
                  opacity: [0.8, 0.3, 0]
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-4 border-cyan-400"
              />
              <motion.div
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ 
                  scale: [1, 2.5, 4],
                  opacity: [0.6, 0.2, 0]
                }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-2 border-cyan-300"
              />
            </>
          )}
          <div className="relative w-24 h-24 xs:w-32 xs:h-32 sm:w-44 sm:h-44 md:w-55 md:h-55">
            <Image
              src="/logo_transparent.png"
              alt="TITAN"
              fill
              className="drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] sm:drop-shadow-[0_0_60px_rgba(6,182,212,0.5)] relative z-10 object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* === SHARED LETTERS (Titan Power Dispersal Effect) === */}
        <div className="flex gap-1 xs:gap-1.5 sm:gap-2 md:gap-4 relative">
          <AnimatePresence>
            {!startExit && letters.map((letter, i) => (
              <div key={i} className="relative">
                {/* Energy Particles on Exit */}
                {startExit && (
                  <>
                    {[...Array(8)].map((_, p) => {
                      const angle = (p * 45 * Math.PI) / 180
                      return (
                        <motion.div
                          key={p}
                          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                          animate={{ 
                            x: Math.cos(angle) * 100,
                            y: Math.sin(angle) * 100,
                            opacity: 0,
                            scale: 0
                          }}
                          transition={{ 
                            duration: 0.6,
                            delay: i * 0.08,
                            ease: "easeOut"
                          }}
                          className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                          style={{
                            boxShadow: "0 0 10px rgba(6,182,212,0.8)"
                          }}
                        />
                      )
                    })}
                    {/* Power Wave Ring */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 1 }}
                      animate={{ 
                        scale: [0.5, 2.5, 4],
                        opacity: [1, 0.5, 0]
                      }}
                      transition={{ 
                        duration: 0.8,
                        delay: i * 0.08,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                      }}
                    />
                  </>
                )}
                <motion.span
                  layoutId={`letter-${i}`}
                  initial={{ y: -800, opacity: 0, rotateX: -90, rotateZ: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1, 
                    rotateX: 0,
                    rotateZ: 0
                  }}
                  exit={{ 
                    opacity: 0,
                    scale: 0.2,
                    y: -500,
                    rotateX: 180,
                    rotateZ: 90,
                    filter: "blur(20px)",
                    textShadow: "0 0 100px rgba(6,182,212,1)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 350, 
                    damping: 30,    
                    mass: 3,        
                    delay: 0.8 + (i * 0.1),
                    exit: {
                      type: "tween",
                      duration: 1,
                      delay: i * 0.08,
                      ease: [0.34, 1.56, 0.64, 1]
                    }
                  }}
                  onAnimationComplete={() => triggerImpact(i)}
                  className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl relative z-10"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
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