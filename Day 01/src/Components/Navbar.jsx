import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Define navigation links as an array of objects for easier management
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/recipies", label: "Recipes" },
  { path: "/about", label: "About" },
  { path: "/create-recipes", label: "Create Recipe", isButton: true }, // Special style for this one
];

function Navbar() {
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user has scrolled more than 20px, otherwise false
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
            // The function inside `className` receives { isActive } from NavLink
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full
               ${
                 link.isButton
                   ? "bg-orange-500 text-white hover:bg-orange-600" // Button style
                   : isActive
                   ? "text-white" // Active link text color
                   : "text-gray-400 hover:text-white" // Inactive link text color
               }`
            }
          >
            {({ isActive }) => (
              <>
                {/* This is the animated "pill" that slides behind the active link.
                  'layoutId' is the magic that tells framer-motion to animate between elements.
                */}
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