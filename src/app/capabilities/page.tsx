"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  LayoutTemplate,
  Smartphone,
  PenTool,
  Briefcase,
  Cloud,
  Network
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function CapabilitiesPage() {
  return (
    <div className="w-full flex flex-col bg-slate-50 min-h-screen pt-[64px] md:pt-[72px] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-16 md:py-24 bg-white border-b border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col">
              <span className="text-[#176BFF] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
                OUR CAPABILITIES
              </span>
              <h1 
                className={`${oswald.className} text-[#0B1736] uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[40px] md:text-[52px] lg:text-[60px]`}
              >
                DIGITAL SOLUTIONS <br className="hidden lg:block" /> BUILT FOR BUSINESS.
              </h1>
              <p className="text-[16px] md:text-[18px] text-slate-600 max-w-[500px] mb-8 leading-[1.6]">
                We design and develop practical digital solutions that help businesses work better, connect with customers and grow.
              </p>
              
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-[50px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all"
                >
                  LET'S TALK <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/design_hero.jpg"
                alt="Digital Capabilities"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-20 md:py-24 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "WEB DEVELOPMENT", desc: "Modern, responsive websites and web applications for businesses.", icon: LayoutTemplate },
              { title: "MOBILE APP DEVELOPMENT", desc: "iOS and Android applications designed for modern users.", icon: Smartphone },
              { title: "UI/UX DESIGN", desc: "Clean, intuitive and user-friendly digital experiences.", icon: PenTool },
              { title: "BUSINESS SOFTWARE", desc: "Custom software solutions designed around business processes and workflows.", icon: Briefcase },
              { title: "SAAS PRODUCTS", desc: "Scalable cloud-based software products for growing businesses.", icon: Cloud },
              { title: "DIGITAL MARKETPLACES", desc: "Platforms that connect businesses, customers and service providers.", icon: Network }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all group flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-[#176BFF] rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className={`${oswald.className} text-[#0B1736] text-[20px] tracking-wide mb-3`}>{item.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. HOW WE HELP */}
      <section className="py-20 md:py-24 bg-white border-y border-slate-100 relative">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#176BFF] font-bold text-xs tracking-widest uppercase mb-6 block">
              HOW WE HELP
            </span>
            
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-[16px] md:text-[22px] lg:text-[26px] font-bold text-[#0B1736] tracking-tight mb-10">
              <span>IDEA</span>
              <ArrowRight className="w-5 h-5 text-slate-300" />
              <span>DESIGN</span>
              <ArrowRight className="w-5 h-5 text-slate-300" />
              <span>DEVELOPMENT</span>
              <ArrowRight className="w-5 h-5 text-slate-300" />
              <span>LAUNCH</span>
              <ArrowRight className="w-5 h-5 text-slate-300" />
              <span>SUPPORT</span>
            </div>

            <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
              We work with businesses from the initial idea through design, development, launch and ongoing improvement.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0B1736] text-white text-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1736] via-[#0B1736]/90 to-[#0B1736]/60"></div>
        
        <Container className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4">
          <span className="text-[#00C2E8] font-semibold text-xs md:text-sm tracking-widest uppercase mb-4 block drop-shadow-sm">
            HAVE A DIGITAL IDEA?
          </span>
          <h2 className={`${oswald.className} text-[36px] md:text-[48px] lg:text-[52px] text-white leading-[1.1] mb-8 drop-shadow-md uppercase`}>
            LET'S BUILD IT TOGETHER.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto"
          >
            START A CONVERSATION <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>

    </div>
  );
}
