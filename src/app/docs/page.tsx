"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, FileText, Menu, X, ChevronRight, Check, AlertTriangle, TrendingUp, Globe2, Bell, Navigation } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

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

// ── Section content components ─────────────────────────────────

function ResearchContent() {
  const competitors = [
    { name: "Schengen Simple", type: "iOS/Android app", weakness: "Schengen only. No route optimization. No multi-country." },
    { name: "visa-calculator.com", type: "Web calculator", weakness: "No accounts, no alerts, no non-Schengen, no optimization." },
    { name: "Days Monitor", type: "iOS app", weakness: "Schengen only. No global coverage, no sequencing." },
    { name: "travelvisastack.com", type: "Requirement checker", weakness: "Checks requirements — not a route planner or sequencer." },
  ]

  const keywords = [
    { kw: "digital nomad visa", vol: "40,500/mo", growth: "+174%", comp: "LOW" },
    { kw: "trip planner", vol: "450K/mo", growth: "—", comp: "LOW" },
    { kw: "travel planning", vol: "110K/mo", growth: "—", comp: "LOW" },
    { kw: "go trip planner", vol: "22.2K/mo", growth: "—", comp: "LOW" },
  ]

  const signals = [
    { icon: "📊", text: "r/digitalnomad: 1.4M+ members actively asking about visa tracking tools weekly" },
    { icon: "💬", text: 'Direct quote (May 2025): "I\'m constantly reinventing the wheel every time I land in a new place"' },
    { icon: "🗳️", text: "Traveler built a Google Data Studio visa map — 190 upvotes (April 2025)" },
    { icon: "🌐", text: "travelvisastack.com launched Feb 2026 — confirms market demand" },
    { icon: "🔑", text: "bordermath.com registered March 22, 2026 (same day as idea) — independent validation" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-xl p-6" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
        <div className="flex items-start gap-4">
          <div className="text-4xl">📊</div>
          <div>
            <h2 className="font-bold text-2xl mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.textPrimary }}>
              Market Research
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: C.textSecondary }}>
              IdeaBrowser score: <span style={{ color: C.accent, fontFamily: "JetBrains Mono, monospace" }}>87/100</span> ·
              Opportunity: 9/10 · Problem: 9/10 · Feasibility: 8/10 · Why Now: 9/10
            </p>
          </div>
        </div>
      </div>

      {/* Market size */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Market Opportunity</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { label: "TAM", value: "$12B+", note: "Travel tech adjacent" },
            { label: "Revenue Potential", value: "$1M–$10M", note: "ARR (freemium upsell)" },
            { label: "Keyword Growth", value: "+174%", note: "\"Digital nomad visa\"" },
          ].map((m, i) => (
            <div key={i} className="rounded-xl p-5 text-center" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
              <div className="text-xs mb-1" style={{ color: C.textMuted }}>{m.label}</div>
              <div className="font-bold text-2xl mb-1" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.accent }}>{m.value}</div>
              <div className="text-xs" style={{ color: C.textSecondary }}>{m.note}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Why Now", items: ["EU EES biometric system digitizing border entries", "ETIAS launching for non-EU travelers to EU", "Thailand/Indonesia entry rules changing monthly", "Post-pandemic nomad population at all-time high"] },
            { label: "Market Gap — What's Missing", items: ["Multi-country route SEQUENCING (not just tracking)", "Proactive deadline alerts before violations happen", "Route re-optimization when policies change mid-trip", "Budget optimization layered on visa math"] },
          ].map((section, i) => (
            <div key={i} className="rounded-xl p-5" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
              <h4 className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: C.textMuted }}>{section.label}</h4>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: C.textSecondary }}>
                    <span className="shrink-0 mt-0.5" style={{ color: C.accent }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Keyword data */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Keyword Data</h3>
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
          <div className="grid grid-cols-4 text-xs font-semibold p-3" style={{ backgroundColor: C.surface, color: C.textMuted }}>
            <span>Keyword</span><span>Volume</span><span>Growth</span><span>Competition</span>
          </div>
          {keywords.map((kw, i) => (
            <div key={i} className="grid grid-cols-4 text-sm p-3" style={{ borderTop: `1px solid ${C.border}` }}>
              <span style={{ color: C.textPrimary, fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>{kw.kw}</span>
              <span style={{ color: C.accent, fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>{kw.vol}</span>
              <span style={{ color: C.teal, fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>{kw.growth}</span>
              <span className="text-xs px-2 py-0.5 rounded-full w-fit" style={{ backgroundColor: `${C.success}1a`, color: C.success }}>{kw.comp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Competitors */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Competitive Analysis</h3>
        <div className="space-y-3">
          {competitors.map((c, i) => (
            <div key={i} className="rounded-xl p-4" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-sm mb-0.5" style={{ color: C.textPrimary }}>{c.name}</div>
                  <div className="text-xs mb-2" style={{ color: C.textMuted }}>{c.type}</div>
                  <div className="flex items-start gap-2 text-xs" style={{ color: C.textSecondary }}>
                    <span style={{ color: C.destructive }}>✗</span>
                    {c.weakness}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="rounded-xl p-4" style={{ backgroundColor: `${C.accent}0a`, border: `2px solid ${C.accent}40` }}>
            <div className="font-semibold text-sm mb-1" style={{ color: C.accent }}>Bordermath</div>
            <div className="text-xs" style={{ color: C.textSecondary }}>
              The ONLY tool with multi-country route sequencing + proactive alerts + non-Schengen coverage + route optimization + policy change detection + conflict resolution.
            </div>
          </div>
        </div>
      </div>

      {/* Validation signals */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Validation Signals</h3>
        <div className="space-y-2">
          {signals.map((s, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl p-4" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
              <span className="text-xl">{s.icon}</span>
              <span className="text-sm" style={{ color: C.textSecondary }}>{s.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="https://docs.google.com/document/d/1I-MyenaqLVSp-_Mmq4KP24VfNpn0THH7MdVZw03llWE"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: C.accent, color: C.bg, fontFamily: "Space Grotesk, sans-serif" }}
        >
          <ExternalLink size={16} /> Full Research Doc
        </a>
      </div>
    </div>
  )
}

function GTMContent() {
  const channels = [
    {
      tier: "Day 1 — Free / Highest Leverage",
      color: C.accent,
      items: [
        { name: "r/digitalnomad (1.4M)", desc: "Personal story launch post — Tuesday 9AM EST", target: "200+ upvotes, 50+ signups" },
        { name: "r/solotravel + r/AmerExit", desc: "Cross-posts with different angles per community", target: "500+ visits" },
        { name: "7 Nomad Facebook Groups", desc: "Staggered over 5 days — image + story posts", target: "50+ signups" },
      ],
    },
    {
      tier: "Week 1–2 — Partnership Activation",
      color: C.teal,
      items: [
        { name: "Coworking Spaces", desc: "Selina, KoHub, Dojo Bali, Outsite — free Pro accounts for communities", target: "3 partnerships" },
        { name: "YouTube Nomad Channels", desc: "14 identified channels, 10K–500K subs — free Pro + review ask", target: "2–3 videos" },
      ],
    },
    {
      tier: "Week 2–4 — SEO Foundation",
      color: C.coral,
      items: [
        { name: "SEO Blog Post 1", desc: "\"How to plan 6-month Europe + SEA trip without overstaying\" — targets 110K/mo", target: "Start indexing" },
        { name: "SEO Blog Post 2", desc: "\"Schengen 90/180 rule for digital nomads in 2026\" — targets 40.5K/mo", target: "Start indexing" },
        { name: "ProductHunt — Week 3", desc: "After first 50 users have tried it", target: "Top 10 product of day" },
      ],
    },
    {
      tier: "Month 2 — Paid Experiments",
      color: C.textMuted,
      items: [
        { name: "Reddit Ads", desc: "r/digitalnomad + r/solotravel — $200 test budget", target: "CPA < $15" },
        { name: "Google Ads", desc: "Long-tail exact match: 'schengen day calculator', etc. — $200 budget", target: "CPA < $15" },
      ],
    },
  ]

  const metrics = [
    { period: "30-Day", items: [{ k: "Free signups", v: "200+" }, { k: "Paid conversions", v: "20+" }, { k: "MRR", v: "$300+" }, { k: "Reddit upvotes", v: "200+" }] },
    { period: "60-Day", items: [{ k: "Free signups", v: "500+" }, { k: "Paid conversions", v: "50+" }, { k: "MRR", v: "$750+" }, { k: "ProductHunt rank", v: "Top 10" }] },
  ]

  return (
    <div className="space-y-8">
      <div className="rounded-xl p-6" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
        <div className="flex items-start gap-4">
          <div className="text-4xl">🚀</div>
          <div>
            <h2 className="font-bold text-2xl mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.textPrimary }}>
              Go-To-Market Strategy
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: C.textSecondary }}>
              Target the 1.4M-member r/digitalnomad community and nomad infrastructure to drive first 500 users within 30 days.<br />
              <span style={{ color: C.accent, fontFamily: "JetBrains Mono, monospace" }}>Goal: 500 free signups → 50 paid conversions ($750 MRR) within 60 days.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Positioning */}
      <div className="rounded-xl p-5" style={{ backgroundColor: `${C.teal}0a`, border: `1px solid ${C.teal}30` }}>
        <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: C.teal }}>Positioning Statement</h3>
        <p className="text-sm leading-relaxed" style={{ color: C.textSecondary }}>
          "For digital nomads who travel across multiple countries for months at a time, <strong style={{ color: C.textPrimary }}>Bordermath</strong> is the visa route planner that sequences your destinations to keep you legal — unlike Schengen calculators that only track one zone at a time."
        </p>
        <div className="mt-3 text-sm font-medium" style={{ color: C.accent }}>Core message: First PROACTIVE planner, not another reactive calculator. "Fix available" not "Error detected."</div>
      </div>

      {/* Launch channels */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Launch Channels</h3>
        <div className="space-y-5">
          {channels.map((tier, ti) => (
            <div key={ti}>
              <div className="text-xs font-semibold mb-2" style={{ color: tier.color, fontFamily: "JetBrains Mono, monospace" }}>
                {tier.tier}
              </div>
              <div className="space-y-2">
                {tier.items.map((item, ii) => (
                  <div key={ii} className="rounded-xl p-4" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, borderLeft: `3px solid ${tier.color}` }}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold text-sm mb-1" style={{ color: C.textPrimary }}>{item.name}</div>
                        <div className="text-xs" style={{ color: C.textSecondary }}>{item.desc}</div>
                      </div>
                      <div className="text-xs shrink-0 px-2 py-1 rounded" style={{ backgroundColor: `${tier.color}15`, color: tier.color }}>
                        {item.target}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Success Metrics</h3>
        <div className="grid grid-cols-2 gap-5">
          {metrics.map((m, mi) => (
            <div key={mi} className="rounded-xl p-5" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
              <div className="text-sm font-semibold mb-4" style={{ color: C.textPrimary }}>{m.period} Targets</div>
              <div className="space-y-3">
                {m.items.map((item, ii) => (
                  <div key={ii} className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: C.textSecondary }}>{item.k}</span>
                    <span className="font-bold text-sm" style={{ fontFamily: "JetBrains Mono, monospace", color: C.success }}>{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="https://docs.google.com/document/d/1ODVlW-12NnOCbNsid7oZ-yQSFrw3l9qG3R4Ajkz2r6c/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: C.accent, color: C.bg, fontFamily: "Space Grotesk, sans-serif" }}
        >
          <ExternalLink size={16} /> Full GTM Plan
        </a>
      </div>
    </div>
  )
}

function MarketingContent() {
  const voice = [
    { us: '"Fix available — move exit to May 3rd"', them: '"Error: Overstay detected"' },
    { us: '"Visa route planner"', them: '"Schengen calculator"' },
    { us: '"Plan your route. Stay legal."', them: '"Track your days"' },
    { us: 'Compliance co-pilot', them: 'Utility tool' },
  ]

  const channels = [
    { platform: "Reddit", color: C.accent, content: "Personal story launch posts, AMA, value-first content", timing: "Tue–Thu 10am–2pm ET" },
    { platform: "Twitter/X", color: "#1DA1F2", content: "4-tweet launch thread, 'Fix available' vs 'Error detected' angle", timing: "Launch day burst" },
    { platform: "Facebook Groups", color: "#4267B2", content: "Nomad groups, image + story posts, staggered 5 days", timing: "Friday afternoons" },
    { platform: "YouTube Outreach", color: "#FF0000", content: "Free Pro account offer + review ask for nomad channels", timing: "Week 1–2" },
    { platform: "SEO Content", color: C.teal, content: "3 blog posts targeting 450K+/mo low-competition keywords", timing: "Week 2–4" },
  ]

  const calendar = [
    { day: "Day 1 (Tue)", platform: "r/digitalnomad", content: "Personal story launch post" },
    { day: "Day 1 (Tue)", platform: "Twitter/X", content: "Launch thread (4 tweets)" },
    { day: "Day 2 (Wed)", platform: "r/solotravel", content: "Cross-post (adapted)" },
    { day: "Day 3 (Thu)", platform: "r/AmerExit", content: "EU Schengen angle" },
    { day: "Day 4 (Fri)", platform: "Facebook Groups", content: "Begin 5-group posts (1/day)" },
    { day: "Day 5–7", platform: "Coworking Outreach", content: "Email to Selina, KoHub, Dojo Bali" },
    { day: "Week 2", platform: "YouTube Channels", content: "14 channels — free Pro + review ask" },
    { day: "Week 2–3", platform: "SEO Blog Posts", content: "Post 1: Europe + SEA 6-month trip planning" },
    { day: "Week 4", platform: "ProductHunt", content: "Launch Tuesday" },
    { day: "Month 2", platform: "Paid Ads", content: "Reddit + Google, $200 each" },
  ]

  return (
    <div className="space-y-8">
      <div className="rounded-xl p-6" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
        <div className="flex items-start gap-4">
          <div className="text-4xl">📣</div>
          <div>
            <h2 className="font-bold text-2xl mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.textPrimary }}>
              Marketing Plan
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: C.textSecondary }}>
              Voice: <span style={{ color: C.accent }}>Calm Confidence</span> — Stripe's documentation meets a smart nomad friend. Not a travel blog. Not a government portal.
            </p>
          </div>
        </div>
      </div>

      {/* Core copy */}
      <div className="rounded-xl p-5" style={{ backgroundColor: `${C.accent}0a`, border: `1px solid ${C.accent}30` }}>
        <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent }}>Core Copy</h3>
        <div className="space-y-2 text-sm">
          <div>
            <span style={{ color: C.textMuted }}>Primary Tagline: </span>
            <span className="font-semibold" style={{ color: C.textPrimary }}>"Stop counting days. Start planning trips."</span>
          </div>
          <div>
            <span style={{ color: C.textMuted }}>Hero CTA: </span>
            <span style={{ color: C.accent }}>"Plan my route — it's free"</span>
          </div>
          <div className="mt-3 space-y-1">
            {[
              "The only visa planner that sequences your route — not just calculates individual limits",
              '"Fix available" not "Error detected" — every conflict comes with a suggested resolution',
              "Proactive alerts 30/14/7 days before deadlines — works while you sleep",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-2 text-xs" style={{ color: C.textSecondary }}>
                <span style={{ color: C.accent }}>✦</span>{b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Voice comparison */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Brand Voice</h3>
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
          <div className="grid grid-cols-2 text-xs font-semibold p-3" style={{ backgroundColor: C.surface, color: C.textMuted }}>
            <span>Bordermath says</span><span>Competitors say</span>
          </div>
          {voice.map((v, i) => (
            <div key={i} className="grid grid-cols-2 text-sm p-3" style={{ borderTop: `1px solid ${C.border}` }}>
              <span style={{ color: C.success }}>{v.us}</span>
              <span style={{ color: C.textMuted }}>{v.them}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Channel breakdown */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Channel Strategy</h3>
        <div className="space-y-3">
          {channels.map((ch, i) => (
            <div key={i} className="rounded-xl p-4" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, borderLeft: `3px solid ${ch.color}` }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: C.textPrimary }}>{ch.platform}</div>
                  <div className="text-xs" style={{ color: C.textSecondary }}>{ch.content}</div>
                </div>
                <div className="text-xs shrink-0" style={{ color: C.textMuted, fontFamily: "JetBrains Mono, monospace" }}>{ch.timing}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content calendar */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>30-Day Content Calendar</h3>
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
          {calendar.map((row, i) => (
            <div key={i} className="grid grid-cols-3 p-3 text-xs" style={{ borderBottom: i < calendar.length - 1 ? `1px solid ${C.border}` : "none" }}>
              <span style={{ color: C.accent, fontFamily: "JetBrains Mono, monospace" }}>{row.day}</span>
              <span style={{ color: C.textPrimary }}>{row.platform}</span>
              <span style={{ color: C.textSecondary }}>{row.content}</span>
            </div>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>KPIs</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Awareness (Month 1)", kpis: ["100K social impressions", "5,000 site visits", "1,000 email signups"] },
            { label: "Engagement", kpis: ["20% browse-to-favorite rate", "5 min avg session", "40% return visitor"] },
            { label: "Conversion", kpis: ["3–5% booking conversion", "$15–20 avg revenue/user", "50 paid (month 1)"] },
          ].map((group, i) => (
            <div key={i} className="rounded-xl p-4" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
              <div className="text-xs font-semibold mb-3" style={{ color: C.textMuted }}>{group.label}</div>
              <ul className="space-y-1.5">
                {group.kpis.map((kpi, j) => (
                  <li key={j} className="text-xs flex items-start gap-1.5" style={{ color: C.textSecondary }}>
                    <span style={{ color: C.teal }}>·</span>{kpi}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="https://docs.google.com/document/d/1uuTz8alkTkDIZLCwN97cTb8p23NMoBZy_5Ndu0wKjYc/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: C.accent, color: C.bg, fontFamily: "Space Grotesk, sans-serif" }}
        >
          <ExternalLink size={16} /> Full Marketing Plan
        </a>
      </div>
    </div>
  )
}

function BrandContent() {
  const colors = [
    { name: "Background", hex: "#0F1629", role: "Primary background", swatch: "#0F1629" },
    { name: "Surface", hex: "#1a2540", role: "Card backgrounds", swatch: "#1a2540" },
    { name: "Border", hex: "#2a3a5c", role: "Dividers & borders", swatch: "#2a3a5c" },
    { name: "Amber Accent", hex: "#F59E0B", role: "CTAs, highlights, key stats", swatch: "#F59E0B" },
    { name: "Teal", hex: "#0d9488", role: "SEA destinations, secondary accent", swatch: "#0d9488" },
    { name: "Coral", hex: "#f97316", role: "Warning states, approaching limits", swatch: "#f97316" },
    { name: "Success", hex: "#10b981", role: "Compliant states, check marks", swatch: "#10b981" },
    { name: "Destructive", hex: "#ef4444", role: "Violations, errors", swatch: "#ef4444" },
  ]

  const fonts = [
    { name: "Space Grotesk", use: "Headings, hero text, labels", weights: "300–700", sample: "ABCDEF 01234" },
    { name: "Plus Jakarta Sans", use: "Body text, paragraphs, UI", weights: "400–700", sample: "Clean & legible" },
    { name: "JetBrains Mono", use: "Dates, numbers, stats, code", weights: "400–700", sample: "88/90 days" },
  ]

  const complianceBands = [
    { name: "Schengen zone", color: "#F59E0B", label: "Amber" },
    { name: "SEA countries", color: "#0d9488", label: "Teal" },
    { name: "Violation / conflict", color: "#ef4444", label: "Red" },
    { name: "Approaching limit", color: "#f97316", label: "Orange" },
  ]

  return (
    <div className="space-y-8">
      <div className="rounded-xl p-6" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
        <div className="flex items-start gap-4">
          <div className="text-4xl">🎨</div>
          <div>
            <h2 className="font-bold text-2xl mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.textPrimary }}>
              Brand & Design Spec
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: C.textSecondary }}>
              Design tone: <span style={{ color: C.accent }}>Bloomberg Terminal meets Stripe docs</span> — Dense-but-scannable (Linear vibes) + calm confidence.
              The compliance timeline visualization IS the product visual.
            </p>
          </div>
        </div>
      </div>

      {/* Color palette */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {colors.map((color, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              <div className="h-16" style={{ backgroundColor: color.swatch }} />
              <div className="p-3" style={{ backgroundColor: C.surface }}>
                <div className="font-semibold text-xs mb-0.5" style={{ color: C.textPrimary }}>{color.name}</div>
                <div className="text-xs mb-1" style={{ fontFamily: "JetBrains Mono, monospace", color: C.accent }}>{color.hex}</div>
                <div className="text-xs" style={{ color: C.textMuted }}>{color.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance timeline colors */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Compliance Timeline Colors</h3>
        <div className="rounded-xl p-5" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
          <div className="flex gap-2 h-6 rounded-lg overflow-hidden mb-4">
            {complianceBands.map((band, i) => (
              <div key={i} style={{ flex: 1, backgroundColor: band.color }} />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-3">
            {complianceBands.map((band, i) => (
              <div key={i} className="text-center">
                <div className="w-3 h-3 rounded-full mx-auto mb-1.5" style={{ backgroundColor: band.color }} />
                <div className="text-xs mb-0.5" style={{ color: C.textPrimary }}>{band.name}</div>
                <div className="text-xs" style={{ color: C.textMuted, fontFamily: "JetBrains Mono, monospace" }}>{band.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Typography</h3>
        <div className="space-y-3">
          {fonts.map((font, i) => (
            <div key={i} className="rounded-xl p-5" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-semibold text-sm mb-0.5" style={{ color: C.textPrimary }}>{font.name}</div>
                  <div className="text-xs" style={{ color: C.textMuted }}>{font.use} · Weights: {font.weights}</div>
                </div>
              </div>
              <div
                className="text-xl font-bold"
                style={{
                  fontFamily: `${font.name}, sans-serif`,
                  color: C.accent,
                }}
              >
                {font.sample}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design principles */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Design Principles</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Dense but scannable", body: "Linear.app vibes — data-rich layouts that don't overwhelm. Every element has clear visual hierarchy." },
            { title: "Calm confidence", body: "Stripe docs energy — precision tool, not travel app. Serious enough to trust with legal status." },
            { title: "Bloomberg Terminal energy", body: "Numbers, dates, stats in JetBrains Mono. Amber on navy. Data-dense dashboards." },
            { title: "Compliance timeline is king", body: "The horizontal band visualization appears across landing page, app, and pitch deck. This is the signature visual." },
          ].map((p, i) => (
            <div key={i} className="rounded-xl p-4" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
              <div className="font-semibold text-sm mb-2" style={{ color: C.textPrimary }}>{p.title}</div>
              <div className="text-xs leading-relaxed" style={{ color: C.textSecondary }}>{p.body}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="https://docs.google.com/document/d/1t3N7jWloTEPtV2To0IHvKLg30oTEY7h_eEgiY5BrdYA/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: C.accent, color: C.bg, fontFamily: "Space Grotesk, sans-serif" }}
        >
          <ExternalLink size={16} /> Full Brand Spec
        </a>
      </div>
    </div>
  )
}

function PitchContent() {
  const slides = [
    { num: "01", title: "Cover", desc: "Bordermath wordmark, compliance timeline, route flags 🇵🇹→🇹🇭→🇮🇩→🇵🇹" },
    { num: "02", title: "Problem", desc: "Visa planning is a spreadsheet disaster — 3 pain point cards with evidence" },
    { num: "03", title: "Market", desc: "40.5K/mo searches, +174% growth, 1.4M r/digitalnomad members" },
    { num: "04", title: "Solution", desc: "Route Sequencing + Proactive Alerts + Fix Available — with live timeline mock" },
    { num: "05", title: "Product Demo", desc: "3 steps: Add destinations → Timeline builds → Travel with confidence" },
    { num: "06", title: "Competition", desc: "Feature comparison matrix — Bordermath owns all 6 differentiators" },
    { num: "07", title: "Traction", desc: "Pre-launch validation: domain grabbed, competitor appeared, community workarounds" },
    { num: "08", title: "Business Model", desc: "Freemium SaaS: Explorer (free) → Nomad ($15/mo) → Borderless ($50/mo)" },
    { num: "09", title: "Go-To-Market", desc: "Week 1 ignition → Week 2-3 partnerships → Week 4 ProductHunt → Month 2 paid" },
    { num: "10", title: "Opportunity", desc: "$12B market, 5 reasons we win, revenue path to $30K MRR by Month 12" },
    { num: "11", title: "Team", desc: "ChimeStream · Built in 3 weeks · Next.js + Postgres + Stripe + Coolify" },
    { num: "12", title: "Call to Action", desc: "Plan my route free → bordermath.ashketing.com" },
  ]

  return (
    <div className="space-y-8">
      <div className="rounded-xl p-6" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
        <div className="flex items-start gap-4">
          <div className="text-4xl">📋</div>
          <div>
            <h2 className="font-bold text-2xl mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: C.textPrimary }}>
              Pitch Deck
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: C.textSecondary }}>
              12-slide interactive pitch deck. Full-screen navigation with keyboard arrows + click.
              Deep navy + amber + teal brand palette. Framer Motion animations.
            </p>
          </div>
        </div>
      </div>

      <Link
        href="/pitch"
        className="flex items-center justify-between px-6 py-4 rounded-xl font-semibold transition-all"
        style={{ backgroundColor: C.accent, color: C.bg, fontFamily: "Space Grotesk, sans-serif" }}
      >
        <div className="flex items-center gap-3">
          <FileText size={20} />
          <div>
            <div className="font-bold">View Interactive Pitch Deck</div>
            <div className="text-xs opacity-70">Full-screen · 12 slides · Keyboard navigation</div>
          </div>
        </div>
        <ChevronRight size={20} />
      </Link>

      {/* Slide index */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>Slide Index</h3>
        <div className="space-y-2">
          {slides.map((slide, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl p-4" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
              <span className="font-bold text-sm shrink-0" style={{ fontFamily: "JetBrains Mono, monospace", color: C.accent }}>
                {slide.num}
              </span>
              <div>
                <div className="font-semibold text-sm mb-0.5" style={{ color: C.textPrimary }}>{slide.title}</div>
                <div className="text-xs" style={{ color: C.textSecondary }}>{slide.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design notes */}
      <div className="rounded-xl p-5" style={{ backgroundColor: `${C.teal}0a`, border: `1px solid ${C.teal}30` }}>
        <h3 className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: C.teal }}>Design Direction</h3>
        <div className="space-y-1.5 text-xs" style={{ color: C.textSecondary }}>
          <div><span style={{ color: C.textPrimary }}>Visual style:</span> Deep navy (#0F1629) bg, near-white text, amber accent. Bloomberg-terminal-meets-pitch-deck energy.</div>
          <div><span style={{ color: C.textPrimary }}>Typography:</span> Space Grotesk 48–64px headlines · JetBrains Mono for stats</div>
          <div><span style={{ color: C.textPrimary }}>Navigation:</span> ←→ keyboard, click left/right half, bottom dots indicator</div>
          <div><span style={{ color: C.textPrimary }}>Animations:</span> Framer Motion fade + slide transitions, staggered content reveals</div>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href="/pitch"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: C.accent, color: C.bg, fontFamily: "Space Grotesk, sans-serif" }}
        >
          <FileText size={16} /> Open Pitch Deck
        </Link>
        <a
          href="https://docs.google.com/document/d/1jyIIx3XmYa6G_SNRaiHZ8eErOvygP6XCDtnVvDIMvsg/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border"
          style={{ color: C.accent, borderColor: `${C.accent}40`, backgroundColor: "transparent" }}
        >
          <ExternalLink size={16} /> Source Doc
        </a>
      </div>
    </div>
  )
}

// ── Section config ─────────────────────────────────────────────

const SECTIONS = [
  {
    id: "research",
    label: "Research",
    icon: "📊",
    component: <ResearchContent />,
  },
  {
    id: "gtm",
    label: "GTM Plan",
    icon: "🚀",
    component: <GTMContent />,
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: "📣",
    component: <MarketingContent />,
  },
  {
    id: "brand",
    label: "Brand",
    icon: "🎨",
    component: <BrandContent />,
  },
  {
    id: "pitch",
    label: "Pitch Deck",
    icon: "📋",
    component: <PitchContent />,
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research")
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const section = SECTIONS.find((s) => s.id === activeSection) ?? SECTIONS[0]

  // Handle URL hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash && SECTIONS.find((s) => s.id === hash)) {
      setActiveSection(hash)
    }
  }, [])

  const handleNav = (id: string) => {
    setActiveSection(id)
    setMobileNavOpen(false)
    window.history.replaceState(null, "", `/docs#${id}`)
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "64px", minHeight: "100vh", backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto flex relative">
          {/* Sidebar — desktop */}
          <aside
            className="hidden lg:block w-60 shrink-0 border-r sticky top-16"
            style={{ borderColor: C.border, height: "calc(100vh - 64px)", overflowY: "auto", backgroundColor: C.bg }}
          >
            <div className="p-4">
              <div className="mb-6">
                <h2
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: C.textMuted, fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Documents
                </h2>
                <div className="text-xs" style={{ color: C.textMuted, fontFamily: "JetBrains Mono, monospace" }}>
                  Bordermath · March 2026
                </div>
              </div>
              <nav className="space-y-0.5">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleNav(sec.id)}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-left transition-all"
                    style={{
                      backgroundColor: activeSection === sec.id ? C.surface : "transparent",
                      color: activeSection === sec.id ? C.textPrimary : C.textMuted,
                      borderLeft: activeSection === sec.id ? `2px solid ${C.accent}` : "2px solid transparent",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    <span>{sec.icon}</span>
                    <span>{sec.label}</span>
                  </button>
                ))}
              </nav>

              {/* External links */}
              <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: C.textMuted }}>Links</div>
                <div className="space-y-1">
                  <a
                    href="https://bordermath.ashketing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors"
                    style={{ color: C.textMuted }}
                  >
                    <ExternalLink size={12} />Live Site
                  </a>
                  <Link
                    href="/pitch"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors"
                    style={{ color: C.accent }}
                  >
                    <FileText size={12} />Pitch Deck ↗
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile nav toggle */}
          <div
            className="lg:hidden fixed bottom-6 right-6 z-50"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: C.accent, color: C.bg }}
            >
              {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile nav drawer */}
          <AnimatePresence>
            {mobileNavOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 z-40"
                style={{ backgroundColor: `${C.bg}f8`, paddingTop: "64px" }}
              >
                <div className="p-6">
                  <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: C.textMuted }}>
                    Documents
                  </h2>
                  <nav className="space-y-1">
                    {SECTIONS.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => handleNav(sec.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left"
                        style={{
                          backgroundColor: activeSection === sec.id ? C.surface : "transparent",
                          color: activeSection === sec.id ? C.textPrimary : C.textMuted,
                        }}
                      >
                        <span className="text-xl">{sec.icon}</span>
                        <span className="font-medium">{sec.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main content */}
          <main className="flex-1 min-w-0 p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {section.component}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}
