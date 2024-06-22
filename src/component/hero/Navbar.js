import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      const newIsMobileView = window.innerWidth < 768;
      setIsMobileView(newIsMobileView);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Dynamically typed links 
  const links = ["Services", "Gallery", "Contact"];

  const location = useLocation();
  const containerVariants = {
    hidden: { opacity: 0, y: -45 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.3,
        delay: 2.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={location.pathname === "/" ? "hidden" : ""}
      animate="show"
      className="w-full h-14 pl-10 pt-2 pr-16 fixed top-0 left-0 bg-transparent items-center z-50 flex justify-between"
    >
      <Link to="/" className="font-extrabold text-2xl text-orange-500">
        Purse
      </Link>

      <Sidebar links={links} />
      {!isMobileView && (
        <ul className="flex gap-14">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={`/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default Navbar;
