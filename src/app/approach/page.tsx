"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Target,
  PenTool,
  Code,
  LineChart,
  Lightbulb,
  FileCheck,
  Rocket,
  Search,
  LayoutTemplate,
  Cloud,
  Smartphone,
  Briefcase,
  Users,
  Cpu,
  MessageSquare,
  Layers,
  Wrench,
  Infinity,
  Network
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function ApproachPage() {
  return (
    <div className="w-full flex flex-col bg-slate-50 min-h-screen pt-[64px] md:pt-[72px] overflow-x-hidden">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image */}
        <div className="block md:hidden w-full relative z-0 min-h-[300px]">
          <Image
            src="/images/laptop_desk_hero.jpg"
            alt="Our Approach to Software Development"
            fill
            className="object-cover"
          />
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/laptop_desk_hero.jpg"
            alt="Our Approach to Software Development"
            fill
            className="object-cover object-center"
          />
        </div>
        
        {/* Dark Overlays */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/40 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/90 via-[#030814]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[#0A84FF]/5 z-10 mix-blend-overlay" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 pb-12 md:py-12 md:min-h-[460px] lg:min-h-[500px]">
          
          <div className="w-full max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Approach</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              OUR APPROACH
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              FROM IDEA TO IMPACT.
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide uppercase">
              A CLEARER WAY TO BUILD DIGITAL PRODUCTS.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[540px] mb-8 leading-[1.6] font-light drop-shadow-md">
              We combine business understanding, thoughtful design and modern technology to turn ideas into reliable digital products that create real value.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                LET'S BUILD TOGETHER <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 md:py-24 bg-white relative">
        <Container>
          <div className="mb-16">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              HOW WE WORK
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] max-w-3xl`}>
              GOOD SOFTWARE STARTS WITH THE RIGHT APPROACH.
            </h2>
            <div className="mt-6 text-slate-600 text-lg max-w-3xl space-y-4">
              <p>Every project begins with understanding. We learn about your business, users, challenges and goals before deciding what to build.</p>
              <p>Our approach combines strategy, UX design, engineering and continuous improvement so every decision has a clear purpose.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Image */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/about-albanix-software.png"
                alt="Product planning and workspace"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right Content */}
            <div className="flex flex-col">
              <h3 className={`${oswald.className} text-[#0B1736] text-[24px] md:text-[28px] uppercase tracking-wide mb-8`}>
                BUSINESS FIRST. TECHNOLOGY SECOND.
              </h3>
              
              <div className="space-y-8">
                {[
                  { num: "01", title: "UNDERSTAND THE BUSINESS", desc: "We begin by understanding your goals, users, workflows and challenges." },
                  { num: "02", title: "DEFINE THE RIGHT SOLUTION", desc: "We turn business requirements into a clear product direction and practical roadmap." },
                  { num: "03", title: "BUILD WITH PURPOSE", desc: "We use modern technologies and scalable architecture to create reliable digital products." },
                  { num: "04", title: "IMPROVE CONTINUOUSLY", desc: "Launch is not the end. We learn from real usage and continuously improve the product." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mr-5 mt-1">
                      <div className="w-12 h-12 bg-blue-50 text-[#176BFF] rounded-xl flex items-center justify-center font-mono font-bold">
                        {item.num}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. OUR PROCESS TIMELINE */}
      <section className="py-20 md:py-24 bg-[#030814] relative overflow-hidden border-t border-white/5">
        <Container className="relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR PROCESS
            </span>
            <h2 className={`${oswald.className} text-white text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2]`}>
              FROM FIRST CONVERSATION <br className="hidden md:block"/> TO DIGITAL PRODUCT.
            </h2>
          </div>

          <div className="relative">
            {/* Desktop horizontal line */}
            <div className="hidden lg:block absolute top-8 left-[5%] right-[5%] h-px bg-white/10"></div>
            {/* Mobile vertical line */}
            <div className="block lg:hidden absolute top-4 bottom-4 left-[27px] w-px bg-white/10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-4">
              {[
                { num: "01", name: "DISCOVER", desc: "Understand your business, users and objectives.", icon: Search },
                { num: "02", name: "PLAN", desc: "Define requirements, priorities and the product roadmap.", icon: FileCheck },
                { num: "03", name: "DESIGN", desc: "Create intuitive interfaces and experiences around real users.", icon: PenTool },
                { num: "04", name: "DEVELOP", desc: "Build the product using reliable modern technologies.", icon: Code },
                { num: "05", name: "TEST", desc: "Validate functionality, performance, usability and reliability.", icon: Target },
                { num: "06", name: "LAUNCH", desc: "Deploy the product and make it ready for real users.", icon: Rocket },
                { num: "07", name: "GROW", desc: "Monitor, improve and scale as your business evolves.", icon: LineChart }
              ].map((step, idx) => (
                <div key={idx} className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0A1128] border border-white/10 rounded-full flex items-center justify-center text-[#00C2E8] z-10 lg:mb-6 mr-6 lg:mr-0 group-hover:border-[#00C2E8]/50 group-hover:bg-[#00C2E8]/10 transition-all">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[#00C2E8] font-mono text-xs font-bold mb-1">{step.num}</div>
                    <h4 className={`${oswald.className} text-white text-lg tracking-wide mb-2`}>{step.name}</h4>
                    <p className="text-white/60 text-sm leading-relaxed max-w-[200px] lg:mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. OUR PRINCIPLES */}
      <section className="py-20 md:py-24 bg-slate-50 relative">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR PRINCIPLES
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2]`}>
              THE WAY WE BUILD.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "BUSINESS-DRIVEN", desc: "Technology should solve real business problems.", icon: Briefcase },
              { title: "USER-CENTERED", desc: "Every product should be simple, useful and intuitive for the people using it.", icon: Users },
              { title: "BUILT TO SCALE", desc: "We create foundations that can evolve as your business grows.", icon: Layers },
              { title: "LONG-TERM THINKING", desc: "We build relationships and products designed for continuous improvement.", icon: Infinity }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="w-12 h-12 bg-blue-50 text-[#176BFF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6" />
                </div>
                <h4 className={`${oswald.className} text-[#0B1736] text-xl tracking-wide mb-3`}>{card.title}</h4>
                <p className="text-slate-600 text-[15px] leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. DESIGN + TECHNOLOGY */}
      <section className="py-20 md:py-24 bg-white relative border-t border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/design_intro.jpg"
                alt="Design meets Engineering"
                fill
                className="object-cover object-left-top"
              />
            </div>
            
            {/* Right Content */}
            <div className="flex flex-col">
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                WHERE DESIGN MEETS ENGINEERING.
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Great digital products need both thoughtful design and strong technology. Albanix brings product thinking, UI/UX design and software engineering together in one development process.
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "PRODUCT STRATEGY", desc: "We define what should be built and why." },
                  { title: "UI/UX DESIGN", desc: "We create experiences that are simple and intuitive." },
                  { title: "SOFTWARE ENGINEERING", desc: "We build reliable, maintainable and scalable products." },
                  { title: "QUALITY & TESTING", desc: "We validate every important part of the experience." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-xl flex items-center group hover:border-[#176BFF]/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#176BFF] mr-4 opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all" />
                    <div>
                      <h4 className="text-[15px] font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[14px] text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 6. WHAT WE BUILD */}
      <section className="py-20 md:py-24 bg-[#030814] text-white relative">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
              DIGITAL PRODUCTS
            </span>
            <h2 className={`${oswald.className} text-white text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2]`}>
              FROM BUSINESS IDEA TO WORKING PRODUCT.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "WEBSITES", desc: "Modern websites designed around business goals.", icon: LayoutTemplate },
              { title: "SAAS PRODUCTS", desc: "Scalable software platforms for growing businesses.", icon: Cloud },
              { title: "MOBILE APPS", desc: "Mobile experiences for iOS and Android.", icon: Smartphone },
              { title: "BUSINESS SOFTWARE", desc: "Custom platforms that simplify everyday operations.", icon: Briefcase },
              { title: "DIGITAL MARKETPLACES", desc: "Connected platforms that bring users and businesses together.", icon: Network },
              { title: "CUSTOM SOLUTIONS", desc: "Technology designed around unique business requirements.", icon: Wrench }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0A1128] border border-white/5 p-8 rounded-2xl hover:bg-[#0D1838] transition-colors group">
                <item.icon className="w-8 h-8 text-[#00C2E8] mb-5 group-hover:scale-110 transition-transform" />
                <h4 className={`${oswald.className} text-xl tracking-wide mb-2`}>{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. WHY ALBANIX */}
      <section className="py-20 md:py-24 bg-white relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="order-2 lg:order-1 relative h-[450px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/cross_intro_image.jpg"
                alt="Why work with Albanix"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right Content */}
            <div className="order-1 lg:order-2 flex flex-col">
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-10`}>
                WHY WORK WITH ALBANIX?
              </h2>
              
              <div className="space-y-8">
                {[
                  { title: "CLEAR COMMUNICATION", desc: "Keep every project aligned and transparent." },
                  { title: "PRACTICAL THINKING", desc: "Focus on solutions that work in the real world." },
                  { title: "MODERN TECHNOLOGY", desc: "Use current technologies where they create genuine value." },
                  { title: "FLEXIBLE DEVELOPMENT", desc: "Adapt as requirements and priorities evolve." },
                  { title: "LONG-TERM PARTNERSHIP", desc: "Continue supporting and improving products after launch." }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                    <h4 className="text-[16px] font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </Container>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0B1736] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cross_hero_bg.jpg')] opacity-10 bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1736] via-[#0B1736]/90 to-[#0B1736]/60"></div>
        
        <Container className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4">
          <span className="text-[#00C2E8] font-semibold text-xs md:text-sm tracking-widest uppercase mb-4 block drop-shadow-sm">
            LET'S BUILD SOMETHING USEFUL.
          </span>
          <h2 className={`${oswald.className} text-[36px] md:text-[48px] lg:text-[56px] text-white leading-[1.1] mb-6 drop-shadow-md`}>
            HAVE AN IDEA? <br /> LET'S TURN IT INTO A DIGITAL PRODUCT.
          </h2>
          <p className="text-white/80 text-[16px] md:text-[18px] mb-10 leading-relaxed font-light">
            Tell us what you are trying to build. We'll help you understand the opportunity, define the right approach and turn the idea into a practical digital solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg shadow-md transition-all w-full sm:w-auto"
          >
            START A CONVERSATION <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>

    </div>
  );
}
