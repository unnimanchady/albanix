import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutAlbanix } from "@/components/home/AboutAlbanix";
import { OurProducts } from "@/components/home/OurProducts";
import { TechnologyFoundation } from "@/components/home/TechnologyFoundation";
import { ContactCTA } from "@/components/home/ContactCTA";


export const metadata: Metadata = {
  title: "Albanix | Software Development Company in Kochi, Kerala",
  description: "Albanix is a software development company in Kochi, Kerala, building websites, web applications, mobile apps, SaaS products and custom business software.",
  keywords: ["software development company in Kochi","software company in Kerala","web development","mobile app development","custom software development","SaaS development","digital product development"],
  alternates: {
    canonical: "https://www.albanix.com",
  },
  openGraph: {
    title: "Albanix | Software Development Company in Kochi, Kerala",
    description: "Albanix is a software development company in Kochi, Kerala, building websites, web applications, mobile apps, SaaS products and custom business software.",
    url: "https://www.albanix.com",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Albanix | Software Development Company in Kochi, Kerala",
    description: "Albanix is a software development company in Kochi, Kerala, building websites, web applications, mobile apps, SaaS products and custom business software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Albanix","url":"https://www.albanix.com","logo":"https://www.albanix.com/icon.png","description":"Software development and digital product development company based in Kochi, Kerala, India.","address":{"@type":"PostalAddress","streetAddress":"No. 17/2259, Seaport - Airport Road, CSEZ P.O","addressLocality":"Kakkanad, Kochi","addressRegion":"Kerala","postalCode":"682037","addressCountry":"IN"},"contactPoint":{"@type":"ContactPoint","telephone":"+91-8075313023","contactType":"customer service","email":"info@albanix.com","availableLanguage":["English","Malayalam"]}}) }}
      />

      <Hero />
      <AboutAlbanix />
      <OurProducts />
      <TechnologyFoundation />
      <ContactCTA />
    </>
  );
}
