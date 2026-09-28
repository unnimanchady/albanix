import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iOS App Development Company | Albanix",
  description: "Albanix develops modern iOS applications with user-focused design, reliable engineering and scalable technology for businesses and digital products.",
  keywords: ["iOS app development","iOS application development","iPhone app development","mobile app development","iOS development company"],
  alternates: {
    canonical: "https://www.albanix.com/services/ios-development",
  },
  openGraph: {
    title: "iOS App Development Company | Albanix",
    description: "Albanix develops modern iOS applications with user-focused design, reliable engineering and scalable technology for businesses and digital products.",
    url: "https://www.albanix.com/services/ios-development",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "iOS App Development Company | Albanix",
    description: "Albanix develops modern iOS applications with user-focused design, reliable engineering and scalable technology for businesses and digital products.",
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
