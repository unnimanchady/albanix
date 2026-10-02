"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { ArrowRight } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

type FilterType = "ALL" | "SOFTWARE" | "WEBSITES";

const caseStudies = [
  {
    id: "gym-mate",
    title: "Gym Mate — Gym Management Software",
    category: "Gym Software · Business Management · Fitness Technology",
    filter: "SOFTWARE",
    description: "A purpose-built gym management platform designed to help fitness businesses manage members, memberships and everyday operations from one centralized system.",
    image: "/images/product-gym.png",
    route: "/case-studies/gym-mate",
  },
  {
    id: "routex",
    title: "RouteX — Van Sales Software",
    category: "Van Sales · Distribution · Business Software",
    filter: "SOFTWARE",
    description: "A software platform designed to help distribution businesses manage van sales, routes, orders, collections and customer relationships.",
    image: "/images/product-van-sales.png",
    route: "/case-studies/routex",
  },
  {
    id: "sahara",
    title: "Sahara Technology — Digital Experience for an ICT & Security Company",
    category: "Corporate Website · Technology · ICT · Security Solutions",
    filter: "WEBSITES",
    description: "A modern corporate website designed to present Sahara Technology's technology, security and ICT solutions through a clear and professional digital experience.",
    image: "/images/portfolio_sahara.jpg",
    route: "/case-studies/sahara-technology",
  }
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

  const filteredStudies = caseStudies.filter(study => 
    activeFilter === "ALL" ? true : study.filter === activeFilter
  );

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-[#030814] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030814]/50 to-[#030814]"></div>
        <div className="absolute inset-0 bg-[url('/images/design_hero.jpg')] opacity-5 bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#176BFF] rounded-full blur-[150px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/4"></div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
              CASE STUDIES
            </span>
            <h1 className={`${oswald.className} uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[40px] md:text-[56px] lg:text-[64px]`}>
              REAL PROJECTS.<br className="hidden md:block" />
              <span className="text-[#176BFF]">REAL SOLUTIONS.</span>
            </h1>
            <p className="text-[18px] md:text-[22px] text-white/80 leading-[1.6] font-light max-w-2xl">
              Explore how Albanix turns business challenges into practical digital products, software platforms and modern digital experiences.
            </p>
          </div>
        </Container>
      </section>

      {/* FILTER SECTION */}
      <section className="pt-12 pb-6 border-b border-slate-200 bg-white sticky top-[64px] md:top-[72px] z-40">
        <Container>
          <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {(['ALL', 'SOFTWARE', 'WEBSITES'] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                  activeFilter === filter 
                    ? "bg-[#0B1736] text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* CASE STUDIES LIST */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="space-y-16 md:space-y-32">
            {filteredStudies.map((study, idx) => (
              <div 
                key={study.id} 
                className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 lg:gap-24 items-center group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both`} 
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <Link href={study.route} className="block relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0B1736]/0 group-hover:bg-[#0B1736]/10 transition-colors duration-500"></div>
                  </Link>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <span className="text-[#176BFF] font-bold text-xs tracking-wider uppercase mb-4">
                    {study.category}
                  </span>
                  <h2 className={`${oswald.className} text-3xl md:text-4xl text-[#0B1736] leading-[1.2] mb-6 group-hover:text-[#176BFF] transition-colors duration-300 uppercase`}>
                    <Link href={study.route}>
                      {study.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
                    {study.description}
                  </p>
                  <Link
                    href={study.route}
                    className="inline-flex items-center justify-center h-12 px-8 bg-[#0B1736] text-white text-[15px] font-bold rounded-md hover:bg-[#176BFF] hover:shadow-lg transition-all"
                  >
                    VIEW CASE STUDY <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
