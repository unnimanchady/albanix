'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { useFadeIn } from '@/hooks/useFadeIn';
import { CheckCircle2 } from 'lucide-react';

const comparisonData = [
  {
    product: 'TreatAnywhere',
    industry: 'Healthcare',
    modules: 'Patients, Hospitals, Treatment Marketplace',
  },
  {
    product: 'Gym Mate',
    industry: 'Fitness',
    modules: 'Memberships, Billing, Classes, Trainers',
  },
  {
    product: 'MenuPilot',
    industry: 'Restaurant',
    modules: 'POS, Kitchen, Inventory, Delivery',
  },
  {
    product: 'RouteX',
    industry: 'Distribution',
    modules: 'Van Sales, Inventory, Routes, Collections',
  },
];

export function ProductComparison() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div 
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-albanix-primary mb-4">
              Platform Capabilities
            </h2>
            <p className="text-lg text-albanix-textSecondary">
              Compare core modules across our ecosystem
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-albanix-border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left border-collapse">
                <thead>
                  <tr className="bg-albanix-light border-b border-albanix-border">
                    <th className="py-5 px-6 text-sm font-bold text-albanix-textSecondary uppercase tracking-wider w-1/4">Product</th>
                    <th className="py-5 px-6 text-sm font-bold text-albanix-textSecondary uppercase tracking-wider w-1/4">Industry</th>
                    <th className="py-5 px-6 text-sm font-bold text-albanix-textSecondary uppercase tracking-wider w-2/4">Core Modules</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-albanix-border">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 size={18} className="text-albanix-cyan flex-shrink-0" />
                          <span className="font-bold text-albanix-primary text-base">
                            {row.product}
                          </span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-albanix-textSecondary font-medium">
                        {row.industry}
                      </td>
                      <td className="py-5 px-6 text-albanix-primary">
                        {row.modules}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
