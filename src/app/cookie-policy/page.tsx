import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Cookie Policy | Albanix",
  description: "Cookie Policy for the Albanix website. Learn how we use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 pt-[100px] md:pt-[120px] pb-20">
      <Container>
        <div className="max-w-[850px] mx-auto">
          {/* Header */}
          <div className="mb-12 border-b border-slate-200 pb-8">
            <h1 className={`${oswald.className} text-[40px] md:text-[56px] text-[#0B1736] uppercase leading-tight mb-6`}>
              Cookie Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Albanix uses cookies and similar technologies to help our website work properly and improve your browsing experience.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-10">
            
            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                1. What Are Cookies?
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Cookies are small files stored on your device when you visit a website. They help websites remember preferences and understand how the website is used.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                2. How We Use Cookies
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We may use cookies to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Keep the website functioning properly</li>
                <li>Remember preferences</li>
                <li>Understand website usage</li>
                <li>Improve website performance</li>
              </ul>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                3. Managing Cookies
              </h2>
              <p className="text-slate-700 leading-relaxed">
                You can manage or disable cookies through your browser settings. Disabling some cookies may affect certain website features.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                4. Third-Party Services
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Some services used by our website may use their own cookies according to their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                5. Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have questions about our Cookie Policy, contact us:
              </p>
              <div className="text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="font-bold text-[#0B1736] mb-1">Albanix</p>
                <p className="mb-4">
                  No. 17/2259<br />
                  Seaport - Airport Road<br />
                  CSEZ P.O<br />
                  Kakkanad, Kochi<br />
                  Kerala - 682037<br />
                  India
                </p>
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
