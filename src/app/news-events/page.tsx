import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight,
  Calendar,
  MapPin,
  ExternalLink,
  Cpu,
  Shield,
  Zap,
  Globe
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "AI & Technology News | ALBANIX",
  description: "Stay updated with the latest AI, technology, software, cybersecurity, cloud, startup and innovation news from ALBANIX.",
  openGraph: {
    title: "AI & Technology News | ALBANIX",
    description: "Stay updated with the latest AI, technology, software, cybersecurity, cloud, startup and innovation news from ALBANIX.",
    type: "website",
    url: "https://www.albanix.com/news-events",
  }
};

const aiNews = [
  {
    category: "Government & AI",
    headline: "Federal Government Announces 'Super Intelligence Force' Task Force",
    summary: "A new interagency task force has been established to oversee artificial intelligence development, focusing on national security, ethical guidelines, and ensuring safe autonomous systems.",
    source: "Reuters",
    date: "October 4, 2026",
    link: "https://www.reuters.com",
    icon: <Globe className="w-5 h-5" />
  },
  {
    category: "AI Models & Security",
    headline: "Google Launches Gemini 4 Argon for Cybersecurity Defenders",
    summary: "Google's newest specialized model, Gemini 4 Argon, is being rolled out via the Fairwind Program to assist trusted defenders in vulnerability hunting and predictive security patching.",
    source: "TechCrunch",
    date: "October 2, 2026",
    link: "https://techcrunch.com",
    icon: <Shield className="w-5 h-5" />
  },
  {
    category: "AI Assistants",
    headline: "OpenAI Introduces 'Dots' - The Always-On Assistant",
    summary: "OpenAI has revealed a new continuous AI assistant designed to function seamlessly across connected applications, responding to the growing demand for agentic AI.",
    source: "The Verge",
    date: "September 28, 2026",
    link: "https://www.theverge.com",
    icon: <Zap className="w-5 h-5" />
  }
];

const techNews = [
  {
    category: "Cybersecurity",
    headline: "Epic Pauses Development to Address Critical Software Vulnerabilities",
    summary: "In an unprecedented move, major development work has been paused for six weeks to implement security fixes identified by advanced AI vulnerability scanning tools.",
    source: "TechRepublic",
    date: "October 3, 2026",
    link: "https://www.techrepublic.com",
    image: "/images/ot-it-intro.jpg"
  },
  {
    category: "Cloud & Infrastructure",
    headline: "The Rise of 'Agentic SOC' Architectures in Modern Enterprises",
    summary: "Following recent industry conferences, organizations are rapidly adopting AI-driven co-pilots and predictive engines to counter automated, AI-speed threats.",
    source: "Forbes",
    date: "October 1, 2026",
    link: "https://www.forbes.com",
    image: "/images/vis_intro.jpg"
  },
  {
    category: "Software Development",
    headline: "Major Platforms Expand Interactive Plugin Capabilities for Developers",
    summary: "Developers are gaining unprecedented access to create interactive, app-like interfaces directly within major AI chat environments, shifting how users interact with software.",
    source: "Wired",
    date: "September 25, 2026",
    link: "https://www.wired.com",
    image: "/images/laptop_desk_hero.jpg"
  }
];

const upcomingEvents = [
  {
    name: "AWS re:Invent 2026",
    date: "Nov 30 - Dec 4, 2026",
    location: "Las Vegas, NV & Online",
    description: "The largest global cloud computing conference, featuring the latest in cloud infrastructure, machine learning, and enterprise software.",
    website: "https://reinvent.awsevents.com/"
  },
  {
    name: "CES 2027",
    date: "January 5 - 8, 2027",
    location: "Las Vegas, NV",
    description: "The global stage for innovation, showcasing breakthrough technologies in AI, digital health, and smart enterprise solutions.",
    website: "https://www.ces.tech/"
  },
  {
    name: "RSA Conference 2027",
    date: "April 12 - 15, 2027",
    location: "San Francisco, CA",
    description: "Where the world talks security. Gather with industry leaders to explore the shifting landscape of cybersecurity and AI defense.",
    website: "https://www.rsaconference.com/"
  }
];

export default function NewsEventsPage() {
  return (
    <div className="w-full flex flex-col bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#030814] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-bg.jpg')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030814]/80 via-[#030814]/90 to-[#030814]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#00C2E8]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#176BFF] animate-pulse"></span>
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">ALBANIX NEWS & EVENTS</span>
            </div>
            
            <h1 className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-8 leading-[1.05] text-[48px] md:text-[64px] lg:text-[72px]`}>
              LATEST AI & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2E8] to-[#176BFF]">
                TECHNOLOGY NEWS
              </span>
            </h1>
            
            <p className="text-[18px] md:text-[22px] text-white/70 leading-[1.6] font-light max-w-2xl mb-8">
              Stay informed about the latest developments, innovations and events shaping the future of AI and technology.
            </p>
          </div>
        </Container>
      </section>

      {/* LATEST AI NEWS */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-[#176BFF] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">ARTIFICIAL INTELLIGENCE</span>
              <h2 className={`${oswald.className} text-slate-900 text-[36px] md:text-[48px] uppercase leading-[1.1]`}>
                LATEST AI NEWS
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiNews.map((news, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-[#176BFF] text-xs font-bold uppercase tracking-wider rounded-full">
                    {news.category}
                  </span>
                  <div className="text-slate-400">
                    {news.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                  {news.headline}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {news.summary}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-900">{news.source}</span>
                    <span className="text-xs text-slate-500">{news.date}</span>
                  </div>
                  <a 
                    href={news.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-bold text-[#176BFF] hover:text-blue-800 transition-colors"
                  >
                    Read Article <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LATEST TECHNOLOGY NEWS */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-[#00C2E8] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">INDUSTRY UPDATES</span>
              <h2 className={`${oswald.className} text-slate-900 text-[36px] md:text-[48px] uppercase leading-[1.1]`}>
                LATEST TECHNOLOGY NEWS
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techNews.map((news, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  {news.image && (
                    <Image 
                      src={news.image} 
                      alt={news.headline}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#176BFF] transition-colors">
                    {news.headline}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    {news.summary}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-900">{news.source}</span>
                      <span className="text-xs text-slate-500">{news.date}</span>
                    </div>
                    <a 
                      href={news.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-bold text-[#176BFF] hover:text-blue-800 transition-colors"
                    >
                      Read Article <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TECHNOLOGY EVENTS */}
      <section className="py-20 md:py-28 bg-[#030814] relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-[#00C2E8] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">JOIN THE CONVERSATION</span>
            <h2 className={`${oswald.className} text-white text-[36px] md:text-[48px] uppercase leading-[1.1]`}>
              UPCOMING TECHNOLOGY EVENTS
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
                
                {/* Date & Location Box */}
                <div className="shrink-0 md:w-48 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                  <div className="flex items-center text-[#00C2E8] mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-bold">{event.date}</span>
                  </div>
                  <div className="flex items-start text-white/60">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                {/* Event Info */}
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-3">{event.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-2xl">
                    {event.description}
                  </p>
                  <div>
                    <a 
                      href={event.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-[#176BFF] hover:text-[#00C2E8] transition-colors"
                    >
                      View Event <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
