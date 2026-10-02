import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Activity, Dumbbell, Utensils, Truck } from "lucide-react";

const quickLinks = [
  {
    title: "TreatAnywhere",
    subtitle: "Healthcare without borders",
    href: "/products/treatanywhere",
    icon: Activity,
  },
  {
    title: "Gym Software",
    subtitle: "Manage. Engage. Grow.",
    href: "/products/gym-mate",
    icon: Dumbbell,
  },
  {
    title: "Restaurant Software",
    subtitle: "From order to customer delight",
    href: "/products/menupilot",
    icon: Utensils,
  },
  {
    title: "Van Sales Software",
    subtitle: "Distribution that moves with you",
    href: "/products/routex",
    icon: Truck,
  },
];

export function ProductQuickLinks() {
  return (
    <section className="relative z-30 bg-albanix-secondary border-y border-white/10">
      <Container className="px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                href={link.href}
                className="group flex flex-row items-center p-6 hover:bg-white/5 transition-colors h-full gap-4"
              >
                <div className="flex-shrink-0 text-albanix-cyan group-hover:text-albanix-aqua transition-colors">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-white mb-0.5 group-hover:text-albanix-cyan transition-colors leading-tight">
                    {link.title}
                  </h3>
                  <p className="text-xs text-albanix-light/70 font-medium leading-snug">
                    {link.subtitle}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
