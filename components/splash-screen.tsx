"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const letters = "TITAN".split("")

// Custom SVG Component for the Floor Crack Effect
const CrackVisual = ({ style }: { style: any }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className="absolute pointer-events-none z-0"
    style={{ width: '300px', height: '300px', ...style }}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
    transition={{ duration: 0.3 }}
  >
    <path
      d="M50,50 L45,55 L55,60 L40,70 L60,80 M50,50 L55,45 L65,50 L75,40"
      fill="none"
      stroke="cyan"
      strokeWidth="2"
      strokeLinecap="round"
      filter="drop-shadow(0 0 5px cyan)"
    />
  </motion.svg>
)

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [startExit, setStartExit] = useState(false)
  const [impacts, setImpacts] = useState<number[]>([]) // Tracks which letter caused a crack
  const [shake, setShake] = useState(0)

  const playHit = (index: number) => {
    // 1. Play Sound
    const audio = new Audio("/hit.mp3")
    audio.volume = 0.5
    audio.play().catch(() => {})
    
    // 2. Trigger Screen Shake
    setShake(10) 
    setTimeout(() => setShake(0), 100)

    // 3. Register Crack at this index
    setImpacts(prev => [...prev, index])
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartExit(true)
      setTimeout(onComplete, 1400) // Allow time for fly-out animation
    }, 4500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      animate={{ x: [0, -shake, shake, 0], y: [0, shake/2, -shake/2, 0] }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#020617] overflow-hidden"
    >
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(circle_at_center,black_40%,transparent_100%)]" />

      {/* Render Cracks Dynamically */}
      {impacts.map((i) => (
        <CrackVisual 
          key={i} 
          style={{ 
            left: `${35 + i * 8}%`, // Position crack under the letter
            top: '50%',
            transform: `rotate(${Math.random() * 360}deg)`
          }} 
        />
      ))}

      <div className="relative flex flex-col items-center z-10">
        {/* === SHARED LOGO === */}
        <motion.div 
          layoutId="main-logo"
          initial={{ y: -800, opacity: 0, scale: 5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          onAnimationComplete={() => playHit(-1)} // -1 for Logo impact
          className="relative mb-16"
        >
          <Image
            src="/logo_transparent.png"
            alt="TITAN"
            width={200}
            height={200}
            className="drop-shadow-[0_0_50px_rgba(34,211,238,0.3)]"
            priority
          />
        </motion.div>

        {/* === SHARED LETTERS === */}
        <div className="flex gap-3 md:gap-5">
          <AnimatePresence>
            {!startExit && letters.map((letter, i) => (
              <motion.span
                key={i}
                layoutId={`letter-${i}`}
                initial={{ y: -600, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, scale: 0.5 }} // Optional fade out before fly
                transition={{ 
                  type: "spring", stiffness: 200, damping: 18, 
                  delay: 1 + (i * 0.15) 
                }}
                onAnimationComplete={() => playHit(i)}
                className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl"
              >
                {letter}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        {/* === LOADING BAR === */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: startExit ? 0 : 1 }}
          transition={{ delay: 2.5 }}
          className="mt-16 w-64 h-1 bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
            className="h-full bg-cyan-500 shadow-[0_0_10px_cyan]" 
          />
        </motion.div>
      </div>
    </motion.div>
  )
}