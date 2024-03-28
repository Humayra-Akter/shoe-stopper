import FeaturedShoes from "@/components/FeaturedShoes";
import HeroSection from "@/components/HeroSection";
import { MenShoes } from "@/components/MenShoes";
import { Shoes } from "@/components/Shoes";
import { EvervaultCard } from "@/components/ui/evervault-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="flex mt-28">
        <HeroSection />
        <EvervaultCard />
      </div>
      <div className="flex items-center justify-center">
        <MenShoes />
      </div>
      <Shoes />
      <FeaturedShoes />
    </main>
  );
}
