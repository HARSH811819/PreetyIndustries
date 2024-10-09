"use client";
import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import BannerBG from '../../assets/Images/BannerBG.jpg'
import { motion } from "framer-motion";

function Banner() {
  return (
    <div
    className="relative top-0 h-[500px]  sm:h-[100vh] sm:top-0 sm:h-[100vh] "

    style={{backgroundImage:`url(${BannerBG})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}
    >
    <motion.div
      initial={{ opacity: 0.0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className=" flex flex-col gap-4 items-center justify-center px-4 h-full w-full "
      
    >
      <img src={logo} width={"20%"} className="w-[50%] md:w-[30%] " alt="preety_industr" />
      <div className="text-3xl md:text-7xl font-bold dark:text-white text-center  text-green-700" style={{textShadow: " 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white"}}>
        PREETY INDUSTRIES
      </div>
      {/* <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div> */}
    </motion.div>

    </div>
  );
}

export default Banner;
