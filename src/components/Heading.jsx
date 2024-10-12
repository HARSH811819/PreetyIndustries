import React from "react";
import { motion } from "framer-motion";
function Heading({ 
  value = "Demo", 
  classes, 
  animate = false,
  initial={ opacity: 0.0, y: 70 }, 
  whileInView={ opacity: 1, y: 0 },
  ...props }) {
  return animate ? (
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
      <h1 className={` text-4xl my-8 text-wrap ${classes}`}>{value}</h1>
    </motion.div>
  ) : (
    <h1 className={`text-4xl my-8 text-wrap ${classes}`}>{value}</h1>
  );
}

export default Heading;
