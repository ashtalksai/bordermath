"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Add your destinations",
    description: "Select countries, set rough stay durations. Drag to reorder. Free tier: 2 countries. Pro: unlimited.",
    detail: "Search from 50+ countries with up-to-date visa rules pre-loaded.",
  },
  {
    number: "02",
    title: "Watch the timeline build",
    description: "Bordermath calculates rolling windows, flags conflicts, shows you exactly where you stand on Schengen days and per-country visa limits.",
    detail: "Color-coded bands show compliant (amber/teal) vs. conflict (red) zones in real time.",
  },
  {
    number: "03",
    title: "Travel with confidence",
    description: "Alerts fire before deadlines. Policy changes update your route. Your spreadsheet finally has a replacement.",
    detail: "30, 14, and 7-day email warnings before every visa deadline. Automated, not manual.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: "#1a2540" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f8fafc" }}
          >
            Three steps to a legal route
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Large step number — behind card */}
              <div
                className="absolute -top-6 -left-2 font-bold select-none"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "80px",
                  color: "#1e2d4a",
                  lineHeight: 1,
                  zIndex: 0,
                }}
              >
                {step.number}
              </div>

              <div
                className="relative rounded-xl p-6"
                style={{
                  backgroundColor: "#243060",
                  border: "1px solid #2a3a5c",
                  zIndex: 1,
                  marginTop: "24px",
                }}
              >
                <h3
                  className="font-semibold mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "18px" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.6" }}>
                  {step.description}
                </p>
                <p className="text-xs" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
