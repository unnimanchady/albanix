import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Case Study: Sahara Technology | Albanix",
  description: "A modern corporate website designed to present Sahara Technology's technology, security and ICT solutions.",
};

export default function SaharaTechnologyCaseStudy() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[100px] md:pt-[120px] pb-20 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="max-w-4xl">
            <span className="text-[#176BFF] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-6 block">
              Corporate Website · Technology · ICT · Security Solutions
            </span>
            <h1 className={`${oswald.className} uppercase tracking-tight mb-8 leading-[1.1] text-[40px] md:text-[56px] lg:text-[64px] text-[#0B1736]`}>
              Sahara Technology — Digital Experience for an ICT & Security Company
            </h1>
            <p className="text-[20px] md:text-[24px] text-slate-600 leading-relaxed font-light">
              A modern corporate website designed to present Sahara Technology's technology, security and ICT solutions through a clear and professional digital experience.
            </p>
          </div>
        </Container>
      </section>

      {/* MAIN VISUAL */}
      <section className="mb-20 md:mb-32">
        <Container>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/images/portfolio_sahara.jpg"
              alt="Sahara Technology Website Design"
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
              <h2 className={`${oswald.className} text-3xl text-[#0B1736] mb-6 uppercase`}>Project Overview</h2>
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  Sahara Technology provides technology and security solutions including CCTV and surveillance, access control, network solutions, audio visual solutions and maintenance/support.
                </p>
              </div>
            </section>

            <section>
              <h2 className={`${oswald.className} text-3xl text-[#0B1736] mb-6 uppercase`}>The Challenge</h2>
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  The website needed to communicate a broad range of technology services clearly while presenting Sahara Technology as a professional technology partner.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The challenge was to organize their extensive catalog of security and ICT solutions into an intuitive navigation structure without overwhelming the user.
                </p>
              </div>
            </section>

            <section>
              <h2 className={`${oswald.className} text-3xl text-[#0B1736] mb-6 uppercase`}>The Solution</h2>
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  Albanix created a modern corporate web experience with structured service presentation, clear navigation, strong visual hierarchy and responsive layouts.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The new digital experience allows potential clients to easily explore Sahara Technology's offerings and confidently initiate contact for project consultations.
                </p>
              </div>
            </section>

            <section className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h2 className={`${oswald.className} text-3xl text-[#0B1736] mb-8 uppercase`}>Key Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Corporate Website",
                  "Service Presentation",
                  "Technology Solutions",
                  "Responsive Design",
                  "UX/UI Design",
                  "Clear Navigation",
                  "Contact & Enquiry Experience"
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
                  The project delivered a clearer digital presentation that accurately reflects Sahara Technology's expertise in the ICT and security sectors.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The responsive digital experience ensures that visitors can effortlessly discover services across all devices, establishing a stronger online presence for the company.
                </p>
              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3">
            <div className="sticky top-[120px] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className={`${oswald.className} text-xl text-[#0B1736] mb-6 uppercase`}>Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Client</span>
                  <span className="text-slate-800 font-medium">Sahara Technology</span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Industry</span>
                  <span className="text-slate-800 font-medium">Technology & Security</span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Project Type</span>
                  <span className="text-slate-800 font-medium">Corporate Website</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <a
                  href="https://www.saharatechno.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-14 bg-[#176BFF] text-white text-[15px] font-bold rounded-xl hover:bg-[#0B1736] hover:shadow-lg transition-all group"
                >
                  VISIT WEBSITE 
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform -rotate-45" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* NEXT PROJECT */}
      <section className="mt-24 md:mt-32 border-t border-slate-200 bg-slate-50">
        <Link href="/case-studies/gym-mate" className="block py-20 group hover:bg-[#0B1736] transition-colors duration-500">
          <Container>
            <div className="flex flex-col items-center text-center">
              <span className="text-slate-500 font-bold text-sm tracking-[0.2em] uppercase mb-4 group-hover:text-[#00C2E8] transition-colors">
                Next Case Study
              </span>
              <h2 className={`${oswald.className} text-4xl md:text-5xl lg:text-6xl text-[#0B1736] uppercase group-hover:text-white transition-colors`}>
                Gym Mate Software
              </h2>
            </div>
          </Container>
        </Link>
      </section>

    </div>
  );
}
