"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Code,
  PenTool,
  Layers,
  Network,
  CheckCircle2,
  RefreshCw,
  ShoppingCart,
  Zap,
  Activity,
  Briefcase,
  GraduationCap,
  Compass,
  MonitorSmartphone,
  Smartphone,
  Globe,
  Server,
  Cloud
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function CrossPlatformPage() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cross_hero_bg.jpg"
            alt="Cross-Platform App Development"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cross_hero_bg.jpg"
            alt="Cross-Platform App Development"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/60 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/95 via-[#030814]/70 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 pb-12 md:py-12 md:min-h-[460px] lg:min-h-[500px]">
          
          <div className="w-full max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="hover:text-white transition-colors cursor-default">Mobile Apps</span>
              <span>/</span>
              <span className="text-white">Cross-Platform Apps</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              OUR CAPABILITIES
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              CROSS-PLATFORM <br className="hidden md:block" />
              APPS
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide">
              Build Once. Reach Everywhere.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light drop-shadow-md">
              We develop high-performance cross-platform applications that work seamlessly across iOS and Android, helping businesses reach more users with a single, scalable codebase and a consistent user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                START YOUR PROJECT <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/20 text-white text-[15px] font-bold rounded-md hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                EXPLORE OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Image */}
            <div className="relative h-[320px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/cross_intro_image.jpg"
                alt="One Codebase Multiple Platforms"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right Text */}
            <div>
              <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                INTRODUCTION
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4 uppercase`}>
                CROSS-PLATFORM APP DEVELOPMENT
              </h2>
              <h3 className="text-xl font-bold text-[#176BFF] mb-6">
                One Codebase. Multiple Platforms.
              </h3>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-8">
                Albanix builds modern cross-platform applications using powerful frameworks such as Flutter and React Native. We help businesses launch high-quality applications for both iOS and Android with consistent performance, design and functionality.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">01 COST EFFECTIVE</h4>
                  <p className="text-slate-600 text-sm">A single codebase can reduce development time and cost.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Globe className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">02 WIDER REACH</h4>
                  <p className="text-slate-600 text-sm">Reach iOS and Android users from a single application.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <MonitorSmartphone className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">03 CONSISTENT EXPERIENCE</h4>
                  <p className="text-slate-600 text-sm">Maintain a consistent design and user experience across platforms.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Activity className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">04 FASTER TIME TO MARKET</h4>
                  <p className="text-slate-600 text-sm">Launch your application faster without compromising quality.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-20 md:py-28 bg-[#030814] text-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block drop-shadow-md">
              CORE CAPABILITIES
            </span>
            <h2 className={`${oswald.className} text-[32px] md:text-[42px] leading-[1.2] uppercase drop-shadow-md`}>
              OUR CROSS-PLATFORM EXPERTISE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: Code, 
                title: "01 CUSTOM APP DEVELOPMENT", 
                desc: "Tailored cross-platform applications designed around your business needs." 
              },
              { 
                icon: PenTool, 
                title: "02 UI/UX DESIGN", 
                desc: "Beautiful and intuitive interfaces that work consistently across devices." 
              },
              { 
                icon: Layers, 
                title: "03 CROSS-PLATFORM ARCHITECTURE", 
                desc: "Scalable and maintainable application architecture designed for performance." 
              },
              { 
                icon: Network, 
                title: "04 API & BACKEND INTEGRATION", 
                desc: "Connect applications with APIs, databases and third-party services." 
              },
              { 
                icon: CheckCircle2, 
                title: "05 TESTING & OPTIMIZATION", 
                desc: "Thorough testing for performance, usability and device compatibility." 
              },
              { 
                icon: RefreshCw, 
                title: "06 DEPLOYMENT & SUPPORT", 
                desc: "App Store deployment, updates and long-term maintenance." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#071328]/60 backdrop-blur-sm border border-[#176BFF]/20 rounded-2xl p-8 hover:border-[#176BFF]/50 transition-colors group relative overflow-hidden">
                <div className="w-14 h-14 rounded-full bg-[#030814] border border-[#00C2E8]/30 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#00C2E8]" />
                </div>
                <h3 className={`${oswald.className} text-xl tracking-wide mb-3 uppercase group-hover:text-[#00C2E8] transition-colors`}>
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light mb-6">
                  {feature.desc}
                </p>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-[#00C2E8]" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. TECHNOLOGY STACK SECTION */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              TECHNOLOGY STACK
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              MODERN CROSS-PLATFORM TECHNOLOGIES
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
              We use industry-leading frameworks and tools to build reliable, scalable and high-performance cross-platform applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Smartphone, name: "Flutter" },
              { icon: Layers, name: "React Native" },
              { icon: Code, name: "Dart" },
              { icon: Code, name: "JavaScript" },
              { icon: Code, name: "TypeScript" },
              { icon: Network, name: "REST APIs" },
              { icon: Server, name: "Firebase" },
              { icon: Cloud, name: "AWS" },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl py-8 px-4 hover:shadow-lg transition-shadow text-center">
                <tech.icon className="w-8 h-8 text-[#176BFF] mb-3" strokeWidth={1.5} />
                <span className="font-semibold text-slate-800 text-[15px]">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. INDUSTRIES SECTION */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              INDUSTRY APPLICATIONS
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              CROSS-PLATFORM APPS FOR EVERY BUSINESS
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
              We build cross-platform applications for a wide range of industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: ShoppingCart, name: "E-Commerce Apps" },
              { icon: Zap, name: "On-Demand Services" },
              { icon: Activity, name: "Healthcare Apps" },
              { icon: Briefcase, name: "Business Apps" },
              { icon: GraduationCap, name: "Education Apps" },
              { icon: Compass, name: "Lifestyle Apps" },
            ].map((industry, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-7 h-7 text-[#176BFF]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{industry.name}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. WHY CROSS-PLATFORM */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase mb-6`}>
                WHY CHOOSE CROSS-PLATFORM DEVELOPMENT?
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Cross-platform development provides an efficient way to target multiple platforms without sacrificing user experience. By sharing a single codebase, we reduce cost, save time, and streamline maintenance.
              </p>
              <div className="hidden lg:block relative h-[250px] w-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#176BFF_1px,_transparent_1px)] opacity-[0.03] [background-size:24px_24px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <MonitorSmartphone className="w-32 h-32 text-slate-200" strokeWidth={1} />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Code className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">ONE CODEBASE</h3>
                  <p className="text-slate-600">Develop for multiple platforms with a shared codebase.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">REDUCED DEVELOPMENT COST</h3>
                  <p className="text-slate-600">Reduce duplicate development effort.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">FASTER DEVELOPMENT</h3>
                  <p className="text-slate-600">Build and launch products faster.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">CONSISTENT USER EXPERIENCE</h3>
                  <p className="text-slate-600">Maintain a unified product experience across iOS and Android.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C2E8] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-tight mb-6`}>
              READY TO BUILD YOUR<br />
              CROSS-PLATFORM APP?
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              Let's turn your idea into a powerful, scalable and beautifully designed mobile experience for both iOS and Android.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              TALK TO OUR EXPERTS <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
      
    </div>
  );
}
