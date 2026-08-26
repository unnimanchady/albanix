"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  LineChart, 
  Eye, 
  Activity, 
  Zap, 
  Brain, 
  ArrowRight,
  Database,
  Network,
  Cpu,
  CheckCircle2,
  BarChart4,
  Search,
  Link as LinkIcon,
  RefreshCw
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function IndustrialAIPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:h-[400px] lg:h-[440px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/albanix-industrial-ai.png"
            alt="Industrial AI Operations"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/albanix-industrial-ai.png"
            alt="Industrial AI Operations"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/35 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/80 via-[#030814]/40 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 pb-12 md:pt-6 md:pb-0 md:h-full">
          
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Capabilities</span>
            <span>/</span>
            <span className="text-white">Industrial AI</span>
          </div>

          <div className="w-full max-w-3xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              INDUSTRIAL AI
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.1] text-[32px] md:text-[44px] lg:text-[48px] drop-shadow-md`}
            >
              TURN INDUSTRIAL DATA <br />
              INTO INTELLIGENT <br className="hidden md:block" />
              DECISIONS.
            </h1>
            
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/95 max-w-[560px] mb-8 leading-[1.5] md:leading-[1.6] font-light drop-shadow-md">
              Transform complex operational data into predictive insights, smarter workflows, and better decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start">
              <Link
                href="#contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                TALK TO OUR EXPERTS <ArrowRight className="ml-2 w-4 h-4" />
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
                src="/images/industrial_ai_intro_light.png"
                alt="Industrial Intelligence Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                INTRODUCTION
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                BUILD INTELLIGENCE AROUND <br className="hidden md:block" />
                THE WAY YOUR BUSINESS WORKS.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 md:space-y-6 leading-relaxed">
                <p>
                  Industrial organizations generate enormous amounts of data across machines, systems, processes and people. The challenge is turning that data into decisions that improve the way operations actually work.
                </p>
                <p>
                  Albanix designs Industrial AI solutions that connect data, intelligence and operational workflows—helping organizations identify patterns, anticipate problems and make faster, more informed decisions.
                </p>
                <p>
                  Our approach combines AI, data engineering, application development and system integration so intelligence becomes part of the operation—not another disconnected tool.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. KEY INDUSTRIAL AI CAPABILITIES */}
      <section id="capabilities" className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR INDUSTRIAL AI CAPABILITIES
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              INTELLIGENCE DESIGNED <br className="hidden md:block" />
              FOR REAL-WORLD OPERATIONS.
            </h2>
            <p className="text-slate-500 text-[16px] md:text-lg">
              From prediction and anomaly detection to computer vision and intelligent automation, Albanix builds AI capabilities around practical operational challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "PREDICTIVE ANALYTICS",
                desc: "Identify patterns in operational data to anticipate equipment issues, demand changes and performance risks.",
                icon: <LineChart className="w-6 h-6 text-[#176BFF]" />
              },
              {
                num: "02",
                title: "ANOMALY DETECTION",
                desc: "Detect unusual behavior across machines, processes and systems before small issues become major problems.",
                icon: <Activity className="w-6 h-6 text-[#00C2E8]" />
              },
              {
                num: "03",
                title: "COMPUTER VISION",
                desc: "Use intelligent visual inspection to identify defects, monitor processes and improve quality workflows.",
                icon: <Eye className="w-6 h-6 text-[#176BFF]" />
              },
              {
                num: "04",
                title: "FORECASTING & OPTIMIZATION",
                desc: "Turn historical and real-time data into better forecasts and more efficient resource planning.",
                icon: <BarChart4 className="w-6 h-6 text-[#00C2E8]" />
              },
              {
                num: "05",
                title: "INTELLIGENT AUTOMATION",
                desc: "Connect AI-driven decisions with business workflows to reduce repetitive manual operations.",
                icon: <Zap className="w-6 h-6 text-[#176BFF]" />
              },
              {
                num: "06",
                title: "AI DECISION SUPPORT",
                desc: "Give teams clearer insights and recommendations so they can make faster, better-informed decisions.",
                icon: <Brain className="w-6 h-6 text-[#00C2E8]" />
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
                  { label: "DATA", icon: <Database className="w-5 h-5 text-[#176BFF]" /> },
                  { label: "INTELLIGENCE", icon: <Brain className="w-5 h-5 text-[#00C2E8]" /> },
                  { label: "DECISION", icon: <Network className="w-5 h-5 text-[#176BFF]" /> },
                  { label: "ACTION", icon: <Zap className="w-5 h-5 text-[#00C2E8]" /> }
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
                AI FOR REAL OPERATIONS
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                AI SHOULD WORK <br className="hidden lg:block" />
                WHERE THE WORK HAPPENS.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 leading-relaxed">
                <p>
                  AI creates meaningful value when intelligence reaches the people, systems and processes that need it.
                </p>
                <p>
                  Albanix connects AI models and operational data with applications, workflows and existing technology environments.
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
              FROM AI IDEA <br className="md:hidden" />
              TO WORKING SOLUTION.
            </h2>
          </div>

          {/* Desktop Horizontal Process */}
          <div className="hidden lg:flex items-start justify-between relative max-w-6xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-6 left-[5%] right-[5%] h-px bg-slate-300 -z-0"></div>
            
            {[
              { num: "01", title: "DISCOVER", icon: <Search className="w-5 h-5" />, desc: "Understand the operational challenge, data environment and desired business outcome." },
              { num: "02", title: "CONNECT", icon: <LinkIcon className="w-5 h-5" />, desc: "Bring together relevant operational, enterprise and external data." },
              { num: "03", title: "INTELLIGENCE", icon: <Brain className="w-5 h-5" />, desc: "Develop AI/ML capabilities suited to the specific use case." },
              { num: "04", title: "INTEGRATE", icon: <Network className="w-5 h-5" />, desc: "Connect intelligence to applications, APIs and operational workflows." },
              { num: "05", title: "EVOLVE", icon: <RefreshCw className="w-5 h-5" />, desc: "Monitor outcomes and continuously improve the solution." }
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
              { num: "01", title: "DISCOVER", icon: <Search className="w-4 h-4" />, desc: "Understand the operational challenge, data environment and desired business outcome." },
              { num: "02", title: "CONNECT", icon: <LinkIcon className="w-4 h-4" />, desc: "Bring together relevant operational, enterprise and external data." },
              { num: "03", title: "INTELLIGENCE", icon: <Brain className="w-4 h-4" />, desc: "Develop AI/ML capabilities suited to the specific use case." },
              { num: "04", title: "INTEGRATE", icon: <Network className="w-4 h-4" />, desc: "Connect intelligence to applications, APIs and operational workflows." },
              { num: "05", title: "EVOLVE", icon: <RefreshCw className="w-4 h-4" />, desc: "Monitor outcomes and continuously improve the solution." }
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
              ENGINEERING AI <br className="md:hidden" />
              FOR BUSINESS IMPACT.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { title: "TAILORED SOLUTIONS", desc: "Designed around the specific systems, data and workflows of each organization." },
              { title: "ENGINEERING-FIRST", desc: "AI is connected to real applications, APIs, data platforms and operational systems." },
              { title: "SCALABLE ARCHITECTURE", desc: "Solutions can evolve from an initial use case toward broader adoption." },
              { title: "BUSINESS-FOCUSED", desc: "Technology is selected around the problem to be solved." },
              { title: "INTEGRATION READY", desc: "Connect intelligence with existing enterprise and operational environments." },
              { title: "LONG-TERM THINKING", desc: "Build capabilities that can evolve as technology and business needs change." }
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
              APPLICATION AREAS
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2]`}>
              INDUSTRIAL AI <br className="md:hidden" />
              ACROSS REAL-WORLD OPERATIONS.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "MANUFACTURING", desc: "Predictive maintenance, quality inspection and process optimization." },
              { title: "LOGISTICS & DISTRIBUTION", desc: "Forecasting, asset intelligence and workflow optimization." },
              { title: "ENERGY & UTILITIES", desc: "Operational monitoring, anomaly detection and predictive intelligence." },
              { title: "HEALTHCARE", desc: "Intelligent workflows, operational analytics and decision support." },
              { title: "INFRASTRUCTURE", desc: "Asset monitoring, predictive insights and data-driven operations." },
              { title: "HOSPITALITY & SERVICES", desc: "Operational intelligence, forecasting and workflow automation." }
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
                TECHNOLOGY
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[24px] md:text-[32px] leading-[1.2]`}>
                THE TECHNOLOGY <br className="hidden md:block lg:hidden" />
                BEHIND THE INTELLIGENCE.
              </h2>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 lg:max-w-xl">
              {[
                "Machine Learning",
                "Computer Vision",
                "Generative AI",
                "Data Engineering",
                "Data Analytics",
                "APIs & Integrations",
                "Cloud Platforms",
                "Edge AI",
                "Application Engineering"
              ].map((tech, idx) => (
                <div key={idx} className="px-5 py-2 rounded-md bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-700">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 9. USE CASES */}
      <section className="py-20 md:py-24 bg-slate-50">
        <Container>
          <div className="mb-12 md:mb-16 text-center">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              EXAMPLE USE CASES
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.2] mx-auto max-w-4xl`}>
              INDUSTRIAL AI <br className="md:hidden" />
              IN ACTION.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "PREDICTIVE MAINTENANCE",
                desc: "Using operational data to identify early signals of equipment problems.",
              },
              {
                title: "INTELLIGENT VISUAL INSPECTION",
                desc: "Applying computer vision to improve inspection and quality workflows.",
              },
              {
                title: "OPERATIONAL INTELLIGENCE",
                desc: "Connecting data from multiple systems to create a clearer view of operational performance.",
              }
            ].map((uc, idx) => (
              <div key={idx} className="border border-slate-200 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#176BFF]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#00C2E8]/20 transition-all"></div>
                <div className="mb-5 inline-flex items-center space-x-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3 h-3 text-[#00C2E8]" />
                  <span>Example Use Case</span>
                </div>
                <h3 className={`${oswald.className} text-xl tracking-wide text-slate-900 mb-4`}>{uc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#F1F5F9] relative overflow-hidden text-center border-t border-slate-200">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#CBD5E1_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-slate-900 leading-[1.1] mb-6`}>
            HAVE AN INDUSTRIAL <br />
            AI CHALLENGE?
          </h2>
          <p className="text-slate-600 text-[16px] md:text-lg mb-10 max-w-md">
            Let's explore where intelligent software can create practical value across your operations.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-[7px] hover:bg-blue-700 hover:shadow-lg shadow-md transition-all"
          >
            TALK TO OUR EXPERTS <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
