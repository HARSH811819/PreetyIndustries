"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function CustomersMovingCards({
  cardImg,
  testimonials,
  speed,
  direction
  
}) {

    
  return (
    <div className="h-[40rem] w-full rounded-md flex flex-col antialiased dark:bg-black  items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
    cardImg={cardImg}
      items={testimonials}
      direction={direction}
      speed={speed}
      
    />
  </div>
  )
}

export default CustomersMovingCards
