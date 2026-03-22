"use client"

import { useState } from "react"

export interface TimelineStop {
  id: string
  countryCode: string
  countryName: string
  flag: string
  entryDate: Date
  exitDate: Date
  visaType: string
  maxStayDays: number
  bandType: "schengen" | "sea" | "other"
  hasConflict?: boolean
}

interface ComplianceTimelineProps {
  stops: TimelineStop[]
  compact?: boolean
}

const BAND_COLORS = {
  schengen: { bg: "#f59e0b", text: "#0f1629", glow: "rgba(245,158,11,0.2)" },
  sea: { bg: "#0d9488", text: "#f8fafc", glow: "rgba(13,148,136,0.2)" },
  other: { bg: "#6366f1", text: "#f8fafc", glow: "rgba(99,102,241,0.2)" },
  conflict: { bg: "#ef4444", text: "#f8fafc", glow: "rgba(239,68,68,0.25)" },
}

function daysBetween(a: Date, b: Date) {
  return Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

export function ComplianceTimeline({ stops, compact = false }: ComplianceTimelineProps) {
  const [hoveredStop, setHoveredStop] = useState<string | null>(null)

  if (!stops || stops.length === 0) {
    return (
      <div
        className="rounded-xl p-8 text-center"
        style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
      >
        <p style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          No stops added yet
        </p>
      </div>
    )
  }

  const allDates = stops.flatMap((s) => [s.entryDate, s.exitDate])
  const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())))
  const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())))
  const totalDays = daysBetween(minDate, maxDate)

  // Calculate schengen usage
  let schengenDays = 0
  stops.forEach((stop) => {
    if (stop.bandType === "schengen") {
      schengenDays += daysBetween(stop.entryDate, stop.exitDate)
    }
  })
  const schengenPercent = Math.min((schengenDays / 90) * 100, 100)
  const schengenOverLimit = schengenDays > 90

  // Generate month labels
  const months: { label: string; pct: number }[] = []
  const cur = new Date(minDate)
  cur.setDate(1)
  while (cur <= maxDate) {
    const pct = (daysBetween(minDate, cur) / totalDays) * 100
    if (pct >= 0 && pct <= 100) {
      months.push({
        label: cur.toLocaleDateString("en-US", { month: "short", year: "2-digit" }),
        pct,
      })
    }
    cur.setMonth(cur.getMonth() + 1)
  }

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        backgroundColor: "#1a2540",
        border: "1px solid #2a3a5c",
        boxShadow: "0 0 20px rgba(245,158,11,0.08)",
      }}
    >
      <div className={compact ? "p-4" : "p-6"}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3
              className="font-semibold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "16px" }}
            >
              Compliance Timeline
            </h3>
            {!compact && (
              <p className="text-xs mt-0.5" style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>
                {formatDate(minDate)} — {formatDate(maxDate)}
              </p>
            )}
          </div>
          <span
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={
              schengenOverLimit
                ? { backgroundColor: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.3)" }
                : { backgroundColor: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.3)" }
            }
          >
            {schengenOverLimit ? "⚠ Conflict" : "✓ Compliant"}
          </span>
        </div>

        {/* Month axis */}
        <div className="relative h-5 mb-2">
          {months.map((m, i) => (
            <div
              key={i}
              className="absolute text-xs"
              style={{ left: `${m.pct}%`, color: "#64748b", fontFamily: "JetBrains Mono, monospace", fontSize: "10px" }}
            >
              {m.label}
            </div>
          ))}
        </div>

        {/* Timeline bands */}
        <div className="relative" style={{ height: compact ? "48px" : "60px" }}>
          {stops.map((stop, i) => {
            const leftPct = (daysBetween(minDate, stop.entryDate) / totalDays) * 100
            const widthPct = (daysBetween(stop.entryDate, stop.exitDate) / totalDays) * 100
            const colors = stop.hasConflict ? BAND_COLORS.conflict : BAND_COLORS[stop.bandType]
            const isHovered = hoveredStop === stop.id
            const days = daysBetween(stop.entryDate, stop.exitDate)

            return (
              <div
                key={stop.id}
                className="absolute rounded-full cursor-pointer transition-all duration-150"
                style={{
                  left: `${leftPct}%`,
                  width: `${widthPct}%`,
                  top: "8px",
                  height: compact ? "32px" : "44px",
                  backgroundColor: colors.bg,
                  boxShadow: isHovered ? `0 0 16px ${colors.glow}` : `0 0 8px ${colors.glow}`,
                  transform: isHovered ? "scaleY(1.05)" : "scaleY(1)",
                  zIndex: isHovered ? 10 : 1,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  overflow: "hidden",
                  minWidth: "40px",
                }}
                onMouseEnter={() => setHoveredStop(stop.id)}
                onMouseLeave={() => setHoveredStop(null)}
              >
                <span
                  className="truncate text-xs font-medium whitespace-nowrap"
                  style={{ color: colors.text, fontFamily: "JetBrains Mono, monospace", fontSize: "11px" }}
                >
                  {stop.flag} {!compact && stop.countryName} · {days}d
                </span>
              </div>
            )
          })}
        </div>

        {/* Hover tooltip */}
        {hoveredStop && (() => {
          const stop = stops.find((s) => s.id === hoveredStop)
          if (!stop) return null
          const days = daysBetween(stop.entryDate, stop.exitDate)
          return (
            <div
              className="mt-3 rounded-lg p-3 text-xs"
              style={{
                backgroundColor: "#243060",
                border: "1px solid #2a3a5c",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              <span style={{ color: "#f8fafc" }}>
                {stop.flag} {stop.countryName}
              </span>
              <span style={{ color: "#64748b" }}> · </span>
              <span style={{ color: "#94a3b8" }}>
                {formatDate(stop.entryDate)} – {formatDate(stop.exitDate)}
              </span>
              <span style={{ color: "#64748b" }}> · </span>
              <span style={{ color: "#f59e0b" }}>{days} days used</span>
              <span style={{ color: "#64748b" }}> · </span>
              <span style={{ color: "#94a3b8" }}>Visa: {stop.visaType}</span>
            </div>
          )
        })()}

        {/* Schengen counter */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span
              className="text-xs"
              style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}
            >
              Schengen 90/180 counter
            </span>
            <span
              className="text-xs font-medium"
              style={{
                color: schengenOverLimit ? "#ef4444" : "#f59e0b",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {schengenDays} / 90 days
            </span>
          </div>
          <div
            className="w-full rounded-full h-1.5"
            style={{ backgroundColor: "#243060" }}
          >
            <div
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: `${schengenPercent}%`,
                backgroundColor: schengenOverLimit ? "#ef4444" : schengenPercent > 80 ? "#f97316" : "#f59e0b",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Demo timeline for landing page
export const DEMO_STOPS: TimelineStop[] = [
  {
    id: "1",
    countryCode: "PT",
    countryName: "Portugal",
    flag: "🇵🇹",
    entryDate: new Date("2026-04-01"),
    exitDate: new Date("2026-04-29"),
    visaType: "Schengen Visa-Free",
    maxStayDays: 90,
    bandType: "schengen",
  },
  {
    id: "2",
    countryCode: "TH",
    countryName: "Thailand",
    flag: "🇹🇭",
    entryDate: new Date("2026-05-01"),
    exitDate: new Date("2026-05-31"),
    visaType: "Visa-Free 60 Days",
    maxStayDays: 60,
    bandType: "sea",
  },
  {
    id: "3",
    countryCode: "ID",
    countryName: "Indonesia",
    flag: "🇮🇩",
    entryDate: new Date("2026-06-02"),
    exitDate: new Date("2026-07-02"),
    visaType: "Visa on Arrival",
    maxStayDays: 30,
    bandType: "sea",
  },
  {
    id: "4",
    countryCode: "PT",
    countryName: "Portugal",
    flag: "🇵🇹",
    entryDate: new Date("2026-07-05"),
    exitDate: new Date("2026-08-05"),
    visaType: "Schengen Visa-Free",
    maxStayDays: 90,
    bandType: "schengen",
  },
]
