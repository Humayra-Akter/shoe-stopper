import FeaturedShoes from "@/components/FeaturedShoes";
import HeroSection from "@/components/HeroSection";
import { ImageSlider } from "@/components/ImageSlider";
import { MenShoes } from "@/components/MenShoes";
import { Shoes } from "@/components/Shoes";
import { SVGMaskEffect } from "@/components/SVGMaskEffect";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <ImageSlider />
      <div className="flex items-center justify-center mt-24">
        <SVGMaskEffect />
        <HeroSection />
      </div>

      <div className="flex items-center justify-center">
        <MenShoes />
      </div>
      <Shoes />
      <FeaturedShoes />
    </main>
  );
}
