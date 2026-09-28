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
  RefreshCw,
  Building2,
  ShoppingCart,
  Layout,
  Code2,
  RefreshCcw,
  Wrench,
  PenTool,
  Terminal,
  Rocket,
  TrendingUp,
  ExternalLink
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function BusinessWebsitesPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/laptop_desk_hero.jpg"
            alt="Professional Business Websites"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/laptop_desk_hero.jpg"
            alt="Professional Business Websites"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/35 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/90 via-[#030814]/60 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 pb-12 md:py-12 md:min-h-[460px] lg:min-h-[500px]">
          
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Websites</span>
            <span>/</span>
            <span className="text-white">Business Websites</span>
          </div>

          <div className="w-full max-w-3xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              BUSINESS WEBSITES
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.1] text-[32px] md:text-[44px] lg:text-[48px] drop-shadow-md`}
            >
              TURN YOUR DIGITAL PRESENCE <br />
              INTO BUSINESS <br className="hidden md:block" />
              GROWTH.
            </h1>
            
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/95 max-w-[560px] mb-8 leading-[1.5] md:leading-[1.6] font-light drop-shadow-md">
              Modern, high-performance websites that build your brand, engage your customers, and help your business scale efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                GET A FREE QUOTE <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-white relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[320px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/web-albanix.png"
                alt="Business Website Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                INTRODUCTION
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                BUILD A DIGITAL PRESENCE <br className="hidden md:block" />
                AROUND THE WAY YOU WORK.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 md:space-y-6 leading-relaxed">
                <p>
                  A great business website is more than just a digital brochure. It is an operational asset that works around the clock to communicate your value, capture leads, and streamline customer interactions.
                </p>
                <p>
                  Whether you are a startup, a small business, or an established enterprise, Albanix creates tailored websites that reflect your brand identity while being strictly engineered for performance and conversion.
                </p>
                <p>
                  Our engineering-first approach ensures that your website is not only visually striking, but built on scalable architecture that seamlessly integrates with your existing tools and workflows.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. KEY CAPABILITIES / WHAT WE BUILD */}
      <section id="capabilities" className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              WHAT WE BUILD
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              BUSINESS WEBSITES <br className="hidden md:block" />
              THAT DELIVER RESULTS.
            </h2>
            <p className="text-slate-500 text-[16px] md:text-lg">
              From corporate landing pages to complex e-commerce platforms, we design and develop solutions engineered for real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "COMPANY WEBSITES",
                desc: "Professional, high-performance online presence that establishes credibility and communicates your value proposition.",
                icon: <Building2 className="w-6 h-6 text-[#176BFF]" />
              },
              {
                num: "02",
                title: "E-COMMERCE WEBSITES",
                desc: "Secure, scalable online stores optimized to convert visitors into loyal customers.",
                icon: <ShoppingCart className="w-6 h-6 text-[#00C2E8]" />
              },
              {
                num: "03",
                title: "WORDPRESS DEVELOPMENT",
                desc: "Flexible, easy-to-manage WordPress websites tailored to your specific business requirements.",
                icon: <Layout className="w-6 h-6 text-[#176BFF]" />
              },
              {
                num: "04",
                title: "CUSTOM WEB DEVELOPMENT",
                desc: "Bespoke websites built from the ground up to solve complex requirements and unique workflows.",
                icon: <Code2 className="w-6 h-6 text-[#00C2E8]" />
              },
              {
                num: "05",
                title: "WEBSITE REDESIGN",
                desc: "Modernize outdated interfaces and optimize the user experience to meet modern web standards.",
                icon: <RefreshCcw className="w-6 h-6 text-[#176BFF]" />
              },
              {
                num: "06",
                title: "MAINTENANCE & SUPPORT",
                desc: "Ongoing security patches, content updates, and technical support to keep your site running smoothly.",
                icon: <Wrench className="w-6 h-6 text-[#00C2E8]" />
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    {card.icon}
                  </div>
                  <span className="text-slate-300 font-mono text-sm font-bold">{card.num}</span>
                </div>
                <h3 className={`${oswald.className} text-xl tracking-wide text-slate-900 mb-3`}>{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. VISUAL FEATURE SECTION */}
      <section className="pt-20 pb-10 md:pt-24 md:pb-12 bg-white border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_#176BFF_1px,_transparent_1px)] [background-size:24px_24px]"></div>
              
              {/* Vertical flow layout */}
              <div className="absolute inset-0 flex flex-col justify-center items-center py-8">
                {[
                  { label: "DESIGN", icon: <PenTool className="w-5 h-5 text-[#176BFF]" /> },
                  { label: "DEVELOPMENT", icon: <Terminal className="w-5 h-5 text-[#00C2E8]" /> },
                  { label: "LAUNCH", icon: <Rocket className="w-5 h-5 text-[#176BFF]" /> },
                  { label: "GROWTH", icon: <TrendingUp className="w-5 h-5 text-[#00C2E8]" /> }
                ].map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="bg-white border border-slate-200 shadow-sm rounded-full px-6 py-3 flex items-center space-x-3 z-10 w-[220px]">
                      {step.icon}
                      <span className="text-sm font-bold text-slate-700 tracking-widest">{step.label}</span>
                    </div>
                    {i < 3 && (
                      <div className="h-6 w-px bg-slate-300 relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 border-r border-b border-slate-400 rotate-45"></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                ENGINEERED FOR SUCCESS
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                A WEBSITE SHOULD WORK <br className="hidden lg:block" />
                AS HARD AS YOU DO.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 leading-relaxed">
                <p>
                  We don't just create beautiful interfaces; we engineer functional digital products designed to drive real business metrics.
                </p>
                <p>
                  By strictly adhering to modern web standards, mobile-first indexing, and rigorous SEO optimization, we ensure your platform is visible, accessible, and fast.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. HOW ALBANIX DELIVERS */}
      <section className="pt-10 pb-20 md:pt-12 md:pb-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="mb-12 md:mb-16 text-center">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR APPROACH
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.2] mx-auto`}>
              FROM CONCEPT <br className="md:hidden" />
              TO DEPLOYMENT.
            </h2>
          </div>

          {/* Desktop Horizontal Process */}
          <div className="hidden lg:flex items-start justify-between relative max-w-6xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-6 left-[5%] right-[5%] h-px bg-slate-300 -z-0"></div>
            
            {[
              { num: "01", title: "DISCOVER", icon: <Search className="w-5 h-5" />, desc: "Understand your brand, audience, and operational goals." },
              { num: "02", title: "DESIGN", icon: <PenTool className="w-5 h-5" />, desc: "Craft wireframes and visually striking UI/UX prototypes." },
              { num: "03", title: "BUILD", icon: <Code2 className="w-5 h-5" />, desc: "Develop clean, scalable code integrated with your tools." },
              { num: "04", title: "LAUNCH", icon: <Rocket className="w-5 h-5" />, desc: "Rigorous testing, SEO configuration, and deployment." },
              { num: "05", title: "EVOLVE", icon: <RefreshCw className="w-5 h-5" />, desc: "Ongoing maintenance, analytics monitoring, and iteration." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center w-[18%]">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#176BFF] flex items-center justify-center text-[#176BFF] mb-6 shadow-sm">
                  {step.icon}
                </div>
                <div className="text-center px-2">
                  <div className="text-[#00C2E8] font-mono text-xs font-bold mb-2">{step.num}</div>
                  <h4 className={`${oswald.className} text-lg text-slate-900 mb-3 tracking-wide`}>{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Process */}
          <div className="lg:hidden flex flex-col space-y-8 relative pl-2">
            <div className="absolute top-6 bottom-6 left-8 w-px bg-slate-300 z-0"></div>
            {[
              { num: "01", title: "DISCOVER", icon: <Search className="w-4 h-4" />, desc: "Understand your brand, audience, and operational goals." },
              { num: "02", title: "DESIGN", icon: <PenTool className="w-4 h-4" />, desc: "Craft wireframes and visually striking UI/UX prototypes." },
              { num: "03", title: "BUILD", icon: <Code2 className="w-4 h-4" />, desc: "Develop clean, scalable code integrated with your tools." },
              { num: "04", title: "LAUNCH", icon: <Rocket className="w-4 h-4" />, desc: "Rigorous testing, SEO configuration, and deployment." },
              { num: "05", title: "EVOLVE", icon: <RefreshCw className="w-4 h-4" />, desc: "Ongoing maintenance, analytics monitoring, and iteration." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border-2 border-[#176BFF] flex items-center justify-center text-[#176BFF] mr-6 shadow-sm z-10">
                  {step.icon}
                </div>
                <div className="pt-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[#00C2E8] font-mono text-xs font-bold">{step.num}</span>
                    <h4 className={`${oswald.className} text-lg text-slate-900 tracking-wide`}>{step.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* 6. WHY ALBANIX */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="mb-12 md:mb-16 text-center">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
              WHY ALBANIX
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.2] mx-auto max-w-4xl`}>
              BUILDING WEBSITES <br className="md:hidden" />
              THAT PERFORM.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { title: "TAILORED DESIGN", desc: "Every layout is custom-designed to match your brand and convert your specific audience." },
              { title: "MOBILE-FIRST", desc: "Ensuring your platform looks and functions perfectly across all devices and screen sizes." },
              { title: "SEO OPTIMIZED", desc: "Built with structured data, fast load times, and technical SEO best practices out of the box." },
              { title: "SECURE ARCHITECTURE", desc: "Implementing modern security standards to protect your data and your users." },
              { title: "FAST PERFORMANCE", desc: "Engineered for speed, maximizing user retention and improving search rankings." },
              { title: "ONGOING SUPPORT", desc: "Dedicated maintenance, hosting management, and rapid technical assistance." }
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-[#176BFF] mt-1 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{reason.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. INDUSTRIES / APPLICATION AREAS */}
      <section className="py-20 md:py-24 bg-slate-50">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              INDUSTRIES WE SERVE
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2]`}>
              WEBSITES BUILT FOR <br className="md:hidden" />
              EVERY SECTOR.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CORPORATE & B2B", desc: "Professional portals that establish authority and capture quality leads." },
              { title: "RETAIL & E-COMMERCE", desc: "High-conversion online stores with seamless checkout experiences." },
              { title: "REAL ESTATE", desc: "Property showcases with advanced search and CRM integrations." },
              { title: "HEALTHCARE", desc: "Compliant, accessible platforms for clinics and medical professionals." },
              { title: "TECHNOLOGY", desc: "Sleek, modern websites for SaaS products and tech innovators." },
              { title: "INDUSTRIAL & MFG", desc: "Robust digital catalogs and corporate profiles for heavy industries." }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm text-center flex flex-col items-center justify-center">
                <h4 className={`${oswald.className} text-lg text-slate-900 mb-3 tracking-wide uppercase`}>{industry.title}</h4>
                <p className="text-slate-500 text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. TECHNOLOGY FOUNDATION */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <Container>
          <div className="mb-10 text-center lg:text-left flex flex-col lg:flex-row items-center lg:justify-between gap-8">
            <div>
              <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-2 block">
                TECHNOLOGY STACK
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[24px] md:text-[32px] leading-[1.2]`}>
                THE PLATFORMS <br className="hidden md:block lg:hidden" />
                POWERING THE WEB.
              </h2>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 lg:max-w-xl">
              {[
                "React / Next.js",
                "Tailwind CSS",
                "Node.js",
                "WordPress",
                "Shopify",
                "Custom CMS",
                "Vercel",
                "AWS",
                "Stripe API"
              ].map((tech, idx) => (
                <div key={idx} className="px-5 py-2 rounded-md bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-700">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 9. PORTFOLIO / USE CASES */}
      <section id="portfolio" className="py-20 md:py-24 bg-slate-50">
        <Container>
          <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              FEATURED BUSINESS WEBSITES
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.2] mx-auto max-w-4xl`}>
              SOME OF OUR <br className="md:hidden" />
              RECENT WORK.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Sahara Technology",
                desc: "CCTV & Surveillance Solutions",
                img: "/images/portfolio/sahara.jpg",
                link: "https://www.saharatechno.com/"
              },
              {
                title: "Baseline Interiors",
                desc: "Architecture & Interior Design",
                img: "/images/portfolio/baseline.jpg",
                link: "https://www.baselineinteriors.in/"
              },
              {
                title: "Triumph Overseas Trading",
                desc: "International Trading & Logistics",
                img: "/images/portfolio/triumph.jpg",
                link: "https://www.triumphoverseastrading.com/"
              },
              {
                title: "Branded Homes",
                desc: "Premium Real Estate Developers",
                img: "/images/portfolio/branded.jpg",
                link: "https://brandedhomes.co.in/"
              },
              {
                title: "Kichenery",
                desc: "Modern Home & Kitchen Appliances",
                img: "/images/portfolio/kichenery.jpg",
                link: "https://www.kichenery.com"
              },
              {
                title: "Sealtech",
                desc: "Marine & Industrial Technology",
                img: "/images/portfolio/sealtech.jpg",
                link: "https://sealtech.in/"
              }
            ].map((uc, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all relative overflow-hidden group flex flex-col">
                <div className="relative w-full aspect-[3/2] bg-slate-100 overflow-hidden border-b border-slate-100 rounded-t-2xl">
                  {/* Raw Website UI Preview */}
                  <Image
                    src={uc.img}
                    alt={uc.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className={`${oswald.className} text-xl tracking-wide text-slate-900 mb-1`}>{uc.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {uc.desc}
                  </p>
                  <a 
                    href={uc.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-[#176BFF] font-semibold text-sm hover:text-blue-700 transition-colors"
                  >
                    View Website <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#040D1E] relative overflow-hidden text-center border-t border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <span className="text-[#00C2E8] font-bold text-xs tracking-widest uppercase mb-4 block">
            READY TO BUILD YOUR WEBSITE?
          </span>
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6`}>
            LET'S CREATE SOMETHING <br />
            GREAT TOGETHER.
          </h2>
          <p className="text-slate-300 text-[16px] md:text-lg mb-10 max-w-md">
            Get a modern, high-performance website engineered for your specific business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-white text-slate-900 text-[15px] font-bold rounded-[7px] hover:bg-slate-100 hover:shadow-lg shadow-md transition-all"
          >
            GET A FREE QUOTE <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
