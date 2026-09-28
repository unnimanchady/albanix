import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Maintenance & Support | Albanix",
  description: "Keep your mobile applications reliable and up to date with ongoing maintenance, improvements, optimization and technical support from Albanix.",
  keywords: ["app maintenance","mobile app maintenance","application support","app updates","software maintenance"],
  alternates: {
    canonical: "https://www.albanix.com/services/app-maintenance",
  },
  openGraph: {
    title: "App Maintenance & Support | Albanix",
    description: "Keep your mobile applications reliable and up to date with ongoing maintenance, improvements, optimization and technical support from Albanix.",
    url: "https://www.albanix.com/services/app-maintenance",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Maintenance & Support | Albanix",
    description: "Keep your mobile applications reliable and up to date with ongoing maintenance, improvements, optimization and technical support from Albanix.",
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
