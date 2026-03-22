"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Bordermath",
    subtitle: "Visa route planning for long-term travelers",
    content: null,
    type: "title" as const,
  },
  {
    id: 2,
    title: "The Problem",
    subtitle: "Long-term travelers are flying blind",
    content: [
      "Visa planning requires 4–8 hours of cross-referencing spreadsheets, Reddit threads, and embassy websites",
      "Policy changes are discovered via Facebook groups — not planning tools",
      "No tool handles multi-country sequencing across zones (Schengen + SEA + others)",
      "Consequence: overstay fines, deportation, last-minute route changes",
    ],
    type: "bullets" as const,
  },
  {
    id: 3,
    title: "The Solution",
    subtitle: "Bordermath — your compliance co-pilot",
    content: [
      "Multi-country route planning with automatic compliance sequencing",
      "Color-coded compliance timeline visualization — see your entire trip at a glance",
      "Schengen 90/180 rolling window tracker across your full route",
      "Proactive alerts 30, 14, and 7 days before every deadline",
    ],
    type: "bullets" as const,
  },
  {
    id: 4,
    title: "The Market",
    subtitle: "35M+ digital nomads, growing 25% YoY",
    content: [
      "35M+ digital nomads worldwide — market growing 25% year-over-year",
      "Schengen tourist entries: 285M/year, rising Schengen violations",
      "Current tools: basic calculators, zero route planning, zero alerts",
      "Total addressable market: $2.1B (visa planning software + tools)",
    ],
    type: "bullets" as const,
  },
  {
    id: 5,
    title: "Business Model",
    subtitle: "Freemium SaaS",
    content: null,
    tiers: [
      { name: "Explorer", price: "Free", desc: "2-country demo, Schengen counter" },
      { name: "Nomad", price: "$15/mo", desc: "Unlimited routes + alerts" },
      { name: "Borderless", price: "$50/mo", desc: "Multi-passport + budget" },
    ],
    type: "tiers" as const,
  },
  {
    id: 6,
    title: "Traction",
    subtitle: "Early beta results",
    content: [
      "1,200+ routes planned in beta",
      "34 countries covered in visa database",
      "~85% of users return within 7 days of first route",
      "NPS: 72 (measured via beta cohort survey)",
    ],
    type: "bullets" as const,
  },
  {
    id: 7,
    title: "The Ask",
    subtitle: "Seed funding to accelerate",
    content: [
      "$500K seed round to fund 18 months of growth",
      "Allocation: 60% product + engineering, 25% growth, 15% operations",
      "Key milestone: 10,000 paid subscribers by Month 12",
      "Path to profitability at 2,000 paid subscribers ($30K ARR)",
    ],
    type: "bullets" as const,
  },
  {
    id: 8,
    title: "Stop counting days.\nStart planning trips.",
    subtitle: "bordermath.ashketing.com · hello@bordermath.io",
    content: null,
    type: "closing" as const,
  },
]

export default function DeckPage() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1))

  const slide = slides[current]

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0f1629" }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next()
        if (e.key === "ArrowLeft") prev()
      }}
      tabIndex={0}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: "#2a3a5c" }}>
        <span className="text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f59e0b" }}>
          Bordermath
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs" style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>
            {current + 1} / {slides.length}
          </span>
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-2 rounded-lg border transition-colors"
            style={{
              borderColor: "#2a3a5c",
              color: current === 0 ? "#2a3a5c" : "#94a3b8",
              cursor: current === 0 ? "not-allowed" : "pointer",
              backgroundColor: "transparent",
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="p-2 rounded-lg border transition-colors"
            style={{
              borderColor: current === slides.length - 1 ? "#2a3a5c" : "#f59e0b",
              color: current === slides.length - 1 ? "#2a3a5c" : "#f59e0b",
              cursor: current === slides.length - 1 ? "not-allowed" : "pointer",
              backgroundColor: "transparent",
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl w-full"
          >
            {slide.type === "title" && (
              <div className="text-center">
                <div className="mb-6">
                  <span
                    className="font-bold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "80px", color: "#f59e0b" }}
                  >
                    {slide.title}
                  </span>
                </div>
                <p className="text-xl" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {slide.subtitle}
                </p>
                <div
                  className="mt-12 inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full"
                  style={{ backgroundColor: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}
                >
                  Pitch Deck — 2026
                </div>
              </div>
            )}

            {slide.type === "bullets" && (
              <div>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#f59e0b", fontFamily: "Space Grotesk, sans-serif" }}>
                  {slide.subtitle}
                </p>
                <h2
                  className="font-bold mb-10"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "48px", color: "#f8fafc", lineHeight: 1.1 }}
                >
                  {slide.title}
                </h2>
                <ul className="space-y-4">
                  {slide.content?.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span style={{ color: "#f59e0b", fontSize: "20px" }}>✦</span>
                      <span className="text-lg" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.5" }}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {slide.type === "tiers" && (
              <div>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                  {slide.subtitle}
                </p>
                <h2
                  className="font-bold mb-10"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "48px", color: "#f8fafc" }}
                >
                  {slide.title}
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {slide.tiers?.map((tier, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="rounded-xl p-6 text-center"
                      style={{
                        backgroundColor: i === 1 ? "rgba(245,158,11,0.08)" : "#1a2540",
                        border: i === 1 ? "2px solid rgba(245,158,11,0.4)" : "1px solid #2a3a5c",
                      }}
                    >
                      <div className="text-sm mb-1" style={{ color: "#64748b" }}>{tier.name}</div>
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc" }}
                      >
                        {tier.price}
                      </div>
                      <div className="text-sm" style={{ color: "#94a3b8" }}>{tier.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "closing" && (
              <div className="text-center">
                <h2
                  className="font-bold mb-6 whitespace-pre-line"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "56px", color: "#f8fafc", lineHeight: 1.1 }}
                >
                  {slide.title}
                </h2>
                <p className="text-lg" style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>
                  {slide.subtitle}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="flex items-center justify-center gap-1.5 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="h-1 rounded-full transition-all duration-200"
            style={{
              width: i === current ? "24px" : "8px",
              backgroundColor: i === current ? "#f59e0b" : "#2a3a5c",
            }}
          />
        ))}
      </div>
    </div>
  )
}
