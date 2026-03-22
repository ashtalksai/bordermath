"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, RefreshCw } from "lucide-react"

const painPoints = [
  {
    icon: Clock,
    title: "Hours of research, still uncertain",
    description: "You've spent 4 hours cross-referencing Reddit threads and a Google Sheet to figure out if your Lisbon → Bali → Bangkok plan is legal. It is... you think.",
  },
  {
    icon: AlertTriangle,
    title: "Mid-trip math emergencies",
    description: "You're in Bangkok on day 28 and you suddenly realize you've already used 82 Schengen days. Your return to Portugal next month just got complicated.",
  },
  {
    icon: RefreshCw,
    title: "Policy changes find you last",
    description: "Thailand changed their 60-day policy in December. Your itinerary is now wrong. You found out from a Facebook group — not your planning tool.",
  },
]

export function Problem() {
  return (
    <section className="py-20" style={{ backgroundColor: "#0f1629" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f8fafc" }}
          >
            Visa planning is a spreadsheet disaster
          </h2>
        </motion.div>

        {/* Before/After visual */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden mb-12"
          style={{ border: "1px solid #2a3a5c" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Before — spreadsheet chaos */}
          <div
            className="relative p-8 flex flex-col justify-center"
            style={{ backgroundColor: "#0d1020", borderRight: "1px solid #2a3a5c" }}
          >
            <div className="opacity-40 mb-4">
              <div className="font-mono text-xs space-y-2" style={{ color: "#94a3b8" }}>
                <div className="grid grid-cols-5 gap-2 font-bold text-xs" style={{ color: "#64748b" }}>
                  <span>Country</span><span>Entry</span><span>Exit</span><span>Days</span><span>Sch?</span>
                </div>
                {["Portugal,Apr 1,May 1,30,YES","Thailand,May 2,Jun 1,30,NO","Indonesia,Jun 2,Jul 2,30,NO","Portugal,Jul 5,?,?,YES","=SUM(?,?)"].map((row, i) => (
                  <div key={i} className="grid grid-cols-5 gap-2 text-xs opacity-70">
                    {row.split(",").map((cell, j) => (
                      <span key={j} style={{ color: j === 4 ? "#f97316" : "#64748b" }}>{cell}</span>
                    ))}
                  </div>
                ))}
                <div className="text-xs mt-2 opacity-50" style={{ color: "#ef4444" }}>
                  #REF! #VALUE! =(D2+D5&gt;90?)
                </div>
              </div>
            </div>
            <p className="text-sm font-medium" style={{ color: "#64748b", fontFamily: "Space Grotesk, sans-serif" }}>
              Hours of research. Still not sure it&apos;s legal.
            </p>
          </div>

          {/* After — Bordermath */}
          <div
            className="relative p-8 flex flex-col justify-center"
            style={{ backgroundColor: "#111827" }}
          >
            <div className="rounded-lg overflow-hidden mb-4" style={{ border: "1px solid #2a3a5c" }}>
              <div className="px-3 py-2 flex items-center justify-between" style={{ backgroundColor: "#1a2540", borderBottom: "1px solid #2a3a5c" }}>
                <span className="text-xs font-medium" style={{ color: "#f8fafc", fontFamily: "Space Grotesk, sans-serif" }}>Europe + SEA 2026</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.3)" }}>✓ Compliant</span>
              </div>
              <div className="p-4" style={{ backgroundColor: "#1a2540" }}>
                <div className="flex gap-1.5 mb-3">
                  {[
                    { color: "#f59e0b", label: "🇵🇹 28d", width: "28%" },
                    { color: "#0d9488", label: "🇹🇭 30d", width: "30%" },
                    { color: "#0d9488", label: "🇮🇩 30d", width: "30%" },
                    { color: "#f59e0b", label: "🇵🇹", width: "12%" },
                  ].map((band, i) => (
                    <div key={i} className="h-8 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: band.color, width: band.width, minWidth: "32px" }}>
                      <span className="text-xs font-medium px-2 truncate" style={{ color: i < 2 ? "#0f1629" : "#f8fafc", fontFamily: "JetBrains Mono, monospace", fontSize: "10px" }}>{band.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>Schengen counter</span>
                  <span className="text-xs font-medium" style={{ color: "#f59e0b", fontFamily: "JetBrains Mono, monospace" }}>62 / 90 days</span>
                </div>
                <div className="mt-1.5 rounded-full h-1.5" style={{ backgroundColor: "#243060" }}>
                  <div className="h-1.5 rounded-full" style={{ backgroundColor: "#f59e0b", width: "69%" }} />
                </div>
              </div>
            </div>
            <p className="text-sm font-medium" style={{ color: "#10b981", fontFamily: "Space Grotesk, sans-serif" }}>
              30 seconds. Guaranteed compliant. ✓
            </p>
          </div>
        </motion.div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-6"
              style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c", boxShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(245,158,11,0.12)" }}
              >
                <point.icon size={16} color="#f59e0b" />
              </div>
              <h3
                className="font-semibold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "15px" }}
              >
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.6" }}>
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
