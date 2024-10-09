import React from "react";
import { motion } from "framer-motion";
function Heading({ 
  value = "Demo", 
  classes, 
  transit = false,initial={ opacity: 0.0, y: 70 }, 
  whileInView={ opacity: 1, y: 0 },
  ...props }) {
  return transit ? (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className=" flex flex-col gap-4 items-center justify-center px-4 h-full w-full "
    >
      <h1 className={` text-4xl my-8 text-wrap ${classes}`}>{value}</h1>
    </motion.div>
  ) : (
    <h1 className={`text-4xl my-8 text-wrap ${classes}`}>{value}</h1>
  );
}

export default Heading;
