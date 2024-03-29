"use client";
import { MaskContainer } from "./ui/svg-mask-effect";
import { useState, useEffect } from "react";

export function SVGMaskEffect() {
  const images = [
    "/images/featured/1.jpg",
    "/images/featured/2.jpg",
    "/images/featured/3.jpg",
    "/images/featured/4.jpg",
    "/images/featured/5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="h-[30rem] w-full flex items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-3xl mx-auto text-white text-center text-4xl font-bold">
            Shoe-Stopper, where quality meets affordability &fashion meets
            function.
          </p>
        }
        revealImageUrl={images[currentImageIndex]}
        className="h-[40rem] border rounded-md"
      >
        <span className="text-red-500"> Shoe-Stopper </span> where quality meets
        <span className="text-red-500"> affordability </span>& fashion meets
        <span className="text-red-500"> function</span>.
      </MaskContainer>
    </div>
  );
}
