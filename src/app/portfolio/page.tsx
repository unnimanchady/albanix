"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { ArrowRight, ExternalLink } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

const portfolioItems = [
  {
    title: "TreatAnywhere",
    category: "Healthcare",
    image: "/images/web-templates/www.treatanywhere.com.jpg",
    description: "Find the Right Treatment Anywhere. Complete healthcare portal with doctor search, transparent pricing, and appointment booking.",
    link: "https://treatanywhere.com/",
  },
  {
    title: "Sahara Technology",
    category: "Security & Surveillance",
    image: "/images/web-templates/www.saharatechno.com.jpg",
    description: "Complete Security for a Safer Tomorrow. Dark and modern corporate website for a leading CCTV and network solutions provider.",
    link: "https://www.saharatechno.com/",
  },
  {
    title: "Albanix",
    category: "Software Development",
    image: "/images/web-templates/www.albanix.com.jpg",
    description: "Software for a World in Motion. Futuristic web presence showcasing powerful software platforms for enterprises.",
    link: "https://www.albanix.com/",
  },
  {
    title: "Baseline Interiors",
    category: "Interior Design",
    image: "/images/web-templates/www.baselineinteriors.in.jpg",
    description: "Thoughtful Spaces for Better Living. Elegant portfolio website highlighting residential and commercial interior projects.",
    link: "https://www.baselineinteriors.in/",
  },
  {
    title: "Planters",
    category: "Landscaping",
    image: "/images/web-templates/www.plantersindia.in.jpg",
    description: "Greener Spaces for a Healthier Tomorrow. Vibrant website for a premier landscaping and golf course development firm.",
    link: "https://plantersindia.in/",
  },
  {
    title: "Kichenery",
    category: "Commercial Kitchens",
    image: "/images/web-templates/www.kichenery.com.jpg",
    description: "Professional Kitchen Solutions for Every Business. High-end e-commerce experience for commercial kitchen equipment.",
    link: "https://www.kichenery.com/",
  },
  {
    title: "Misty Frozen Foods",
    category: "Seafood Supply",
    image: "/images/web-templates/www.mistyfrozenfoods.com.jpg",
    description: "Premium Seafood From Trusted Sources. Clean and professional B2B portal for global seafood sourcing and delivery.",
    link: "https://mistyfrozenfoods.com/",
  },
  {
    title: "Sea Bliss",
    category: "Food & Beverage",
    image: "/images/web-templates/www.seabliss.in.jpg",
    description: "Quality Sea Food for a Better Tomorrow. Appetizing product showcase website highlighting responsibly sourced food.",
    link: "https://seabliss.in/",
  },
  {
    title: "Triumph",
    category: "Supply Chain",
    image: "/images/web-templates/www.triumphoverseastrading.com.jpg",
    description: "Global Trading Reliable Supply Chain. Corporate platform showcasing industrial logistics and global trading networks.",
    link: "https://www.triumphoverseastrading.com/",
  },
  {
    title: "LE CAFIO",
    category: "FOOD & BEVERAGE",
    image: "/images/portfolio/kichenery.jpg",
    description: "A modern café website showcasing LeCafio’s food, brand identity, menu, and dining experience in Abu Dhabi.",
    link: "https://www.lecafio.com/",
  },
  {
    title: "TRADETRACK TRADERS",
    category: "FURNITURE HARDWARE & INTERIOR SUPPLY",
    image: "/images/portfolio/baseline.jpg",
    description: "Professional B2B website for furniture hardware, laminates, adhesives, and interior accessories serving builders, designers, manufacturers, and dealers.",
    link: "https://tradetracktraders.com/",
  },
  {
    title: "BRANDED HOMES",
    category: "HOME CONTRACTING",
    image: "/images/portfolio/branded.jpg",
    description: "A professional website for a Kochi-based home contracting company showcasing residential construction and custom home solutions.",
    link: "https://brandedhomes.co.in/",
  },
  {
    title: "METRO ALUMINIUM DOORS",
    category: "MANUFACTURING & CONSTRUCTION",
    image: "/images/portfolio/metro.jpg",
    description: "Professional website for a leading manufacturer of premium aluminium doors and windows, showcasing their product catalog and services.",
    link: "https://metroaluminiumdoors.com/",
  },
  {
    title: "GREENFIBRE",
    category: "APPAREL & FASHION",
    image: "/images/portfolio/greenfibre.jpg",
    description: "Modern e-commerce platform for men's fashion and apparel, providing a seamless shopping experience for premium clothing.",
    link: "https://greenfibre.co.in/",
  },
  {
    title: "JACOBS NEW ENGLISH",
    category: "EDUCATION & TRAINING",
    image: "/images/portfolio/sealtech.jpg",
    description: "Comprehensive educational portal for English language learning, featuring courses, resources, and interactive student engagement.",
    link: "https://jacobsnewenglish.com/",
  }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="w-full flex flex-col bg-slate-50 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="py-20 md:py-32 bg-[#030814] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/design_hero.jpg')] opacity-10 bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030814]/50 to-[#030814]"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block drop-shadow-md">
              OUR WORK
            </span>
            <h1 className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[40px] md:text-[56px] lg:text-[64px]`}>
              FEATURED <span className="text-[#176BFF]">PROJECTS</span>
            </h1>
            <p className="text-[18px] md:text-[22px] text-white/80 leading-[1.6] font-light max-w-2xl mx-auto">
              Explore our portfolio of premium websites, mobile applications, and digital platforms built for forward-thinking brands.
            </p>
          </div>
        </Container>
      </section>

      {/* PORTFOLIO GRID SECTION */}
      <section className="py-16 md:py-24">
        <Container>
          
          {/* Filters (Optional enhancement) */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.slice(0, 5).map((category, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filter === category
                    ? "bg-[#176BFF] text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#176BFF] hover:text-[#176BFF]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredItems.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#070F1E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-[#176BFF] flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                    {item.category}
                  </span>
                  <h3 className={`${oswald.className} text-slate-900 text-2xl uppercase mb-3`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-[#176BFF] font-bold text-sm uppercase tracking-wide group-hover:text-blue-800 transition-colors">
                    Visit Website <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white border-t border-slate-200">
        <Container>
          <div className="bg-[#030814] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#176BFF] rounded-full blur-[120px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00C2E8] rounded-full blur-[120px] opacity-10 pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className={`${oswald.className} text-white text-[32px] md:text-[42px] leading-tight uppercase mb-6`}>
                Ready to build your next digital experience?
              </h2>
              <p className="text-slate-300 text-lg mb-10">
                Join the growing list of successful brands that trust Albanix for their technology and design needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(23,107,255,0.4)] transition-all"
              >
                START A PROJECT <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
