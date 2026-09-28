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
  Zap,
  Palette,
  BarChart4,
  RefreshCw,
  Clock,
  Navigation,
  LineChart,
  Settings
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function WebsiteRedesignPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wp_hero_dark.jpg"
            alt="Website Redesign"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wp_hero_dark.jpg"
            alt="Website Redesign"
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
            <span className="hover:text-white transition-colors cursor-pointer">Services</span>
            <span>/</span>
            <span className="text-white">Redesign</span>
          </div>

          <div className="w-full max-w-3xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              WEBSITE REDESIGN
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.15] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              TURN YOUR OLD WEBSITE <br className="hidden md:block" />
              INTO A MODERN DIGITAL <br className="hidden lg:block"/> EXPERIENCE.
            </h1>
            
            <p className="text-[16px] md:text-[18px] text-white/95 max-w-[560px] mb-4 leading-[1.6] font-light drop-shadow-md">
              Your website may be good for your business — but if it looks outdated, loads slowly, or doesn't work well on mobile, it may be costing you customers.
            </p>
            <p className="text-[16px] md:text-[18px] text-white/90 max-w-[560px] mb-8 leading-[1.6] font-light drop-shadow-md">
              ALBANIX redesigns existing websites with modern UI, better performance, responsive layouts and a clearer user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                REDESIGN MY WEBSITE <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/40 text-white text-[15px] font-bold rounded-md hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                VIEW OUR WORK <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 md:py-24 bg-white relative border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <Image
                src="/images/web-redesign-albanix.png"
                alt="Website Modernization"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                WHY REDESIGN?
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                YOUR BUSINESS HAS EVOLVED. <br className="hidden md:block" />
                YOUR WEBSITE SHOULD TOO.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 md:space-y-6 leading-relaxed">
                <p>
                  Businesses change. Customers change. Technology changes. A website that looked great a few years ago may now feel outdated, difficult to navigate, slow on mobile, or disconnected from your current brand.
                </p>
                <p>
                  ALBANIX transforms existing websites into modern digital experiences without losing the valuable content and business knowledge already built into them.
                </p>
                <p>
                  We combine UI/UX improvements, responsive design, performance optimization and modern web development to create websites that look better and work harder for your business.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SIGNS YOU NEED A REDESIGN */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              IS YOUR WEBSITE HOLDING <br className="hidden md:block"/> YOUR BUSINESS BACK?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { num: "01", title: "OUTDATED DESIGN", desc: "Your website no longer reflects the quality of your business.", icon: <Palette className="w-6 h-6 text-slate-400" /> },
              { num: "02", title: "POOR MOBILE EXPERIENCE", desc: "Customers struggle to navigate your website on phones and tablets.", icon: <MonitorSmartphone className="w-6 h-6 text-slate-400" /> },
              { num: "03", title: "SLOW PERFORMANCE", desc: "Slow-loading pages can frustrate visitors and increase drop-offs.", icon: <Clock className="w-6 h-6 text-slate-400" /> },
              { num: "04", title: "DIFFICULT NAVIGATION", desc: "Visitors cannot quickly find the information they need.", icon: <Navigation className="w-6 h-6 text-slate-400" /> },
              { num: "05", title: "WEAK CONVERSION", desc: "Your website gets visitors but doesn't turn enough of them into enquiries or customers.", icon: <LineChart className="w-6 h-6 text-slate-400" /> },
              { num: "06", title: "OUTDATED TECHNOLOGY", desc: "Your website may be difficult to maintain, update or expand.", icon: <Settings className="w-6 h-6 text-slate-400" /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:border-[#0A84FF]/30 hover:shadow-md transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 font-mono text-6xl font-bold italic z-0 text-[#0B1736] group-hover:text-[#0A84FF] transition-colors">{item.num}</div>
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-3 bg-slate-50 rounded-lg border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-[#0A84FF]" })}
                  </div>
                  <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736] mb-3 group-hover:text-[#0A84FF] transition-colors`}>{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WHAT WE REDESIGN */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            <div>
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                OUR REDESIGN SERVICES
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                FROM OUTDATED TO <br className="hidden lg:block"/>
                UP-TO-DATE.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
              {[
                { title: "UI/UX Redesign", desc: "Improve layouts, visual hierarchy and user experience.", icon: <Layout className="w-5 h-5" /> },
                { title: "Responsive Redesign", desc: "Make your website work beautifully across desktop, tablet and mobile.", icon: <MonitorSmartphone className="w-5 h-5" /> },
                { title: "Brand & Visual Refresh", desc: "Bring your website in line with your current brand identity.", icon: <Palette className="w-5 h-5" /> },
                { title: "Performance Optimization", desc: "Improve loading speed and overall website performance.", icon: <Zap className="w-5 h-5" /> },
                { title: "SEO-Friendly Structure", desc: "Improve page structure and technical foundations for search.", icon: <BarChart4 className="w-5 h-5" /> },
                { title: "Content & Navigation", desc: "Make information easier for visitors to understand and find.", icon: <Search className="w-5 h-5" /> }
              ].map((service, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-[#0A84FF] mt-1 shrink-0 p-2 bg-blue-50 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1736] mb-2">{service.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. OUR REDESIGN PROCESS */}
      <section className="pt-20 pb-20 md:pt-24 md:pb-24 bg-[#F2F6FA] border-b border-slate-200">
        <Container>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mx-auto`}>
              A BETTER WEBSITE, STEP BY STEP.
            </h2>
          </div>

          {/* Desktop Horizontal Process */}
          <div className="hidden lg:flex items-start justify-between relative max-w-5xl mx-auto">
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-slate-300 -z-0"></div>
            
            {[
              { num: "01", title: "AUDIT", icon: <Search className="w-5 h-5" />, desc: "We review your existing website, content, structure, performance and user experience." },
              { num: "02", title: "PLAN", icon: <PenTool className="w-5 h-5" />, desc: "We identify improvements and create a clear redesign direction." },
              { num: "03", title: "REDESIGN", icon: <RefreshCw className="w-5 h-5" />, desc: "We rebuild the interface with modern responsive design and improved functionality." },
              { num: "04", title: "LAUNCH", icon: <Rocket className="w-5 h-5" />, desc: "We test across devices, optimize performance and launch the new experience." }
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
              { num: "01", title: "AUDIT", icon: <Search className="w-4 h-4" />, desc: "We review your existing website, content, structure, performance and user experience." },
              { num: "02", title: "PLAN", icon: <PenTool className="w-4 h-4" />, desc: "We identify improvements and create a clear redesign direction." },
              { num: "03", title: "REDESIGN", icon: <RefreshCw className="w-4 h-4" />, desc: "We rebuild the interface with modern responsive design and improved functionality." },
              { num: "04", title: "LAUNCH", icon: <Rocket className="w-4 h-4" />, desc: "We test across devices, optimize performance and launch the new experience." }
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

      {/* 6. BEFORE & AFTER */}
      <section className="py-20 md:py-24 bg-[#0B1736] text-white border-b border-[#1A2747]">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`${oswald.className} text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
              SEE THE DIFFERENCE.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
            {/* Before */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 md:p-12 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <span className="inline-block bg-slate-700 text-slate-300 font-bold text-xs tracking-widest px-3 py-1 rounded w-max mb-6">BEFORE</span>
              <ul className="space-y-4 text-slate-300 mb-8 flex-grow">
                <li className="flex items-start"><span className="text-red-400 mr-3">✕</span> Outdated website</li>
                <li className="flex items-start"><span className="text-red-400 mr-3">✕</span> Old-style navigation</li>
                <li className="flex items-start"><span className="text-red-400 mr-3">✕</span> Poor mobile layout</li>
                <li className="flex items-start"><span className="text-red-400 mr-3">✕</span> Inconsistent typography</li>
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-gradient-to-br from-[#0A84FF] to-blue-700 rounded-2xl border border-blue-500 p-8 md:p-12 flex flex-col relative overflow-hidden shadow-2xl group transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-700"></div>
              <span className="inline-block bg-white text-[#0A84FF] font-bold text-xs tracking-widest px-3 py-1 rounded w-max mb-6 shadow-sm relative z-10">AFTER</span>
              <ul className="space-y-4 text-white mb-8 flex-grow relative z-10">
                <li className="flex items-start font-medium"><CheckCircle2 className="w-5 h-5 text-blue-200 mr-3 shrink-0" /> Modern interface</li>
                <li className="flex items-start font-medium"><CheckCircle2 className="w-5 h-5 text-blue-200 mr-3 shrink-0" /> Clear navigation</li>
                <li className="flex items-start font-medium"><CheckCircle2 className="w-5 h-5 text-blue-200 mr-3 shrink-0" /> Responsive design</li>
                <li className="flex items-start font-medium"><CheckCircle2 className="w-5 h-5 text-blue-200 mr-3 shrink-0" /> Consistent visual system</li>
                <li className="flex items-start font-medium"><CheckCircle2 className="w-5 h-5 text-blue-200 mr-3 shrink-0" /> Better user experience</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-300 mb-6">Want to modernize your website?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[50px] px-8 bg-[#0A84FF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              Start Your Redesign <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 7. WHY ALBANIX */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                MORE THAN A VISUAL <br className="hidden md:block"/> REFRESH.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 leading-relaxed">
                <p>
                  A successful redesign is not just about making a website look new.
                </p>
                <p>
                  We consider how your customers use the website, how your business operates and what your website needs to achieve.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                "Modern UI/UX",
                "Responsive Development",
                "Performance Focus",
                "SEO-Friendly Architecture",
                "Scalable Technology",
                "Ongoing Support"
              ].map((feature, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center space-x-3 shadow-sm hover:border-[#0A84FF]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#0A84FF] shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0A84FF] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <span className="text-white/80 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            READY FOR A CHANGE?
          </span>
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6`}>
            GIVE YOUR WEBSITE <br/> A FRESH START.
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] mb-10 leading-relaxed max-w-lg">
            Let's transform your existing website into a modern digital experience that represents your business and works for your customers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-white text-[#0A84FF] text-[15px] font-bold rounded-md hover:bg-slate-50 hover:shadow-lg shadow-md transition-all"
          >
            Get a Free Redesign Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
