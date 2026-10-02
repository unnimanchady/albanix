"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { ArrowRight, Search } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

type Category = "ALL" | "ARTIFICIAL INTELLIGENCE" | "WEB DEVELOPMENT" | "SOFTWARE" | "UI/UX" | "DIGITAL PRODUCTS";

const categories: Category[] = [
  "ALL",
  "ARTIFICIAL INTELLIGENCE",
  "WEB DEVELOPMENT",
  "SOFTWARE",
  "UI/UX",
  "DIGITAL PRODUCTS"
];

const articles = [
  {
    id: 1,
    category: "ARTIFICIAL INTELLIGENCE",
    title: "How AI Is Changing Modern Software Development",
    description: "Explore how AI-assisted development is changing the way software teams design, build and improve digital products.",
    image: "/images/industrial_ai_hero.png",
    featured: true,
  },
  {
    id: 2,
    category: "WEB DEVELOPMENT",
    title: "What Makes a Modern Business Website in 2026?",
    description: "A look at performance, responsive design, accessibility, user experience and modern web technologies.",
    image: "/images/web-redesign-albanix.png",
    featured: false,
  },
  {
    id: 3,
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Agents: The Next Step Beyond Chatbots",
    description: "Understand how AI agents can move beyond conversations and help automate real business workflows.",
    image: "/images/tech-abstract.png",
    featured: false,
  },
  {
    id: 4,
    category: "WEB DEVELOPMENT",
    title: "What Businesses Should Know About Modern Web Applications",
    description: "Explore the technologies and principles behind fast, scalable and user-friendly web applications.",
    image: "/images/wp_hero_mockup.jpg",
    featured: false,
  },
  {
    id: 5,
    category: "UI/UX",
    title: "Designing Digital Products People Actually Enjoy Using",
    description: "Why clarity, usability and thoughtful interaction design matter when building modern software.",
    image: "/images/design_hero.jpg",
    featured: false,
  },
  {
    id: 6,
    category: "SOFTWARE",
    title: "From Business Problem to Software Product",
    description: "How identifying the right business problem can shape a better software product.",
    image: "/images/laptop_desk_hero.jpg",
    featured: false,
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "ALL" || article.category === activeCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isDefaultView = activeCategory === "ALL" && searchQuery === "";
  const featuredArticle = articles.find(a => a.featured);
  const displayArticles = isDefaultView ? filteredArticles.filter(a => !a.featured) : filteredArticles;

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-[#030814] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030814]/50 to-[#030814]"></div>
        <div className="absolute inset-0 bg-[url('/images/tech-abstract.png')] opacity-10 bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#176BFF] rounded-full blur-[150px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/4"></div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
              ALBANIX INSIGHTS
            </span>
            <h1 className={`${oswald.className} uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[40px] md:text-[56px] lg:text-[64px]`}>
              IDEAS, TECHNOLOGY &<br className="hidden md:block" />
              <span className="text-[#176BFF]"> WHAT'S NEXT.</span>
            </h1>
            <p className="text-[18px] md:text-[22px] text-white/80 leading-[1.6] font-light max-w-2xl">
              Explore insights from Albanix on Artificial Intelligence, web development, software products, UI/UX and the technologies shaping the digital world.
            </p>
          </div>
        </Container>
      </section>

      {/* FILTER & SEARCH SECTION */}
      <section className="pt-8 pb-6 border-b border-slate-200 bg-white sticky top-[64px] md:top-[72px] z-40">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-2 scrollbar-hide flex-1">
              {categories.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveCategory(filter)}
                  className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                    activeCategory === filter 
                      ? "bg-[#176BFF] text-white"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-[300px] flex-shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#176BFF]/30 focus:border-[#176BFF] transition-all"
              />
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-slate-50 py-16 md:py-24">
        <Container>
          
          {/* FEATURED ARTICLE (Only visible when no active filters/search) */}
          {isDefaultView && featuredArticle && (
            <div className="mb-20">
              <span className="inline-block px-3 py-1 bg-[#176BFF]/10 text-[#176BFF] text-xs font-bold tracking-widest uppercase rounded-sm mb-6">
                FEATURED
              </span>
              <div className="flex flex-col lg:flex-row gap-10 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-shadow duration-500 group">
                <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-[450px] relative overflow-hidden bg-slate-100">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8 lg:p-12 lg:pl-4">
                  <span className="text-[#176BFF] font-bold text-xs tracking-wider uppercase mb-3 block">
                    {featuredArticle.category}
                  </span>
                  <h2 className={`${oswald.className} text-3xl md:text-4xl lg:text-5xl text-[#0B1736] mb-6 leading-tight group-hover:text-[#176BFF] transition-colors duration-300`}>
                    <Link href="#" className="before:absolute before:inset-0">
                      {featuredArticle.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
                    {featuredArticle.description}
                  </p>
                  <span className="inline-flex items-center text-[#0B1736] font-bold text-[15px] group-hover:text-[#176BFF] transition-colors">
                    READ ARTICLE <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* LATEST ARTICLES GRID */}
          <div>
            <h3 className={`${oswald.className} text-2xl md:text-3xl text-[#0B1736] uppercase tracking-wide mb-10`}>
              {isDefaultView ? "LATEST FROM ALBANIX" : "SEARCH RESULTS"}
            </h3>
            
            {displayArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayArticles.map((article) => (
                  <div 
                    key={article.id} 
                    className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <span className="text-[#176BFF] font-bold text-[11px] tracking-wider uppercase mb-3">
                        {article.category}
                      </span>
                      <h4 className={`${oswald.className} text-xl md:text-2xl text-[#0B1736] mb-4 leading-tight group-hover:text-[#176BFF] transition-colors duration-300`}>
                        <Link href="#" className="before:absolute before:inset-0">
                          {article.title}
                        </Link>
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        {article.description}
                      </p>
                      <span className="inline-flex items-center text-[#0B1736] font-bold text-[13px] group-hover:text-[#176BFF] transition-colors mt-auto">
                        READ MORE <ArrowRight className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
                <p className="text-slate-500 text-lg">
                  No articles found matching your criteria.
                </p>
                <button 
                  onClick={() => { setActiveCategory("ALL"); setSearchQuery(""); }}
                  className="mt-4 text-[#176BFF] font-bold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

        </Container>
      </div>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#0B1736] text-white text-center">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[#00C2E8] font-bold text-sm tracking-[0.2em] uppercase mb-6">
              BUILD SOMETHING THAT MATTERS.
            </span>
            <h2 className={`${oswald.className} text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight`}>
              Have a technology or<br />software idea?
            </h2>
            <p className="text-xl text-white/70 font-light mb-10">
              Let's turn it into a practical digital product.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-white hover:text-[#0B1736] transition-colors"
            >
              TALK TO ALBANIX <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
