"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  LayoutTemplate,
  Cloud,
  Smartphone,
  Cpu,
  Target,
  Layers,
  Settings,
  ShieldCheck,
  Activity,
  Globe2,
  Workflow
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-[64px] md:pt-[72px] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 bg-slate-50 overflow-hidden border-b border-slate-200">
        {/* Subtle Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0A84FF]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00C2E8]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="flex flex-col justify-center max-w-2xl">
              <span className="text-[#0A84FF] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
                ABOUT ALBANIX
              </span>
              <h1 
                className={`${oswald.className} text-[#0B1736] uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[36px] md:text-[48px] lg:text-[56px]`}
              >
                WE BUILD DIGITAL PRODUCTS <br className="hidden md:block" /> THAT MOVE BUSINESSES FORWARD.
              </h1>
              
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-slate-600 mb-8 leading-[1.6] font-light max-w-[540px]">
                ALBANIX is a software development company building modern websites, SaaS products, mobile applications and custom digital solutions for businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
                >
                  LET'S BUILD TOGETHER <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50">
              <Image
                src="/images/about-albanix.png"
                alt="About Albanix - Digital Products"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </Container>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src="/images/about-albanix-software.png"
                alt="Albanix Digital Products"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
                WHO WE ARE
              </span>
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                FROM IDEAS <br className="hidden md:block" /> TO DIGITAL PRODUCTS.
              </h2>
              <div className="text-slate-600 text-[16px] md:text-lg space-y-5 md:space-y-6 leading-relaxed">
                <p>
                  We combine creative design, modern technology and business understanding to transform ideas into useful digital products.
                </p>
                <p>
                  From business websites to SaaS platforms and mobile applications, we focus on building digital experiences that are simple to use, scalable and designed around real business needs.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="py-20 md:py-24 bg-[#0B1736] text-white overflow-hidden border-t border-[#1A2747]">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR APPROACH
            </span>
            <h2 className={`${oswald.className} text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2]`}>
              HOW WE BUILD.
            </h2>
          </div>

          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#0A84FF]/50 to-transparent">
              <div className="absolute top-0 left-0 h-full w-[20%] bg-[#00C2E8] blur-[2px] animate-[pulse_2s_ease-in-out_infinite]"></div>
            </div>

            {/* Mobile Vertical Line */}
            <div className="lg:hidden absolute top-[10%] bottom-[10%] left-[28px] w-[2px] bg-gradient-to-b from-transparent via-[#0A84FF]/50 to-transparent"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10">
              {[
                { num: "01", title: "IDEA", icon: <Lightbulb className="w-6 h-6" />, desc: "Understand the problem and define the opportunity." },
                { num: "02", title: "DESIGN", icon: <PenTool className="w-6 h-6" />, desc: "Create clear, modern and intuitive experiences." },
                { num: "03", title: "BUILD", icon: <Code2 className="w-6 h-6" />, desc: "Develop reliable and scalable digital solutions." },
                { num: "04", title: "LAUNCH", icon: <Rocket className="w-6 h-6" />, desc: "Deploy and connect the product with real users." },
                { num: "05", title: "GROW", icon: <TrendingUp className="w-6 h-6" />, desc: "Improve, evolve and scale with the business." }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-row lg:flex-col items-center lg:text-center group pl-12 lg:pl-0 relative">
                  {/* Icon Node */}
                  <div className="absolute lg:relative left-0 lg:left-auto w-14 h-14 rounded-full bg-[#1A2747] border border-[#0A84FF]/30 shadow-[0_0_15px_rgba(10,132,255,0.15)] flex items-center justify-center text-[#00C2E8] lg:mb-6 group-hover:scale-110 group-hover:border-[#00C2E8] group-hover:shadow-[0_0_20px_rgba(0,194,232,0.3)] transition-all duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-[#0A84FF] font-mono text-xs font-bold mb-1 opacity-70">{step.num}</div>
                    <h4 className={`${oswald.className} text-xl mb-2 tracking-wide`}>{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-[200px] lg:mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. WHAT WE BUILD */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#0A84FF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              WHAT WE BUILD
            </span>
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2]`}>
              DIGITAL PRODUCTS <br className="hidden md:block"/> BUILT FOR REAL BUSINESS.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {[
              { 
                title: "BUSINESS WEBSITES", 
                desc: "Modern, responsive websites designed to build your brand and generate business.",
                icon: <LayoutTemplate className="w-10 h-10 text-[#00C2E8]" />
              },
              { 
                title: "SAAS PRODUCTS", 
                desc: "Scalable software platforms designed to simplify complex business processes.",
                icon: <Cloud className="w-10 h-10 text-[#00C2E8]" />
              },
              { 
                title: "MOBILE APPLICATIONS", 
                desc: "Modern mobile experiences for iOS and Android users.",
                icon: <Smartphone className="w-10 h-10 text-[#00C2E8]" />
              },
              { 
                title: "CUSTOM SOFTWARE", 
                desc: "Purpose-built digital solutions designed around specific business requirements.",
                icon: <Cpu className="w-10 h-10 text-[#00C2E8]" />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-10 rounded-3xl shadow-sm hover:shadow-lg hover:border-[#0A84FF]/30 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0A84FF]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0B1736] transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className={`${oswald.className} text-2xl tracking-wide text-[#0B1736] mb-4`}>{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. OUR PRODUCTS */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2]`}>
              OUR PRODUCTS
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "TREATANYWHERE",
                tagline: "Healthcare Without Borders.",
                image: "/images/product-treatanywhere.png",
                link: "/products/treatanywhere"
              },
              {
                title: "GYM MATE",
                tagline: "Run Your Fitness Business Smarter.",
                image: "/images/product-gym.png",
                link: "/products/gym-mate"
              },
              {
                title: "MENUPILOT",
                tagline: "From Order to Customer Delight.",
                image: "/images/product-restaurant.png",
                link: "/products"
              },
              {
                title: "ROUTEX",
                tagline: "Distribution That Moves With You.",
                image: "/images/product-van-sales.png",
                link: "/products"
              }
            ].map((product, idx) => (
              <Link key={idx} href={product.link} className="block group">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl group-hover:border-[#0A84FF]/40 transition-all duration-300">
                  <div className="h-48 relative bg-slate-100 border-b border-slate-200 p-6 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`${oswald.className} text-xl tracking-wide text-[#0B1736] mb-2`}>{product.title}</h3>
                    <p className="text-slate-500 text-sm">{product.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. WHY ALBANIX */}
      <section className="py-20 md:py-24 bg-slate-50 relative border-b border-slate-200 overflow-hidden">
        {/* Abstract Digital Diagram Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0B1736" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="20%" cy="30%" r="5" fill="#0B1736" />
            <circle cx="80%" cy="70%" r="5" fill="#0B1736" />
            <path d="M 20% 30% L 80% 70%" fill="none" stroke="#0B1736" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
            <div className="sticky top-24">
              <h2 className={`${oswald.className} text-[#0B1736] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-6`}>
                BUSINESS FIRST. <br className="hidden md:block"/> TECHNOLOGY SECOND.
              </h2>
              <div className="text-slate-600 text-lg space-y-4">
                <p>We don't build technology simply for the sake of technology.</p>
                <p>We focus on understanding the business problem first, then use the right technology to create a practical solution.</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "BUSINESS UNDERSTANDING", num: "01", icon: <Target className="w-6 h-6 text-[#0A84FF]" /> },
                { title: "MODERN TECHNOLOGY", num: "02", icon: <Layers className="w-6 h-6 text-[#0A84FF]" /> },
                { title: "USER-CENTERED DESIGN", num: "03", icon: <Globe2 className="w-6 h-6 text-[#0A84FF]" /> },
                { title: "LONG-TERM SCALABILITY", num: "04", icon: <TrendingUp className="w-6 h-6 text-[#0A84FF]" /> }
              ].map((block, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col items-start relative overflow-hidden group hover:border-[#0A84FF]/30 transition-colors">
                  <div className="absolute -right-4 -top-4 text-7xl font-bold text-slate-50 pointer-events-none group-hover:text-slate-100 transition-colors">{block.num}</div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 relative z-10">
                    {block.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 relative z-10 tracking-wide text-sm">{block.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. TECHNOLOGY / DIGITAL ECOSYSTEM VISUAL */}
      <section className="py-24 md:py-32 bg-[#030814] text-white relative overflow-hidden flex flex-col items-center justify-center">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A84FF]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-20 text-center mb-16">
          <h2 className={`${oswald.className} text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] tracking-wide mb-4`}>
            ONE IDEA. <br /> MANY POSSIBILITIES.
          </h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center z-10 px-4">
          
          {/* Central Hub */}
          <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-[#0A84FF] to-[#00C2E8] shadow-[0_0_60px_rgba(10,132,255,0.4)] flex items-center justify-center z-30 border border-white/20 animate-pulse">
            <span className={`${oswald.className} text-xl md:text-2xl font-bold`}>IDEA</span>
          </div>

          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(0,194,232,0.3)" strokeWidth="2" strokeDasharray="4 4" fill="none">
              <path d="M 50% 50% L 20% 25%" />
              <path d="M 50% 50% L 80% 25%" />
              <path d="M 50% 50% L 10% 60%" />
              <path d="M 50% 50% L 90% 60%" />
              <path d="M 50% 50% L 35% 85%" />
              <path d="M 50% 50% L 65% 85%" />
              <path d="M 50% 50% L 50% 15%" />
            </g>
          </svg>

          {/* Satellite Nodes */}
          <div className="absolute top-[25%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-[#1A2747]/80 backdrop-blur-md border border-[#0A84FF]/30 py-2 px-6 rounded-full shadow-lg font-mono text-sm tracking-widest text-[#00C2E8]">WEBSITES</div>
          </div>
          <div className="absolute top-[25%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-[#1A2747]/80 backdrop-blur-md border border-[#0A84FF]/30 py-2 px-6 rounded-full shadow-lg font-mono text-sm tracking-widest text-[#00C2E8]">SAAS</div>
          </div>
          <div className="absolute top-[60%] left-[10%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-[#1A2747]/80 backdrop-blur-md border border-[#0A84FF]/30 py-2 px-6 rounded-full shadow-lg font-mono text-sm tracking-widest text-[#00C2E8]">MOBILE</div>
          </div>
          <div className="absolute top-[60%] left-[90%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-[#1A2747]/80 backdrop-blur-md border border-[#0A84FF]/30 py-2 px-6 rounded-full shadow-lg font-mono text-sm tracking-widest text-[#00C2E8]">CLOUD</div>
          </div>
          <div className="absolute top-[85%] left-[35%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-[#1A2747]/80 backdrop-blur-md border border-[#0A84FF]/30 py-2 px-6 rounded-full shadow-lg font-mono text-sm tracking-widest text-[#00C2E8]">AI</div>
          </div>
          <div className="absolute top-[85%] left-[65%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-[#1A2747]/80 backdrop-blur-md border border-[#0A84FF]/30 py-2 px-6 rounded-full shadow-lg font-mono text-sm tracking-widest text-[#00C2E8]">DATA</div>
          </div>
          <div className="absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-[#1A2747]/80 backdrop-blur-md border border-[#0A84FF]/30 py-2 px-6 rounded-full shadow-lg font-mono text-sm tracking-widest text-[#00C2E8]">AUTOMATION</div>
          </div>

        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0B1736] text-white text-center relative overflow-hidden border-t border-[#1A2747]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        
        <Container className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
          <h2 className={`${oswald.className} text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6`}>
            HAVE AN IDEA? <br /> LET'S BUILD IT.
          </h2>
          <p className="text-white/80 text-[16px] md:text-[18px] mb-10 leading-relaxed max-w-lg font-light">
            Tell us what you're building, and let's create a digital solution around your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg shadow-md transition-all"
          >
            GET IN TOUCH <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Container>
      </section>

    </div>
  );
}
