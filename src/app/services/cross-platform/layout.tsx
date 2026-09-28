import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cross-Platform App Development | Albanix",
  description: "Build modern mobile applications for iOS and Android with efficient cross-platform development and a consistent user experience.",
  keywords: ["cross platform app development","cross platform mobile apps","iOS Android development","mobile application development"],
  alternates: {
    canonical: "https://www.albanix.com/services/cross-platform",
  },
  openGraph: {
    title: "Cross-Platform App Development | Albanix",
    description: "Build modern mobile applications for iOS and Android with efficient cross-platform development and a consistent user experience.",
    url: "https://www.albanix.com/services/cross-platform",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Platform App Development | Albanix",
    description: "Build modern mobile applications for iOS and Android with efficient cross-platform development and a consistent user experience.",
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
