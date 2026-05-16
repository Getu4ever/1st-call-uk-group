import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ADVANCED SEO METADATA ENGINE
export const metadata: Metadata = {
  title: "1st Call UK Group | Professional Corporate Services Nottingham",
  description: "1st Call UK Group brings together trusted professional specialists across immigration consultancy, accounting, chartered financial advisory, and corporate digital solutions.",
  keywords: ["1st Call UK Group", "Professional Services Nottingham", "Immigration Advisers UK", "Chartered Accountants Nottingham", "Financial Advisers UK", "Corporate Business Solutions"],
  metadataBase: new URL("https://www.1stcalluk.co.uk"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.1stcalluk.co.uk",
    title: "1st Call UK Group | Professional Corporate Services",
    description: "Delivering premier expertise across regulated immigration routes, tax accountancy, wealth advisory, and corporate web engineering under one trusted umbrella.",
    siteName: "1st Call UK Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "1st Call UK Group Corporate Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1st Call UK Group | Professional Services",
    description: "Regulated corporate immigration, professional financial consulting, and modern enterprise technical growth strategies.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // JSON-LD STRUCTURED DATA SCHEMA FOR INTER-CONNECTED WEBSITES
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "1st Call UK Group",
    "url": "https://www.1stcalluk.co.uk",
    "logo": "https://www.1stcalluk.co.uk/logo.png",
    "description": "A premier professional services hub in Nottingham offering specialized expertise across multi-sector business practices.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nottingham",
      "addressCountry": "GB"
    },
    "sameAs": [
      "https://www.1stcalluk.com",
      "https://www.1stcalluk.financial"
    ]
  };

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        {/* PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* COPYRIGHT BAR — FINAL ELEMENT */}
        <div className="bg-black text-gray-400 text-center py-3 text-xs border-t border-gray-800">
          © {new Date().getFullYear()} 1st Call UK Group. All rights reserved.
        </div>
      </body>
    </html>
  );
}