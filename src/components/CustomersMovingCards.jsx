"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";

function CustomersMovingCards({
  cardImg,
  testimonials,
  speed,
  direction,
  animate=false,
  initial={ opacity: 0.0, y: 70 }, 
  whileInView={ opacity: 1, y: 0 },
  
}) {

    
  return animate?(
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className=" "
    >
      
    <div className="h-[40rem] w-full rounded-md flex flex-col antialiased dark:bg-black  items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
    cardImg={cardImg}
      items={testimonials}
      direction={direction}
      speed={speed}
      
    />
  </div>
    </motion.div>
  ):(
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
