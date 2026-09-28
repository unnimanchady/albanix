"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Code2,
  Users,
  Cloud,
  BarChart4,
  Workflow,
  Zap,
  CheckCircle2,
  Search,
  Map,
  PenTool,
  Rocket
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function CustomWebPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:h-[400px] lg:h-[440px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wp_hero_dark.jpg"
            alt="Custom Web Development"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wp_hero_dark.jpg"
            alt="Custom Web Development"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/35 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/90 via-[#030814]/60 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 pb-12 md:pt-6 md:pb-0 md:h-full">
          
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Services</span>
            <span>/</span>
            <span className="text-white">Custom Web</span>
          </div>

          <div className="w-full max-w-3xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              CUSTOM WEB DEVELOPMENT
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.1] text-[32px] md:text-[44px] lg:text-[48px] drop-shadow-md`}
            >
              BUILD SOFTWARE THAT FITS <br className="hidden md:block" />
              YOUR BUSINESS.
            </h1>
            
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/95 max-w-[560px] mb-8 leading-[1.5] md:leading-[1.6] font-light drop-shadow-md">
              Every business works differently. We build custom web applications and digital platforms around your specific workflows, requirements, and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                START YOUR PROJECT <ArrowRight className="ml-2 w-4 h-4" />
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
      <section className="py-20 md:py-24 bg-slate-50 relative border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
              <Image
                src="/images/laptop_desk_hero.jpg"
                alt="Custom Web Development"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                CUSTOM DEVELOPMENT
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                YOUR BUSINESS IS UNIQUE. <br className="hidden md:block" />
                YOUR WEBSITE SHOULD BE TOO.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 md:space-y-6 leading-relaxed">
                <p>
                  Off-the-shelf websites are not always enough. When your business needs custom workflows, advanced functionality, integrations, dashboards, portals, or business-specific tools, ALBANIX builds technology around the way you actually work.
                </p>
                <p>
                  We design and develop scalable web applications that combine modern UI/UX with reliable backend architecture, helping businesses turn complex requirements into simple digital experiences.
                </p>
                <p>
                  From a custom business platform to a complete SaaS application, we build solutions designed for your users and your business.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHAT WE BUILD */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              WHAT WE BUILD
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              CUSTOM DIGITAL SOLUTIONS <br className="hidden md:block"/> FOR YOUR BUSINESS.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "CUSTOM WEB APPLICATIONS", 
                desc: "Powerful web applications designed around your unique business processes.", 
                icon: <Code2 className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "BUSINESS PORTALS", 
                desc: "Secure customer, employee, partner and management portals with role-based access.", 
                icon: <Users className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "SAAS PRODUCTS", 
                desc: "Scalable cloud-based software products built from concept to production.", 
                icon: <Cloud className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "CUSTOM DASHBOARDS", 
                desc: "Clear, interactive dashboards that turn business data into useful insights.", 
                icon: <BarChart4 className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "API & SYSTEM INTEGRATIONS", 
                desc: "Connect your applications with existing business systems, APIs, payment platforms and third-party services.", 
                icon: <Workflow className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "AUTOMATION & WORKFLOWS", 
                desc: "Replace repetitive manual processes with intelligent digital workflows.", 
                icon: <Zap className="w-6 h-6 text-[#0A84FF]" /> 
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0A84FF]/20 hover:shadow-lg transition-all h-full">
                <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-200 mb-6">
                  {item.icon}
                </div>
                <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736] mb-3`}>{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WHY ALBANIX */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
            <div className="sticky top-24">
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                WHY ALBANIX
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                BUILT AROUND THE WAY <br className="hidden md:block"/> YOUR BUSINESS WORKS.
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Built Around Your Business",
                  desc: "We don't force your requirements into a predefined template."
                },
                {
                  title: "Modern & Scalable",
                  desc: "Solutions are designed to grow as your business grows."
                },
                {
                  title: "Responsive Everywhere",
                  desc: "Optimized experiences across desktop, tablet and mobile."
                },
                {
                  title: "Secure & Reliable",
                  desc: "Security, performance and maintainability are considered from the beginning."
                },
                {
                  title: "From Idea to Launch",
                  desc: "We can take your concept from planning and UI/UX through development, testing, deployment and ongoing support."
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl flex items-start space-x-4 shadow-sm hover:border-[#0A84FF]/40 transition-colors">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#0A84FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
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
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR PROCESS
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mx-auto`}>
              FROM IDEA TO WORKING PRODUCT.
            </h2>
          </div>

          {/* Desktop Horizontal Process */}
          <div className="hidden lg:flex items-start justify-between relative max-w-6xl mx-auto">
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-slate-300 -z-0"></div>
            
            {[
              { num: "01", title: "DISCOVER", icon: <Search className="w-5 h-5" />, desc: "Understand your business, users and requirements." },
              { num: "02", title: "PLAN", icon: <Map className="w-5 h-5" />, desc: "Define the architecture, functionality and project roadmap." },
              { num: "03", title: "DESIGN", icon: <PenTool className="w-5 h-5" />, desc: "Create intuitive UI/UX and responsive user experiences." },
              { num: "04", title: "DEVELOP", icon: <Code2 className="w-5 h-5" />, desc: "Build, integrate and test the custom solution." },
              { num: "05", title: "LAUNCH & SUPPORT", icon: <Rocket className="w-5 h-5" />, desc: "Deploy the product and provide ongoing improvements and support." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center w-[18%]">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0A84FF] flex items-center justify-center text-[#0A84FF] mb-6 shadow-sm">
                  {step.icon}
                </div>
                <div className="text-center px-1">
                  <div className="text-[#0A84FF] font-mono text-xs font-bold mb-2">{step.num}</div>
                  <h4 className={`${oswald.className} text-[16px] text-[#0B1736] mb-3 tracking-wide`}>{step.title}</h4>
                  <p className="text-slate-600 text-[13px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Process */}
          <div className="lg:hidden flex flex-col space-y-8 relative pl-2 max-w-md mx-auto">
            <div className="absolute top-6 bottom-6 left-8 w-px bg-slate-300 z-0"></div>
            {[
              { num: "01", title: "DISCOVER", icon: <Search className="w-4 h-4" />, desc: "Understand your business, users and requirements." },
              { num: "02", title: "PLAN", icon: <Map className="w-4 h-4" />, desc: "Define the architecture, functionality and project roadmap." },
              { num: "03", title: "DESIGN", icon: <PenTool className="w-4 h-4" />, desc: "Create intuitive UI/UX and responsive user experiences." },
              { num: "04", title: "DEVELOP", icon: <Code2 className="w-4 h-4" />, desc: "Build, integrate and test the custom solution." },
              { num: "05", title: "LAUNCH & SUPPORT", icon: <Rocket className="w-4 h-4" />, desc: "Deploy the product and provide ongoing improvements and support." }
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

      {/* 6. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0A84FF] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6`}>
            READY TO BUILD SOMETHING CUSTOM?
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] mb-10 leading-relaxed max-w-lg">
            Let's turn your business requirements into a powerful digital product.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-white text-[#0A84FF] text-[15px] font-bold rounded-md hover:bg-slate-50 hover:shadow-lg shadow-md transition-all"
          >
            START YOUR PROJECT <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
