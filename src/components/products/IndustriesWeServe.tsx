'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Activity, Dumbbell, Utensils, Truck } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

const industries = [
  {
    name: 'Healthcare',
    description: 'Empowering global treatment networks.',
    icon: Activity,
  },
  {
    name: 'Fitness',
    description: 'Streamlining gym operations and memberships.',
    icon: Dumbbell,
  },
  {
    name: 'Restaurants',
    description: 'Optimizing orders, kitchens and delivery.',
    icon: Utensils,
  },
  {
    name: 'Distribution',
    description: 'Managing routes, sales and inventory on the go.',
    icon: Truck,
  },
];

export function IndustriesWeServe() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 bg-white">
      <Container>
        <div 
          ref={ref}
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-albanix-border pb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-albanix-primary">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-albanix-cyan mt-4 md:mt-0 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-albanix-border">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center pt-8 sm:pt-0 px-4 group">
                  <div className="w-16 h-16 rounded-full bg-albanix-light flex items-center justify-center text-albanix-primary mb-5 group-hover:bg-albanix-cyan group-hover:text-white transition-colors duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-albanix-primary mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-albanix-textSecondary">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
