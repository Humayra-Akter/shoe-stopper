"use client";
import shoeData from "../data/shoe_description.json";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { Button } from "./ui/moving-border";

interface Shoe {
  id: number;
  name: string;
  details: string;
  price: number;
  category: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedShoes() {
  const featuredShoes = shoeData.shoes.filter((shoe: Shoe) => shoe.isFeatured);

  return (
    <div>
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED SHOES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Unleash Your Inner Fashionista
          </p>
        </div>
      </div>
      <div className="mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredShoes.map((shoe: Shoe) => (
            <div key={shoe.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <Image
                  src={`${shoe.image}`}
                  alt={shoe.name}
                  width={400}
                  height={300}
                />

                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {shoe.name}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-7">
                    {shoe.details}
                  </p>
                  <Link href={`/courses/${shoe.category}`}>
                    <Button
                      borderRadius="1.75rem"
                      className="bg-white dark:bg-slate-900 text-black dark:text-white border-purple-400 dark:border-slate-800 "
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="mt-20 text-center">
        <Link
          href={"/shoes"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Shoes
        </Link>
      </div>
    </div>
  );
}

export default FeaturedShoes;
