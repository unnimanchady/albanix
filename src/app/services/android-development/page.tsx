"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  Zap,
  Users,
  Server,
  Smartphone,
  Layout,
  Network,
  CheckCircle,
  Activity,
  Search,
  PenTool,
  Code,
  CheckSquare,
  Rocket,
  Briefcase,
  HeartPulse,
  ShoppingCart,
  Truck,
  GraduationCap,
  Building2,
  Coffee,
  LifeBuoy,
  ShieldCheck,
  UploadCloud,
  Database,
  Bell,
  Cloud
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function AndroidDevelopmentPage() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO - FULL WIDTH IMAGE HEADER */}
      <section className="relative w-full flex flex-col md:block md:min-h-[460px] lg:min-h-[500px] bg-[#030814] overflow-hidden">
        
        {/* Mobile Image (Uncropped, Full Aspect Ratio) */}
        <div className="block md:hidden w-full relative z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/android_hero.jpg"
            alt="Android App Development"
            className="w-full h-auto block"
          />
        </div>

        {/* Desktop Image (Cover) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/android_hero.jpg"
            alt="Android App Development"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 bg-[#070F1E]/60 z-10 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#030814]/95 via-[#030814]/70 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 pb-12 md:py-12 md:min-h-[460px] lg:min-h-[500px]">
          
          <div className="w-full max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center space-x-2 text-[13px] md:text-[14px] text-white/75 font-medium tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="hover:text-white transition-colors cursor-default">Mobile Apps</span>
              <span>/</span>
              <span className="text-white">Android Development</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              OUR CAPABILITIES
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.05] text-[36px] md:text-[44px] lg:text-[52px] drop-shadow-md`}
            >
              ANDROID <br className="hidden md:block" />
              APP DEVELOPMENT
            </h1>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#00C2E8] font-bold mb-4 drop-shadow-md tracking-wide">
              Powerful Android Apps. Built for Your Business.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[500px] mb-8 leading-[1.6] font-light drop-shadow-md">
              We design and develop modern Android applications that deliver smooth performance, intuitive experiences and scalable technology across a wide range of devices.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                START YOUR PROJECT <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center justify-center h-[54px] md:h-[48px] px-8 bg-transparent border border-white/20 text-white text-[15px] font-bold rounded-md hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                EXPLORE OUR SERVICES <ArrowRight className="ml-2 w-4 h-4" />
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
                src="/images/android_intro.jpg"
                alt="Android Application Development Dashboard"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right Text */}
            <div>
              <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
                INTRODUCTION
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[36px] lg:text-[42px] leading-[1.2] mb-4 uppercase`}>
                ANDROID<br />APP DEVELOPMENT
              </h2>
              <h3 className="text-xl font-bold text-[#176BFF] mb-6">
                Built for Android. Designed for People.
              </h3>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-8">
                Albanix develops reliable Android applications for businesses looking to create powerful digital experiences. From customer-facing mobile apps to enterprise applications, we combine modern UI/UX design with scalable Android technology.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">01 HIGH PERFORMANCE</h4>
                  <p className="text-slate-600 text-sm">Fast and responsive applications optimized for modern Android devices.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">02 USER-CENTERED DESIGN</h4>
                  <p className="text-slate-600 text-sm">Simple and intuitive experiences designed around real users.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Server className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">03 SCALABLE ARCHITECTURE</h4>
                  <p className="text-slate-600 text-sm">A strong technical foundation that can grow with your business.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Smartphone className="w-5 h-5 text-[#176BFF]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1 uppercase">04 DEVICE COMPATIBILITY</h4>
                  <p className="text-slate-600 text-sm">Applications designed to work reliably across a wide range of Android devices.</p>
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
              OUR ANDROID DEVELOPMENT EXPERTISE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: Smartphone, 
                title: "01 CUSTOM ANDROID APP DEVELOPMENT", 
                desc: "Purpose-built Android applications designed around your business requirements." 
              },
              { 
                icon: Layout, 
                title: "02 ANDROID UI/UX DESIGN", 
                desc: "Modern, intuitive interfaces designed for smooth Android experiences." 
              },
              { 
                icon: Server, 
                title: "03 ANDROID APP ARCHITECTURE", 
                desc: "Scalable and maintainable application architecture for long-term growth." 
              },
              { 
                icon: Network, 
                title: "04 API & BACKEND INTEGRATION", 
                desc: "Connect Android applications with APIs, databases, cloud platforms and third-party services." 
              },
              { 
                icon: CheckCircle, 
                title: "05 TESTING & OPTIMIZATION", 
                desc: "Test performance, usability, compatibility and reliability across Android devices." 
              },
              { 
                icon: UploadCloud, 
                title: "06 GOOGLE PLAY DEPLOYMENT", 
                desc: "Prepare, configure and publish applications to Google Play." 
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

      {/* 4. ANDROID TECHNOLOGY STACK */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              TECHNOLOGY STACK
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase mb-4`}>
              MODERN ANDROID TECHNOLOGIES
            </h2>
            <p className="text-slate-600 text-lg">
              We use modern Android development tools and technologies to create reliable, scalable and high-performance applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { icon: Code, name: "Kotlin" },
              { icon: Code, name: "Java" },
              { icon: Smartphone, name: "Android SDK" },
              { icon: Layout, name: "Jetpack Compose" },
              { icon: Server, name: "Android Studio" },
              { icon: Network, name: "REST APIs" },
              { icon: Database, name: "Firebase" },
              { icon: Cloud, name: "Google Cloud" },
              { icon: Bell, name: "Push Notifications" },
              { icon: UploadCloud, name: "Google Play Console" },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl py-8 px-4 hover:shadow-lg transition-shadow text-center">
                <tech.icon className="w-8 h-8 text-[#176BFF] mb-3" strokeWidth={1.5} />
                <span className="font-semibold text-slate-800 text-[15px]">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. ANDROID APP DEVELOPMENT PROCESS */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              OUR PROCESS
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              FROM IDEA TO GOOGLE PLAY
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, step: "01", title: "DISCOVER", desc: "Understand your business, users and application requirements." },
              { icon: PenTool, step: "02", title: "PLAN", desc: "Define features, architecture and development roadmap." },
              { icon: Layout, step: "03", title: "DESIGN", desc: "Create intuitive Android interfaces and interactive prototypes." },
              { icon: Code, step: "04", title: "DEVELOP", desc: "Build and integrate the Android application." },
              { icon: CheckSquare, step: "05", title: "TEST", desc: "Test performance, compatibility, security and usability." },
              { icon: Rocket, step: "06", title: "LAUNCH", desc: "Prepare and publish the application to Google Play." },
            ].map((process, i) => (
              <div key={i} className="flex gap-6 items-start relative group">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#176BFF] transition-colors duration-300">
                  <process.icon className="w-7 h-7 text-[#176BFF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-slate-400 font-bold text-sm tracking-widest mb-1 block">STEP {process.step}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. APPLICATIONS */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-3 block">
              APPLICATIONS
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              ANDROID APPS FOR REAL-WORLD BUSINESS
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Briefcase, name: "Business Applications", desc: "Internal tools to streamline operations." },
              { icon: HeartPulse, name: "Healthcare Apps", desc: "Secure telemedicine and patient tools." },
              { icon: ShoppingCart, name: "E-Commerce Apps", desc: "Native shopping experiences." },
              { icon: Truck, name: "On-Demand Services", desc: "Real-time delivery and booking apps." },
              { icon: GraduationCap, name: "Education Apps", desc: "E-learning and educational platforms." },
              { icon: Building2, name: "Enterprise Mobility", desc: "Large-scale corporate solutions." },
              { icon: Coffee, name: "Lifestyle Applications", desc: "Fitness, wellness and social apps." },
            ].map((category, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white border border-slate-200 rounded-2xl group hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <category.icon className="w-7 h-7 text-[#176BFF]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{category.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. WHY ALBANIX */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase mb-6`}>
                WHY BUILD YOUR ANDROID APP WITH ALBANIX?
              </h2>
              <div className="hidden lg:block relative h-[400px] w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm mt-8">
                <Image
                  src="/images/android.png"
                  alt="Why Build Your Android App with Albanix"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">BUSINESS-FOCUSED</h3>
                  <p className="text-slate-600">We build applications around your actual business objectives.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Layout className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">MODERN USER EXPERIENCE</h3>
                  <p className="text-slate-600">Simple, intuitive and engaging Android interfaces.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">RELIABLE TECHNOLOGY</h3>
                  <p className="text-slate-600">Maintainable architecture and dependable development practices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <LifeBuoy className="w-6 h-6 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">LONG-TERM SUPPORT</h3>
                  <p className="text-slate-600">Continue improving and supporting your application after launch.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C2E8] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-tight mb-6`}>
              READY TO BUILD<br />
              YOUR ANDROID APP?
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              Let's turn your idea into a powerful Android experience designed for your users and built for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              TALK TO OUR EXPERTS <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
      
    </div>
  );
}
