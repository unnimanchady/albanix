'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { ProductCard, ProductData } from './ProductCard';
import { Activity, Dumbbell, Utensils, Truck } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

const productsData: ProductData[] = [
  {
    id: 'treatanywhere',
    name: 'TreatAnywhere',
    tagline: 'Healthcare Without Borders',
    description: 'A global healthcare platform that connects patients with trusted hospitals and treatment opportunities worldwide.',
    badge: 'Healthcare Technology',
    image: '/images/product-treatanywhere.png',
    link: '/products/treatanywhere',
    accentColor: 'text-blue-500', // Medical blue
    Icon: Activity,
  },
  {
    id: 'gym-mate',
    name: 'Gym Mate',
    tagline: 'Run Your Fitness Business Smarter',
    description: 'Complete gym management software to streamline memberships, billing, classes, trainers and performance.',
    badge: 'Fitness Management',
    image: '/images/product-gym.png',
    link: '/products/gym-mate',
    accentColor: 'text-albanix-cyan', // Energetic cyan
    Icon: Dumbbell,
  },
  {
    id: 'menupilot',
    name: 'MenuPilot',
    tagline: 'From Order to Customer Delight',
    description: 'Power your restaurant operations with POS, kitchen management, inventory, delivery and analytics.',
    badge: 'Restaurant Technology',
    image: '/images/product-restaurant.png',
    link: '/products/menupilot',
    accentColor: 'text-teal-500', // Elegant teal
    Icon: Utensils,
  },
  {
    id: 'routex',
    name: 'RouteX',
    tagline: 'Distribution That Moves With You',
    description: 'Manage van sales, inventory, routes, orders, collections and customer relationships in real-time.',
    badge: 'Distribution Software',
    image: '/images/product-van-sales.png',
    link: '/products/routex',
    accentColor: 'text-albanix-blue', // Modern electric blue
    Icon: Truck,
  },
];

export function ProductsGrid() {
  const { ref, isVisible } = useFadeIn(0.05);

  return (
    <section id="products-grid" className="py-20 md:py-24 bg-white relative z-10">
      <Container>
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
