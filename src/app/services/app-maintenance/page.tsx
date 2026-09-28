"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Bug,
  Zap,
  ShieldCheck,
  PlusCircle,
  MonitorSmartphone,
  LifeBuoy,
  Activity,
  Search,
  Wrench,
  ArrowUpCircle,
  RefreshCw,
  Code,
  Cloud,
  Layers,
  Box,
  Network,
  Smartphone,
  Globe,
  Briefcase,
  ShoppingCart
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function AppMaintenancePage() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/maintenance_hero_bg.jpg"
            alt="App Maintenance"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/maintenance_hero_bg.jpg"
            alt="App Maintenance"
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
              <span className="text-white">App Maintenance</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              OUR CAPABILITIES
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              APP <br className="hidden md:block" />
              MAINTENANCE
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide">
              Keep Your Apps Fast. Secure. Up to Date.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light drop-shadow-md">
              We provide ongoing application maintenance and support to keep your mobile and web applications secure, reliable, optimized and ready to evolve with your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                GET SUPPORT <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/20 text-white text-[15px] font-bold rounded-md hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                TALK TO OUR TEAM <ArrowRight className="ml-2 w-4 h-4" />
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
                src="/images/maintenance_intro_image.jpg"
                alt="App Maintenance Dashboard"
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
                APPLICATION<br />MAINTENANCE
              </h2>
              <h3 className="text-xl font-bold text-[#176BFF] mb-6">
                Reliable Today. Ready for Tomorrow.
              </h3>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-8">
                Applications need continuous attention after launch. Albanix helps businesses maintain, improve and evolve their software with ongoing technical support, performance optimization, security updates and feature enhancements.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">01 PERFORMANCE</h4>
                  <p className="text-slate-600 text-sm">Keep applications fast, responsive and reliable.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">02 SECURITY</h4>
                  <p className="text-slate-600 text-sm">Apply updates and address security risks proactively.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <LifeBuoy className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">03 STABILITY</h4>
                  <p className="text-slate-600 text-sm">Monitor and resolve issues before they affect users.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <RefreshCw className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">04 CONTINUOUS IMPROVEMENT</h4>
                  <p className="text-slate-600 text-sm">Improve features and user experience as your business evolves.</p>
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
              OUR APP MAINTENANCE SERVICES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: Bug, 
                title: "01 BUG FIXES & ISSUE RESOLUTION", 
                desc: "Identify and resolve application errors, crashes and functional problems." 
              },
              { 
                icon: Zap, 
                title: "02 PERFORMANCE OPTIMIZATION", 
                desc: "Improve application speed, responsiveness and overall performance." 
              },
              { 
                icon: ShieldCheck, 
                title: "03 SECURITY UPDATES", 
                desc: "Keep applications and dependencies updated against security vulnerabilities." 
              },
              { 
                icon: PlusCircle, 
                title: "04 FEATURE ENHANCEMENTS", 
                desc: "Add new functionality and improve existing features based on business needs." 
              },
              { 
                icon: MonitorSmartphone, 
                title: "05 OS & DEVICE COMPATIBILITY", 
                desc: "Keep applications compatible with new operating system and device releases." 
              },
              { 
                icon: LifeBuoy, 
                title: "06 MONITORING & TECHNICAL SUPPORT", 
                desc: "Continuous monitoring, troubleshooting and technical assistance." 
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

      {/* 4. MAINTENANCE PROCESS */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR PROCESS
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              A PROACTIVE APPROACH TO APP MAINTENANCE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Activity, step: "01", title: "MONITOR", desc: "Track application performance, errors and user issues." },
              { icon: Search, step: "02", title: "ANALYZE", desc: "Identify the root cause of technical problems." },
              { icon: Wrench, step: "03", title: "FIX", desc: "Resolve bugs, compatibility issues and security concerns." },
              { icon: Zap, step: "04", title: "OPTIMIZE", desc: "Improve performance, reliability and user experience." },
              { icon: ArrowUpCircle, step: "05", title: "UPDATE", desc: "Keep software, dependencies and platform integrations current." },
              { icon: RefreshCw, step: "06", title: "IMPROVE", desc: "Continuously evolve the application with new features and improvements." },
            ].map((process, i) => (
              <div key={i} className="flex gap-6 items-start relative group">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#176BFF] transition-colors duration-300">
                  <process.icon className="w-7 h-7 text-[#176BFF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-slate-400 font-bold text-sm tracking-widest mb-1 block">STEP {process.step}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. TECHNOLOGY STACK SECTION */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              PLATFORM SUPPORT
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              MAINTENANCE ACROSS YOUR TECHNOLOGY STACK
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { icon: Smartphone, name: "iOS" },
              { icon: Smartphone, name: "Android" },
              { icon: Layers, name: "React Native" },
              { icon: Smartphone, name: "Flutter" },
              { icon: Code, name: "React" },
              { icon: Box, name: "Next.js" },
              { icon: Box, name: "Node.js" },
              { icon: Code, name: "Python" },
              { icon: Network, name: "APIs" },
              { icon: Cloud, name: "Cloud Services" },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl py-8 px-4 hover:shadow-lg transition-shadow text-center">
                <tech.icon className="w-8 h-8 text-[#176BFF] mb-3" strokeWidth={1.5} />
                <span className="font-semibold text-slate-800 text-[15px]">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. WHAT WE MAINTAIN */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              APPLICATION SUPPORT
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              WE KEEP YOUR DIGITAL PRODUCTS RUNNING
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Smartphone, name: "Mobile Applications", desc: "Native iOS, Android and cross-platform apps." },
              { icon: Globe, name: "Web Applications", desc: "Complex web portals and progressive web apps." },
              { icon: Cloud, name: "SaaS Platforms", desc: "Multi-tenant cloud software products." },
              { icon: Briefcase, name: "Business Software", desc: "Internal tools and enterprise applications." },
              { icon: ShoppingCart, name: "E-Commerce Platforms", desc: "High-traffic online stores and marketplaces." },
              { icon: Network, name: "APIs & Integrations", desc: "Backend services and third-party connections." },
            ].map((category, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <category.icon className="w-7 h-7 text-[#176BFF]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{category.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. WHY ALBANIX */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase mb-6`}>
                WHY CHOOSE ALBANIX FOR APP MAINTENANCE?
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We believe that software is never truly finished. Our dedicated maintenance teams ensure your applications remain robust, secure, and aligned with your evolving business goals long after the initial launch.
              </p>
              <div className="hidden lg:block relative h-[250px] w-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#176BFF_1px,_transparent_1px)] opacity-[0.03] [background-size:24px_24px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="w-32 h-32 text-slate-200" strokeWidth={1} />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">FAST RESPONSE</h3>
                  <p className="text-slate-600">Quick attention to application issues.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Code className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">TECHNICAL EXPERTISE</h3>
                  <p className="text-slate-600">Experienced developers who understand the underlying technology.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <LifeBuoy className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">LONG-TERM SUPPORT</h3>
                  <p className="text-slate-600">Support that continues beyond the initial development phase.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">BUSINESS CONTINUITY</h3>
                  <p className="text-slate-600">Keep your digital products stable while your business grows.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C2E8] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-tight mb-6`}>
              KEEP YOUR APP<br />
              RUNNING AT ITS BEST.
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              From bug fixes and security updates to performance improvements and new features, Albanix helps your application stay reliable and ready for what's next.
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
