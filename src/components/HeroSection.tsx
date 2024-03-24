import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Elevate Your Shoe Game at Shoe-Stopper
        </h1>
        <h1 className="mt-10 md:mt-5 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Where Every Step Counts
        </h1>
        <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          With Shoe-Stopper, every step becomes a celebration of individuality,
          as we bring you the latest trends and timeless classics, all under one
          roof.Explore our diverse range of shoes at Shoe-Stopper, where quality
          meets affordability, and fashion meets function.Welcome to
          Shoe-Stopper, where finding your perfect pair is not just a purchase,
          but a journey towards confidence and self-expression.
        </p>
        <div className="mt-6">
          <Link href={"/shoes"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-purple-400 dark:border-slate-800"
            >
              EXPLORE MORE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
