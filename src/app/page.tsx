import FeaturedShoes from "@/components/FeaturedShoes";
import HeroSection from "@/components/HeroSection";
import { MenShoes } from "@/components/MenShoes";
import { Shoes } from "@/components/Shoes";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <MenShoes />
      <Shoes />
      <FeaturedShoes />
    </main>
  );
}
