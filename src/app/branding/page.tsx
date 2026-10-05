import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Target, 
  PenTool, 
  Palette, 
  BookOpen, 
  Briefcase, 
  Smartphone, 
  Monitor, 
  RefreshCw,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Layers
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Branding Services | ALBANIX",
  description: "Albanix creates strategic brand identities, logo systems, visual identities, digital branding, and creative experiences that help businesses stand out and grow.",
  openGraph: {
    title: "Branding Services | ALBANIX",
    description: "Albanix creates strategic brand identities, logo systems, visual identities, digital branding, and creative experiences that help businesses stand out and grow.",
    type: "website",
    url: "https://www.albanix.com/branding",
  }
};

const services = [
  {
    icon: <Target className="w-8 h-8 text-[#00C2E8]" strokeWidth={1.5} />,
    title: "Brand Strategy",
    description: "Define your brand positioning, audience, personality, values, and direction."
  },
  {
    icon: <PenTool className="w-8 h-8 text-[#176BFF]" strokeWidth={1.5} />,
    title: "Logo Design",
    description: "Create distinctive and meaningful logos that give your business a recognizable identity."
  },
  {
    icon: <Palette className="w-8 h-8 text-[#00C2E8]" strokeWidth={1.5} />,
    title: "Visual Identity",
    description: "Develop colors, typography, imagery, graphic elements, and visual systems that work together consistently."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[#176BFF]" strokeWidth={1.5} />,
    title: "Brand Guidelines",
    description: "Create practical brand guidelines that keep your identity consistent across every platform."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#00C2E8]" strokeWidth={1.5} />,
    title: "Brand Collateral",
    description: "Design professional business cards, stationery, presentations, brochures, packaging, and other brand materials."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#176BFF]" strokeWidth={1.5} />,
    title: "Social Media Branding",
    description: "Build a consistent visual identity across Instagram, Facebook, LinkedIn, and other social platforms."
  },
  {
    icon: <Monitor className="w-8 h-8 text-[#00C2E8]" strokeWidth={1.5} />,
    title: "Digital Branding",
    description: "Extend your brand identity across websites, landing pages, applications, and digital products."
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-[#176BFF]" strokeWidth={1.5} />,
    title: "Rebranding",
    description: "Modernize an existing brand while protecting the recognition and value it has already built."
  }
];

const whyAlbanix = [
  {
    icon: <Lightbulb className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />,
    title: "STRATEGY FIRST",
    description: "We start by understanding your business, audience, competition, and goals."
  },
  {
    icon: <Layers className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />,
    title: "CONSISTENT IDENTITY",
    description: "Every visual element works together to create a recognizable brand system."
  },
  {
    icon: <Monitor className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />,
    title: "DIGITAL READY",
    description: "Your brand is designed to work beautifully across websites, apps, social media, and digital platforms."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />,
    title: "BUILT FOR GROWTH",
    description: "We create flexible identity systems that can evolve as your business grows."
  }
];

const processSteps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understand your business, audience, market, and goals."
  },
  {
    num: "02",
    title: "DEFINE",
    desc: "Establish positioning, personality, messaging, and creative direction."
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "Develop the logo, visual identity, typography, colors, and brand assets."
  },
  {
    num: "04",
    title: "REFINE",
    desc: "Review, test, improve, and finalize the identity system."
  },
  {
    num: "05",
    title: "LAUNCH",
    desc: "Deliver the final brand system ready for digital and physical use."
  }
];

const systemElements = [
  "Logo", "Color", "Typography", "Imagery", "Graphics", "Digital Experience"
];

const portfolioItems = [
  {
    title: "TreatAnywhere",
    category: "Healthcare",
    image: "/images/web-templates/www.treatanywhere.com.jpg",
  },
  {
    title: "LE CAFIO",
    category: "FOOD & BEVERAGE",
    image: "/images/portfolio/kichenery.jpg",
  },
  {
    title: "Baseline Interiors",
    category: "Interior Design",
    image: "/images/web-templates/www.baselineinteriors.in.jpg",
  }
];

export default function BrandingPage() {
  return (
    <div className="w-full flex flex-col bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#030814] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/design_hero.jpg')] opacity-10 bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030814]/80 via-[#030814]/90 to-[#030814]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#176BFF]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#00C2E8]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#00C2E8] animate-pulse"></span>
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">BRANDING STUDIO</span>
            </div>
            
            <h1 className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-8 leading-[1.05] text-[48px] md:text-[72px] lg:text-[84px]`}>
              BUILD A BRAND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2E8] to-[#176BFF]">
                THAT PEOPLE REMEMBER.
              </span>
            </h1>
            
            <p className="text-[18px] md:text-[22px] text-white/70 leading-[1.6] font-light max-w-2xl mb-12">
              We create distinctive brand identities that connect with your audience, strengthen trust, and give your business a clear presence across digital and physical touchpoints.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[54px] px-8 bg-[#176BFF] text-white text-[14px] font-bold tracking-wide rounded-md hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(23,107,255,0.4)] transition-all"
              >
                START A BRAND PROJECT <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center h-[54px] px-8 bg-white/5 text-white border border-white/10 text-[14px] font-bold tracking-wide rounded-md hover:bg-white/10 transition-all"
              >
                EXPLORE OUR WORK <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. BRANDING INTRODUCTION */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className={`${oswald.className} text-slate-900 text-[36px] md:text-[48px] uppercase leading-[1.1] mb-6`}>
                YOUR BRAND IS <span className="text-[#176BFF]">MORE THAN A LOGO.</span>
              </h2>
              <p className="text-slate-600 text-[18px] md:text-[20px] leading-[1.7] mb-6">
                Your brand is the experience people remember — from the first impression to every interaction that follows.
              </p>
              <p className="text-slate-600 text-[18px] md:text-[20px] leading-[1.7]">
                Albanix combines strategy, design, technology, and creative thinking to build brand identities that are clear, consistent, memorable, and ready to grow.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Strategy', 'Identity', 'Design', 'Digital Experience'].map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-[#176BFF]" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg uppercase tracking-wide">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. BRANDING SERVICES */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-[#176BFF] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">WHAT WE DO</span>
            <h2 className={`${oswald.className} text-slate-900 text-[36px] md:text-[48px] uppercase leading-[1.1]`}>
              OUR BRANDING SERVICES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WHY ALBANIX */}
      <section className="py-20 md:py-32 bg-[#030814] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-bg.jpg')] opacity-[0.03] bg-cover bg-center"></div>
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-[1.1]`}>
              WHY BUILD YOUR BRAND WITH <span className="text-[#00C2E8]">ALBANIX?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAlbanix.map((feature, index) => (
              <div key={index} className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-colors">
                {feature.icon}
                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. OUR BRANDING PROCESS */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-[#176BFF] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">METHODOLOGY</span>
            <h2 className={`${oswald.className} text-slate-900 text-[36px] md:text-[48px] uppercase leading-[1.1]`}>
              FROM IDEA TO IDENTITY
            </h2>
          </div>
          
          <div className="relative">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-[45px] left-0 right-0 h-0.5 bg-slate-100"></div>
            
            <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col md:items-center text-left md:text-center">
                  <div className="w-24 h-24 rounded-full bg-slate-50 border-4 border-white shadow-sm flex items-center justify-center mb-6 relative z-10">
                    <span className={`${oswald.className} text-3xl text-[#176BFF]`}>{step.num}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg uppercase tracking-wide mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed md:px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. BRAND SYSTEM SECTION */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className={`${oswald.className} text-slate-900 text-[36px] md:text-[48px] uppercase leading-[1.1] mb-6`}>
                ONE IDENTITY. <br />
                <span className="text-[#176BFF]">EVERY TOUCHPOINT.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We believe that powerful branding goes far beyond a single logo. Albanix creates cohesive brand systems that maintain consistency, establish trust, and communicate your unique value across every single customer interaction.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {systemElements.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-slate-800 font-semibold text-sm shadow-sm">
                      {item}
                    </span>
                    {idx < systemElements.length - 1 && (
                      <span className="flex items-center text-slate-300 font-bold text-lg">+</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/branding.png"
                  alt="Albanix Brand System"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. PORTFOLIO / WORK SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-[#176BFF] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">OUR WORK</span>
              <h2 className={`${oswald.className} text-slate-900 text-[36px] md:text-[48px] uppercase leading-[1.1]`}>
                BRANDS BUILT TO STAND OUT.
              </h2>
            </div>
            <div className="mt-8 md:mt-0">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center text-[#176BFF] font-bold hover:text-blue-800 transition-colors uppercase tracking-wide group"
              >
                VIEW OUR PORTFOLIO <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Link 
                key={index}
                href="/portfolio"
                className="group block"
              >
                <div className="relative h-[240px] md:h-[300px] rounded-2xl overflow-hidden mb-6 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <span className="text-[#176BFF] font-semibold text-xs tracking-widest uppercase mb-2 block">
                  {item.category}
                </span>
                <h3 className={`${oswald.className} text-slate-900 text-2xl uppercase group-hover:text-[#176BFF] transition-colors`}>
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-20 md:py-24 bg-[#030814] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#176BFF]/20 to-[#00C2E8]/20 mix-blend-screen pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[52px] uppercase leading-[1.1] mb-6`}>
              READY TO BUILD A BRAND <span className="text-[#00C2E8]">PEOPLE REMEMBER?</span>
            </h2>
            <p className="text-white/80 text-[18px] md:text-[20px] leading-[1.6] mb-10 font-light max-w-2xl mx-auto">
              Whether you're launching a new business, refreshing an existing identity, or taking your brand into new markets, Albanix can help turn your vision into a distinctive brand experience.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[60px] px-12 bg-white text-slate-900 text-[16px] font-bold rounded-md hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              START YOUR BRAND PROJECT <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
      
    </div>
  );
}
