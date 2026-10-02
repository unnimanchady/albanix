"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import {
  ArrowRight,
  Code2,
  Cpu,
  Lightbulb,
  TrendingUp,
  Users,
  Rocket,
  Briefcase,
  Terminal
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-[#030814] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030814]/50 to-[#030814]"></div>
        <div className="absolute inset-0 bg-[url('/images/design_hero.jpg')] opacity-5 bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#176BFF] rounded-full blur-[150px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/4"></div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
              CAREERS AT ALBANIX
            </span>
            <h1 className={`${oswald.className} uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[40px] md:text-[56px] lg:text-[64px]`}>
              BUILD WHAT'S NEXT <br className="hidden md:block" />
              <span className="text-[#176BFF]">WITH US.</span>
            </h1>
            <p className="text-[18px] md:text-[22px] text-white/80 leading-[1.6] font-light max-w-2xl mb-10">
              We’re building software that solves real business problems. Join Albanix and work on meaningful digital products, modern technology and solutions used by businesses across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="#open-positions"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(23,107,255,0.4)] transition-all w-full sm:w-auto text-center"
              >
                VIEW OPEN POSITIONS <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-white/5 border border-white/20 text-white text-[15px] font-bold rounded-md hover:bg-white/10 hover:border-white/30 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                SEND YOUR PROFILE <ArrowRight className="ml-2 w-4 h-4 text-[#00C2E8]" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. WHY ALBANIX */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-16">
            <h2 className={`${oswald.className} text-[#0B1736] text-[32px] md:text-[42px] leading-[1.2] mb-6 uppercase`}>
              WORK THAT MAKES <span className="text-[#176BFF]">AN IMPACT.</span>
            </h2>
            <p className="text-slate-600 text-[18px] md:text-[20px] leading-relaxed">
              At Albanix, we believe good software should make businesses simpler, faster and more connected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[ 
              { 
                id: "01", 
                title: "BUILD REAL PRODUCTS", 
                desc: "Work on software platforms and digital products designed for real business needs.",
                icon: <Code2 className="w-6 h-6 text-[#176BFF]" />
              },
              { 
                id: "02", 
                title: "LEARN & GROW", 
                desc: "Develop your skills by working with modern technologies, practical projects and experienced teams.",
                icon: <Cpu className="w-6 h-6 text-[#176BFF]" />
              },
              { 
                id: "03", 
                title: "CREATE WITH PURPOSE", 
                desc: "Turn ideas into useful digital experiences that solve meaningful problems.",
                icon: <Lightbulb className="w-6 h-6 text-[#176BFF]" />
              },
              { 
                id: "04", 
                title: "GROW WITH ALBANIX", 
                desc: "Be part of a growing software company where your contribution can make a visible difference.",
                icon: <TrendingUp className="w-6 h-6 text-[#176BFF]" />
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#176BFF]/30 transition-all flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-[#176BFF] transition-colors">
                    {React.cloneElement(card.icon, { className: 'w-6 h-6 text-[#176BFF] group-hover:text-white transition-colors' })}
                  </div>
                  <span className="text-slate-300 font-bold text-xl">{card.id}</span>
                </div>
                <h3 className="text-[16px] font-bold text-[#0B1736] mb-3 uppercase tracking-wide">{card.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. LIFE AT ALBANIX */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`${oswald.className} text-[#0B1736] text-[32px] md:text-[42px] leading-[1.2] mb-6 uppercase`}>
                A PLACE TO BUILD, LEARN & CREATE.
              </h2>
              <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-10">
                From product development to design and technology, our work brings together people who enjoy solving problems and creating better digital experiences.
              </p>
              <div className="space-y-4">
                {['Product development', 'UI/UX design', 'Software engineering', 'Digital solutions', 'Team collaboration'].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#176BFF] mr-4"></div>
                    <span className="text-slate-800 font-semibold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="/images/tech-abstract.png"
                alt="Life at Albanix"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. OPEN POSITIONS */}
      <section id="open-positions" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mb-16">
            <h2 className={`${oswald.className} text-[#0B1736] text-[32px] md:text-[42px] leading-[1.2] mb-6 uppercase`}>
              CURRENT OPPORTUNITIES
            </h2>
            <p className="text-slate-600 text-[18px] leading-relaxed">
              We’re always interested in meeting talented people who are passionate about technology, design and building great products.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-16 text-center shadow-sm">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-bold text-[#0B1736] mb-4 uppercase tracking-wide">
              NO OPEN POSITIONS RIGHT NOW
            </h3>
            <p className="text-slate-600 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed mb-8">
              We don't have any open positions at the moment. However, we’re always interested in hearing from talented people. Send us your profile and we’ll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              SEND YOUR PROFILE <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 5. WHO WE'D LOVE TO MEET */}
      <section className="py-20 md:py-28 bg-[#030814] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`${oswald.className} text-[32px] md:text-[42px] leading-[1.2] mb-6 uppercase`}>
              PEOPLE WE'D LOVE TO HEAR FROM
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              "Software Developers",
              "UI/UX Designers",
              "Product Designers",
              "Frontend Developers",
              "Backend Developers",
              "Mobile App Developers",
              "Digital Product Specialists",
              "Business / Product Professionals"
            ].map((role, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors flex items-center justify-center min-h-[100px]">
                <span className="font-semibold text-sm md:text-base">{role}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-sm md:text-base">
              Even if your exact role isn't listed, we'd still love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. HOW TO APPLY */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm">
            <div className="flex-1">
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] leading-[1.2] mb-4 uppercase`}>
                LET'S START A CONVERSATION.
              </h2>
              <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed">
                Think you could be a good fit for Albanix? Send us your profile, experience and a short introduction.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] px-10 bg-[#0B1736] text-white text-[15px] font-bold rounded-md hover:bg-slate-800 hover:shadow-lg transition-all w-full md:w-auto"
              >
                CONTACT ALBANIX <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#176BFF] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/design_hero.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <Container className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4">
          <h2 className={`${oswald.className} text-[32px] md:text-[48px] lg:text-[56px] text-white leading-[1.1] mb-6 uppercase`}>
            READY TO BUILD SOMETHING MEANINGFUL?
          </h2>
          <p className="text-white/90 text-[16px] md:text-[20px] mb-10 leading-relaxed max-w-2xl font-light">
            Explore opportunities at Albanix and take the next step in your career.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] md:h-[60px] px-12 bg-[#0B1736] text-white text-[15px] md:text-[16px] font-bold rounded-md hover:bg-slate-800 hover:shadow-xl shadow-md transition-all"
          >
            GET IN TOUCH <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Container>
      </section>

    </div>
  );
}
