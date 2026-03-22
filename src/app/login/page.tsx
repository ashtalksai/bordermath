"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"
import { signIn } from "next-auth/react"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const registered = searchParams.get("registered")
  const [form, setForm] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    })

    if (result?.error) {
      setError("Invalid email or password")
      setLoading(false)
      return
    }

    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16" style={{ backgroundColor: "#0f1629" }}>
      <div className="w-full max-w-md">
        <Link href="/" className="flex justify-center mb-10">
          <span className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f59e0b" }}>
            Bordermath
          </span>
        </Link>

        <h1
          className="font-bold mb-2 text-center"
          style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "28px", color: "#f8fafc" }}
        >
          Welcome back
        </h1>
        <p className="text-sm text-center mb-8" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          Don&apos;t have an account?{" "}
          <Link href="/signup" style={{ color: "#f59e0b" }}>
            Sign up free
          </Link>
        </p>

        {registered && (
          <div
            className="rounded-lg p-4 mb-6 text-sm"
            style={{
              backgroundColor: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              color: "#10b981",
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            ✓ Account created! Sign in to start planning your route.
          </div>
        )}

        <div
          className="rounded-xl p-8"
          style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  backgroundColor: "#243060",
                  border: "1px solid #2a3a5c",
                  color: "#f8fafc",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  Password
                </label>
                <Link href="#" className="text-xs" style={{ color: "#f59e0b" }}>
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Your password"
                  required
                  className="w-full px-4 py-2.5 pr-10 rounded-lg text-sm outline-none"
                  style={{
                    backgroundColor: "#243060",
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
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0f1629" }}>
        <div style={{ color: "#94a3b8" }}>Loading...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
