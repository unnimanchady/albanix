import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Users, Cloud, ShieldCheck } from "lucide-react";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function AboutAlbanix() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-1 lg:order-none relative z-10">
            <div className="mb-4 text-albanix-blue font-bold tracking-wider text-sm uppercase">
              ABOUT ALBANIX
            </div>
            <h2 className={`${oswald.className} text-3xl md:text-4xl lg:text-5xl text-albanix-primary mb-6 leading-tight uppercase`}>
              We build technology <br className="hidden md:block" />
              around how businesses <br className="hidden md:block" />
              actually work.
            </h2>
            <p className="text-lg text-albanix-textSecondary mb-10 leading-relaxed">
              Albanix creates industry-focused software platforms designed to simplify operations, connect people and help businesses grow. From healthcare and fitness to hospitality and distribution, we turn complex everyday processes into simple digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {/* Strength 1 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-albanix-blue/10 flex items-center justify-center mb-4 text-albanix-blue border border-albanix-blue/20">
                  <Users size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-bold text-albanix-primary mb-2 leading-tight">
                  Industry Focused
                </h4>
                <p className="text-sm text-albanix-textSecondary leading-relaxed">
                  Software designed around real operational workflows.
                </p>
              </div>

              {/* Strength 2 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-albanix-blue/10 flex items-center justify-center mb-4 text-albanix-blue border border-albanix-blue/20">
                  <Cloud size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-bold text-albanix-primary mb-2 leading-tight">
                  Built to Scale
                </h4>
                <p className="text-sm text-albanix-textSecondary leading-relaxed">
                  Cloud-ready platforms that grow with your business.
                </p>
              </div>

              {/* Strength 3 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-albanix-blue/10 flex items-center justify-center mb-4 text-albanix-blue border border-albanix-blue/20">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-bold text-albanix-primary mb-2 leading-tight">
                  One Technology Partner
                </h4>
                <p className="text-sm text-albanix-textSecondary leading-relaxed">
                  From idea and development to deployment and support.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-albanix-blue font-bold hover:text-blue-700 transition-colors"
            >
              DISCOVER ALBANIX &rarr;
            </Link>
          </div>

          {/* Visual Area */}
          <div className="relative w-full h-[400px] lg:h-[600px] bg-albanix-light rounded-2xl border border-albanix-border flex items-center justify-center overflow-hidden order-2 lg:order-none">
            
            {/* Abstract shape placeholders as a fallback behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-albanix-light to-white opacity-80 z-0"></div>
            <div className="relative z-0 w-48 h-48 bg-albanix-primary/5 rounded-full flex items-center justify-center border border-albanix-border/50 shadow-inner">
              <div className="w-32 h-32 bg-albanix-primary/10 rounded-full border border-white"></div>
            </div>

            <Image
              src="/images/albanix-lady.webp"
              alt="Albanix Professional"
              fill
              className="object-cover z-10"
            />
            
            {/* Decorative background elements */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-albanix-cyan/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-albanix-blue/10 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
