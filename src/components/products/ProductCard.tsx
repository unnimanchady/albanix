import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  image: string;
  link: string;
  accentColor: string;
  Icon: React.ElementType;
}

export function ProductCard({ product }: { product: ProductData }) {
  const { name, tagline, description, badge, image, link, accentColor, Icon } = product;

  return (
    <div className="group bg-white rounded-[20px] border border-albanix-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden h-full">
      {/* Image Area */}
      <div className="relative h-56 w-full">
        <div className="absolute inset-0 overflow-hidden bg-albanix-light">
          <Image
            src={image}
            alt={`${name} ${badge.toLowerCase()}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        
        {/* Absolute Gradient Overlay for text readability if needed (optional) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-sm border border-white/20">
          <Icon size={14} className={accentColor} />
          <span className="text-xs font-bold text-albanix-primary uppercase tracking-wide">
            {badge}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-extrabold text-albanix-primary mb-2">
          {name}
        </h3>
        <h4 className={`text-sm font-bold mb-4 ${accentColor}`}>
          {tagline}
        </h4>
        <p className="text-base text-albanix-textSecondary mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        
        <Link
          href={link}
          className={`inline-flex items-center text-sm font-bold uppercase tracking-wide transition-colors mt-auto ${accentColor.replace('text-', 'hover:text-').replace('blue-600', 'blue-800')} text-albanix-primary group-hover:${accentColor}`}
        >
          <span className={`group-hover:${accentColor} transition-colors duration-300`}>EXPLORE PRODUCT</span>
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
