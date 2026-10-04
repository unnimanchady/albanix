import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Terms of Use | Albanix",
  description: "Terms of Use for the Albanix website, products, services and digital platforms.",
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 pt-[100px] md:pt-[120px] pb-20">
      <Container>
        <div className="max-w-[850px] mx-auto">
          {/* Header */}
          <div className="mb-12 border-b border-slate-200 pb-8">
            <h1 className={`${oswald.className} text-[40px] md:text-[56px] text-[#0B1736] uppercase leading-tight mb-6`}>
              Terms of Use
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Welcome to Albanix. These Terms of Use explain the rules and conditions for using the Albanix website, products, services and digital platforms.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-10">
            
            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-700 leading-relaxed">
                By accessing or using the Albanix website and services, you agree to these Terms of Use. If you do not agree with these terms, please do not use the website.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                2. Use of Our Website
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Users agree to use the website lawfully and responsibly.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                You must not:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Use the website for unlawful purposes</li>
                <li>Attempt to gain unauthorized access</li>
                <li>Interfere with website security or functionality</li>
                <li>Copy or misuse website content</li>
                <li>Upload harmful or malicious material</li>
              </ul>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                3. Our Services
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Albanix provides software development, website development, mobile application development and software products.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Service availability, features and specifications may change from time to time.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                4. Intellectual Property
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                All Albanix branding, logos, website content, designs, software, graphics, text and other materials are owned by Albanix or used with appropriate permission.
              </p>
              <p className="text-slate-700 leading-relaxed">
                You may not reproduce, modify, distribute or commercially use our intellectual property without permission.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                5. User-Submitted Information
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Information submitted through contact forms or other website features should be accurate and lawful.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Users are responsible for the information they submit.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                6. Third-Party Links
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The Albanix website may contain links to third-party websites or services.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Albanix is not responsible for the content, availability or policies of third-party websites.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                7. Disclaimer
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The website and its information are provided for general informational purposes.
              </p>
              <p className="text-slate-700 leading-relaxed">
                While Albanix aims to keep information accurate and up to date, we do not guarantee that all information will always be complete, accurate or continuously available.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                8. Limitation of Liability
              </h2>
              <p className="text-slate-700 leading-relaxed">
                To the extent permitted by applicable law, Albanix will not be responsible for indirect, incidental or consequential losses arising from the use of the website or services.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                9. Changes to These Terms
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Albanix may update these Terms of Use from time to time.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Any updated version will be published on this page with a revised date.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                10. Governing Law
              </h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms of Use shall be governed by the applicable laws of India.
              </p>
            </section>

            <section>
              <h2 className={`${oswald.className} text-2xl text-[#176BFF] uppercase tracking-wide mb-4`}>
                11. Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have questions regarding these Terms of Use, contact:
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
