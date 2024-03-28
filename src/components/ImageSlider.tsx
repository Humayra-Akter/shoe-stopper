"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function ImageSlider() {
  const images = [
    "https://images.unsplash.com/photo-1663856548834-3b5814f6dc11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxiYVhzS09USlppNHx8ZW58MHx8fHx8",

    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="blue"
          />
          <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-4 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Elevate Your Shoe Game at Shoe-Stopper
            </h1>
            <h1 className="mt-10 md:mt-5 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Where Every Step Counts
            </h1>
            <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              With Shoe-Stopper, every step becomes a celebration of
              individuality, as we bring you the latest trends and timeless
              classics, all under one roof.Explore our diverse range of shoes at
              Shoe-Stopper, where quality meets affordability, and fashion meets
              function.Welcome to Shoe-Stopper, where finding your perfect pair
              is not just a purchase, but a journey towards confidence and
              self-expression.
            </p>
            <div className="mt-6">
              <Link href={"/shoes"}>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 backdrop-blur-sm text-black dark:text-white border-purple-400 dark:border-slate-800"
                >
                  EXPLORE MORE
                </Button>
                {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" /> */}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
