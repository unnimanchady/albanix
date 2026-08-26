import React from "react";
import { Container } from "@/components/ui/Container";
import { Cloud, Smartphone, BarChart3, ShieldCheck, Puzzle, Headset } from "lucide-react";

const capabilities = [
  {
    title: "Cloud Powered",
    description: "Scalable, secure and always available.",
    icon: Cloud,
  },
  {
    title: "Mobile Ready",
    description: "Work from anywhere on any device.",
    icon: Smartphone,
  },
  {
    title: "Data Driven",
    description: "Insights and analytics that drive growth.",
    icon: BarChart3,
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security you can trust.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Integration",
    description: "Connect with your existing tools.",
    icon: Puzzle,
  },
  {
    title: "Reliable Support",
    description: "We're with you at every step.",
    icon: Headset,
  },
];

export function TechnologyFoundation() {
  return (
    <section className="py-24 bg-albanix-primary">
      <Container>
        <div className="text-center mb-16">
          <div className="mb-4 text-albanix-blue font-bold tracking-wider text-sm uppercase">
            ONE TECHNOLOGY FOUNDATION
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Powerful technology. Seamless experience.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-12 md:gap-y-16 lg:divide-x divide-white/10">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className={`flex flex-col items-center text-center px-4 ${
                  index !== 0 && index % 3 !== 0 ? "md:border-l md:border-white/10 lg:border-none" : ""
                }`}
              >
                <div className="text-albanix-cyan mb-6">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {cap.title}
                </h4>
                <p className="text-sm text-albanix-light/70 font-medium leading-relaxed max-w-[200px] mx-auto">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
