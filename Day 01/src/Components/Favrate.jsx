import RecipeCard from "./RecipeCard";
import { motion } from "framer-motion";

function Favrate() {
  const data = JSON.parse(localStorage.getItem("fav"));

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

export default Favrate;
