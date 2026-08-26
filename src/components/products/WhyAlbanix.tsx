"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { CheckCircle2 } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export function WhyAlbanix() {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-slate-200">
      <Container>
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-[#00C2E8] font-semibold text-xs tracking-widest uppercase mb-3 block">
            WHY ALBANIX
          </span>
          <h2 className={`${oswald.className} text-slate-900 text-[28px] md:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.2] mx-auto max-w-4xl uppercase`}>
            BUILT FOR THE <br className="md:hidden" />
            REAL WORLD.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {[
            { 
              title: "INTELLIGENT", 
              desc: "Software designed around real business workflows." 
            },
            { 
              title: "CONNECTED", 
              desc: "Bring customers, teams, operations and data together." 
            },
            { 
              title: "SCALABLE", 
              desc: "Platforms designed to grow with your business." 
            },
            { 
              title: "IMPACTFUL", 
              desc: "Technology focused on measurable business outcomes." 
            }
          ].map((reason, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="text-[#176BFF] mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{reason.title}</h4>
                <p className="text-slate-600 text-[16px] leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
