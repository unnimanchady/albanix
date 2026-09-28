"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  CheckCircle2,
  Search,
  PenTool,
  Code2,
  Rocket,
  Layout,
  MonitorSmartphone,
  ShoppingCart,
  RefreshCcw,
  LifeBuoy,
  ExternalLink
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function WordPressDevelopmentPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wp_hero_dark.jpg"
            alt="WordPress Development"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wp_hero_dark.jpg"
            alt="WordPress Development"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/40 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/90 via-[#030814]/60 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 pb-12 md:py-12 md:min-h-[460px] lg:min-h-[500px]">
          
          <div className="w-full max-w-3xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              WORDPRESS DEVELOPMENT
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.15] text-[36px] md:text-[48px] lg:text-[56px] drop-shadow-md`}
            >
              POWERFUL WORDPRESS <br className="hidden md:block" />
              WEBSITES FOR YOUR BUSINESS.
            </h1>
            
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/95 max-w-[560px] mb-10 leading-[1.6] font-light drop-shadow-md">
              Flexible, scalable WordPress websites designed to look professional, perform fast, and help your business grow.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                GET A FREE QUOTE <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="#portfolio"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/40 text-white text-[15px] font-bold rounded-md hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                VIEW OUR WORK <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 md:py-24 bg-slate-50 relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src="/images/wp_intro.jpg"
                alt="WordPress Website Visual"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                INTRODUCTION
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                WORDPRESS THAT WORKS <br className="hidden md:block" />
                FOR YOUR BUSINESS.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 md:space-y-6 leading-relaxed">
                <p>
                  WordPress gives businesses the flexibility to create, manage and grow their online presence without unnecessary complexity.
                </p>
                <p>
                  ALBANIX designs and develops WordPress websites that combine professional design, responsive performance and easy content management.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="py-20 md:py-24 bg-white border-y border-slate-200">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              WORDPRESS DEVELOPMENT SERVICES
            </h2>
            <p className="text-slate-500 text-[16px] md:text-lg">
              Everything you need to build and maintain a professional WordPress website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "WordPress Website Design",
                desc: "Modern websites designed around your brand.",
                icon: <Layout className="w-6 h-6 text-[#0A84FF]" />
              },
              {
                title: "Custom WordPress Development",
                desc: "Tailored functionality for your business requirements.",
                icon: <Code2 className="w-6 h-6 text-[#0A84FF]" />
              },
              {
                title: "Responsive Design",
                desc: "Websites that work beautifully on desktop, tablet and mobile.",
                icon: <MonitorSmartphone className="w-6 h-6 text-[#0A84FF]" />
              },
              {
                title: "WooCommerce",
                desc: "Powerful online stores built with WordPress and WooCommerce.",
                icon: <ShoppingCart className="w-6 h-6 text-[#0A84FF]" />
              },
              {
                title: "Website Redesign",
                desc: "Modernize an outdated WordPress website.",
                icon: <RefreshCcw className="w-6 h-6 text-[#0A84FF]" />
              },
              {
                title: "Maintenance & Support",
                desc: "Updates, security, backups and ongoing technical support.",
                icon: <LifeBuoy className="w-6 h-6 text-[#0A84FF]" />
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 inline-block p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  {card.icon}
                </div>
                <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736] mb-3`}>{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WHY WORDPRESS */}
      <section className="py-20 md:py-24 bg-[#F2F6FA] border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            <div>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                WHY CHOOSE <br className="hidden lg:block"/>
                WORDPRESS?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { title: "Easy to Manage", desc: "Update your website without technical expertise." },
                { title: "SEO Friendly", desc: "Build a strong foundation for search visibility." },
                { title: "Scalable", desc: "Grow your website as your business grows." },
                { title: "Flexible", desc: "Thousands of integrations and possibilities." },
                { title: "Mobile Ready", desc: "Responsive experiences across every device." },
                { title: "Cost Effective", desc: "Powerful functionality without unnecessary complexity." }
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-[#0A84FF] mt-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1736] mb-2">{reason.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. OUR PROCESS */}
      <section className="pt-20 pb-20 md:pt-24 md:pb-24 bg-white border-b border-slate-200">
        <Container>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mx-auto`}>
              FROM IDEA TO LAUNCH
            </h2>
          </div>

          {/* Desktop Horizontal Process */}
          <div className="hidden lg:flex items-start justify-between relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-slate-300 -z-0"></div>
            
            {[
              { num: "01", title: "DISCOVER", icon: <Search className="w-5 h-5" />, desc: "Understand your business, audience and goals." },
              { num: "02", title: "DESIGN", icon: <PenTool className="w-5 h-5" />, desc: "Create the visual direction and user experience." },
              { num: "03", title: "DEVELOP", icon: <Code2 className="w-5 h-5" />, desc: "Build the WordPress website and required functionality." },
              { num: "04", title: "LAUNCH", icon: <Rocket className="w-5 h-5" />, desc: "Test, optimize and launch your website." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center w-[22%]">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0A84FF] flex items-center justify-center text-[#0A84FF] mb-6 shadow-sm">
                  {step.icon}
                </div>
                <div className="text-center px-2">
                  <div className="text-[#0A84FF] font-mono text-xs font-bold mb-2">{step.num}</div>
                  <h4 className={`${oswald.className} text-lg text-[#0B1736] mb-3 tracking-wide`}>{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Process */}
          <div className="lg:hidden flex flex-col space-y-8 relative pl-2 max-w-md mx-auto">
            <div className="absolute top-6 bottom-6 left-8 w-px bg-slate-300 z-0"></div>
            {[
              { num: "01", title: "DISCOVER", icon: <Search className="w-4 h-4" />, desc: "Understand your business, audience and goals." },
              { num: "02", title: "DESIGN", icon: <PenTool className="w-4 h-4" />, desc: "Create the visual direction and user experience." },
              { num: "03", title: "DEVELOP", icon: <Code2 className="w-4 h-4" />, desc: "Build the WordPress website and required functionality." },
              { num: "04", title: "LAUNCH", icon: <Rocket className="w-4 h-4" />, desc: "Test, optimize and launch your website." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border-2 border-[#0A84FF] flex items-center justify-center text-[#0A84FF] mr-6 shadow-sm z-10">
                  {step.icon}
                </div>
                <div className="pt-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[#0A84FF] font-mono text-xs font-bold">{step.num}</span>
                    <h4 className={`${oswald.className} text-lg text-[#0B1736] tracking-wide`}>{step.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              FEATURED WORDPRESS WEBSITES
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mx-auto max-w-4xl`}>
              SOME OF OUR RECENT WORK.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Metro Aluminium Doors",
                desc: "Premium Aluminium Doors & Entrances",
                img: "/images/portfolio/metro.jpg",
                link: "https://metroaluminiumdoors.com/"
              },
              {
                title: "Greenfibre",
                desc: "Eco-Friendly Clothing Brand",
                img: "/images/portfolio/greenfibre.jpg",
                link: "https://greenfibre.co.in/"
              }
            ].map((uc, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all relative overflow-hidden group flex flex-col">
                <div className="relative w-full aspect-[3/2] bg-slate-100 overflow-hidden border-b border-slate-100 rounded-t-2xl">
                  <Image
                    src={uc.img}
                    alt={uc.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736] mb-1`}>{uc.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {uc.desc}
                  </p>
                  <a 
                    href={uc.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-[#0A84FF] font-semibold text-sm hover:text-blue-700 transition-colors"
                  >
                    View Website <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CTA */}
      <section className="py-24 md:py-32 bg-[#0A84FF] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6`}>
            READY TO BUILD YOUR WORDPRESS WEBSITE?
          </h2>
          <p className="text-white/90 text-[18px] md:text-[22px] font-medium mb-4">
            Let's Create Something Great Together
          </p>
          <p className="text-white/80 text-[16px] md:text-lg mb-10 max-w-md">
            Get a modern, flexible WordPress website built for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-white text-[#0A84FF] text-[15px] font-bold rounded-md hover:bg-slate-50 hover:shadow-lg shadow-md transition-all"
          >
            Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
