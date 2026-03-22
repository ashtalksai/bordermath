"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Plus,
  RefreshCw,
  Share2,
  AlertTriangle,
  CheckCircle2,
  GripVertical,
  X,
  Zap,
} from "lucide-react"
import { ComplianceTimeline, TimelineStop } from "@/components/route/compliance-timeline"

function daysBetween(a: Date, b: Date) {
  return Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

function StopRow({ stop, onRemove }: { stop: TimelineStop; onRemove: () => void }) {
  const days = daysBetween(stop.entryDate, stop.exitDate)
  const statusColor = stop.hasConflict ? "#ef4444" : "#10b981"
  const statusBg = stop.hasConflict ? "rgba(239,68,68,0.12)" : "rgba(16,185,129,0.12)"

  return (
    <div
      className="flex items-center gap-4 px-4 py-3 rounded-lg group transition-colors"
      style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
    >
      <GripVertical size={16} color="#2a3a5c" className="shrink-0 cursor-grab" />
      <span className="text-lg shrink-0">{stop.flag}</span>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium" style={{ color: "#f8fafc", fontFamily: "Space Grotesk, sans-serif" }}>
          {stop.countryName}
        </div>
        <div className="text-xs mt-0.5" style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>
          {formatDate(stop.entryDate)} → {formatDate(stop.exitDate)}
        </div>
      </div>
      <div className="hidden md:block text-xs shrink-0" style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>
        {stop.visaType}
      </div>
      <div
        className="text-xs px-2 py-0.5 rounded-full shrink-0"
        style={{ color: statusColor, backgroundColor: statusBg, border: `1px solid ${statusColor}30`, fontFamily: "JetBrains Mono, monospace" }}
      >
        {days}d
      </div>
      <span
        className="text-xs px-2 py-0.5 rounded-full shrink-0"
        style={{
          color: stop.bandType === "schengen" ? "#f59e0b" : "#0d9488",
          backgroundColor: stop.bandType === "schengen" ? "rgba(245,158,11,0.12)" : "rgba(13,148,136,0.12)",
          fontFamily: "JetBrains Mono, monospace",
        }}
      >
        {stop.bandType}
      </span>
      <button
        onClick={onRemove}
        className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
        style={{ color: "#64748b" }}
      >
        <X size={14} />
      </button>
    </div>
  )
}

const COUNTRY_OPTIONS = [
  { code: "ES", name: "Spain", flag: "🇪🇸", bandType: "schengen" as const },
  { code: "DE", name: "Germany", flag: "🇩🇪", bandType: "schengen" as const },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", bandType: "schengen" as const },
  { code: "JP", name: "Japan", flag: "🇯🇵", bandType: "other" as const },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", bandType: "sea" as const },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", bandType: "sea" as const },
]

export default function RoutePage() {
  const params = useParams()
  const id = params?.id as string

  const [stops, setStops] = useState<TimelineStop[]>([])
  const [routeName, setRouteName] = useState("Loading…")
  const [loading, setLoading] = useState(true)
  const [showAddCountry, setShowAddCountry] = useState(false)

  useEffect(() => {
    if (!id) return
    fetch(`/api/routes/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.route) {
          setRouteName(data.route.name)
          // Map DB stops → TimelineStop shape
          const mapped: TimelineStop[] = data.route.stops.map((s: {
            id: string
            countryCode: string
            countryName: string
            flag: string
            bandType: string
            entryDate: string
            exitDate: string
          }) => ({
            id: s.id,
            countryCode: s.countryCode,
            countryName: s.countryName,
            flag: s.flag,
            entryDate: new Date(s.entryDate),
            exitDate: new Date(s.exitDate),
            visaType: s.bandType === "schengen" ? "Schengen Visa-Free" : "Visa-Free",
            maxStayDays: s.bandType === "schengen" ? 90 : 30,
            bandType: s.bandType as "schengen" | "sea" | "other",
          }))
          setStops(mapped)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  const schengenDays = stops.reduce((acc, s) => {
    if (s.bandType === "schengen") return acc + daysBetween(s.entryDate, s.exitDate)
    return acc
  }, 0)
  const hasConflict = schengenDays > 90
  const status = hasConflict ? "conflict" : "compliant"

  const removeStop = (stopId: string) => setStops(stops.filter((s) => s.id !== stopId))

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0f1629" }}>
        <p className="text-sm" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          Loading route…
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f1629" }}>
      {/* Top bar */}
      <header
        className="flex items-center gap-4 px-6 border-b"
        style={{ height: "56px", borderColor: "#2a3a5c", backgroundColor: "#0f1629" }}
      >
        <Link href="/dashboard" className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
          <ArrowLeft size={16} />
        </Link>

        <input
          type="text"
          value={routeName}
          onChange={(e) => setRouteName(e.target.value)}
          className="text-base font-semibold bg-transparent border-0 outline-none"
          style={{
            color: "#f8fafc",
            fontFamily: "Space Grotesk, sans-serif",
            minWidth: "200px",
          }}
        />

        <span
          className="text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1"
          style={
            status === "compliant"
              ? { backgroundColor: "rgba(16,185,129,0.12)", color: "#10b981", border: "1px solid rgba(16,185,129,0.25)" }
              : { backgroundColor: "rgba(239,68,68,0.12)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.25)" }
          }
        >
          {status === "compliant" ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
          {status === "compliant" ? "Compliant" : "Conflict"}
        </span>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setShowAddCountry(!showAddCountry)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border"
            style={{ color: "#94a3b8", borderColor: "#2a3a5c", backgroundColor: "transparent", fontFamily: "Space Grotesk, sans-serif" }}
          >
            <Plus size={14} /> Add Stop
          </button>
          <button
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border"
            style={{ color: "#94a3b8", borderColor: "#2a3a5c", backgroundColor: "transparent" }}
          >
            <RefreshCw size={14} /> Re-sequence
            <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "rgba(245,158,11,0.12)", color: "#f59e0b" }}>Pro</span>
          </button>
          <button
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border"
            style={{ color: "#94a3b8", borderColor: "#2a3a5c", backgroundColor: "transparent" }}
          >
            <Share2 size={14} />
          </button>
        </div>
      </header>

      {/* Add Country dropdown */}
      {showAddCountry && (
        <div className="px-6 py-3 border-b" style={{ borderColor: "#2a3a5c", backgroundColor: "#111827" }}>
          <p className="text-xs mb-2" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Select a destination to add:
          </p>
          <div className="flex flex-wrap gap-2">
            {COUNTRY_OPTIONS.map((c) => (
              <button
                key={c.code}
                onClick={() => {
                  const last = stops[stops.length - 1]
                  const newEntry = last ? new Date(last.exitDate.getTime() + 2 * 86400000) : new Date("2026-08-10")
                  const newExit = new Date(newEntry.getTime() + 30 * 86400000)
                  setStops([...stops, {
                    id: `stop-${Date.now()}`,
                    countryCode: c.code,
                    countryName: c.name,
                    flag: c.flag,
                    entryDate: newEntry,
                    exitDate: newExit,
                    visaType: c.bandType === "schengen" ? "Schengen Visa-Free" : "Visa-Free",
                    maxStayDays: c.bandType === "schengen" ? 90 : 30,
                    bandType: c.bandType,
                  }])
                  setShowAddCountry(false)
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border transition-colors"
                style={{ color: "#94a3b8", borderColor: "#2a3a5c", backgroundColor: "#1a2540", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {c.flag} {c.name}
              </button>
            ))}
          </div>
          {stops.length >= 2 && (
            <div className="mt-3 flex items-center gap-2 text-xs" style={{ color: "#f59e0b" }}>
              <Zap size={12} />
              Free tier allows 2 destinations.{" "}
              <Link href="/pricing" style={{ color: "#f59e0b", textDecoration: "underline" }}>
                Upgrade to Nomad
              </Link>{" "}
              for unlimited routes.
            </div>
          )}
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        {/* Compliance conflict panel */}
        {hasConflict && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl p-5"
            style={{
              backgroundColor: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.3)",
              borderLeft: "3px solid #ef4444",
            }}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} color="#ef4444" className="shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1" style={{ color: "#ef4444", fontFamily: "Space Grotesk, sans-serif" }}>
                  Conflict: Schengen days exceeded ({schengenDays}/90)
                </h4>
                <p className="text-xs" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  Your route accumulates {schengenDays} Schengen days — {schengenDays - 90} over the 90-day limit.
                  Suggested fix: Move a Schengen stop to after a 90-day reset period.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Timeline visualization */}
        <ComplianceTimeline stops={stops} />

        {/* Stops list */}
        <div>
          <h2
            className="font-semibold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "15px" }}
          >
            Stops
          </h2>
          <div className="space-y-2">
            {stops.map((stop) => (
              <StopRow
                key={stop.id}
                stop={stop}
                onRemove={() => removeStop(stop.id)}
              />
            ))}
          </div>
          {stops.length === 0 && (
            <div
              className="rounded-xl p-8 text-center border-dashed"
              style={{ border: "1px dashed #2a3a5c" }}
            >
              <p className="text-sm" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                No stops yet. Add your first destination above.
              </p>
            </div>
          )}
        </div>

        {/* Free tier upsell */}
        <div
          className="rounded-xl p-5 flex items-center gap-4"
          style={{ backgroundColor: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}
        >
          <Zap size={20} color="#f59e0b" className="shrink-0" />
          <div className="flex-1">
            <h4 className="font-semibold text-sm" style={{ color: "#f59e0b", fontFamily: "Space Grotesk, sans-serif" }}>
              Add your 3rd destination → Upgrade to Nomad
            </h4>
            <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>
              Unlimited destinations, automatic alerts, route re-sequencing.
            </p>
          </div>
          <Link
            href="/pricing"
            className="text-sm px-4 py-2 rounded-lg font-semibold shrink-0"
            style={{ backgroundColor: "#f59e0b", color: "#0f1629", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Upgrade — $15/mo
          </Link>
        </div>
      </main>
    </div>
  )
}
