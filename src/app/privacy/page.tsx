import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Privacy Policy — Bordermath",
  description: "Bordermath's privacy policy and how we handle your data.",
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm mb-12" style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>
              Last updated: March 2026
            </p>

            <div className="prose" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: "1.8" }}>
              {[
                {
                  heading: "1. What we collect",
                  body: `Bordermath (operated by ChimeStream) collects the following data:

• Account data: email address, password (hashed), passport nationality/nationalities (for visa calculations)
• Route data: destination countries, travel dates, visa types, route names — used solely to provide the planning service
• Usage analytics: page visits, feature usage (anonymized), error logs — used to improve the product
• Email alerts: your email is used to send route deadline alerts when you enable them`,
                },
                {
                  heading: "2. What we don't do",
                  body: `We do NOT:
• Sell your travel data to any third party
• Share itinerary data with governments or border agencies
• Use your passport details for advertising
• Share your email with external marketing platforms without explicit consent`,
                },
                {
                  heading: "3. Data storage",
                  body: "Data is stored on encrypted servers in the EU. We use industry-standard encryption at rest and in transit (TLS 1.3). Access to production databases is restricted to authorized ChimeStream team members.",
                },
                {
                  heading: "4. Your rights",
                  body: "You can export or delete your account at any time from Settings → Data. You can request a copy of all data we hold about you by emailing hello@bordermath.io. We will fulfill data deletion requests within 30 days.",
                },
                {
                  heading: "5. Cookies",
                  body: "We use minimal cookies for authentication and session management. We do not use third-party tracking cookies or advertising pixels. Analytics are anonymized and processed by self-hosted tooling.",
                },
                {
                  heading: "6. Third-party services",
                  body: "Bordermath uses Stripe for payment processing. Stripe's privacy policy applies to payment data. We do not store full credit card numbers. We use SendGrid for transactional emails (alerts and receipts). Email content is not shared with third parties.",
                },
                {
                  heading: "7. Changes to this policy",
                  body: "We may update this privacy policy. When we do, we'll notify users via email and update the 'Last updated' date above. Continued use of Bordermath after a policy change constitutes acceptance of the new terms.",
                },
                {
                  heading: "8. Contact",
                  body: "For privacy-related questions or requests, contact: hello@bordermath.io",
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
