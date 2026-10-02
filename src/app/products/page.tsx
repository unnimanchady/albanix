"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  CheckCircle2,
  Network,
  LineChart,
  Maximize,
  Target,
  HeartPulse,
  Dumbbell,
  Utensils,
  Truck,
  Check
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/albanix-products.webp"
            alt="Our Products"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/albanix-products.webp"
            alt="Our Products"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/35 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/90 via-[#030814]/60 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center pt-8 pb-12 md:py-12 md:min-h-[460px] lg:min-h-[500px]">
          
          <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Products</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block drop-shadow-md">
              OUR PRODUCTS
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              SOFTWARE PLATFORMS <br className="hidden md:block" />
              FOR EVERY INDUSTRY.
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide">
              Integrated. Intelligent. Impactful.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light">
              Purpose-built software platforms designed to help businesses operate smarter, serve customers better and grow with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start">
              <Link
                href="#products"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                EXPLORE OUR PRODUCTS <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Floating UI Overlays for Hero Image */}
          <div className="hidden md:block w-[50%] lg:w-[55%] relative h-full">
            {/* Card 1 */}
            <div className="absolute right-[2%] top-[10%] w-[320px] bg-[#071328]/80 backdrop-blur-md border border-[#176BFF]/30 rounded-xl p-5 shadow-2xl z-30">
              <div className="flex items-center gap-2 mb-3 text-white">
                <HeartPulse className="w-5 h-5 text-[#00C2E8]" />
                <span className="font-semibold text-sm">TreatAnywhere</span>
              </div>
              <div className="text-xs text-slate-400 mb-3">New Treatment Request</div>
              <div className="bg-[#030814]/60 border border-slate-700/50 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-2 text-[#00C2E8] mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold text-sm">Request Submitted</span>
                </div>
                <div className="text-xs text-slate-400">
                  Your request has been sent to hospitals.
                </div>
              </div>
              <button className="text-[#00C2E8] text-xs font-medium flex items-center hover:text-white transition-colors">
                View Responses <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="absolute right-[2%] bottom-[10%] w-[360px] bg-[#071328]/80 backdrop-blur-md border border-[#176BFF]/30 rounded-xl p-5 shadow-2xl z-30">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Network className="w-5 h-5 text-slate-400" />
                <span className="font-semibold text-sm">Hospital Responses</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <HeartPulse className="w-4 h-4 text-slate-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Global Care Hospital</div>
                      <div className="text-[10px] text-slate-400">Mumbai, India</div>
                    </div>
                  </div>
                  <div className="text-[11px] font-medium text-[#00C2E8] bg-[#00C2E8]/10 px-2 py-0.5 rounded">2 Responses</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <HeartPulse className="w-4 h-4 text-slate-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">City Medical Centre</div>
                      <div className="text-[10px] text-slate-400">Bangalore, India</div>
                    </div>
                  </div>
                  <div className="text-[11px] font-medium text-[#00C2E8] bg-[#00C2E8]/10 px-2 py-0.5 rounded">1 Response</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <HeartPulse className="w-4 h-4 text-slate-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Sunrise Hospitals</div>
                      <div className="text-[10px] text-slate-400">Hyderabad, India</div>
                    </div>
                  </div>
                  <div className="text-[11px] font-medium text-[#00C2E8] bg-[#00C2E8]/10 px-2 py-0.5 rounded">1 Response</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-center">
                <button className="text-[#00C2E8] text-xs font-medium flex items-center hover:text-white transition-colors">
                  View All Responses <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-24 bg-white relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Image */}
            <div className="relative h-[320px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/industrial_ai_intro_light.png"
                alt="Albanix Software Dashboard"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right Text */}
            <div>
              <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                INTRODUCTION
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6 uppercase`}>
                SOFTWARE BUILT AROUND <br className="hidden md:block" />
                REAL BUSINESS NEEDS.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 md:space-y-6 leading-relaxed">
                <p>
                  Albanix creates purpose-built software platforms designed around the real workflows of modern businesses.
                </p>
                <p>
                  From healthcare and fitness to restaurants and distribution, our platforms connect people, processes and data to help businesses operate smarter.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. MAIN PRODUCTS SECTION */}
      <section id="products" className="py-0 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="flex flex-col">
            
            {/* PRODUCT 1: TREATANYWHERE (Text Left, Image Right) */}
            <div id="healthcare" className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-20">
              <div className="order-2 lg:order-1">
                <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                  HEALTHCARE TECHNOLOGY
                </span>
                <h3 className={`${oswald.className} text-slate-900 text-[32px] md:text-[40px] leading-none mb-3`}>
                  TREATANYWHERE
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-[#176BFF] mb-6">
                  HEALTHCARE WITHOUT BORDERS.
                </h4>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  A global healthcare platform that connects patients with trusted hospitals and treatment opportunities worldwide.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Treatment Requests", "Hospital Discovery", "Hospital Responses", "Treatment Comparison", "Medical Documents"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <Check className="w-5 h-5 text-[#00C2E8] mr-3 shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/products/treatanywhere" className="inline-flex items-center text-[#176BFF] font-bold hover:text-blue-700 transition-colors">
                  EXPLORE TREATANYWHERE <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200">
                <Image src="/images/product-treatanywhere.png" alt="TreatAnywhere UI" fill className="object-cover object-left-top" />
              </div>
            </div>

            <hr className="border-slate-200 w-full m-0" />

            {/* PRODUCT 2: GYM MATE (Image Left, Text Right) */}
            <div id="fitness" className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-20">
              <div className="order-1 relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200">
                <Image src="/images/product-gym.png" alt="Gym Mate UI" fill className="object-cover object-left-top" />
              </div>
              <div className="order-2">
                <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                  FITNESS MANAGEMENT
                </span>
                <h3 className={`${oswald.className} text-slate-900 text-[32px] md:text-[40px] leading-none mb-3`}>
                  GYM MATE
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-[#176BFF] mb-6">
                  RUN YOUR FITNESS BUSINESS SMARTER.
                </h4>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Complete gym management software to streamline memberships, billing, classes, trainers and performance.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Membership Management", "Billing & Payments", "Classes & Scheduling", "Trainer Management", "Performance Tracking"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <Check className="w-5 h-5 text-[#00C2E8] mr-3 shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/products/gym-mate" className="inline-flex items-center text-[#176BFF] font-bold hover:text-blue-700 transition-colors">
                  EXPLORE GYM MATE <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <hr className="border-slate-200 w-full m-0" />

            {/* PRODUCT 3: MENUPILOT (Text Left, Image Right) */}
            <div id="hospitality" className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-20">
              <div className="order-2 lg:order-1">
                <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                  RESTAURANT TECHNOLOGY
                </span>
                <h3 className={`${oswald.className} text-slate-900 text-[32px] md:text-[40px] leading-none mb-3`}>
                  MENUPILOT
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-[#176BFF] mb-6">
                  FROM ORDER TO CUSTOMER DELIGHT.
                </h4>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Power your restaurant operations with POS, kitchen management, inventory, delivery and analytics.
                </p>
                <ul className="space-y-4 mb-10">
                  {["POS & Billing", "Kitchen Management", "Inventory", "Order Management", "Delivery", "Analytics"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <Check className="w-5 h-5 text-[#00C2E8] mr-3 shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/products/menupilot" className="inline-flex items-center text-[#176BFF] font-bold hover:text-blue-700 transition-colors">
                  EXPLORE MENUPILOT <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200">
                <Image src="/images/product-restaurant.png" alt="MenuPilot UI" fill className="object-cover object-left-top" />
              </div>
            </div>

            <hr className="border-slate-200 w-full m-0" />

            {/* PRODUCT 4: ROUTEX (Image Left, Text Right) */}
            <div id="distribution" className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-20">
              <div className="order-1 relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200">
                <Image src="/images/product-van-sales.png" alt="RouteX UI" fill className="object-cover object-left-top" />
              </div>
              <div className="order-2">
                <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                  DISTRIBUTION TECHNOLOGY
                </span>
                <h3 className={`${oswald.className} text-slate-900 text-[32px] md:text-[40px] leading-none mb-3`}>
                  ROUTEX
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-[#176BFF] mb-6">
                  DISTRIBUTION THAT MOVES WITH YOU.
                </h4>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Manage van sales, inventory, routes, orders, collections and customer relationships in real-time.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Van Sales", "Inventory", "Route Management", "Orders", "Collections", "Customer Management"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <Check className="w-5 h-5 text-[#00C2E8] mr-3 shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/products/routex" className="inline-flex items-center text-[#176BFF] font-bold hover:text-blue-700 transition-colors">
                  EXPLORE ROUTEX <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. WHY ALBANIX */}
      <section className="py-20 md:py-28 bg-[#030814] text-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block drop-shadow-md">
              WHY ALBANIX
            </span>
            <h2 className={`${oswald.className} text-[32px] md:text-[42px] leading-[1.2] mb-4 uppercase drop-shadow-md`}>
              TECHNOLOGY BUILT <br className="hidden md:block" /> FOR REAL-WORLD IMPACT.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#071328] border border-[#176BFF]/30 flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-[#00C2E8]" />
              </div>
              <h3 className={`${oswald.className} text-xl tracking-wide mb-3 uppercase`}>INTEGRATED</h3>
              <p className="text-white/70 font-light">Seamless experience across platforms.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#071328] border border-[#176BFF]/30 flex items-center justify-center mb-6">
                <LineChart className="w-8 h-8 text-[#00C2E8]" />
              </div>
              <h3 className={`${oswald.className} text-xl tracking-wide mb-3 uppercase`}>INTELLIGENT</h3>
              <p className="text-white/70 font-light">Data-driven insights that enable better decisions.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#071328] border border-[#176BFF]/30 flex items-center justify-center mb-6">
                <Maximize className="w-8 h-8 text-[#00C2E8]" />
              </div>
              <h3 className={`${oswald.className} text-xl tracking-wide mb-3 uppercase`}>SCALABLE</h3>
              <p className="text-white/70 font-light">Built to grow with your business.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#071328] border border-[#176BFF]/30 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#00C2E8]" />
              </div>
              <h3 className={`${oswald.className} text-xl tracking-wide mb-3 uppercase`}>SECURE</h3>
              <p className="text-white/70 font-light">Enterprise-grade security you can trust.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. INDUSTRIES */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              INDUSTRIES WE SERVE
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[42px] leading-[1.2] mb-4 uppercase`}>
              SOFTWARE FOR THE WAY <br className="hidden md:block" /> BUSINESSES WORK.
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:shadow-lg transition-all">
                <HeartPulse className="w-10 h-10 text-[#176BFF]" />
              </div>
              <h3 className="font-bold text-slate-900">Healthcare</h3>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:shadow-lg transition-all">
                <Dumbbell className="w-10 h-10 text-[#176BFF]" />
              </div>
              <h3 className="font-bold text-slate-900">Fitness</h3>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:shadow-lg transition-all">
                <Utensils className="w-10 h-10 text-[#176BFF]" />
              </div>
              <h3 className="font-bold text-slate-900">Restaurants</h3>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:shadow-lg transition-all">
                <Truck className="w-10 h-10 text-[#176BFF]" />
              </div>
              <h3 className="font-bold text-slate-900">Distribution</h3>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#176BFF] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-tight mb-6`}>
              READY TO BUILD WHAT&apos;S NEXT?
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              Let&apos;s create intelligent software that moves your business forward.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              TALK TO US <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
      
    </div>
  );
}
