import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Case Study: Gym Mate | Albanix",
  description: "Gym Mate is a purpose-built gym management platform designed to help fitness businesses manage members, memberships and operations.",
};

export default function GymMateCaseStudy() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[100px] md:pt-[120px] pb-20 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="max-w-4xl">
            <span className="text-[#176BFF] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-6 block">
              Gym Software · Business Management · Fitness Technology
            </span>
            <h1 className={`${oswald.className} uppercase tracking-tight mb-8 leading-[1.1] text-[40px] md:text-[56px] lg:text-[64px] text-[#0B1736]`}>
              Gym Mate — Gym Management Software
            </h1>
            <p className="text-[20px] md:text-[24px] text-slate-600 leading-relaxed font-light">
              A purpose-built gym management platform designed to help fitness businesses manage members, memberships and everyday operations from one centralized system.
            </p>
          </div>
        </Container>
      </section>

      {/* MAIN VISUAL */}
      <section className="mb-20 md:mb-32">
        <Container>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/images/product-gym.png"
              alt="Gym Mate Dashboard"
              fill
              className="object-cover object-top"
            />
          </div>
        </Container>
      </section>

      {/* CONTENT DIVIDER */}
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* MAIN CONTENT */}
          <div className="lg:w-2/3 space-y-16">
            
            <section>
              <h2 className={`${oswald.className} text-3xl text-[#0B1736] mb-6 uppercase`}>The Challenge</h2>
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  Managing gym operations can involve multiple administrative tasks, member records and recurring activities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Fitness centers often struggle with disconnected manual processes, making it difficult to maintain accurate member data, track subscription renewals, and organize everyday operational workflows effectively.
                </p>
              </div>
            </section>

            <section>
              <h2 className={`${oswald.className} text-3xl text-[#0B1736] mb-6 uppercase`}>The Solution</h2>
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  Albanix developed Gym Mate as a centralized gym management platform designed around the operational needs of modern fitness businesses.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The software provides gym teams with the necessary digital tools to manage members, memberships, attendance and everyday operations from a unified, easy-to-use interface.
                </p>
              </div>
            </section>

            <section className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h2 className={`${oswald.className} text-3xl text-[#0B1736] mb-8 uppercase`}>Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Member Management",
                  "Membership Management",
                  "Attendance Tracking",
                  "Plans & Subscriptions",
                  "Payments Processing",
                  "Analytical Dashboard",
                  "Business Reports",
                  "Staff / Operations"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#176BFF] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={`${oswald.className} text-3xl text-[#0B1736] mb-6 uppercase`}>Final Result</h2>
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  Gym Mate successfully brought important gym management activities into one organized digital system instead of relying on disconnected manual processes.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The deployment resulted in centralized day-to-day operations and structured business workflows, enabling fitness teams to focus more on their members and less on administration.
                </p>
              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3">
            <div className="sticky top-[120px] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className={`${oswald.className} text-xl text-[#0B1736] mb-6 uppercase`}>Project Overview</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Product Type</span>
                  <span className="text-slate-800 font-medium">SaaS / Software Product</span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Industry</span>
                  <span className="text-slate-800 font-medium">Fitness & Wellness</span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Core Benefit</span>
                  <span className="text-slate-800 font-medium">Centralized gym operations</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <Link
                  href="/products/gym-mate"
                  className="flex items-center justify-center w-full h-14 bg-[#176BFF] text-white text-[15px] font-bold rounded-xl hover:bg-[#0B1736] hover:shadow-lg transition-all group"
                >
                  EXPLORE GYM MATE 
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* NEXT PROJECT */}
      <section className="mt-24 md:mt-32 border-t border-slate-200 bg-slate-50">
        <Link href="/case-studies/routex" className="block py-20 group hover:bg-[#0B1736] transition-colors duration-500">
          <Container>
            <div className="flex flex-col items-center text-center">
              <span className="text-slate-500 font-bold text-sm tracking-[0.2em] uppercase mb-4 group-hover:text-[#00C2E8] transition-colors">
                Next Case Study
              </span>
              <h2 className={`${oswald.className} text-4xl md:text-5xl lg:text-6xl text-[#0B1736] uppercase group-hover:text-white transition-colors`}>
                RouteX Van Sales
              </h2>
            </div>
          </Container>
        </Link>
      </section>

    </div>
  );
}
