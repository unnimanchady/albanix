"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

const products = [
  {
    id: "treatanywhere",
    name: "TreatAnywhere",
    category: "HEALTHCARE TECHNOLOGY",
    headline: "HEALTHCARE WITHOUT BORDERS",
    description: "A global healthcare platform that connects patients with trusted hospitals and treatment opportunities worldwide.",
    image: "/images/product-treatanywhere.png",
    link: "/#treatanywhere",
    features: [
      "Connect patients with trusted hospitals",
      "Submit treatment requests",
      "Receive hospital treatment proposals",
      "Compare treatment opportunities"
    ],
    color: "text-[#176BFF]",
    bg: "bg-[#176BFF]/10",
  },
  {
    id: "gym-mate",
    name: "Gym Mate",
    category: "FITNESS MANAGEMENT",
    headline: "RUN YOUR FITNESS BUSINESS SMARTER",
    description: "Complete gym management software to streamline memberships, billing, classes, trainers and performance.",
    image: "/images/product-gym.png",
    link: "/#gym-software",
    features: [
      "Membership management",
      "Billing and payments",
      "Classes and schedules",
      "Trainer management",
      "Performance tracking"
    ],
    color: "text-[#00C2E8]",
    bg: "bg-[#00C2E8]/10",
  },
  {
    id: "menupilot",
    name: "MenuPilot",
    category: "RESTAURANT TECHNOLOGY",
    headline: "FROM ORDER TO CUSTOMER DELIGHT",
    description: "Power your restaurant operations with POS, kitchen management, inventory, delivery and analytics.",
    image: "/images/product-restaurant.png",
    link: "/#restaurant-software",
    features: [
      "POS and billing",
      "Kitchen management",
      "Inventory management",
      "Order management",
      "Delivery management",
      "Business analytics"
    ],
    color: "text-[#16D6C5]", // Teal
    bg: "bg-[#16D6C5]/10",
  },
  {
    id: "routex",
    name: "RouteX",
    category: "DISTRIBUTION TECHNOLOGY",
    headline: "DISTRIBUTION THAT MOVES WITH YOU",
    description: "Manage van sales, inventory, routes, orders, collections and customer relationships in real-time.",
    image: "/images/product-van-sales.png",
    link: "/#van-sales-software",
    features: [
      "Van sales",
      "Vehicle inventory",
      "Route management",
      "Customer orders",
      "Collections",
      "Real-time sales visibility"
    ],
    color: "text-[#176BFF]", // Electric blue
    bg: "bg-[#176BFF]/10",
  }
];

export function ProductShowcase() {
  return (
    <section className="bg-white">
      {products.map((product, index) => {
        const isEven = index % 2 !== 0;

        return (
          <div key={product.id} className="py-20 md:py-28 border-b border-slate-200">
            <Container>
              <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <div className="flex-1 w-full order-2 lg:order-none">
                  <span className={`${product.color} font-semibold text-xs tracking-[0.2em] uppercase mb-4 block`}>
                    {product.category}
                  </span>
                  
                  <div className="mb-4 inline-flex items-center space-x-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-700">
                    {product.name}
                  </div>

                  <h2 className={`${oswald.className} text-slate-900 text-[32px] md:text-[40px] lg:text-[46px] leading-[1.1] mb-6 tracking-[-0.5px] uppercase`}>
                    {product.headline}
                  </h2>
                  
                  <p className="text-slate-600 text-[16px] md:text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className={`w-5 h-5 ${product.color} shrink-0 mt-0.5 mr-3`} />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={product.link}
                    className="inline-flex items-center justify-center h-[54px] px-8 bg-[#176BFF] text-white text-[15px] font-bold rounded-[7px] hover:bg-blue-700 hover:shadow-lg shadow-md transition-all group"
                  >
                    EXPLORE PRODUCT <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual Content */}
                <div className="flex-1 w-full order-1 lg:order-none">
                  <div className={`relative h-[320px] sm:h-[400px] md:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 group`}>
                    {/* Decorative Background */}
                    <div className="absolute inset-0 bg-slate-50"></div>
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white to-transparent rounded-bl-full pointer-events-none opacity-40 z-10`}></div>
                    
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
}
