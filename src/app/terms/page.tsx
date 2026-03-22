import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Terms of Service — Bordermath",
  description: "Bordermath's terms of service.",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <section className="py-20" style={{ backgroundColor: "#0f1629" }}>
          <div className="max-w-3xl mx-auto px-6">
            <h1
              className="font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f8fafc" }}
            >
              Terms of Service
            </h1>
            <p className="text-sm mb-12" style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>
              Last updated: March 2026
            </p>

            <div style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.8" }}>
              {[
                {
                  heading: "1. Not legal advice",
                  body: `Bordermath provides visa planning guidance based on publicly available visa rules. We are NOT a legal service. Visa rules change frequently. Always verify requirements with the official embassy or consulate before traveling.

Using Bordermath does not constitute legal advice. We are not responsible for overstay fines, deportation, or visa violations that result from changes in immigration policy after we last updated our data.`,
                },
                {
                  heading: "2. Acceptable use",
                  body: `Free tier: personal use only.
Paid tiers: personal use. Commercial redistribution of route data requires a separate agreement.

You may not use Bordermath to:
• Violate any applicable laws or regulations
• Scrape or systematically collect data from the platform
• Reverse-engineer the visa database or algorithm
• Impersonate other users or ChimeStream staff`,
                },
                {
                  heading: "3. Payments and subscriptions",
                  body: "Payment is processed by Stripe. Subscriptions renew monthly or annually. Cancel anytime from Settings → Billing. 7-day refund on first payment. After the refund window, we do not issue refunds for partial billing periods.",
                },
                {
                  heading: "4. Data accuracy disclaimer",
                  body: "Bordermath uses publicly available visa data and strives to keep it current. However, visa rules can change without notice. We make no warranty that our data is accurate, complete, or up-to-date at the time of use. Always verify with official sources before booking or traveling.",
                },
                {
                  heading: "5. Service availability",
                  body: "We aim for 99.5% uptime but make no guarantees. Scheduled maintenance will be announced 24 hours in advance. We are not liable for losses resulting from service downtime.",
                },
                {
                  heading: "6. Account termination",
                  body: "We reserve the right to terminate accounts that violate these terms. Upon termination, you will lose access to your routes and account data. We will provide 30 days notice for voluntary termination unless the violation is severe.",
                },
                {
                  heading: "7. Limitation of liability",
                  body: "ChimeStream's total liability to you for any claims arising from use of Bordermath is limited to the amount you paid us in the 12 months preceding the claim, or €100, whichever is greater.",
                },
                {
                  heading: "8. Governing law",
                  body: "These terms are governed by the laws of the Netherlands. Disputes will be resolved in the courts of Rotterdam, Netherlands.",
                },
                {
                  heading: "9. Contact",
                  body: "Questions about these terms: hello@bordermath.io",
                },
              ].map((section, i) => (
                <div key={i} className="mb-10">
                  <h2
                    className="font-semibold mb-3"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "20px", color: "#f8fafc" }}
                  >
                    {section.heading}
                  </h2>
                  <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#94a3b8" }}>
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
