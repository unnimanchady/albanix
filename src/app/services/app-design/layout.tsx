import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App UI/UX Design | Albanix",
  description: "Albanix creates intuitive mobile app UI/UX designs focused on usability, clarity and engaging digital experiences.",
  keywords: ["mobile app UI UX","app UI design","app UX design","mobile application design","UI UX design"],
  alternates: {
    canonical: "https://www.albanix.com/services/app-design",
  },
  openGraph: {
    title: "Mobile App UI/UX Design | Albanix",
    description: "Albanix creates intuitive mobile app UI/UX designs focused on usability, clarity and engaging digital experiences.",
    url: "https://www.albanix.com/services/app-design",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App UI/UX Design | Albanix",
    description: "Albanix creates intuitive mobile app UI/UX designs focused on usability, clarity and engaging digital experiences.",
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
