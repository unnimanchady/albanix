import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Capabilities | Albanix",
  description: "Explore Albanix capabilities in web development, mobile apps, UI/UX design, SaaS, custom software, digital marketplaces and business applications.",
  keywords: ["software development","web development","mobile app development","UI UX design","SaaS development","custom software","business software","digital marketplace development"],
  alternates: {
    canonical: "https://www.albanix.com/capabilities",
  },
  openGraph: {
    title: "Software Development Capabilities | Albanix",
    description: "Explore Albanix capabilities in web development, mobile apps, UI/UX design, SaaS, custom software, digital marketplaces and business applications.",
    url: "https://www.albanix.com/capabilities",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Capabilities | Albanix",
    description: "Explore Albanix capabilities in web development, mobile apps, UI/UX design, SaaS, custom software, digital marketplaces and business applications.",
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
