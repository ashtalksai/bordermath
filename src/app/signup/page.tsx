"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Check } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong")
        setLoading(false)
        return
      }

      // Redirect to login after signup
      router.push("/login?registered=1")
    } catch {
      setError("Network error. Please try again.")
      setLoading(false)
    }
  }

  const highlights = [
    "Plan 2-country routes for free",
    "Visual compliance timeline",
    "Schengen 90/180 counter",
    "No credit card required",
  ]

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#0f1629" }}>
      {/* Left — feature highlights */}
      <div
        className="hidden lg:flex flex-col justify-center px-12 py-16"
        style={{ width: "45%", backgroundColor: "#1a2540", borderRight: "1px solid #2a3a5c" }}
      >
        <Link href="/" className="mb-12">
          <span className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f59e0b" }}>
            Bordermath
          </span>
        </Link>
        <h2
          className="font-bold mb-6"
          style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "28px", color: "#f8fafc" }}
        >
          Plan your first route in 60 seconds
        </h2>
        <p className="text-sm mb-8" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.7" }}>
          Join 1,200+ travelers who use Bordermath to plan legal multi-country routes — without the spreadsheet.
        </p>
        <ul className="space-y-3">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
              >
                <Check size={12} color="#10b981" />
              </div>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Right — signup form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link href="/" className="flex justify-center mb-8 lg:hidden">
            <span className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f59e0b" }}>
              Bordermath
            </span>
          </Link>

          <h1
            className="font-bold mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "28px", color: "#f8fafc" }}
          >
            Create your account
          </h1>
          <p className="text-sm mb-8" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Already have one?{" "}
            <Link href="/login" style={{ color: "#f59e0b" }}>
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1.5" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Full name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                style={{
                  backgroundColor: "#1a2540",
                  border: "1px solid #2a3a5c",
                  color: "#f8fafc",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              />
            </div>

            <div>
              <label className="block text-sm mb-1.5" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Email address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                style={{
                  backgroundColor: "#1a2540",
                  border: "1px solid #2a3a5c",
                  color: "#f8fafc",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              />
            </div>

            <div>
              <label className="block text-sm mb-1.5" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="At least 8 characters"
                  required
                  minLength={8}
                  className="w-full px-4 py-2.5 pr-10 rounded-lg text-sm outline-none"
                  style={{
                    backgroundColor: "#1a2540",
                    border: "1px solid #2a3a5c",
                    color: "#f8fafc",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "#64748b" }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm" style={{ color: "#ef4444", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-150"
              style={{
                backgroundColor: loading ? "#92400e" : "#f59e0b",
                color: "#0f1629",
                fontFamily: "Space Grotesk, sans-serif",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

            <p className="text-xs text-center" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              By signing up, you agree to our{" "}
              <Link href="/terms" style={{ color: "#94a3b8" }}>Terms</Link>
              {" "}and{" "}
              <Link href="/privacy" style={{ color: "#94a3b8" }}>Privacy Policy</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
