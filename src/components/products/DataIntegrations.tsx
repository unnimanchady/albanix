"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  ArrowRight,
  ArrowDown,
  Network,
  Clock,
  ShieldCheck,
  LineChart,
  Cpu,
  Server,
  Cloud,
  Lock,
  Factory,
  Car,
  Zap,
  Activity,
  Pill,
  Database,
  Truck,
  Combine,
  CheckCircle2,
  Workflow,
  Eye,
  Settings,
  BatteryCharging
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function DataIntegrations() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative w-full flex flex-col justify-center pt-[64px] md:pt-[72px] lg:pt-[86px] h-[450px] lg:h-[500px] bg-[#030814] overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full z-0 flex justify-end">
          <div className="relative w-full lg:w-[60%] h-full">
            {/* Dark gradient overlay blending into the image */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#030814] via-[#030814]/80 to-transparent lg:to-transparent lg:via-[#030814]/40"></div>
            <Image 
              src="/images/ot-it-hero.jpg" 
              alt="Industrial OT and IT Data Integration" 
              fill 
              className="object-cover object-center lg:object-right"
              priority
            />

            {/* Subtle Data Flow Overlay */}
            <div className="hidden lg:flex absolute bottom-[10%] right-[10%] z-20 items-center justify-between w-[80%] max-w-[600px] bg-[#071328]/70 backdrop-blur-sm border border-[#00C2E8]/20 rounded-full px-6 py-3 shadow-2xl">
              <div className="flex flex-col items-center">
                <Cpu className="w-4 h-4 text-slate-400 mb-1" />
                <span className="text-[10px] font-bold text-white tracking-wider uppercase">PLC / MACHINES</span>
              </div>
              <div className="flex-1 h-[1px] mx-4 bg-gradient-to-r from-transparent via-[#00C2E8]/50 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00C2E8] shadow-[0_0_8px_#00C2E8] animate-pulse"></div>
              </div>
              
              <div className="flex flex-col items-center">
                <Server className="w-4 h-4 text-slate-400 mb-1" />
                <span className="text-[10px] font-bold text-white tracking-wider uppercase">EDGE GATEWAY</span>
              </div>
              <div className="flex-1 h-[1px] mx-4 bg-gradient-to-r from-transparent via-[#00C2E8]/50 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00C2E8] shadow-[0_0_8px_#00C2E8] animate-pulse"></div>
              </div>

              <div className="flex flex-col items-center">
                <Database className="w-4 h-4 text-[#00C2E8] mb-1" />
                <span className="text-[10px] font-bold text-[#00C2E8] tracking-wider uppercase">INDUSTRIAL DATA</span>
              </div>
              <div className="flex-1 h-[1px] mx-4 bg-gradient-to-r from-transparent via-[#00C2E8]/50 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00C2E8] shadow-[0_0_8px_#00C2E8] animate-pulse"></div>
              </div>

              <div className="flex flex-col items-center">
                <Cloud className="w-4 h-4 text-slate-400 mb-1" />
                <span className="text-[10px] font-bold text-white tracking-wider uppercase">CLOUD ANALYTICS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center py-8 lg:py-0 h-full">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[50%] max-w-[540px] flex flex-col justify-center">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center space-x-2 text-[12px] md:text-[13px] text-white/70 font-medium tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white">Data & Integrations (OT↔IT)</span>
            </div>

            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block drop-shadow-md">
              OUR CAPABILITIES
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-4 leading-[1.1] text-[34px] md:text-[42px] lg:text-[48px] drop-shadow-md`}
            >
              DATA & INTEGRATIONS <br />
              <span className="text-[#00C2E8]">(OT↔IT)</span>
            </h1>
            
            <p className="text-[18px] md:text-[20px] text-white font-semibold mb-4 drop-shadow-md tracking-wide">
              Connecting Operations. Unlocking Intelligence.
            </p>

            <p className="text-[15px] md:text-[17px] text-white/80 max-w-[480px] mb-8 leading-[1.6] font-light">
              Albanix connects operational technology with enterprise IT, transforming industrial data into secure, actionable intelligence that drives smarter decisions and better outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start">
              <Link
                href="#solutions"
                className="flex items-center justify-center h-[50px] px-8 bg-[#176BFF] text-white text-[14px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                EXPLORE OUR SOLUTIONS <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-white relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center mb-16">
            {/* Left Image */}
            <div className="relative h-[280px] md:h-[380px] w-full rounded-xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/ot-it-intro.jpg"
                alt="Modern Industrial Automation Factory"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right Text */}
            <div className="flex flex-col justify-center">
              <span className="text-[#00C2E8] font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
                INTRODUCTION
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[30px] md:text-[36px] lg:text-[40px] leading-[1.15] mb-4 uppercase`}>
                CONNECTING OT AND IT FOR A SMARTER ENTERPRISE
              </h2>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#176BFF] mb-5">
                From Industrial Data to Business Intelligence.
              </h3>
              <div className="text-slate-600 text-[16px] leading-relaxed space-y-4">
                <p>
                  Modern industrial environments generate enormous amounts of operational data. Albanix connects machines, sensors, control systems and industrial networks with enterprise applications, analytics platforms and cloud systems.
                </p>
                <p>
                  Our OT↔IT integration approach creates a secure data foundation that allows organizations to monitor operations, optimize processes and make faster, data-driven decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
            <div className="flex flex-col">
              <div className="mb-4">
                <Network className="w-8 h-8 text-[#00C2E8]" strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-2 uppercase tracking-wide">SEAMLESS CONNECTIVITY</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect machines, systems and enterprise applications through a unified integration architecture.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">
                <Clock className="w-8 h-8 text-[#00C2E8]" strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-2 uppercase tracking-wide">REAL-TIME DATA</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Capture and deliver operational data where it is needed, when it is needed.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">
                <ShieldCheck className="w-8 h-8 text-[#00C2E8]" strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-2 uppercase tracking-wide">SECURE INTEGRATION</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Protect industrial environments while enabling controlled data exchange between OT and IT.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">
                <LineChart className="w-8 h-8 text-[#00C2E8]" strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-2 uppercase tracking-wide">ACTIONABLE INTELLIGENCE</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Transform raw operational data into insights for better decisions and optimization.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. OT ↔ IT INTEGRATION FLOW */}
      <section className="py-20 md:py-24 bg-[#030814] text-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00C2E8] font-bold text-xs tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
              OT ↔ IT INTEGRATION
            </span>
            <h2 className={`${oswald.className} text-[32px] md:text-[40px] leading-[1.2] uppercase drop-shadow-md`}>
              FROM MACHINES TO MEANINGFUL INSIGHTS
            </h2>
          </div>

          <div className="hidden md:flex items-center justify-between w-full max-w-5xl mx-auto relative px-4">
            {/* The horizontal connecting line */}
            <div className="absolute top-1/2 left-[5%] right-[5%] h-[2px] bg-slate-800 -translate-y-1/2 z-0">
              <div className="h-full bg-gradient-to-r from-[#176BFF] via-[#00C2E8] to-[#176BFF] w-full animate-pulse opacity-50"></div>
            </div>

            {[
              { icon: Factory, label: "INDUSTRIAL\nDEVICES" },
              { icon: Cpu, label: "SENSORS &\nPLCs" },
              { icon: Server, label: "EDGE\nGATEWAY" },
              { icon: Network, label: "DATA\nINTEGRATION", active: true },
              { icon: Database, label: "MES / ERP /\nSCADA" },
              { icon: Cloud, label: "CLOUD &\nANALYTICS" },
              { icon: LineChart, label: "BUSINESS\nINTELLIGENCE" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center relative z-10 group cursor-default">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  step.active 
                    ? "bg-[#00C2E8] shadow-[0_0_20px_rgba(0,194,232,0.4)] scale-110" 
                    : "bg-[#071328] border border-slate-700 group-hover:border-[#00C2E8] group-hover:bg-[#0a1b38]"
                }`}>
                  <step.icon className={`w-6 h-6 ${step.active ? "text-[#030814]" : "text-[#00C2E8]"}`} />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-center text-slate-300 tracking-wider whitespace-pre-line leading-tight">
                  {step.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile vertical flow */}
          <div className="md:hidden flex flex-col items-center space-y-6">
            {[
              { icon: Factory, label: "INDUSTRIAL DEVICES" },
              { icon: ArrowDown, label: "", isArrow: true },
              { icon: Cpu, label: "SENSORS & PLCs" },
              { icon: ArrowDown, label: "", isArrow: true },
              { icon: Server, label: "EDGE GATEWAY" },
              { icon: ArrowDown, label: "", isArrow: true },
              { icon: Network, label: "DATA INTEGRATION", active: true },
              { icon: ArrowDown, label: "", isArrow: true },
              { icon: Database, label: "MES / ERP / SCADA" },
              { icon: ArrowDown, label: "", isArrow: true },
              { icon: Cloud, label: "CLOUD & ANALYTICS" },
              { icon: ArrowDown, label: "", isArrow: true },
              { icon: LineChart, label: "BUSINESS INTELLIGENCE" },
            ].map((step, i) => (
              <React.Fragment key={i}>
                {step.isArrow ? (
                  <div className="h-6 flex items-center justify-center text-[#00C2E8] opacity-50">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                ) : (
                  <div className="flex items-center w-[240px] bg-[#071328] border border-slate-800 rounded-lg p-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                      step.active ? "bg-[#00C2E8]" : "bg-slate-800/50"
                    }`}>
                      <step.icon className={`w-5 h-5 ${step.active ? "text-[#030814]" : "text-[#00C2E8]"}`} />
                    </div>
                    <div className="text-xs font-bold text-slate-200 tracking-wider">
                      {step.label}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. CORE INTEGRATION CAPABILITIES */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#176BFF] font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
              CORE INTEGRATION CAPABILITIES
            </span>
            <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[38px] leading-[1.2] uppercase`}>
              BUILDING THE DATA FOUNDATION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Network, 
                title: "1. INDUSTRIAL CONNECTIVITY", 
                desc: "Connect PLCs, sensors, machines and industrial controllers across diverse protocols." 
              },
              { 
                icon: Combine, 
                title: "2. DATA INGESTION", 
                desc: "Capture, filter and normalize high-volume operational data at scale." 
              },
              { 
                icon: Server, 
                title: "3. EDGE COMPUTING", 
                desc: "Process critical data closer to the source for low-latency operations." 
              },
              { 
                icon: Workflow, 
                title: "4. SYSTEM INTEGRATION", 
                desc: "Connect OT environments with MES, ERP, CRM and enterprise applications." 
              },
              { 
                icon: Cloud, 
                title: "5. CLOUD INTEGRATION", 
                desc: "Move trusted operational data into modern cloud platforms and analytics environments." 
              },
              { 
                icon: Lock, 
                title: "6. DATA GOVERNANCE & SECURITY", 
                desc: "Maintain secure, governed and controlled industrial data flows." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-md hover:border-[#176BFF]/30 transition-all group relative">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-[#176BFF]" />
                </div>
                <h3 className="font-bold text-slate-900 text-[16px] mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-[14px] leading-relaxed">
                  {feature.desc}
                </p>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-[#00C2E8]" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. TECHNOLOGY ECOSYSTEM */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`${oswald.className} text-slate-900 text-[30px] md:text-[36px] leading-[1.2] uppercase`}>
              INTEGRATION TECHNOLOGY ECOSYSTEM
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-6 border-b border-slate-200 pb-3 flex items-center">
                <Factory className="w-4 h-4 mr-2 text-[#00C2E8]" /> OT / INDUSTRIAL
              </h4>
              <ul className="space-y-3">
                {["PLCs", "SCADA", "HMI", "Sensors", "Industrial Controllers"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-[15px]">
                    <CheckCircle2 className="w-4 h-4 text-[#176BFF] mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-6 border-b border-slate-200 pb-3 flex items-center">
                <Network className="w-4 h-4 mr-2 text-[#00C2E8]" /> INTEGRATION
              </h4>
              <ul className="space-y-3">
                {["OPC UA", "MQTT", "REST APIs", "Industrial Gateways", "Event Streaming"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-[15px]">
                    <CheckCircle2 className="w-4 h-4 text-[#176BFF] mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-6 border-b border-slate-200 pb-3 flex items-center">
                <Server className="w-4 h-4 mr-2 text-[#00C2E8]" /> ENTERPRISE
              </h4>
              <ul className="space-y-3">
                {["MES", "ERP", "CRM", "Data Platforms", "Cloud"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-[15px]">
                    <CheckCircle2 className="w-4 h-4 text-[#176BFF] mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-6 border-b border-slate-200 pb-3 flex items-center">
                <LineChart className="w-4 h-4 mr-2 text-[#00C2E8]" /> ANALYTICS
              </h4>
              <ul className="space-y-3">
                {["BI", "AI / ML", "Predictive Analytics", "Operational Intelligence"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-[15px]">
                    <CheckCircle2 className="w-4 h-4 text-[#176BFF] mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. INDUSTRIES & WHAT IT ENABLES (Combined Layout) */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT: Industries */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[#176BFF] font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
                INDUSTRIES
              </span>
              <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[34px] leading-[1.2] uppercase mb-10`}>
                OT ↔ IT INTEGRATION ACROSS INDUSTRIES
              </h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Factory, name: "Manufacturing" },
                  { icon: Cpu, name: "Industrial Automation" },
                  { icon: Zap, name: "Energy & Utilities" },
                  { icon: Pill, name: "Pharmaceuticals" },
                  { icon: Activity, name: "Healthcare" },
                  { icon: Truck, name: "Logistics & Warehousing" },
                ].map((industry, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all">
                    <industry.icon className="w-8 h-8 text-[#176BFF] mb-3" strokeWidth={1.5} />
                    <h3 className="font-semibold text-slate-800 text-[14px] leading-tight">{industry.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: What it enables */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#030814] rounded-2xl p-8 md:p-10 text-white shadow-xl h-full">
                <h3 className={`${oswald.className} text-[24px] uppercase tracking-wide mb-8 border-b border-slate-800 pb-4`}>
                  WHAT OT↔IT INTEGRATION ENABLES
                </h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <Eye className="w-5 h-5 text-[#00C2E8] mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[14px] uppercase mb-1">REAL-TIME MONITORING</h4>
                      <p className="text-slate-400 text-[13px] leading-relaxed">Monitor production and operational performance.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Settings className="w-5 h-5 text-[#00C2E8] mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[14px] uppercase mb-1">PREDICTIVE MAINTENANCE</h4>
                      <p className="text-slate-400 text-[13px] leading-relaxed">Use equipment data to identify issues before failures occur.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Activity className="w-5 h-5 text-[#00C2E8] mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[14px] uppercase mb-1">PRODUCTION OPTIMIZATION</h4>
                      <p className="text-slate-400 text-[13px] leading-relaxed">Improve throughput, efficiency and resource utilization.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <BatteryCharging className="w-5 h-5 text-[#00C2E8] mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[14px] uppercase mb-1">ENERGY INTELLIGENCE</h4>
                      <p className="text-slate-400 text-[13px] leading-relaxed">Track and optimize industrial energy consumption.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Network className="w-5 h-5 text-[#00C2E8] mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[14px] uppercase mb-1">SUPPLY CHAIN VISIBILITY</h4>
                      <p className="text-slate-400 text-[13px] leading-relaxed">Connect operational data with enterprise systems.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Cpu className="w-5 h-5 text-[#00C2E8] mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[14px] uppercase mb-1">AI-READY DATA</h4>
                      <p className="text-slate-400 text-[13px] leading-relaxed">Create trusted data foundations for AI and advanced analytics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 bg-[#070F1E] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2E8] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-tight mb-6`}>
              CONNECT YOUR OPERATIONS.<br />
              UNLOCK YOUR DATA.
            </h2>
            <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
              Build a secure OT↔IT data foundation that turns operational complexity into business intelligence.
            </p>
            <Link
              href="#contact"
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
