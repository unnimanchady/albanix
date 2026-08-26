"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { Activity, Dumbbell, Utensils, Truck } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function ProductEcosystem() {
  return (
    <section className="pt-20 pb-24 md:pt-24 md:pb-32 bg-slate-50 border-b border-slate-200">
      <Container>
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-[#176BFF] font-semibold text-xs tracking-[0.2em] uppercase mb-4 block">
            THE ALBANIX ECOSYSTEM
          </span>
          <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[40px] lg:text-[46px] leading-[1.2] mb-6 uppercase tracking-[-0.5px]`}>
            ONE TECHNOLOGY ECOSYSTEM. <br className="hidden md:block" />
            MULTIPLE INDUSTRIES.
          </h2>
          <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed">
            From healthcare and fitness to restaurants and distribution, Albanix builds purpose-driven software platforms around real business needs.
          </p>
        </div>

        {/* Ecosystem Visualization */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Desktop Layout (Horizontal Tree) */}
          <div className="hidden lg:flex flex-col items-center relative">
            
            {/* Core Node */}
            <div className="relative z-20 w-40 h-16 bg-[#030814] rounded-xl flex items-center justify-center shadow-lg border border-[#176BFF]/30 mb-16">
              <span className="text-white font-bold tracking-widest text-lg">ALBANIX</span>
              {/* Down connecting line */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-10 bg-slate-300"></div>
            </div>

            {/* Horizontal Distribution Line */}
            <div className="absolute top-[104px] left-[12%] right-[12%] h-px bg-slate-300 z-0"></div>

            <div className="w-full flex justify-between relative z-10">
              {[
                { name: "TreatAnywhere", industry: "Healthcare", icon: <Activity className="w-6 h-6 text-[#176BFF]" /> },
                { name: "Gym Mate", industry: "Fitness", icon: <Dumbbell className="w-6 h-6 text-[#00C2E8]" /> },
                { name: "MenuPilot", industry: "Restaurant", icon: <Utensils className="w-6 h-6 text-[#16D6C5]" /> },
                { name: "RouteX", industry: "Distribution", icon: <Truck className="w-6 h-6 text-[#176BFF]" /> }
              ].map((node, i) => (
                <div key={i} className="flex flex-col items-center w-[20%] relative">
                  {/* Vertical connecting line to horizontal bus */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-6 bg-slate-300 mb-6"></div>
                  
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm mb-4 relative z-10 group hover:border-[#176BFF] transition-colors">
                    {node.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{node.name}</h4>
                  <span className="text-slate-500 text-sm">{node.industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout (Vertical Tree) */}
          <div className="lg:hidden flex flex-col items-center relative py-4">
            
            {/* Core Node */}
            <div className="relative z-20 w-40 h-14 bg-[#030814] rounded-xl flex items-center justify-center shadow-lg border border-[#176BFF]/30 mb-12">
              <span className="text-white font-bold tracking-widest">ALBANIX</span>
            </div>

            {/* Vertical spine */}
            <div className="absolute top-14 bottom-12 left-1/2 -translate-x-1/2 w-px bg-slate-300 z-0"></div>

            <div className="flex flex-col w-full gap-10 relative z-10">
              {[
                { name: "TreatAnywhere", industry: "Healthcare", icon: <Activity className="w-5 h-5 text-[#176BFF]" />, align: 'left' },
                { name: "Gym Mate", industry: "Fitness", icon: <Dumbbell className="w-5 h-5 text-[#00C2E8]" />, align: 'right' },
                { name: "MenuPilot", industry: "Restaurant", icon: <Utensils className="w-5 h-5 text-[#16D6C5]" />, align: 'left' },
                { name: "RouteX", industry: "Distribution", icon: <Truck className="w-5 h-5 text-[#176BFF]" />, align: 'right' }
              ].map((node, i) => (
                <div key={i} className={`flex items-center w-full ${node.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  <div className={`w-1/2 flex flex-col ${node.align === 'left' ? 'items-end pr-8' : 'items-start pl-8'}`}>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{node.name}</h4>
                    <span className="text-slate-500 text-sm">{node.industry}</span>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                    {node.icon}
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
