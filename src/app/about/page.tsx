import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About — Bordermath",
  description: "We built Bordermath after one of our founders almost overstayed his Schengen. The spreadsheet said one thing. Reality said another.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ minHeight: "400px" }}>
          <Image
            src="/images/about-visual.png"
            alt="Bordermath — built by travelers"
            fill
            className="object-cover"
            style={{ opacity: 0.2 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(15,22,41,0.7) 0%, #0f1629 100%)" }}
          />
          <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
            <h1
              className="font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(36px, 5vw, 64px)", color: "#f8fafc" }}
            >
              We built this because we needed it.
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", maxWidth: "640px", margin: "0 auto", lineHeight: "1.7" }}
            >
              Bordermath was born after one of our founders spent 4 hours on a Saturday realizing his Schengen days didn&apos;t add up for his planned return to Portugal — and he was already in Bangkok. The spreadsheet said one thing. Reality said another.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20" style={{ backgroundColor: "#0f1629" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div
              className="rounded-xl p-10 text-center"
              style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}
            >
              <p
                className="text-2xl font-medium leading-relaxed italic"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc" }}
              >
                &ldquo;We believe long-term travel should be about the trip — not the paperwork. Bordermath handles the visa math so you can focus on where you&apos;re going, not whether you&apos;re allowed to be there.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20" style={{ backgroundColor: "#1a2540" }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="font-bold mb-12 text-center"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "36px", color: "#f8fafc" }}
            >
              What makes Bordermath different
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: "✦",
                  title: "The first visa planner that sequences routes",
                  body: "Every existing tool answers 'how many days have I been in Schengen?' Bordermath answers 'what's the optimal ORDER to visit my destinations to stay legal?' That's the real problem — and nobody else solves it.",
                },
                {
                  icon: "✦",
                  title: "Proactive alerts, not reactive panic",
                  body: "You hear about conflicts before you book, not after you land. Bordermath monitors your active routes and fires alerts 30, 14, and 7 days before every deadline. While you sleep.",
                },
                {
                  icon: "✦",
                  title: "Built by travelers who've hit the wall",
                  body: "We know what actually matters in the data. Not every policy nuance — the ones that bite you on the return trip. The ones that Reddit finds out about 2 weeks after the embassy updates them.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 flex gap-4"
                  style={{ backgroundColor: "#243060", border: "1px solid #2a3a5c" }}
                >
                  <span className="text-xl mt-0.5 shrink-0" style={{ color: "#f59e0b" }}>{item.icon}</span>
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f8fafc", fontSize: "17px" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.6" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20" style={{ backgroundColor: "#0f1629" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="rounded-xl p-8" style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}>
              <h2
                className="font-bold mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "24px", color: "#f8fafc" }}
              >
                Built by ChimeStream
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.7" }}>
                ChimeStream is a small team of builders and travelers. We ship fast, iterate on user feedback, and dogfood every feature ourselves. Bordermath is the tool we wish existed when we were staring at a spreadsheet at 11pm, trying to figure out if our Europe → Asia → Europe route was actually legal.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: "#1a2540" }}>
          <div className="max-w-xl mx-auto px-6 text-center">
            <h2
              className="font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "28px", color: "#f8fafc" }}
            >
              Start planning — it&apos;s free
            </h2>
            <p className="text-sm mb-8" style={{ color: "#94a3b8" }}>No credit card. No onboarding call. Just plan your route.</p>
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-3 rounded-lg font-semibold text-sm"
              style={{ backgroundColor: "#f59e0b", color: "#0f1629", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Start planning free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
