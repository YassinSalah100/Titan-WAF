"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  Shield, Zap, Lock, Brain, ArrowRight, Layers, Database, Server, Network, 
  CheckCircle2, AlertTriangle, Activity, Globe, Cpu 
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

      {/* === HERO SECTION === */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-white/5">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-[radial-gradient(circle_at_50%_0%,rgba(8,145,178,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 backdrop-blur-md mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              System Active: Cairo Edge Node
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight sm:leading-none mb-4 sm:mb-6 md:mb-8 px-2"
          >
            SOVEREIGN <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-cyan-100 to-cyan-700">
              CYBER DEFENSE
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed font-medium px-4"
          >
            Secure your digital infrastructure with the <span className="text-white font-bold">First Egyptian-Engineered WAF</span>. 
            Zero foreign reliance. Sub-10ms latency.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 h-11 sm:h-14 px-6 sm:px-8 text-sm sm:text-lg font-bold shadow-[0_0_30px_rgba(8,145,178,0.2)]">
              Initialize Shield
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/10 hover:bg-white/5 h-11 sm:h-14 px-6 sm:px-8 font-mono text-xs sm:text-sm">
              View Threat Map
            </Button>
          </motion.div>
        </div>
      </section>

      {/* === NEW: LIVE THREAT INTELLIGENCE DASHBOARD === */}
      <section className="py-12 sm:py-20 px-4 bg-black relative">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4 md:gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2 flex items-center gap-2 sm:gap-3">
                <Activity className="text-red-500 w-6 h-6 sm:w-8 sm:h-8" /> LIVE THREAT FEED
              </h2>
              <p className="text-slate-500 font-mono text-[10px] sm:text-xs">REAL-TIME INTERCEPTION LOGS [EG-NORTH-1]</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl w-full md:w-auto">
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Attacks Blocked Today</div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono">842,109</div>
              </div>
              <Shield className="text-cyan-500 w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
            {/* TERMINAL LOG */}
            <div className="lg:col-span-2 bg-[#050505] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-80 sm:h-87.5 overflow-hidden relative font-mono text-[10px] sm:text-xs">
              <div className="absolute top-0 left-0 w-full h-8 bg-[#050505] border-b border-white/10 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 z-10">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/20" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/20" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/20" />
                <span className="ml-1 sm:ml-2 text-slate-600 text-[9px] sm:text-xs truncate">root@titan-waf:~# tail -f /var/log/threats</span>
              </div>
              <div className="mt-8 space-y-2 sm:space-y-3 animate-pulse overflow-y-auto max-h-64 sm:max-h-full">
                 <p className="text-green-500"><span className="text-slate-600">[22:04:12]</span> BLOCKED: SQL_INJECTION origin: 192.168.4.12 target: EG_FINANCE</p>
                 <p className="text-cyan-500"><span className="text-slate-600">[22:04:15]</span> ANALYZING: Suspicious payload signature detected (Heuristic AI)</p>
                 <p className="text-red-500"><span className="text-slate-600">[22:04:18]</span> CRITICAL: DDoS amplification attempt on Port 443 [Mitigated]</p>
                 <p className="text-slate-400"><span className="text-slate-600">[22:04:22]</span> SYSTEM: Re-routing traffic via Alexandria failover node...</p>
                 <p className="text-green-500"><span className="text-slate-600">[22:04:25]</span> SUCCESS: Traffic normalized. Latency &lt; 8ms.</p>
                 <p className="text-green-500"><span className="text-slate-600">[22:04:29]</span> BLOCKED: XSS_ATTACK origin: Proxy_Chain target: GOV_PORTAL</p>
              </div>
              {/* Scan Line Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-size-[100%_4px] pointer-events-none opacity-20" />
            </div>

            {/* ATTACK VECTORS */}
            <div className="space-y-4">
               {[
                 { label: "L7 DDoS", val: 88, color: "bg-red-500" },
                 { label: "SQL Injection", val: 64, color: "bg-orange-500" },
                 { label: "Bot Scraping", val: 92, color: "bg-cyan-500" },
                 { label: "Zero-Day Exploit", val: 12, color: "bg-purple-500" }
               ].map((stat, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl">
                   <div className="flex justify-between mb-2">
                     <span className="text-xs font-bold text-slate-300">{stat.label}</span>
                     <span className="text-xs font-mono text-cyan-400">{stat.val}% LOAD</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.val}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full ${stat.color} shadow-[0_0_10px_currentColor]`}
                     />
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* === COMPARISON SECTION === */}
      <section className="py-12 sm:py-20 border-t border-white/5 bg-[#030712]">
        <div className="mx-auto max-w-7xl px-4">
           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Why TITAN Beats Global WAFs</h2>
                <div className="space-y-6">
                  {[
                    { title: "Data Sovereignty", desc: "100% of traffic stays in Egypt. No foreign routing.", icon: <Lock /> },
                    { title: "Local Latency", desc: "<10ms response time vs 150ms+ from EU servers.", icon: <Zap /> },
                    { title: "Regional AI", desc: "Trained on Middle Eastern attack vectors.", icon: <Brain /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
                       <div className="text-cyan-400 bg-cyan-900/20 p-3 rounded-lg">{item.icon}</div>
                       <div>
                         <h3 className="font-bold text-white">{item.title}</h3>
                         <p className="text-sm text-slate-400">{item.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Comparison Table */}
              <div className="bg-black/40 rounded-3xl border border-white/10 p-8">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-cyan-400"><CheckCircle2 /> SPECS COMPARISON</h3>
                 <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-500 text-[10px] uppercase tracking-wider">
                        <th className="text-left pb-4">Metric</th>
                        <th className="text-center pb-4 text-white">TITAN</th>
                        <th className="text-right pb-4">US Providers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        ["Ping (Cairo)", "4ms", "140ms"],
                        ["Data Residency", "Egypt", "Europe/USA"],
                        ["Support", "24/7 Local", "Ticket Based"],
                        ["Compliance", "EG-DPL", "GDPR (Partial)"]
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="py-4 font-medium text-slate-300">{row[0]}</td>
                          <td className="py-4 text-center text-green-400 font-bold">{row[1]}</td>
                          <td className="py-4 text-right text-red-400">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}