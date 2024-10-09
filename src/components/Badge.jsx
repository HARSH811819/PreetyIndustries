import React from "react";
import { Heading, Paragraph } from "./index";
import { motion } from "framer-motion";

function Badge({ heading, text, classes, ...props }) {
  return (
    <motion.div
   
      initial={{ opacity: 0.0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
      }}
      className="relative flex flex-col  items-center justify-center "
    >
      <div
        className={`badge-box w-[80%] mb-12 sm:w-[300px] h-[400px] bg-gradient-to-b shadow-lg from-teal-400 to-gray-800 ${classes}`}
      >
        <Heading value={heading} classes={"text-xl font-bold"} />
        <Paragraph childrens={text} classes={" text-white text-centre"} />
      </div>
    </motion.div>
  );
}

export default Badge;
