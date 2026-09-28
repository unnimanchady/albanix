"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Users,
  Navigation,
  Palette,
  Briefcase,
  Layout,
  Search,
  PenTool,
  Smartphone,
  CheckSquare,
  Component,
  Type,
  Move,
  GripHorizontal,
  HeartPulse,
  ShoppingCart,
  Building2,
  Grid,
  MousePointer,
  Target,
  Maximize,
  Code
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function AppDesignPage() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/design_hero.jpg"
            alt="App UI/UX Design"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/design_hero.jpg"
            alt="App UI/UX Design"
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
              <span className="text-white">App UI/UX Design</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              OUR CAPABILITIES
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              APP UI/UX <br className="hidden md:block" />
              DESIGN
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide">
              Design Experiences People Love to Use.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light drop-shadow-md">
              We design intuitive, modern and engaging mobile experiences that combine beautiful interfaces with thoughtful user journeys and real business goals.
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
                VIEW OUR WORK <ArrowRight className="ml-2 w-4 h-4" />
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
                src="/images/design_intro.jpg"
                alt="UI/UX Design Dashboard"
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
                APP UI/UX<br />DESIGN
              </h2>
              <h3 className="text-xl font-bold text-[#176BFF] mb-6">
                Simple. Intuitive. Purposeful.
              </h3>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-8">
                Great mobile products begin with great user experiences. Albanix designs interfaces that make complex applications simple to understand, easy to navigate and enjoyable to use.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">01 USER-CENTERED</h4>
                  <p className="text-slate-600 text-sm">Design decisions are based around real user needs and behavior.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <MousePointer className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">02 INTUITIVE</h4>
                  <p className="text-slate-600 text-sm">Clear navigation and simple interactions reduce friction.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Palette className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">03 VISUALLY CONSISTENT</h4>
                  <p className="text-slate-600 text-sm">A unified design system keeps the entire product experience consistent.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Target className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">04 BUSINESS-FOCUSED</h4>
                  <p className="text-slate-600 text-sm">Every screen is designed to support the product and business objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE DESIGN SERVICES */}
      <section className="py-20 md:py-28 bg-[#030814] text-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block drop-shadow-md">
              CORE CAPABILITIES
            </span>
            <h2 className={`${oswald.className} text-[32px] md:text-[42px] leading-[1.2] uppercase drop-shadow-md`}>
              OUR APP DESIGN EXPERTISE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: Search, 
                title: "01 UX RESEARCH", 
                desc: "Understand users, requirements, problems and business objectives." 
              },
              { 
                icon: Navigation, 
                title: "02 USER FLOWS", 
                desc: "Map clear and logical journeys through the application." 
              },
              { 
                icon: Layout, 
                title: "03 WIREFRAMES", 
                desc: "Create structured layouts before visual design begins." 
              },
              { 
                icon: Palette, 
                title: "04 UI DESIGN", 
                desc: "Create polished, modern and responsive application interfaces." 
              },
              { 
                icon: MousePointer, 
                title: "05 INTERACTIVE PROTOTYPES", 
                desc: "Build realistic prototypes to test and validate experiences." 
              },
              { 
                icon: Component, 
                title: "06 DESIGN SYSTEMS", 
                desc: "Create reusable components, styles and patterns for consistency." 
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

      {/* 4. DESIGN PROCESS */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR PROCESS
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              FROM IDEA TO INTERFACE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, step: "01", title: "DISCOVER", desc: "Understand the product, users and business goals." },
              { icon: Users, step: "02", title: "RESEARCH", desc: "Study user needs, workflows and competitive experiences." },
              { icon: Layout, step: "03", title: "WIREFRAME", desc: "Create the structure and navigation of the application." },
              { icon: PenTool, step: "04", title: "DESIGN", desc: "Transform wireframes into polished visual interfaces." },
              { icon: MousePointer, step: "05", title: "PROTOTYPE", desc: "Create interactive prototypes that demonstrate real user flows." },
              { icon: CheckSquare, step: "06", title: "REFINE", desc: "Test, improve and prepare the final design for development." },
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

      {/* 5. DESIGN SYSTEM */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              DESIGN SYSTEM
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase mb-4`}>
              A CONSISTENT EXPERIENCE<br />ACROSS EVERY SCREEN
            </h2>
            <p className="text-slate-600 text-lg">
              We create reusable visual and interaction systems that help products remain consistent as they grow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Type, name: "Typography" },
              { icon: Palette, name: "Color System" },
              { icon: GripHorizontal, name: "Buttons" },
              { icon: CheckSquare, name: "Forms" },
              { icon: Grid, name: "Cards" },
              { icon: Navigation, name: "Navigation" },
              { icon: Target, name: "Icons" },
              { icon: Maximize, name: "Spacing" },
              { icon: Component, name: "Components" },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl py-8 px-4 hover:shadow-lg transition-shadow text-center">
                <tech.icon className="w-8 h-8 text-[#176BFF] mb-3" strokeWidth={1.5} />
                <span className="font-semibold text-slate-800 text-[15px]">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. WHAT WE DESIGN */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              PRODUCT DESIGN
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              DESIGN FOR EVERY DIGITAL EXPERIENCE
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Smartphone, name: "Mobile Applications", desc: "Native iOS and Android UI." },
              { icon: Layout, name: "SaaS Products", desc: "Complex web application design." },
              { icon: HeartPulse, name: "Healthcare Apps", desc: "Patient and provider portals." },
              { icon: ShoppingCart, name: "E-Commerce Apps", desc: "Optimized shopping journeys." },
              { icon: Briefcase, name: "Business Applications", desc: "Internal tools and operations." },
              { icon: Users, name: "Customer Portals", desc: "Client-facing dashboards." },
              { icon: Grid, name: "Dashboards", desc: "Data visualization and analytics." },
              { icon: Building2, name: "Enterprise Applications", desc: "Scalable B2B products." },
            ].map((category, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-slate-50 border border-slate-200 rounded-2xl group hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <category.icon className="w-7 h-7 text-[#176BFF]" />
                </div>
                <h3 className="font-bold text-slate-900 text-[16px] mb-2">{category.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{category.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. TOOLS & TECHNOLOGIES */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-1">
              <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                DESIGN TOOLS
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase mb-4`}>
                DESIGNED WITH MODERN TOOLS
              </h2>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Figma",
                "FigJam",
                "Adobe XD",
                "Prototyping",
                "Design Systems",
                "User Flows",
                "Wireframes",
                "Usability Testing"
              ].map((tool, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 text-center font-semibold text-slate-800 shadow-sm text-sm">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 8. WHY ALBANIX */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase mb-6`}>
                WHY CHOOSE ALBANIX<br />FOR APP DESIGN?
              </h2>
              <div className="hidden lg:block relative h-[400px] w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm mt-8">
                <Image
                  src="/images/app-design.png"
                  alt="Why Choose Albanix for App Design"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">USER-FIRST THINKING</h3>
                  <p className="text-slate-600">Design around real people and real workflows.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">BUSINESS ALIGNMENT</h3>
                  <p className="text-slate-600">Connect design decisions with measurable business objectives.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Code className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">DEVELOPER-READY DESIGN</h3>
                  <p className="text-slate-600">Design systems and components are prepared for smooth development.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Component className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">SCALABLE DESIGN SYSTEMS</h3>
                  <p className="text-slate-600">Create a foundation that can evolve as the product grows.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C2E8] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-tight mb-6`}>
              HAVE AN APP IDEA?<br />
              LET'S DESIGN IT.
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              Let's turn your idea into a clear, intuitive and beautifully designed mobile experience.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              TALK TO OUR DESIGN TEAM <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
      
    </div>
  );
}
