import { Shoes } from "./Shoes";

function HeroSection() {
  return (
    <div className="my-12 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-[-40rem] text-center">
        <p className="max-w-4xl pr-20 mx-auto text-white text-center text-4xl font-bold">
          Discover a world of unparalleled craftsmanship and design excellence
          at<span className="text-red-500"> Shoe-Stopper</span>
        </p>
      </div>

      {/* <Shoes /> */}
    </div>
  );
}

export default HeroSection;
