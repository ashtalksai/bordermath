"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTA() {
  return (
    <section
      className="relative py-32"
      style={{
        backgroundImage: "url('/images/bg-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(15,22,41,0.94)" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#f8fafc",
              lineHeight: 1.2,
            }}
          >
            Your next multi-country trip deserves better than a spreadsheet
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Plan your first route in 60 seconds — free, no credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-base transition-all duration-150"
            style={{
              backgroundColor: "#f59e0b",
              color: "#0f1629",
              fontFamily: "Space Grotesk, sans-serif",
              boxShadow: "0 0 30px rgba(245,158,11,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fbbf24"
              e.currentTarget.style.boxShadow = "0 0 40px rgba(245,158,11,0.35)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f59e0b"
              e.currentTarget.style.boxShadow = "0 0 30px rgba(245,158,11,0.2)"
            }}
          >
            Plan my route free
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
