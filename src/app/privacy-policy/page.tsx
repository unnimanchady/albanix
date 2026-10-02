import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Privacy Policy | Albanix",
  description: "Privacy Policy for Albanix. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 pt-[100px] md:pt-[120px] pb-20">
      <Container>
        <div className="max-w-[850px] mx-auto">
          {/* Header */}
          <div className="mb-12 border-b border-slate-200 pb-8">
            <h1 className={`${oswald.className} text-[40px] md:text-[56px] text-[#0B1736] uppercase leading-tight mb-6`}>
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Your privacy matters to us. This Privacy Policy explains how Albanix collects, uses and protects information when you use our website and services.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-10">
            
            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                1. Information We Collect
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Explain that Albanix may collect information such as:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Information submitted through contact forms</li>
                <li>Basic website usage information</li>
              </ul>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                2. How We Use Information
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Explain that information may be used to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Respond to enquiries</li>
                <li>Provide requested services</li>
                <li>Improve our website and services</li>
                <li>Communicate with users</li>
                <li>Maintain website security</li>
              </ul>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                3. Cookies
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Explain that the website may use cookies and similar technologies to improve functionality and understand website usage.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                4. Information Sharing
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                State that Albanix does not sell personal information.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Information may only be shared when necessary to provide services, operate the website, comply with legal requirements, or protect the website and users.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                5. Data Security
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Explain that reasonable measures are taken to protect information from unauthorized access, misuse or disclosure.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                6. Third-Party Services
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Explain that Albanix may use third-party services for hosting, analytics, communication or other website functionality. Those services may process information according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                7. Your Rights
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Users may contact Albanix to ask about their personal information or request correction or deletion where applicable.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                8. Contact Us
              </h2>
              <div className="text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="font-bold text-[#0B1736] mb-1">Albanix</p>
                <p className="mb-4">Kakkanad, Kochi, Kerala 682037, India</p>
                <p>
                  <span className="font-semibold">Email: </span>
                  <a href="mailto:info@albanix.com" className="text-[#176BFF] hover:underline">
                    info@albanix.com
                  </a>
                </p>
              </div>
            </section>

          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Last Updated: October 2026
            </p>
          </div>

        </div>
      </Container>
    </div>
  );
}
