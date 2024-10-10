import React from "react";
import { motion } from "framer-motion";

function GoogleMap({
    animate = true
}) {
  return animate?(
    <motion.div
      initial={{ opacity: 0.0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className=""
    >
      <div className="p-3 rounded-2xl bg-gray-600/45  w-[95%] mx-auto my-8">
        <iframe
          className="w-full rounded-2xl "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.0136415216634!2d79.41732617537198!3d28.986966775473007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07f2ee8de359b%3A0x3ae95f5088ef906f!2sPreety%20Industries!5e0!3m2!1sen!2sin!4v1728544239633!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  ):(
      <div className="p-3 rounded-2xl bg-gray-600/45  w-[95%] mx-auto my-8">
        <iframe
          className="w-full rounded-2xl "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.0136415216634!2d79.41732617537198!3d28.986966775473007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07f2ee8de359b%3A0x3ae95f5088ef906f!2sPreety%20Industries!5e0!3m2!1sen!2sin!4v1728544239633!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

  )
}

export default GoogleMap;
