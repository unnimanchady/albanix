"use client";

import React from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { ArrowRight, Activity, Dumbbell, Utensils, Truck } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function ProductsHero() {
  return (
    <section id="products" className="relative w-full flex flex-col lg:block lg:h-[500px] xl:h-[540px] bg-[#030814] overflow-hidden">
      
      {/* Background Visual Composition */}
      <div className="absolute inset-0 z-0 flex items-center justify-end overflow-hidden opacity-30 lg:opacity-100">
        <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center translate-x-0 lg:translate-x-20">
           {/* Abstract glowing background */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#176BFF]/20 to-[#00C2E8]/20 rounded-full blur-[80px]"></div>
           
           {/* Ecosystem Grid/Nodes */}
           <div className="relative w-[400px] h-[400px] animate-[spin_60s_linear_infinite]">
             
             {/* Center Node */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#070F1E] border border-[#176BFF]/30 rounded-xl shadow-[0_0_30px_rgba(23,107,255,0.2)] flex items-center justify-center z-20">
               <span className="text-white font-bold tracking-widest text-xs">ALBANIX</span>
             </div>

             {/* Node 1 - TreatAnywhere */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#030814] border border-[#176BFF]/50 rounded-full flex items-center justify-center z-10 animate-[spin_60s_linear_infinite_reverse]">
               <Activity className="w-6 h-6 text-[#176BFF]" />
             </div>
             
             {/* Node 2 - Gym Mate */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-[#030814] border border-[#00C2E8]/50 rounded-full flex items-center justify-center z-10 animate-[spin_60s_linear_infinite_reverse]">
               <Dumbbell className="w-6 h-6 text-[#00C2E8]" />
             </div>

             {/* Node 3 - MenuPilot */}
             <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#030814] border border-[#16D6C5]/50 rounded-full flex items-center justify-center z-10 animate-[spin_60s_linear_infinite_reverse]">
               <Utensils className="w-6 h-6 text-[#16D6C5]" />
             </div>

             {/* Node 4 - RouteX */}
             <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#030814] border border-[#176BFF]/50 rounded-full flex items-center justify-center z-10 animate-[spin_60s_linear_infinite_reverse]">
               <Truck className="w-6 h-6 text-[#176BFF]" />
             </div>

             {/* Connecting Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
               <line x1="200" y1="200" x2="200" y2="0" stroke="#176BFF" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
               <line x1="200" y1="200" x2="200" y2="400" stroke="#00C2E8" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
               <line x1="200" y1="200" x2="0" y2="200" stroke="#16D6C5" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
               <line x1="200" y1="200" x2="400" y2="200" stroke="#176BFF" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
             </svg>
           </div>
        </div>
      </div>
      
      {/* Dark Overlays for Text Readability */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#030814] via-[#030814]/80 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 pb-16 lg:pt-0 lg:pb-0 lg:h-full">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Products</span>
        </div>

        <div className="w-full max-w-2xl">
          <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block drop-shadow-md">
            OUR PRODUCTS
          </span>
          <h1 
            className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.1] text-[36px] md:text-[48px] lg:text-[56px] drop-shadow-md`}
          >
            SOFTWARE PLATFORMS <br className="hidden md:block" />
            FOR EVERY INDUSTRY.
          </h1>
          
          <p className="text-[20px] md:text-[24px] text-white font-medium mb-3 drop-shadow-md">
            Integrated. Intelligent. Impactful.
          </p>

          <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light drop-shadow-md">
            Purpose-built software platforms that help businesses operate smarter, serve customers better and scale with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="#products"
              className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
            >
              EXPLORE OUR PRODUCTS <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[15px] font-bold rounded-md hover:bg-white/20 transition-all w-full sm:w-auto text-center"
            >
              TALK TO OUR EXPERTS <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
