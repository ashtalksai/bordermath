import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Contact — Bordermath",
  description: "Get in touch with the Bordermath team.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px", minHeight: "80vh" }}>
        <section className="py-20" style={{ backgroundColor: "#0f1629" }}>
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1
                className="font-bold mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f8fafc" }}
              >
                Get in touch
              </h1>
              <p className="text-base" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                We respond within 24 hours on business days.
              </p>
            </div>

            <div className="rounded-xl p-8" style={{ backgroundColor: "#1a2540", border: "1px solid #2a3a5c" }}>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                    style={{
                      backgroundColor: "#243060",
                      border: "1px solid #2a3a5c",
                      color: "#f8fafc",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                    style={{
                      backgroundColor: "#243060",
                      border: "1px solid #2a3a5c",
                      color: "#f8fafc",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                    style={{
                      backgroundColor: "#243060",
                      border: "1px solid #2a3a5c",
                      color: "#f8fafc",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General question</option>
                    <option value="bug">Bug report</option>
                    <option value="feature">Feature request</option>
                    <option value="billing">Billing</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#94a3b8", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none resize-none"
                    style={{
                      backgroundColor: "#243060",
                      border: "1px solid #2a3a5c",
                      color: "#f8fafc",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-sm"
                  style={{
                    backgroundColor: "#f59e0b",
                    color: "#0f1629",
                    fontFamily: "Space Grotesk, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Send message
                </button>
              </form>

              <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: "#2a3a5c" }}>
                <p className="text-sm" style={{ color: "#64748b", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  Or email us directly at{" "}
                  <a href="mailto:hello@bordermath.io" style={{ color: "#f59e0b" }}>
                    hello@bordermath.io
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
