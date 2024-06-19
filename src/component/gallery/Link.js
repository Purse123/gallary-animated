import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Link = ({ title, url, type }) => {
  const boxRef = useRef(null);

  const xPosition = useMotionValue(0);
  const yPosition = useMotionValue(0);

  const imgTop = useTransform(yPosition, [0.5, -0.5], ["40%", "60%"]);
  const imgLeft = useTransform(xPosition, [0.5, -0.5], ["40%", "60%"]);

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
    const currentBoxRef = boxRef.current;
    if (currentBoxRef) {
      currentBoxRef.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (currentBoxRef) {
        currentBoxRef.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [boxRef, handleMouseMove]);

  const animDuration = 0.25;
  const animStagger = 0.025;
  return (
    <motion.div
      ref={boxRef}
      initial="hidden"
      whileHover="show"
      className="flex justify-between items-center w-full h-full relative"
    >
      <motion.div className="montserrat font-bold text-4xl uppercase tracking-wide relative block overflow-hidden whitespace-nowrap">
        <div>
          {title.split("").map((letter, index) => { 
            return (
              <motion.span
              className="inline-block"
                variants={{
                  hidden: {
                    y: 0,
                  },
                  show: {
                    y: "-100%",
                  },
                }}
                transition={{
                  duration: animDuration,
                  ease: 'easeInOut',
                  delay: animStagger * index
                }}
                key={index}
              >
                {letter}
              </motion.span>
            );
          })}
        </div>
        <div className="text-orange-500 absolute inset-0">
          {title.split("").map((letter, index) => {
            return (
              <motion.span
              className="inline-block"
                variants={{
                  hidden: {
                    y: "100%",
                  },
                  show: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: animDuration,
                  ease: 'easeInOut',
                  delay: animStagger * index
                }}
                key={index}
              >
                {letter}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
      <motion.img
        style={{
          top: imgTop,
          left: imgLeft,
          position: "absolute",
          translateX: "-50%",
          translateY: "-50%",
        }}
        src={url}
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
        {type}
      </p>
    </motion.div>
  );
};

export default Link;
