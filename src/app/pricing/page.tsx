import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PricingSection } from "@/components/landing/pricing-section"
import { Check, Minus } from "lucide-react"

export const metadata = {
  title: "Pricing — Bordermath",
  description: "Start free. Upgrade when you need more. No credit card required.",
}

const tableFeatures = [
  { label: "Destinations per route", values: ["2", "Unlimited", "Unlimited"] },
  { label: "Saved routes", values: ["1", "Unlimited", "Unlimited"] },
  { label: "Schengen 90/180 counter", values: [true, true, true] },
  { label: "Compliance timeline", values: [true, true, true] },
  { label: "Automatic email alerts", values: [false, "30/14/7 day", "Custom"] },
  { label: "Real-time policy tracking", values: [false, true, true] },
  { label: "Route conflict detection", values: ["Manual", "Automatic", "Automatic"] },
  { label: "Route re-sequencing", values: [false, true, true] },
  { label: "Multi-passport support", values: [false, false, "Up to 3"] },
  { label: "Budget optimization", values: [false, false, true] },
  { label: "PDF export", values: [false, false, true] },
  { label: "Priority support", values: [false, true, true] },
]

function TableCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={18} color="#10b981" />
  if (value === false) return <Minus size={18} color="#64748b" />
  return <span className="text-sm" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{value}</span>
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        {/* Header */}
        <section className="py-16 text-center" style={{ backgroundColor: "#0f1629" }}>
          <h1
            className="font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(36px, 5vw, 56px)", color: "#f8fafc" }}
          >
            Simple, transparent pricing
          </h1>
          <p className="text-lg" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Start free. Upgrade when you&apos;re ready to go further.
          </p>
        </section>

        <PricingSection />

        {/* Feature comparison table */}
        <section className="py-20" style={{ backgroundColor: "#0f1629" }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="font-bold text-center mb-10"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "28px", color: "#f8fafc" }}
            >
              Full feature comparison
            </h2>

            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #2a3a5c" }}>
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#1a2540", borderBottom: "1px solid #2a3a5c" }}>
                    <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: "#f8fafc", fontFamily: "Space Grotesk, sans-serif" }}>
                      Feature
                    </th>
                    {["Explorer", "Nomad", "Borderless"].map((plan) => (
                      <th key={plan} className="text-center px-6 py-4 text-sm font-semibold" style={{ color: "#f8fafc", fontFamily: "Space Grotesk, sans-serif" }}>
                        {plan}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableFeatures.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#0f1629" : "#111827",
                        borderBottom: "1px solid #1e2d4a",
                      }}
                    >
                      <td className="px-6 py-4 text-sm" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                        {row.label}
                      </td>
                      {row.values.map((val, j) => (
                        <td key={j} className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <TableCell value={val} />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pricing FAQ */}
            <div className="mt-16">
              <h3
                className="font-bold text-center mb-8"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "24px", color: "#f8fafc" }}
              >
                Billing questions
              </h3>
              <div className="space-y-4 max-w-2xl mx-auto">
                {[
                  { q: "Can I try Pro before paying?", a: "Yes — 14-day free trial on Nomad, no credit card required." },
                  { q: "What happens when I hit 2 destinations on Free?", a: "You'll see a prompt to upgrade. Your existing route isn't deleted." },
                  { q: "Can I cancel anytime?", a: "Yes. Cancel anytime from Settings. No questions asked." },
                  { q: "Is annual billing available?", a: "Yes — pay annually and save 33%." },
                  { q: "Do you offer refunds?", a: "7-day money-back guarantee on first payment." },
                ].map((faq, i) => (
                  <div key={i} className="rounded-xl p-5" style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}>
                    <h4 className="font-semibold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "15px", color: "#f8fafc" }}>
                      {faq.q}
                    </h4>
                    <p className="text-sm" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
