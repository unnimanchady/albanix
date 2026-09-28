"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  ShieldCheck,
  Zap,
  RefreshCw,
  Database,
  Wrench,
  PenTool,
  Search,
  CheckCircle2,
  ListTodo,
  Activity,
  LineChart
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function MaintenancePage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:h-[400px] lg:h-[440px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wp_hero_dark.jpg"
            alt="Website Maintenance & Support"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wp_hero_dark.jpg"
            alt="Website Maintenance & Support"
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
            <span className="text-white">Maintenance</span>
          </div>

          <div className="w-full max-w-3xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              WEBSITE MAINTENANCE & SUPPORT
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.1] text-[32px] md:text-[44px] lg:text-[48px] drop-shadow-md`}
            >
              KEEP YOUR WEBSITE FAST, <br className="hidden md:block" />
              SECURE & UP TO DATE.
            </h1>
            
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/95 max-w-[560px] mb-8 leading-[1.5] md:leading-[1.6] font-light drop-shadow-md">
              Your website needs more than a one-time launch. ALBANIX keeps your website updated, secure, optimized, and running smoothly so you can focus on your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                GET WEBSITE SUPPORT <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/40 text-white text-[15px] font-bold rounded-md hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                TALK TO US <ArrowRight className="ml-2 w-4 h-4" />
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
                src="/images/website-maintenance-albanix.png"
                alt="Website Maintenance"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                ONGOING WEBSITE CARE
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                YOUR WEBSITE SHOULD KEEP <br className="hidden md:block" />
                WORKING AS YOUR BUSINESS GROWS.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 md:space-y-6 leading-relaxed">
                <p>
                  Websites need regular updates, security checks, performance improvements, backups, and technical attention. Without proper maintenance, even a great website can become slow, outdated, or vulnerable.
                </p>
                <p>
                  ALBANIX provides ongoing website maintenance and technical support to keep your digital presence reliable and up to date.
                </p>
                <p>
                  Whether we built your website or you're taking over an existing website, our team can help maintain, improve, and support it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHAT WE HANDLE */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              WHAT WE HANDLE
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              EVERYTHING YOUR WEBSITE <br className="hidden md:block"/> NEEDS TO STAY HEALTHY.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "WEBSITE UPDATES", 
                desc: "Keep content, plugins, themes, frameworks, and website components updated.", 
                icon: <RefreshCw className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "SECURITY & PROTECTION", 
                desc: "Regular security checks, vulnerability monitoring, and essential security updates.", 
                icon: <ShieldCheck className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "PERFORMANCE OPTIMIZATION", 
                desc: "Improve loading speed, responsiveness, and overall website performance.", 
                icon: <Zap className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "BACKUPS & RECOVERY", 
                desc: "Maintain reliable backups and help restore your website when something goes wrong.", 
                icon: <Database className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "BUG FIXES & TECHNICAL SUPPORT", 
                desc: "Resolve website errors, broken functionality, layout issues, and technical problems.", 
                icon: <Wrench className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "CONTENT & DESIGN UPDATES", 
                desc: "Make ongoing changes to text, images, pages, sections, and website layouts.", 
                icon: <PenTool className="w-6 h-6 text-[#0A84FF]" /> 
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

      {/* 4. WHY MAINTAIN YOUR WEBSITE */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
            <div className="sticky top-24">
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                WHY IT MATTERS
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                A WELL-MAINTAINED WEBSITE <br className="hidden md:block"/> IS A BETTER BUSINESS ASSET.
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "STAY SECURE",
                  desc: "Reduce risks from outdated software and vulnerabilities.",
                  icon: <ShieldCheck className="w-6 h-6 text-[#00C2E8]" />
                },
                {
                  title: "STAY FAST",
                  desc: "Keep your website performing smoothly.",
                  icon: <Zap className="w-6 h-6 text-[#00C2E8]" />
                },
                {
                  title: "STAY CURRENT",
                  desc: "Make regular content and design improvements.",
                  icon: <RefreshCw className="w-6 h-6 text-[#00C2E8]" />
                },
                {
                  title: "STAY AVAILABLE",
                  desc: "Quickly address errors and technical problems.",
                  icon: <Activity className="w-6 h-6 text-[#00C2E8]" />
                },
                {
                  title: "STAY COMPETITIVE",
                  desc: "Continuously improve the customer experience.",
                  icon: <LineChart className="w-6 h-6 text-[#00C2E8]" />
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl flex items-start space-x-4 shadow-sm hover:border-[#0A84FF]/40 transition-colors">
                  <div className="mt-1 shrink-0 p-2 rounded-lg bg-[#0B1736]">
                    {feature.icon}
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

      {/* 5. SUPPORT PROCESS */}
      <section className="pt-20 pb-20 md:pt-24 md:pb-24 bg-white border-b border-slate-200">
        <Container>
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR SUPPORT PROCESS
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mx-auto`}>
              SIMPLE SUPPORT. LESS WORRY.
            </h2>
          </div>

          {/* Desktop Horizontal Process */}
          <div className="hidden lg:flex items-start justify-between relative max-w-5xl mx-auto">
            <div className="absolute top-6 left-[12%] right-[12%] h-px bg-slate-300 -z-0"></div>
            
            {[
              { num: "01", title: "REVIEW", icon: <Search className="w-5 h-5" />, desc: "We understand your website and identify issues or improvement areas." },
              { num: "02", title: "PRIORITIZE", icon: <ListTodo className="w-5 h-5" />, desc: "We identify what needs immediate attention and what can be improved over time." },
              { num: "03", title: "FIX & OPTIMIZE", icon: <Wrench className="w-5 h-5" />, desc: "We implement updates, fixes, security improvements, and performance enhancements." },
              { num: "04", title: "MONITOR & SUPPORT", icon: <Activity className="w-5 h-5" />, desc: "We continue supporting your website as your business and requirements evolve." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center w-[22%]">
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
              { num: "01", title: "REVIEW", icon: <Search className="w-4 h-4" />, desc: "We understand your website and identify issues or improvement areas." },
              { num: "02", title: "PRIORITIZE", icon: <ListTodo className="w-4 h-4" />, desc: "We identify what needs immediate attention and what can be improved over time." },
              { num: "03", title: "FIX & OPTIMIZE", icon: <Wrench className="w-4 h-4" />, desc: "We implement updates, fixes, security improvements, and performance enhancements." },
              { num: "04", title: "MONITOR & SUPPORT", icon: <Activity className="w-4 h-4" />, desc: "We continue supporting your website as your business and requirements evolve." }
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
            READY TO KEEP YOUR WEBSITE RUNNING AT ITS BEST?
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] mb-10 leading-relaxed max-w-lg">
            Get reliable website maintenance, technical support, and ongoing improvements from ALBANIX.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-white text-[#0A84FF] text-[15px] font-bold rounded-md hover:bg-slate-50 hover:shadow-lg shadow-md transition-all"
          >
            GET WEBSITE SUPPORT <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
