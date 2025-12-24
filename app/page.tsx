"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  Shield, Zap, Lock, Brain, ArrowRight, 
  Layers, Database, Server, Network, 
  CheckCircle2, AlertTriangle, Globe 
} from "lucide-react"

export default function LandingPage() {
  const [showSplash, setShowSplash] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (showSplash) return <SplashScreen onComplete={() => setShowSplash(false)} />

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/40">
      <Navbar />

      {/* ADVANCED HERO SECTION */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        {/* Animated Cyber Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(8,145,178,0.15)_0%,transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 backdrop-blur-xl mb-10"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase">
              Egyptian Cyber-Defense Initiative Active
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-10">
            SOVEREIGN <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-cyan-200 to-cyan-600">
              CYBER POWER
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed px-4 font-medium">
            The era of foreign reliance is over. Secure your national digital assets 
            with the only WAF designed for the Egyptian threat landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 mb-20">
            <Button size="lg" className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-400 text-[#020617] font-black h-16 px-10 rounded-xl text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(8,145,178,0.3)]">
              ACTIVATE SHIELD
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/10 hover:bg-white/5 h-16 px-10 rounded-xl font-bold">
              SECURITY AUDIT
            </Button>
          </div>

          {/* ADVANCED STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {[
              { label: "Regional Nodes", value: "Cairo/Alex", color: "text-cyan-400" },
              { label: "Local Latency", value: "<8ms", color: "text-green-400" },
              { label: "Egyptian Owned", value: "100%", color: "text-cyan-400" },
              { label: "Threat Scrubbing", value: "L7-DDoS", color: "text-red-400" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#030a1c] border border-white/5 backdrop-blur-sm group hover:border-cyan-500/30 transition-all">
                <div className={`text-xl sm:text-2xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TITAN IS DIFFERENT: DEEP PRESSURE COMPARISON */}
      <section className="py-24 border-y border-white/5 bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight leading-tight">
                Traditional WAFs Treat Egypt as an <span className="text-cyan-400 italic font-black underline decoration-2 underline-offset-8">Afterthought</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Sovereign Data Control",
                    desc: "Foreign providers route your traffic through EU/US servers. TITAN keeps Egyptian traffic within Egyptian borders.",
                    icon: <Lock className="text-cyan-400" />
                  },
                  {
                    title: "Regional Threat Intelligence",
                    desc: "We analyze local attack patterns targeting national infrastructure that global providers ignore.",
                    icon: <Brain className="text-cyan-400" />
                  },
                  {
                    title: "Zero-Latency Edge Nodes",
                    desc: "Strategic nodes in Cairo & Alexandria eliminate the international round-trip penalty.",
                    icon: <Zap className="text-cyan-400" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COMPARISON TABLE */}
            <div className="bg-[#030a1c] rounded-3xl border border-white/10 p-8 overflow-hidden relative shadow-2xl">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-cyan-400 uppercase tracking-tighter">
                <CheckCircle2 size={24} /> Competitive Edge Analysis
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-500 uppercase text-[10px] tracking-widest">
                    <th className="text-left pb-4">Security Vectors</th>
                    <th className="text-center pb-4 text-white">TITAN</th>
                    <th className="text-right pb-4">Global Comp.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Local Data Residency", true, false],
                    ["National Threat Labs", true, false],
                    ["<10ms Egypt Latency", true, false],
                    ["AI Zero-Day Shield", true, true],
                    ["24/7 Local Support", true, false],
                  ].map(([feature, titan, global], i) => (
                    <tr key={i} className="group hover:bg-white/2 transition-colors">
                      <td className="py-4 text-slate-300 font-medium">{feature as string}</td>
                      <td className="py-4 text-center">
                        <CheckCircle2 size={18} className="mx-auto text-green-400" />
                      </td>
                      <td className="py-4 text-right">
                        {global ? (
                          <CheckCircle2 size={18} className="ml-auto text-slate-600" />
                        ) : (
                          <AlertTriangle size={18} className="ml-auto text-red-500/50" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* LAYERED ARCHITECTURE GRID */}
      <section id="architecture" className="py-24 px-4 bg-[#020617]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">The TITAN Stack</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Total protection across every digital layer of the Egyptian infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Application Layer", desc: "Next-gen WAF & API shielding against OWASP Top 10.", icon: <Layers /> },
              { title: "Network Layer", desc: "Egyptian-node DDoS scrubbing & intrusion prevention.", icon: <Network /> },
              { title: "Infrastructure Layer", desc: "Container security & automated vulnerability sweeps.", icon: <Server /> },
              { title: "Data Layer", desc: "Locally-compliant encryption & sovereign data storage.", icon: <Database /> },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-4xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-cyan-400 border border-cyan-500/20">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}