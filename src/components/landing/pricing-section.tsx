"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Minus } from "lucide-react"

const plans = [
  {
    name: "Explorer",
    tier: "free",
    price: { monthly: 0, annual: 0 },
    tagline: "Start for free, no credit card required",
    cta: "Start planning free",
    ctaHref: "/signup",
    featured: false,
    features: [
      { label: "2-destination route planning", included: true },
      { label: "Visual compliance timeline", included: true },
      { label: "Schengen 90/180 calculator", included: true },
      { label: "1 saved route", included: true },
      { label: "Manual alerts only", included: true },
      { label: "Automatic email alerts", included: false },
      { label: "Unlimited routes", included: false },
      { label: "Route re-sequencing", included: false },
      { label: "Multi-passport support", included: false },
    ],
  },
  {
    name: "Nomad",
    tier: "nomad",
    price: { monthly: 15, annual: 10 },
    tagline: "For serious long-term travelers",
    cta: "Start 14-day free trial",
    ctaHref: "/signup?plan=nomad",
    featured: true,
    features: [
      { label: "Unlimited destinations per route", included: true },
      { label: "Unlimited saved routes", included: true },
      { label: "Visual compliance timeline", included: true },
      { label: "Schengen 90/180 counter", included: true },
      { label: "Automatic email alerts (30/14/7 day)", included: true },
      { label: "Real-time policy tracking", included: true },
      { label: "Route re-sequencing on conflict", included: true },
      { label: "Priority support", included: true },
      { label: "Multi-passport support", included: false },
    ],
  },
  {
    name: "Borderless",
    tier: "borderless",
    price: { monthly: 50, annual: 33 },
    tagline: "For multi-passport power travelers",
    cta: "Get Borderless",
    ctaHref: "/signup?plan=borderless",
    featured: false,
    features: [
      { label: "Everything in Nomad", included: true },
      { label: "Multi-passport support (up to 3)", included: true },
      { label: "Budget optimization layer", included: true },
      { label: "PDF route export", included: true },
      { label: "Custom alert schedules", included: true },
      { label: "Dedicated support", included: true },
      { label: "Policy change API access", included: true },
      { label: "White-glove onboarding", included: true },
      { label: "Team seats (coming soon)", included: false },
    ],
  },
]

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20" style={{ backgroundColor: "#1a2540" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f8fafc" }}
          >
            Start free. Upgrade when you&apos;re ready to go further.
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="text-sm" style={{ color: annual ? "#64748b" : "#f8fafc", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full transition-colors duration-200"
              style={{ backgroundColor: annual ? "#f59e0b" : "#2a3a5c" }}
            >
              <span
                className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200"
                style={{ backgroundColor: "#f8fafc", transform: annual ? "translateX(24px)" : "translateX(0)" }}
              />
            </button>
            <span className="text-sm flex items-center gap-2" style={{ color: annual ? "#f8fafc" : "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Annual
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" }}>
                Save 33%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className="relative rounded-xl p-6 flex flex-col"
              style={{
                backgroundColor: plan.featured ? "#0f1629" : "#243060",
                border: plan.featured ? "2px solid #f59e0b" : "1px solid #2a3a5c",
                boxShadow: plan.featured ? "0 0 30px rgba(245,158,11,0.12)" : "0 1px 3px rgba(0,0,0,0.3)",
                transform: plan.featured ? "scale(1.02)" : "scale(1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-4 py-1 rounded-full font-semibold"
                  style={{ backgroundColor: "#f59e0b", color: "#0f1629", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#64748b", fontFamily: "Space Grotesk, sans-serif", letterSpacing: "0.15em" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="font-bold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "48px", color: "#f8fafc" }}
                  >
                    ${annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-sm" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      /mo
                    </span>
                  )}
                </div>
                {plan.price.monthly === 0 && (
                  <span className="text-sm" style={{ color: "#64748b" }}>Forever free</span>
                )}
                {annual && plan.price.monthly > 0 && (
                  <p className="text-xs" style={{ color: "#64748b" }}>
                    <s>${plan.price.monthly}/mo</s> billed annually
                  </p>
                )}
                <p className="text-sm mt-2" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {plan.tagline}
                </p>
              </div>

              <Link
                href={plan.ctaHref}
                className="w-full text-center py-3 rounded-lg font-semibold text-sm mb-6 transition-all duration-150 block"
                style={
                  plan.featured
                    ? { backgroundColor: "#f59e0b", color: "#0f1629", fontFamily: "Space Grotesk, sans-serif" }
                    : { backgroundColor: "transparent", color: "#94a3b8", border: "1px solid #2a3a5c", fontFamily: "Space Grotesk, sans-serif" }
                }
                onMouseEnter={(e) => {
                  if (plan.featured) e.currentTarget.style.backgroundColor = "#fbbf24"
                  else { e.currentTarget.style.color = "#f8fafc"; e.currentTarget.style.borderColor = "#f59e0b" }
                }}
                onMouseLeave={(e) => {
                  if (plan.featured) e.currentTarget.style.backgroundColor = "#f59e0b"
                  else { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "#2a3a5c" }
                }}
              >
                {plan.cta}
              </Link>

              <div className="border-t pt-6 flex-1" style={{ borderColor: "#2a3a5c" }}>
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      {f.included ? (
                        <Check size={16} color="#10b981" className="shrink-0 mt-0.5" />
                      ) : (
                        <Minus size={16} color="#64748b" className="shrink-0 mt-0.5" />
                      )}
                      <span style={{ color: f.included ? "#94a3b8" : "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
