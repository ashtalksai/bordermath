"use client"

import Link from "next/link"
import { Twitter } from "lucide-react"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a2540", borderTop: "1px solid #2a3a5c" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f59e0b" }}
            >
              Bordermath
            </span>
            <p className="mt-1 text-sm" style={{ color: "#94a3b8" }}>
              Visa route planning for long-term travelers
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-150"
                style={{ color: "#64748b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded transition-colors duration-150"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid #1e2d4a" }}>
          <p className="text-xs" style={{ color: "#64748b" }}>
            © 2026 Bordermath. All rights reserved.
          </p>
          <p className="text-xs mt-1" style={{ color: "#64748b" }}>
            support: hello@bordermath.io
          </p>
        </div>
      </div>
    </footer>
  )
}
