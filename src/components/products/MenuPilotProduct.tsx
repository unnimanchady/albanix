"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  BookOpen,
  ClipboardList,
  Grid,
  CreditCard,
  UtensilsCrossed,
  BarChart3,
  Zap,
  CheckCircle2,
  Network,
  Eye,
  Utensils,
  Coffee,
  Globe,
  Timer,
  Cloud,
  Store,
  Users,
  Package
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function MenuPilotProduct() {
  return (
    <div id="menupilot-product" className="w-full flex flex-col">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          <img
            src="/images/menupilot-hero.jpg"
            alt="Restaurant Management Software"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          <img
            src="/images/menupilot-hero.jpg"
            alt="Restaurant Management Software"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/35 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/90 via-[#030814]/70 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 pb-12 md:py-12 md:min-h-[460px] lg:min-h-[500px]">
          
          <div className="w-full max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white">MenuPilot</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              OUR PRODUCTS
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              RESTAURANT MANAGEMENT <br className="hidden md:block" />
              SOFTWARE
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide">
              SMARTER RESTAURANTS. SIMPLER OPERATIONS.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light drop-shadow-md">
              MenuPilot brings restaurant operations together in one simple platform, helping teams manage menus, orders, tables, billing and daily service more efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="#contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                EXPLORE MENUPILOT <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/30 text-white text-[15px] font-bold rounded-md hover:bg-white/10 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                GET IN TOUCH <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Image */}
            <div className="relative h-[320px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/product-restaurant.png"
                alt="MenuPilot Interface"
                fill
                className="object-cover object-left-top"
              />
            </div>
            
            {/* Right Text */}
            <div>
              <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                INTRODUCTION
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4 uppercase`}>
                RESTAURANT MANAGEMENT, SIMPLIFIED.
              </h2>
              <h3 className="text-xl font-bold text-[#176BFF] mb-6">
                Everything you need to run your restaurant more efficiently.
              </h3>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-8">
                MenuPilot connects the essential parts of restaurant operations in one easy-to-use system. From menu management and customer orders to tables, billing and kitchen coordination, it helps restaurant teams work together and serve customers better.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">1. EASY TO USE</h4>
                  <p className="text-slate-600 text-sm">Simple tools designed for busy restaurant teams.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">2. FASTER SERVICE</h4>
                  <p className="text-slate-600 text-sm">Manage orders and service with less manual work.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Network className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">3. CONNECTED OPERATIONS</h4>
                  <p className="text-slate-600 text-sm">Keep front-of-house, kitchen and management connected.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">4. BETTER CONTROL</h4>
                  <p className="text-slate-600 text-sm">Get clearer visibility into daily restaurant operations.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-20 md:py-28 bg-[#030814] text-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block drop-shadow-md">
              CORE CAPABILITIES
            </span>
            <h2 className={`${oswald.className} text-[32px] md:text-[42px] leading-[1.2] uppercase drop-shadow-md`}>
              EVERYTHING YOUR RESTAURANT NEEDS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: BookOpen, 
                title: "1. MENU MANAGEMENT", 
                desc: "Create, organize and update menus, dishes, prices and availability." 
              },
              { 
                icon: ClipboardList, 
                title: "2. ORDER MANAGEMENT", 
                desc: "Capture and manage customer orders quickly and accurately." 
              },
              { 
                icon: Grid, 
                title: "3. TABLE MANAGEMENT", 
                desc: "Manage tables, seating and active orders." 
              },
              { 
                icon: CreditCard, 
                title: "4. BILLING & PAYMENTS", 
                desc: "Create bills and simplify the checkout process." 
              },
              { 
                icon: UtensilsCrossed, 
                title: "5. KITCHEN OPERATIONS", 
                desc: "Keep kitchen teams updated with clear order information." 
              },
              { 
                icon: BarChart3, 
                title: "6. SALES REPORTING", 
                desc: "Track sales and understand restaurant performance." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#071328]/60 backdrop-blur-sm border border-[#176BFF]/20 rounded-2xl p-8 hover:border-[#176BFF]/50 transition-colors group relative overflow-hidden">
                <div className="w-14 h-14 rounded-full bg-[#030814] border border-[#00C2E8]/30 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#00C2E8]" />
                </div>
                <h3 className={`${oswald.className} text-xl tracking-wide mb-3 uppercase group-hover:text-[#00C2E8] transition-colors`}>
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light mb-6">
                  {feature.desc}
                </p>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-[#00C2E8]" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. MENUPILOT FEATURES */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              A CONNECTED RESTAURANT PLATFORM
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: BookOpen, name: "Digital Menus" },
              { icon: ClipboardList, name: "Order Management" },
              { icon: Grid, name: "Table Management" },
              { icon: CreditCard, name: "Billing" },
              { icon: UtensilsCrossed, name: "Kitchen Coordination" },
              { icon: Users, name: "Customer Management" },
              { icon: Package, name: "Product Management" },
              { icon: BarChart3, name: "Sales Reports" },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl py-8 px-4 hover:shadow-lg transition-shadow text-center">
                <feature.icon className="w-8 h-8 text-[#176BFF] mb-3" strokeWidth={1.5} />
                <span className="font-semibold text-slate-800 text-[15px]">{feature.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. RESTAURANT TYPES */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              BUILT FOR HOSPITALITY
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              MENUPILOT FOR EVERY RESTAURANT
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Utensils, name: "Restaurants" },
              { icon: Coffee, name: "Cafés" },
              { icon: Globe, name: "Multi-Cuisine Restaurants" },
              { icon: Timer, name: "Quick-Service Restaurants" },
              { icon: Cloud, name: "Cloud Kitchens" },
              { icon: Store, name: "Food Service Businesses" },
            ].map((industry, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-7 h-7 text-[#176BFF]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{industry.name}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              FROM MENU TO CUSTOMER
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: "01", title: "MENU", desc: "Manage dishes, prices and availability." },
              { num: "02", title: "ORDER", desc: "Capture customer orders quickly." },
              { num: "03", title: "PREPARE", desc: "Send clear order information to the kitchen." },
              { num: "04", title: "SERVE", desc: "Complete the order and manage billing." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[40px] font-bold text-[#176BFF]/20 mb-4">{step.num}</div>
                <h3 className={`${oswald.className} text-xl tracking-wide mb-3 uppercase text-slate-900`}>{step.title}</h3>
                <p className="text-slate-600 font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C2E8] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-tight mb-6`}>
              RUN YOUR RESTAURANT SMARTER.
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              Bring your restaurant operations together with MenuPilot.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              TALK TO ALBANIX <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
      
    </div>
  );
}
