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
    audio.volume = 0.4
    audio.play().catch(() => {})
    setShake(12) 
    setTimeout(() => setShake(0), 150)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartExit(true)
      setTimeout(onComplete, 1200) // Time for the complex flight back to Nav
    }, 4000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      animate={{ x: [0, -shake, shake, 0] }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#000208] overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[30px_30px] sm:bg-size-[50px_50px] mask-[radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] sm:mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-125 sm:h-125 bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />

      <div className="relative flex flex-col items-center px-4">
        {/* SHARED LOGO MORPH */}
        <motion.div 
          layoutId="main-logo"
          initial={{ y: -400, opacity: 0, scale: 4, rotate: -15 }}
          animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
          onAnimationComplete={() => playHit()}
          className="relative mb-12 sm:mb-16 md:mb-20"
        >
          <Image
            src="/logo_transparent.png"
            alt="TITAN"
            width={140}
            height={140}
            className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] drop-shadow-[0_0_60px_rgba(34,211,238,0.4)] sm:drop-shadow-[0_0_80px_rgba(34,211,238,0.4)]"
          />
        </motion.div>

        {/* SHARED LETTERS MORPH */}
        <div className="flex gap-2 xs:gap-3 sm:gap-4 md:gap-6">
          <AnimatePresence>
            {!startExit && letters.map((letter, i) => (
              <motion.span
                key={i}
                layoutId={`letter-${i}`}
                initial={{ y: -300, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 280, 
                  damping: 15, 
                  delay: 1.2 + (i * 0.15) 
                }}
                onAnimationComplete={() => i === 0 && playHit()}
                className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl"
              >
                {letter}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        {/* EGYPTIAN BRANDING FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center space-y-3 sm:space-y-4 px-4"
        >
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 justify-center">
            <div className="h-px w-8 xs:w-10 sm:w-12 bg-linear-to-r from-transparent to-cyan-500" />
            <p className="text-cyan-400 tracking-[0.3em] xs:tracking-[0.4em] sm:tracking-[0.6em] text-[9px] xs:text-[10px] sm:text-xs font-black uppercase whitespace-nowrap">
              The First Egyptian WAF
            </p>
            <div className="h-px w-8 xs:w-10 sm:w-12 bg-linear-to-l from-transparent to-cyan-500" />
          </div>
          <p className="text-white/20 text-[8px] xs:text-[9px] sm:text-[10px] uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] font-medium px-2">
            Sovereign National Defense Infrastructure
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}