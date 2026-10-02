"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Users,
  CreditCard,
  CalendarCheck,
  UserCheck,
  Wallet,
  LayoutDashboard
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function MatrixGymSoftwareCaseStudy() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* CASE STUDY HERO */}
      <section className="relative py-16 md:py-24 bg-[#0B1736] border-b border-slate-200 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="order-2 lg:order-1 flex flex-col justify-center max-w-2xl text-white">
              <span className="text-[#0A84FF] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
                GYM SOFTWARE
              </span>
              <h1 
                className={`${oswald.className} uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[36px] md:text-[48px] lg:text-[56px]`}
              >
                Matrix Gym Software
              </h1>
              
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-slate-300 mb-8 leading-[1.6] font-light max-w-[540px]">
                A smarter digital platform for managing modern fitness businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/products/gym-mate"
                  className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
                >
                  EXPLORE GYM MATE <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative w-full flex justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-white">
                <Image
                  src="/images/product-gym.png"
                  alt="Matrix Gym Software Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* PROJECT INFO */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-xs text-slate-500 font-bold tracking-wider uppercase mb-1">Project</p>
              <p className="text-sm text-slate-900 font-medium">Matrix Gym Kochi</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold tracking-wider uppercase mb-1">Product</p>
              <p className="text-sm text-slate-900 font-medium">Gym Mate</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold tracking-wider uppercase mb-1">Industry</p>
              <p className="text-sm text-slate-900 font-medium">Fitness & Gym Management</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold tracking-wider uppercase mb-1">Albanix Contribution</p>
              <p className="text-sm text-slate-900 font-medium">Product Design, Software Dev, UI/UX</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 01 — THE CHALLENGE & 02 — THE SOLUTION */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                01 — THE CHALLENGE
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[32px] leading-[1.2] mb-6`}>
                Disconnected Operations
              </h2>
              <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-4">
                Matrix Gym needed a better way to manage its day-to-day gym operations, member information and administrative workflows.
              </p>
              <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed">
                The challenge was to bring important gym management activities into one organized digital system instead of relying on disconnected manual processes.
              </p>
            </div>
            <div>
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                02 — THE SOLUTION
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[32px] leading-[1.2] mb-6`}>
                Centralized Platform
              </h2>
              <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-4">
                Albanix developed Gym Mate, a purpose-built gym management platform designed around the operational needs of modern fitness businesses.
              </p>
              <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed">
                The platform helps gym teams manage members, memberships, attendance and everyday operations from a centralized system.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 & 04 — THE PLATFORM & KEY FEATURES */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              03 & 04 — THE PLATFORM
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
              KEY FEATURES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Member Management", 
                desc: "Manage member profiles and activity.", 
                icon: <Users className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "Membership Management", 
                desc: "Track memberships and subscription plans.", 
                icon: <CreditCard className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "Attendance Tracking", 
                desc: "Keep track of daily member attendance.", 
                icon: <CalendarCheck className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "Trainer Management", 
                desc: "Manage trainers and gym staff effectively.", 
                icon: <UserCheck className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "Payments & Renewals", 
                desc: "Track payments and upcoming renewals.", 
                icon: <Wallet className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "Business Dashboard", 
                desc: "Get a clear view of your gym's daily operations.", 
                icon: <LayoutDashboard className="w-6 h-6 text-[#0A84FF]" /> 
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0A84FF]/30 transition-all flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736] mb-3`}>{feature.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 — THE IMPACT & 06 — PRODUCT EXPERIENCE */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              05 & 06 — THE IMPACT & EXPERIENCE
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
              OPERATIONAL EXCELLENCE
            </h2>
            <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed">
              By transitioning to Gym Mate, Matrix Gym Kochi significantly improved their operational efficiency. Manual administrative tasks were drastically reduced, membership renewals became automated, and overall member management became a seamless experience, leading to better focus on customer satisfaction and growth.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/images/product-gym.png"
              alt="Gym Mate App Experience"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 07 — TECHNOLOGY */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              07 — TECHNOLOGY
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[32px] leading-[1.2] mb-12`}>
              POWERING GYM MATE
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map((tech) => (
                <div key={tech} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold shadow-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0B1736] text-white text-center relative overflow-hidden">
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6 uppercase`}>
            RUN YOUR GYM SMARTER
          </h2>
          <Link
            href="/products/gym-mate"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg shadow-md transition-all mb-12"
          >
            EXPLORE GYM MATE <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          
          <div className="pt-12 border-t border-slate-700 w-full flex justify-center md:justify-end">
            <Link href="/case-studies/sahara-technology" className="text-[#0A84FF] font-semibold hover:text-white transition-colors flex items-center">
              NEXT CASE STUDY: Sahara Technology <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
