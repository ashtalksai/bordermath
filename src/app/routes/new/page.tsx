"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, MapPin, Flag, Calendar } from "lucide-react"

type DateMap = Record<string, { entry: string; exit: string }>

const COUNTRIES = [
  { code: "PT", name: "Portugal", flag: "🇵🇹", bandType: "schengen" },
  { code: "ES", name: "Spain", flag: "🇪🇸", bandType: "schengen" },
  { code: "FR", name: "France", flag: "🇫🇷", bandType: "schengen" },
  { code: "DE", name: "Germany", flag: "🇩🇪", bandType: "schengen" },
  { code: "IT", name: "Italy", flag: "🇮🇹", bandType: "schengen" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", bandType: "schengen" },
  { code: "HR", name: "Croatia", flag: "🇭🇷", bandType: "schengen" },
  { code: "ME", name: "Montenegro", flag: "🇲🇪", bandType: "other" },
  { code: "RS", name: "Serbia", flag: "🇷🇸", bandType: "other" },
  { code: "TH", name: "Thailand", flag: "🇹🇭", bandType: "sea" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", bandType: "sea" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", bandType: "sea" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", bandType: "sea" },
  { code: "JP", name: "Japan", flag: "🇯🇵", bandType: "other" },
  { code: "TW", name: "Taiwan", flag: "🇹🇼", bandType: "other" },
]

const PASSPORTS = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "EU", name: "European Union", flag: "🇪🇺" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
]

export default function NewRoutePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [passport, setPassport] = useState("")
  const [selected, setSelected] = useState<string[]>([])
  const [search, setSearch] = useState("")
  const [dates, setDates] = useState<DateMap>({})
  const [saving, setSaving] = useState(false)

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  const toggleCountry = (code: string) => {
    if (selected.includes(code)) {
      setSelected(selected.filter((c) => c !== code))
    } else if (selected.length < 2) {
      // Free tier: max 2
      setSelected([...selected, code])
    }
  }

  const updateDate = (code: string, field: "entry" | "exit", value: string) => {
    setDates((prev) => ({
      ...prev,
      [code]: { ...prev[code], [field]: value },
    }))
  }

  const handleCreate = async () => {
    setSaving(true)
    try {
      const stops = selected.map((code, i) => {
        const c = COUNTRIES.find((x) => x.code === code)!
        const d = dates[code] || {}
        return {
          countryCode: c.code,
          countryName: c.name,
          flag: c.flag,
          bandType: c.bandType,
          entryDate: d.entry || (i === 0 ? "2026-04-01" : "2026-05-01"),
          exitDate: d.exit || (i === 0 ? "2026-04-29" : "2026-05-31"),
        }
      })

      const passportCountry = PASSPORTS.find((p) => p.code === passport)
      const routeName = selected
        .map((code) => COUNTRIES.find((c) => c.code === code)?.flag)
        .join(" → ") + (passportCountry ? ` (${passportCountry.flag})` : "")

      const res = await fetch("/api/routes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: routeName, stops }),
      })

      const data = await res.json()
      if (data.routeId) {
        router.push(`/routes/${data.routeId}`)
      } else {
        router.push("/dashboard")
      }
    } catch {
      router.push("/dashboard")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16" style={{ backgroundColor: "#0f1629" }}>
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Link href="/dashboard">
            <ArrowLeft size={20} color="#64748b" />
          </Link>
          <div>
            <h1
              className="font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "22px", color: "#f8fafc" }}
            >
              Plan a new route
            </h1>
            <p className="text-xs" style={{ color: "#64748b" }}>Step {step} of 3</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className="h-1 flex-1 rounded-full"
              style={{ backgroundColor: s <= step ? "#f59e0b" : "#2a3a5c" }}
            />
          ))}
        </div>

        {/* Step 1: Passport */}
        {step === 1 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Flag size={20} color="#f59e0b" />
              <h2 className="font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "18px" }}>
                What&apos;s your passport?
              </h2>
            </div>
            <div className="space-y-2 mb-8">
              {PASSPORTS.map((p) => (
                <button
                  key={p.code}
                  onClick={() => setPassport(p.code)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all"
                  style={{
                    backgroundColor: passport === p.code ? "rgba(245,158,11,0.1)" : "#1a2540",
                    border: passport === p.code ? "1px solid rgba(245,158,11,0.5)" : "1px solid #2a3a5c",
                  }}
                >
                  <span className="text-xl">{p.flag}</span>
                  <span className="text-sm font-medium" style={{ color: "#f8fafc", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {p.name}
                  </span>
                  {passport === p.code && (
                    <span className="ml-auto text-xs" style={{ color: "#f59e0b" }}>✓</span>
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={() => passport && setStep(2)}
              disabled={!passport}
              className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              style={{
                backgroundColor: passport ? "#f59e0b" : "#2a3a5c",
                color: passport ? "#0f1629" : "#64748b",
                fontFamily: "Space Grotesk, sans-serif",
                cursor: passport ? "pointer" : "not-allowed",
              }}
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Step 2: Destinations */}
        {step === 2 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} color="#f59e0b" />
              <h2 className="font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "18px" }}>
                Where do you want to go?
              </h2>
            </div>
            <p className="text-xs mb-5" style={{ color: "#64748b" }}>
              Free tier: select up to 2 destinations
            </p>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search countries..."
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none mb-4"
              style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c", color: "#f8fafc" }}
            />

            {selected.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.map((code) => {
                  const c = COUNTRIES.find((x) => x.code === code)
                  return c ? (
                    <span
                      key={code}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" }}
                    >
                      {c.flag} {c.name}
                    </span>
                  ) : null
                })}
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 mb-6 max-h-64 overflow-y-auto">
              {filteredCountries.map((c) => {
                const isSelected = selected.includes(c.code)
                const isDisabled = !isSelected && selected.length >= 2
                return (
                  <button
                    key={c.code}
                    onClick={() => !isDisabled && toggleCountry(c.code)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left transition-all"
                    style={{
                      backgroundColor: isSelected ? "rgba(245,158,11,0.1)" : "#1a2540",
                      border: isSelected ? "1px solid rgba(245,158,11,0.4)" : "1px solid #2a3a5c",
                      opacity: isDisabled ? 0.4 : 1,
                      cursor: isDisabled ? "not-allowed" : "pointer",
                    }}
                  >
                    <span className="text-base">{c.flag}</span>
                    <span className="text-xs font-medium" style={{ color: "#f8fafc" }}>{c.name}</span>
                    <span
                      className="ml-auto text-xs px-1 rounded"
                      style={{
                        color: c.bandType === "schengen" ? "#f59e0b" : c.bandType === "sea" ? "#0d9488" : "#94a3b8",
                        fontSize: "9px",
                      }}
                    >
                      {c.bandType}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl border text-sm"
                style={{ color: "#94a3b8", borderColor: "#2a3a5c", backgroundColor: "transparent" }}
              >
                Back
              </button>
              <button
                onClick={() => selected.length >= 2 && setStep(3)}
                disabled={selected.length < 2}
                className="flex-1 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                style={{
                  backgroundColor: selected.length >= 2 ? "#f59e0b" : "#2a3a5c",
                  color: selected.length >= 2 ? "#0f1629" : "#64748b",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Continue <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Dates summary */}
        {step === 3 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Calendar size={20} color="#f59e0b" />
              <h2 className="font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "18px" }}>
                Set rough dates
              </h2>
            </div>

            <div className="space-y-3 mb-6">
              {selected.map((code, i) => {
                const c = COUNTRIES.find((x) => x.code === code)
                return c ? (
                  <div
                    key={code}
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">{c.flag}</span>
                      <span className="font-medium text-sm" style={{ color: "#f8fafc" }}>{c.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs mb-1" style={{ color: "#64748b" }}>Entry</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                          style={{ backgroundColor: "#243060", border: "1px solid #2a3a5c", color: "#f8fafc" }}
                          value={dates[code]?.entry || (i === 0 ? "2026-04-01" : "2026-05-01")}
                          onChange={(e) => updateDate(code, "entry", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs mb-1" style={{ color: "#64748b" }}>Exit</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                          style={{ backgroundColor: "#243060", border: "1px solid #2a3a5c", color: "#f8fafc" }}
                          value={dates[code]?.exit || (i === 0 ? "2026-04-29" : "2026-05-31")}
                          onChange={(e) => updateDate(code, "exit", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ) : null
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-3 rounded-xl border text-sm"
                style={{ color: "#94a3b8", borderColor: "#2a3a5c", backgroundColor: "transparent" }}
              >
                Back
              </button>
              <button
                onClick={handleCreate}
                disabled={saving}
                className="flex-1 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                style={{
                  backgroundColor: saving ? "#2a3a5c" : "#f59e0b",
                  color: saving ? "#64748b" : "#0f1629",
                  fontFamily: "Space Grotesk, sans-serif",
                  cursor: saving ? "not-allowed" : "pointer",
                }}
              >
                {saving ? "Saving..." : "Build my compliance timeline ✦"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
