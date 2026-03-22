"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, FileText, Menu, X } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const SECTIONS = [
  {
    id: "research",
    label: "Research",
    icon: "📊",
    title: "Market Research",
    description: "In-depth analysis of the digital nomad visa planning market, competitor landscape, and opportunity sizing. Includes interviews with 40+ long-term travelers and analysis of Schengen violation patterns.",
    googleDocUrl: "https://docs.google.com/document/d/1I-MyenaqLVSp-_Mmq4KP24VfNpn0THH7MdVZw03llWE",
    preview: [
      "TAM/SAM/SOM analysis: $2.1B total addressable market",
      "40+ traveler interviews: core pain points identified",
      "Competitor analysis: 12 tools evaluated",
      "Regulatory overview: Schengen, SEA visa regimes",
    ],
  },
  {
    id: "gtm",
    label: "GTM Plan",
    icon: "🚀",
    title: "Go-To-Market Strategy",
    description: "Full go-to-market plan including channel strategy, launch sequencing, community building, and first 90-day growth playbook. Written by @marketer — coming after Stage 8.",
    googleDocUrl: null,
    preview: [
      "Launch channels: Reddit r/digitalnomad, Twitter, Product Hunt",
      "Community strategy: digital nomad forums + Facebook groups",
      "SEO: 200+ long-tail visa content keywords identified",
      "Influencer strategy: nomad travel creators",
    ],
    pending: true,
  },
  {
    id: "marketing",
    label: "Marketing Plan",
    icon: "📣",
    title: "Marketing Plan",
    description: "Quarterly marketing roadmap with budget allocation, channel breakdown, content calendar, and conversion optimization strategy. Coming after Stage 8.",
    googleDocUrl: null,
    preview: [
      "Q1 budget: $2,000 — SEO content + Reddit ads",
      "Target: 500 signups in first 30 days",
      "Content calendar: 3x/week visa guides",
      "Referral program: 1 month free per referral",
    ],
    pending: true,
  },
  {
    id: "brand",
    label: "Brand Spec",
    icon: "🎨",
    title: "Brand & Design Spec",
    description: "Full brand specification including visual identity, color system, typography, component library, and design principles. Created by @designer.",
    googleDocUrl: "https://docs.google.com/document/d/1t3N7jWloTEPtV2To0IHvKLg30oTEY7h_eEgiY5BrdYA/edit",
    preview: [
      "Color system: Navy #0f1629 + Amber #f59e0b + Teal #0d9488",
      "Typography: Space Grotesk + Plus Jakarta Sans + JetBrains Mono",
      "Component specs: Timeline bands, badges, cards",
      "Design tone: Bloomberg Terminal meets Stripe docs",
    ],
  },
  {
    id: "pitch",
    label: "Pitch Deck",
    icon: "📋",
    title: "Pitch Deck",
    description: "Interactive pitch presentation for investor conversations. View it live at /deck — covers problem, solution, market, business model, traction, and the ask.",
    googleDocUrl: null,
    internalUrl: "/deck",
    preview: [
      "8 slides: Problem → Solution → Market → Model → Traction → Ask",
      "Animated Framer Motion presentation",
      "Live at /deck (interactive browser presentation)",
      "Content from @marketer Stage 8 — populated post-marketing",
    ],
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research")
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const section = SECTIONS.find((s) => s.id === activeSection) ?? SECTIONS[0]

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "64px", minHeight: "100vh", backgroundColor: "#0f1629" }}>
        <div className="max-w-6xl mx-auto flex">
          {/* Sidebar — desktop */}
          <aside
            className="hidden lg:block w-60 shrink-0 border-r sticky top-16"
            style={{ borderColor: "#2a3a5c", height: "calc(100vh - 64px)", overflowY: "auto", backgroundColor: "#0f1629" }}
          >
            <div className="p-4">
              <h2
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "#64748b", fontFamily: "Space Grotesk, sans-serif", letterSpacing: "0.15em" }}
              >
                Documents
              </h2>
              <nav className="space-y-0.5">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-left transition-all"
                    style={{
                      backgroundColor: activeSection === sec.id ? "#1a2540" : "transparent",
                      color: activeSection === sec.id ? "#f8fafc" : "#64748b",
                      borderLeft: activeSection === sec.id ? "2px solid #f59e0b" : "2px solid transparent",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    <span>{sec.icon}</span>
                    <span>{sec.label}</span>
                    {sec.pending && (
                      <span className="ml-auto text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: "#1a2540", color: "#64748b" }}>
                        soon
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile nav toggle */}
          <div
            className="lg:hidden fixed bottom-6 right-6 z-50"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#f59e0b", color: "#0f1629" }}
            >
              {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile nav drawer */}
          {mobileNavOpen && (
            <div
              className="lg:hidden fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(15,22,41,0.98)", paddingTop: "64px" }}
            >
              <div className="p-6">
                <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#64748b" }}>
                  Documents
                </h2>
                <nav className="space-y-1">
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => { setActiveSection(sec.id); setMobileNavOpen(false) }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left"
                      style={{
                        backgroundColor: activeSection === sec.id ? "#1a2540" : "transparent",
                        color: activeSection === sec.id ? "#f8fafc" : "#64748b",
                      }}
                    >
                      <span className="text-xl">{sec.icon}</span>
                      <span className="font-medium">{sec.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Main content */}
          <main className="flex-1 min-w-0 p-8">
            <div className="max-w-2xl">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{section.icon}</span>
                  <h1
                    className="font-bold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "28px", color: "#f8fafc" }}
                  >
                    {section.title}
                  </h1>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.7" }}>
                  {section.description}
                </p>
              </div>

              {/* Content card */}
              <div
                className="rounded-xl p-6 mb-6"
                style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
              >
                <h3
                  className="font-semibold mb-4"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "14px", color: "#f8fafc" }}
                >
                  Contents
                </h3>
                <ul className="space-y-2">
                  {section.preview.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94a3b8" }}>
                      <span className="mt-0.5 shrink-0" style={{ color: "#f59e0b" }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                {section.googleDocUrl && (
                  <a
                    href={section.googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                    style={{ backgroundColor: "#f59e0b", color: "#0f1629", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    <ExternalLink size={16} />
                    Open in Google Docs
                  </a>
                )}
                {section.internalUrl && (
                  <Link
                    href={section.internalUrl}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all border"
                    style={{ color: "#f59e0b", borderColor: "rgba(245,158,11,0.4)", backgroundColor: "transparent" }}
                  >
                    <FileText size={16} />
                    View Presentation
                  </Link>
                )}
                {section.pending && (
                  <div
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm"
                    style={{ color: "#64748b", backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
                  >
                    <FileText size={16} />
                    Document coming after marketing stage
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}
