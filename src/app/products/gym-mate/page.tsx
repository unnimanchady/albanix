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

export default function GymMatePage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="order-2 lg:order-1 flex flex-col justify-center max-w-2xl">
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center space-x-2 text-[13px] md:text-[14px] text-slate-500 font-medium tracking-wide">
                <Link href="/" className="hover:text-[#0A84FF] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-[#0A84FF] transition-colors">Products</Link>
                <span>/</span>
                <span className="text-[#0B1736]">Gym Mate</span>
              </div>

              <span className="text-[#0A84FF] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
                GYM MATE
              </span>
              <h1 
                className={`${oswald.className} text-[#0B1736] uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[36px] md:text-[48px] lg:text-[56px]`}
              >
                RUN YOUR FITNESS <br className="hidden md:block" /> BUSINESS SMARTER.
              </h1>
              
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-slate-600 mb-8 leading-[1.6] font-light max-w-[540px]">
                Gym Mate is a complete gym management platform that helps fitness businesses manage members, memberships, trainers, attendance and daily operations from one place.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
                >
                  EXPLORE GYM MATE <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-white border border-slate-300 text-[#0B1736] text-[15px] font-bold rounded-md hover:bg-slate-50 hover:border-[#0A84FF]/50 transition-all w-full sm:w-auto text-center shadow-sm"
                >
                  GET STARTED <ArrowRight className="ml-2 w-4 h-4 text-[#0A84FF]" />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative w-full flex justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <Image
                  src="/images/product-gym.png"
                  alt="Gym Mate Management Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              FITNESS BUSINESS MANAGEMENT
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
              EVERYTHING YOUR GYM NEEDS. IN ONE PLACE.
            </h2>
            <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed">
              Gym Mate simplifies everyday gym management by bringing members, memberships, attendance, trainers and business operations together in one easy-to-use platform.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Member Management", 
                desc: "Manage member profiles, plans and activity.", 
                icon: <Users className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "Membership Management", 
                desc: "Track memberships, renewals and subscriptions.", 
                icon: <CreditCard className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "Attendance Tracking", 
                desc: "Keep track of daily member attendance.", 
                icon: <CalendarCheck className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "Trainer Management", 
                desc: "Manage trainers, schedules and assignments.", 
                icon: <UserCheck className="w-6 h-6 text-[#0A84FF]" /> 
              },
              { 
                title: "Payments & Renewals", 
                desc: "Track payments, plans and upcoming renewals.", 
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

      {/* 4. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0B1736] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6`}>
            READY TO MANAGE YOUR GYM SMARTER?
          </h2>
          <p className="text-white/80 text-[16px] md:text-[18px] mb-10 leading-relaxed max-w-lg font-light">
            Give your fitness business a simpler way to manage everyday operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg shadow-md transition-all"
          >
            EXPLORE GYM MATE <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>

    </div>
  );
}
