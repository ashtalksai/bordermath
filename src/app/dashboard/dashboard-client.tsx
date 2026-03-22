"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Map,
  Bell,
  Settings,
  Zap,
  Plus,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ChevronRight,
  LogOut,
  MapPin,
} from "lucide-react"
import { signOut } from "next-auth/react"

const MOCK_ROUTES = [
  {
    id: "route-1",
    name: "Europe + SEA 2026",
    flags: ["🇵🇹", "🇹🇭", "🇮🇩", "🇵🇹"],
    status: "compliant" as const,
    nextAlert: "Schengen exit in 14 days",
    lastEdited: "2 hours ago",
  },
  {
    id: "route-2",
    name: "Balkan Loop",
    flags: ["🇷🇸", "🇲🇪", "🇧🇦", "🇭🇷"],
    status: "conflict" as const,
    nextAlert: "⚠ Schengen overlap detected",
    lastEdited: "Yesterday",
  },
]

const MOCK_ALERTS = [
  { id: "a1", routeName: "Europe + SEA 2026", message: "Schengen: 14 days remaining", type: "warning" as const },
  { id: "a2", routeName: "Balkan Loop", message: "Schengen overlap detected on re-entry", type: "error" as const },
]

function StatusBadge({ status }: { status: "compliant" | "conflict" | "violation" }) {
  const map = {
    compliant: { color: "#10b981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.25)", icon: <CheckCircle2 size={12} />, label: "Compliant" },
    conflict: { color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.25)", icon: <AlertTriangle size={12} />, label: "Conflict" },
    violation: { color: "#ef4444", bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.25)", icon: <XCircle size={12} />, label: "Violation" },
  }
  const s = map[status]
  return (
    <span
      className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
      style={{ color: s.color, backgroundColor: s.bg, border: `1px solid ${s.border}` }}
    >
      {s.icon} {s.label}
    </span>
  )
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Map, label: "My Routes", href: "/dashboard", active: false },
  { icon: Bell, label: "Alerts", href: "/dashboard", badge: 2, active: false },
  { icon: Settings, label: "Settings", href: "/dashboard", active: false },
]

interface DashboardClientProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export function DashboardClient({ user }: DashboardClientProps) {
  const [showAlerts, setShowAlerts] = useState(true)

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#0f1629" }}>
      {/* Sidebar */}
      <aside
        className="hidden lg:flex flex-col w-52 shrink-0 border-r"
        style={{ backgroundColor: "#0f1629", borderColor: "#2a3a5c" }}
      >
        {/* Logo */}
        <div className="px-5 py-4 border-b" style={{ borderColor: "#2a3a5c" }}>
          <Link href="/">
            <span className="text-base font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f59e0b" }}>
              Bordermath
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-100"
              style={{
                backgroundColor: item.active ? "#1a2540" : "transparent",
                color: item.active ? "#f8fafc" : "#64748b",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className="ml-auto text-xs px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: "#f59e0b", color: "#0f1629", fontFamily: "JetBrains Mono, monospace" }}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* User info */}
        <div className="p-3 border-t" style={{ borderColor: "#2a3a5c" }}>
          <div className="px-3 py-2 mb-2">
            <p className="text-xs font-medium truncate" style={{ color: "#f8fafc", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              {user.name || "User"}
            </p>
            <p className="text-xs truncate" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              {user.email}
            </p>
          </div>
        </div>

        {/* Upgrade CTA */}
        <div className="p-3">
          <div
            className="rounded-xl p-4"
            style={{
              background: "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)",
              border: "1px solid rgba(245,158,11,0.25)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} color="#f59e0b" />
              <span className="text-xs font-semibold" style={{ color: "#f59e0b", fontFamily: "Space Grotesk, sans-serif" }}>
                Upgrade to Nomad
              </span>
            </div>
            <p className="text-xs mb-3" style={{ color: "#94a3b8" }}>
              Unlimited routes + alerts
            </p>
            <Link
              href="/pricing"
              className="block text-center text-xs py-1.5 rounded-lg font-semibold"
              style={{ backgroundColor: "#f59e0b", color: "#0f1629", fontFamily: "Space Grotesk, sans-serif" }}
            >
              $15/mo
            </Link>
          </div>
        </div>

        {/* Sign out */}
        <div className="p-3 border-t" style={{ borderColor: "#2a3a5c" }}>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm w-full"
            style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            <LogOut size={16} />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header
          className="flex items-center justify-between px-6 border-b"
          style={{ height: "64px", borderColor: "#2a3a5c", backgroundColor: "#0f1629" }}
        >
          <h1
            className="font-semibold text-lg"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc" }}
          >
            Your Routes
          </h1>
          <Link
            href="/routes/new"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{ backgroundColor: "#f59e0b", color: "#0f1629", fontFamily: "Space Grotesk, sans-serif" }}
          >
            <Plus size={16} />
            New Route
          </Link>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {/* Alert strip */}
          {showAlerts && MOCK_ALERTS.length > 0 && (
            <div
              className="rounded-xl p-4 mb-6 flex items-start justify-between gap-4"
              style={{
                backgroundColor: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.25)",
                borderLeft: "3px solid #f59e0b",
              }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={16} color="#f59e0b" />
                  <span className="text-sm font-semibold" style={{ color: "#f59e0b", fontFamily: "Space Grotesk, sans-serif" }}>
                    {MOCK_ALERTS.length} routes need attention
                  </span>
                </div>
                <div className="space-y-1">
                  {MOCK_ALERTS.map((alert) => (
                    <p key={alert.id} className="text-xs" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      <span style={{ color: "#f59e0b" }}>{alert.routeName}</span> — {alert.message}
                    </p>
                  ))}
                </div>
              </div>
              <button onClick={() => setShowAlerts(false)} className="text-xs shrink-0" style={{ color: "#64748b" }}>
                Dismiss
              </button>
            </div>
          )}

          {/* Route cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {MOCK_ROUTES.map((route) => (
              <Link
                key={route.id}
                href={`/routes/${route.id}`}
                className="block rounded-xl p-5 transition-all duration-150 group"
                style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#213057")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a2540")}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "15px" }}
                  >
                    {route.name}
                  </h3>
                  <StatusBadge status={route.status} />
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {route.flags.map((flag, i) => (
                    <span key={i} className="text-base">{flag}</span>
                  ))}
                  <span className="mx-1 text-xs" style={{ color: "#2a3a5c" }}>→</span>
                </div>

                <div
                  className="text-xs mb-2"
                  style={{
                    color: route.status === "compliant" ? "#f59e0b" : "#ef4444",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {route.nextAlert}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    Last edited {route.lastEdited}
                  </span>
                  <span
                    className="text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#f59e0b" }}
                  >
                    Open <ChevronRight size={12} />
                  </span>
                </div>
              </Link>
            ))}

            {/* Empty state / New route CTA */}
            <Link
              href="/routes/new"
              className="block rounded-xl p-8 text-center border-dashed transition-all duration-150"
              style={{ backgroundColor: "transparent", border: "1px dashed #2a3a5c" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#f59e0b")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a3a5c")}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
              >
                <MapPin size={18} color="#64748b" />
              </div>
              <h3
                className="font-semibold mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "14px" }}
              >
                Plan another route
              </h3>
              <p className="text-xs" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Add a new multi-country itinerary
              </p>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
