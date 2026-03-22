"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Solution() {
  return (
    <section className="py-20" style={{ backgroundColor: "#1a2540" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#f59e0b", fontFamily: "Space Grotesk, sans-serif", letterSpacing: "0.15em" }}
          >
            The Solution
          </p>
          <h2
            className="font-bold mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f8fafc" }}
          >
            Your compliance co-pilot
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.7" }}
          >
            Bordermath does the visa math for your entire trip — not just one country at a time. Add your destinations, set your dates, and watch the compliance timeline build in real time. When something doesn&apos;t work, Bordermath tells you what to change — not just that something is wrong.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-xl overflow-hidden"
          style={{ border: "1px solid #2a3a5c" }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          <Image
            src="/images/hero-illustration.png"
            alt="Bordermath compliance timeline visualization"
            width={1200}
            height={675}
            className="w-full"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
