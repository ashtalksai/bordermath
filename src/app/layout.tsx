import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bordermath — Visa Route Planning for Long-Term Travelers",
  description: "Bordermath sequences your multi-country route around visa windows — so you stay legal, stay moving, and never scramble to leave a country early.",
  openGraph: {
    title: "Bordermath — Visa Route Planning for Long-Term Travelers",
    description: "Stop counting days. Start planning trips.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: '#0f1629', color: '#f8fafc' }}>
        {children}
      </body>
    </html>
  );
}
