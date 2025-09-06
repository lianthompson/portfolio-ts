import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { useMessages } from 'next-intl';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lian Thompson",
  description: "Frontend Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable}`}>
        {children}
        <Analytics/>
        {/* <NextIntlClientProvider>{children}</NextIntlClientProvider> */}
      </body>
    </html>
  );
}
