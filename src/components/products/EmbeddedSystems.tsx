"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Cpu,
  ShieldCheck,
  Network,
  Settings,
  Code,
  Wifi,
  Activity,
  Layers,
  Database,
  Lock,
  Cloud,
  CheckCircle2,
  MonitorSmartphone,
  Factory,
  Car,
  Zap,
  Server
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function EmbeddedSystems() {
  return (
    <div id="embedded-systems" className="w-full flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative w-full flex flex-col justify-center pt-[64px] md:pt-[72px] lg:pt-[86px] h-[500px] lg:h-[560px] bg-[#030814] overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full z-0 flex justify-end">
          <div className="relative w-full lg:w-[65%] h-full">
            {/* Dark gradient overlay blending into the image */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#030814] via-[#030814]/80 to-transparent lg:to-transparent lg:via-[#030814]/30"></div>
            <Image 
              src="/images/embedded-hero.jpg" 
              alt="Embedded Systems Engineering" 
              fill 
              className="object-cover object-left"
              priority
            />
          </div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center py-12 lg:py-0 h-full">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[55%] max-w-[520px] flex flex-col justify-center">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white">Embedded Systems</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block drop-shadow-md">
              OUR CAPABILITIES
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              EMBEDDED SYSTEM <br className="hidden md:block" />
              TECHNOLOGY
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide">
              Intelligent Systems. Real-World Impact.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light">
              We design and develop reliable, secure, and high-performance embedded systems that power the devices and solutions of tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start">
              <Link
                href="#embedded-contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                EXPLORE OUR SOLUTIONS <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Image */}
            <div className="relative h-[320px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/embedded-board.jpg"
                alt="Embedded Processor Board"
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
                EMBEDDED SYSTEM TECHNOLOGY
              </h2>
              <h3 className="text-xl font-bold text-[#176BFF] mb-6">
                Smart. Reliable. Built for Tomorrow.
              </h3>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-8">
                Albanix delivers advanced embedded system solutions that bring intelligence, connectivity and efficiency to modern devices. From IoT and smart appliances to industrial automation, our embedded technologies ensure seamless performance and long-term reliability.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Activity className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">1. HIGH PERFORMANCE</h4>
                  <p className="text-slate-600 text-sm">Optimized for real-time operation.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">2. SECURITY FIRST</h4>
                  <p className="text-slate-600 text-sm">Built-in protection for critical systems.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Network className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">3. SEAMLESS INTEGRATION</h4>
                  <p className="text-slate-600 text-sm">Works with modern IoT ecosystems.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Settings className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">4. CUSTOM SOLUTIONS</h4>
                  <p className="text-slate-600 text-sm">Tailored to your business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CORE CAPABILITIES */}
      <section className="py-20 md:py-28 bg-[#030814] text-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block drop-shadow-md">
              CORE CAPABILITIES
            </span>
            <h2 className={`${oswald.className} text-[32px] md:text-[42px] leading-[1.2] uppercase drop-shadow-md`}>
              EMBEDDED EXPERTISE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: Cpu, 
                title: "1. HARDWARE DESIGN", 
                desc: "Custom hardware architecture, PCB design and prototyping." 
              },
              { 
                icon: Code, 
                title: "2. FIRMWARE DEVELOPMENT", 
                desc: "Efficient firmware for microcontrollers and processors." 
              },
              { 
                icon: Layers, 
                title: "3. RTOS & MIDDLEWARE", 
                desc: "Real-time operating systems and middleware for reliable performance." 
              },
              { 
                icon: Wifi, 
                title: "4. IoT INTEGRATION", 
                desc: "Connectivity and cloud integration for smart devices." 
              },
              { 
                icon: Lock, 
                title: "5. SECURITY SOLUTIONS", 
                desc: "Secure boot, encryption and device protection." 
              },
              { 
                icon: CheckCircle2, 
                title: "6. TESTING & VALIDATION", 
                desc: "Rigorous testing for quality, compliance and long-term reliability." 
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

      {/* 5. TECHNOLOGY STACK SECTION */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              EMBEDDED TECHNOLOGY STACK
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
              We leverage modern tools, chips, and protocols to build scalable embedded architectures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Cpu, name: "MCU / MPU" },
              { icon: Layers, name: "RTOS" },
              { icon: Code, name: "Firmware" },
              { icon: Network, name: "IoT" },
              { icon: Server, name: "Edge Computing" },
              { icon: Wifi, name: "Connectivity" },
              { icon: ShieldCheck, name: "Device Security" },
              { icon: Cloud, name: "Cloud Integration" },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl py-8 px-4 hover:shadow-lg transition-shadow text-center">
                <tech.icon className="w-8 h-8 text-[#176BFF] mb-3" strokeWidth={1.5} />
                <span className="font-semibold text-slate-800 text-[15px]">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. INDUSTRIES SECTION */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              INDUSTRY APPLICATIONS
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              EMBEDDED SYSTEMS ACROSS INDUSTRIES
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Factory, name: "Industrial Automation" },
              { icon: Activity, name: "Healthcare Devices" },
              { icon: MonitorSmartphone, name: "Smart Appliances" },
              { icon: Car, name: "Automotive" },
              { icon: Zap, name: "Energy & Utilities" },
              { icon: MonitorSmartphone, name: "Consumer Electronics" },
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

      {/* 7. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C2E8] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-tight mb-6`}>
              BUILD SMARTER.<br />
              BUILD WITH ALBANIX.
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              Let&apos;s build reliable, intelligent embedded systems that turn your product vision into reality.
            </p>
            <Link
              href="#contact"
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
