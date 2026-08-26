import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MessageSquarePlus } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 bg-albanix-primary">
      <Container>
        <div className="bg-gradient-to-r from-albanix-blue to-albanix-cyan rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 lg:gap-8">
            <div className="flex-shrink-0 bg-white/10 p-4 rounded-full border border-white/20 text-white">
              <MessageSquarePlus size={48} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight">
                Let's build the right solution for your business.
              </h2>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Talk to our experts and see how Albanix can help you grow.
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
            <Link
              href="#contact"
              className="flex items-center justify-center w-full lg:w-auto px-8 py-4 bg-white text-albanix-blue font-bold rounded-md hover:bg-albanix-light hover:shadow-lg transition-all"
            >
              TALK TO US &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
