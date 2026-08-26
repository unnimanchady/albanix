"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";
import { ChevronDown } from "lucide-react";
import { Chatbot } from "@/components/features/Chatbot";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenChatbot = () => setIsChatbotOpen(true);
    window.addEventListener("open-chatbot", handleOpenChatbot);
    return () => window.removeEventListener("open-chatbot", handleOpenChatbot);
  }, []);

  // Handle click outside and Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg py-2 lg:py-3 border-b border-white/10"
          : "bg-black py-3 lg:py-4"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative flex items-center shrink-0 z-[110]"
          onClick={() => setActiveDropdown(null)}
        >
          {!logoError ? (
            <Image
              src="/images/albanix-logo.png"
              alt="Albanix - Innovate. Build. Elevate."
              width={460}
              height={130}
              priority
              className="h-auto w-[140px] md:w-[170px] lg:w-[190px] object-contain opacity-100"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-2xl font-bold tracking-tight text-white opacity-100">
              ALBANIX<span className="text-albanix-blue">.</span>
            </span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav 
          ref={navRef}
          className="hidden md:flex items-center space-x-1 lg:space-x-4 xl:space-x-8"
        >
          {/* Products */}
          <Link
            href="/products"
            className="px-3 py-2 text-sm font-medium text-white hover:text-albanix-cyan transition-colors group relative"
          >
            Products
            <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-albanix-cyan scale-x-0 transition-transform group-hover:scale-x-100 origin-left rounded-full"></span>
          </Link>

          {/* Capabilities Mega Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("capabilities")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("capabilities")}
              className={`flex items-center px-3 py-2 text-sm font-medium transition-colors relative ${
                activeDropdown === "capabilities" ? "text-albanix-cyan" : "text-white hover:text-albanix-cyan"
              }`}
              aria-expanded={activeDropdown === "capabilities"}
            >
              Capabilities
              <ChevronDown className={`ml-1 w-4 h-4 text-white transition-transform duration-200 ${activeDropdown === "capabilities" ? "rotate-180" : ""}`} />
            </button>
            
            {/* Mega Menu Dropdown */}
            {activeDropdown === "capabilities" && (
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-full w-[700px] lg:w-[800px] pt-4"
                ref={dropdownRef}
              >
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden text-gray-800 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 p-8 gap-12">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-5 border-b border-gray-100 pb-2">
                        Industrial Intelligence & Capabilities
                      </h3>
                      <ul className="space-y-4">
                        {[
                          { name: "Industrial AI", href: "/industrial-ai" },
                          { name: "Embedded Systems", href: "/products/embedded-systems" },
                          { name: "Data & Integrations (OT↔IT)", href: "/data-integrations-ot-it" },
                          { name: "Visualization (2D/3D/IFC/Unity)", href: "#visualization" },
                          { name: "Workflow Orchestration", href: "#workflow-orchestration" }
                        ].map((item) => (
                          <li key={item.name}>
                            <Link 
                              href={item.href}
                              className="text-[15px] font-medium text-gray-600 hover:text-albanix-blue transition-colors flex items-center group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-albanix-cyan/50 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-5 border-b border-gray-100 pb-2">
                        Engineering & Product Development
                      </h3>
                      <ul className="space-y-4">
                        {["App Development", "Modern App Engineering", "DevOps & SRE", "Security & Compliance"].map((item) => (
                          <li key={item}>
                            <Link 
                              href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                              className="text-[15px] font-medium text-gray-600 hover:text-albanix-blue transition-colors flex items-center group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-albanix-cyan/50 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Technology */}
          <Link
            href="#technology"
            className="px-3 py-2 text-sm font-medium text-white hover:text-albanix-cyan transition-colors group relative"
          >
            Technology
            <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-albanix-cyan scale-x-0 transition-transform group-hover:scale-x-100 origin-left rounded-full"></span>
          </Link>

          {/* Company */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("company")}
              className={`flex items-center px-3 py-2 text-sm font-medium transition-colors relative ${
                activeDropdown === "company" ? "text-albanix-cyan" : "text-white hover:text-albanix-cyan"
              }`}
              aria-expanded={activeDropdown === "company"}
            >
              Company
              <ChevronDown className={`ml-1 w-4 h-4 text-white transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180" : ""}`} />
            </button>
            
            {activeDropdown === "company" && (
              <div className="absolute left-0 top-full w-56 pt-2">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 text-gray-800 animate-in fade-in slide-in-from-top-2 duration-200">
                  <ul className="space-y-1">
                    {["About Us", "Site Map"].map((item) => (
                      <li key={item}>
                        <Link 
                          href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-albanix-blue hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Get in Touch */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("contact")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("contact")}
              className={`flex items-center px-3 py-2 text-sm font-medium transition-colors relative ${
                activeDropdown === "contact" ? "text-albanix-cyan" : "text-white hover:text-albanix-cyan"
              }`}
              aria-expanded={activeDropdown === "contact"}
            >
              Get in Touch
              <ChevronDown className={`ml-1 w-4 h-4 text-white transition-transform duration-200 ${activeDropdown === "contact" ? "rotate-180" : ""}`} />
            </button>
            
            {activeDropdown === "contact" && (
              <div className="absolute left-0 top-full w-56 pt-2">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 text-gray-800 animate-in fade-in slide-in-from-top-2 duration-200">
                  <ul className="space-y-1">
                    {["Contact Us", "Careers"].map((item) => (
                      <li key={item}>
                        <Link 
                          href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-albanix-blue hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Blog */}
          <Link
            href="#blog"
            className="px-3 py-2 text-sm font-medium text-white hover:text-albanix-cyan transition-colors group relative"
          >
            Blog
            <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-albanix-cyan scale-x-0 transition-transform group-hover:scale-x-100 origin-left rounded-full"></span>
          </Link>
        </nav>

        {/* Right CTA & Mobile Nav */}
        <div className="flex items-center space-x-4 z-[110]">
          <button
            onClick={() => setIsChatbotOpen(true)}
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-albanix-blue text-white text-sm font-semibold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all active:scale-95"
          >
            ASK HANI &rarr;
          </button>
          <MobileNavigation />
        </div>
      </Container>
    </header>
    {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
    </>
  );
}
