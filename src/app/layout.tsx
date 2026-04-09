import type { Metadata, Viewport } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NavigationJsonLd } from "@/components/seo/NavigationJsonLd";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1e3a5f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="flex min-h-screen min-w-0 flex-col overflow-x-hidden bg-white font-sans antialiased text-[#1e3a5f]">
        <SiteJsonLd />
        <NavigationJsonLd />
        <Navigation />
        <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
