"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Shield, Zap, Activity, Lock, Eye, Brain, Network, 
  ArrowRight, Layers, Database, Server, Globe, CheckCircle2, AlertTriangle 
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
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Section: High-Pressure Messaging */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 backdrop-blur-md mb-6 sm:mb-8 animate-fade-in">
            <Shield size={14} className="sm:w-4 sm:h-4" />
            <span className="font-bold tracking-wide uppercase text-[9px] xs:text-[10px] sm:text-xs">
              The First Egyptian-Engineered WAF Platform
            </span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] sm:leading-[0.9] mb-6 sm:mb-8 px-2">
            STOP RELYING ON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-white">
              FOREIGN BLACK-BOXES
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
            Protect your Egyptian digital assets with a sovereign security perimeter. 
            TITAN delivers 10ms local latency and AI-driven threat suppression 
            built specifically for the regional threat landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button size="lg" className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold h-12 sm:h-14 px-6 sm:px-8 shadow-[0_0_20px_rgba(8,145,178,0.3)] text-sm sm:text-base active:scale-95 transition-transform">
              Deploy National Shield
              <ArrowRight size={16} className="ml-2 sm:w-[18px] sm:h-[18px]" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/10 hover:bg-white/5 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base active:scale-95 transition-transform">
              Technical Architecture
            </Button>
          </div>

          {/* Real-time Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20 px-4">
            {[
              { label: "Local Latency", value: "<10ms", sub: "Cairo Edge" },
              { label: "Attack Mitigation", value: "99.9%", sub: "AI-Layered" },
              { label: "Data Sovereignty", value: "100%", sub: "Egyptian Owned" },
            ].map((stat, i) => (
              <div key={i} className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">{stat.value}</div>
                <div className="text-[11px] sm:text-xs font-bold text-white mt-1 uppercase tracking-widest">{stat.label}</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 mt-1 italic">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TITAN is Different: Deep Pressure Comparison */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-y border-white/5 bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                Traditional WAFs Treat Egypt as an <span className="text-cyan-400 italic font-black underline decoration-2 underline-offset-4 sm:underline-offset-8">Afterthought</span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Sovereign Data Control",
                    desc: "Foreign providers route your traffic through EU/US servers. TITAN keeps Egyptian traffic within Egyptian borders.",
                    icon: <Lock className="text-cyan-400" />
                  },
                  {
                    title: "Regional Threat Intelligence",
                    desc: "We analyze local attack patterns (DDoS/SQLi) targeting national infrastructure that global providers ignore.",
                    icon: <Brain className="text-cyan-400" />
                  },
                  {
                    title: "Zero-Latency Edge Nodes",
                    desc: "Strategic nodes in Cairo & Alexandria eliminate the 200ms international round-trip penalty.",
                    icon: <Zap className="text-cyan-400" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/5 hover:bg-white/5 transition-colors active:bg-white/10">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-slate-900/50 rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 hidden sm:block">
                <Shield size={200} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-cyan-400">
                <CheckCircle2 size={18} className="sm:w-5 sm:h-5 shrink-0" /> 
                <span className="leading-tight">Competitive Edge Analysis</span>
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full text-xs sm:text-sm min-w-[280px]">
                <thead>
                  <tr className="border-b border-white/10 text-slate-500">
                    <th className="text-left pb-3 sm:pb-4 font-semibold">Feature</th>
                    <th className="text-center pb-3 sm:pb-4 text-white font-semibold">TITAN</th>
                    <th className="text-right pb-3 sm:pb-4 font-semibold">Global</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Local Data Residency", true, false],
                    ["National Threat Labs", true, false],
                    ["<15ms Egypt Latency", true, false],
                    ["AI Zero-Day Shield", true, true],
                    ["24/7 Local Support", true, false],
                  ].map(([feature, titan, global], i) => (
                    <tr key={i} className="group">
                      <td className="py-3 sm:py-4 text-slate-300 font-medium text-[11px] sm:text-sm">{feature as string}</td>
                      <td className="py-3 sm:py-4 text-center">
                        <CheckCircle2 size={14} className="mx-auto text-green-400 sm:w-4 sm:h-4" />
                      </td>
                      <td className="py-3 sm:py-4 text-right">
                        {global ? (
                          <CheckCircle2 size={14} className="ml-auto text-slate-600 sm:w-4 sm:h-4" />
                        ) : (
                          <AlertTriangle size={14} className="ml-auto text-red-500/50 sm:w-4 sm:h-4" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <p className="mt-4 sm:mt-6 text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                * Comparison based on regional edge node distribution (2025)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Layered Security Architecture: Modern Visual Grid */}
      <section id="architecture" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#020617]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">THE TITAN STACK</h2>
            <p className="text-sm sm:text-base text-slate-400">Total protection across every digital layer</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {[
              { title: "Application Layer", desc: "Next-gen WAF & API shielding against OWASP Top 10.", icon: <Layers /> },
              { title: "Network Layer", desc: "Egyptian-node DDoS scrubbing & intrusion prevention.", icon: <Network /> },
              { title: "Infrastructure Layer", desc: "Container security & automated vulnerability sweeps.", icon: <Server /> },
              { title: "Data Layer", desc: "Locally-compliant encryption & sovereign data storage.", icon: <Database /> },
            ].map((item, i) => (
              <div key={i} className="p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-[2rem] bg-white/5 border border-white/10 hover:border-cyan-500/40 active:border-cyan-500/60 transition-all group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform text-cyan-400 border border-cyan-500/20">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}