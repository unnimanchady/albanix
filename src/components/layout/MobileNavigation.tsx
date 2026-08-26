"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

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
        className="p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-albanix-cyan rounded-md text-white hover:text-albanix-cyan"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Full screen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-black z-[100] flex flex-col pt-8 px-6 animate-in slide-in-from-right-full duration-300 shadow-xl overflow-y-auto pb-8">
          <nav className="flex flex-col space-y-6">
            
            {/* Products */}
            <Link
              href="/products"
              className="text-2xl font-medium text-white hover:text-albanix-cyan transition-colors"
              onClick={closeMenu}
            >
              Products
            </Link>

            {/* Capabilities Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleAccordion("capabilities")}
                className="flex items-center justify-between text-2xl font-medium text-white hover:text-albanix-cyan transition-colors"
              >
                Capabilities
                <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${openAccordion === "capabilities" ? "rotate-180" : ""}`} />
              </button>
              
              {openAccordion === "capabilities" && (
                <div className="mt-4 pl-4 flex flex-col space-y-5 animate-in slide-in-from-top-2 duration-200 border-l-2 border-albanix-secondary">
                  <div>
                    <h3 className="text-sm font-bold text-albanix-cyan tracking-wider uppercase mb-3">
                      Industrial Intelligence & Capabilities
                    </h3>
                    <ul className="flex flex-col space-y-3">
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
                            className="text-lg text-albanix-light hover:text-white transition-colors block py-1"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-albanix-cyan tracking-wider uppercase mb-3">
                      Engineering & Product Development
                    </h3>
                    <ul className="flex flex-col space-y-3">
                      {["App Development", "Modern App Engineering", "DevOps & SRE", "Security & Compliance"].map((item) => (
                        <li key={item}>
                          <Link 
                            href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            className="text-lg text-albanix-light hover:text-white transition-colors block py-1"
                            onClick={closeMenu}
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

            {/* Technology */}
            <Link
              href="#technology"
              className="text-2xl font-medium text-white hover:text-albanix-cyan transition-colors"
              onClick={closeMenu}
            >
              Technology
            </Link>

            {/* Company Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleAccordion("company")}
                className="flex items-center justify-between text-2xl font-medium text-white hover:text-albanix-cyan transition-colors"
              >
                Company
                <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${openAccordion === "company" ? "rotate-180" : ""}`} />
              </button>
              
              {openAccordion === "company" && (
                <div className="mt-4 pl-4 flex flex-col space-y-3 animate-in slide-in-from-top-2 duration-200 border-l-2 border-albanix-secondary">
                  {["About Us", "Site Map"].map((item) => (
                    <Link 
                      key={item}
                      href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-lg text-albanix-light hover:text-white transition-colors block py-1"
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Get in Touch Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleAccordion("contact")}
                className="flex items-center justify-between text-2xl font-medium text-white hover:text-albanix-cyan transition-colors"
              >
                Get in Touch
                <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${openAccordion === "contact" ? "rotate-180" : ""}`} />
              </button>
              
              {openAccordion === "contact" && (
                <div className="mt-4 pl-4 flex flex-col space-y-3 animate-in slide-in-from-top-2 duration-200 border-l-2 border-albanix-secondary">
                  {["Contact Us", "Careers"].map((item) => (
                    <Link 
                      key={item}
                      href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-lg text-albanix-light hover:text-white transition-colors block py-1"
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              href="#blog"
              className="text-2xl font-medium text-white hover:text-albanix-cyan transition-colors"
              onClick={closeMenu}
            >
              Blog
            </Link>

          </nav>
          
          <div className="mt-auto pt-10 border-t border-albanix-secondary">
            <button
              onClick={() => {
                closeMenu();
                window.dispatchEvent(new Event("open-chatbot"));
              }}
              className="w-full flex items-center justify-center bg-albanix-blue text-white py-4 rounded-md text-lg font-semibold hover:bg-blue-500 transition-colors"
            >
              ASK HANI &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
