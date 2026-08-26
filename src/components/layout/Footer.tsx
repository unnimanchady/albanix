import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Linkedin, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
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
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-albanix-cyan hover:border-albanix-cyan transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-albanix-cyan hover:border-albanix-cyan transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-albanix-cyan hover:border-albanix-cyan transition-colors" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-albanix-cyan hover:border-albanix-cyan transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-bold text-albanix-blue uppercase tracking-wider mb-6">Products</h4>
            <ul className="space-y-4">
              <li><Link href="#treatanywhere" className="text-sm text-albanix-light/80 hover:text-white transition-colors">TreatAnywhere</Link></li>
              <li><Link href="#gym-software" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Gym Software</Link></li>
              <li><Link href="#restaurant-software" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Restaurant Software</Link></li>
              <li><Link href="#van-sales" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Van Sales Software</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-albanix-blue uppercase tracking-wider mb-6">Industries</h4>
            <ul className="space-y-4">
              <li><Link href="#healthcare" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="#fitness" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Fitness</Link></li>
              <li><Link href="#hospitality" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Hospitality</Link></li>
              <li><Link href="#distribution" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Distribution</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-albanix-blue uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about-us" className="text-sm text-albanix-light/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#careers" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#partners" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="#contact" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-albanix-blue uppercase tracking-wider mb-6">Insights</h4>
            <ul className="space-y-4">
              <li><Link href="#blog" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#case-studies" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#resources" className="text-sm text-albanix-light/80 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="#events" className="text-sm text-albanix-light/80 hover:text-white transition-colors">News & Events</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info (Bottom row on desktop or interspersed on mobile depending on grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-y border-white/10 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-albanix-cyan">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-albanix-light/50 font-medium uppercase tracking-wider mb-1">Call Us</p>
              <p className="text-sm text-white">+1 (212) 555-0199</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-albanix-cyan">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-albanix-light/50 font-medium uppercase tracking-wider mb-1">Email Us</p>
              <p className="text-sm text-white">hello@albanix.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-albanix-cyan">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-albanix-light/50 font-medium uppercase tracking-wider mb-1">Visit Us</p>
              <p className="text-sm text-white">New York, USA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-albanix-light/50">
            &copy; {new Date().getFullYear()} Albanix. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#privacy" className="text-xs text-albanix-light/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="text-xs text-albanix-light/50 hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#cookie-policy" className="text-xs text-albanix-light/50 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
