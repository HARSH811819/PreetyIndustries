import React from 'react'
import { motion } from "framer-motion";

function ImageCard({cardImg,width,initial,whileInView}) {
  return (
    <motion.div
    //   initial={{ opacity: 0.0, y: 100 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    initial={initial}
    whileInView={whileInView}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className={`relative flex flex-col  gap-4 items-center justify-center px-4 ${width} h-fit`}
    >
     
        <img src={cardImg} alt="preety_industr" /> 

      

     
    </motion.div>
  )
}

export default ImageCard
