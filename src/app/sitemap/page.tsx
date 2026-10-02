import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Map | Albanix",
  description: "Explore the Albanix website, software products, digital services, case studies and company information.",
};

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

const sitemapData = [
  {
    title: "SERVICES",
    links: [
      { name: "Websites", href: "/capabilities" },
      { name: "Mobile Apps", href: "/capabilities" },
      { name: "Products", href: "/products" },
      { name: "Portfolio", href: "/portfolio" },
    ]
  },
  {
    title: "PRODUCTS",
    links: [
      { name: "TreatAnywhere", href: "/products/treatanywhere" },
      { name: "Gym Mate", href: "/products/gym-mate" },
      { name: "MenuPilot", href: "/products/menupilot" },
      { name: "RouteX", href: "/products/routex" },
    ]
  },
  {
    title: "COMPANY",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
    ]
  },
  {
    title: "CASE STUDIES",
    links: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Gym Mate Software", href: "/case-studies/gym-mate" },
      { name: "RouteX Van Sales", href: "/case-studies/routex" },
      { name: "Sahara Technology", href: "/case-studies/sahara-technology" },
    ]
  },
  {
    title: "INSIGHTS",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Resources", href: "#resources" },
      { name: "News & Events", href: "#events" },
    ]
  },
  {
    title: "LEGAL / INFORMATION",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Use", href: "/terms-of-use" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-[#030814] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030814]/50 to-[#030814]"></div>
        <div className="absolute inset-0 bg-[url('/images/design_hero.jpg')] opacity-5 bg-cover bg-center mix-blend-luminosity"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
              SITE MAP
            </span>
            <h1 className={`${oswald.className} uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[40px] md:text-[56px] lg:text-[64px]`}>
              EXPLORE ALBANIX
            </h1>
            <p className="text-[18px] md:text-[22px] text-white/80 leading-[1.6] font-light max-w-2xl">
              Find everything you need across Albanix — our digital services, software products, case studies and company information.
            </p>
          </div>
        </Container>
      </section>

      {/* SITEMAP CONTENT */}
      <section className="py-20 md:py-28 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {sitemapData.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h2 className={`${oswald.className} text-[#0B1736] text-xl md:text-2xl mb-8 uppercase tracking-wide pb-4 border-b border-slate-200`}>
                  {section.title}
                </h2>
                <ul className="flex flex-col space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between text-[16px] text-slate-600 hover:text-[#176BFF] transition-colors p-3 -mx-3 rounded-lg hover:bg-[#176BFF]/5"
                      >
                        <span className="font-medium">{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
