import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GroupHeader from "./components/GroupHeader";
import GroupFooter from "./components/GroupFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1st Call UK Group",
  description: "Professional services group delivering trusted expertise across specialist sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
