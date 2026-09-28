"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Send,
  Building2,
  GitCompare,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Lock,
  Globe2
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function TreatAnywherePage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:h-[400px] lg:h-[440px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/product-treatanywhere.png"
            alt="TreatAnywhere Platform"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/product-treatanywhere.png"
            alt="TreatAnywhere Platform"
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
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">TreatAnywhere</span>
          </div>

          <div className="w-full max-w-3xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              TREATANYWHERE
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.1] text-[32px] md:text-[44px] lg:text-[48px] drop-shadow-md`}
            >
              HEALTHCARE WITHOUT <br className="hidden md:block" /> BORDERS.
            </h1>
            
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/95 max-w-[560px] mb-8 leading-[1.5] md:leading-[1.6] font-light drop-shadow-md">
              TreatAnywhere connects patients with verified hospitals around the world, making it easier to discover treatment options, compare proposals, and understand treatment costs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                EXPLORE TREATANYWHERE <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="https://treatanywhere.com"
                target="_blank"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/40 text-white text-[15px] font-bold rounded-md hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                VISIT TREATANYWHERE <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
              HEALTHCARE MADE SIMPLER.
            </h2>
            <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed">
              TreatAnywhere connects patients with hospitals and helps patients compare treatment options and estimates in one place. By bringing transparency to the global healthcare process, we empower patients to make informed decisions about their medical care.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              HOW IT WORKS
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              YOUR JOURNEY TO BETTER HEALTH.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { num: "01", title: "Submit Your Request", icon: <Send className="w-6 h-6 text-[#0A84FF]" /> },
              { num: "02", title: "Connect With Hospitals", icon: <Building2 className="w-6 h-6 text-[#0A84FF]" /> },
              { num: "03", title: "Compare Proposals", icon: <GitCompare className="w-6 h-6 text-[#0A84FF]" /> },
              { num: "04", title: "Choose Your Treatment", icon: <CheckCircle2 className="w-6 h-6 text-[#0A84FF]" /> }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0A84FF]/30 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-[64px] font-bold text-slate-50 leading-none group-hover:text-slate-100 transition-colors pointer-events-none select-none">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736]`}>{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. KEY FEATURES */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              KEY FEATURES
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              TRANSPARENT, SECURE, GLOBAL.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { title: "Verified Hospitals", icon: <ShieldCheck className="w-8 h-8 text-[#00C2E8]" /> },
              { title: "Transparent Treatment Estimates", icon: <FileText className="w-8 h-8 text-[#00C2E8]" /> },
              { title: "Secure Medical Records", icon: <Lock className="w-8 h-8 text-[#00C2E8]" /> },
              { title: "International Patient Support", icon: <Globe2 className="w-8 h-8 text-[#00C2E8]" /> }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                <div className="shrink-0 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-200 mr-6">
                  {feature.icon}
                </div>
                <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736]`}>{feature.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0B1736] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6`}>
            FIND THE RIGHT TREATMENT. ANYWHERE.
          </h2>
          <p className="text-white/80 text-[16px] md:text-[18px] mb-10 leading-relaxed max-w-lg font-light">
            Explore treatment options and connect with hospitals beyond borders.
          </p>
          <Link
            href="https://treatanywhere.com"
            target="_blank"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg shadow-md transition-all"
          >
            VISIT TREATANYWHERE <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>

    </div>
  );
}
