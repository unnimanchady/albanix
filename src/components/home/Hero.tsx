"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { HeartPulse, Dumbbell, Utensils, Truck } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if videos are already ready (e.g. from cache) to prevent infinite loading
    if (desktopVideoRef.current && desktopVideoRef.current.readyState >= 3) {
      setIsVideoReady(true);
    } else if (mobileVideoRef.current && mobileVideoRef.current.readyState >= 3) {
      setIsVideoReady(true);
    }
  }, []);

  const handleVideoReady = () => setIsVideoReady(true);
  const handleVideoError = () => setIsVideoReady(true); // Fallback to reveal hero if video fails

  return (
    <section 
      className="relative w-full flex items-center overflow-hidden bg-[#010816]"
      style={{ minHeight: "600px", height: "100vh" }}
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Mobile Video Background */}
        <video 
          ref={mobileVideoRef}
          src="/albanix-video.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          onCanPlay={handleVideoReady}
          onLoadedData={handleVideoReady}
          onError={handleVideoError}
        />
        
        {/* Desktop Video Background */}
        <video 
          ref={desktopVideoRef}
          src="/albanix-video1.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          style={{ objectPosition: "center center" }}
          onCanPlay={handleVideoReady}
          onLoadedData={handleVideoReady}
          onError={handleVideoError}
        />
        
        {/* Desktop Layered dark overlay */}
        <div 
          className="absolute inset-0 z-10 hidden md:block pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(1, 8, 22, 0.96) 0%, rgba(1, 8, 22, 0.82) 27%, rgba(1, 8, 22, 0.38) 50%, rgba(1, 8, 22, 0.08) 75%, rgba(1, 8, 22, 0.15) 100%)'
          }}
        />
        
        {/* Urban Bite Glow Overlay */}
        <div className="absolute z-10 top-[35%] right-[20%] w-[120px] h-[80px] bg-red-500/40 blur-[24px] mix-blend-screen hidden lg:block rounded-full pointer-events-none" />
      </div>

      <Container className="relative z-20 w-full h-full flex flex-col pt-[120px] lg:pt-[15vh] pb-8 lg:pb-12">
        {/* Main Content Area */}
        <div className="max-w-[620px] lg:ml-[5%] flex-grow hidden md:flex flex-col justify-center">
          <h1 
            className={`${oswald.className} text-[#F5F7FA] uppercase tracking-[-0.5px] mb-6 leading-[1.02] text-[28px] md:text-[clamp(42px,3.2vw,56px)]`}
          >
            SOFTWARE FOR A <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #08E0E8 0%, #009DFF 100%)'
              }}
            >
              WORLD
            </span> IN MOTION.
          </h1>
          
          <p className="text-[15px] lg:text-[16px] text-white max-w-[500px] mb-10 leading-[1.5] font-normal hidden md:block">
            Powerful software platforms for healthcare,<br className="hidden md:block" />
            fitness, hospitality and distribution<br className="hidden md:block" />
            businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="#products"
              className="flex items-center justify-center h-[44px] px-6 bg-[#0066FF] text-white text-[13px] font-bold rounded-[7px] hover:bg-blue-600 transition-all w-full sm:w-auto text-center"
            >
              EXPLORE OUR PRODUCTS <span className="ml-2 font-normal">&rarr;</span>
            </Link>
            <button
              onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
              className="flex items-center justify-center h-[44px] px-6 bg-transparent border border-[#64748B]/60 text-white text-[13px] font-bold rounded-[7px] hover:bg-white/10 transition-all w-full sm:w-auto text-center"
            >
              ASK HANI <span className="ml-2 font-normal">&rarr;</span>
            </button>
          </div>
        </div>

        {/* 4 Product Categories */}
        <div className="mt-auto lg:ml-[5%] lg:w-[68%] hidden lg:flex items-start">
          <div className="flex-1 flex flex-col items-start px-6 first:pl-0 border-r border-white/20 last:border-r-0">
            <HeartPulse className="text-[#08E0E8] mb-3" size={24} strokeWidth={1.5} />
            <h3 className="text-white font-bold text-[14px] mb-1">TreatAnywhere</h3>
            <p className="text-[#94A3B8] text-[13px] leading-[1.45]">
              Healthcare<br />without borders
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start px-6 border-r border-white/20 last:border-r-0">
            <Dumbbell className="text-[#0066FF] mb-3" size={24} strokeWidth={1.5} />
            <h3 className="text-white font-bold text-[14px] mb-1">Gym Software</h3>
            <p className="text-[#94A3B8] text-[13px] leading-[1.45]">
              Manage. Engage.<br />Grow.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start px-6 border-r border-white/20 last:border-r-0">
            <Utensils className="text-[#08E0E8] mb-3" size={24} strokeWidth={1.5} />
            <h3 className="text-white font-bold text-[14px] mb-1">Restaurant Software</h3>
            <p className="text-[#94A3B8] text-[13px] leading-[1.45]">
              From order to<br />delight
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start px-6 border-r border-white/20 last:border-r-0">
            <Truck className="text-[#0066FF] mb-3" size={24} strokeWidth={1.5} />
            <h3 className="text-white font-bold text-[14px] mb-1">Van Sales Software</h3>
            <p className="text-[#94A3B8] text-[13px] leading-[1.45]">
              Distribution that<br />moves with you
            </p>
          </div>
        </div>

        {/* Mobile Product Categories */}
        <div className="mt-auto lg:hidden grid grid-cols-2 gap-4 w-full">
           <div className="flex flex-col gap-2 p-4 bg-black/20 border border-white/10 rounded-lg">
            <HeartPulse className="text-[#08E0E8]" size={20} />
            <div>
              <h3 className="text-white font-bold text-[13px]">TreatAnywhere</h3>
              <p className="text-gray-400 text-[12px] leading-tight mt-1">Healthcare without borders</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-black/20 border border-white/10 rounded-lg">
            <Dumbbell className="text-[#0066FF]" size={20} />
            <div>
              <h3 className="text-white font-bold text-[13px]">Gym Software</h3>
              <p className="text-gray-400 text-[12px] leading-tight mt-1">Manage. Engage. Grow.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-black/20 border border-white/10 rounded-lg">
            <Utensils className="text-[#08E0E8]" size={20} />
            <div>
              <h3 className="text-white font-bold text-[13px]">Restaurant Software</h3>
              <p className="text-gray-400 text-[12px] leading-tight mt-1">From order to delight</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-black/20 border border-white/10 rounded-lg">
            <Truck className="text-[#0066FF]" size={20} />
            <div>
              <h3 className="text-white font-bold text-[13px]">Van Sales Software</h3>
              <p className="text-gray-400 text-[12px] leading-tight mt-1">Distribution that moves with you</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Preloader Layer (Moved here to sit above Container's z-20) */}
      <div 
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#010816] transition-opacity duration-[800ms] ease-in-out ${
          isVideoReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative flex flex-col items-center motion-safe:animate-pulse">
          <Image
            src="/images/albanix-logo.png"
            alt="ALBANIX"
            width={220}
            height={62}
            priority
            className="h-auto w-[160px] md:w-[200px] object-contain"
          />
          <div className="mt-8 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#08E0E8] to-transparent motion-safe:animate-pulse" />
          <span className="mt-3 text-[10px] text-white/40 uppercase tracking-[0.2em] font-semibold">Loading</span>
        </div>
      </div>
      
    </section>
  );
}
