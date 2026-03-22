"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/pitch", label: "Pitch" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
        style={{
          backgroundColor: scrolled ? "rgba(15,22,41,0.95)" : "rgba(15,22,41,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #1e2d4a" : "none",
          height: "64px",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f59e0b" }}
            >
              Bordermath
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-150"
                style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm px-4 py-2 rounded transition-colors duration-150"
              style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="text-sm px-5 py-2 rounded font-medium transition-all duration-150"
              style={{
                backgroundColor: "#f59e0b",
                color: "#0f1629",
                fontFamily: "Space Grotesk, sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fbbf24")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f59e0b")}
            >
              Get started free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#94a3b8" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: "rgba(15,22,41,0.98)", paddingTop: "64px" }}
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg py-3 border-b"
                style={{ color: "#f8fafc", borderColor: "#1e2d4a", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 rounded border"
                style={{ color: "#94a3b8", borderColor: "#2a3a5c" }}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 rounded font-semibold"
                style={{ backgroundColor: "#f59e0b", color: "#0f1629" }}
              >
                Get started free
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
