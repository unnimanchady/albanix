"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Smartphone,
  Zap,
  ShieldCheck,
  Layers,
  Code,
  PenTool,
  Network,
  Cloud,
  CheckCircle2,
  Server,
  Activity,
  Briefcase,
  ShoppingCart,
  Building2,
  Users
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function IosDevelopmentPage() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ios_hero_bg.jpg"
            alt="iOS App Development"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ios_hero_bg.jpg"
            alt="iOS App Development"
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
              <span className="text-white">iOS App Development</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              OUR CAPABILITIES
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              IOS APP <br className="hidden md:block" />
              DEVELOPMENT
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide">
              Powerful Apps. Seamless Experiences.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light drop-shadow-md">
              We design and develop high-performance iOS applications that combine elegant user experiences, reliable technology, and scalable architecture for modern businesses.
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
                src="/images/ios_intro_image.jpg"
                alt="iOS App Interface Design"
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
                iOS APP DEVELOPMENT
              </h2>
              <h3 className="text-xl font-bold text-[#176BFF] mb-6">
                Smart. Intuitive. Built for Users.
              </h3>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-8">
                Albanix creates modern iOS applications that combine thoughtful design, reliable performance and scalable technology. From business applications and customer-facing products to connected mobile experiences, we build apps around real user needs and business goals.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Activity className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">1. HIGH PERFORMANCE</h4>
                  <p className="text-slate-600 text-sm">Fast and responsive applications optimized for Apple devices.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <PenTool className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">2. INTUITIVE DESIGN</h4>
                  <p className="text-slate-600 text-sm">Simple and engaging interfaces designed around real users.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">3. SECURE ARCHITECTURE</h4>
                  <p className="text-slate-600 text-sm">Reliable application architecture with security built into the development process.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Layers className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">4. SCALABLE SOLUTIONS</h4>
                  <p className="text-slate-600 text-sm">Applications designed to evolve as your business grows.</p>
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
              iOS DEVELOPMENT EXPERTISE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: Code, 
                title: "1. CUSTOM IOS APP DEVELOPMENT", 
                desc: "Purpose-built iPhone and iPad applications designed around your business requirements." 
              },
              { 
                icon: PenTool, 
                title: "2. UI/UX DESIGN", 
                desc: "Clean, intuitive interfaces that make mobile experiences simple and engaging." 
              },
              { 
                icon: Layers, 
                title: "3. IOS APP ARCHITECTURE", 
                desc: "Scalable and maintainable application architecture designed for long-term growth." 
              },
              { 
                icon: Network, 
                title: "4. API & BACKEND INTEGRATION", 
                desc: "Connect iOS applications with APIs, databases, cloud platforms and third-party services." 
              },
              { 
                icon: Cloud, 
                title: "5. APP STORE DEPLOYMENT", 
                desc: "Application preparation, testing and deployment for the Apple App Store." 
              },
              { 
                icon: CheckCircle2, 
                title: "6. TESTING & OPTIMIZATION", 
                desc: "Thorough testing for performance, usability, compatibility and reliability." 
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
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              IOS TECHNOLOGY STACK
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
              We use modern Apple technologies and development tools to build reliable, scalable mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Code, name: "Swift" },
              { icon: Layers, name: "SwiftUI" },
              { icon: PenTool, name: "UIKit" },
              { icon: Server, name: "Xcode" },
              { icon: Network, name: "REST APIs" },
              { icon: Cloud, name: "Cloud Integration" },
              { icon: Activity, name: "Push Notifications" },
              { icon: CheckCircle2, name: "App Store Connect" },
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
              iOS APPS FOR REAL-WORLD USE
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Briefcase, name: "Business Applications" },
              { icon: Activity, name: "Healthcare Apps" },
              { icon: Users, name: "Customer Applications" },
              { icon: ShoppingCart, name: "E-Commerce Apps" },
              { icon: Zap, name: "On-Demand Services" },
              { icon: Building2, name: "Enterprise Mobility" },
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

      {/* 6. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C2E8] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-tight mb-6`}>
              BUILD YOUR IOS APP.<br />
              BUILD WITH ALBANIX.
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              Let's turn your app idea into a powerful, reliable and beautifully designed iOS experience.
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
