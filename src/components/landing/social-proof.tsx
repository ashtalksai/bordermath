"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "I've been using spreadsheets to track my visa days for 3 years. Bordermath did in 30 seconds what took me an hour to calculate.",
    author: "Sarah K.",
    role: "Digital Nomad · 4 years, 22 countries",
  },
  {
    quote: "I almost overstayed my Schengen by 3 days because Thailand changed its rules and I missed the announcement. This is exactly what I needed.",
    author: "Marcus T.",
    role: "Remote Founder",
  },
  {
    quote: "The sequence optimizer is the feature I didn't know I needed. It suggested visiting Montenegro before Portugal and saved me 11 days of buffer.",
    author: "Alicia R.",
    role: "Full-Time Traveler",
  },
]

const stats = [
  { value: "1,200+", label: "routes planned" },
  { value: "34", label: "countries covered" },
  { value: "Built by", label: "travelers, for travelers" },
]

export function SocialProof() {
  return (
    <section className="py-20" style={{ backgroundColor: "#0f1629" }}>
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
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(28px, 3.5vw, 40px)", color: "#f8fafc" }}
          >
            Built for the people already doing this in spreadsheets
          </h2>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="rounded-xl p-8 mb-12"
          style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div
                  className="font-bold mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "40px", color: "#f59e0b" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-6"
              style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className="text-2xl mb-4"
                style={{ color: "#f59e0b" }}
              >
                &ldquo;
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.7" }}>
                {t.quote}
              </p>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#f8fafc", fontFamily: "Space Grotesk, sans-serif" }}>
                  {t.author}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
