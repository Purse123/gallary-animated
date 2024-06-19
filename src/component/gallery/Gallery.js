import React from "react";
import { images } from "./imageData";
import Link from "./Link";
import transition from "../page_transition/Transition";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-28 w-full bg-neutral-800">
      {images.map((image) => (
        <motion.div 
        initial={{
          opacity: 0,
          y: "50%"
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          type: "spring",
          stiffness: 10,
          duration: 2.25,
          delay: 0.75
        }}
        key={image.id} 
        className="h-28 w-4/5 flex items-center justify-center border-b-[1px] border-neutral-50">
          <Link title={image.title} type={image.catagory} url={image.url}/>
        </motion.div>
      ))}
    </div>
  );
};

export default transition(Gallery);
