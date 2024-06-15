import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Link = (props) => {
  const boxRef = useRef(null);

  const xPosition = useMotionValue(0);
  const yPosition = useMotionValue(0);

  const xSpring = useSpring(xPosition);
  const ySpring = useSpring(yPosition);

  const imgTop = useTransform(ySpring, [0.5, -0.5], ["40%", "60%"]);
  const imgLeft = useTransform(xSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = boxRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPer = mouseX / width - 0.5;
    const yPer = mouseY / height - 0.5;

    xPosition.set(xPer);
    yPosition.set(yPer);
  };

  useEffect(() => {
    const updateMouseMove = (e) => {
      if (boxRef.current) {
        handleMouseMove(e);
      }
    };
    const currentBoxRef = boxRef.current;
    if (currentBoxRef) {
      currentBoxRef.addEventListener("mousemove", updateMouseMove);
    }
    return () => {
      if (currentBoxRef) {
        currentBoxRef.removeEventListener("mousemove", updateMouseMove);
      }
    };
  }, [boxRef]);

  return (
    <motion.div
      ref={boxRef}
      initial="hidden"
      whileHover="show"
      className="flex justify-between items-center w-full h-full relative"
    >
      <h1 className="montserrat font-bold text-4xl uppercase tracking-wide">
        {props.title}
      </h1>
      <motion.img
        style={{
          top: imgTop,
          left: imgLeft,
          position: "absolute",
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
        className="aspect-video z-50 pointer-events-none"
      />
      <p className="montserrat font-normal text-xl uppercase tracking-tighter">
        {props.type}
      </p>
    </motion.div>
  );
};

export default Link;
