import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Albanix | Software Development Company in Kochi",
  description: "Contact Albanix in Kochi, Kerala for web development, mobile applications, SaaS products and custom software development.",
  keywords: ["Albanix Kochi","software company Kochi","software development Kerala","web development Kochi","custom software development Kochi"],
  alternates: {
    canonical: "https://www.albanix.com/contact",
  },
  openGraph: {
    title: "Contact Albanix | Software Development Company in Kochi",
    description: "Contact Albanix in Kochi, Kerala for web development, mobile applications, SaaS products and custom software development.",
    url: "https://www.albanix.com/contact",
    type: "website",
    siteName: "Albanix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Albanix | Software Development Company in Kochi",
    description: "Contact Albanix in Kochi, Kerala for web development, mobile applications, SaaS products and custom software development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Albanix","url":"https://www.albanix.com","logo":"https://www.albanix.com/icon.png","description":"Software development and digital product development company based in Kochi, Kerala, India.","address":{"@type":"PostalAddress","streetAddress":"No. 17/2259, Seaport - Airport Road, CSEZ, PO","addressLocality":"Kakkanad, Kochi","addressRegion":"Kerala","postalCode":"682037","addressCountry":"IN"},"contactPoint":{"@type":"ContactPoint","telephone":"+91-8075313023","contactType":"customer service","email":"info@albanix.com","availableLanguage":["English","Malayalam"]}}) }}
      />
      {children}
    </>
  );
}
