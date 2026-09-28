import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | Digital Product Development | Albanix",
  description: "Discover how Albanix turns business ideas into digital products through strategy, UX design, software engineering, testing, launch and continuous improvement.",
  keywords: ["digital product development","software development process","product design","software engineering","custom software development"],
  alternates: {
    canonical: "https://www.albanix.com/approach",
  },
  openGraph: {
    title: "Our Approach | Digital Product Development | Albanix",
    description: "Discover how Albanix turns business ideas into digital products through strategy, UX design, software engineering, testing, launch and continuous improvement.",
    url: "https://www.albanix.com/approach",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach | Digital Product Development | Albanix",
    description: "Discover how Albanix turns business ideas into digital products through strategy, UX design, software engineering, testing, launch and continuous improvement.",
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
