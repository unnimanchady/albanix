"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { ArrowRight } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#F1F5F9] relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#CBD5E1_1px,_transparent_1px)] [background-size:24px_24px]"></div>
      
      <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
        <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-slate-900 leading-[1.1] mb-6 uppercase`}>
          READY TO BUILD <br />
          WHAT'S NEXT?
        </h2>
        <p className="text-slate-600 text-[16px] md:text-lg mb-10 max-w-md">
          Talk to Albanix about building intelligent software for your business.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center w-full sm:w-auto h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-[7px] hover:bg-blue-700 hover:shadow-lg shadow-md transition-all group"
          >
            TALK TO US <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/industrial-ai"
            className="inline-flex items-center justify-center w-full sm:w-auto h-[54px] px-10 bg-white border border-slate-300 text-slate-800 text-[15px] font-bold rounded-[7px] hover:bg-slate-50 hover:shadow-md transition-all group"
          >
            EXPLORE OUR TECHNOLOGY <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
