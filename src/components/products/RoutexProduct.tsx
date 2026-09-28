"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Truck,
  Users,
  Package,
  ShoppingCart,
  Boxes,
  BarChart3,
  FastForward,
  Eye,
  Network,
  LineChart,
  Store,
  MapPin,
  Coffee,
  ShoppingBag,
  Building2
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function RoutexProduct() {
  return (
    <div id="routex" className="w-full flex flex-col">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          <img
            src="/images/routex-hero.jpg"
            alt="Van Sales Management System"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          <img
            src="/images/routex-hero.jpg"
            alt="Van Sales Management System"
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
              <span className="text-white">RouteX</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              ALBANIX PRODUCTS
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              VAN SALES MANAGEMENT <br className="hidden md:block" />
              SYSTEM
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide">
              Move Sales. Manage Distribution. Grow Smarter.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light drop-shadow-md">
              Manage van sales, customers, products, orders and field distribution with a simple system built for businesses that sell on the move.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="#contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                GET STARTED <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/30 text-white text-[15px] font-bold rounded-md hover:bg-white/10 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                CONTACT US <ArrowRight className="ml-2 w-4 h-4" />
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
                src="/images/product-van-sales.png"
                alt="RouteX Dashboard"
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
                SMARTER VAN SALES MANAGEMENT
              </h2>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-6">
                RouteX is designed for businesses that sell and distribute products directly to customers through sales vans and field sales teams.
              </p>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-8">
                It helps sales teams manage their daily operations while giving business owners better visibility into customers, orders, inventory and sales performance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-20 md:py-28 bg-[#030814] text-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block drop-shadow-md">
              FEATURES
            </span>
            <h2 className={`${oswald.className} text-[32px] md:text-[42px] leading-[1.2] uppercase drop-shadow-md`}>
              KEY CAPABILITIES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: Truck, 
                title: "1. VAN SALES", 
                desc: "Manage daily sales directly from the field." 
              },
              { 
                icon: Users, 
                title: "2. CUSTOMER MANAGEMENT", 
                desc: "Maintain customer information, locations and sales history." 
              },
              { 
                icon: Package, 
                title: "3. PRODUCT MANAGEMENT", 
                desc: "Manage products, pricing and availability." 
              },
              { 
                icon: ShoppingCart, 
                title: "4. ORDER MANAGEMENT", 
                desc: "Create and track customer orders quickly." 
              },
              { 
                icon: Boxes, 
                title: "5. INVENTORY CONTROL", 
                desc: "Monitor stock movement and product availability." 
              },
              { 
                icon: BarChart3, 
                title: "6. SALES REPORTS", 
                desc: "Understand sales performance with clear reports." 
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. HOW ROUTEX WORKS */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              FROM VAN TO CUSTOMER
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: "01", title: "LOAD", desc: "Prepare products and stock for the sales route." },
              { num: "02", title: "VISIT", desc: "Sales representatives visit customers along their route." },
              { num: "03", title: "SELL", desc: "Create orders and record sales directly from the field." },
              { num: "04", title: "TRACK", desc: "Business owners can monitor sales and distribution activity." },
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

      {/* 5. BUSINESS BENEFITS */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              BUILT FOR DISTRIBUTION BUSINESSES
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                <FastForward className="w-8 h-8 text-[#176BFF]" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">FASTER SALES</h3>
              <p className="text-slate-600">Reduce manual work and speed up order processing.</p>
            </div>
            
            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                <Eye className="w-8 h-8 text-[#176BFF]" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">BETTER CONTROL</h3>
              <p className="text-slate-600">Know what products are being sold and where.</p>
            </div>
            
            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                <Network className="w-8 h-8 text-[#176BFF]" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">CONNECTED TEAMS</h3>
              <p className="text-slate-600">Keep field sales and management connected.</p>
            </div>
            
            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                <LineChart className="w-8 h-8 text-[#176BFF]" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">CLEAR VISIBILITY</h3>
              <p className="text-slate-600">Get a clearer view of daily sales activity.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. WHO IS ROUTEX FOR? */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              BUILT FOR BUSINESSES ON THE MOVE
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { icon: ShoppingBag, name: "FMCG Distributors" },
              { icon: Coffee, name: "Beverage Distributors" },
              { icon: Store, name: "Food Distributors" },
              { icon: Package, name: "Consumer Goods" },
              { icon: Building2, name: "Wholesale Businesses" },
              { icon: MapPin, name: "Field Sales Teams" },
            ].map((industry, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-[#176BFF]" />
                </div>
                <h3 className="font-semibold text-slate-800 text-[14px] leading-tight">{industry.name}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#176BFF] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[32px] md:text-[42px] uppercase leading-tight mb-6`}>
              READY TO MOVE YOUR SALES FORWARD?
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              Manage your van sales and distribution operations with RouteX.
            </p>
            <Link
              href="/contact"
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
