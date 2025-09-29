import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/recipies", label: "Recipes" },
  { path: "/about", label: "About" },
  { path: "/create-recipes", label: "Create Recipe", isButton: true },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 flex justify-center p-4 z-50 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      
      <div
        className={`flex items-center gap-2 p-2 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/60 backdrop-blur-lg shadow-lg"
            : "bg-gray-800/80"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full
               ${
                 link.isButton
                   ? "bg-orange-500 text-white hover:bg-orange-600" 
                   : isActive
                   ? "text-white"
                   : "text-gray-400 hover:text-white"
               }`
            }
          >
            {({ isActive }) => (
              <>
               
                {isActive && !link.isButton && (
                  <motion.div
                    className="absolute inset-0 bg-gray-600 rounded-full z-[-1]"
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;