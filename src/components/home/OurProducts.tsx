import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Activity, Dumbbell, Utensils, Truck, ArrowRight } from "lucide-react";

const products = [
  {
    title: "TreatAnywhere",
    subtitle: "Healthcare Without Borders",
    description: "A global healthcare platform that connects patients with trusted hospitals and treatment opportunities worldwide.",
    href: "#treatanywhere",
    image: "/images/product-treatanywhere.png",
    alt: "TreatAnywhere healthcare platform",
    icon: Activity,
  },
  {
    title: "Gym Mate",
    subtitle: "Run Your Fitness Business Smarter",
    description: "Complete gym management software to streamline memberships, billing, classes, trainers and performance.",
    href: "#gym-software",
    image: "/images/product-gym.png",
    alt: "Gym Mate gym management software",
    icon: Dumbbell,
  },
  {
    title: "MenuPilot",
    subtitle: "From Order to Customer Delight",
    description: "Power your restaurant operations with POS, kitchen management, inventory, delivery and analytics.",
    href: "#restaurant-software",
    image: "/images/product-restaurant.png",
    alt: "MenuPilot restaurant management software",
    icon: Utensils,
  },
  {
    title: "RouteX",
    subtitle: "Distribution That Moves With You",
    description: "Manage van sales, inventory, routes, orders, collections and customer relationships in real-time.",
    href: "#van-sales",
    image: "/images/product-van-sales.png",
    alt: "RouteX van sales and distribution software",
    icon: Truck,
  },
];

export function OurProducts() {
  return (
    <section className="pt-[100px] lg:pt-[120px] pb-[80px] lg:pb-[100px] bg-[#F5F8FC]">
      <Container className="max-w-[1250px] mx-auto px-4 md:px-6">
        <div className="text-center flex flex-col items-center">
          <div className="mb-[20px] text-albanix-blue font-bold tracking-[0.15em] text-[14px] lg:text-[16px] uppercase">
            OUR PRODUCTS
          </div>
          <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold text-albanix-primary mb-[14px] leading-[1.1] max-w-none">
            Software platforms for every industry.
          </h2>
          <p className="text-[18px] lg:text-[22px] text-albanix-blue font-bold mb-[60px]">
            Integrated. Intelligent. Impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group bg-white rounded-[16px] border border-slate-200/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-[6px] transition-all duration-300 flex flex-col overflow-hidden h-full"
              >
                {/* Image Area */}
                <div className="relative w-full aspect-[16/9] lg:h-[220px] xl:h-[240px]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  {/* Icon Badge overlapping image and content */}
                  <div className="absolute -bottom-6 left-6 w-[48px] h-[48px] bg-albanix-cyan rounded-md flex items-center justify-center text-white shadow-md z-10 border-4 border-white transition-transform duration-300">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 pt-10 flex flex-col flex-grow bg-white relative z-0">
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-albanix-primary mb-1">
                    {product.title}
                  </h3>
                  <h4 className="text-[14px] lg:text-[16px] font-bold text-albanix-primary mb-3">
                    {product.subtitle}
                  </h4>
                  <p className="text-[14px] lg:text-[15px] text-slate-500 mb-8 flex-grow leading-[1.6]">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-[13px] text-albanix-cyan font-bold hover:text-albanix-blue transition-colors mt-auto uppercase tracking-wide group/link"
                  >
                    EXPLORE PRODUCT 
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-[44px] px-8 bg-albanix-cyan text-white text-[13px] font-bold rounded-[7px] hover:bg-albanix-blue transition-colors uppercase tracking-wide"
          >
            EXPLORE OUR PRODUCTS <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
