"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestimonialCards() {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt auctor sapien, ut dapibus quam. Sed euismod odio non tellus commodo, sed varius sapien tempor.",
    },
    {
      name: "Jane Smith",
      title: "Marketing Manager",
      quote:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut laoreet enim in enim tempus, a sollicitudin ligula consequat.",
    },
    {
      name: "Michael Johnson",
      title: "Software Engineer",
      quote:
        "Integer nec felis nec metus interdum rutrum. Duis non consectetur mi. Nulla facilisi. Maecenas gravida mi id leo molestie, vitae tempor ipsum scelerisque.",
    },
    {
      name: "Emily Brown",
      title: "HR Manager",
      quote:
        "Curabitur ac purus vehicula, faucibus risus in, auctor enim. Proin varius lacinia dui, eu laoreet libero ullamcorper id. Nulla facilisi.",
    },
    {
      name: "David Wilson",
      title: "Sales Representative",
      quote:
        "Duis fermentum, elit id hendrerit luctus, lacus arcu consectetur urna, at faucibus velit enim et purus. Vivamus ut vehicula ipsum.",
    },
    {
      name: "Sarah Thompson",
      title: "Graphic Designer",
      quote:
        "Suspendisse potenti. Nam molestie mauris non enim venenatis, nec finibus est suscipit. Cras at ipsum et arcu fermentum tincidunt sit amet non justo.",
    },
    {
      name: "Robert Martinez",
      title: "Project Manager",
      quote:
        "Fusce ac lectus nec nulla dictum efficitur. Sed quis eros et enim pharetra finibus. Integer mollis eget enim eget elementum.",
    },
    {
      name: "Amanda White",
      title: "Customer Service Representative",
      quote:
        "Proin viverra velit eu orci tincidunt, eget convallis lorem eleifend. Vestibulum in nulla eu nulla elementum suscipit vitae et nunc.",
    },
    {
      name: "Daniel Lee",
      title: "Accountant",
      quote:
        "Vestibulum consectetur interdum libero nec tempus. Nam in purus pretium, consectetur nulla vel, aliquam quam. Aliquam id enim vitae dui tempor dignissim.",
    },
    {
      name: "Jennifer Garcia",
      title: "Product Manager",
      quote:
        "Donec id ultricies felis. Ut dapibus urna eget dui fermentum, vel vehicula tortor rhoncus. Mauris consequat ipsum et leo posuere, vel tristique metus aliquet.",
    },
  ];

  return (
    <div>
      <h1 className="mx-auto text-white text-center text-2xl font-bold">
        Footprints of Satisfaction: Discover Our Customer Reviews
      </h1>
      <div className="h-[26rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.1] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default TestimonialCards;
