import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Android App Development Company | Albanix",
  description: "Albanix develops modern Android applications for businesses, startups and digital products with scalable technology and user-focused experiences.",
  keywords: ["Android app development","Android application development","mobile app development","Android development company"],
  alternates: {
    canonical: "https://www.albanix.com/services/android-development",
  },
  openGraph: {
    title: "Android App Development Company | Albanix",
    description: "Albanix develops modern Android applications for businesses, startups and digital products with scalable technology and user-focused experiences.",
    url: "https://www.albanix.com/services/android-development",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Android App Development Company | Albanix",
    description: "Albanix develops modern Android applications for businesses, startups and digital products with scalable technology and user-focused experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}
    </>
  );
}
