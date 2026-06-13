import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { companyProfile } from "@/lib/company";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rdnaturals.in"),
  title: {
    default: "RD Naturals | Premium Indian Spice Exporter",
    template: "%s | RD Naturals",
  },
  description:
    "RD Naturals is an India-based spice exporter supplying premium whole spices to global importers with quality control, documentation support, and reliable shipment planning.",
  keywords: [
    "Indian spice exporter",
    "whole spices exporter India",
    "bulk spices supplier",
    "private label spice exporter",
    "cumin seeds exporter",
    "coriander seeds exporter",
    "turmeric exporter India",
    "dry red chilli exporter",
    "black pepper exporter",
    "cardamom exporter",
    "spice export company India",
    "FOB CIF spice export",
    "spice export documentation support",
    "organic spice sourcing India",
    "whole spice exporter India",
    "Indian spices supplier",
  ],
  openGraph: {
    title: "RD Naturals | Premium Indian Spice Exporter",
    description:
      "Supplying premium whole spices to global buyers with structured quality control, compliance readiness, and dependable export execution.",
    url: "https://rdnaturals.in",
    siteName: "RD Naturals",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RD Naturals | Premium Indian Spice Exporter",
    description:
      "Reliable Indian spice export partner for global importers, distributors, and private label buyers.",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyProfile.name,
  url: "https://rdnaturals.in",
  email: companyProfile.email,
  telephone: companyProfile.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: companyProfile.address,
    addressCountry: "IN",
  },
  areaServed: ["United States", "Canada", "United Kingdom", "Middle East"],
  knowsAbout: [
    "Indian whole spices export",
    "Bulk spice supply",
    "Private label spice programs",
    "Spice export documentation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable} antialiased`}>
      <body className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-slate)]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
