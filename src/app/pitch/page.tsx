"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  AlertTriangle,
  Check,
  X,
  TrendingUp,
  Bell,
  Navigation,
  Zap,
  Globe2,
  DollarSign,
  Users,
  Target,
} from "lucide-react"

// Brand colors
const C = {
  bg: "#0F1629",
  surface: "#1a2540",
  surface2: "#243060",
  border: "#2a3a5c",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
  accent: "#F59E0B",
  teal: "#0d9488",
  coral: "#f97316",
  success: "#10b981",
  destructive: "#ef4444",
}

// ── Slide components ─────────────────────────────────────────────

function Slide1Cover() {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: C.bg }}>
      {/* Background compliance timeline (decorative) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20 flex items-end px-16 gap-2 pb-6">
        {[
          { w: "20%", c: C.accent, label: "🇵🇹" },
          { w: "15%", c: C.teal, label: "🇹🇭" },
          { w: "12%", c: C.coral, label: "🇮🇩" },
          { w: "20%", c: C.accent, label: "🇵🇹" },
        ].map((band, i) => (
          <div key={i} className="flex flex-col items-center gap-1" style={{ width: band.w }}>
            <span className="text-xs">{band.label}</span>
            <div className="w-full h-3 rounded-full" style={{ backgroundColor: band.c }} />
          </div>
        ))}
      </div>

      <div className="text-center relative z-10 max-w-4xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="font-bold mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(64px, 10vw, 100px)",
              color: C.accent,
              lineHeight: 1,
            }}
          >
            Bordermath
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xl md:text-2xl mb-8"
          style={{ color: C.textSecondary, fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Visa route planning for long-term travelers
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg mb-12"
          style={{ color: C.textMuted, fontFamily: "Space Grotesk, sans-serif" }}
        >
          "Stop counting days. Start planning trips."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          <span
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: `${C.accent}1a`, border: `1px solid ${C.accent}40`, color: C.accent, fontFamily: "JetBrains Mono, monospace" }}
          >
            March 2026
          </span>
          <span className="text-sm" style={{ color: C.textMuted }}>chimestream.io</span>
          <div className="flex items-center gap-1.5 text-sm" style={{ color: C.textMuted }}>
            <span>🇵🇹</span><span style={{ color: C.border }}>→</span>
            <span>🇹🇭</span><span style={{ color: C.border }}>→</span>
            <span>🇮🇩</span><span style={{ color: C.border }}>→</span>
            <span>🇵🇹</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Slide2Problem() {
  const cards = [
    {
      icon: "🗂️",
      title: "The tool doesn't exist",
      body: "A traveler going Portugal → Thailand → Indonesia → Portugal uses 4 different tools: Schengen calculator, Thai visa checker, a calendar, and a spreadsheet to tie it together. None of them talk to each other.",
    },
    {
      icon: "⚠️",
      title: "You find out too late",
      body: "Thailand changed their 60-day policy in December 2025. Thousands of nomads found out via a Facebook group post. Not from their planning tool.",
    },
    {
      icon: "📊",
      title: "Spreadsheets break",
      body: "r/digitalnomad (1.4M members): 'I'm constantly reinventing the wheel every time I land in a new place.' The existing tools are calculators — they tell you where you stand, not what to do next.",
    },
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.bg }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent, fontFamily: "Space Grotesk, sans-serif" }}>
            The Problem
          </p>
          <h2
            className="font-bold mb-10"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(36px, 5vw, 54px)", color: C.textPrimary, lineHeight: 1.1 }}
          >
            Visa planning is a<br />spreadsheet disaster
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="rounded-xl p-6"
              style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="font-semibold mb-2 text-base" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.textPrimary }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: C.textSecondary, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Spreadsheet mockup hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 rounded-xl p-4 flex items-center gap-3"
          style={{ backgroundColor: `${C.destructive}0d`, border: `1px solid ${C.destructive}30` }}
        >
          <AlertTriangle size={16} style={{ color: C.destructive }} />
          <span className="text-sm" style={{ color: C.textSecondary }}>
            Consequence: overstay fines, deportation, last-minute route changes — all preventable
          </span>
        </motion.div>
      </div>
    </div>
  )
}

function Slide3Market() {
  const stats = [
    { value: "40,500", label: "\"Digital nomad visa\" searches/mo", suffix: "/mo" },
    { value: "+174%", label: "Keyword growth YoY" },
    { value: "1.4M", label: "r/digitalnomad members" },
  ]

  const bullets = [
    "EU EES biometric system digitizing border entries — violations now trackable",
    "ETIAS launching for non-EU travelers to EU",
    "Thailand/Indonesia entry rules constantly changing (monthly)",
    "Post-pandemic nomad population at all-time high",
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.surface }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.teal, fontFamily: "Space Grotesk, sans-serif" }}>
            The Market
          </p>
          <h2
            className="font-bold mb-10"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(36px, 5vw, 54px)", color: C.textPrimary, lineHeight: 1.1 }}
          >
            The timing is perfect
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
            >
              <div
                className="font-bold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", color: C.accent }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: C.textMuted, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{ color: C.textMuted }}>
              Why Now
            </h3>
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: C.textSecondary }}>
                  <span className="mt-1 shrink-0" style={{ color: C.accent }}>✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-xl p-6 flex flex-col justify-center"
            style={{ backgroundColor: `${C.teal}12`, border: `1px solid ${C.teal}40` }}
          >
            <Globe2 size={28} style={{ color: C.teal }} className="mb-3" />
            <div className="font-bold text-xl mb-1" style={{ color: C.textPrimary }}>$12B+</div>
            <div className="text-sm" style={{ color: C.textSecondary }}>Travel tech adjacent market</div>
            <div className="mt-4 text-sm font-medium" style={{ color: C.teal }}>Freemium SaaS opportunity</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Slide4Solution() {
  const features = [
    {
      icon: <Navigation size={20} style={{ color: C.accent }} />,
      title: "Route Sequencing",
      body: "Add destinations in any order. Bordermath optimizes the sequence to keep you legal — across all zones, not just Schengen.",
    },
    {
      icon: <Bell size={20} style={{ color: C.teal }} />,
      title: "Proactive Alerts",
      body: "30/14/7-day warnings before every deadline. You get alerted before you overstay — not after.",
    },
    {
      icon: <Check size={20} style={{ color: C.success }} />,
      title: "Fix Available",
      body: "When a conflict exists, Bordermath shows the resolution. 'Move exit to May 3rd → compliant.' One click applies it.",
    },
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.bg }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent, fontFamily: "Space Grotesk, sans-serif" }}>
            The Solution
          </p>
          <h2
            className="font-bold mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(36px, 5vw, 54px)", color: C.textPrimary, lineHeight: 1.1 }}
          >
            Bordermath
          </h2>
          <p className="text-lg mb-10" style={{ color: C.textSecondary }}>
            The first <span style={{ color: C.accent }}>PROACTIVE</span> visa route planner. Not a calculator.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="rounded-xl p-6"
              style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.textPrimary }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: C.textSecondary, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compliance timeline mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="rounded-xl p-5"
          style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wide" style={{ color: C.textMuted }}>
              Compliance Timeline
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: `${C.success}1a`, color: C.success, border: `1px solid ${C.success}40` }}
            >
              ✅ Compliant
            </span>
          </div>
          <div className="flex gap-1 h-5 rounded-lg overflow-hidden mb-2">
            <div style={{ width: "28%", backgroundColor: C.accent, borderRadius: "6px 0 0 6px" }} />
            <div style={{ width: "22%", backgroundColor: C.teal }} />
            <div style={{ width: "20%", backgroundColor: C.coral }} />
            <div style={{ width: "28%", backgroundColor: C.accent, borderRadius: "0 6px 6px 0" }} />
          </div>
          <div className="flex gap-1 text-xs" style={{ color: C.textMuted, fontFamily: "JetBrains Mono, monospace" }}>
            <span style={{ width: "28%" }}>🇵🇹 28d</span>
            <span style={{ width: "22%" }}>🇹🇭 30d</span>
            <span style={{ width: "20%" }}>🇮🇩 30d</span>
            <span style={{ width: "28%" }}>🇵🇹 28d</span>
          </div>
          <div className="mt-3 text-xs flex items-center gap-2" style={{ color: C.accent, fontFamily: "JetBrains Mono, monospace" }}>
            <span>Schengen:</span>
            <span className="font-bold">56/90 days</span>
            <span style={{ color: C.textMuted }}>· 34 days remaining</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Slide5ProductDemo() {
  const panels = [
    {
      num: "01",
      title: "Add destinations",
      caption: "Add destinations in any order. Drag to reorder. Free tier: 2 countries.",
      visual: (
        <div className="rounded-lg p-4" style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}>
          {[{ flag: "🇵🇹", country: "Portugal", dur: "28 days" }, { flag: "🇹🇭", country: "Thailand", dur: "30 days" }, { flag: "🇮🇩", country: "Indonesia", dur: "30 days" }].map((d, i) => (
            <div key={i} className="flex items-center gap-2 mb-2 text-sm" style={{ color: C.textSecondary }}>
              <span>{d.flag}</span>
              <span>{d.country}</span>
              <span className="ml-auto" style={{ color: C.textMuted, fontFamily: "JetBrains Mono, monospace" }}>{d.dur}</span>
            </div>
          ))}
          <button className="w-full mt-2 py-1.5 rounded-lg text-xs font-medium" style={{ backgroundColor: `${C.accent}1a`, color: C.accent, border: `1px dashed ${C.accent}40` }}>
            + Add destination
          </button>
        </div>
      ),
    },
    {
      num: "02",
      title: "Watch the timeline build",
      caption: "Compliance timeline builds in real time. Schengen days tracked across the full route.",
      visual: (
        <div className="rounded-lg p-4" style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}>
          <div className="flex gap-0.5 h-4 rounded mb-2">
            <div style={{ width: "35%", backgroundColor: C.accent, borderRadius: "4px 0 0 4px" }} />
            <div style={{ width: "30%", backgroundColor: C.teal }} />
            <div style={{ width: "35%", backgroundColor: C.coral, borderRadius: "0 4px 4px 0" }} />
          </div>
          <div className="text-xs mb-3" style={{ color: C.textMuted, fontFamily: "JetBrains Mono, monospace" }}>56/90 Schengen days</div>
          <div className="text-xs px-2 py-1 rounded text-center font-medium" style={{ backgroundColor: `${C.success}12`, color: C.success }}>
            ✅ Route is compliant
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Travel with confidence",
      caption: "Proactive alerts before deadlines. Policy changes update your routes automatically.",
      visual: (
        <div className="rounded-lg p-4" style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}>
          <div className="text-xs mb-2" style={{ color: C.textMuted }}>Email Alert</div>
          <div className="text-xs leading-relaxed" style={{ color: C.textSecondary }}>
            <span style={{ color: C.accent }}>⚠️</span> 14 days until Schengen exit<br />
            Route: Europe + SEA 2026<br />
            Required exit: <span style={{ color: C.textPrimary, fontFamily: "JetBrains Mono, monospace" }}>May 3rd</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.surface }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent, fontFamily: "Space Grotesk, sans-serif" }}>
            Product Demo
          </p>
          <h2
            className="font-bold mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(32px, 4.5vw, 50px)", color: C.textPrimary }}
          >
            See how it works
          </h2>
          <p className="text-base mb-10" style={{ color: C.textSecondary }}>Three steps to a legal route</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {panels.map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="rounded-xl p-6"
              style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
            >
              <div
                className="font-bold mb-3 text-sm"
                style={{ fontFamily: "JetBrains Mono, monospace", color: C.textMuted }}
              >
                {panel.num}
              </div>
              <h3 className="font-semibold mb-3" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.textPrimary }}>
                {panel.title}
              </h3>
              {panel.visual}
              <p className="mt-3 text-xs leading-relaxed" style={{ color: C.textMuted, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {panel.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide6Competition() {
  const rows = [
    "Multi-country sequencing",
    "Proactive alerts",
    "Non-Schengen coverage",
    "Route optimization",
    "Policy change detection",
    "Conflict resolution (\"Fix available\")",
  ]

  const cols = [
    { name: "Bordermath", highlight: true },
    { name: "Schengen Simple", highlight: false },
    { name: "visa-calc.com", highlight: false },
    { name: "travelvisastack", highlight: false },
  ]

  const data = [
    [true, false, false, false],
    [true, false, false, false],
    [true, false, false, "partial"],
    [true, false, false, false],
    [true, false, false, false],
    [true, false, false, false],
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.bg }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent, fontFamily: "Space Grotesk, sans-serif" }}>
            Competitive Landscape
          </p>
          <h2
            className="font-bold mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(28px, 4vw, 46px)", color: C.textPrimary }}
          >
            We own a category no one has built yet
          </h2>
          <p className="text-base mb-8" style={{ color: C.textSecondary }}>
            Every competitor is a calculator. Bordermath is a planner.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden"
          style={{ border: `1px solid ${C.border}` }}
        >
          {/* Header */}
          <div className="grid grid-cols-5 text-xs font-semibold" style={{ backgroundColor: C.surface }}>
            <div className="p-4" style={{ color: C.textMuted }}>Feature</div>
            {cols.map((col, i) => (
              <div
                key={i}
                className="p-4 text-center"
                style={{
                  color: col.highlight ? C.accent : C.textMuted,
                  borderLeft: col.highlight ? `2px solid ${C.accent}` : `1px solid ${C.border}`,
                  backgroundColor: col.highlight ? `${C.accent}08` : "transparent",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                {col.name}
              </div>
            ))}
          </div>
          {/* Rows */}
          {rows.map((row, ri) => (
            <motion.div
              key={ri}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + ri * 0.06 }}
              className="grid grid-cols-5"
              style={{ borderTop: `1px solid ${C.border}` }}
            >
              <div className="p-3 text-xs" style={{ color: C.textSecondary }}>{row}</div>
              {data[ri].map((val, ci) => (
                <div
                  key={ci}
                  className="p-3 text-center text-sm"
                  style={{
                    borderLeft: ci === 0 ? `2px solid ${C.accent}` : `1px solid ${C.border}`,
                    backgroundColor: ci === 0 ? `${C.accent}05` : "transparent",
                  }}
                >
                  {val === true ? (
                    <span style={{ color: C.success }}>✅</span>
                  ) : val === "partial" ? (
                    <span style={{ color: C.coral }} className="text-xs">Partial</span>
                  ) : (
                    <span style={{ color: C.textMuted }}>❌</span>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-xs"
          style={{ color: C.textMuted }}
        >
          "Schengen Simple tracks 1 zone. Bordermath plans across <span style={{ color: C.textPrimary }}>ALL zones</span> — Schengen, SEA, everywhere."
        </motion.div>
      </div>
    </div>
  )
}

function Slide7Traction() {
  const proofs = [
    {
      icon: "📍",
      title: "Domain grabbed same day",
      body: "bordermath.com was registered on March 22, 2026 — the same day we had the idea. Independent proof the market sees this.",
    },
    {
      icon: "🌊",
      title: "Competitor appeared Feb 2026",
      body: "travelvisastack.com launched in r/InternetIsBeautiful — immediately validated demand. But they're a requirement checker, not a route planner.",
    },
    {
      icon: "🗳️",
      title: "Community built workarounds",
      body: "A traveler built a digital nomad visa map on Google Data Studio and got 190 upvotes in April 2025. People are cobbling together solutions.",
    },
  ]

  const channels = [
    "5 subreddits (1.4M+ total reach)",
    "7 Facebook nomad groups",
    "14 YouTube nomad channels identified",
    "Coworking partnerships (Selina, KoHub, Dojo Bali, Outsite)",
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.surface }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.teal, fontFamily: "Space Grotesk, sans-serif" }}>
            Traction
          </p>
          <h2
            className="font-bold mb-10"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(32px, 4.5vw, 50px)", color: C.textPrimary }}
          >
            Market validation — before we launched
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {proofs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="rounded-xl p-5"
                style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{p.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: C.textPrimary, fontFamily: "Space Grotesk, sans-serif" }}>
                      {p.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: C.textSecondary }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-xl p-6"
            style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
          >
            <h3
              className="font-semibold mb-4 text-sm uppercase tracking-wide"
              style={{ color: C.textMuted, fontFamily: "Space Grotesk, sans-serif" }}
            >
              Distribution ready
            </h3>
            <ul className="space-y-3">
              {channels.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: C.textSecondary }}>
                  <Check size={14} style={{ color: C.success, marginTop: 2 }} className="shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Community reach", value: "1.4M+", color: C.accent },
                  { label: "Nomad hotspots", value: "5 cities", color: C.teal },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="font-bold text-lg" style={{ fontFamily: "JetBrains Mono, monospace", color: m.color }}>
                      {m.value}
                    </div>
                    <div className="text-xs" style={{ color: C.textMuted }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Slide8BusinessModel() {
  const tiers = [
    {
      name: "Explorer",
      icon: "🆓",
      price: "Free",
      period: "forever",
      features: ["2-country route planning", "Schengen 90/180 calculator", "1 saved route"],
      featured: false,
    },
    {
      name: "Nomad",
      icon: "🏕️",
      price: "$15",
      period: "/month",
      features: ["Unlimited destinations", "Proactive alerts (30/14/7 day)", "Route re-sequencing", "Policy change detection"],
      featured: true,
      badge: "Most Popular",
    },
    {
      name: "Borderless",
      icon: "🌍",
      price: "$50",
      period: "/month",
      features: ["Multi-passport support (3)", "Budget optimization", "PDF export", "Priority support"],
      featured: false,
    },
  ]

  const metrics = [
    { label: "Free → Paid trigger", value: "3rd country add", color: C.accent },
    { label: "Avg revenue/user", value: "~$20/mo", color: C.teal },
    { label: "500 free → 10%", value: "$1K MRR", color: C.success },
    { label: "1K free → 15%", value: "$3K MRR", color: C.accent },
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.bg }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent, fontFamily: "Space Grotesk, sans-serif" }}>
            Business Model
          </p>
          <h2
            className="font-bold mb-10"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(28px, 4vw, 46px)", color: C.textPrimary }}
          >
            Freemium SaaS with a natural upgrade wall
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="rounded-xl p-6 relative"
              style={{
                backgroundColor: tier.featured ? C.surface2 : C.surface,
                border: tier.featured ? `2px solid ${C.accent}` : `1px solid ${C.border}`,
              }}
            >
              {tier.badge && (
                <div
                  className="absolute -top-3 left-6 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: C.accent, color: C.bg }}
                >
                  {tier.badge}
                </div>
              )}
              <div className="text-2xl mb-2">{tier.icon}</div>
              <div className="font-semibold mb-1" style={{ color: C.textMuted, fontSize: "12px" }}>{tier.name}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-bold text-3xl" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.textPrimary }}>
                  {tier.price}
                </span>
                <span className="text-sm" style={{ color: C.textMuted }}>{tier.period}</span>
              </div>
              <ul className="space-y-2">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-xs" style={{ color: C.textSecondary }}>
                    <span style={{ color: tier.featured ? C.accent : C.teal }}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="rounded-xl p-4 text-center"
              style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
            >
              <div className="font-bold text-lg mb-1" style={{ fontFamily: "JetBrains Mono, monospace", color: m.color }}>
                {m.value}
              </div>
              <div className="text-xs" style={{ color: C.textMuted }}>{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide9GoToMarket() {
  const phases = [
    {
      period: "Week 1",
      title: "Ignition",
      color: C.accent,
      items: [
        "r/digitalnomad (1.4M) — personal story launch post",
        "r/solotravel + r/AmerExit — cross-posts",
        "7 nomad Facebook groups — staggered",
      ],
    },
    {
      period: "Week 2–3",
      title: "Partnership",
      color: C.teal,
      items: [
        "Coworking spaces — free Pro for communities",
        "YouTube nomad channels — free Pro + review ask",
        "SEO blog posts (3 articles targeting 450K+/mo keywords)",
      ],
    },
    {
      period: "Week 4",
      title: "ProductHunt",
      color: C.coral,
      items: [
        "After first 50 real users for social proof",
        "All-hands-on-deck launch day",
        "Target: Top 10 product of the day",
      ],
    },
    {
      period: "Month 2",
      title: "Paid Experiments",
      color: C.textMuted,
      items: [
        "Reddit Ads: $200 test budget",
        "Google Ads: $200 (long-tail keyword targeting)",
        "Double down on winning channels",
      ],
    },
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.surface }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.teal, fontFamily: "Space Grotesk, sans-serif" }}>
            Go-To-Market
          </p>
          <h2
            className="font-bold mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(28px, 4vw, 46px)", color: C.textPrimary }}
          >
            We go where nomads already are
          </h2>
          <div className="flex gap-6 mb-8 text-sm flex-wrap" style={{ color: C.textSecondary }}>
            <span>60-day targets:</span>
            <span><span style={{ color: C.accent, fontFamily: "JetBrains Mono, monospace" }}>500</span> free signups</span>
            <span><span style={{ color: C.teal, fontFamily: "JetBrains Mono, monospace" }}>50</span> paid conversions</span>
            <span><span style={{ color: C.success, fontFamily: "JetBrains Mono, monospace" }}>$750</span> MRR</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-xl p-5"
              style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, borderTop: `3px solid ${phase.color}` }}
            >
              <div className="text-xs mb-1" style={{ color: phase.color, fontFamily: "JetBrains Mono, monospace" }}>
                {phase.period}
              </div>
              <h3 className="font-semibold mb-4 text-sm" style={{ color: C.textPrimary, fontFamily: "Space Grotesk, sans-serif" }}>
                {phase.title}
              </h3>
              <ul className="space-y-2">
                {phase.items.map((item, ii) => (
                  <li key={ii} className="text-xs leading-relaxed flex items-start gap-1.5" style={{ color: C.textSecondary }}>
                    <span className="shrink-0 mt-0.5" style={{ color: phase.color }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide10Opportunity() {
  const reasons = [
    { n: "1", title: "First mover in a real category", body: "Sequencing vs. calculating. No one owns 'route planner for long-term travelers'." },
    { n: "2", title: "Pull traffic is massive", body: '"trip planner" 450K/mo, "digital nomad visa" 40.5K/mo, both LOW competition.' },
    { n: "3", title: "Distribution is pre-built", body: "1.4M community of exact target users in one subreddit." },
    { n: "4", title: "Timing is irreversible", body: "EES biometric, ETIAS, post-pandemic nomad surge — happening NOW." },
    { n: "5", title: "Freemium scales cleanly", body: "Free tool drives SEO/community/word-of-mouth, paid tier monetizes intent." },
  ]

  const path = [
    { period: "Month 1", value: "$0–$300 MRR", note: "Community launch" },
    { period: "Month 3", value: "$1K–$3K MRR", note: "SEO + ProductHunt" },
    { period: "Month 6", value: "$5K–$10K MRR", note: "Partners + SEO compound" },
    { period: "Month 12", value: "$15K–$30K MRR", note: "Category ownership" },
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.bg }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent, fontFamily: "Space Grotesk, sans-serif" }}>
            The Opportunity
          </p>
          <h2
            className="font-bold mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(26px, 3.5vw, 42px)", color: C.textPrimary }}
          >
            $12B travel tech market. One category unclaimed.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
              >
                <span
                  className="font-bold text-sm shrink-0"
                  style={{ fontFamily: "JetBrains Mono, monospace", color: C.accent }}
                >
                  {r.n}.
                </span>
                <div>
                  <div className="font-semibold text-sm mb-0.5" style={{ color: C.textPrimary }}>{r.title}</div>
                  <div className="text-xs" style={{ color: C.textSecondary }}>{r.body}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl p-6"
            style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
          >
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{ color: C.textMuted }}>
              Revenue Path
            </h3>
            <div className="space-y-3">
              {path.map((p, i) => (
                <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: `1px solid ${C.border}` }}>
                  <div>
                    <div className="text-xs" style={{ color: C.textMuted, fontFamily: "JetBrains Mono, monospace" }}>{p.period}</div>
                    <div className="text-xs mt-0.5" style={{ color: C.textSecondary }}>{p.note}</div>
                  </div>
                  <div className="font-bold text-sm" style={{ fontFamily: "JetBrains Mono, monospace", color: C.success }}>
                    {p.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Slide11Team() {
  const stack = [
    "Next.js 14 App Router + shadcn/ui + Tailwind",
    "Postgres (shared infrastructure)",
    "Stripe (billing)",
    "Coolify (deployment)",
  ]

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ backgroundColor: C.surface }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent, fontFamily: "Space Grotesk, sans-serif" }}>
            Team / About
          </p>
          <h2
            className="font-bold mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: C.textPrimary }}
          >
            Built by ChimeStream
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl p-6"
              style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: C.textSecondary, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Bordermath is a ChimeStream product. We build tools for travelers, founders, and people doing hard things with software.
              </p>
              <p className="text-sm font-semibold" style={{ color: C.textPrimary }}>
                Built in 3 weeks. Deployed. Real product, real stack, real users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl p-6"
              style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
            >
              <h3 className="text-xs uppercase tracking-wide mb-3" style={{ color: C.textMuted }}>Contact</h3>
              <div className="space-y-2 text-sm" style={{ color: C.textSecondary, fontFamily: "JetBrains Mono, monospace" }}>
                <div>Live: <a href="https://bordermath.ashketing.com" style={{ color: C.accent }}>bordermath.ashketing.com</a></div>
                <div>Email: <span style={{ color: C.textPrimary }}>hello@bordermath.io</span></div>
                <div>Builder: <span style={{ color: C.textPrimary }}>Ash Hatef / ChimeStream</span></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl p-6"
            style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
          >
            <h3 className="text-xs uppercase tracking-wide mb-4" style={{ color: C.textMuted }}>Tech Stack</h3>
            <ul className="space-y-3">
              {stack.map((s, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Zap size={14} style={{ color: C.accent }} className="shrink-0" />
                  <span className="text-sm" style={{ color: C.textSecondary }}>{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 grid grid-cols-2 gap-4" style={{ borderTop: `1px solid ${C.border}` }}>
              {[
                { label: "Build time", value: "3 weeks" },
                { label: "Stage", value: "Live MVP" },
                { label: "Countries", value: "34+ covered" },
                { label: "Score", value: "87/100" },
              ].map((m, i) => (
                <div key={i}>
                  <div className="font-bold text-base" style={{ fontFamily: "JetBrains Mono, monospace", color: C.teal }}>{m.value}</div>
                  <div className="text-xs" style={{ color: C.textMuted }}>{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Slide12CTA() {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: C.bg }}>
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 flex items-end px-16 gap-2 pb-8">
        {[
          { w: "22%", c: C.accent },
          { w: "16%", c: C.teal },
          { w: "14%", c: C.coral },
          { w: "22%", c: C.accent },
          { w: "18%", c: C.teal },
        ].map((band, i) => (
          <div key={i} className="h-4 rounded-full" style={{ width: band.w, backgroundColor: band.c }} />
        ))}
      </div>

      <div className="text-center relative z-10 max-w-3xl px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold mb-4"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(40px, 6vw, 68px)",
            color: C.textPrimary,
            lineHeight: 1.1,
          }}
        >
          Start planning<br />your route.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg mb-10"
          style={{ color: C.textSecondary }}
        >
          Free. No credit card. 60 seconds to your first compliant itinerary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://bordermath.ashketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all"
            style={{ backgroundColor: C.accent, color: C.bg, fontFamily: "Space Grotesk, sans-serif" }}
          >
            Plan my route free →
          </a>
          <a
            href="mailto:hello@bordermath.io"
            className="text-sm"
            style={{ color: C.textMuted }}
          >
            Questions? hello@bordermath.io
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-sm"
          style={{ color: C.textMuted, fontFamily: "JetBrains Mono, monospace" }}
        >
          Bordermath — March 2026 · chimestream.io
        </motion.div>
      </div>
    </div>
  )
}

// ── Main pitch deck ────────────────────────────────────────────

const SLIDES = [
  { id: 1, component: <Slide1Cover />, label: "Cover" },
  { id: 2, component: <Slide2Problem />, label: "Problem" },
  { id: 3, component: <Slide3Market />, label: "Market" },
  { id: 4, component: <Slide4Solution />, label: "Solution" },
  { id: 5, component: <Slide5ProductDemo />, label: "Product" },
  { id: 6, component: <Slide6Competition />, label: "Competition" },
  { id: 7, component: <Slide7Traction />, label: "Traction" },
  { id: 8, component: <Slide8BusinessModel />, label: "Model" },
  { id: 9, component: <Slide9GoToMarket />, label: "GTM" },
  { id: 10, component: <Slide10Opportunity />, label: "Opportunity" },
  { id: 11, component: <Slide11Team />, label: "Team" },
  { id: 12, component: <Slide12CTA />, label: "CTA" },
]

export default function PitchPage() {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), [])
  const next = useCallback(() => setCurrent((c) => Math.min(SLIDES.length - 1, c + 1)), [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next()
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [prev, next])

  // Click left/right half navigation
  const handleClick = (e: React.MouseEvent) => {
    const midpoint = window.innerWidth / 2
    if (e.clientX > midpoint) next()
    else prev()
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none"
      style={{ width: "100vw", height: "100vh", backgroundColor: C.bg, cursor: "pointer" }}
      onClick={handleClick}
    >
      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-3"
        style={{ backgroundColor: `${C.bg}e0`, backdropFilter: "blur(8px)", borderBottom: `1px solid ${C.border}` }}
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          href="/"
          className="font-bold text-sm"
          style={{ fontFamily: "Space Grotesk, sans-serif", color: C.accent }}
        >
          Bordermath
        </Link>
        <div className="flex items-center gap-4">
          <span style={{ color: C.textMuted, fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>
            {current + 1} / {SLIDES.length}
          </span>
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-1.5 rounded-lg transition-colors"
            style={{
              border: `1px solid ${current === 0 ? C.border : C.accent}`,
              color: current === 0 ? C.border : C.accent,
              backgroundColor: "transparent",
            }}
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            disabled={current === SLIDES.length - 1}
            className="p-1.5 rounded-lg transition-colors"
            style={{
              border: `1px solid ${current === SLIDES.length - 1 ? C.border : C.accent}`,
              color: current === SLIDES.length - 1 ? C.border : C.accent,
              backgroundColor: "transparent",
            }}
          >
            <ChevronRight size={14} />
          </button>
          <a
            href="https://bordermath.ashketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg font-medium"
            style={{ backgroundColor: C.accent, color: C.bg, fontFamily: "Space Grotesk, sans-serif" }}
          >
            Live Site <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 pt-12"
        >
          {SLIDES[current].component}
        </motion.div>
      </AnimatePresence>

      {/* Bottom dots */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5"
        onClick={(e) => e.stopPropagation()}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              backgroundColor: i === current ? C.accent : C.border,
            }}
            title={SLIDES[i].label}
          />
        ))}
      </div>
    </div>
  )
}
