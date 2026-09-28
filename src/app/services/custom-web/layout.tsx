import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Company in Kochi | Albanix",
  description: "Albanix builds responsive business websites and modern web applications with clean design, scalable technology and strong user experiences.",
  keywords: ["web development company Kochi","web development Kerala","custom web development","website development","web application development"],
  alternates: {
    canonical: "https://www.albanix.com/services/custom-web",
  },
  openGraph: {
    title: "Web Development Company in Kochi | Albanix",
    description: "Albanix builds responsive business websites and modern web applications with clean design, scalable technology and strong user experiences.",
    url: "https://www.albanix.com/services/custom-web",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Kochi | Albanix",
    description: "Albanix builds responsive business websites and modern web applications with clean design, scalable technology and strong user experiences.",
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
