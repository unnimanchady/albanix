import { Hero } from "@/components/home/Hero";
import { AboutAlbanix } from "@/components/home/AboutAlbanix";
import { OurProducts } from "@/components/home/OurProducts";
import { TechnologyFoundation } from "@/components/home/TechnologyFoundation";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutAlbanix />
      <OurProducts />
      <TechnologyFoundation />
      <ContactCTA />
    </>
  );
}
