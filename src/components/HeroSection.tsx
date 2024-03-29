"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

function HeroSection() {
  return (
    <>
      <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
        <TextRevealCard
          text="Finding your perfect pair is not just a purchase"
          revealText="But a journey towards confidence and self-expression"
        >
          <p className="pr-20 mx-auto text-white text-center text-2xl font-bold">
            Discover a world of unparalleled craftsmanship and design excellence
            at<span className="text-red-500"> Shoe-Stopper</span>
          </p>
        </TextRevealCard>
      </div>
    </>
  );
}

export default HeroSection;
