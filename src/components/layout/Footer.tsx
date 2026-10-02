"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Linkedin, Facebook, Instagram, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "TreatAnywhere", href: "/products/treatanywhere" },
      { name: "Gym Software", href: "/products/gym-mate" },
      { name: "Restaurant Software", href: "/products/menupilot" },
      { name: "Van Sales Software", href: "/products/routex" },
    ]
  },
  {
    title: "Industries",
    links: [
      { name: "Healthcare", href: "/products" },
      { name: "Fitness", href: "/products" },
      { name: "Hospitality", href: "/products" },
      { name: "Distribution", href: "/products" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Sitemap", href: "/sitemap" },
      { name: "Contact Us", href: "/contact" },
    ]
  },
  {
    title: "Insights",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Resources", href: "#resources" },
      { name: "News & Events", href: "#events" },
    ]
  }
];

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="bg-albanix-primary pt-20 pb-10 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Logo & Socials */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 relative w-[160px] h-[36px]">
              <Image
                src="/images/albanix-logo.png"
                alt="ALBANIX Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-albanix-light/70 mb-8 max-w-sm leading-relaxed">
              Albanix creates industry-focused software platforms designed to simplify operations, connect people and help businesses grow.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook-placeholder" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-albanix-cyan hover:border-albanix-cyan transition-colors" aria-label="Facebook" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/albanixtech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-albanix-cyan hover:border-albanix-cyan transition-colors" aria-label="Instagram" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/albanix/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-albanix-cyan hover:border-albanix-cyan transition-colors" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#twitter-placeholder" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-albanix-cyan hover:border-albanix-cyan transition-colors" aria-label="Twitter / X" title="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="hidden md:block">
              <h4 className="text-sm font-bold text-albanix-blue uppercase tracking-wider mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-albanix-light/80 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Mobile Links Accordions */}
          <div className="block md:hidden col-span-1 space-y-1">
            {footerLinks.map((section) => (
              <div key={section.title} className="border-b border-white/10">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full py-4 text-left"
                >
                  <span className="text-sm font-bold text-albanix-blue uppercase tracking-wider">
                    {section.title}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-albanix-light/50 transition-transform duration-300 ${openSection === section.title ? 'rotate-180 text-white' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSection === section.title ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-4 pt-1">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="block text-sm text-albanix-light/80 hover:text-white transition-colors py-1">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-y border-white/10 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-albanix-cyan shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-albanix-light/50 font-medium uppercase tracking-wider mb-1">Call Us</p>
              <div className="text-sm text-white space-y-1">
                <div><a href="tel:+918075313023" className="hover:text-albanix-cyan transition-colors" aria-label="Call Prakash at +91 8075 313 023">+91 8075 313 023</a> — Prakash</div>
                <div><a href="tel:+919633021373" className="hover:text-albanix-cyan transition-colors" aria-label="Call Siyad at +91 9633 021 373">+91 9633 021 373</a> — Siyad</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-albanix-cyan shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-albanix-light/50 font-medium uppercase tracking-wider mb-1">Email Us</p>
              <p className="text-sm text-white">
                <a href="mailto:info@albanix.com" className="hover:text-albanix-cyan transition-colors">info@albanix.com</a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-albanix-cyan shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-albanix-light/50 font-medium uppercase tracking-wider mb-1">Visit Us</p>
              <p className="text-sm text-white leading-relaxed">
                No. 17/2259<br />
                Seaport - Airport Road<br />
                CSEZ, PO<br />
                Kakkanad, Kochi<br />
                Kerala 682037<br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-albanix-light/50">
            &copy; {new Date().getFullYear()} Albanix. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="text-xs text-albanix-light/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-xs text-albanix-light/50 hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/cookie-policy" className="text-xs text-albanix-light/50 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
