"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Does Bordermath work for all passports, or just EU/US?",
    a: "Bordermath supports all major passport nationalities and covers 50+ destination countries. EU passports, US passport, UK, Australian, Canadian — all covered. We're adding more countries with every release. If your destination isn't listed yet, you can add a note manually.",
  },
  {
    q: "How current is your visa data? What if a country changes its rules?",
    a: "We monitor official government sources and embassy announcements for policy changes. When a rule changes, any route that uses that country gets flagged immediately. On Pro and Elite tiers, you get an email alert within 24 hours of a policy change affecting your itinerary.",
  },
  {
    q: "What's the Schengen counter and how does it work?",
    a: "The Schengen Area operates on a rolling 90/180-day rule — you can stay 90 days in any 180-day window across the entire Schengen zone (26 countries). Bordermath tracks this across your entire route, including entries and exits, so you always know how many days you have left without manually calculating.",
  },
  {
    q: "What does 'route sequencing' actually mean?",
    a: "Sequencing is the magic. Instead of just checking if your dates are legal, Bordermath optimizes the ORDER of your destinations. For example: if you planned Portugal → Thailand → Bali → back to Portugal, Bordermath might suggest Thailand → Bali → Portugal first — giving you more Schengen buffer on the return. It's visa math, not just a calculator.",
  },
  {
    q: "Can I use this for short trips, not just long-term nomads?",
    a: "Absolutely. If you're spending 3+ months traveling Europe and Southeast Asia, you're exactly who we built this for. But even a 60-day EU + Asia trip benefits from proactive Schengen tracking. If you're booking multiple countries, Bordermath is for you.",
  },
  {
    q: "What happens when a policy changes mid-trip?",
    a: "On Pro and Elite tiers, Bordermath detects policy changes and re-evaluates your active routes. If a change creates a conflict, you get an alert immediately — not a news article, an alert about YOUR specific itinerary. Free tier users get a flag on their dashboard within 48 hours.",
  },
  {
    q: "Is my data secure? Who can see my travel plans?",
    a: "Your route data is private to your account. We don't share, sell, or use your itinerary data for anything other than providing the service. Routes are stored encrypted. See our full privacy policy for details.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "#2a3a5c" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-4">
        <h3
          className="font-medium text-left pr-4"
          style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "15px", color: "#f8fafc" }}
        >
          {q}
        </h3>
        <ChevronDown
          size={18}
          color="#64748b"
          className="shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p
              className="pb-4 text-sm leading-relaxed"
              style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.7" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="py-20" style={{ backgroundColor: "#0f1629" }}>
      <div className="max-w-3xl mx-auto px-6">
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
            Got questions?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
