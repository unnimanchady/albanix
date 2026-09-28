import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Albanix | Software & Digital Product Development Company",
  description: "Learn about Albanix, a software and digital product development company based in Kochi, Kerala, creating web, mobile and custom software solutions for businesses.",
  keywords: ["Albanix","software company Kochi","software development Kerala","digital product development","custom software development"],
  alternates: {
    canonical: "https://www.albanix.com/about",
  },
  openGraph: {
    title: "About Albanix | Software & Digital Product Development Company",
    description: "Learn about Albanix, a software and digital product development company based in Kochi, Kerala, creating web, mobile and custom software solutions for businesses.",
    url: "https://www.albanix.com/about",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Albanix | Software & Digital Product Development Company",
    description: "Learn about Albanix, a software and digital product development company based in Kochi, Kerala, creating web, mobile and custom software solutions for businesses.",
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
