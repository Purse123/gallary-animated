import { motion } from "framer-motion";

const randomBlockDelay = (rowIndex, totalRow) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRow - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const transition = (OrgComp) => {
  return() => (
    <>
      <OrgComp />
      <div className="fixed top-0 left-0 h-screen w-screen flex flex-col pointer-events-none">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex-1 w-full flex">
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: randomBlockDelay(rowIndex, 10),
                }}
                className="relative flex flex-1 bg-slate-400 m-[-0.25px] origin-top"
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="fixed top-0 left-0 h-screen w-screen flex flex-col pointer-events-none">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex-1 w-full flex">
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: randomBlockDelay(rowIndex, 10),
                }}
                className="relative flex flex-1 bg-slate-400 m-[-0.25px] origin-bottom"
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default transition;