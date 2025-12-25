"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, Menu, X, Terminal, Globe, Lock, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const letters = "TITAN".split("")

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  
  // Advanced Glassmorphism: Darkens and blurs as you scroll
  const navBg = useTransform(scrollY, [0, 50], ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.85)"])
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(16px)"])
  const navBorder = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.1)"])

  return (
    <motion.nav 
      style={{ backgroundColor: navBg, backdropFilter: navBlur, borderBottomColor: navBorder }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* === BRANDING: RECEIVER FOR SPLASH ELEMENTS === */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          {/* Logo with Glitch Entry */}
          <motion.div 
            layoutId="main-logo"
            transition={{ 
              type: "spring", stiffness: 120, damping: 20,
              opacity: { duration: 0.4 }
            }}
            className="relative w-9 h-9 sm:w-11 sm:h-11"
          >
            <Image src="/logo_transparent.png" alt="TITAN" fill className="object-contain" priority />
          </motion.div>
          
          {/* Letters with Digital Typewriter Entry */}
          <div className="flex">
            {letters.map((letter, i) => (
              <motion.span 
                key={i}
                layoutId={`letter-${i}`}
                transition={{ 
                  type: "spring", stiffness: 150, damping: 25,
                  delay: 0.1 + (i * 0.05) // Rapid sequential landing
                }}
                className="text-xl sm:text-2xl font-black text-white tracking-tighter"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </Link>

        {/* === DESKTOP NAVIGATION === */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "Live Threats", icon: <Globe size={14} className="text-red-500 animate-pulse"/> },
            { name: "Sovereign Edge", icon: <Shield size={14} className="text-cyan-400"/> },
            { name: "Compliance", icon: <Lock size={14} className="text-emerald-400"/> },
            { name: "Terminal", icon: <Terminal size={14} className="text-slate-400"/> }
          ].map((item) => (
            <Link 
              key={item.name} 
              href="#" 
              className="group flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-400 hover:text-white transition-all hover:bg-white/5 px-3 py-2 rounded-lg border border-transparent hover:border-white/10"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110">
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* === ACTION CENTER === */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:flex text-slate-400 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest hover:bg-cyan-950/30">
            Portal Login
          </Button>
          <Button className="bg-cyan-600 hover:bg-cyan-500 text-white font-black px-5 rounded-lg shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all hover:scale-105 active:scale-95 border-b-2 border-cyan-800">
            <Shield className="w-4 h-4 mr-2" />
            ACTIVATE SHIELD
          </Button>
          
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg active:bg-white/20 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#020617] border-b border-white/10 overflow-hidden"
        >
          <div className="p-6 space-y-4">
            {["Live Threats", "Sovereign Edge", "Compliance", "Terminal"].map((link) => (
              <Link 
                key={link} 
                href="#" 
                className="flex items-center justify-between text-lg font-bold text-slate-300 border-b border-white/5 pb-3 active:text-cyan-400"
              >
                {link} <ChevronDown size={16} className="-rotate-90" />
              </Link>
            ))}
            <Button className="w-full bg-cyan-600 h-12 font-black mt-4">ACTIVATE SHIELD</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}