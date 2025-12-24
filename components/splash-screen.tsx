"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const letters = "TITAN".split("")

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [startExit, setStartExit] = useState(false)
  const [shake, setShake] = useState(0)

  const playHit = () => {
    const audio = new Audio("/hit.mp3")
    audio.volume = 0.5
    audio.play().catch(() => {})
    setShake(10) 
    setTimeout(() => setShake(0), 100)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartExit(true)
      setTimeout(onComplete, 1500) // Longer time for the flight animation
    }, 4500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      animate={{ x: [0, -shake, shake, 0] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />

      <div className="relative flex flex-col items-center">
        {/* SHARED LOGO */}
        <motion.div 
          layoutId="main-logo"
          initial={{ y: -500, opacity: 0, scale: 4 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
          onAnimationComplete={() => playHit()}
          className="relative mb-16"
        >
          <Image
            src="/logo_transparent.png"
            alt="TITAN"
            width={200}
            height={200}
            className="drop-shadow-[0_0_60px_rgba(34,211,238,0.5)]"
          />
        </motion.div>

        {/* SHARED LETTERS */}
        <div className="flex gap-4">
          <AnimatePresence>
            {!startExit && letters.map((letter, i) => (
              <motion.span
                key={i}
                layoutId={`letter-${i}`} // This MUST match the Navbar IDs
                initial={{ y: -400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 250, 
                  damping: 18, 
                  delay: 1.2 + (i * 0.2) 
                }}
                onAnimationComplete={() => i === 0 && playHit()}
                className="text-7xl md:text-9xl font-black text-white tracking-tighter"
              >
                {letter}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="mt-12 text-center"
        >
          <p className="text-cyan-400 tracking-[0.4em] text-xs font-bold uppercase mb-2">
            The First Egyptian-Engineered WAF
          </p>
          <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  )
}