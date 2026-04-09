import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { getSiteUrl, siteSeo } from "@/lib/seo/config";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteSeo.name} — ${siteSeo.tagline}`,
    template: `%s | ${siteSeo.name}`,
  },
  description: siteSeo.description,
  keywords: [...siteSeo.keywords],
  authors: [{ name: siteSeo.name, url: siteUrl }],
  creator: siteSeo.name,
  publisher: siteSeo.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: siteSeo.locale,
    url: siteUrl,
    siteName: siteSeo.name,
    title: `${siteSeo.name} — ${siteSeo.tagline}`,
    description: siteSeo.description,
    images: [
      {
        url: "/images/Mindfulcrum.png",
        width: 1200,
        height: 630,
        alt: `${siteSeo.name} — ${siteSeo.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSeo.name} — ${siteSeo.tagline}`,
    description: siteSeo.description,
    images: ["/images/Mindfulcrum.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="min-h-screen flex flex-col bg-white antialiased text-[#1e3a5f]">
        <SiteJsonLd />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
