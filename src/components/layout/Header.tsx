"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";
import { 
  ChevronDown, 
  Briefcase, 
  ShoppingCart, 
  LayoutTemplate, 
  Code, 
  PenTool, 
  Wrench,
  ArrowRight
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const isMobileAppsActive = 
    pathname === "/services/ios-development" ||
    pathname === "/services/android-development" ||
    pathname === "/services/cross-platform" ||
    pathname === "/services/app-design" ||
    pathname === "/services/app-maintenance";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

          {/* Websites Mega Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("websites")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("websites")}
              className={`flex items-center px-3 py-2 text-sm font-medium transition-colors relative ${
                activeDropdown === "websites" ? "text-albanix-blue" : "text-white hover:text-albanix-blue"
              }`}
              aria-expanded={activeDropdown === "websites"}
            >
              Websites
              <ChevronDown className={`ml-1 w-4 h-4 text-white transition-transform duration-200 ${activeDropdown === "websites" ? "rotate-180" : ""}`} />
            </button>
            
            {activeDropdown === "websites" && (
              <div 
                className="absolute left-1/2 -translate-x-[40%] lg:-translate-x-[42%] xl:-translate-x-1/2 top-full w-[800px] pt-4"
                ref={dropdownRef}
              >
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden text-gray-800 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-8">
                    <h3 className="text-[11px] font-bold text-gray-500 tracking-wider uppercase mb-1">
                      Websites
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 pb-4 border-b border-gray-100">
                      Modern, high-performance websites built for your business.
                    </p>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                      {[
                        { name: "Business Websites", desc: "Professional websites for companies and organizations", icon: Briefcase, href: "/services/business-websites" },
                        { name: "E-commerce Websites", desc: "Online stores that convert visitors into customers", icon: ShoppingCart, href: "/services/ecommerce" },
                        { name: "WordPress Development", desc: "Flexible WordPress websites and business solutions", icon: LayoutTemplate, href: "/services/wordpress" },
                        { name: "Custom Web Development", desc: "Tailored websites built around your requirements", icon: Code, href: "/services/custom-web" },
                        { name: "Website Redesign", desc: "Modernize outdated websites and improve user experience", icon: PenTool, href: "/services/redesign" },
                        { name: "Website Maintenance", desc: "Ongoing updates, security and technical support", icon: Wrench, href: "/services/maintenance" }
                      ].map((item) => (
                        <Link 
                          key={item.name}
                          href={item.href}
                          className="flex items-start group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-albanix-blue flex items-center justify-center group-hover:bg-albanix-blue group-hover:text-white transition-colors">
                              <item.icon className="w-5 h-5" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-[15px] font-semibold text-slate-900 group-hover:text-albanix-blue transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-[13px] text-gray-500 mt-1 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products Mega Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("products")}
              className={`flex items-center px-3 py-2 text-sm font-medium transition-colors relative ${
                activeDropdown === "products" ? "text-albanix-blue" : "text-white hover:text-albanix-blue"
              }`}
              aria-expanded={activeDropdown === "products"}
            >
              Products
              <ChevronDown className={`ml-1 w-4 h-4 text-white transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180" : ""}`} />
            </button>
            
            {activeDropdown === "products" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] pt-4">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden text-gray-800 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-8">
                    <h3 className="text-[11px] font-bold text-gray-500 tracking-wider uppercase mb-1">
                      SaaS Products
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 pb-4 border-b border-gray-100">
                      Ready-to-use software products designed to help businesses grow.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      <Link 
                        href="/products/treatanywhere"
                        className="col-span-2 group block p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-albanix-blue/30 hover:bg-blue-50/50 transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-albanix-blue transition-colors">TreatAnywhere</h4>
                            <p className="text-sm text-gray-500 mt-1">Healthcare Without Borders</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-albanix-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                      </Link>

                      {[
                        { name: "Gym Mate", desc: "Run Your Fitness Business Smarter", href: "/products/gym-mate" },
                        { name: "MenuPilot", desc: "From Order to Customer Delight", href: "/products/menupilot" },
                        { name: "RouteX", desc: "Distribution That Moves With You", href: "/products/routex" }
                      ].map((item) => (
                        <Link 
                          key={item.name}
                          href={item.href}
                          className="block group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <h4 className="text-[15px] font-semibold text-slate-900 group-hover:text-albanix-blue transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-[13px] text-gray-500 mt-1 leading-snug">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-100">
                      <Link 
                        href="/products"
                        className="text-[14px] font-medium text-albanix-blue hover:text-blue-700 flex items-center transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Products <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Apps Mega Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("apps")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("apps")}
              className={`flex items-center px-3 py-2 text-sm font-medium transition-colors relative ${
                activeDropdown === "apps" || isMobileAppsActive ? "text-albanix-blue" : "text-white hover:text-albanix-blue"
              }`}
              aria-expanded={activeDropdown === "apps"}
            >
              Mobile Apps
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === "apps" ? "rotate-180" : ""} ${activeDropdown === "apps" || isMobileAppsActive ? "text-albanix-blue" : "text-white"}`} />
            </button>
            
            {activeDropdown === "apps" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[650px] pt-4">
                <div className="bg-white rounded-[14px] shadow-2xl border border-gray-100 overflow-hidden text-gray-800 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-8">
                    <h3 className="text-[11px] font-bold text-gray-500 tracking-wider uppercase mb-1">
                      MOBILE APPS
                    </h3>
                    <p className="text-[14px] text-slate-500 mb-6 pb-6 border-b border-gray-100">
                      Modern mobile experiences for iOS and Android.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-x-12">
                      {/* Left Column */}
                      <div className="flex flex-col space-y-8">
                        {[
                          { name: "iOS App Development", desc: "Native-quality applications for Apple devices", href: "/services/ios-development" },
                          { name: "Cross-Platform Apps", desc: "Build once and deliver across iOS and Android", href: "/services/cross-platform" },
                          { name: "App Maintenance", desc: "Updates, improvements and long-term support", href: "/services/app-maintenance" }
                        ].map((item) => (
                          <Link 
                            key={item.name}
                            href={item.href}
                            className="block group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <h4 className="text-[16px] font-semibold text-slate-800 group-hover:text-albanix-blue transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-[14px] text-slate-500 mt-1.5 leading-snug">
                              {item.desc}
                            </p>
                          </Link>
                        ))}
                      </div>

                      {/* Right Column */}
                      <div className="flex flex-col space-y-8">
                        {[
                          { name: "Android App Development", desc: "Modern Android applications for businesses", href: "/services/android-development" },
                          { name: "App UI/UX Design", desc: "User-friendly mobile experiences", href: "/services/app-design" }
                        ].map((item) => (
                          <Link 
                            key={item.name}
                            href={item.href}
                            className="block group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <h4 className="text-[16px] font-semibold text-slate-800 group-hover:text-albanix-blue transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-[14px] text-slate-500 mt-1.5 leading-snug">
                              {item.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Portfolio */}
          <Link
            href="/portfolio"
            className="px-3 py-2 text-sm font-medium text-white hover:text-albanix-blue transition-colors group relative"
          >
            Portfolio
            <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-albanix-blue scale-x-0 transition-transform group-hover:scale-x-100 origin-left rounded-full"></span>
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
                activeDropdown === "company" ? "text-albanix-blue" : "text-white hover:text-albanix-blue"
              }`}
              aria-expanded={activeDropdown === "company"}
            >
              Company
              <ChevronDown className={`ml-1 w-4 h-4 text-white transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180" : ""}`} />
            </button>
            
            {activeDropdown === "company" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[400px] pt-4">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-6 px-6 text-gray-800 animate-in fade-in slide-in-from-top-2 duration-150">
                  <h3 className="text-[11px] font-bold text-gray-500 tracking-wider uppercase mb-4">
                    Company
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { name: "About Us", desc: "Who we are and what we build", href: "/about" },
                      { name: "Careers", desc: "Build what's next with us", href: "/careers" },
                      { name: "Contact Us", desc: "Let's discuss your project", href: "/contact" }
                    ].map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href}
                          className="block group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <h4 className="text-[15px] font-semibold text-slate-900 group-hover:text-albanix-blue transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-[13px] text-gray-500 mt-1">
                            {item.desc}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

        </nav>

        {/* Right CTA & Mobile Nav */}
        <div className="flex items-center space-x-4 z-[110]">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-6 h-[44px] bg-albanix-blue text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 active:scale-95 group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="ml-2 w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
