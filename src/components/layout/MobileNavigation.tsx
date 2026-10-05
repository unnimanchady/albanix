"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenAccordion(null);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-albanix-blue rounded-md text-white hover:text-albanix-blue"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Full screen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-black z-[100] flex flex-col pt-8 px-6 animate-in slide-in-from-right-full duration-300 shadow-xl overflow-y-auto pb-8">
          <nav className="flex flex-col space-y-6">
            
            {/* Home */}
            <Link
              href="/"
              className="text-2xl font-medium text-white hover:text-albanix-blue transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Websites Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleAccordion("websites")}
                className="flex items-center justify-between text-2xl font-medium text-white hover:text-albanix-blue transition-colors"
              >
                Websites
                <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${openAccordion === "websites" ? "rotate-180" : ""}`} />
              </button>
              
              {openAccordion === "websites" && (
                <div className="mt-4 pl-4 flex flex-col space-y-3 animate-in slide-in-from-top-2 duration-200 border-l-2 border-white/10">
                  {[
                    { name: "Business Websites", href: "/services/business-websites" },
                    { name: "E-commerce Websites", href: "/services/ecommerce" },
                    { name: "WordPress Development", href: "/services/wordpress" },
                    { name: "Custom Web Development", href: "/services/custom-web" },
                    { name: "Website Redesign", href: "/services/redesign" },
                    { name: "Maintenance & Support", href: "/services/maintenance" }
                  ].map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      className="text-lg text-gray-400 hover:text-white transition-colors block py-1"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleAccordion("products")}
                className="flex items-center justify-between text-2xl font-medium text-white hover:text-albanix-blue transition-colors"
              >
                Products
                <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${openAccordion === "products" ? "rotate-180" : ""}`} />
              </button>
              
              {openAccordion === "products" && (
                <div className="mt-4 pl-4 flex flex-col space-y-3 animate-in slide-in-from-top-2 duration-200 border-l-2 border-white/10">
                  {[
                    { name: "TreatAnywhere", href: "/products/treatanywhere" },
                    { name: "Gym Mate", href: "/products/gym-mate" },
                    { name: "MenuPilot", href: "/products/menupilot" },
                    { name: "RouteX", href: "/products/routex" },
                    { name: "All Products", href: "/products" }
                  ].map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      className={`text-lg transition-colors block py-1 ${item.name === "TreatAnywhere" ? "text-albanix-blue font-medium" : "text-gray-400 hover:text-white"}`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Apps Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleAccordion("apps")}
                className="flex items-center justify-between text-2xl font-medium text-white hover:text-albanix-blue transition-colors"
              >
                Mobile Apps
                <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${openAccordion === "apps" ? "rotate-180" : ""}`} />
              </button>
              
              {openAccordion === "apps" && (
                <div className="mt-4 pl-4 flex flex-col space-y-3 animate-in slide-in-from-top-2 duration-200 border-l-2 border-white/10">
                  {[
                    { name: "iOS Apps", href: "/services/ios-development" },
                    { name: "Android Apps", href: "/services/android-development" },
                    { name: "Cross-Platform Apps", href: "/services/cross-platform" },
                    { name: "App UI/UX Design", href: "/services/app-design" },
                    { name: "App Maintenance", href: "/services/app-maintenance" }
                  ].map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      className="text-lg text-gray-400 hover:text-white transition-colors block py-1"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Portfolio */}
            <Link
              href="/portfolio"
              className="text-2xl font-medium text-white hover:text-albanix-blue transition-colors"
              onClick={closeMenu}
            >
              Portfolio
            </Link>

            {/* Branding */}
            <Link
              href="/branding"
              className={`text-2xl font-medium transition-colors ${
                pathname === "/branding" ? "text-albanix-blue" : "text-white hover:text-albanix-blue"
              }`}
              onClick={closeMenu}
            >
              Branding
            </Link>

            {/* Company Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleAccordion("company")}
                className="flex items-center justify-between text-2xl font-medium text-white hover:text-albanix-blue transition-colors"
              >
                Company
                <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${openAccordion === "company" ? "rotate-180" : ""}`} />
              </button>
              
              {openAccordion === "company" && (
                <div className="mt-4 pl-4 flex flex-col space-y-3 animate-in slide-in-from-top-2 duration-200 border-l-2 border-white/10">
                  {[
                    { name: "About Us", href: "/about" },
                    { name: "Careers", href: "/careers" },
                    { name: "Contact Us", href: "/contact" }
                  ].map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      className="text-lg text-gray-400 hover:text-white transition-colors block py-1"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </nav>
          
          <div className="mt-auto pt-10 border-t border-white/10 px-4 pb-4">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="w-full flex items-center justify-center h-[48px] bg-albanix-blue text-white rounded-full text-base font-semibold hover:bg-blue-600 transition-all duration-300 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="ml-2 w-[15px] h-[15px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
