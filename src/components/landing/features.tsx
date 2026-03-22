"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Bell, RefreshCw, CreditCard, Route } from "lucide-react"

const features = [
  {
    icon: null,
    image: "/images/feature-sequencing.png",
    title: "Route Sequencing",
    description: "Add destinations in any order. Bordermath optimizes the sequence to keep you legal — automatically.",
    isPro: false,
  },
  {
    icon: null,
    image: "/images/feature-counter.png",
    title: "Schengen Counter",
    description: "Real-time 90/180 rolling window tracking across your entire route, not just a single entry.",
    isPro: false,
  },
  {
    icon: null,
    image: "/images/feature-alerts.png",
    title: "Proactive Alerts",
    description: "Email alerts before deadlines hit — not after you've overstayed. 30-day, 14-day, and 7-day warnings by default.",
    isPro: false,
  },
  {
    icon: Shield,
    image: null,
    title: "Policy Change Detection",
    description: "When visa rules change mid-trip, your routes update. You get notified. No more relying on Reddit to find out.",
    isPro: false,
  },
  {
    icon: Route,
    image: null,
    title: "Multi-Passport Support",
    description: "Traveling on multiple passports? Bordermath plans around all of them, using the best passport for each destination.",
    isPro: true,
  },
  {
    icon: CreditCard,
    image: null,
    title: "Budget Optimization",
    description: "Bordermath shows you the cheapest legal route — factoring in visa fees and rough flight cost order.",
    isPro: true,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20" style={{ backgroundColor: "#0f1629" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f8fafc" }}
          >
            Everything a long-term traveler actually needs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-6 transition-all duration-200 group cursor-default"
              style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c", boxShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ backgroundColor: "#213057" }}
            >
              <div className="mb-4">
                {feature.image ? (
                  <div className="w-12 h-12 relative">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                ) : feature.icon ? (
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(245,158,11,0.12)" }}
                  >
                    <feature.icon size={20} color="#f59e0b" />
                  </div>
                ) : null}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "16px" }}
                >
                  {feature.title}
                </h3>
                {feature.isPro && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: "rgba(245,158,11,0.15)",
                      color: "#f59e0b",
                      border: "1px solid rgba(245,158,11,0.3)",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    Pro
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.6" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
