"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import shoeData from "../data/shoe_description.json";
import Image from "next/image";

interface Shoe {
  id: number;
  name: string;
  details: string;
  price: number;
  category: string;
  isFeatured: boolean;
  image: string;
}

export function Shoes() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {shoeData.shoes.map((item) => (
        <BentoGridItem
          key={item.id}
          title={item.name}
          description={item.details}
          header={
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
            />
          }
          className={item.id === 3 || item.id === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
