"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ComplianceTimeline, DEMO_STOPS } from "@/components/route/compliance-timeline"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/bg-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(15,22,41,0.92)", backgroundBlendMode: "multiply" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left — 60% */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium mb-6"
                style={{
                  backgroundColor: "rgba(245,158,11,0.12)",
                  color: "#f59e0b",
                  border: "1px solid rgba(245,158,11,0.25)",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                ✦ Now in beta — 1,200+ routes planned
              </span>
            </motion.div>

            <motion.h1
              className="font-bold leading-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(40px, 5vw, 72px)",
                color: "#f8fafc",
                lineHeight: 1.1,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stop counting days.
              <br />
              <span style={{ color: "#f59e0b" }}>Start planning trips.</span>
            </motion.h1>

            <motion.p
              className="text-lg leading-relaxed mb-8"
              style={{
                color: "#94a3b8",
                maxWidth: "520px",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                lineHeight: "1.7",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bordermath sequences your multi-country route around visa windows — so you stay legal, stay moving, and never scramble to leave a country early.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/signup"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-150"
                style={{
                  backgroundColor: "#f59e0b",
                  color: "#0f1629",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fbbf24")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f59e0b")}
              >
                Plan my route — it&apos;s free
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-150"
                style={{
                  color: "#94a3b8",
                  border: "1px solid #2a3a5c",
                  fontFamily: "Space Grotesk, sans-serif",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f8fafc"
                  e.currentTarget.style.borderColor = "#f59e0b"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#94a3b8"
                  e.currentTarget.style.borderColor = "#2a3a5c"
                }}
              >
                See how it works ↓
              </a>
            </motion.div>
          </div>

          {/* Right — 40% — Product card */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  boxShadow: "0 0 40px rgba(245,158,11,0.15), 0 0 80px rgba(245,158,11,0.06)",
                  border: "1px solid rgba(245,158,11,0.25)",
                }}
              >
                {/* Card header */}
                <div
                  className="px-4 py-3 flex items-center justify-between"
                  style={{ backgroundColor: "#1a2540", borderBottom: "1px solid #2a3a5c" }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#f8fafc", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Europe + SEA 2026
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(16,185,129,0.15)",
                      color: "#10b981",
                      border: "1px solid rgba(16,185,129,0.25)",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    ✓ Compliant
                  </span>
                </div>

                <div className="p-4" style={{ backgroundColor: "#1a2540" }}>
                  <ComplianceTimeline stops={DEMO_STOPS} compact />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
