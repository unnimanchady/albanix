import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/features/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALBANIX | Enterprise Software Platforms",
  description: "Albanix creates industry-focused software platforms designed to simplify operations, connect people and help businesses grow.",
  openGraph: {
    title: "ALBANIX | Enterprise Software Platforms",
    description: "Albanix creates industry-focused software platforms designed to simplify operations, connect people and help businesses grow.",
    type: "website",
    locale: "en_US",
    url: "https://www.albanix.com",
    siteName: "ALBANIX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
