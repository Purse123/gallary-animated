import React, { useRef } from "react";
import { motion } from "framer-motion";

const Link = (props) => {
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = boxRef.current.getBoundingClientRect();
    console.log({rect})
  }

  return (
    <motion.div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      initial="hidden"
      whileHover="show"
      className="flex justify-between items-center w-full h-full relative"
    >
      <h1 className="montserrat font-bold text-4xl uppercase tracking-wide">
        {props.title}
      </h1>
      <motion.img
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        src={props.url}
        variants={{
          hidden: { scale: 0, rotate: "-10deg" },
          show: {
            scale: 1,
            rotate: "10deg",
          },
        }}
        transition={{
          type: "spring",
        }}
        className=" aspect-video"
      />
      <p className="montserrat font-normal text-xl uppercase tracking-tighter">
        {props.type}
      </p>
    </motion.div>
  );
};

export default Link;
