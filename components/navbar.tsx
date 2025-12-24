"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, ChevronDown, Menu, X, Terminal, Globe, Lock } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const letters = "TITAN".split("")

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 100], ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.9)"])
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

  return (
    <motion.nav 
      style={{ backgroundColor: navBg, backdropFilter: navBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-all duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* BRANDING: CATCHES THE SPLASH ELEMENTS */}
        <Link href="/" className="flex items-center gap-2 sm:gap-4 group">
          <motion.div 
            layoutId="main-logo"
            className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            <Image src="/logo_transparent.png" alt="TITAN" fill className="object-contain" />
          </motion.div>
          
          <div className="flex">
            {letters.map((letter, i) => (
              <motion.span 
                key={i}
                layoutId={`letter-${i}`}
                transition={{ 
                  type: "spring", 
                  stiffness: 80, 
                  damping: 18,
                  delay: i * 0.05 
                }}
                className="text-xl sm:text-2xl font-black text-white tracking-tighter"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </Link>

        {/* INTERACTIVE NAVIGATION */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            { name: "Sovereign Edge", icon: <Globe size={14}/> },
            { name: "Defense Layers", icon: <Shield size={14}/> },
            { name: "Compliance", icon: <Lock size={14}/> },
            { name: "Terminal", icon: <Terminal size={14}/> }
          ].map((item) => (
            <Link 
              key={item.name} 
              href="#" 
              className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-cyan-400 transition-all"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* ACTION CENTER */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" className="hidden md:flex text-slate-400 hover:text-white font-bold text-xs uppercase tracking-widest">
            Portal Access
          </Button>
          <Button className="bg-cyan-600 hover:bg-cyan-400 text-white font-black px-3 sm:px-4 md:px-6 text-xs sm:text-sm rounded-full shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-all hover:scale-105 active:scale-95 h-9 sm:h-10">
            <span className="hidden xs:inline">ACTIVATE SHIELD</span>
            <span className="xs:hidden">SHIELD</span>
          </Button>
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg active:bg-white/20 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-6 sm:p-8 space-y-4 sm:space-y-6 shadow-2xl"
        >
          {["Sovereign Edge", "Defense Layers", "Compliance", "Terminal"].map((link) => (
            <Link 
              key={link} 
              href="#" 
              className="block text-lg sm:text-xl font-bold text-white border-b border-white/5 pb-3 sm:pb-4 hover:text-cyan-400 active:text-cyan-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Button 
            variant="ghost" 
            className="w-full justify-start text-slate-400 hover:text-white font-bold text-sm uppercase tracking-widest h-12"
            onClick={() => setIsOpen(false)}
          >
            Portal Access
          </Button>
          <Button className="w-full bg-cyan-600 h-14 font-black">ACTIVATE SHIELD</Button>
        </motion.div>
      )}
    </motion.nav>
  )
}