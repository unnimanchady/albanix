"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  CreditCard,
  Package,
  Smartphone,
  Search,
  Users,
  Tag,
  Truck,
  BarChart4,
  Settings,
  LayoutTemplate,
  Code2,
  Workflow,
  PenTool,
  Rocket
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function EcommercePage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:h-[400px] lg:h-[440px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/laptop_desk_hero.jpg"
            alt="E-Commerce Web Development"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/laptop_desk_hero.jpg"
            alt="E-Commerce Web Development"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/35 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/90 via-[#030814]/60 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 pb-12 md:pt-6 md:pb-0 md:h-full">
          
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Services</span>
            <span>/</span>
            <span className="text-white">E-Commerce</span>
          </div>

          <div className="w-full max-w-3xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              E-COMMERCE WEB DEVELOPMENT
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-8 leading-[1.1] text-[32px] md:text-[44px] lg:text-[48px] drop-shadow-md`}
            >
              BUILD AN ONLINE STORE <br className="hidden md:block" />
              THAT SELLS.
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                GET YOUR ONLINE STORE <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/40 text-white text-[15px] font-bold rounded-md hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                VIEW OUR WORK <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 md:py-24 bg-slate-50 relative border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
              <Image
                src="/images/e-commerce-albanix.png"
                alt="E-Commerce Solutions"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                E-COMMERCE SOLUTIONS
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                TURN YOUR PRODUCTS <br className="hidden md:block" />
                INTO A DIGITAL BUSINESS.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 md:space-y-6 leading-relaxed">
                <p>
                  A successful online store is more than a collection of product pages. It needs to make shopping simple, build trust and guide customers smoothly from discovery to checkout.
                </p>
                <p>
                  ALBANIX creates e-commerce websites that combine attractive design, intuitive navigation, responsive experiences and business-focused functionality.
                </p>
                <p>
                  Whether you are launching your first online store or upgrading an existing e-commerce business, we build solutions that are easy to manage and ready to grow with you.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHAT WE BUILD */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              WHAT WE OFFER
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              EVERYTHING YOU NEED <br className="hidden md:block"/> TO SELL ONLINE.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { num: "01", title: "ONLINE STORES", desc: "Professional e-commerce websites designed around your products, brand and customers.", icon: <ShoppingCart className="w-6 h-6 text-[#0A84FF]" /> },
              { num: "02", title: "PRODUCT CATALOGS", desc: "Organize products, categories, variations, pricing and product information clearly.", icon: <LayoutTemplate className="w-6 h-6 text-[#0A84FF]" /> },
              { num: "03", title: "SHOPPING CART & CHECKOUT", desc: "Simple, intuitive shopping experiences designed to reduce friction during checkout.", icon: <ShoppingCart className="w-6 h-6 text-[#0A84FF]" /> },
              { num: "04", title: "PAYMENT INTEGRATION", desc: "Connect secure online payment gateways and make transactions simple for your customers.", icon: <CreditCard className="w-6 h-6 text-[#0A84FF]" /> },
              { num: "05", title: "ORDER & INVENTORY MANAGEMENT", desc: "Manage orders, products, stock and customer information from a centralized system.", icon: <Package className="w-6 h-6 text-[#0A84FF]" /> },
              { num: "06", title: "MOBILE COMMERCE", desc: "Responsive shopping experiences that work beautifully across phones, tablets and desktops.", icon: <Smartphone className="w-6 h-6 text-[#0A84FF]" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0A84FF]/20 hover:shadow-lg transition-all">
                <div className="shrink-0 w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-200">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-[#0A84FF] font-mono text-sm font-bold">{item.num}</span>
                    <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736]`}>{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. E-COMMERCE FEATURES */}
      <section className="py-20 md:py-24 bg-[#0B1736] text-white border-b border-[#1A2747]">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4`}>
              BUILT FOR MODERN <br className="hidden md:block"/> ONLINE SHOPPING.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Product Management", desc: "Add, edit and organize products easily.", icon: <Package className="w-5 h-5 text-blue-400" /> },
              { title: "Product Search & Filters", desc: "Help customers quickly find what they need.", icon: <Search className="w-5 h-5 text-blue-400" /> },
              { title: "Customer Accounts", desc: "Give customers a convenient way to manage their purchases.", icon: <Users className="w-5 h-5 text-blue-400" /> },
              { title: "Secure Checkout", desc: "Create a smooth and trustworthy checkout experience.", icon: <CreditCard className="w-5 h-5 text-blue-400" /> },
              { title: "Order Management", desc: "Track orders from purchase to delivery.", icon: <ShoppingCart className="w-5 h-5 text-blue-400" /> },
              { title: "Coupons & Promotions", desc: "Support discounts, offers and promotional campaigns.", icon: <Tag className="w-5 h-5 text-blue-400" /> },
              { title: "Shipping Integration", desc: "Connect your store with shipping and delivery workflows.", icon: <Truck className="w-5 h-5 text-blue-400" /> },
              { title: "Analytics", desc: "Understand products, customers and sales performance.", icon: <BarChart4 className="w-5 h-5 text-blue-400" /> }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800 transition-colors">
                <div className="mb-4 inline-block p-2 bg-slate-800 rounded-lg border border-slate-700">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. PLATFORMS & DEVELOPMENT */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              FLEXIBLE TECHNOLOGY
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
              BUILD WITH THE RIGHT <br className="hidden md:block"/> E-COMMERCE PLATFORM.
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Every business has different requirements. We select and customize the right technology based on your products, operations and growth plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {[
              { 
                title: "WORDPRESS + WOOCOMMERCE", 
                desc: "Flexible e-commerce websites for businesses that need control and easy content management.",
                icon: <LayoutTemplate className="w-8 h-8 text-[#0A84FF]" />
              },
              { 
                title: "SHOPIFY", 
                desc: "Launch and manage a powerful online store with a proven e-commerce platform.",
                icon: <ShoppingCart className="w-8 h-8 text-[#0A84FF]" />
              },
              { 
                title: "CUSTOM E-COMMERCE", 
                desc: "Tailored online shopping platforms designed around your unique business requirements.",
                icon: <Code2 className="w-8 h-8 text-[#0A84FF]" />
              },
              { 
                title: "INTEGRATIONS", 
                desc: "Connect payments, shipping, CRM, inventory, analytics and other business systems.",
                icon: <Workflow className="w-8 h-8 text-[#0A84FF]" />
              }
            ].map((platform, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-[#0A84FF]/30 transition-all text-center group">
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736] mb-3`}>{platform.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
                  {platform.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="pt-20 pb-20 md:pt-24 md:pb-24 bg-white border-b border-slate-200">
        <Container>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mx-auto`}>
              FROM IDEA TO ONLINE STORE.
            </h2>
          </div>

          {/* Desktop Horizontal Process */}
          <div className="hidden lg:flex items-start justify-between relative max-w-5xl mx-auto">
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-slate-300 -z-0"></div>
            
            {[
              { num: "01", title: "DISCOVER", icon: <Search className="w-5 h-5" />, desc: "Understand your products, customers, business model and e-commerce requirements." },
              { num: "02", title: "DESIGN", icon: <PenTool className="w-5 h-5" />, desc: "Create a clean shopping experience that reflects your brand and makes products easy to discover." },
              { num: "03", title: "DEVELOP", icon: <Code2 className="w-5 h-5" />, desc: "Build the store, product catalog, checkout, payments, integrations and required functionality." },
              { num: "04", title: "LAUNCH & SUPPORT", icon: <Rocket className="w-5 h-5" />, desc: "Test everything across devices, launch your store and provide ongoing technical support." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center w-[22%]">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0A84FF] flex items-center justify-center text-[#0A84FF] mb-6 shadow-sm">
                  {step.icon}
                </div>
                <div className="text-center px-2">
                  <div className="text-[#0A84FF] font-mono text-xs font-bold mb-2">{step.num}</div>
                  <h4 className={`${oswald.className} text-lg text-[#0B1736] mb-3 tracking-wide`}>{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Process */}
          <div className="lg:hidden flex flex-col space-y-8 relative pl-2 max-w-md mx-auto">
            <div className="absolute top-6 bottom-6 left-8 w-px bg-slate-300 z-0"></div>
            {[
              { num: "01", title: "DISCOVER", icon: <Search className="w-4 h-4" />, desc: "Understand your products, customers, business model and e-commerce requirements." },
              { num: "02", title: "DESIGN", icon: <PenTool className="w-4 h-4" />, desc: "Create a clean shopping experience that reflects your brand and makes products easy to discover." },
              { num: "03", title: "DEVELOP", icon: <Code2 className="w-4 h-4" />, desc: "Build the store, product catalog, checkout, payments, integrations and required functionality." },
              { num: "04", title: "LAUNCH & SUPPORT", icon: <Rocket className="w-4 h-4" />, desc: "Test everything across devices, launch your store and provide ongoing technical support." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border-2 border-[#0A84FF] flex items-center justify-center text-[#0A84FF] mr-6 shadow-sm z-10">
                  {step.icon}
                </div>
                <div className="pt-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[#0A84FF] font-mono text-xs font-bold">{step.num}</span>
                    <h4 className={`${oswald.className} text-lg text-[#0B1736] tracking-wide`}>{step.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. WHY ALBANIX */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                WHY ALBANIX
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                AN ONLINE STORE <br className="hidden md:block"/> BUILT AROUND YOUR BUSINESS.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 leading-relaxed">
                <p>
                  We don't simply install an e-commerce platform and hand it over.
                </p>
                <p>
                  We design and develop the shopping experience around your products, customers and business processes.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                "Modern Design",
                "Responsive Experience",
                "Secure Payments",
                "Easy Management",
                "Scalable Architecture",
                "Ongoing Support"
              ].map((feature, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl flex items-center space-x-3 shadow-sm hover:border-[#0A84FF]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#0A84FF] shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0A84FF] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <span className="text-white/80 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            READY TO SELL ONLINE?
          </span>
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6`}>
            LET'S BUILD YOUR <br/> ONLINE STORE.
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] mb-10 leading-relaxed max-w-lg">
            Whether you're starting a new e-commerce business or modernizing an existing store, ALBANIX can help turn your products into a powerful digital shopping experience.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-white text-[#0A84FF] text-[15px] font-bold rounded-md hover:bg-slate-50 hover:shadow-lg shadow-md transition-all"
          >
            GET A FREE E-COMMERCE QUOTE <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
