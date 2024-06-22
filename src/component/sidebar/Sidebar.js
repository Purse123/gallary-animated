import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobileView = window.innerWidth < 768;
      setIsMobileView(newIsMobileView);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarBgVariant = {
    hide: {
      clipPath: "circle(25px at 90% 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    show: {
      clipPath: "circle(1200px at 85% 30px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
  };
  return (
    <>
      {isMobileView ? (
        <motion.div
          className="fixed top-0 right-0 bg-white w-[400px] h-screen text-black cursor-pointer"
          variants={sidebarBgVariant}
          animate={menuToggle ? "show" : "hide"}
        >
          <div
            className="hamburger z-[9999] top-7 right-[27px] absolute"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <div className="w-7 h-6 flex flex-col justify-around">
              <span
                className={`w-full h-1 rounded-2xl bg-black transition-all duration-300 ease-in-out ${
                  menuToggle ? " translate-y-[8px] rotate-[-45deg]" : ""
                }`}
              ></span>
              <span
                className={`w-full h-1 rounded-2xl bg-black transition-all duration-300 ease-in-out ${
                  menuToggle ? " opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-1 rounded-2xl bg-black transition-all duration-300 ease-in-out ${
                  menuToggle ? "translate-y-[-8px] rotate-45" : ""
                }`}
              ></span>
            </div>
          </div>
          {menuToggle ? (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 300,
              }}
              className="text-black w-full h-full flex items-center justify-center flex-col gap-24"
            >
              {props.links.map((link, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-bold text-3xl"
                >
                  <Link to={`/${link.toLowerCase()}`} onClick={() => setMenuToggle(false)}>{link}</Link>
                </motion.span>
              ))}
            </motion.div>
          ) : null}
        </motion.div>
      ) : null}
    </>
  );
};

export default Sidebar;
