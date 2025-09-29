import React, { useContext } from "react";
import { RecipiesContext } from "../Context/Recipe";
import RecipeCard from "../Components/RecipeCard"; // Assuming you create this new component
import { motion } from "framer-motion";

function Recipies() {
  const [data] = useContext(RecipiesContext);

  // Animation container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Stagger the animation of children by 0.1s
        staggerChildren: 0.1,
      },
    },
  };

  // Improved loading/empty state display
  if (!data) {
    return <p className="text-white text-center mt-20 text-2xl">Loading Recipes...</p>;
  }
  if (data.length === 0) {
    return <p className="text-gray-600 text-center mt-82 text-2xl">No recipes found. 😕</p>;
  }

  return (
    <motion.div
      className="max-w-7xl mx-auto p-4 md:p-8 mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </motion.div>
  );
}

export default Recipies;