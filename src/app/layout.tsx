import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:text-text focus:shadow-glow"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="container-pad">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

