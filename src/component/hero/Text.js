import React from "react";
import { motion } from "framer-motion";

const Text = () => {
  return (
    <motion.div
      initial={{
        y: "100%",
        opacity: 0,
      }}
      animate={{
        y: "0",
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 1,
          staggerChildren: 0.4,
          delayChildren: 1,
        },
      }}
      className="text-white absolute"
      style={{
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="text-container w-screen">
        <motion.div
          initial={{
            x: 0,
          }}
          animate= {{
            x: '-5%',
            transition: {
              ease: "easeInOut",
              duration: 1.5,
              delay: 1,
            },
          }}
          className="pl-[25%] uppercase text-5xl md:text-7xl lg:text-8xl xl:text-9xl sm:text-7xl font-extrabold tracking-tighter"
        >
          Trying
        </motion.div>
        <motion.div 
        initial={{
          x: 0,
        }}
        animate= {{
          x: '5%',
          transition: {
            ease: "easeInOut",
            duration: 1.5,
            delay: 1,
          },
        }}
        className="pl-[5%] sm:pl-[25%] uppercase text-5xl md:text-7xl lg:text-8xl xl:text-9xl sm:text-7xl font-extrabold tracking-tighter">
          Animations
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Text;
